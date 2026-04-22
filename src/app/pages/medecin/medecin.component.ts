import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

// ── DTOs ──────────────────────────────────────────────────────────────────────
import { PatientDto }              from '../../../models/patient-dto';
import { PatientSummaryDto }       from '../../../models/patient-summary-dto';
import { DossierPatientDto }       from '../../../models/dossier-patient-dto';
import { OrdonnanceDto }           from '../../../models/ordonnance-dto';
import { OrdonnanceRequestDto }    from '../../../models/ordonnance-request-dto';
import { SeanceDto }               from '../../../models/seance-dto';
import { AlerteDto }               from '../../../models/alerte-dto';
import { Utilisateur }             from '../../../models/utilisateur';

// ── Services ──────────────────────────────────────────────────────────────────
import { PatientService }        from '../../../services/patient.service';
import { OrdonnanceService }     from '../../../services/ordonnance.service';
import { SeanceService }         from '../../../services/seance.service';
import { DossierPatientService } from '../../../services/dossier-patient.service';
import { AlerteService }         from '../../../services/alerte.service';
import { AuthService }           from '../../../services/auth.service';

// ── Date utils ────────────────────────────────────────────────────────────────
import { todayIso } from '../../../models/dateutils';

import { formatDateFr } from '../../../models/dateutils';

// ══════════════════════════════════════════════════════════════════════════════
// View-Models (UI only — ne remplacent pas les DTOs)
// ══════════════════════════════════════════════════════════════════════════════

export interface Toast {
  message: string;
  type: 'success' | 'warning' | 'info' | 'error';
  id: number;
}

export interface NotificationVM {
  icon:     string;
  text:     string;
  time:     string;
  type:     string;
  read:     boolean;
  alerteId: number;
}

export interface HistoriqueItem {
  date:        string;
  type:        'seance' | 'bilan' | 'consultation' | 'urgence';
  description: string;
  notes:       string;
  icon:        string;
  typeClass:   string;
}

/**
 * PatientVM = PatientDto enrichi de champs calculés pour l'UI.
 * On ré-expose `nom` comme concaténation prenom+nom pour l'affichage,
 * mais on garde `nomBrut` / `prenomBrut` pour les comparaisons métier.
 */
export interface PatientVM extends PatientDto {
  /** Prénom + Nom concaténé pour l'affichage */
  nomComplet:      string;
  initials:        string;
  age:             number;
  statutClass:     'ok' | 'warn' | 'crit';
  // champs issus de DossierPatientDto (null si pas de dossier)
  creatinine:      string;
  creatinineClass: string;
  uree:            string;
  hemoglobine:     string;
  pathologie:      string;
  prochaine:       string;
  poids:           string;
  taille:          string;
  debutDialyse:    string;
  historique:      HistoriqueItem[];
}

/** Formulaire interne pour la création d'une ordonnance */
interface NewOrdForm {
  patientNomComplet: string;  // valeur affichée dans le <select>
  patientId:         number;
  medicaments:       string;
  posologie:         string;
  instructions:      string;
  dateExpiration:    string;
}

// ══════════════════════════════════════════════════════════════════════════════
@Component({
  selector:    'app-medecin',
  standalone:  true,
  imports:     [CommonModule, FormsModule],
  templateUrl: './medecin.component.html',
  styleUrl:    './medecin.component.scss',
})
export class MedecinComponent implements OnInit {

  constructor(
    private router:        Router,
    private patientSvc:    PatientService,
    private ordonnanceSvc: OrdonnanceService,
    private seanceSvc:     SeanceService,
    private dossierSvc:    DossierPatientService,
    private alerteSvc:     AlerteService,
    private authSvc:       AuthService,
  ) {}

  // ── État global ────────────────────────────────────────────────────────────
  isLoading = true;

  get today(): string {
    return new Date().toLocaleDateString('fr-FR');
  }

  // ── Navigation ─────────────────────────────────────────────────────────────
  activeSection: string = 'dashboard';
  dossierTab: 'info' | 'historique' | 'ordonnances' | 'graphiques' = 'info';

