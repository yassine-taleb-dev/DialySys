import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass, NgIf, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SeanceService } from '../../../services/seance.service';
import { OrdonnanceService } from '../../../services/ordonnance.service';
import { ConstantesVitalesService } from '../../../services/constantes-vitales.service';
import { AuthService } from '../../../services/auth.service';
import { SeanceDto } from '../../../models/seance-dto';
import { OrdonnanceDto } from '../../../models/ordonnance-dto';
import { ConstantesVitalesDto } from '../../../models/constantes-vitales-dto';
import { Utilisateur, getFullName, getInitials } from '../../../models/utilisateur';

interface AssignedPatient {
  id: number;
  seanceId: number;
  currentConstantesId: number | null;
  initials: string;
  name: string;
  machine: string;
  status: 'post' | 'active' | 'waiting';
  heureDebut: string;
  heureFin: string;
  ordonnances: Ordonnance[];
}

interface Ordonnance {
  id: number;
  date: string;
  medicament: string;
  posologie: string;
  medecin: string;
}

interface ScheduledDay { date: string; patients: AssignedPatient[]; }
interface CalCell { date: string; day: number; today: boolean; scheduled: boolean; patientCount: number; }
interface ConstantesForm { tensionSys: number | null; tensionDia: number | null; poids: number | null; bpm: number | null; notes: string; }
interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }

@Component({
  selector: 'app-aide-soignant',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, FormsModule, SlicePipe],
  templateUrl: './aide-soignant.component.html',
  styleUrl: './aide-soignant.component.scss'
})
export class AideSoignantComponent implements OnInit {
  readonly moisLabels = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
  readonly dayNames = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

  loading = true;
  currentUser: Utilisateur | null = null;
  currentUserName = 'Aide-soignant';
  currentUserInitials = 'AS';

  get todayDisplay(): string {
    const d = new Date();
    const j = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    return `${j[d.getDay()]}, ${d.getDate()} ${this.moisLabels[d.getMonth()]} ${d.getFullYear()}`;
  }

