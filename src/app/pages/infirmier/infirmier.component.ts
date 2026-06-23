import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, forkJoin, of } from 'rxjs';
import { PatientService } from '../../../services/patient.service';
import { OrdonnanceService } from '../../../services/ordonnance.service';
import { ConstantesVitalesService } from '../../../services/constantes-vitales.service';
import { PatientInstructionsService } from '../../../services/patient-instructions.service';
import { AuthService } from '../../../services/auth.service';
import { SeanceService } from '../../../services/seance.service';
import { AlerteService } from '../../../services/alerte.service';
import { AlerteDto } from '../../../models/alerte-dto';
import { PatientDto } from '../../../models/patient-dto';
import { OrdonnanceDto } from '../../../models/ordonnance-dto';
import { ConstantesVitalesDto } from '../../../models/constantes-vitales-dto';
import { PatientInstructionsDto } from '../../../models/patient-instructions-dto';
import { Utilisateur } from '../../../models/utilisateur';
import { SeanceDto } from '../../../models/seance-dto';

type ToastType = 'success' | 'warning' | 'info' | 'error';
interface Toast { id: number; message: string; type: ToastType; }

interface PatientVM extends PatientDto {
  age: number;
  initials: string;
  nomComplet: string;
}

interface SeanceVM {
  id: number;
  patientId: number;
  patientNom: string;
  patientInit: string;
  creneau: string;
  statut: string;
  heureDebut: string | null;
  heureFin: string | null;
  heureFinPrevue: string | null;
  dureeMinutes: number | null;
  constantesSaisies: boolean;
  date: string;
  editingFin: boolean;
  editFinValue: string;
}

@Component({
  selector: 'app-infirmier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier.component.html',
  styleUrl: './infirmier.component.scss'
})
export class InfirmierComponent implements OnInit, OnDestroy {
  isLight = false;
  isLoadingPatients = true;
  isLoadingPlanning = true;
  isLoadingDetails = false;
  loadError = '';
  planningError = '';
  currentUser: Utilisateur | null = null;

  patients: PatientVM[] = [];
  searchQuery = '';
  activePage: 'planning' | 'patients' = 'planning';
  selectedPatient: PatientVM | null = null;
  activeTab: 'constantes' | 'ordonnances' | 'instructions' | 'alertes' = 'constantes';

  seances: SeanceVM[] = [];
  now = new Date();
  private tickInterval: ReturnType<typeof setInterval> | null = null;

  notifOpen = false;
  allAlertes: AlerteDto[] = [];
  patientAlertes: AlerteDto[] = [];
  isLoadingNotif = false;
  private alertInterval: ReturnType<typeof setInterval> | null = null;

  constantes: ConstantesVitalesDto[] = [];
  ordonnances: OrdonnanceDto[] = [];
  instructions: PatientInstructionsDto | null = null;

  readonly dureeOptions = [
    { label: '30 min', minutes: 30  },
    { label: '1h',     minutes: 60  },
    { label: '1h 30',  minutes: 90  },
    { label: '2h',     minutes: 120 },
    { label: '2h 30',  minutes: 150 },
    { label: '3h',     minutes: 180 },
    { label: '3h 30',  minutes: 210 },
    { label: '4h',     minutes: 240 },
    { label: '4h 30',  minutes: 270 },
    { label: '5h',     minutes: 300 },
  ];
  showDemarrerModal = false;
  seanceADemarrer: SeanceVM | null = null;
  selectedDureeMin = 240;
  demarrerError = false;
  isDemarrant = false;

  showForm = false;
  isSaving = false;
  cvForm = { tensionSys: '', tensionDia: '', poids: '', bpm: '', notes: '' };

  private tid = 0;
  toasts: Toast[] = [];