  get sectionTitle(): string {
    const map: Record<string, string> = {
      dashboard:   'Tableau de Bord',
      patients:    'Mes Patients',
      dossier:     this.selectedPatient
                     ? `Dossier — ${this.selectedPatient.nomComplet}`
                     : 'Dossier Patient',
      ordonnances: 'Ordonnances',
      alertes:     'Alertes Critiques',
    };
    return map[this.activeSection] ?? 'Tableau de Bord';
  }

  setSection(section: string): void {
    if (section === 'planning') {
      this.router.navigate(['/planning']);
      return;
    }
    this.activeSection  = section;
    this.showNotifPanel = false;
  }

  // ── Données brutes (typage DTO strict) ─────────────────────────────────────
  allPatients:  PatientVM[]    = [];
  ordonnances:  OrdonnanceDto[] = [];
  todaySeances: SeanceDto[]     = [];
  rawAlertes:   AlerteDto[]     = [];

  // ── Initialisation ─────────────────────────────────────────────────────────
  ngOnInit(): void { this.loadAll(); }

  loadAll(): void {
    this.isLoading = true;
    const currentUser: Utilisateur | null = this.authSvc.getUtilisateur();
    const login = currentUser?.login ?? '';

    // Chargement primaire (bloque le spinner)
    forkJoin({
      patients: this.patientSvc.getAll(),
      seances:  this.seanceSvc.getToday(),
    }).subscribe({
      next: ({ patients, seances }) => {
        this.allPatients  = patients.map(p => this.buildPatientVM(p));
        this.todaySeances = seances;
        this.isLoading    = false;
      },
      error: err => {
        console.error('Erreur chargement primaire', err);
        this.showToast('Erreur de connexion au serveur', 'error');
        this.isLoading = false;
      },
    });

    // Chargement secondaire (non bloquant)
    forkJoin({
      ordonnances: this.ordonnanceSvc.getAll(),
      alertes:     this.alerteSvc.getMesAlertes(login),
    }).subscribe({
      next: ({ ordonnances, alertes }) => {
        this.ordonnances = ordonnances;
        this.rawAlertes  = alertes;
        this.buildNotifications();
      },
      error: err => console.error('Erreur chargement secondaire', err),
    });
  }

  // ── Mapper PatientDto → PatientVM ──────────────────────────────────────────
  private buildPatientVM(p: PatientDto): PatientVM {
    const d: DossierPatientDto | null = p.dossierPatient ?? null;
    const statutRaw = (p.statut ?? 'STABLE').toUpperCase();
    const statutClass: 'ok' | 'warn' | 'crit' =
      statutRaw === 'CRITIQUE'  ? 'crit' :
      statutRaw === 'ATTENTION' ? 'warn' : 'ok';

    return {
      // ── Champs PatientDto d'origine ──────────────────────────────────────
      ...p,
      // ── Champs calculés UI ───────────────────────────────────────────────
      nomComplet:      `${p.nom} ${p.prenom}`,
      initials:        `${p.nom?.[0] ?? ''}${p.prenom?.[0] ?? ''}`.toUpperCase(),
      age:             this.calcAge(p.dateNaissance),
      statut:          statutRaw === 'CRITIQUE'  ? 'Critique' :
                       statutRaw === 'ATTENTION' ? 'Attention' : 'Stable',
      statutClass,
      // ── Champs issus du DossierPatientDto ────────────────────────────────
      creatinine:      d?.creatinine      ?? '—',
      creatinineClass: d?.creatinineClass ?? '',
      uree:            d?.uree            ?? '—',
      hemoglobine:     d?.hemoglobine     ?? '—',
      pathologie:      d?.pathologie      ?? '—',
      prochaine:       d?.prochaine ? formatDateFr(d.prochaine) : '—',
      poids:           d?.poids           ?? '—',
      taille:          d?.taille          ?? '—',
      debutDialyse:    d?.debutDialyse    ? formatDateFr(d.debutDialyse) : '—',
      historique:      [],
    };
  }

  // ── Filtres patients ───────────────────────────────────────────────────────
  searchQuery      = '';
  filterPathologie = '';

