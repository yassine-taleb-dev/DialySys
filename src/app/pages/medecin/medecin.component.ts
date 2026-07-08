import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, forkJoin, of, map } from 'rxjs';

import { ConstantesVitalesDto } from '../../../models/constantes-vitales-dto';
import { todayIso, formatDateFr } from '../../../models/dateutils';
import { DossierPatientDto } from '../../../models/dossier-patient-dto';
import { OrdonnanceDto } from '../../../models/ordonnance-dto';
import { OrdonnanceRequestDto } from '../../../models/ordonnance-request-dto';
import { PatientDto } from '../../../models/patient-dto';
import { PatientInstructionsDto } from '../../../models/patient-instructions-dto';
import { PatientInstructionsRequestDto } from '../../../models/patient-instructions-request-dto';
import { Utilisateur } from '../../../models/utilisateur';
import { AlerteService } from '../../../services/alerte.service';
import { AlerteDto } from '../../../models/alerte-dto';
import { AuthService } from '../../../services/auth.service';
import { ConstantesVitalesService } from '../../../services/constantes-vitales.service';
import { DossierPatientService } from '../../../services/dossier-patient.service';
import { OrdonnanceService } from '../../../services/ordonnance.service';
import { PatientInstructionsService } from '../../../services/patient-instructions.service';
import { PatientService } from '../../../services/patient.service';

type TabKey = 'resume' | 'constantes' | 'ordonnances' | 'rediger' | 'statistiques' | 'alertes';
type ToastType = 'success' | 'warning' | 'info' | 'error';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface PatientVM extends PatientDto {
  age: number;
  initials: string;
  nomComplet: string;
  pathologie: string;
  debutDialyse: string;
  poidsDossier: string;
  tensionDossier: string;
  frequenceDossier: string;
  saturationDossier: string;
  temperatureDossier: string;
  creatinine: string;
  uree: string;
  hemoglobine: string;
  antecedents: string;
}

interface OrdonnanceForm {
  medicaments: string;
  posologie: string;
  instructions: string;
  dateExpiration: string;
}

interface InstructionsForm {
  poidsSec: string;
  taille: string;
  groupeSanguin: string;
  abordVasculaire: string;
  localisation: string;
  aiguilles: string;
  taSystolique: string;
  taDiastolique: string;
  epoActif: boolean;
  eprex: boolean;
  eprexDose: string;
  recormon: boolean;
  recormonDose: string;
  epoFrequence: string;
  ferIvActif: boolean;
  venoferDose: string;
  ferIvFrequence: string;
  allergies: string;
}

@Component({
  selector: 'app-medecin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.scss',
})
export class MedecinComponent implements OnInit, OnDestroy {
  isLight = false;
  isLoadingPatients = true;
  isLoadingDetails = false;
  isSaving = false;
  loadError = '';
  detailError = '';
  searchQuery = '';
  activeTab: TabKey = 'resume';

  // Sidebar nav
  showPatientsPanel = true;
  dossierSearchQuery = '';
  patientPage = 1;
  readonly patientPageSize = 8;

  // Dossier modal
  showDossierModal = false;
  dossierPatient: PatientVM | null = null;
  dossierData: DossierPatientDto | null = null;
  isLoadingDossier = false;
  modalTab: TabKey = 'resume';
  modalOrdonnances: OrdonnanceDto[] = [];
  modalConstantes: ConstantesVitalesDto[] = [];

  patients: PatientVM[] = [];
  selectedPatient: PatientVM | null = null;
  ordonnances: OrdonnanceDto[] = [];
  constantes: ConstantesVitalesDto[] = [];
  selectedOrdonnance: OrdonnanceDto | null = null;
  isEditingInstructions = false;
  isUpdatingInstructions = false;
  instructionDraft = '';

  ordonnanceForm: OrdonnanceForm = this.emptyOrdonnanceForm();
  instructionsForm: InstructionsForm = this.emptyInstructionsForm();
  isSavingInstructions = false;
  toasts: Toast[] = [];
  private toastId = 0;

  // Stats
  alertesCritiques = 0;
  alertesAttention = 0;
  isLoadingStats = false;

  // Notification panel
  notifOpen = false;
  allAlertes: AlerteDto[] = [];
  patientAlertes: AlerteDto[] = [];
  isLoadingNotif = false;
  private alertInterval: ReturnType<typeof setInterval> | null = null;