  private tid = 0;
  toasts: Toast[] = [];
  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }
  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }
  toastIcon(type: string): string { return ({ success: 'check_circle', warning: 'warning', error: 'error', info: 'info' } as Record<string,string>)[type] ?? 'info'; }

  calYear  = new Date().getFullYear();
  calMonth = new Date().getMonth();
  selectedCalDate = '';
  scheduledDays: ScheduledDay[] = [];
  private ordonnancesByPatient = new Map<number, Ordonnance[]>();
  private constantesBySeance = new Map<number, ConstantesVitalesDto | null>();

  private iso(y: number, m: number, d: number): string { return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`; }

  calPrev(): void { if (this.calMonth === 0) { this.calMonth = 11; this.calYear--; } else this.calMonth--; this.selectedCalDate = ''; this.selectedPatient = null; }
  calNext(): void { if (this.calMonth === 11) { this.calMonth = 0; this.calYear++; } else this.calMonth++; this.selectedCalDate = ''; this.selectedPatient = null; }

  get calDays(): (CalCell | null)[] {
    const first = new Date(this.calYear, this.calMonth, 1).getDay();
    const offset = (first + 6) % 7;
    const total  = new Date(this.calYear, this.calMonth + 1, 0).getDate();
    const today  = new Date();
    const cells: (CalCell | null)[] = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= total; d++) {
      const date = this.iso(this.calYear, this.calMonth, d);
      const sd = this.scheduledDays.find(s => s.date === date);
      cells.push({ date, day: d, today: today.getFullYear() === this.calYear && today.getMonth() === this.calMonth && today.getDate() === d, scheduled: !!sd, patientCount: sd ? sd.patients.length : 0 });
    }
    return cells;
  }

  selectDay(cell: CalCell): void { if (!cell.scheduled) return; this.selectedCalDate = cell.date; this.selectedPatient = null; }
  get selectedDayPatients(): AssignedPatient[] { return this.selectedCalDate ? (this.scheduledDays.find(s => s.date === this.selectedCalDate)?.patients ?? []) : []; }
  formatDate(iso: string): string { if (!iso || !iso.includes('-')) return iso; const [y, m, d] = iso.split('-'); return `${d}/${m}/${y}`; }

  get totalJoursMois(): number { const prefix = `${this.calYear}-${String(this.calMonth+1).padStart(2,'0')}`; return this.scheduledDays.filter(s => s.date.startsWith(prefix)).length; }
  get totalPatientsMois(): number { const prefix = `${this.calYear}-${String(this.calMonth+1).padStart(2,'0')}`; const ids = new Set<number>(); this.scheduledDays.filter(s => s.date.startsWith(prefix)).forEach(s => s.patients.forEach(p => ids.add(p.id))); return ids.size; }
  get seancesAVenir(): number { const today = new Date().toISOString().slice(0,10); return this.scheduledDays.filter(s => s.date >= today).reduce((acc, s) => acc + s.patients.length, 0); }

  selectedPatient: AssignedPatient | null = null;
  activeTab: 'ordonnances' | 'constantes' = 'ordonnances';
  constantesForm: ConstantesForm = { tensionSys: null, tensionDia: null, poids: null, bpm: null, notes: '' };

  constructor(
    private authService: AuthService,
    private seanceService: SeanceService,
    private ordonnanceService: OrdonnanceService,
    private constantesVitalesService: ConstantesVitalesService
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadDashboardData();
  }

  private loadCurrentUser(): void {
    this.currentUser = this.authService.getUtilisateur();
    this.currentUserName = getFullName(this.currentUser) || 'Aide-soignant';
    this.currentUserInitials = getInitials(this.currentUser) || 'AS';
  }

  private loadDashboardData(): void {
    this.loading = true;
    this.seanceService.getMesSeances().pipe(catchError(() => of([] as SeanceDto[]))).subscribe({
      next: (seances) => {
        this.ordonnancesByPatient.clear();
        this.constantesBySeance.clear();
        this.scheduledDays = this.mapSeancesToScheduledDays(seances);
        this.loading = false;
      },
      error: () => {
        this.showToast('Impossible de charger vos seances', 'error');
        this.loading = false;
      }
    });
  }

  private mapSeancesToScheduledDays(seances: SeanceDto[]): ScheduledDay[] {
    const grouped = new Map<string, AssignedPatient[]>();
    seances.forEach((seance) => {
      const date = String(seance.date).slice(0, 10);
      const patient: AssignedPatient = {
        id: seance.patient.id,
        seanceId: seance.id,
        currentConstantesId: null,
        initials: `${seance.patient.prenom?.[0] ?? ''}${seance.patient.nom?.[0] ?? ''}`.toUpperCase(),
        name: `${seance.patient.prenom} ${seance.patient.nom}`,
        machine: seance.machine ?? '-',
        status: this.mapSeanceStatus(seance.statut),
        heureDebut: String(seance.heureDebut).slice(0, 5),
        heureFin: String(seance.heureFin).slice(0, 5),
        ordonnances: []
      };
      const list = grouped.get(date) ?? [];
      list.push(patient);
      grouped.set(date, list);
    });
    return [...grouped.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([date, patients]) => ({ date, patients }));
  }

  private mapOrdonnances(ordonnances: OrdonnanceDto[]): Ordonnance[] {
    return ordonnances.map(o => ({
      id: o.id,
      date: String(o.dateEmission).slice(0, 10),
      medicament: o.medicaments,
      posologie: o.posologie,
      medecin: `${o.utilisateur?.prenom ?? ''} ${o.utilisateur?.nom ?? ''}`.trim() || '-'
    }));
  }

  private mapSeanceStatus(statut: string): AssignedPatient['status'] {
    const value = String(statut ?? '').toUpperCase();
    if (value === 'TERMINEE') return 'post';
    if (value === 'EN_COURS') return 'active';
    return 'waiting';
  }

  openPatient(p: AssignedPatient): void {
    const cachedOrdonnances = this.ordonnancesByPatient.get(p.id) ?? p.ordonnances ?? [];
    const cachedConstantes = this.constantesBySeance.get(p.seanceId);

    this.selectedPatient = {
      ...p,
      ordonnances: cachedOrdonnances,
      currentConstantesId: cachedConstantes?.id ?? p.currentConstantesId
    };
    this.activeTab = 'ordonnances';
    this.resetConstantesForm();

    if (cachedConstantes) {
      this.applyConstantesToForm(cachedConstantes, p.seanceId);
    } else {
      this.loadConstantesForPatient(p);
    }

    if (this.ordonnancesByPatient.has(p.id)) {
      return;
    }

    this.ordonnanceService.getByPatient(p.id).pipe(catchError(() => of([] as OrdonnanceDto[]))).subscribe((ordonnances) => {
      const mapped = this.mapOrdonnances(ordonnances);
      this.ordonnancesByPatient.set(p.id, mapped);
      if (!this.selectedPatient || this.selectedPatient.id !== p.id) return;
      this.selectedPatient = { ...this.selectedPatient, ordonnances: mapped };
    });
  }

  closePatient(): void { this.selectedPatient = null; }
  setTab(t: 'ordonnances' | 'constantes'): void { this.activeTab = t; }

  saveConstantes(): void {
    const f = this.constantesForm;
    if (!f.tensionSys || !f.tensionDia || !f.poids || !f.bpm || !this.selectedPatient) {
      this.showToast('Veuillez remplir tous les champs obligatoires', 'warning');
      return;
    }

    const payload = {
      tensionSys: f.tensionSys,
      tensionDia: f.tensionDia,
      poids: f.poids,
      bpm: f.bpm,
      notes: f.notes,
      date: this.selectedCalDate || new Date().toISOString().slice(0, 10),
      patientId: this.selectedPatient.id,
      seanceId: this.selectedPatient.seanceId
    };

    const isEditing = !!this.selectedPatient.currentConstantesId;
    const request$ = isEditing
      ? this.constantesVitalesService.update(this.selectedPatient.currentConstantesId!, payload)
      : this.constantesVitalesService.create(payload);

    request$.subscribe({
      next: (saved) => {
        this.constantesBySeance.set(saved.seanceId ?? this.selectedPatient!.seanceId, saved);
        if (this.selectedPatient) {
          this.selectedPatient = { ...this.selectedPatient, currentConstantesId: saved.id };
        }
        this.showToast(
          isEditing ? `Constantes de ${this.selectedPatient?.name} modifiees` : `Constantes de ${this.selectedPatient?.name} enregistrees`,
          'success'
        );
        this.closePatient();
      },
      error: () => this.showToast('Erreur lors de l enregistrement des constantes', 'error')
    });
  }

  private loadConstantesForPatient(patient: AssignedPatient): void {
    this.constantesVitalesService.getByPatient(patient.id).pipe(catchError(() => of([] as ConstantesVitalesDto[]))).subscribe((constantes) => {
      const existing = this.findConstantesForSelectedSeance(constantes, patient);
      this.constantesBySeance.set(patient.seanceId, existing ?? null);
      if (existing) {
        this.applyConstantesToForm(existing, patient.seanceId);
      }
    });
  }

  private applyConstantesToForm(constantes: ConstantesVitalesDto, seanceId: number): void {
    if (!this.selectedPatient || this.selectedPatient.seanceId !== seanceId) {
      return;
    }

    this.selectedPatient = { ...this.selectedPatient, currentConstantesId: constantes.id };
    this.constantesForm = {
      tensionSys: constantes.tensionSys,
      tensionDia: constantes.tensionDia,
      poids: constantes.poids,
      bpm: constantes.bpm,
      notes: constantes.notes ?? ''
    };
  }

  private findConstantesForSelectedSeance(constantes: ConstantesVitalesDto[], patient: AssignedPatient): ConstantesVitalesDto | null {
    const bySeance = constantes.find(item => item.seanceId === patient.seanceId);
    if (bySeance) return bySeance;

    const selectedDate = this.selectedCalDate || '';
    const byDate = constantes.find(item => String(item.date).slice(0, 10) === selectedDate);
    return byDate ?? null;
  }

  private resetConstantesForm(): void {
    this.constantesForm = { tensionSys: null, tensionDia: null, poids: null, bpm: null, notes: '' };
  }

  get tensionColor(): string {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d) return 'var(--c-text-3)';
    if (s >= 140 || d >= 90) return 'var(--c-red)';
    if (s < 90 || d < 60) return 'var(--c-amber)';
    return 'var(--c-green)';
  }

  get tensionBadge(): string {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d) return 'neutral';
    if (s >= 140 || d >= 90) return 'crit';
    if (s < 90 || d < 60) return 'warn';
    return 'ok';
  }

  get tensionLabel(): string {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d) return '-';
    if (s >= 180 || d >= 120) return 'Crise hypertensive';
    if (s >= 140 || d >= 90) return 'Hypertension';
    if (s < 90 || d < 60) return 'Hypotension';
    return 'Normale';
  }

  patientBadgeClass(s: string): string { return s === 'post' ? 'ok' : s === 'active' ? 'info' : 'purple'; }
  patientBadgeLabel(s: string): string { return s === 'post' ? 'Post-seance' : s === 'active' ? 'En dialyse' : 'En attente'; }

  logout(): void { this.authService.logout(); }
}