  get filteredPatients(): PatientVM[] {
    const q = this.searchQuery.trim().toLowerCase();
    return this.allPatients.filter(p =>
      (!this.filterPathologie || p.pathologie === this.filterPathologie) &&
      (!q ||
        p.nomComplet.toLowerCase().includes(q) ||
        (p.cin ?? '').toLowerCase().includes(q) ||
        p.pathologie.toLowerCase().includes(q))
    );
  }

  // ── KPIs ───────────────────────────────────────────────────────────────────
  get activeOrdCount(): number {
    return this.ordonnances.filter(o => o.statut === 'EN_ATTENTE').length;
  }

  get criticalPatients(): PatientVM[] {
    return this.allPatients.filter(p => p.statutClass === 'crit');
  }

  // ── Dossier patient ────────────────────────────────────────────────────────
  selectedPatient: PatientVM | null = null;

  openDossier(p: PatientVM, tab: 'info' | 'historique' | 'ordonnances' = 'info'): void {
    this.selectedPatient = p;
    this.dossierTab      = tab;
    this.activeSection   = 'dossier';
    this.showNotifPanel  = false;
    this.loadPatientHistorique(p.id);
  }

  private loadPatientHistorique(patientId: number): void {
    this.seanceSvc.getByPatient(patientId).subscribe({
      next: (seances: SeanceDto[]) => {
        if (!this.selectedPatient) return;
        this.selectedPatient.historique = seances.map(s => ({
          date:        s.date ? formatDateFr(s.date) : '—',
          type:        'seance' as const,
          description: `Séance hémodialyse ${s.dureeHeures}h — Machine ${s.machine ?? '—'}`,
          notes:       s.notes ?? 'RAS',
          icon:        'water_drop',
          typeClass:   'seance',
        }));
      },
      error: () => {},
    });
  }

  backToPatients(): void {
    this.selectedPatient = null;
    this.activeSection   = 'patients';
  }

  // ── Ordonnances — filtres ──────────────────────────────────────────────────
  searchOrdonnances = '';
  filterOrdStatut: '' | 'EN_ATTENTE' | 'VALIDEE' | 'ANNULEE' = '';
  filterOrdPatient = '';

  get filteredOrdonnances(): OrdonnanceDto[] {
    const q = this.searchOrdonnances.trim().toLowerCase();
    return this.ordonnances.filter(o =>
      (!this.filterOrdStatut  || o.statut === this.filterOrdStatut) &&
      (!this.filterOrdPatient || this.ordPatientNomComplet(o) === this.filterOrdPatient) &&
      (!q ||
        this.ordPatientNomComplet(o).toLowerCase().includes(q) ||
        o.medicaments.toLowerCase().includes(q))
    );
  }

  get ordonnancesForSelectedPatient(): OrdonnanceDto[] {
    if (!this.selectedPatient) return [];
    return this.ordonnances.filter(o => o.patient?.id === this.selectedPatient!.id);
  }

  // ── Helpers affichage OrdonnanceDto ───────────────────────────────────────
  /** Initiales depuis PatientSummaryDto embarqué dans OrdonnanceDto */
  ordPatientInit(o: OrdonnanceDto): string {
    const p: PatientSummaryDto | undefined = o.patient;
    return `${p?.nom?.[0] ?? ''}${p?.prenom?.[0] ?? ''}`.toUpperCase();
  }

  /** Nom complet depuis PatientSummaryDto embarqué dans OrdonnanceDto */
  ordPatientNomComplet(o: OrdonnanceDto): string {
    return o.patient ? `${o.patient.nom} ${o.patient.prenom}` : '—';
  }

  ordStatutLabel(statut: OrdonnanceDto['statut']): string {
    const map: Record<OrdonnanceDto['statut'], string> = {
      EN_ATTENTE: 'En attente',
      VALIDEE:    'Validée',
      ANNULEE:    'Annulée',
    };
    return map[statut] ?? statut;
  }

  ordStatutClass(statut: OrdonnanceDto['statut']): string {
    const map: Record<OrdonnanceDto['statut'], string> = {
      EN_ATTENTE: 'warn',
      VALIDEE:    'ok',
      ANNULEE:    'danger',
    };
    return map[statut] ?? '';
  }

