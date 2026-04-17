import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeanceService }  from '../../../services/seance.service';
import { PatientService } from '../../../services/patient.service';
import { AuthService }    from '../../../services/auth.service';

// ✅ CHANGEMENT: Importer les DTOs au lieu des modèles internes
import { SeanceDto } from '../../../models/seance-dto';
import { PatientDto } from '../../../models/patient-dto';

interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }

const PX_PER_HOUR = 80;
const GRID_START  = 8;
const GRID_END    = 18;

// ── Helper local : "yyyy-MM-dd" en heure LOCALE (pas UTC) ──────────────────
function toLocalIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// ── Helper local : parser "yyyy-MM-dd" sans décalage UTC ───────────────────
function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);   // ← heure locale, pas UTC
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

  // ── Grille ──────────────────────────────────────────────────────────────
  readonly hours: number[] = Array.from({ length: GRID_END - GRID_START }, (_, i) => GRID_START + i);
  readonly pxPerHour = PX_PER_HOUR;
  readonly dayLabels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  // ── Navigation semaine ───────────────────────────────────────────────────
  currentWeekOffset = 0;
  private weekStartBase!: Date;   // Lundi de la semaine courante réelle

  // ── Données ──────────────────────────────────────────────────────────────
  // ✅ CHANGEMENT: Utiliser SeanceDto[] et PatientDto[]
  seances:  SeanceDto[]  = [];
  patients: PatientDto[] = [];
  isLoading = false;

  // ── Filtres ──────────────────────────────────────────────────────────────
  filterMachine   = '';
  filterStatut    = '';
  viewMode: 'semaine' | 'liste' = 'semaine';

  // ── Modals ───────────────────────────────────────────────────────────────
  selectedSeance:  SeanceDto | null = null;
  showDetailModal  = false;
  showNewModal     = false;

  newSeance = {
    patientId:    0,
    dayOffset:    0,
    hour:         8,
    minute:       0,
    dureeHeures:  4,
    machine:      '',
    notes:        '',
  };

  // ────────────────────────────────────────────────────────────────────────
  ngOnInit(): void {
    // Trouver le lundi de la semaine en cours (en heure LOCALE)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dow  = today.getDay();                 // 0=dim … 6=sam
    const diff = dow === 0 ? -6 : 1 - dow;      // distance au lundi
    this.weekStartBase = new Date(today);
    this.weekStartBase.setDate(today.getDate() + diff);

    this.loadWeek();
    
    // ✅ CHANGEMENT: S'assurer que les données sont du bon type
    this.patientSvc.getAll().subscribe({ 
      next: p => this.patients = p as PatientDto[] 
    });
  }

  // ── Calcul du lundi affiché ──────────────────────────────────────────────
  get displayedWeekStart(): Date {
    const d = new Date(this.weekStartBase);
    d.setDate(d.getDate() + this.currentWeekOffset * 7);
    return d;
  }

  // ── Les 6 jours (lun-sam) de la semaine affichée ──────────────────────────
  get weekDays(): Date[] {
    const start = this.displayedWeekStart;
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }

  // ── Label "13 avril — 18 avril 2026" ────────────────────────────────────
  get weekRangeLabel(): string {
    const days  = this.weekDays;
    const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const start = days[0].toLocaleDateString('fr-FR', opts);
    const end   = days[5].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    return `${start} — ${end}`;
  }

  // ── Chargement des séances de la semaine depuis le backend ───────────────
  loadWeek(): void {
    this.isLoading = true;
    const days  = this.weekDays;
    const debut = toLocalIso(days[0]);           // "2026-04-13"
    const fin   = toLocalIso(days[days.length - 1]); // "2026-04-18"

    this.seanceSvc.getByPeriode(debut, fin).subscribe({
      next:  s  => { 
        this.seances = s as SeanceDto[]; 
        this.isLoading = false; 
      },
      error: () => { 
        this.isLoading = false; 
        this.showToast('Erreur chargement séances', 'error'); 
      }
    });
  }

  // ── Navigation ────────────────────────────────────────────────────────────
  prevWeek(): void { this.currentWeekOffset--; this.loadWeek(); }
  nextWeek(): void { this.currentWeekOffset++; this.loadWeek(); }
  goToday():  void { this.currentWeekOffset = 0; this.loadWeek(); }

  // ── Filtrage par jour ─────────────────────────────────────────────────────
  getSeancesForDay(dayIndex: number): SeanceDto[] {
    const dayIso = toLocalIso(this.weekDays[dayIndex]); // "2026-04-13"
    return this.seances.filter(s => {
      const match = s.date?.substring(0, 10) === dayIso;
      const mMachine = !this.filterMachine || s.machine === this.filterMachine;
      const mStatut  = !this.filterStatut  || s.statut  === this.filterStatut;
      return match && mMachine && mStatut;
    });
  }

  // ── Positionnement CSS des cartes ─────────────────────────────────────────
  sessionTop(s: SeanceDto): number {
    const [hh, mm] = (s.heureDebut ?? '08:00').split(':').map(Number);
    return (hh - GRID_START) * PX_PER_HOUR + (mm / 60) * PX_PER_HOUR;
  }

  sessionHeight(s: SeanceDto): number {
    return Math.max(s.dureeHeures * PX_PER_HOUR, 40);
  }

  // ── Helpers affichage ────────────────────────────────────────────────────
  patientNom(s: SeanceDto): string {
    return s.patient ? `${s.patient.nom} ${s.patient.prenom}` : '—';
  }

  patientInit(s: SeanceDto): string {
    return `${s.patient?.nom?.[0] ?? ''}${s.patient?.prenom?.[0] ?? ''}`.toUpperCase();
  }

  utilisateurNom(s: SeanceDto): string {
    return s.utilisateur ? `${s.utilisateur.nom} ${s.utilisateur.prenom}` : '—';
  }

  statutClass(statut: string): string {
    return ({ TERMINEE: 'ok', EN_COURS: 'info', PLANIFIEE: 'purple', ANNULEE: 'danger' } as Record<string,string>)[statut] ?? 'purple';
  }

  statutLabel(statut: string): string {
    return ({ TERMINEE: 'Terminée', EN_COURS: 'En cours', PLANIFIEE: 'Planifiée', ANNULEE: 'Annulée' } as Record<string,string>)[statut] ?? statut;
  }

  isToday(date: Date): boolean {
    const t = new Date();
    return date.getDate()     === t.getDate() &&
           date.getMonth()    === t.getMonth() &&
           date.getFullYear() === t.getFullYear();
  }

  isPast(date: Date): boolean {
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return date < t;
  }

  formatHour(h: number): string { return `${String(h).padStart(2, '0')}:00`; }

  formatTime(s: SeanceDto): string { return s.heureDebut?.substring(0, 5) ?? '—'; }

  formatTimeFin(s: SeanceDto): string { return s.heureFin?.substring(0, 5) ?? '—'; }

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  dayName(index: number): string {
    return ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'][index] ?? '';
  }

  // ── Stats semaine ────────────────────────────────────────────────────────
  get weekSessionCount():  number { return this.seances.length; }
  get completedCount():    number { return this.seances.filter(s => s.statut === 'TERMINEE').length; }
  get ongoingCount():      number { return this.seances.filter(s => s.statut === 'EN_COURS').length; }
  get plannedCount():      number { return this.seances.filter(s => s.statut === 'PLANIFIEE').length; }
  get machinesUsed():      number { return new Set(this.seances.map(s => s.machine).filter(Boolean)).size; }

  get allMachines(): string[] {
    return [...new Set(this.seances.map(s => s.machine).filter((m): m is string => !!m))].sort();
  }

  get hasActiveFilters(): boolean { return !!(this.filterMachine || this.filterStatut); }
  clearFilters(): void { this.filterMachine = ''; this.filterStatut = ''; }

  // ── Détail séance ─────────────────────────────────────────────────────────
  openSession(s: SeanceDto): void {
    this.selectedSeance  = s;
    this.showDetailModal = true;
  }

  closeDetail(): void {
    this.showDetailModal = false;
    this.selectedSeance  = null;
  }

  // ── Nouvelle séance ───────────────────────────────────────────────────────
  openNewModal(dayIndex?: number): void {
    this.newSeance = {
      patientId: 0, dayOffset: dayIndex ?? 0,
      hour: 8, minute: 0, dureeHeures: 4, machine: '', notes: '',
    };
    this.showNewModal = true;
  }

  saveNewSession(): void {
    if (!this.newSeance.patientId || !this.newSeance.machine.trim()) {
      this.showToast('Patient et machine sont obligatoires', 'warning');
      return;
    }

    const utilisateurId = this.authSvc.utilisateurId;
    if (!utilisateurId) { 
      this.showToast('Utilisateur non authentifié', 'error'); 
      return; 
    }

    const day = this.weekDays[this.newSeance.dayOffset];
    const dateStr    = toLocalIso(day);
    const heureDebut = `${String(this.newSeance.hour).padStart(2,'0')}:${String(this.newSeance.minute).padStart(2,'0')}:00`;
    const totalMin   = this.newSeance.hour * 60 + this.newSeance.minute + this.newSeance.dureeHeures * 60;
    const heureFin   = `${String(Math.floor(totalMin/60)).padStart(2,'0')}:${String(totalMin%60).padStart(2,'0')}:00`;

    const payload = {
      date:         dateStr,
      heureDebut,
      heureFin,
      machine:      this.newSeance.machine.trim().toUpperCase(),
      notes:        this.newSeance.notes,
      dureeHeures:  this.newSeance.dureeHeures,
      patientId:    this.newSeance.patientId,
      utilisateurId,
    };

    this.seanceSvc.create(payload).subscribe({
      next: (created) => {
        // ✅ CHANGEMENT: Ajouter la nouvelle séance comme SeanceDto
        this.seances.push(created as SeanceDto);
        this.showNewModal = false;
        this.showToast('Séance planifiée avec succès', 'success');
        this.seanceSvc.invalidateCache();
        this.loadWeek();
      },
      error: (err) => {
        const msg = err?.error?.message ?? 'Erreur lors de la création';
        this.showToast(msg, 'error');
      }
    });
  }

  // ── Toast ─────────────────────────────────────────────────────────────────
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
  logout():          void { this.router.navigate(['/login']); }
}