  constructor(
    private authService: AuthService,
    private patientService: PatientService,
    private ordonnanceService: OrdonnanceService,
    private constantesService: ConstantesVitalesService,
    private instructionsService: PatientInstructionsService,
    private seanceService: SeanceService,
    private alerteService: AlerteService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUtilisateur();
    this.loadPatients();
    this.loadPlanning();
    this.loadAllAlertes();
    this.tickInterval = setInterval(() => {
      this.now = new Date();
      this.checkOverdueSessions();
    }, 30000);
    this.alertInterval = setInterval(() => this.loadAllAlertes(), 60000);
  }

  ngOnDestroy(): void {
    if (this.tickInterval) clearInterval(this.tickInterval);
    if (this.alertInterval) clearInterval(this.alertInterval);
  }

  // ── Planning ──────────────────────────────────────────────────────────────

  loadPlanning(): void {
    this.isLoadingPlanning = true;
    this.planningError = '';
    this.seanceService.getToday().subscribe({
      next: (list) => {
        this.seances = list.map(s => this.toSeanceVM(s));
        this.isLoadingPlanning = false;
      },
      error: () => {
        this.isLoadingPlanning = false;
        this.planningError = 'Impossible de charger le planning.';
      }
    });
  }

  private toSeanceVM(s: SeanceDto): SeanceVM {
    const prenom = s.patient?.prenom ?? '';
    const nom    = s.patient?.nom    ?? '';
    return {
      id:             s.id,
      patientId:      s.patient?.id ?? 0,
      patientNom:     `${prenom} ${nom}`.trim(),
      patientInit:    `${prenom[0] ?? ''}${nom[0] ?? ''}`.toUpperCase(),
      creneau:        s.creneau  ?? '-',
      statut:         s.statut   ?? 'PLANIFIEE',
      heureDebut:     this.timeFromIso(s.heureDebutEffective),
      heureFin:       s.statut === 'TERMINEE' ? this.timeFromIso(s.heureFinEffective) : null,
      heureFinPrevue: this.timeFromIso(s.heureFinEffective),
      dureeMinutes:   s.dureeMinutes  ?? null,
      constantesSaisies: !!s.constantesSaisies,
      date:           s.date,
      editingFin:     false,
      editFinValue:   this.timeFromIso(s.heureFinEffective) ?? '',
    };
  }

  creneauLabel(c: string): string {
    return ({ MATIN: 'Matin', APRES_MIDI: 'Après-midi', SOIR: 'Soir' } as Record<string, string>)[c] ?? c;
  }

  statutLabel(s: string): string {
    return ({ PLANIFIEE: 'Planifiée', EN_ATTENTE_CONSTANTES: 'Constantes requises', EN_COURS: 'En cours', TERMINEE: 'Terminée' } as Record<string, string>)[s] ?? s;
  }