  formatOrdDate(d: string | null | undefined): string {
    return d ? formatDateFr(d) : '—';
  }

  // ── Détail ordonnance ──────────────────────────────────────────────────────
  selectedOrdonnance:  OrdonnanceDto | null = null;
  showOrdonnanceDetail = false;

  openOrdonnanceDetail(o: OrdonnanceDto): void {
    this.selectedOrdonnance  = o;
    this.showOrdonnanceDetail = true;
  }

  annulerOrdonnance(o: OrdonnanceDto): void {
    this.ordonnanceSvc.annuler(o.id).subscribe({
      next: (updated: OrdonnanceDto) => {
        // Mise à jour locale sans recharger toute la liste
        const idx = this.ordonnances.findIndex(x => x.id === o.id);
        if (idx !== -1) this.ordonnances[idx] = updated;
        if (this.selectedOrdonnance?.id === o.id) {
          this.selectedOrdonnance = updated;
        }
        this.showOrdonnanceDetail = false;
        this.showToast(`Ordonnance N°${o.id} annulée`, 'warning');
      },
      error: () => this.showToast("Erreur lors de l'annulation", 'error'),
    });
  }

  // ── Nouvelle ordonnance ────────────────────────────────────────────────────
  showNouvelleOrdonnanceModal = false;

  newOrd: NewOrdForm = {
    patientNomComplet: '',
    patientId:         0,
    medicaments:       '',
    posologie:         '',
    instructions:      '',
    dateExpiration:    '',
  };

  openNouvelleOrdonnance(patient?: PatientVM): void {
    this.newOrd = {
      patientNomComplet: patient ? `${patient.nom} ${patient.prenom}` : '',
      patientId:         patient?.id ?? 0,
      medicaments:       '',
      posologie:         '',
      instructions:      '',
      dateExpiration:    '',
    };
    this.showNouvelleOrdonnanceModal = true;
  }

  /** Synchronise patientId quand l'utilisateur change le <select> */
  onOrdPatientChange(): void {
    const found = this.allPatients.find(
      p => `${p.nom} ${p.prenom}` === this.newOrd.patientNomComplet
    );
    this.newOrd.patientId = found?.id ?? 0;
  }

  sauvegarderOrdonnance(): void {
    if (!this.newOrd.patientNomComplet.trim()) {
      this.showToast('Sélectionnez un patient', 'warning');
      return;
    }
    if (!this.newOrd.medicaments.trim()) {
      this.showToast('Saisissez les médicaments', 'warning');
      return;
    }
    const uid = this.authSvc.utilisateurId;
    if (!uid) {
      this.showToast('Utilisateur non authentifié', 'error');
      return;
    }

    // Payload strictement conforme à OrdonnanceRequestDto
    const payload: OrdonnanceRequestDto = {
      patientId:      this.newOrd.patientId,
      utilisateurId:  uid,
      medicaments:    this.newOrd.medicaments,
      posologie:      this.newOrd.posologie,
      instructions:   this.newOrd.instructions || null,
      dateEmission:   todayIso(),
      dateExpiration: this.newOrd.dateExpiration || null,
      statut:         'EN_ATTENTE',
    };

    this.ordonnanceSvc.create(payload).subscribe({
      next: (created: OrdonnanceDto) => {
        this.ordonnances.unshift(created);
        this.showNouvelleOrdonnanceModal = false;
        this.showToast(
          `Ordonnance créée pour ${this.newOrd.patientNomComplet}`,
          'success'
        );
      },
      error: () => this.showToast('Erreur lors de la création', 'error'),
    });
  }

  // ── Alertes (AlerteDto) ────────────────────────────────────────────────────
  marquerAlerteLue(a: AlerteDto): void {
    this.alerteSvc.marquerLue(a.id).subscribe({
      next: (updated: AlerteDto) => {
        const idx = this.rawAlertes.findIndex(x => x.id === a.id);
        if (idx !== -1) this.rawAlertes[idx] = updated;
        this.buildNotifications();
      },
    });
  }

