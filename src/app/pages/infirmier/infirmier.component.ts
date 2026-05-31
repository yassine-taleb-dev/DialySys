import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, forkJoin, of } from 'rxjs';
import { PatientService } from '../../../services/patient.service';
import { OrdonnanceService } from '../../../services/ordonnance.service';
import { ConstantesVitalesService } from '../../../services/constantes-vitales.service';
import { PatientInstructionsService } from '../../../services/patient-instructions.service';
import { AuthService } from '../../../services/auth.service';
import { PatientDto } from '../../../models/patient-dto';
import { OrdonnanceDto } from '../../../models/ordonnance-dto';
import { ConstantesVitalesDto } from '../../../models/constantes-vitales-dto';
import { PatientInstructionsDto } from '../../../models/patient-instructions-dto';
import { Utilisateur } from '../../../models/utilisateur';

type ToastType = 'success' | 'warning' | 'info' | 'error';
interface Toast { id: number; message: string; type: ToastType; }

interface PatientVM extends PatientDto {
  age: number;
  initials: string;
  nomComplet: string;
}

@Component({
  selector: 'app-infirmier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier.component.html',
  styleUrl: './infirmier.component.scss'
})
export class InfirmierComponent implements OnInit {
  isLight = true;
  isLoadingPatients = true;
  isLoadingDetails = false;
  loadError = '';
  currentUser: Utilisateur | null = null;

  patients: PatientVM[] = [];
  searchQuery = '';
  showPatientsPanel = false;
  selectedPatient: PatientVM | null = null;
  activeTab: 'constantes' | 'ordonnances' | 'instructions' = 'constantes';

  constantes: ConstantesVitalesDto[] = [];
  ordonnances: OrdonnanceDto[] = [];
  instructions: PatientInstructionsDto | null = null;

  // Formulaire saisie constantes
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
    private instructionsService: PatientInstructionsService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUtilisateur();
    this.loadPatients();
  }

  get currentUserInitials(): string {
    const u = this.currentUser;
    return `${u?.prenom?.[0] ?? ''}${u?.nom?.[0] ?? ''}`.toUpperCase() || 'IN';
  }

  get currentUserName(): string {
    const u = this.currentUser;
    return u ? `${u.prenom} ${u.nom}`.trim() : 'Infirmier';
  }

  private loadPatients(): void {
    this.isLoadingPatients = true;
    this.loadError = '';
    this.patientService.invalidateCache();

    this.patientService.getAll().subscribe({
      next: (patients) => {
        this.patients = patients.map(p => this.toVM(p));
        this.isLoadingPatients = false;
        if (patients.length === 0) {
          this.loadError = 'Aucun patient enregistrÃ© dans le systÃ¨me.';
        }
      },
      error: (err) => {
        this.isLoadingPatients = false;
        if (err?.status === 401 || err?.status === 403) {
          this.loadError = 'Session expirÃ©e. Veuillez vous reconnecter.';
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

  selectPatient(p: PatientVM): void {
    this.selectedPatient = p;
    this.activeTab = 'constantes';
    this.constantes = [];
    this.ordonnances = [];
    this.instructions = null;
    this.isLoadingDetails = true;

    forkJoin({
      constantes: this.constantesService.getByPatient(p.id).pipe(catchError(() => of([] as ConstantesVitalesDto[]))),
      ordonnances: this.ordonnanceService.getByPatient(p.id).pipe(catchError(() => of([] as OrdonnanceDto[]))),
      instructions: this.instructionsService.getByPatient(p.id).pipe(catchError(() => of(null)))
    }).subscribe({
      next: ({ constantes, ordonnances, instructions }) => {
        this.constantes = constantes.sort((a, b) => b.date.localeCompare(a.date));
        this.ordonnances = ordonnances.sort((a, b) => b.dateEmission.localeCompare(a.dateEmission));
        this.instructions = instructions;
        this.isLoadingDetails = false;
      },
      error: () => { this.isLoadingDetails = false; }
    });
  }

  closePatient(): void { this.selectedPatient = null; this.showForm = false; }

  toggleForm(): void { this.showForm = !this.showForm; this.cvForm = { tensionSys: '', tensionDia: '', poids: '', bpm: '', notes: '' }; }

  saveConstantes(): void {
    if (!this.selectedPatient || this.isSaving) return;
    const sys = +this.cvForm.tensionSys;
    const dia = +this.cvForm.tensionDia;
    const poids = +this.cvForm.poids;
    const bpm = +this.cvForm.bpm;
    if (!sys || !dia || !poids || !bpm) { this.showToast('Veuillez remplir tous les champs obligatoires.', 'warning'); return; }

    this.isSaving = true;
    const payload = {
      tensionSys: sys, tensionDia: dia, poids, bpm,
      notes: this.cvForm.notes.trim(),
      date: new Date().toISOString().slice(0, 10),
      patientId: this.selectedPatient.id,
      seanceId: null
    };
    this.constantesService.create(payload).subscribe({
      next: (c) => {
        this.constantes = [c, ...this.constantes];
        this.isSaving = false;
        this.showForm = false;
        this.cvForm = { tensionSys: '', tensionDia: '', poids: '', bpm: '', notes: '' };
        this.showToast('Constantes enregistrées avec succés.', 'success');
      },
      error: (err) => {
        this.isSaving = false;
        this.showToast(`Erreur lors de l'enregistrement (${err?.status ?? ''}).`, 'error');
      }
    });
  }

  private toVM(p: PatientDto): PatientVM {
    return {
      ...p,
      age: this.calcAge(p.dateNaissance),
      initials: `${p.prenom?.[0] ?? ''}${p.nom?.[0] ?? ''}`.toUpperCase(),
      nomComplet: `${p.prenom ?? ''} ${p.nom ?? ''}`.trim(),
    };
  }

  private calcAge(dob: string): number {
    if (!dob) return 0;
    const today = new Date();
    const birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() ||
       (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) age--;
    return age;
  }

  fmtDate(iso: string): string {
    if (!iso) return '-';
    const d = iso.slice(0, 10).split('-');
    return d.length === 3 ? `${d[2]}/${d[1]}/${d[0]}` : iso;
  }

  tensionStatus(sys: number, dia: number): string {
    if (sys >= 140 || dia >= 90) return 'crit';
    if (sys < 90 || dia < 60) return 'warn';
    return 'ok';
  }

  tensionLabel(sys: number, dia: number): string {
    if (sys >= 180 || dia >= 120) return 'Crise hypertensive';
    if (sys >= 140 || dia >= 90) return 'Hypertension';
    if (sys < 90 || dia < 60) return 'Hypotension';
    return 'Normale';
  }

  ordonnanceStatusLabel(s: string): string {
    return ({ ACTIVE: 'Active', EXPIREE: 'ExpirÃ©e', ANNULEE: 'AnnulÃ©e',
              EN_ATTENTE: 'En attente', VALIDEE: 'ValidÃ©e' } as Record<string,string>)[s] ?? s;
  }

  ordonnanceStatusTone(s: string): string {
    return ({ ACTIVE: 'ok', VALIDEE: 'ok', EN_ATTENTE: 'warn',
              EXPIREE: 'warn', ANNULEE: 'crit' } as Record<string,string>)[s] ?? 'neutral';
  }

  showToast(message: string, type: ToastType = 'info'): void {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }
  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }
  toastIcon(type: string): string {
    return ({ success: 'check_circle', warning: 'warning', error: 'error', info: 'info' } as Record<string,string>)[type] ?? 'info';
  }

  toggleTheme(): void { this.isLight = !this.isLight; }
  logout(): void { this.authService.logout(); }
}