  todayLabel(): string {
    return new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  // ── Duration picker ───────────────────────────────────────────────────────

  openDemarrerModal(s: SeanceVM): void {
    if (!s.constantesSaisies) {
      this.seanceService.getById(s.id).subscribe({
        next: (dto) => {
          const updated = this.toSeanceVM(dto);
          Object.assign(s, updated);
          if (updated.constantesSaisies) {
            this.openDemarrerModal(s);
          } else {
            this.inviteSaisieConstantesAvantDemarrage(s);
          }
        },
        error: () => this.inviteSaisieConstantesAvantDemarrage(s),
      });
      return;
    }
    this.seanceADemarrer = s;
    this.selectedDureeMin = 240;
    this.demarrerError = false;
    this.showDemarrerModal = true;
  }

  closeDemarrerModal(): void {
    this.showDemarrerModal = false;
    this.seanceADemarrer = null;
  }

  confirmerDemarrer(): void {
    if (!this.seanceADemarrer || this.isDemarrant) return;
    const n = new Date();
    const heureDebut     = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`;
    const heureFinPrevue = this.addMinutesToTime(heureDebut, this.selectedDureeMin);

    this.isDemarrant = true;
    this.demarrerError = false;
    const seance = this.seanceADemarrer;

    this.seanceService.demarrer(seance.id, this.selectedDureeMin).subscribe({
      next: (dto) => {
        const vm = this.seances.find(x => x.id === dto.id);
        if (vm) {
          const updated = this.toSeanceVM(dto);
          Object.assign(vm, updated);
          vm.statut        = dto.statut        ?? 'EN_COURS';
          vm.heureDebut    = updated.heureDebut ?? heureDebut;
          vm.heureFinPrevue = updated.heureFinPrevue ?? heureFinPrevue;
          vm.dureeMinutes  = dto.dureeMinutes  ?? this.selectedDureeMin;
          vm.editFinValue  = vm.heureFinPrevue ?? '';
        }
        this.isDemarrant = false;
        this.closeDemarrerModal();
        this.showToast(`Séance démarrée — fin prévue à ${heureFinPrevue}`, 'success');
      },
      error: (err) => {
        this.isDemarrant = false;
        this.demarrerError = true;
        this.showToast(
          err?.error?.message ?? 'Les constantes vitales doivent etre saisies avant de demarrer la seance.',
          'warning'
        );
      }
    });
  }

  addMinutesToTime(hhmm: string, minutes: number): string {
    const parts = hhmm.split(':');
    const total = (+parts[0]) * 60 + (+parts[1]) + minutes;
    return `${String(Math.floor(total / 60) % 24).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }

  heureFinPreview(): string {
    const n = new Date();
    const hhmm = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`;
    return this.addMinutesToTime(hhmm, this.selectedDureeMin);
  }

  // ── Timer / auto-terminate ────────────────────────────────────────────────

  remainingLabel(s: SeanceVM): string {
    if (!s.heureFinPrevue || s.statut !== 'EN_COURS') return '';
    const [fh, fm] = s.heureFinPrevue.split(':').map(Number);
    const finMs  = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), fh, fm).getTime();
    const diffMin = Math.round((finMs - this.now.getTime()) / 60000);
    if (diffMin <= 0) return 'Heure de fin atteinte';
    if (diffMin < 60) return `Reste ${diffMin} min`;
    const h = Math.floor(diffMin / 60);
    const m = diffMin % 60;
    return m > 0 ? `Reste ${h}h ${m}min` : `Reste ${h}h`;
  }

  isOverdue(s: SeanceVM): boolean {
    if (!s.heureFinPrevue || s.statut !== 'EN_COURS') return false;
    const [fh, fm] = s.heureFinPrevue.split(':').map(Number);
    const finMs = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), fh, fm).getTime();
    return this.now.getTime() >= finMs;
  }

  private checkOverdueSessions(): void {
    this.seances.forEach(s => {
      if (s.statut === 'EN_COURS' && this.isOverdue(s)) {
        s.statut = 'TERMINEE';
        this.seanceService.terminer(s.id).subscribe({
          next: (dto) => {
            s.statut   = dto.statut   ?? 'TERMINEE';
            s.heureFin = this.timeFromIso(dto.heureFinEffective);
            this.showToast(`Séance de ${s.patientNom} terminée automatiquement.`, 'info');
          },
          error: () => { s.statut = 'EN_COURS'; }
        });
      }
    });
  }

  // ── Terminate ─────────────────────────────────────────────────────────────

  terminerSeance(s: SeanceVM): void {
    this.seanceService.terminer(s.id).subscribe({
      next: (dto) => {
        s.statut   = dto.statut   ?? 'TERMINEE';
        s.heureFin = this.timeFromIso(dto.heureFinEffective);
        this.showToast(`Séance de ${s.patientNom} terminée avec succès.`, 'success');
      },
      error: () => { this.showToast('Erreur lors de la terminaison de la séance.', 'error'); }
    });
  }

  // ── Edit end time (client-side correction) ────────────────────────────────

  startEditFin(s: SeanceVM): void {
    s.editingFin  = true;
    s.editFinValue = s.heureFinPrevue ?? '';
  }

  saveEditFin(s: SeanceVM): void {
    s.editingFin = false;
    if (s.editFinValue && s.editFinValue !== s.heureFinPrevue) {
      this.seanceService.updateHeureFin(s.id, { heureFinEffective: this.isoTodayAt(s.editFinValue) }).subscribe({
        next: dto => {
          Object.assign(s, this.toSeanceVM(dto));
          this.showToast('Heure de fin corrigée.', 'info');
        },
        error: () => this.showToast("Impossible de corriger l'heure de fin.", 'error'),
      });
    }
  }

  // ── Patient seance today ──────────────────────────────────────────────────

  getSeanceToday(patientId: number): SeanceVM | null {
    for (const s of this.seances) {
      if (s.patientId === patientId) return s;
    }
    return null;
  }

  hasSeanceEnCours(patientId: number): boolean {
    return this.seances.some(s => s.patientId === patientId && s.statut === 'EN_COURS');
  }

  get activeSeanceId(): number | null {
    if (!this.selectedPatient) return null;
    const active = this.seances.find(s => s.patientId === this.selectedPatient?.id && s.statut === 'EN_COURS');
    if (active) return active.id;
    return this.seances.find(s =>
      s.patientId === this.selectedPatient?.id
      && (s.statut === 'PLANIFIEE' || s.statut === 'EN_ATTENTE_CONSTANTES')
    )?.id ?? null;
  }

  selectPatientById(patientId: number): void {
    const p = this.patients.find(x => x.id === patientId);
    if (p) {
      this.activePage = 'patients';
      this.selectPatient(p);
    } else {
      this.showToast('Dossier patient non disponible.', 'warning');
    }
  }

  // ── Patient list ──────────────────────────────────────────────────────────

  private loadPatients(): void {
    this.isLoadingPatients = true;
    this.loadError = '';
    this.patientService.invalidateCache();
    this.patientService.getAll().subscribe({
      next: (patients) => {
        this.patients = patients.map(p => this.toVM(p));
        this.isLoadingPatients = false;
        if (patients.length === 0) {
          this.loadError = 'Aucun patient enregistré dans le système.';
        }
      },
      error: (err) => {
        this.isLoadingPatients = false;
        if (err?.status === 401 || err?.status === 403) {
          this.loadError = 'Session expirée. Veuillez vous reconnecter.';
        } else if (err?.status === 0) {
          this.loadError = 'Serveur inaccessible.';
        } else {
          this.loadError = 'Impossible de charger la liste des patients.';
        }
      }
    });
  }

  get filteredPatients(): PatientVM[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return this.patients;
    return this.patients.filter(p =>
      p.nomComplet.toLowerCase().includes(q) ||
      (p.cin ?? '').toLowerCase().includes(q)
    );
  }

  setTab(tab: 'constantes' | 'ordonnances' | 'instructions' | 'alertes'): void {
    this.activeTab = tab;
    if (tab === 'alertes') this.markPatientAlertesAsRead();
  }

  selectPatient(p: PatientVM): void {
    this.selectedPatient = p;
    this.activeTab = 'constantes';
    this.constantes = [];
    this.ordonnances = [];
    this.instructions = null;
    this.patientAlertes = [];
    this.isLoadingDetails = true;

    forkJoin({
      constantes:   this.constantesService.getByPatient(p.id).pipe(catchError(() => of([] as ConstantesVitalesDto[]))),
      ordonnances:  this.ordonnanceService.getByPatient(p.id).pipe(catchError(() => of([] as OrdonnanceDto[]))),
      instructions: this.instructionsService.getByPatient(p.id).pipe(catchError(() => of(null)))
    }).subscribe({
      next: ({ constantes, ordonnances, instructions }) => {
        this.constantes   = constantes.sort((a, b) => b.date.localeCompare(a.date));
        this.ordonnances  = ordonnances.sort((a, b) => b.dateEmission.localeCompare(a.dateEmission));
        this.instructions = instructions;
        this.isLoadingDetails = false;
      },
      error: () => { this.isLoadingDetails = false; }
    });
    this.loadPatientAlertes(p.id);
  }

  closePatient(): void { this.selectedPatient = null; this.showForm = false; }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.cvForm = { tensionSys: '', tensionDia: '', poids: '', bpm: '', notes: '' };
  }

  saveConstantes(): void {
    if (!this.selectedPatient || this.isSaving) return;
    const seanceId = this.activeSeanceId;
    if (!seanceId) {
      this.showToast('Aucune seance planifiee ou en cours pour associer ces constantes.', 'warning');
      return;
    }
    const sys   = +this.cvForm.tensionSys;
    const dia   = +this.cvForm.tensionDia;
    const poids = +this.cvForm.poids;
    const bpm   = +this.cvForm.bpm;
    if (!sys || !dia || !poids || !bpm) {
      this.showToast('Veuillez remplir tous les champs obligatoires.', 'warning');
      return;
    }

    this.isSaving = true;
    const payload = {
      tensionSys: sys, tensionDia: dia, poids, bpm,
      notes:     this.cvForm.notes.trim(),
      date:      new Date().toISOString().slice(0, 10),
      patientId: this.selectedPatient.id,
      seanceId,
    };
    this.constantesService.create(payload).subscribe({
      next: (c) => {
        this.constantes = [c, ...this.constantes];
        const seance = this.seances.find(s => s.id === seanceId);
        if (seance) {
          seance.constantesSaisies = true;
        }
        this.isSaving = false;
        this.showForm = false;
        this.cvForm = { tensionSys: '', tensionDia: '', poids: '', bpm: '', notes: '' };
        this.showToast('Constantes enregistrées avec succès.', 'success');
        this.seanceService.invalidateCache();
        this.loadPlanning();
      },
      error: (err) => {
        this.isSaving = false;
        this.showToast(`Erreur lors de l'enregistrement (${err?.status ?? ''}).`, 'error');
      }
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  get currentUserInitials(): string {
    const u = this.currentUser;
    return `${u?.prenom?.[0] ?? ''}${u?.nom?.[0] ?? ''}`.toUpperCase() || 'IN';
  }

  get currentUserName(): string {
    const u = this.currentUser;
    return u ? `${u.prenom} ${u.nom}`.trim() : 'Infirmier';
  }

  private toVM(p: PatientDto): PatientVM {
    return {
      ...p,
      age:       this.calcAge(p.dateNaissance),
      initials:  `${p.prenom?.[0] ?? ''}${p.nom?.[0] ?? ''}`.toUpperCase(),
      nomComplet: `${p.prenom ?? ''} ${p.nom ?? ''}`.trim(),
    };
  }

  private inviteSaisieConstantesAvantDemarrage(seance: SeanceVM): void {
    this.showToast('Saisissez les constantes vitales avant de demarrer la seance.', 'warning');
    const patient = this.patients.find(p => p.id === seance.patientId);
    if (patient) {
      this.activePage = 'patients';
      this.selectPatient(patient);
      this.activeTab = 'constantes';
      this.showForm = true;
    }
  }

  private calcAge(dob: string): number {
    if (!dob) return 0;
    const today = new Date(), birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() ||
       (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) age--;
    return age;
  }

  private timeFromIso(value?: string | null): string | null {
    if (!value) return null;
    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value.slice(11, 16) || null;
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  private isoTodayAt(hhmm: string): string {
    const [h, m] = hhmm.split(':').map(Number);
    const d = new Date();
    d.setHours(h || 0, m || 0, 0, 0);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:00`;
  }

  fmtDate(iso: string): string {
    if (!iso) return '-';
    const d = iso.slice(0, 10).split('-');
    return d.length === 3 ? `${d[2]}/${d[1]}/${d[0]}` : iso;
  }

  tensionStatus(sys: number, dia: number): string {
    if (sys >= 140 || dia >= 90) return 'crit';
    if (sys < 90  || dia < 60 ) return 'warn';
    return 'ok';
  }

  tensionLabel(sys: number, dia: number): string {
    if (sys >= 180 || dia >= 120) return 'Crise hypertensive';
    if (sys >= 140 || dia >= 90 ) return 'Hypertension';
    if (sys < 90  || dia < 60  ) return 'Hypotension';
    return 'Normale';
  }

  ordonnanceStatusLabel(s: string): string {
    return ({ ACTIVE: 'Active', EXPIREE: 'Expirée', ANNULEE: 'Annulée',
              EN_ATTENTE: 'En attente', VALIDEE: 'Validée' } as Record<string, string>)[s] ?? s;
  }

  ordonnanceStatusTone(s: string): string {
    return ({ ACTIVE: 'ok', VALIDEE: 'ok', EN_ATTENTE: 'warn',
              EXPIREE: 'warn', ANNULEE: 'crit' } as Record<string, string>)[s] ?? 'neutral';
  }

  // ── Alertes / Notifications ───────────────────────────────────────────────

  loadAllAlertes(): void {
    const username = this.currentUser?.login ?? '';
    if (!username) return;
    this.isLoadingNotif = true;
    this.alerteService.getMesAlertes(username).subscribe({
      next: (list) => { this.allAlertes = list; this.isLoadingNotif = false; },
      error: () => { this.isLoadingNotif = false; }
    });
  }

  loadPatientAlertes(patientId: number): void {
    this.alerteService.getByPatient(patientId).subscribe({
      next: (list) => { this.patientAlertes = list; },
      error: () => {}
    });
  }

  openPatientFromNotif(alerte: AlerteDto): void {
    this.notifOpen = false;
    const p = this.patients.find(x => x.id === alerte.patient?.id);
    if (p) {
      this.activePage = 'patients';
      this.selectPatient(p);
      this.activeTab = 'alertes';
    } else {
      this.showToast('Dossier patient non disponible.', 'warning');
    }
  }

  markPatientAlertesAsRead(): void {
    this.patientAlertes.filter(a => !a.lue).forEach(a => {
      this.alerteService.marquerLue(a.id).subscribe({
        next: (updated) => {
          const idx = this.patientAlertes.findIndex(x => x.id === updated.id);
          if (idx !== -1) this.patientAlertes[idx] = updated;
          const globalIdx = this.allAlertes.findIndex(x => x.id === updated.id);
          if (globalIdx !== -1) this.allAlertes[globalIdx] = updated;
        },
        error: () => {}
      });
    });
  }

  get unreadCount(): number {
    return this.allAlertes.filter(a => !a.lue).length;
  }

  get patientUnreadCount(): number {
    return this.patientAlertes.filter(a => !a.lue).length;
  }

  alerteTypeClass(type: string): string {
    return ({
      CRITIQUE:  'alerte--critique',
      IMPORTANT: 'alerte--important',
      TENDANCE:  'alerte--tendance',
      SEANCE:    'alerte--seance',
      ATTENTION: 'alerte--important',
      INFO:      'alerte--info',
    } as Record<string, string>)[type] ?? 'alerte--info';
  }

  alerteTypeIcon(type: string): string {
    return ({
      CRITIQUE:  'emergency',
      IMPORTANT: 'warning',
      TENDANCE:  'trending_up',
      SEANCE:    'schedule',
      ATTENTION: 'info',
      INFO:      'info',
    } as Record<string, string>)[type] ?? 'info';
  }

  alerteTimeLabel(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    const now = new Date();
    const diffMin = Math.round((now.getTime() - d.getTime()) / 60000);
    if (diffMin < 1)   return "À l'instant";
    if (diffMin < 60)  return `Il y a ${diffMin} min`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24)    return `Il y a ${diffH}h`;
    const diffD = Math.floor(diffH / 24);
    return `Il y a ${diffD}j`;
  }

  showToast(message: string, type: ToastType = 'info'): void {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }
  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }
  toastIcon(type: string): string {
    return ({ success: 'check_circle', warning: 'warning', error: 'error', info: 'info' } as Record<string, string>)[type] ?? 'info';
  }

  toggleTheme(): void { this.isLight = !this.isLight; }
  logout(): void { this.authService.logout(); }
}