  marquerToutesAlertesLues(): void {
    this.alerteSvc.marquerToutesLues().subscribe({
      next: () => {
        this.rawAlertes = this.rawAlertes.map(a => ({ ...a, lue: true }));
        this.buildNotifications();
        this.showToast('Toutes les alertes marquées comme lues', 'success');
      },
    });
  }

  voirPatientAlerte(a: AlerteDto): void {
    // AlerteDto.patient est un PatientSummaryDto → on cherche par id
    const p = this.allPatients.find(pm => pm.id === a.patient?.id);
    if (p) this.openDossier(p);
    else this.showToast('Patient introuvable', 'warning');
  }

  // ── Séances (SeanceDto) ────────────────────────────────────────────────────
  seanceStatutLabel(statut: string): string {
    const map: Record<string, string> = {
      TERMINEE:  'Terminé',
      EN_COURS:  'En cours',
      ANNULEE:   'Annulée',
      PLANIFIEE: 'Planifiée',
    };
    return map[statut] ?? statut;
  }

  seanceStatutClass(statut: string): string {
    const map: Record<string, string> = {
      TERMINEE:  'ok',
      EN_COURS:  'info',
      ANNULEE:   'danger',
      PLANIFIEE: 'purple',
    };
    return map[statut] ?? '';
  }

  /** Nom complet depuis PatientSummaryDto embarqué dans SeanceDto */
  seancePatientNom(s: SeanceDto): string {
    return s.patient ? `${s.patient.nom} ${s.patient.prenom}` : '—';
  }

  seanceHeure(s: SeanceDto): string {
    return s.heureDebut?.substring(0, 5) ?? '';
  }

  // ── Notifications ──────────────────────────────────────────────────────────
  showNotifPanel = false;
  notifications: NotificationVM[] = [];

  private buildNotifications(): void {
    this.notifications = this.rawAlertes
      .filter(a => !a.lue)
      .map(a => ({
        icon:     a.type === 'CRITIQUE'  ? 'emergency' :
                  a.type === 'ATTENTION' ? 'warning_amber' : 'info',
        text:     `${a.patient?.nom ?? ''} ${a.patient?.prenom ?? ''} — ${a.message}`,
        time:     this.relativeTime(a.dateCreation),
        type:     a.type === 'CRITIQUE'  ? 'crit' :
                  a.type === 'ATTENTION' ? 'warn' : 'info',
        read:     a.lue,
        alerteId: a.id,
      }));
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  toggleNotifPanel(): void { this.showNotifPanel = !this.showNotifPanel; }

  markAllRead(): void { this.marquerToutesAlertesLues(); }

  markNotifRead(n: NotificationVM): void {
    n.read = true;
    this.alerteSvc.marquerLue(n.alerteId).subscribe();
    const a = this.rawAlertes.find(x => x.id === n.alerteId);
    if (a) a.lue = true;
    this.buildNotifications();
  }

  // ── Historique label ───────────────────────────────────────────────────────
  histoLabel(type: string): string {
    const map: Record<string, string> = {
      seance:       'Séance',
      bilan:        'Bilan',
      consultation: 'Consultation',
      urgence:      'Urgence',
    };
    return map[type] ?? type;
  }

  // ── Recherche globale ──────────────────────────────────────────────────────
  showSearchModal   = false;
  globalSearchQuery = '';

  openSearch(): void {
    this.showSearchModal   = true;
    this.globalSearchQuery = '';
  }

  closeSearch(): void { this.showSearchModal = false; }

  get globalResults(): { patients: PatientVM[]; ordonnances: OrdonnanceDto[]; alertes: AlerteDto[] } {
    const q = this.globalSearchQuery.trim().toLowerCase();
    if (!q) return { patients: [], ordonnances: [], alertes: [] };
    return {
      patients: this.allPatients.filter(p =>
        p.nomComplet.toLowerCase().includes(q) ||
        (p.cin ?? '').toLowerCase().includes(q) ||
        p.pathologie.toLowerCase().includes(q)
      ).slice(0, 5),
      ordonnances: this.ordonnances.filter(o =>
        this.ordPatientNomComplet(o).toLowerCase().includes(q) ||
        o.medicaments.toLowerCase().includes(q)
      ).slice(0, 5),
      alertes: this.rawAlertes.filter(a =>
        a.message.toLowerCase().includes(q) ||
        `${a.patient?.nom ?? ''} ${a.patient?.prenom ?? ''}`.toLowerCase().includes(q)
      ).slice(0, 5),
    };
  }

  get globalResultsCount(): number {
    const r = this.globalResults;
    return r.patients.length + r.ordonnances.length + r.alertes.length;
  }

  searchGoToPatient(p: PatientVM): void {
    this.closeSearch();
    this.openDossier(p);
  }

  searchGoToOrdonnance(o: OrdonnanceDto): void {
    this.closeSearch();
    this.setSection('ordonnances');
    setTimeout(() => this.openOrdonnanceDetail(o), 50);
  }

  searchGoToAlerte(a: AlerteDto): void {
    this.closeSearch();
    this.setSection('alertes');
  }

  // ── Paramètres ─────────────────────────────────────────────────────────────
  showSettingsPanel = false;

  openSettings(): void { this.showSettingsPanel = true; }
  closeSettings(): void { this.showSettingsPanel = false; }

  get currentUser(): ReturnType<AuthService['getUtilisateur']> {
    return this.authSvc.getUtilisateur();
  }

  logout(): void {this.authSvc.logout() }

  // ── Toasts ─────────────────────────────────────────────────────────────────
  private toastIdCounter = 0;
  toasts: Toast[] = [];

  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.toastIdCounter;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.removeToast(id), 3500);
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  toastIcon(type: string): string {
    const map: Record<string, string> = {
      success: 'check_circle',
      warning: 'warning',
      error:   'error',
      info:    'info',
    };
    return map[type] ?? 'info';
  }

