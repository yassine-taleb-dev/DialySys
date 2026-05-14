import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, forkJoin, of } from 'rxjs';

import { ConstantesVitalesDto } from '../../../models/constantes-vitales-dto';
import { todayIso, formatDateFr } from '../../../models/dateutils';
import { DossierPatientDto } from '../../../models/dossier-patient-dto';
import { OrdonnanceDto } from '../../../models/ordonnance-dto';
import { OrdonnanceRequestDto } from '../../../models/ordonnance-request-dto';
import { PatientDto } from '../../../models/patient-dto';
import { PatientInstructionsDto } from '../../../models/patient-instructions-dto';
import { PatientInstructionsRequestDto } from '../../../models/patient-instructions-request-dto';
import { Utilisateur } from '../../../models/utilisateur';
import { AuthService } from '../../../services/auth.service';
import { ConstantesVitalesService } from '../../../services/constantes-vitales.service';
import { DossierPatientService } from '../../../services/dossier-patient.service';
import { OrdonnanceService } from '../../../services/ordonnance.service';
import { PatientInstructionsService } from '../../../services/patient-instructions.service';
import { PatientService } from '../../../services/patient.service';

type TabKey = 'resume' | 'constantes' | 'ordonnances' | 'rediger';
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
export class MedecinComponent implements OnInit {
  isLight = true;
  isLoadingPatients = true;
  isLoadingDetails = false;
  isSaving = false;
  loadError = '';
  detailError = '';
  searchQuery = '';
  activeTab: TabKey = 'resume';

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

  constructor(
    private patientService: PatientService,
    private ordonnanceService: OrdonnanceService,
    private constantesService: ConstantesVitalesService,
    private dossierService: DossierPatientService,
    private instructionsService: PatientInstructionsService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadPatients();
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
    this.ordonnanceForm = this.emptyOrdonnanceForm();
    this.instructionsForm = this.toInstructionsForm(null, patient.groupeSanguin);
    this.isLoadingDetails = true;

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
