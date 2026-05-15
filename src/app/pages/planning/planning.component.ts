import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeanceService }  from '../../../services/seance.service';
import { PatientService } from '../../../services/patient.service';
import { AuthService }    from '../../../services/auth.service';

import { SeanceDto }  from '../../../models/seance-dto';
import { PatientDto } from '../../../models/patient-dto';
import { PlanificationSeancesRequestDto } from '../../../models/planification-seances-request-dto';

interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }

function toLocalIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})
export class PlanningComponent implements OnInit {

  constructor(
    private router:     Router,
    private seanceSvc:  SeanceService,
    private patientSvc: PatientService,
    private authSvc:    AuthService,
  ) {}


  readonly joursLabels = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  //  Donnees 
  patients:    PatientDto[] = [];
  seances:     SeanceDto[]  = [];
  isLoading    = false;
  isPlanning   = false;
  isDark       = false;
  searchQuery  = '';

  // Formulaire (correspond exactement a l'image) 
  form = {
    patientId:      0,
    jours:          [] as number[],  
    shiftMatin:     false,
    shiftApresMidi: false,
  };

  //  Jours 
  toggleJour(j: number): void {
    const i = this.form.jours.indexOf(j);
    if (i >= 0) this.form.jours.splice(i, 1);
    else        this.form.jours.push(j);
  }

  isJourSelected(j: number): boolean {
    return this.form.jours.includes(j);
  }

  setCreneau(creneau: 'MATIN' | 'APRES_MIDI'): void {
    this.form.shiftMatin = creneau === 'MATIN';
    this.form.shiftApresMidi = creneau === 'APRES_MIDI';
  }

  //  Init 
  ngOnInit(): void {
    this.patientSvc.getAll().subscribe({ next: p => this.patients = p as PatientDto[] });
    this.loadSeances();
  }

  loadSeances(): void {
    this.isLoading = true;
    const today = new Date();
    const start = new Date(today); start.setDate(today.getDate() - 30);
    const end   = new Date(today); end.setDate(today.getDate() + 60);
    this.seanceSvc.getByPeriode(toLocalIso(start), toLocalIso(end)).subscribe({
      next:  s  => { this.seances = s as SeanceDto[]; this.isLoading = false; },
      error: () => { this.isLoading = false; this.showToast('Erreur chargement sÃ©ances', 'error'); }
    });
  }

  //  Liste filtrée 
  get filteredSeances(): SeanceDto[] {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) return this.seances;
    return this.seances.filter(s =>
      this.patientNom(s).toLowerCase().includes(q) ||
      this.jourLabel(s).toLowerCase().includes(q) ||
      this.creneauLabel(s).toLowerCase().includes(q)
    );
  }

  //  Planifier 
  saveNewSession(): void {
    if (this.isPlanning) return;

    if (!this.form.patientId) {
      this.showToast('Veuillez selectionner un patient', 'warning'); return;
    }
    if (this.form.jours.length === 0) {
      this.showToast('Veuillez selectionner au moins un jour', 'warning'); return;
    }
    if (!this.form.shiftMatin && !this.form.shiftApresMidi) {
      this.showToast('Veuillez selectionner un creneau (Matin ou Apres-midi)', 'warning'); return;
    }

    const creneaux: PlanificationSeancesRequestDto['creneaux'] = [];
    if (this.form.shiftMatin) creneaux.push('MATIN');
    if (this.form.shiftApresMidi) creneaux.push('APRES_MIDI');

    const payload: PlanificationSeancesRequestDto = {
      patientId: this.form.patientId,
      jours: [...this.form.jours].sort((a, b) => a - b),
      creneaux,
      dateDebut: toLocalIso(new Date()),
      nombreSemaines: 1,
      utilisateurId: this.authSvc.utilisateurId ?? null,
    };

    this.isPlanning = true;
    this.seanceSvc.planifier(payload).subscribe({
      next: (created) => {
        this.seances = [...(created as SeanceDto[]), ...this.seances];
        const count = created.length;
        this.showToast(
          count > 1 ? `${count} seances planifiees avec succes` : 'Seance planifiee avec succes',
          'success'
        );
        this.seanceSvc.invalidateCache();
        this.resetForm();
        this.isPlanning = false;
      },
      error: (err) => {
        this.isPlanning = false;
        this.showToast(err?.error?.message ?? 'Erreur lors de la planification', 'error');
      }
    });
  }

  resetForm(): void {
    this.form = { patientId: 0, jours: [], shiftMatin: false, shiftApresMidi: false };
  }

  // Helpers affichage 
  patientNom(s: SeanceDto): string {
    return s.patient ? `${s.patient.nom} ${s.patient.prenom}` : 'â€”';
  }

  patientInit(s: SeanceDto): string {
    return `${s.patient?.nom?.[0] ?? ''}${s.patient?.prenom?.[0] ?? ''}`.toUpperCase();
  }

  utilisateurNom(s: SeanceDto): string {
    return s.utilisateur ? `${s.utilisateur.nom} ${s.utilisateur.prenom}` : 'â€”';
  }

  statutClass(statut: string): string {
    return ({ TERMINEE: 'ok', EN_COURS: 'info', PLANIFIEE: 'purple', ANNULEE: 'danger' } as Record<string,string>)[statut] ?? 'purple';
  }

  statutLabel(statut: string): string {
    return ({ TERMINEE: 'TerminÃ©e', EN_COURS: 'En cours', PLANIFIEE: 'PlanifiÃ©e', ANNULEE: 'AnnulÃ©e' } as Record<string,string>)[statut] ?? statut;
  }

  jourLabel(s: SeanceDto): string {
    const jour = s.jourPlanifie ?? this.uiDayFromIsoDate(String(s.date));
    return this.joursLabels[jour] ?? '-';
  }

  creneauLabel(s: SeanceDto): string {
    const creneau = String(s.creneau ?? '').toUpperCase();
    if (creneau === 'MATIN') return 'Matin';
    if (creneau === 'APRES_MIDI' || creneau === 'APRES-MIDI') return 'Apres-midi';
    return 'Matin';
  }

  private uiDayFromIsoDate(value: string): number {
    const date = new Date(`${value.slice(0, 10)}T00:00:00`);
    return Number.isNaN(date.getTime()) ? 0 : date.getDay();
  }

  //  Toast 
  private tid = 0;
  toasts: Toast[] = [];

  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }

  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }

  toastIcon(type: string): string {
    return ({ success:'check_circle', warning:'warning', error:'error', info:'info' } as Record<string,string>)[type] ?? 'info';
  }

  backToDashboard(): void { this.router.navigate(['/medecin']); }
}