  // ── Utilitaires privés ─────────────────────────────────────────────────────
  private calcAge(dateNaissance: string): number {
    if (!dateNaissance) return 0;
    const dob   = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    return age;
  }

  private relativeTime(iso: string): string {
    if (!iso) return '';
    const h = Math.floor((Date.now() - new Date(iso).getTime()) / 3_600_000);
    if (h < 1)  return 'il y a < 1h';
    if (h < 24) return `il y a ${h}h`;
    return `il y a ${Math.floor(h / 24)}j`;
  }

  // ── Graphiques ─────────────────────────────────────────────────────────────

  private parseNum(s: string | number | null | undefined): number | null {
    if (s === null || s === undefined || s === '—') return null;
    if (typeof s === 'number') return s;
    const n = parseFloat(s.replace(',', '.'));
    return isNaN(n) ? null : n;
  }

  private numStr(v: number | null | undefined): string {
    return v !== null && v !== undefined ? String(v) : '—';
  }

  private norm(v: number | null, min: number, max: number): number {
    if (v === null) return 0;
    return Math.min(1, Math.max(0, (v - min) / (max - min)));
  }

  private metricColor(
    v: number | null,
    okRange: [number, number],
    warnRange: [number, number]
  ): string {
    if (v === null) return 'var(--c-text-3)';
    if (v >= okRange[0] && v <= okRange[1]) return 'var(--c-teal)';
    if (v >= warnRange[0] && v <= warnRange[1]) return 'var(--c-amber)';
    return 'var(--c-red)';
  }

  // SVG gauge arc (270° sweep, r=38, cx=50, cy=54)
  gaugeArc(pct: number): string {
    const r = 38, C = 2 * Math.PI * r, gaugeC = C * 0.75;
    return `${Math.min(1, Math.max(0, pct)) * gaugeC} ${C}`;
  }

  get gaugeTrack(): string {
    const r = 38, C = 2 * Math.PI * r, gaugeC = C * 0.75;
    return `${gaugeC} ${C - gaugeC}`;
  }