  constructor(
    private patientService: PatientService,
    private ordonnanceService: OrdonnanceService,
    private constantesService: ConstantesVitalesService,
    private dossierService: DossierPatientService,
    private instructionsService: PatientInstructionsService,
    private authService: AuthService,
    private alerteService: AlerteService,
  ) {}

  ngOnInit(): void {
    this.loadPatients();
    this.loadAllAlertes();
    this.alertInterval = setInterval(() => this.loadAllAlertes(true), 15000);
  }

  ngOnDestroy(): void {
    if (this.alertInterval) clearInterval(this.alertInterval);
  }

  get currentUser(): Utilisateur | null {
    return this.authService.getUtilisateur();
  }

  get currentUserInitials(): string {
    const user = this.currentUser;
    return `${user?.prenom?.[0] ?? ''}${user?.nom?.[0] ?? ''}`.toUpperCase();
  }

  get filteredPatients(): PatientVM[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) return this.patients;

    return this.patients.filter(patient =>
      patient.nomComplet.toLowerCase().includes(query) ||
      (patient.cin ?? '').toLowerCase().includes(query) ||
      patient.pathologie.toLowerCase().includes(query)
    );
  }

  get latestConstantes(): ConstantesVitalesDto | null {
    return this.constantes[0] ?? null;
  }

  get ordonnanceCountLabel(): string {
    return `${this.ordonnances.length} ordonnance${this.ordonnances.length > 1 ? 's' : ''}`;
  }

  loadPatients(): void {
    this.isLoadingPatients = true;
    this.loadError = '';
    this.patientService.invalidateCache();

    this.patientService.getAll().subscribe({
      next: patients => {
        this.patients = patients.map(patient => this.toPatientVM(patient));
        this.isLoadingPatients = false;
        if (patients.length === 0) {
          this.loadError = 'Aucun patient enregistré dans le système.';
        }
      },
      error: (err) => {
        if (err?.status === 401 || err?.status === 403) {
          this.loadError = 'Session expirée. Veuillez vous reconnecter.';
        } else if (err?.status === 0) {
          this.loadError = 'Serveur inaccessible. Vérifiez votre connexion ou réessayez dans quelques secondes.';
        } else {
          this.loadError = 'Impossible de charger la liste des patients.';
        }
        this.isLoadingPatients = false;
      },
    });
  }

  selectPatient(patient: PatientVM): void {
    this.selectedPatient = patient;
    this.activeTab = 'resume';
    this.detailError = '';
    this.selectedOrdonnance = null;
    this.ordonnances = [];
    this.constantes = [];
    this.patientAlertes = [];
    this.ordonnanceForm = this.emptyOrdonnanceForm();
    this.instructionsForm = this.toInstructionsForm(null, patient.groupeSanguin);
    this.isLoadingDetails = true;
    this.loadPatientAlertes(patient.id);

    forkJoin({
      ordonnances: this.ordonnanceService.getByPatient(patient.id).pipe(
        catchError(() => of([] as OrdonnanceDto[]))
      ),
      constantes: this.constantesService.getByPatient(patient.id).pipe(
        catchError(() => of([] as ConstantesVitalesDto[]))
      ),
      dossier: this.dossierService.getByPatient(patient.id).pipe(
        catchError(() => of(null))
      ),
      instructions: this.instructionsService.getByPatient(patient.id).pipe(
        catchError(() => of(null))
      ),
    }).subscribe({
      next: ({ ordonnances, constantes, dossier, instructions }) => {
        this.updateSelectedPatientDossier(dossier);
        this.instructionsForm = this.toInstructionsForm(instructions, this.selectedPatient?.groupeSanguin ?? patient.groupeSanguin);
        this.ordonnances = this.sortOrdonnances(ordonnances);
        this.constantes = this.sortConstantes(constantes);
        this.isLoadingDetails = false;
      },
      error: (err) => {
        this.detailError = err?.status === 401 || err?.status === 403
          ? 'Acces refuse. Veuillez vous reconnecter avec un compte autorise.'
          : 'Impossible de charger les donnees de ce patient.';
        this.isLoadingDetails = false;
      },
    });
  }

  setTab(tab: TabKey): void {
    this.activeTab = tab;
    if (tab === 'statistiques') this.loadStats();
  }

  get filteredDossierPatients(): PatientVM[] {
    const q = this.dossierSearchQuery.trim().toLowerCase();
    if (!q) return this.patients;
    return this.patients.filter(p =>
      p.nomComplet.toLowerCase().includes(q) ||
      (p.cin ?? '').toLowerCase().includes(q) ||
      p.pathologie.toLowerCase().includes(q)
    );
  }

  get totalPatientPages(): number {
    return Math.max(1, Math.ceil(this.filteredDossierPatients.length / this.patientPageSize));
  }

  get paginatedDossierPatients(): PatientVM[] {
    const start = (this.patientPage - 1) * this.patientPageSize;
    return this.filteredDossierPatients.slice(start, start + this.patientPageSize);
  }

  patientPageEnd(): number {
    return Math.min(this.patientPage * this.patientPageSize, this.filteredDossierPatients.length);
  }

  onPatientSearch(): void {
    this.patientPage = 1;
  }

  openDossierModal(patient: PatientVM): void {
    this.dossierPatient = patient;
    this.dossierData = null;
    this.modalOrdonnances = [];
    this.modalConstantes = [];
    this.modalTab = 'resume';
    this.showDossierModal = true;
    this.isLoadingDossier = true;

    forkJoin({
      dossier: this.dossierService.getByPatient(patient.id).pipe(catchError(() => of(null))),
      ordonnances: this.ordonnanceService.getByPatient(patient.id).pipe(catchError(() => of([] as OrdonnanceDto[]))),
      constantes: this.constantesService.getByPatient(patient.id).pipe(catchError(() => of([] as ConstantesVitalesDto[]))),
    }).subscribe(({ dossier, ordonnances, constantes }) => {
      this.dossierData = dossier;
      this.modalOrdonnances = this.sortOrdonnances(ordonnances);
      this.modalConstantes = this.sortConstantes(constantes);
      this.isLoadingDossier = false;
    });
  }

  closeDossierModal(): void {
    this.showDossierModal = false;
    this.dossierPatient = null;
    this.dossierData = null;
    this.modalOrdonnances = [];
    this.modalConstantes = [];
  }

  openOrdonnance(ordonnance: OrdonnanceDto): void {
    this.selectedOrdonnance = ordonnance;
    this.isEditingInstructions = false;
    this.instructionDraft = ordonnance.instructions ?? '';
  }

  closeOrdonnance(): void {
    this.selectedOrdonnance = null;
    this.isEditingInstructions = false;
    this.isUpdatingInstructions = false;
    this.instructionDraft = '';
  }

  editInstructions(): void {
    if (!this.selectedOrdonnance) return;
    this.instructionDraft = this.selectedOrdonnance.instructions ?? '';
    this.isEditingInstructions = true;
  }

  cancelEditInstructions(): void {
    this.instructionDraft = this.selectedOrdonnance?.instructions ?? '';
    this.isEditingInstructions = false;
  }

  saveOrdonnanceInstructions(): void {
    if (!this.selectedOrdonnance || this.isUpdatingInstructions) return;

    const instructions = this.instructionDraft.trim() || null;
    this.isUpdatingInstructions = true;

    this.ordonnanceService.update(this.selectedOrdonnance.id, { instructions }).subscribe({
      next: updated => {
        this.selectedOrdonnance = updated;
        this.ordonnances = this.sortOrdonnances(
          this.ordonnances.map(ordonnance => ordonnance.id === updated.id ? updated : ordonnance)
        );
        this.instructionDraft = updated.instructions ?? '';
        this.isEditingInstructions = false;
        this.isUpdatingInstructions = false;
        this.showToast('Instructions modifiees avec succes.', 'success');
      },
      error: () => {
        this.isUpdatingInstructions = false;
        this.showToast("Les instructions n'ont pas pu etre modifiees.", 'error');
      },
    });
  }

  submitOrdonnance(): void {
    if (!this.selectedPatient || this.isSaving) return;

    if (!this.ordonnanceForm.medicaments.trim()) {
      this.showToast('Le champ medicaments est obligatoire.', 'warning');
      return;
    }

    const utilisateurId = this.authService.utilisateurId;
    if (!utilisateurId) {
      this.showToast('Session medecin introuvable. Reconnectez-vous.', 'error');
      return;
    }

    const payload: OrdonnanceRequestDto = {
      patientId: this.selectedPatient.id,
      utilisateurId,
      dossierPatientId: this.selectedPatient.dossierPatient?.id ?? null,
      medicaments: this.ordonnanceForm.medicaments.trim(),
      posologie: this.ordonnanceForm.posologie.trim(),
      instructions: this.ordonnanceForm.instructions.trim() || null,
      dateEmission: todayIso(),
      dateExpiration: this.ordonnanceForm.dateExpiration || null,
      statut: 'EN_ATTENTE',
    };

    this.isSaving = true;
    this.ordonnanceService.create(payload).subscribe({
      next: ordonnance => {
        this.ordonnances = this.sortOrdonnances([ordonnance, ...this.ordonnances]);
        this.ordonnanceForm = this.emptyOrdonnanceForm();
        this.activeTab = 'ordonnances';
        this.isSaving = false;
        this.showToast('Ordonnance enregistree avec succes.', 'success');
      },
      error: () => {
        this.isSaving = false;
        this.showToast("L'ordonnance n'a pas pu etre enregistree.", 'error');
      },
    });
  }

  resetOrdonnanceForm(): void {
    this.ordonnanceForm = this.emptyOrdonnanceForm();
  }

  saveInstructions(): void {
    if (!this.selectedPatient || this.isSavingInstructions) return;
    const f = this.instructionsForm;
    const s = (v: unknown) => String(v ?? '').trim();
    const payload: PatientInstructionsRequestDto = {
      poidsSec: s(f.poidsSec),
      taille: s(f.taille),
      groupeSanguin: s(f.groupeSanguin),
      abordVasculaire: s(f.abordVasculaire),
      localisationAbord: s(f.localisation),
      aiguilles: s(f.aiguilles),
      taSystoliqueCible: s(f.taSystolique),
      taDiastoliqueCible: s(f.taDiastolique),
      epoActif: f.epoActif,
      eprex: f.eprex,
      eprexDose: s(f.eprexDose),
      recormon: f.recormon,
      recormonDose: s(f.recormonDose),
      epoFrequence: s(f.epoFrequence),
      ferIvActif: f.ferIvActif,
      venoferDose: s(f.venoferDose),
      ferIvFrequence: s(f.ferIvFrequence),
      allergies: s(f.allergies),
    };
    this.isSavingInstructions = true;

    this.instructionsService.saveForPatient(this.selectedPatient.id, payload).subscribe({
      next: instructions => {
        const groupeSanguin = instructions.groupeSanguin ?? f.groupeSanguin;
        if (this.selectedPatient) {
          this.updateSelectedPatient({ ...this.selectedPatient, groupeSanguin });
        }
        this.instructionsForm = this.toInstructionsForm(instructions, groupeSanguin);
        this.isSavingInstructions = false;
        this.showToast('Instructions sauvegardees.', 'success');
      },
      error: () => {
        this.isSavingInstructions = false;
        this.showToast('Erreur lors de la sauvegarde.', 'error');
      },
    });
  }

  private toInstructionsForm(instructions: PatientInstructionsDto | null | undefined, groupeSanguin: string | null | undefined): InstructionsForm {
    const abord = instructions?.abordVasculaire ?? '';
    const localisation = instructions?.localisationAbord ?? '';
    const aiguilles = instructions?.aiguilles ?? '';

    return {
      ...this.emptyInstructionsForm(),
      poidsSec: instructions?.poidsSec ?? '',
      taille: instructions?.taille ?? '',
      groupeSanguin: instructions?.groupeSanguin ?? groupeSanguin ?? '',
      abordVasculaire: abord,
      localisation: localisation,
      aiguilles: aiguilles,
      taSystolique: instructions?.taSystoliqueCible ?? '',
      taDiastolique: instructions?.taDiastoliqueCible ?? '',
      epoActif: instructions?.epoActif ?? false,
      eprex: instructions?.eprex ?? false,
      eprexDose: instructions?.eprexDose ?? '',
      recormon: instructions?.recormon ?? false,
      recormonDose: instructions?.recormonDose ?? '',
      epoFrequence: instructions?.epoFrequence ?? '',
      ferIvActif: instructions?.ferIvActif ?? false,
      venoferDose: instructions?.venoferDose ?? '',
      ferIvFrequence: instructions?.ferIvFrequence ?? '',
      allergies: instructions?.allergies ?? '',
    };
  }

  private updateSelectedPatientDossier(dossier: DossierPatientDto | null): void {
    if (!this.selectedPatient || !dossier) return;
    const updated = this.toPatientVM({ ...this.selectedPatient, dossierPatient: dossier });
    this.updateSelectedPatient(updated);
  }

  private updateSelectedPatient(patient: PatientDto): void {
    const updated = this.toPatientVM(patient);
    this.selectedPatient = updated;
    this.patients = this.patients.map(item => item.id === updated.id ? updated : item);
  }

  // ── Statistics tab ──────────────────────────────────────────────────────────

  loadStats(): void {
    if (this.isLoadingStats) return;
    this.isLoadingStats = true;
    this.alerteService.getMesAlertes(this.currentUser?.login ?? '')
      .pipe(catchError(() => of([]))).subscribe(alertes => {
        this.alertesCritiques = alertes.filter(a => !a.lue && a.type === 'CRITIQUE').length;
        this.alertesAttention = alertes.filter(a => !a.lue && (a.type === 'ATTENTION' || a.type === 'IMPORTANT')).length;
        this.isLoadingStats = false;
      });
  }

  // ── Notification panel ───────────────────────────────────────────────────────

  loadAllAlertes(silent = false): void {
    if (!silent) this.isLoadingNotif = true;
    this.alerteService.getAll()
      .pipe(catchError(() => of([])))
      .subscribe(list => {
        this.allAlertes = list.sort((a, b) =>
          new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
        if (!silent) this.isLoadingNotif = false;
      });
  }

  loadPatientAlertes(patientId: number): void {
    this.alerteService.getByPatient(patientId)
      .pipe(catchError(() => of([])))
      .subscribe(list => {
        this.patientAlertes = list
          .sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime())
          .map(alerte => {
            const globalAlerte = this.allAlertes.find(item => item.id === alerte.id);
            return globalAlerte?.lue || globalAlerte?.traitee
              ? { ...alerte, lue: true, traitee: true }
              : alerte;
          });
      });
  }

  openPatientFromNotif(alerte: AlerteDto): void {
    this.notifOpen = false;
    this.markAlerteAsRead(alerte);
    const p = this.patients.find(x => x.id === alerte.patient?.id);
    if (p) {
      this.showPatientsPanel = false;
      this.selectPatient(p);
      setTimeout(() => this.setTab('alertes'), 200);
    }
  }

  markPatientAlertesAsRead(): void {
    const unread = this.patientAlertes.filter(a => !a.lue);
    unread.forEach(a => {
      this.markAlerteAsRead(a);
    });
  }

  private markAlerteAsRead(alerte: AlerteDto): void {
    if (alerte.lue || alerte.traitee) return;
    this.applyAlerteReadState({ ...alerte, lue: true, traitee: true });
    this.alerteService.marquerLue(alerte.id)
      .pipe(catchError(() => of(null)))
      .subscribe(updated => {
        if (updated) {
          this.applyAlerteReadState(updated);
        } else {
          this.loadAllAlertes(true);
          if (this.selectedPatient) this.loadPatientAlertes(this.selectedPatient.id);
        }
      });
  }

  traiterAlerte(alerte: AlerteDto, event: Event): void {
    event.stopPropagation();
    this.alerteService.traiter(alerte.id)
      .pipe(catchError(() => of(null)))
      .subscribe(updated => {
        if (updated) {
          this.applyAlerteReadState(updated);
        }
      });
  }

  private applyAlerteReadState(updated: AlerteDto): void {
    this.allAlertes = this.allAlertes.map(alerte =>
      alerte.id === updated.id ? { ...alerte, ...updated, lue: true, traitee: true } : alerte
    );
    this.patientAlertes = this.patientAlertes.map(alerte =>
      alerte.id === updated.id ? { ...alerte, ...updated, lue: true, traitee: true } : alerte
    );
  }

  get activeAlertes(): AlerteDto[] {
    return this.allAlertes.filter(a => !a.traitee);
  }

  get activePatientAlertes(): AlerteDto[] {
    return this.patientAlertes.filter(a => !a.traitee);
  }

  get unreadCount(): number {
    return this.allAlertes.filter(a => !a.traitee).length;
  }

  get patientUnreadCount(): number {
    return this.patientAlertes.filter(a => !a.traitee).length;
  }

  alerteTypeClass(type: AlerteDto['type']): string {
    return ({
      CRITIQUE:  'alerte--critique',
      IMPORTANT: 'alerte--important',
      ATTENTION: 'alerte--important',
      TENDANCE:  'alerte--tendance',
      SEANCE:    'alerte--seance',
      INFO:      'alerte--info',
    } as Record<string, string>)[type] ?? 'alerte--info';
  }

  alerteTypeIcon(type: AlerteDto['type']): string {
    return ({
      CRITIQUE:  'emergency',
      IMPORTANT: 'warning_amber',
      ATTENTION: 'warning_amber',
      TENDANCE:  'trending_up',
      SEANCE:    'schedule',
      INFO:      'info',
    } as Record<string, string>)[type] ?? 'info';
  }

  alerteTimeLabel(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  get ordonnancesActives(): number {
    const today = new Date().toISOString().slice(0, 10);
    return this.ordonnances.filter(o =>
      o.statut === 'VALIDEE' || (o.statut === 'EN_ATTENTE' && (!o.dateExpiration || o.dateExpiration >= today))
    ).length;
  }

  get ordonnancesExpirees(): number {
    const today = new Date().toISOString().slice(0, 10);
    return this.ordonnances.filter(o => o.dateExpiration && o.dateExpiration < today).length;
  }

  get tensionChartPoints(): { x: number; ySys: number; yDia: number; sys: number; dia: number }[] {
    const pts = [...this.constantes].reverse().slice(0, 10);
    if (pts.length < 1) return [];
    const maxSys = Math.max(...pts.map(c => c.tensionSys ?? 0), 180);
    const minDia = Math.min(...pts.map(c => c.tensionDia ?? 0), 50);
    const range = Math.max(maxSys - minDia, 60);
    return pts.map((c, i) => ({
      x: pts.length === 1 ? 140 : i * (280 / (pts.length - 1)) + 10,
      ySys: 100 - (((c.tensionSys ?? 0) - minDia) / range) * 80,
      yDia: 100 - (((c.tensionDia ?? 0) - minDia) / range) * 80,
      sys: c.tensionSys ?? 0,
      dia: c.tensionDia ?? 0,
    }));
  }

  get tensionSysPath(): string {
    const pts = this.tensionChartPoints;
    if (pts.length < 2) return '';
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.ySys.toFixed(1)}`).join(' ');
  }

  get tensionDiaPath(): string {
    const pts = this.tensionChartPoints;
    if (pts.length < 2) return '';
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.yDia.toFixed(1)}`).join(' ');
  }

  get ordonnancesBarChart(): { label: string; count: number; color: string; pct: number }[] {
    const today = new Date().toISOString().slice(0, 10);
    const items = [
      { label: 'En attente', count: this.ordonnances.filter(o => o.statut === 'EN_ATTENTE').length, color: '#f59e0b' },
      { label: 'Validées',   count: this.ordonnances.filter(o => o.statut === 'VALIDEE').length,    color: '#22c55e' },
      { label: 'Annulées',   count: this.ordonnances.filter(o => o.statut === 'ANNULEE').length,    color: '#ef4444' },
      { label: 'Expirées',   count: this.ordonnancesExpirees,                                       color: '#94a3b8' },
    ];
    const max = Math.max(...items.map(i => i.count), 1);
    return items.map(i => ({ ...i, pct: i.count / max }));
  }

  // ── Print ordonnance ─────────────────────────────────────────────────────────

  printOrdonnance(ord: OrdonnanceDto): void {
    const patient = this.selectedPatient;
    const doctor  = this.currentUser;
    if (!patient) return;

    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Ordonnance — ${patient.nomComplet}</title>
<style>
@page { margin: 15mm 20mm; size: A4 portrait; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Georgia, 'Times New Roman', serif; color: #1a202c; font-size: 13px; line-height: 1.6; background: #fff; }
.header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 14px; border-bottom: 2px solid #00857a; margin-bottom: 22px; }
.center-name { font-size: 17px; font-weight: bold; color: #00857a; }
.center-sub { font-size: 11px; color: #718096; margin-top: 3px; }
.doc-info { text-align: right; font-size: 11px; color: #4a5568; }
.doc-name { font-weight: bold; font-size: 14px; color: #1a202c; }
.title { text-align: center; margin: 18px 0 16px; font-size: 20px; font-weight: bold; letter-spacing: 4px; text-transform: uppercase; color: #00857a; }
.patient-box { background: #f0fff4; border-left: 4px solid #00857a; padding: 12px 16px; margin-bottom: 22px; border-radius: 0 6px 6px 0; }
.patient-name { font-size: 15px; font-weight: bold; color: #1a202c; }
.patient-meta { display: flex; gap: 18px; margin-top: 5px; font-size: 11px; color: #718096; }
.rx-block { border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 14px; }
.rx-symbol { font-size: 22px; font-weight: bold; color: #00857a; float: left; margin-right: 10px; line-height: 1; }
.rx-label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: .5px; color: #718096; margin-bottom: 6px; }
.rx-text { font-size: 14px; white-space: pre-wrap; color: #1a202c; clear: both; }
.posologie { font-size: 12px; color: #4a5568; font-style: italic; margin-top: 8px; }
.instructions { background: #fffbeb; border-left: 3px solid #f59e0b; padding: 12px 16px; margin-top: 12px; font-size: 12px; border-radius: 0 4px 4px 0; }
.instr-title { font-weight: bold; color: #92400e; margin-bottom: 4px; font-size: 11px; text-transform: uppercase; }
.footer { margin-top: 48px; display: flex; justify-content: space-between; align-items: flex-end; }
.stamp { width: 90px; height: 90px; border: 2px dashed #cbd5e0; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 9px; color: #a0aec0; line-height: 1.3; }
.signature-box { text-align: center; }
.signature-line { border-top: 1px solid #1a202c; width: 200px; margin: 0 auto; padding-top: 6px; font-size: 11px; color: #4a5568; }
.print-info { text-align: right; font-size: 10px; color: #a0aec0; margin-top: 10px; }
.status-badge { display: inline-block; padding: 2px 10px; border-radius: 10px; font-size: 10px; font-weight: bold; background: #e6f7f5; color: #00857a; margin-left: 8px; }
</style>
</head>
<body>
<div class="header">
  <div>
    <div class="center-name">Centre d'Hémodialyse — DialySys</div>
    <div class="center-sub">Service de Néphrologie &nbsp;·&nbsp; Unité d'Hémodialyse</div>
  </div>
  <div class="doc-info">
    <div class="doc-name">Dr. ${this.escHtml(doctor?.prenom ?? '')} ${this.escHtml(doctor?.nom ?? '')}</div>
    <div>Médecin Néphrologue</div>
  </div>
</div>

<div class="title">Ordonnance Médicale</div>

<div class="patient-box">
  <div class="patient-name">${this.escHtml(patient.nomComplet)}<span class="status-badge">${this.ordonnanceStatusLabel(ord.statut)}</span></div>
  <div class="patient-meta">
    <span>Âge&nbsp;: ${patient.age} ans</span>
    <span>CIN&nbsp;: ${this.escHtml(patient.cin ?? 'N/A')}</span>
    <span>Groupe sanguin&nbsp;: ${this.escHtml(patient.groupeSanguin ?? 'N/A')}</span>
    <span>Date émission&nbsp;: ${this.fmtDate(ord.dateEmission)}</span>
    ${ord.dateExpiration ? `<span>Expire le&nbsp;: ${this.fmtDate(ord.dateExpiration)}</span>` : ''}
  </div>
</div>

<div class="rx-block">
  <div class="rx-symbol">Rx</div>
  <div class="rx-label">Médicaments &amp; Traitements</div>
  <div class="rx-text">${this.escHtml(ord.medicaments)}</div>
  ${ord.posologie ? `<div class="posologie">Posologie&nbsp;: ${this.escHtml(ord.posologie)}</div>` : ''}
</div>

${ord.instructions ? `<div class="instructions"><div class="instr-title">Instructions spécifiques</div>${this.escHtml(ord.instructions).replace(/\n/g, '<br>')}</div>` : ''}

<div class="footer">
  <div class="stamp">Cachet<br>du<br>médecin</div>
  <div class="signature-box">
    <div class="signature-line">Dr. ${this.escHtml(doctor?.prenom ?? '')} ${this.escHtml(doctor?.nom ?? '')}</div>
    <div style="font-size:10px;color:#a0aec0;margin-top:4px">Médecin Néphrologue — DialySys</div>
  </div>
</div>

<div class="print-info">Imprimé le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} &nbsp;·&nbsp; DialySys</div>
</body>
</html>`;

    const w = window.open('', '_blank', 'width=794,height=1123,toolbar=0,menubar=0,scrollbars=1');
    if (!w) { this.showToast("Autorisez les popups pour imprimer.", 'warning'); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
    setTimeout(() => { w.focus(); w.print(); }, 700);
  }

  private escHtml(value: string): string {
    return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  toggleTheme(): void {
    this.isLight = !this.isLight;
    if (this.isLight) {
      document.body.classList.remove('theme-dark');
    } else {
      document.body.classList.add('theme-dark');
    }
  }

  logout(): void {
    this.authService.logout();
  }

  fmtDate(value: string | null | undefined): string {
    return value ? formatDateFr(value) : '-';
  }

  fmtDateTime(value: string | null | undefined): string {
    if (!value) return '-';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '-';
    return date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  ordonnanceStatusLabel(statut: OrdonnanceDto['statut']): string {
    const labels: Record<string, string> = {
      EN_ATTENTE: 'En attente',
      VALIDEE: 'Validee',
      ANNULEE: 'Annulee',
    };
    return labels[statut] ?? statut;
  }

  ordonnanceStatusTone(statut: OrdonnanceDto['statut']): string {
    const tones: Record<string, string> = {
      EN_ATTENTE: 'warning',
      VALIDEE: 'stable',
      ANNULEE: 'critical',
    };
    return tones[statut] ?? 'neutral';
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }

  toastIcon(type: ToastType): string {
    return {
      success: 'check_circle',
      warning: 'warning',
      info: 'info',
      error: 'error',
    }[type];
  }

  private toPatientVM(patient: PatientDto): PatientVM {
    const dossier = patient.dossierPatient;

    return {
      ...patient,
      age: this.calculateAge(patient.dateNaissance),
      initials: `${patient.prenom?.[0] ?? ''}${patient.nom?.[0] ?? ''}`.toUpperCase(),
      nomComplet: `${patient.prenom ?? ''} ${patient.nom ?? ''}`.trim(),
      pathologie: dossier?.pathologie || 'Non renseignee',
      debutDialyse: dossier?.debutDialyse ? formatDateFr(dossier.debutDialyse) : '-',
      poidsDossier: this.withUnit(dossier?.poids, 'kg'),
      tensionDossier: dossier?.tensionArterielle || '-',
      frequenceDossier: this.withUnit(dossier?.frequenceCardiaque, 'bpm'),
      saturationDossier: this.withUnit(dossier?.saturation, '%'),
      temperatureDossier: this.withUnit(dossier?.temperature, 'C'),
      creatinine: this.withUnit(dossier?.creatinine, 'mg/L'),
      uree: this.withUnit(dossier?.uree, 'mmol/L'),
      hemoglobine: this.withUnit(dossier?.hemoglobine, 'g/dL'),
      antecedents: dossier?.antecedents || 'Aucun antecedent renseigne.',
    };
  }

  private sortOrdonnances(ordonnances: OrdonnanceDto[]): OrdonnanceDto[] {
    return [...ordonnances].sort((a, b) => this.dateValue(b.dateEmission) - this.dateValue(a.dateEmission));
  }

  private sortConstantes(constantes: ConstantesVitalesDto[]): ConstantesVitalesDto[] {
    return [...constantes].sort((a, b) => this.dateValue(b.saisieAt) - this.dateValue(a.saisieAt));
  }

  private dateValue(value: string | null | undefined): number {
    if (!value) return 0;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? 0 : date.getTime();
  }

  private calculateAge(dateNaissance: string): number {
    if (!dateNaissance) return 0;
    const birth = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  private withUnit(value: string | number | null | undefined, unit: string): string {
    if (value === null || value === undefined || value === '') return '-';
    return `${value} ${unit}`;
  }

  private emptyOrdonnanceForm(): OrdonnanceForm {
    return { medicaments: '', posologie: '', instructions: '', dateExpiration: '' };
  }

  emptyInstructionsFormPublic(): InstructionsForm { return this.emptyInstructionsForm(); }

  private emptyInstructionsForm(): InstructionsForm {
    return {
      poidsSec: '', taille: '', groupeSanguin: '',
      abordVasculaire: '', localisation: '', aiguilles: '',
      taSystolique: '', taDiastolique: '',
      epoActif: false, eprex: false, eprexDose: '', recormon: false, recormonDose: '', epoFrequence: '',
      ferIvActif: false, venoferDose: '', ferIvFrequence: '',
      allergies: '',
    };
  }

  private showToast(message: string, type: ToastType): void {
    const id = ++this.toastId;
    this.toasts = [...this.toasts, { id, message, type }];
    setTimeout(() => this.removeToast(id), 3500);
  }
}
