import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgClass, NgIf, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AssignedPatient {
  id: number;
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

interface ScheduledDay {
  date: string;
  patients: AssignedPatient[];
}

interface CalCell {
  date: string;
  day: number;
  today: boolean;
  scheduled: boolean;
  patientCount: number;
}

interface ConstantesForm {
  tensionSys: number | null;
  tensionDia: number | null;
  poids: number | null;
  bpm: number | null;
  notes: string;
}

interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }

@Component({
  selector: 'app-aide-soignant',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, FormsModule, SlicePipe],
  templateUrl: './aide-soignant.component.html',
  styleUrl: './aide-soignant.component.scss'
})
export class AideSoignantComponent {

  // ── Date helpers ──
  readonly moisLabels = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  readonly dayNames = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

  get todayDisplay(): string {
    const d = new Date();
    const j = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    return `${j[d.getDay()]}, ${d.getDate()} ${this.moisLabels[d.getMonth()]} ${d.getFullYear()}`;
  }

  // ── Toast ──
  private tid = 0;
  toasts: Toast[] = [];
  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }
  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }
  toastIcon(type: string): string {
    return ({ success: 'check_circle', warning: 'warning', error: 'error', info: 'info' } as Record<string,string>)[type] ?? 'info';
  }

  // ── Calendar ──
  calYear  = new Date().getFullYear();
  calMonth = new Date().getMonth();
  selectedCalDate = '';

  scheduledDays: ScheduledDay[] = this.buildScheduledDays();

  private buildScheduledDays(): ScheduledDay[] {
    const y = new Date().getFullYear();
    const m = new Date().getMonth();
    const mockOrd = (n: number): Ordonnance[] => [
      { id: n*10+1, date: this.iso(y, m, 1), medicament: 'Érythropoïétine',    posologie: '4000 UI × 3/sem',   medecin: 'Dr. Alami' },
      { id: n*10+2, date: this.iso(y, m, 1), medicament: 'Ferritinaemia IV',   posologie: '100 mg perf.',      medecin: 'Dr. Alami' },
      { id: n*10+3, date: this.iso(y, m, 1), medicament: 'Cinacalcet 30 mg',   posologie: '1 cp/j',            medecin: 'Dr. Merini' },
    ];
    const p: AssignedPatient[] = [
      { id: 1, initials: 'AK', name: 'Alaoui Khalid',       machine: 'M-03', status: 'post',    heureDebut: '08:00', heureFin: '12:00', ordonnances: mockOrd(1) },
      { id: 2, initials: 'ME', name: 'Moussaoui El Hassan',  machine: 'M-02', status: 'active',  heureDebut: '08:30', heureFin: '12:30', ordonnances: mockOrd(2) },
      { id: 3, initials: 'FZ', name: 'Filali Zineb',         machine: 'M-09', status: 'waiting', heureDebut: '14:00', heureFin: '18:00', ordonnances: mockOrd(3) },
      { id: 4, initials: 'OB', name: 'Ouali Badreddine',     machine: 'M-05', status: 'active',  heureDebut: '08:00', heureFin: '12:00', ordonnances: mockOrd(4) },
      { id: 5, initials: 'BN', name: 'Bennani Nadia',        machine: 'M-07', status: 'waiting', heureDebut: '14:00', heureFin: '18:00', ordonnances: mockOrd(5) },
      { id: 6, initials: 'HS', name: 'Hamidi Samir',         machine: 'M-05', status: 'waiting', heureDebut: '08:00', heureFin: '12:00', ordonnances: mockOrd(6) },
    ];
    const days = [2,5,8,11,14,17,20,23,26,29];
    const picks: number[][] = [[1,2,3,4],[1,5],[2,3,6],[4,5],[1,2,6],[3],[1,4,5],[2,6],[3,4],[1,5]];
    return days.map((d, i) => ({
      date: this.iso(y, m, d),
      patients: picks[i].map(id => p.find(x => x.id === id)!),
    }));
  }

  private iso(y: number, m: number, d: number): string {
    return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  }

  get calTitle(): string { return `${this.moisLabels[this.calMonth]} ${this.calYear}`; }

  calPrev(): void {
    if (this.calMonth === 0) { this.calMonth = 11; this.calYear--; }
    else this.calMonth--;
    this.selectedCalDate = '';
    this.selectedPatient = null;
  }

  calNext(): void {
    if (this.calMonth === 11) { this.calMonth = 0; this.calYear++; }
    else this.calMonth++;
    this.selectedCalDate = '';
    this.selectedPatient = null;
  }

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
      cells.push({
        date, day: d,
        today: today.getFullYear() === this.calYear && today.getMonth() === this.calMonth && today.getDate() === d,
        scheduled: !!sd,
        patientCount: sd ? sd.patients.length : 0,
      });
    }
    return cells;
  }

  selectDay(cell: CalCell): void {
    if (!cell.scheduled) return;
    this.selectedCalDate = cell.date;
    this.selectedPatient = null;
  }

  get selectedDayPatients(): AssignedPatient[] {
    if (!this.selectedCalDate) return [];
    return this.scheduledDays.find(s => s.date === this.selectedCalDate)?.patients ?? [];
  }

  formatDate(iso: string): string {
    if (!iso || !iso.includes('-')) return iso;
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  // ── Stats ──
  get totalJoursMois(): number {
    const prefix = `${this.calYear}-${String(this.calMonth+1).padStart(2,'0')}`;
    return this.scheduledDays.filter(s => s.date.startsWith(prefix)).length;
  }

  get totalPatientsMois(): number {
    const prefix = `${this.calYear}-${String(this.calMonth+1).padStart(2,'0')}`;
    const ids = new Set<number>();
    this.scheduledDays.filter(s => s.date.startsWith(prefix)).forEach(s => s.patients.forEach(p => ids.add(p.id)));
    return ids.size;
  }

  get seancesAVenir(): number {
    const today = new Date().toISOString().slice(0,10);
    return this.scheduledDays.filter(s => s.date >= today).reduce((acc, s) => acc + s.patients.length, 0);
  }

  // ── Patient detail modal ──
  selectedPatient: AssignedPatient | null = null;
  activeTab: 'ordonnances' | 'constantes' = 'ordonnances';
  constantesForm: ConstantesForm = { tensionSys: null, tensionDia: null, poids: null, bpm: null, notes: '' };

  openPatient(p: AssignedPatient): void {
    this.selectedPatient = p;
    this.activeTab = 'ordonnances';
    this.constantesForm = { tensionSys: null, tensionDia: null, poids: null, bpm: null, notes: '' };
  }

  closePatient(): void { this.selectedPatient = null; }

  setTab(t: 'ordonnances' | 'constantes'): void { this.activeTab = t; }

  saveConstantes(): void {
    const f = this.constantesForm;
    if (!f.tensionSys || !f.tensionDia || !f.poids || !f.bpm) {
      this.showToast('Veuillez remplir tous les champs obligatoires', 'warning');
      return;
    }
    this.showToast(
      `Constantes de ${this.selectedPatient?.name} enregistrées — TA: ${f.tensionSys}/${f.tensionDia}, Poids: ${f.poids}kg, FC: ${f.bpm}bpm`,
      'success'
    );
    this.closePatient();
  }

  get tensionColor(): string {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d) return 'var(--c-text-3)';
    if (s >= 140 || d >= 90) return 'var(--c-red)';
    if (s < 90  || d < 60)  return 'var(--c-amber)';
    return 'var(--c-green)';
  }

  get tensionBadge(): string {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d) return 'neutral';
    if (s >= 140 || d >= 90) return 'crit';
    if (s < 90  || d < 60)  return 'warn';
    return 'ok';
  }

  get tensionLabel(): string {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d) return '—';
    if (s >= 180 || d >= 120) return 'Crise hypertensive';
    if (s >= 140 || d >= 90)  return 'Hypertension';
    if (s < 90  || d < 60)   return 'Hypotension';
    return 'Normale';
  }

  patientBadgeClass(s: string): string { return s === 'post' ? 'ok' : s === 'active' ? 'info' : 'purple'; }
  patientBadgeLabel(s: string): string { return s === 'post' ? 'Post-séance' : s === 'active' ? 'En dialyse' : 'En attente'; }

  constructor(private router: Router) {}
  logout(): void { this.router.navigate(['/login']); }
}