  get vitalGauges(): { label: string; valueStr: string; unit: string; refLabel: string; pct: number; color: string }[] {
    const d = this.selectedPatient?.dossierPatient;
    const sat  = this.parseNum(d?.saturation);
    const temp = this.parseNum(d?.temperature);
    const fc   = this.parseNum(d?.frequenceCardiaque);
    const fr   = this.parseNum(d?.frequenceRespiratoire);
    const glyc = this.parseNum(d?.glycemieCapillaire);

    return [
      {
        label: 'Saturation SpO₂',
        valueStr: this.numStr(d?.saturation),
        unit: '%',
        refLabel: '≥ 95%',
        pct: this.norm(sat, 85, 100),
        color: this.metricColor(sat, [95, 100], [90, 94]),
      },
      {
        label: 'Température',
        valueStr: this.numStr(d?.temperature),
        unit: '°C',
        refLabel: '36.1–37.2°C',
        pct: this.norm(temp, 35, 40),
        color: this.metricColor(temp, [36.1, 37.2], [35.5, 38]),
      },
      {
        label: 'Fréq. cardiaque',
        valueStr: this.numStr(d?.frequenceCardiaque),
        unit: 'bpm',
        refLabel: '60–100 bpm',
        pct: this.norm(fc, 40, 140),
        color: this.metricColor(fc, [60, 100], [50, 120]),
      },
      {
        label: 'Fréq. respiratoire',
        valueStr: this.numStr(d?.frequenceRespiratoire),
        unit: '/min',
        refLabel: '12–20 /min',
        pct: this.norm(fr, 8, 30),
        color: this.metricColor(fr, [12, 20], [10, 25]),
      },
      {
        label: 'Glycémie',
        valueStr: this.numStr(d?.glycemieCapillaire),
        unit: 'mmol/L',
        refLabel: '3.9–5.5',
        pct: this.norm(glyc, 2, 12),
        color: this.metricColor(glyc, [3.9, 5.5], [2, 7]),
      },
    ];
  }

  get tensionBars(): { label: string; value: number; max: number; color: string }[] {
    const ta = this.selectedPatient?.dossierPatient?.tensionArterielle;
    if (!ta || ta === '—') return [];
    const parts = ta.split('/');
    const sys = parseFloat(parts[0]);
    const dia = parseFloat(parts[1] ?? '0');
    if (isNaN(sys)) return [];
    return [
      {
        label: `Systolique — ${sys} mmHg`,
        value: sys,
        max: 200,
        color: sys < 140 ? 'var(--c-teal)' : sys < 160 ? 'var(--c-amber)' : 'var(--c-red)',
      },
      {
        label: `Diastolique — ${dia} mmHg`,
        value: dia,
        max: 120,
        color: dia < 90 ? 'var(--c-teal)' : dia < 100 ? 'var(--c-amber)' : 'var(--c-red)',
      },
    ];
  }

  get bioBarData(): { label: string; valueStr: string; unit: string; refLabel: string; pct: number; color: string }[] {
    const p = this.selectedPatient;
    if (!p) return [];
    const cr = this.parseNum(p.creatinine);
    const ur = this.parseNum(p.uree);
    const hb = this.parseNum(p.hemoglobine);

    return [
      {
        label: 'Créatinine',
        valueStr: p.creatinine,
        unit: 'mg/dL',
        refLabel: '0.7–1.2',
        pct: Math.min(1, (cr ?? 0) / 20),
        color: cr === null ? 'var(--c-text-3)' : cr <= 1.2 ? 'var(--c-teal)' : cr <= 5 ? 'var(--c-amber)' : 'var(--c-red)',
      },
      {
        label: 'Urée',
        valueStr: p.uree,
        unit: 'mmol/L',
        refLabel: '2.5–7.5',
        pct: Math.min(1, (ur ?? 0) / 30),
        color: ur === null ? 'var(--c-text-3)' : ur <= 7.5 ? 'var(--c-teal)' : ur <= 15 ? 'var(--c-amber)' : 'var(--c-red)',
      },
      {
        label: 'Hémoglobine',
        valueStr: p.hemoglobine,
        unit: 'g/dL',
        refLabel: '12–16',
        pct: Math.min(1, (hb ?? 0) / 20),
        color: hb === null ? 'var(--c-text-3)' : (hb >= 12 && hb <= 16) ? 'var(--c-teal)' : hb >= 9 ? 'var(--c-amber)' : 'var(--c-red)',
      },
    ];
  }
}