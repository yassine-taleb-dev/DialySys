import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { concat, forkJoin, of, Subject } from 'rxjs';
import { catchError, takeUntil, toArray } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { UtilisateurCreateDto, UtilisateurService, UtilisateurUpdateDto } from '../../../services/utilisateur.service';
import { PatientRequestDto, PatientService } from '../../../services/patient.service';
import { SeanceService } from '../../../services/seance.service';
import { AdminSettingsService } from '../../../services/admin-settings.service';
import { RolePermissionService } from '../../../services/role-permission.service';
import { UtilisateurResponseDto } from '../../../models/utilisateur.model';
import { PatientDto } from '../../../models/patient-dto';
import { SeanceDto } from '../../../models/seance-dto';
import { AdminSettingsDto } from '../../../models/admin-settings-dto';
import { RolePermissionsDto } from '../../../models/role-permissions-dto';
import { SeanceRequestDto } from '../../../models/seance-request-dto';
import { SeanceUpdateRequestDto } from '../../../models/seance-update-request-dto';
import { AdminTab, AppUser, AuditEntryUI, BarPoint, DonutSegment, Permission, RoleConfig, RoleId, SeanceAdminRow, Toast, UserStatus } from '../../../models/admin-ui.models';
import { AuditService } from '../../../services/audit.service';

/** Horaire d'une séance pour un jour spécifique */
export interface JourSeance {
  date: string;       // ISO yyyy-MM-dd
  heureDebut: string;
  heureFin: string;
  infirmierId?: number | null;
}

/** Regroupement de séances identiques avec dates multiples */
export interface GroupedSeance {
  patientId: number;
  patientNom: string;
  responsableId: number | null;
  infirmierNom: string;
  dates: string[];           // dates affichées dd/MM/yyyy
  heureDebut: string;
  heureFin: string;
  statut: string;
  seances: SeanceAdminRow[];
}

export interface PersonSeanceEntry {
  date: string;
  heureDebut: string;
  heureFin: string;
  statut: string;
  jourPlanifie?: number | null;
  creneau?: string | null;
  seanceId: number;
  seanceIds?: number[];
}

export interface PersonSeance {
  patientId: number;
  patientNom: string;
  infirmierNom: string;
  entries: PersonSeanceEntry[];
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit, OnDestroy {
  @ViewChild('adminMain') private adminMainRef?: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private utilisateurService: UtilisateurService,
    private patientService: PatientService,
    private seanceService: SeanceService,
    private adminSettingsService: AdminSettingsService,
    private rolePermissionService: RolePermissionService,
    private auditService: AuditService
  ) {}

  // -- Sidebar mobile --
  sidebarOpen = false;

  private destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.stopPolling();
    this.destroy$.complete();
  }

  private startPolling(): void {
    this.stopPolling();
    this.pollingInterval = setInterval(() => {
      if (this.activeTab === 'audit') {
        this.loadAuditEntries(false);
      }
    }, this.POLLING_INTERVAL_MS);
  }

  private stopPolling(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }

  activeTab: AdminTab = (['profils', 'seances', 'statistiques', 'audit'].includes(localStorage.getItem('admin_activeTab') ?? '') ? localStorage.getItem('admin_activeTab') as AdminTab : 'profils');
  activeProfilRole: RoleId = 'medecin';
  loading = false;
  isLight = localStorage.getItem('admin_theme') !== 'dark';
  private profilsLoaded = false;
  private seancesLoaded = false;

  // -- Wizard nouveau profil --
  showWizardModal = false;
  wizardStep = 1;
  wizardRole: RoleId = 'medecin';

  readonly wizardRoleOptions: { id: RoleId; label: string; icon: string; color: string; desc: string }[] = [
    { id: 'medecin',          label: 'Médecin',          icon: 'medical_services',   color: 'var(--c-teal)',   desc: 'Néphrologue, prescriptions, dossiers' },
    { id: 'infirmier-majeur', label: 'Infirmier Majeur',  icon: 'supervisor_account', color: 'var(--c-purple)', desc: 'Coordinateur, planification, équipes' },
    { id: 'infirmier',        label: 'Infirmier(e)',      icon: 'local_hospital',     color: 'var(--c-blue)',   desc: 'Soins, monitoring, constantes vitales' },
    { id: 'patient',          label: 'Patient',           icon: 'person',             color: 'var(--c-green)',  desc: 'Patient du centre de dialyse' },
  ];

  readonly serviceParRole: Record<string, string> = {
    'medecin':          'Hémodialyse',
    'infirmier-majeur': 'Hémodialyse',
    'infirmier':        'Hémodialyse',
    'patient':          '',
    'admin':            'Hémodialyse',
  };

  readonly specialiteParRole: Record<string, string> = {
    'medecin':          'Néphrologie',
    'infirmier-majeur': 'Hémodialyse',
    'infirmier':        'Hémodialyse',
    'patient':          '',
    'admin':            '',
  };

  readonly permissions: Permission[] = [
    { id: 'p_view',    category: 'Patients',       label: 'Voir les dossiers patients',      description: 'Acces en lecture aux fiches et historiques patients' },
    { id: 'p_edit',    category: 'Patients',       label: 'Modifier les dossiers',           description: 'Editer les informations medicales et administratives' },
    { id: 'p_create',  category: 'Patients',       label: 'Creer un patient',                description: 'Ajouter un nouveau patient dans le systeme' },
    { id: 'm_rx',      category: 'Medical',        label: 'Creer des prescriptions',         description: 'Rediger et enregistrer des ordonnances' },
    { id: 'm_rx_val',  category: 'Medical',        label: 'Valider des prescriptions',       description: 'Approuver les prescriptions en attente' },
    { id: 'm_bilan',   category: 'Medical',        label: 'Voir les bilans et resultats',    description: 'Consulter les analyses et resultats biologiques' },
    { id: 'm_proto',   category: 'Medical',        label: 'Gerer les protocoles',            description: 'Creer et modifier les protocoles de dialyse' },
    { id: 'pl_view',   category: 'Planning',       label: 'Voir le planning',                description: 'Consulter le planning des seances' },
    { id: 'pl_edit',   category: 'Planning',       label: 'Creer et modifier des seances',   description: 'Planifier et editer les seances de dialyse' },
    { id: 'pl_delete', category: 'Planning',       label: 'Supprimer des seances',           description: 'Retirer une seance du planning' },
    { id: 'mo_view',   category: 'Monitoring',     label: 'Voir le monitoring',              description: 'Acces au suivi temps reel des patients en dialyse' },
    { id: 'mo_saisie', category: 'Monitoring',     label: 'Saisir les constantes vitales',   description: 'Enregistrer PA, FC, poids et autres parametres' },
    { id: 'eq_stock',  category: 'Equipement',     label: 'Gerer les stocks',                description: 'Voir et commander les consommables' },
    { id: 'eq_maint',  category: 'Equipement',     label: 'Signaler une maintenance',        description: 'Declarer une panne ou une intervention technique' },
    { id: 'r_gen',     category: 'Rapports',       label: 'Generer des rapports',            description: 'Creer des rapports statistiques et medicaux' },
    { id: 'r_export',  category: 'Rapports',       label: 'Exporter les donnees',            description: 'Telecharger les donnees en PDF ou CSV' },
    { id: 'a_users',   category: 'Administration', label: 'Gerer les utilisateurs',          description: 'Ajouter, modifier et desactiver des comptes' },
    { id: 'a_roles',   category: 'Administration', label: 'Configurer les roles',            description: 'Modifier les permissions des roles' },
  ];

  roles: RoleConfig[] = [
    { id: 'admin',            label: 'Administrateur',   icon: 'admin_panel_settings', color: '#ff5757', colorVar: 'var(--c-red)',    description: 'Administration du systeme',    permissions: {} },
    { id: 'medecin',          label: 'Medecin',           icon: 'medical_services',    color: '#00D9C4', colorVar: 'var(--c-teal)',   description: 'Medecin nephrologue',          permissions: {} },
    { id: 'infirmier-majeur', label: 'Infirmier Majeur',  icon: 'supervisor_account',  color: '#A78BFA', colorVar: 'var(--c-purple)', description: 'Coordinateur du service',      permissions: {} },
    { id: 'infirmier',        label: 'Infirmier(e)',      icon: 'local_hospital',      color: '#4EA8F8', colorVar: 'var(--c-blue)',   description: 'Suivi des seances et soins',   permissions: {} },
    { id: 'patient',          label: 'Patient',           icon: 'person',              color: '#22c55e', colorVar: 'var(--c-green)',  description: 'Patient du centre',            permissions: {} },
  ];

  users: AppUser[] = [];
  private staffUsers: AppUser[] = [];
  private patientUsersData: AppUser[] = [];

  selectedUser: AppUser | null = null;
  showUserModal = false;
  showNewPatientModal = false;
  showNewUserModal = false;
  showSettingsModal = false;
  showEditPatientModal = false;
  showEditSeanceModal = false;

  searchQuery = ''; filterRole: RoleId | '' = ''; filterStatus: UserStatus | '' = '';
  activeKpi: string = '';   // tracks which KPI card is highlighted
  searchPatient = '';
  searchSeance = '';
  filterSeanceDate = '';
  readonly pageSize = 4;
  staffPage = 1;
  patientPage = 1;
  seancePage = 1;

  readonly groupesSanguins = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  readonly joursTitles = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  readonly moisLabels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  roleIds: RoleId[] = ['admin', 'medecin', 'infirmier-majeur', 'infirmier', 'patient'];

  newPatient = { nom: '', prenom: '', dateNaissance: '', cin: '', telephone: '', adresse: '', genre: '' };

  editPatient: {
    id: number; nom: string; prenom: string; dateNaissance: string;
    groupeSanguin: string; cin: string;
    telephone: string; adresse: string; genre: string;
  } | null = null;

  newUser = {
    login: '', username: '', mat: '', nom: '', prenom: '', email: '',
    mdp: '', role: 'infirmier' as RoleId, actif: true,
    telephone: '', service: '', specialite: '', superviseurId: ''
  };

  settings: AdminSettingsDto = {
    notificationsEmail: true, notificationsSystem: true,
    sessionTimeout: 30, langue: 'fr', exportFormat: 'csv',
    auditLog: true, doubleAuth: false
  };

  // --- SÉANCES -----------------------------------------------------------------
  seancesAdmin: SeanceAdminRow[] = [];

  /** Formulaire de planification de séance avec heures individuelles par date */
  newSeance = {
      patientId: '',
      infirmierId: '',
      dates: [] as string[],
      datesSeances: [] as JourSeance[],
      heureDebut: '07:30',
      heureFin:   '11:30',
      // jours sélectionnés (0=Dim,1=Lun,...,6=Sam)
      jours: [] as number[],
      // abord vasculaire
      abordFAV: false,
      abordCatheter: false,
      // shift
      shiftMatin: false,
      shiftApresMidi: false,
    };

  readonly joursLabels = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];

  toggleSeanceJour(j: number): void {
    const idx = this.newSeance.jours.indexOf(j);
    if (idx >= 0) this.newSeance.jours.splice(idx, 1);
    else this.newSeance.jours.push(j);
  }

  setNewSeanceCreneau(creneau: 'MATIN' | 'APRES_MIDI'): void {
    this.newSeance.shiftMatin = creneau === 'MATIN';
    this.newSeance.shiftApresMidi = creneau === 'APRES_MIDI';
  }

  isSeanceJourSelected(j: number): boolean {
    return this.newSeance.jours.includes(j);
  }
  newSeanceActiveDate: string | null = null;

  editSeance: {
    id: number; patientId: number; patientNom: string;
    responsableId: number | null; infirmierNom: string;
    date: string; heureDebut: string; heureFin: string;
    statut: string;
    datesSeances: JourSeance[]; sourceSeances: SeanceAdminRow[];
  } | null = null;
  editSeanceDates: string[] = [];
  editSeanceJours: number[] = [];

  seanceCalYear = new Date().getFullYear(); seanceCalMonth = new Date().getMonth();
  editSeanceCalYear = new Date().getFullYear(); editSeanceCalMonth = new Date().getMonth();

  private tid = 0;
  toasts: Toast[] = [];

  private pollingInterval: any = null;
  private readonly POLLING_INTERVAL_MS = 30000;

  // ------------------------------------------------------------------------------
  //  LIFECYCLE
  // ------------------------------------------------------------------------------

  ngOnInit(): void {
    if (this.isLight) document.body.classList.add('theme-light');
    this.loadSharedAdminData();
    this.refreshAdminCollections();
    this.loadAuditEntries(this.activeTab === 'audit');
    this.startPolling();
  }

  setActiveTab(tab: AdminTab): void {
    this.activeTab = tab;
    localStorage.setItem('admin_activeTab', tab);
    this.scrollAdminToTop();
    if (tab === 'audit') {
      this.loadAuditEntries();
    } else {
      this.refreshAdminCollections(false, false);
    }
  }

  selectKpi(role: string): void {
    // Toggle: clicking the same KPI again resets the filter
    if (this.activeKpi === role) {
      this.activeKpi = '';
      this.activeProfilRole = 'medecin';
      this.filterRole = '';
    } else {
      this.activeKpi = role;
      if (role === 'seances') {
        this.setActiveTab('seances');
        return;
      }
      this.activeProfilRole = role as RoleId;
      // sync the dropdown filter
      this.filterRole = role === 'patient' ? '' : role as RoleId;
      this.staffPage = 1;
      this.patientPage = 1;
    }
    this.setActiveTab('profils');
  }

  refreshAdminCollections(showLoader = true, restoreScroll = false): void {
    if (showLoader) this.loading = true;
    this.patientService.invalidateCache();
    this.seanceService.invalidateCache();

    const savedScrollTop = restoreScroll
      ? (this.adminMainRef?.nativeElement.scrollTop ?? 0)
      : null;

    forkJoin({
      users:    this.utilisateurService.getAll().pipe(catchError(() => of([] as any[]))),
      patients: this.patientService.getAll().pipe(catchError(() => of([] as any[]))),
      seances:  this.seanceService.getAll().pipe(catchError(() => of([] as any[])))
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ users, patients, seances }) => {
        this.staffUsers = users.map((u: any) => this.mapUtilisateurToAppUser(u));
        this.patientUsersData = patients.map((p: any) => this.mapPatientToAppUser(p));
        this.users = [...this.staffUsers, ...this.patientUsersData];
        this.seancesAdmin = seances.map((s: any) => this.mapSeanceToRow(s));
        this.profilsLoaded = true;
        this.seancesLoaded = true;
        this.normalizeAllPages();
        this.syncSelectedInfirmier();

        if (showLoader) {
          this.loading = false;
        } else if (savedScrollTop !== null) {
          setTimeout(() => {
            if (this.adminMainRef?.nativeElement) {
              this.adminMainRef.nativeElement.scrollTop = savedScrollTop;
            }
          }, 0);
        }
      },
      error: () => {
        if (showLoader) this.loading = false;
        this.showToast('Serveur inaccessible — vérifiez que le backend est démarré', 'error');
      }
    });
  }

  loadSharedAdminData(): void {
    this.loading = true;
    forkJoin({
      settings: this.adminSettingsService.get(),
      rolePermissions: this.rolePermissionService.getAll()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ settings, rolePermissions }) => {
        this.settings = { ...settings };
        this.applyRolePermissions(rolePermissions);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? 'Erreur lors du chargement', 'error');
      }
    });
  }

  loadProfilesData(): void {
    this.loading = true;
    forkJoin({
      users: this.utilisateurService.getAll(),
      patients: this.patientService.getAll()
    }).subscribe({
      next: ({ users, patients }) => {
        this.staffUsers = users.map(u => this.mapUtilisateurToAppUser(u));
        this.patientUsersData = patients.map(p => this.mapPatientToAppUser(p));
        this.users = [...this.staffUsers, ...this.patientUsersData];
        this.profilsLoaded = true;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? 'Erreur lors du chargement des profils', 'error');
      }
    });
  }

  loadSeancesData(): void {
    this.loading = true;
    this.seanceService.getAll().subscribe({
      next: (seances) => {
        this.seancesAdmin = seances.map(s => this.mapSeanceToRow(s));
        this.seancesLoaded = true;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? 'Erreur lors du chargement des seances', 'error');
      }
    });
  }

  // ------------------------------------------------------------------------------
  //  WIZARD — création profil multi-étapes
  // ------------------------------------------------------------------------------

  wizardData = {
    nom: '', prenom: '', mat: '', email: '', telephone: '', service: '',
    login: '', username: '', mdp: '', actif: true,
    dateNaissance: '', groupeSanguin: '', genre: '', adresse: '', cin: '',
    specialite: '', superviseurId: '',
  };
  wizardErrors: Record<string, string> = {};

  get wizardIsPatient(): boolean { return this.wizardRole === 'patient'; }
  get wizardStepCount(): number  { return this.wizardIsPatient ? 2 : 3; }

  get wizardSelectedConfig(): { id: RoleId; label: string; icon: string; color: string; desc: string } | undefined {
    return this.wizardRoleOptions.find(r => r.id === this.wizardRole);
  }

  private readonly matPrefix: Record<RoleId | 'patient', string> = {
    'medecin':          'MED',
    'infirmier':        'INF',
    'infirmier-majeur': 'IMJ',
    'admin':            'ADM',
    'patient':          'PAT',
  };

  generateMat(role: RoleId | 'patient'): string {
    const prefix = this.matPrefix[role] ?? 'USR';
    const pattern = new RegExp(`^${prefix}-(\\d+)$`, 'i');
    const max = this.users
      .map(u => { const m = u.mat?.match(pattern); return m ? parseInt(m[1], 10) : 0; })
      .reduce((a, b) => Math.max(a, b), 0);
    return `${prefix}-${String(max + 1).padStart(3, '0')}`;
  }

  openNewProfil(): void {
    this.wizardStep = 1;
    this.wizardErrors = {};
    this.wizardRole = this.activeProfilRole === 'admin' ? 'medecin' : (this.activeProfilRole as RoleId);
    this.wizardData = {
      nom: '', prenom: '', mat: this.generateMat(this.wizardRole), email: '', telephone: '',
      service: this.serviceParRole[this.wizardRole] ?? '',
      login: '', username: '', mdp: '', actif: true,
      dateNaissance: '', groupeSanguin: '', genre: '', adresse: '', cin: '',
      specialite: this.specialiteParRole[this.wizardRole] ?? '', superviseurId: '',
    };
    this.showWizardModal = true;
  }

  onWizardRoleChange(): void {
    this.wizardErrors = {};
    this.wizardData.mat = this.generateMat(this.wizardRole);
    this.wizardData.service = this.serviceParRole[this.wizardRole] ?? '';
    this.wizardData.specialite = this.specialiteParRole[this.wizardRole] ?? '';
  }

  wizardNext(): void {
    if (this.wizardStep === 1) {
      this.wizardData.service = this.serviceParRole[this.wizardRole] ?? '';
      this.wizardData.specialite = this.specialiteParRole[this.wizardRole] ?? '';
      this.setWizardStep(2);
    } else if (this.wizardStep === 2) {
      if (!this.validateWizardIdentityStep()) return;
      if (this.wizardIsPatient) {
        this.wizardSave();
      } else {
        this.setWizardStep(3);
      }
    } else if (this.wizardStep === 3) {
      this.wizardSave();
    }
  }

  wizardPrev(): void { if (this.wizardStep > 1) this.setWizardStep(this.wizardStep - 1); }
  wizardCancel(): void { this.showWizardModal = false; this.wizardErrors = {}; }

  wizardSave(): void {
    if (this.wizardIsPatient) {
      this.newPatient = {
        nom: this.wizardData.nom, prenom: this.wizardData.prenom,
        dateNaissance: this.wizardData.dateNaissance,
        cin: this.wizardData.cin, telephone: this.wizardData.telephone,
        adresse: this.wizardData.adresse, genre: this.wizardData.genre,
      };
      this.showWizardModal = false;
      this.saveNewPatient();
    } else {
      this.newUser = {
        login: '', username: '', mat: this.wizardData.mat, nom: this.wizardData.nom, prenom: this.wizardData.prenom,
        email: this.wizardData.email, mdp: '',
        role: this.wizardRole, actif: this.wizardData.actif,
        telephone: this.wizardData.telephone, service: this.wizardData.service,
        specialite: this.wizardData.specialite, superviseurId: this.wizardData.superviseurId,
      };
      this.showWizardModal = false;
      this.saveNewUser();
    }
  }

  get staffRoleOptions(): RoleConfig[] {
    return this.roles.filter(role => role.id !== 'patient');
  }

  // ------------------------------------------------------------------------------
  //  PERMISSIONS
  // ------------------------------------------------------------------------------

  get permCategories(): string[] { return [...new Set(this.permissions.map(p => p.category))]; }
  permsByCategory(category: string): Permission[] { return this.permissions.filter(p => p.category === category); }
  getRoleConfig(id: RoleId): RoleConfig | undefined { return this.roles.find(r => r.id === id); }
  togglePermission(role: RoleConfig, permissionId: string): void { role.permissions[permissionId] = !role.permissions[permissionId]; }

  saveRolePermissions(role: RoleConfig): void {
    const payload: RolePermissionsDto = { role: this.toBackendRole(role.id), permissions: { ...role.permissions } };
    this.rolePermissionService.update(payload.role, payload).subscribe({
      next: (saved) => { role.permissions = { ...saved.permissions }; this.showToast(`Permissions de ${role.label} enregistrees`, 'success'); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible d enregistrer les permissions', 'error')
    });
  }

  resetRole(role: RoleConfig): void {
    const permissions = Object.fromEntries(this.permissions.map(p => [p.id, false]));
    const payload: RolePermissionsDto = { role: this.toBackendRole(role.id), permissions };
    this.rolePermissionService.update(payload.role, payload).subscribe({
      next: (saved) => { role.permissions = { ...saved.permissions }; this.showToast(`Permissions de ${role.label} reinitialisees`, 'info'); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de reinitialiser les permissions', 'error')
    });
  }

  permCount(role: RoleConfig): number { return Object.values(role.permissions ?? {}).filter(Boolean).length; }

  // ------------------------------------------------------------------------------
  //  FILTRES — Profils
  // ------------------------------------------------------------------------------

  get filteredUsers(): AppUser[] {
    const q = this.searchQuery.toLowerCase();
    return this.users.filter(u =>
      u.role !== 'patient' &&
      (!this.filterRole || u.role === this.filterRole) &&
      (!this.filterStatus || u.statut === this.filterStatus) &&
      (!q || u.nom.toLowerCase().includes(q) || u.prenom.toLowerCase().includes(q) ||
        u.login.toLowerCase().includes(q) || u.username.toLowerCase().includes(q) ||
        u.mat.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
    );
  }

  get paginatedUsers(): AppUser[] { return this.paginateArray(this.filteredUsers, 'staffPage'); }
  get totalStaffPages(): number { return this.getTotalPages(this.filteredUsers.length); }

  usersForRole(roleId: RoleId): AppUser[] { return this.users.filter(u => u.role === roleId); }

  get filteredPatients(): AppUser[] {
    const q = this.searchPatient.toLowerCase().trim();
    const patients = this.usersForRole('patient');
    return !q ? patients : patients.filter(u =>
      u.nom.toLowerCase().includes(q) || u.prenom.toLowerCase().includes(q) ||
      String(u.id).includes(q) || (u.dateNaissance || '').toLowerCase().includes(q) ||
      (u.groupeSanguin || '').toLowerCase().includes(q)
    );
  }

  get paginatedPatients(): AppUser[] { return this.paginateArray(this.filteredPatients, 'patientPage'); }
  get totalPatientPages(): number { return this.getTotalPages(this.filteredPatients.length); }

  // ------------------------------------------------------------------------------
  //  MODAL UTILISATEUR (édition)
  // ------------------------------------------------------------------------------

  openUser(user: AppUser): void { this.selectedUser = { ...user }; this.showUserModal = true; }
  closeUserModal(): void { this.showUserModal = false; this.selectedUser = null; }

  saveUser(): void {
    if (!this.selectedUser) return;
    const payload: UtilisateurUpdateDto = {
      login: this.selectedUser.login, username: this.selectedUser.username,
      nom: this.selectedUser.nom, prenom: this.selectedUser.prenom,
      email: this.selectedUser.email, mat: this.selectedUser.mat,
      role: this.toBackendRole(this.selectedUser.role),
      specialite: this.selectedUser.specialite ?? null,
      superviseurId: this.selectedUser.superviseurId ?? null,
      actif: this.selectedUser.statut === 'actif',
      telephone: this.normalizePhone(this.selectedUser.telephone) || null,
      service: this.selectedUser.service?.trim() || null
    };
    this.utilisateurService.update(this.selectedUser.id, payload).subscribe({
      next: () => {
        this.showToast(`Profil de ${this.selectedUser?.prenom} ${this.selectedUser?.nom} mis a jour`, 'success');
        this.logAction('MODIFICATION', 'Utilisateur', `Profil modifié: ${this.selectedUser?.prenom} ${this.selectedUser?.nom}`);
        this.closeUserModal(); this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de mettre a jour le profil', 'error')
    });
  }

  toggleUserStatus(user: AppUser): void {
    this.utilisateurService.toggleActif(user.id).subscribe({
      next: (updated) => {
        this.showToast(`Compte de ${updated.prenom} ${updated.nom} ${updated.actif ? 'active' : 'desactive'}`, updated.actif ? 'success' : 'warning');
        this.applyLocalUserStatus(user.id, updated.actif);
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de modifier le statut du compte', 'error')
    });
  }

  suspendUser(user: AppUser): void {
    this.utilisateurService.update(user.id, { actif: false }).subscribe({
      next: () => {
        this.showToast(`Compte de ${user.prenom} ${user.nom} suspendu`, 'warning');
        this.applyLocalUserStatus(user.id, false);
        this.closeUserModal();
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de suspendre le compte', 'error')
    });
  }

  private applyLocalUserStatus(id: number, actif: boolean): void {
    const statut = actif ? 'actif' : 'suspendu';
    [this.users, this.staffUsers].forEach(list => {
      const u = list.find(x => x.id === id);
      if (u) { u.actif = actif; u.statut = statut; }
    });
    if (this.selectedUser?.id === id) { this.selectedUser.actif = actif; this.selectedUser.statut = statut; }
  }

  deleteUser(user: AppUser): void {
    if (!this.confirmDeletion(`Supprimer ${user.prenom} ${user.nom} ? Cette action est irreversible.`)) return;
    const request = user.role === 'patient' ? this.patientService.delete(user.id) : this.utilisateurService.delete(user.id);
    request.subscribe({
      next: () => {
        this.logAction('SUPPRESSION', user.role === 'patient' ? 'Patient' : 'Utilisateur', `Suppression: ${user.prenom} ${user.nom}`);
        this.showToast(`${user.role === 'patient' ? 'Patient' : 'Utilisateur'} ${user.prenom} ${user.nom} supprime`, 'warning'); this.closeUserModal(); this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Suppression impossible', 'error')
    });
  }

  resetPassword(user: AppUser): void {
    const target = user.email?.trim() || user.login;
    this.utilisateurService.resetPassword(target).subscribe({
      next: (r) => this.showToast(r.message || 'Demande de reinitialisation envoyee', 'info'),
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de lancer la reinitialisation', 'error')
    });
  }

  // ------------------------------------------------------------------------------
  //  PATIENT — création & édition
  // ------------------------------------------------------------------------------

  saveNewPatient(): void {
    const missingFields: string[] = [];
    if (!this.newPatient.nom.trim()) missingFields.push('nom');
    if (!this.newPatient.prenom.trim()) missingFields.push('prenom');
    if (!this.newPatient.dateNaissance) missingFields.push('date de naissance');
    if (!this.newPatient.genre) missingFields.push('genre');
    if (missingFields.length) { this.showToast(`Veuillez renseigner: ${missingFields.join(', ')}`, 'warning'); return; }
    const normalizedPhone = this.normalizePhone(this.newPatient.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) { this.showToast('Le telephone doit contenir 10 chiffres et commencer par 0', 'warning'); return; }
    const payload: PatientRequestDto = {
      nom: this.newPatient.nom.trim(), prenom: this.newPatient.prenom.trim(),
      dateNaissance: this.newPatient.dateNaissance,
      cin: this.newPatient.cin || null,
      telephone: normalizedPhone || null, adresse: this.newPatient.adresse || null, genre: this.newPatient.genre || null
    };
    this.patientService.create(payload).subscribe({
      next: () => {
        this.patientService.invalidateCache(); this.showNewPatientModal = false;
        this.logAction('CREATION', 'Patient', `Nouveau patient: ${payload.prenom} ${payload.nom}`);
        this.showToast(`Patient ${payload.prenom} ${payload.nom} cree`, 'success'); this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de creer le patient', 'error')
    });
  }

  openEditPatient(user: AppUser): void {
    this.editPatient = {
      id: user.id, nom: user.nom, prenom: user.prenom,
      dateNaissance: user.dateNaissance || '', groupeSanguin: user.groupeSanguin || '',
      cin: user.cin || '', telephone: user.telephone || '', adresse: '', genre: user.genre || ''
    };
    this.showEditPatientModal = true;
  }

  saveEditPatient(): void {
    if (!this.editPatient) return;
    const normalizedPhone = this.normalizePhone(this.editPatient.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) { this.showToast('Le telephone doit contenir 10 chiffres et commencer par 0', 'warning'); return; }
    const payload: PatientRequestDto = {
      nom: this.editPatient.nom.trim(), prenom: this.editPatient.prenom.trim(),
      dateNaissance: this.editPatient.dateNaissance,
      cin: this.editPatient.cin || null,
      telephone: normalizedPhone || null, adresse: this.editPatient.adresse || null, genre: this.editPatient.genre || null
    };
    this.patientService.update(this.editPatient.id, payload).subscribe({
      next: () => { this.patientService.invalidateCache(); this.showEditPatientModal = false; this.editPatient = null; this.showToast('Patient modifie avec succes', 'success'); this.refreshAfterMutation(); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de modifier le patient', 'error')
    });
  }

  // ------------------------------------------------------------------------------
  //  UTILISATEUR — création
  // ------------------------------------------------------------------------------

  saveNewUser(): void {
    this.wizardErrors = {};
    if (!this.newUser.nom.trim() || !this.newUser.prenom.trim() || !this.newUser.email.trim()) {
      this.wizardErrors = {
        ...(!this.newUser.nom.trim() ? { nom: 'Le nom est obligatoire' } : {}),
        ...(!this.newUser.prenom.trim() ? { prenom: 'Le prenom est obligatoire' } : {}),
        ...(!this.newUser.email.trim() ? { email: "L'email est obligatoire" } : {})
      };
      this.showWizardModal = true;
      this.setWizardStep(2);
      return;
    }
    const normalizedPhone = this.normalizePhone(this.newUser.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) {
      this.wizardErrors = { telephone: 'Le telephone doit contenir 10 chiffres et commencer par 0' };
      this.showWizardModal = true;
      this.setWizardStep(2);
      return;
    }
    const payload: UtilisateurCreateDto = {
      nom: this.newUser.nom.trim(), prenom: this.newUser.prenom.trim(),
      email: this.newUser.email.trim(),
      role: this.toBackendRole(this.newUser.role),
      telephone: normalizedPhone || null, service: this.newUser.service.trim() || null,
      specialite: this.newUser.specialite.trim() || null,
      superviseurId: this.newUser.superviseurId ? Number(this.newUser.superviseurId) : null
    };
    this.utilisateurService.create(payload).subscribe({
      next: () => {
        this.showNewUserModal = false;
        this.showWizardModal = false;
        this.logAction('CREATION', 'Utilisateur', `Nouveau compte: ${payload.prenom} ${payload.nom} (${payload.role})`);
        this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree. Le mot de passe a ete envoye par email.`, 'success');
        this.refreshAfterMutation();
      },
      error: (err) => this.handleCreateUserError(err)
    });
  }

  get superviseurs(): AppUser[] { return this.users.filter(u => u.role === 'infirmier-majeur'); }

  // ------------------------------------------------------------------------------
  //  CALENDRIER — séances  (avec heures individuelles par date)
  // ------------------------------------------------------------------------------

  get seanceCalTitle(): string { return `${this.moisLabels[this.seanceCalMonth]} ${this.seanceCalYear}`; }
  seanceCalPrevMonth(): void { this.seanceCalMonth === 0 ? (this.seanceCalMonth = 11, this.seanceCalYear--) : this.seanceCalMonth--; }
  seanceCalNextMonth(): void { this.seanceCalMonth === 11 ? (this.seanceCalMonth = 0, this.seanceCalYear++) : this.seanceCalMonth++; }
  get seanceCalDays(): ({ date: string; day: number; today: boolean } | null)[] { return this.buildCalendarDays(this.seanceCalYear, this.seanceCalMonth); }
  isSeanceDaySelected(date: string): boolean { return this.newSeance.dates.includes(date); }

  /**
   * Sélectionne / désélectionne une date pour une nouvelle séance.
   * À l'ajout, pré-remplit les heures avec les valeurs par défaut du formulaire.
   */
  toggleSeanceCalDay(date: string): void {
    const idx = this.newSeance.dates.indexOf(date);
    if (idx === -1) {
      this.newSeance.dates.push(date);
      this.newSeance.dates.sort();
      this.newSeance.datesSeances.push({
        date,
        heureDebut: this.newSeance.heureDebut,
        heureFin: this.newSeance.heureFin,
        infirmierId: this.newSeance.infirmierId
          ? Number(this.newSeance.infirmierId)
          : this.resolveDefaultInfirmierIdForDate(date, this.newSeance.heureDebut, this.newSeance.heureFin)
      });
      this.newSeance.datesSeances.sort((a, b) => a.date.localeCompare(b.date));
      this.newSeanceActiveDate = date;
    } else {
      this.newSeance.dates.splice(idx, 1);
      this.newSeance.datesSeances = this.newSeance.datesSeances.filter(d => d.date !== date);
      if (this.newSeanceActiveDate === date) {
        this.newSeanceActiveDate = this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1]?.date ?? null;
      }
    }
    this.onNewSeanceScheduleChange();
  }

  /** Retourne l'entrée JourSeance pour une date donnée */
  getJourSeance(date: string): JourSeance | undefined {
    return this.newSeance.datesSeances.find(d => d.date === date);
  }

  // ------------------------------------------------------------------------------
  //  SÉANCES — filtre, recherche, regroupement
  // ------------------------------------------------------------------------------

  private groupSeances(seances: SeanceAdminRow[]): GroupedSeance[] {
    const map = new Map<string, GroupedSeance>();
    for (const s of seances) {
      const key = `${s.patientId}|${s.responsableId}|${s.heureDebut}|${s.heureFin}|${s.statut}`;
      const existing = map.get(key);
      if (existing) {
        if (!existing.dates.includes(s.date)) {
          existing.dates.push(s.date);
          existing.dates.sort((a, b) => this.displayToIsoDate(a).localeCompare(this.displayToIsoDate(b)));
        }
        existing.seances.push(s);
      } else {
        map.set(key, {
          patientId: s.patientId, patientNom: s.patientNom,
          responsableId: s.responsableId, infirmierNom: s.infirmierNom,
          dates: [s.date], heureDebut: s.heureDebut, heureFin: s.heureFin,
          statut: s.statut, seances: [s]
        });
      }
    }
    return Array.from(map.values());
  }

  get filteredSeances(): SeanceAdminRow[] {
    let result = this.seancesAdmin;
    if (this.filterSeanceDate) {
      const filterDisplay = this.isoToDisplayDate(this.filterSeanceDate);
      result = result.filter(s => s.date === filterDisplay);
    }
    const q = this.searchSeance.toLowerCase().trim();
    if (q) {
      result = result.filter(s =>
        s.patientNom.toLowerCase().includes(q) || s.infirmierNom.toLowerCase().includes(q) ||
        this.seanceJourLabel(s).toLowerCase().includes(q) ||
        this.seanceCreneauLabel(s).toLowerCase().includes(q) ||
        s.statut.toLowerCase().includes(q)
      );
    }
    return result;
  }

  get filteredGroupedSeances(): GroupedSeance[] { return this.groupSeances(this.filteredSeances); }

  get paginatedGroupedSeances(): GroupedSeance[] {
    const items = this.filteredGroupedSeances;
    const totalPages = this.getTotalPages(items.length);
    if (this.seancePage > totalPages) this.seancePage = totalPages;
    const start = (this.seancePage - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }

  get paginatedSeances(): SeanceAdminRow[] { return this.paginateArray(this.filteredSeances, 'seancePage'); }
  get totalSeancePages(): number { return this.getTotalPages(this.filteredSeances.length); }

  get filteredPersonSeances(): PersonSeance[] {
    const map = new Map<number, PersonSeance>();
    for (const s of this.filteredSeances) {
      let person = map.get(s.patientId);
      if (!person) {
        person = { patientId: s.patientId, patientNom: s.patientNom, infirmierNom: s.infirmierNom, entries: [] };
        map.set(s.patientId, person);
      }
      const jourPlanifie = s.jourPlanifie ?? this.uiDayFromDisplayDate(s.date);
      const existing = person.entries.find(entry => (entry.jourPlanifie ?? this.uiDayFromDisplayDate(entry.date)) === jourPlanifie);
      if (existing) {
        existing.seanceIds = [...(existing.seanceIds ?? [existing.seanceId]), s.id];
        existing.seanceId = s.id;
        existing.date = s.date;
        existing.heureDebut = s.heureDebut;
        existing.heureFin = s.heureFin;
        existing.statut = s.statut;
        existing.jourPlanifie = jourPlanifie;
        existing.creneau = s.creneau;
        continue;
      }
      person.entries.push({
        date: s.date,
        heureDebut: s.heureDebut,
        heureFin: s.heureFin,
        statut: s.statut,
        jourPlanifie,
        creneau: s.creneau,
        seanceId: s.id,
        seanceIds: [s.id]
      });
    }
    const persons = Array.from(map.values());
    persons.forEach(p => p.entries.sort((a, b) => a.date.localeCompare(b.date)));
    return persons;
  }

  get paginatedPersonSeances(): PersonSeance[] {
    const items = this.filteredPersonSeances;
    const totalPages = Math.max(1, Math.ceil(items.length / this.pageSize));
    if (this.seancePage > totalPages) this.seancePage = totalPages;
    const start = (this.seancePage - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }

  get totalPersonSeancePages(): number { return Math.max(1, Math.ceil(this.filteredPersonSeances.length / this.pageSize)); }

  supprimerPersonSeances(person: PersonSeance): void {
    const ids = [...new Set(person.entries.flatMap(e => e.seanceIds ?? [e.seanceId]))];
    forkJoin(ids.map(id => this.seanceService.delete(id))).subscribe({
      next: () => { this.showToast(`${ids.length} séance(s) supprimée(s)`, 'warning'); this.refreshAfterMutation(); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de supprimer les séances', 'error')
    });
  }

  openEditPersonSeance(person: PersonSeance): void {
    if (!person.entries.length) return;
    const ids = [...new Set(person.entries.flatMap(e => e.seanceIds ?? [e.seanceId]))];
    const rows = ids
      .map(id => this.seancesAdmin.find(s => s.id === id))
      .filter((r): r is SeanceAdminRow => !!r)
      .sort((a, b) => this.displayToIsoDate(a.date).localeCompare(this.displayToIsoDate(b.date)));
    if (!rows.length) return;
    const first = rows[0];
    const datesSeances = Array.from(new Map(rows.map(s => [
      this.displayToIsoDate(s.date),
      { date: this.displayToIsoDate(s.date), heureDebut: s.heureDebut, heureFin: s.heureFin }
    ])).values());
    this.editSeance = { ...first, datesSeances, sourceSeances: rows };
    this.editSeanceDates = datesSeances.map(d => d.date);
    this.editSeanceJours = [...new Set(rows.map(row => row.jourPlanifie ?? this.uiDayFromDisplayDate(row.date)))].sort((a, b) => a - b);
    this.showEditSeanceModal = true;
    this.syncSelectedInfirmierForEdit();
  }

  isSeanceDateMatchingFilter(displayDate: string): boolean {
    if (!this.filterSeanceDate) return false;
    return displayDate === this.isoToDisplayDate(this.filterSeanceDate);
  }

  formatFilterDate(isoDate: string): string { return this.isoToDisplayDate(isoDate); }

  supprimerGroupedSeances(group: GroupedSeance): void {
    const ids = group.seances.map(s => s.id);
    forkJoin(ids.map(id => this.seanceService.delete(id))).subscribe({
      next: () => { this.showToast(`${ids.length} séance(s) supprimée(s)`, 'warning'); this.refreshAfterMutation(); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de supprimer les séances', 'error')
    });
  }

  get infirmiers(): AppUser[] { return this.users.filter(u => u.role === 'infirmier'); }

  get availableInfirmiers(): AppUser[] {
    const activeDate = this.getActiveNewSeanceDateEntry();
    if (!activeDate) return [];
    const candidates = this.infirmiers.filter(user => this.isInfirmierAvailableForSelection(user.id));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getInfirmierLoadForSelection(left.id) - this.getInfirmierLoadForSelection(right.id);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, 'fr');
    });
  }

  get availableInfirmiersForEdit(): AppUser[] {
    const candidates = this.infirmiers.filter(user => this.isInfirmierAvailableForEdit(user.id));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getInfirmierLoadForEdit(left.id) - this.getInfirmierLoadForEdit(right.id);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, 'fr');
    });
  }

  get patientsUsers(): AppUser[] { return this.users.filter(u => u.role === 'patient'); }

  getInfirmierLoadForSelection(userId: number): number {
    const activeDate = this.getActiveNewSeanceDateEntry();
    const dates = activeDate ? [activeDate.date] : [];
    if (!dates.length) return 0;
    return this.seancesAdmin.filter(seance =>
      seance.responsableId === userId && dates.includes(this.displayToIsoDate(seance.date))
    ).length;
  }

  getAvailableInfirmiersForDate(date: string, start: string, end: string): AppUser[] {
    const candidates = this.infirmiers.filter(user =>
      !this.hasSeanceConflict(user.id, date, start, end)
    );

    return [...candidates].sort((left, right) => {
      const loadDiff = this.getInfirmierLoadForDate(left.id, date) - this.getInfirmierLoadForDate(right.id, date);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, 'fr');
    });
  }

  getInfirmierLoadForDate(userId: number, date: string): number {
    return this.seancesAdmin.filter(seance =>
      seance.responsableId === userId && this.displayToIsoDate(seance.date) === date
    ).length;
  }

  getInfirmierLoadForEdit(userId: number): number {
    const dates = this.editSeanceDates.length
      ? this.editSeanceDates
      : (this.editSeance ? [this.displayToIsoDate(this.editSeance.date)] : [this.todayLocalIso()]);
    return this.seancesAdmin.filter(seance =>
      seance.id !== this.editSeance?.id && seance.responsableId === userId &&
      dates.includes(this.displayToIsoDate(seance.date))
    ).length;
  }

  /**
   * Planifie les séances : UNE requête par date avec ses heures propres.
   * Valide que chaque date a des heures cohérentes avant d'envoyer.
   */
  ajouterSeance(): void {
    const creneaux = this.resolveSelectedCreneaux();
    if (!this.newSeance.patientId || !this.newSeance.jours.length || !creneaux.length) {
      this.showToast('Veuillez choisir un patient, au moins un jour et un créneau', 'warning'); return;
    }

    const payload = {
      patientId: Number(this.newSeance.patientId),
      jours: [...new Set(this.newSeance.jours)],
      creneaux,
      nombreSemaines: 1,
      utilisateurId: this.authService.utilisateurId || null
    };

    this.seanceService.planifier(payload).subscribe({
      next: (createdSeances) => {
        this.insertSeances(createdSeances);
        this.resetNewSeanceForm();
        this.logAction('CREATION', 'Séance', `${createdSeances.length} séance(s) planifiée(s)`);
        this.showToast(`${createdSeances.length} séance(s) planifiée(s) avec succès`, 'success');
      },
      error: (err) => {
        const msg = err?.error?.message || err?.error?.detail || err?.error?.error || 'Impossible de planifier la séance';
        this.showToast(msg, 'error');
      }
    });
  }

  private resolveSelectedCreneaux(): Array<'MATIN' | 'APRES_MIDI'> {
    const creneaux: Array<'MATIN' | 'APRES_MIDI'> = [];
    if (this.newSeance.shiftMatin) creneaux.push('MATIN');
    if (this.newSeance.shiftApresMidi) creneaux.push('APRES_MIDI');
    return creneaux;
  }

  private resolveNewSeanceDates(): JourSeance[] {
    if (this.newSeance.datesSeances.length) {
      return this.newSeance.datesSeances;
    }

    const shifts: Array<{ heureDebut: string; heureFin: string }> = [];
    if (this.newSeance.shiftMatin) shifts.push({ heureDebut: '07:30', heureFin: '11:30' });
    if (this.newSeance.shiftApresMidi) shifts.push({ heureDebut: '13:30', heureFin: '17:30' });
    if (!this.newSeance.jours.length || !shifts.length) {
      return [];
    }

    const today = new Date();
    return this.newSeance.jours
      .flatMap(day => {
        const date = this.nextDateForWeekday(today, day);
        return shifts.map(shift => ({
          date,
          heureDebut: shift.heureDebut,
          heureFin: shift.heureFin,
          infirmierId: this.resolveDefaultInfirmierIdForDate(date, shift.heureDebut, shift.heureFin)
        }));
      })
      .sort((left, right) => `${left.date} ${left.heureDebut}`.localeCompare(`${right.date} ${right.heureDebut}`));
  }

  private nextDateForWeekday(from: Date, targetDay: number): string {
    const date = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const diff = (targetDay - date.getDay() + 7) % 7;
    date.setDate(date.getDate() + diff);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  supprimerSeance(id: number): void {
    if (!this.confirmDeletion('Supprimer cette seance ?')) return;
    this.seanceService.delete(id).subscribe({
      next: () => {
        this.removeSeanceRows([id]);
        this.showToast('Seance supprimee', 'warning');
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de supprimer la seance', 'error')
    });
  }

  get editSeanceCalTitle(): string { return `${this.moisLabels[this.editSeanceCalMonth]} ${this.editSeanceCalYear}`; }
  editSeanceCalPrevMonth(): void { this.editSeanceCalMonth === 0 ? (this.editSeanceCalMonth = 11, this.editSeanceCalYear--) : this.editSeanceCalMonth--; }
  editSeanceCalNextMonth(): void { this.editSeanceCalMonth === 11 ? (this.editSeanceCalMonth = 0, this.editSeanceCalYear++) : this.editSeanceCalMonth++; }
  get editSeanceCalDays(): ({ date: string; day: number; today: boolean } | null)[] { return this.buildCalendarDays(this.editSeanceCalYear, this.editSeanceCalMonth); }
  toggleEditSeanceCalDay(date: string): void {
    if (!this.editSeance) return;
    const idx = this.editSeanceDates.indexOf(date);
    if (idx === -1) {
      this.editSeanceDates.push(date);
      this.editSeanceDates.sort();
      this.editSeance.datesSeances.push({ date, heureDebut: this.editSeance.heureDebut, heureFin: this.editSeance.heureFin });
      this.editSeance.datesSeances.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      this.editSeanceDates.splice(idx, 1);
      this.editSeance.datesSeances = this.editSeance.datesSeances.filter(d => d.date !== date);
    }
    this.syncSelectedInfirmierForEdit();
  }
  isEditSeanceDaySelected(date: string): boolean { return this.editSeanceDates.includes(date); }

  isEditSeanceJourSelected(jour: number): boolean {
    return this.editSeanceJours.includes(jour);
  }

  toggleEditSeanceJour(jour: number): void {
    const index = this.editSeanceJours.indexOf(jour);
    if (index >= 0) {
      this.editSeanceJours.splice(index, 1);
    } else {
      this.editSeanceJours.push(jour);
      this.editSeanceJours.sort((a, b) => a - b);
    }
    this.syncEditSeanceDatesFromJours();
  }

  setEditSeanceCreneau(creneau: 'MATIN' | 'APRES_MIDI'): void {
    if (!this.editSeance) return;
    const slot = creneau === 'MATIN'
      ? { heureDebut: '07:30', heureFin: '11:30' }
      : { heureDebut: '13:30', heureFin: '17:30' };
    this.editSeance.heureDebut = slot.heureDebut;
    this.editSeance.heureFin = slot.heureFin;
    this.editSeance.datesSeances = this.editSeance.datesSeances.map(dateSeance => ({ ...dateSeance, ...slot }));
    if (this.editSeanceJours.length) this.syncEditSeanceDatesFromJours();
    this.onEditSeanceScheduleChange();
  }

  private syncEditSeanceDatesFromJours(): void {
    if (!this.editSeance) return;
    const baseDate = new Date();
    this.editSeance.datesSeances = this.editSeanceJours
      .map(jour => ({
        date: this.nextDateForWeekday(baseDate, jour),
        heureDebut: this.editSeance!.heureDebut,
        heureFin: this.editSeance!.heureFin
      }))
      .sort((left, right) => left.date.localeCompare(right.date));
    this.editSeanceDates = this.editSeance.datesSeances.map(dateSeance => dateSeance.date);
    this.syncSelectedInfirmierForEdit();
  }

  openEditSeance(groupOrRow: GroupedSeance | SeanceAdminRow): void {
    const group = 'seances' in groupOrRow
      ? groupOrRow
      : {
          patientId: groupOrRow.patientId,
          patientNom: groupOrRow.patientNom,
          responsableId: groupOrRow.responsableId,
          infirmierNom: groupOrRow.infirmierNom,
          dates: [groupOrRow.date],
          heureDebut: groupOrRow.heureDebut,
          heureFin: groupOrRow.heureFin,
          statut: groupOrRow.statut,
          seances: [groupOrRow]
        };

    const sourceSeances = [...group.seances].sort((a, b) => this.displayToIsoDate(a.date).localeCompare(this.displayToIsoDate(b.date)));
    const first = sourceSeances[0];
    this.editSeance = {
      ...first,
      datesSeances: Array.from(new Map(sourceSeances.map(s => [
        this.displayToIsoDate(s.date),
        { date: this.displayToIsoDate(s.date), heureDebut: s.heureDebut, heureFin: s.heureFin }
      ])).values()),
      sourceSeances
    };
    this.editSeanceDates = this.editSeance.datesSeances.map(d => d.date);
    this.editSeanceJours = [...new Set(sourceSeances.map(row => row.jourPlanifie ?? this.uiDayFromDisplayDate(row.date)))].sort((a, b) => a - b);
    this.showEditSeanceModal = true;
    this.syncSelectedInfirmierForEdit();
  }

  saveEditSeance(): void {
    if (!this.editSeance) return;
    if (!this.editSeance.datesSeances.length) {
      this.showToast('Veuillez choisir au moins un jour', 'warning');
      return;
    }
    const invalid = this.editSeance.datesSeances.find(d => !d.heureDebut || !d.heureFin || d.heureDebut >= d.heureFin);
    if (invalid) {
      this.showToast(`Horaire invalide pour le ${this.isoToDisplayDate(invalid.date)} : l'heure de fin doit ?tre apr?s l'heure de d?but`, 'warning');
      return;
    }

    const sourceByDate = new Map<string, SeanceAdminRow>();
    const duplicateSources: SeanceAdminRow[] = [];
    for (const source of this.editSeance.sourceSeances) {
      const sourceDate = this.displayToIsoDate(source.date);
      if (sourceByDate.has(sourceDate)) {
        duplicateSources.push(source);
      } else {
        sourceByDate.set(sourceDate, source);
      }
    }
    const currentDates = new Set(this.editSeance.datesSeances.map(d => d.date));

    const updates = this.editSeance.datesSeances
      .filter(d => sourceByDate.has(d.date))
      .map(d => {
        const source = sourceByDate.get(d.date)!;
        const payload: SeanceUpdateRequestDto = {
          date: d.date,
          heureDebut: d.heureDebut,
          heureFin: d.heureFin,
          infirmierId: this.editSeance!.responsableId
        };
        return this.seanceService.update(source.id, payload);
      });

    const creations = this.editSeance.datesSeances
      .filter(d => !sourceByDate.has(d.date))
      .map(d => this.seanceService.create({
        date: d.date,
        heureDebut: d.heureDebut,
        heureFin: d.heureFin,
        patientId: this.editSeance!.patientId,
        utilisateurId: this.authService.utilisateurId,
        infirmierId: this.editSeance!.responsableId
      } as SeanceRequestDto));

    const deletions = this.editSeance.sourceSeances
      .filter(s => !currentDates.has(this.displayToIsoDate(s.date)) || duplicateSources.some(duplicate => duplicate.id === s.id))
      .map(s => this.seanceService.delete(s.id));

    const operations = [...updates, ...creations, ...deletions];
    if (!operations.length) {
      this.showEditSeanceModal = false;
      this.editSeance = null;
      this.editSeanceDates = [];
      this.editSeanceJours = [];
      return;
    }

    concat(...operations).pipe(toArray()).subscribe({
      next: (results) => {
        const updatedSeances = results.slice(0, updates.length) as SeanceDto[];
        const createdSeances = results.slice(updates.length, updates.length + creations.length) as SeanceDto[];
        const deletedIds = this.editSeance?.sourceSeances
          .filter(s => !currentDates.has(this.displayToIsoDate(s.date)) || duplicateSources.some(duplicate => duplicate.id === s.id))
          .map(s => s.id) ?? [];

        this.replaceSeanceRows(updatedSeances, createdSeances, deletedIds);
        this.showEditSeanceModal = false;
        this.editSeance = null;
        this.editSeanceDates = [];
        this.editSeanceJours = [];
        this.showToast('Seances modifiees avec succes', 'success');
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de modifier les seances', 'error')
    });
  }

  seanceJourLabel(entry: Pick<PersonSeanceEntry, 'date' | 'jourPlanifie'>): string {
    const jour = entry.jourPlanifie ?? this.uiDayFromDisplayDate(entry.date);
    return this.joursLabels[jour] ?? '-';
  }

  seanceCreneauLabel(entry: Pick<PersonSeanceEntry, 'heureDebut' | 'heureFin' | 'creneau'>): string {
    const creneau = String(entry.creneau ?? '').toUpperCase();
    if (creneau === 'MATIN') return 'Matin';
    if (creneau === 'APRES_MIDI' || creneau === 'APRES-MIDI') return 'Apres-midi';
    return entry.heureDebut < '12:00' ? 'Matin' : 'Apres-midi';
  }

  seanceStatutClass(statut: string): string { const v = this.normalizeSeanceStatut(statut); return v === 'TERMINEE' ? 'ok' : v === 'EN_COURS' ? 'info' : 'neutral'; }
  seanceStatutLabel(statut: string): string { const v = this.normalizeSeanceStatut(statut); return v === 'TERMINEE' ? 'Terminee' : v === 'EN_COURS' ? 'En cours' : v === 'ANNULEE' ? 'Annulee' : 'Planifiee'; }

  // ------------------------------------------------------------------------------
  //  STATISTIQUES — charts data
  // ------------------------------------------------------------------------------

  get seancesBarChart(): BarPoint[] {
    const today = new Date();
    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const display = this.isoToDisplayDate(iso);
      return {
        label: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'][d.getDay()],
        count: this.seancesAdmin.filter(s => s.date === display).length,
        pct: 0,
      };
    });
    const max = Math.max(...days.map(d => d.count), 1);
    return days.map(d => ({ ...d, pct: d.count / max }));
  }

  get userRoleDonut(): DonutSegment[] {
    const total = this.users.length || 1;
    const c = 282.74;
    const roleData = [
      { label: 'Médecins',    count: this.medecinCount,                                   color: '#00D9C4' },
      { label: 'Inf. Maj.',   count: this.infMajeurCount,                                 color: '#A78BFA' },
      { label: 'Infirmiers',  count: this.infirmierCount,                                 color: '#4EA8F8' },
      { label: 'Patients',    count: this.patientCount,                                   color: '#22c55e' },
      { label: 'Admins',      count: this.users.filter(u => u.role === 'admin').length,   color: '#ff5757' },
    ].filter(r => r.count > 0);
    let rot = -90;
    return roleData.map(r => {
      const pct = r.count / total;
      const seg: DonutSegment = { ...r, dasharray: `${Math.max(0, pct * c - 1).toFixed(1)} ${c}`, rotate: rot };
      rot += pct * 360;
      return seg;
    });
  }

  get tauxOccupation(): number {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const mondayIso = monday.toISOString().slice(0, 10);
    const sundayIso = sunday.toISOString().slice(0, 10);
    const weekSeances = this.seancesAdmin.filter(s => {
      const d = this.displayToIsoDate(s.date);
      return d >= mondayIso && d <= sundayIso;
    }).length;
    const capacity = Math.max(1, this.infirmierCount * 2 * 5 * 3);
    return Math.min(100, Math.round((weekSeances / capacity) * 100));
  }

  get seancesThisWeek(): number {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const mondayIso = monday.toISOString().slice(0, 10);
    const sundayIso = sunday.toISOString().slice(0, 10);
    return this.seancesAdmin.filter(s => {
      const d = this.displayToIsoDate(s.date);
      return d >= mondayIso && d <= sundayIso;
    }).length;
  }

  get newPatientsThisMonth(): number {
    const now = new Date();
    const monthPart = `/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    return this.users.filter(u => u.role === 'patient' && (u.dateCreation ?? '').includes(monthPart)).length;
  }

  exportStatsPdf(): void {
    const html = this.buildStatsPdfHtml();
    const w = window.open('', '_blank', 'width=900,height=700,toolbar=0,menubar=0');
    if (!w) { this.showToast("Autorisez les popups pour exporter en PDF.", 'warning'); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
    setTimeout(() => { w.focus(); w.print(); }, 600);
    this.logAction('EXPORT', 'Statistiques', 'Export PDF statistiques');
  }

  private buildStatsPdfHtml(): string {
    const now = new Date().toLocaleString('fr-FR');
    const roleRows = this.userRoleDonut.map(s =>
      `<tr><td>${s.label}</td><td>${s.count}</td><td>${((s.count / (this.users.length || 1)) * 100).toFixed(1)}%</td></tr>`
    ).join('');
    const barRows = this.seancesBarChart.map(b =>
      `<tr><td>${b.label}</td><td>${b.count}</td></tr>`
    ).join('');
    return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Statistiques DialySys</title>
<style>
@page{margin:15mm 20mm;size:A4}*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
body{color:#1a1a2e;font-size:12px}
h1{font-size:20px;color:#00857a;border-bottom:2px solid #00857a;padding-bottom:8px;margin-bottom:16px}
h2{font-size:14px;color:#334155;margin:16px 0 8px;border-left:3px solid #00D9C4;padding-left:8px}
table{width:100%;border-collapse:collapse;margin-bottom:16px}
th{background:#f0fafa;text-align:left;padding:6px 10px;font-size:11px;border-bottom:2px solid #00D9C4}
td{padding:5px 10px;border-bottom:1px solid #e2e8f0;font-size:11px}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}
.kpi{background:#f8fafc;border-radius:8px;padding:12px;text-align:center;border:1px solid #e2e8f0}
.kpi-val{font-size:24px;font-weight:bold;color:#00857a}
.kpi-label{font-size:10px;color:#64748b;margin-top:2px}
.footer{text-align:right;font-size:10px;color:#94a3b8;margin-top:20px}
</style></head><body>
<h1>Tableau de Bord — Statistiques DialySys</h1>
<div class="kpi-grid">
<div class="kpi"><div class="kpi-val">${this.totalUsers}</div><div class="kpi-label">Utilisateurs total</div></div>
<div class="kpi"><div class="kpi-val">${this.activeUsers}</div><div class="kpi-label">Utilisateurs actifs</div></div>
<div class="kpi"><div class="kpi-val">${this.seancesThisWeek}</div><div class="kpi-label">Séances cette semaine</div></div>
<div class="kpi"><div class="kpi-val">${this.tauxOccupation}%</div><div class="kpi-label">Taux occupation</div></div>
</div>
<h2>Répartition par rôle</h2>
<table><thead><tr><th>Rôle</th><th>Nombre</th><th>%</th></tr></thead><tbody>${roleRows}</tbody></table>
<h2>Séances — 7 derniers jours</h2>
<table><thead><tr><th>Jour</th><th>Séances</th></tr></thead><tbody>${barRows}</tbody></table>
<div class="footer">Exporté le ${now} — DialySys Admin</div>
</body></html>`;
  }

  // ------------------------------------------------------------------------------
  //  AUDIT LOG
  // ------------------------------------------------------------------------------

  auditEntries: AuditEntryUI[] = [];
  auditFilterUser = '';
  auditFilterAction: string = '';
  auditFilterDate = '';
  auditPage = 1;
  auditLoading = false;
  private auditRefreshing = false;
  auditLoadError = '';
  readonly auditPageSize = 15;

  loadAuditEntries(showLoader = true): void {
    if (this.auditRefreshing) {
      return;
    }
    this.auditRefreshing = true;
    if (showLoader) {
      this.auditLoading = true;
      this.auditLoadError = '';
    }
    this.auditService.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (entries) => {
          this.auditEntries = entries as AuditEntryUI[];
          this.auditPage = Math.min(this.auditPage, this.totalAuditPages);
          this.auditLoadError = '';
          if (showLoader) this.auditLoading = false;
          this.auditRefreshing = false;
        },
        error: (err) => {
          if (showLoader) this.auditLoading = false;
          this.auditRefreshing = false;
          this.auditLoadError = err?.error?.message ?? 'Impossible de charger le journal depuis la base de données';
          if (showLoader) this.showToast(this.auditLoadError, 'error');
        }
      });
  }

  get filteredAuditEntries(): AuditEntryUI[] {
    const q = this.auditFilterUser.toLowerCase().trim();
    return this.auditEntries.filter(e =>
      (!q || e.utilisateur.toLowerCase().includes(q) || e.details.toLowerCase().includes(q) || e.entite.toLowerCase().includes(q)) &&
      (!this.auditFilterAction || e.action === this.auditFilterAction) &&
      (!this.auditFilterDate || e.timestamp.startsWith(this.auditFilterDate))
    );
  }

  get paginatedAuditEntries(): AuditEntryUI[] {
    const items = this.filteredAuditEntries;
    const total = Math.max(1, Math.ceil(items.length / this.auditPageSize));
    if (this.auditPage > total) this.auditPage = total;
    const start = (this.auditPage - 1) * this.auditPageSize;
    return items.slice(start, start + this.auditPageSize);
  }

  get totalAuditPages(): number {
    return Math.max(1, Math.ceil(this.filteredAuditEntries.length / this.auditPageSize));
  }

  clearAuditLog(): void {
    this.auditFilterUser = '';
    this.auditFilterAction = '';
    this.auditFilterDate = '';
    this.auditPage = 1;
    this.loadAuditEntries(false);
    this.showToast('Filtres du journal réinitialisés', 'info');
  }

  exportAuditPdf(): void {
    const entries = this.filteredAuditEntries.slice(0, 200);
    const rows = entries.map(e =>
      `<tr>
        <td>${new Date(e.timestamp).toLocaleString('fr-FR')}</td>
        <td>${e.utilisateur}</td>
        <td>${e.role}</td>
        <td class="action action-${e.action.toLowerCase()}">${e.action}</td>
        <td>${e.entite}</td>
        <td>${e.details}</td>
        <td class="${e.statut}">${e.statut === 'success' ? 'OK' : 'Erreur'}</td>
      </tr>`
    ).join('');
    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Journal des Activités</title>
<style>
@page{margin:10mm 15mm;size:A4 landscape}*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif;font-size:10px}
body{color:#1a1a2e}
h1{font-size:16px;color:#00857a;border-bottom:2px solid #00857a;padding-bottom:6px;margin-bottom:12px}
table{width:100%;border-collapse:collapse}
th{background:#f0fafa;text-align:left;padding:5px 8px;font-size:9px;border-bottom:2px solid #00D9C4;white-space:nowrap}
td{padding:4px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top}
tr:nth-child(even) td{background:#f8fafc}
.action{font-weight:bold}
.action-creation{color:#22c55e}.action-modification{color:#f59e0b}.action-suppression{color:#ef4444}
.action-connexion{color:#4EA8F8}.action-deconnexion{color:#94a3b8}.action-export{color:#A78BFA}
.success{color:#22c55e}.error{color:#ef4444}
.footer{text-align:right;font-size:9px;color:#94a3b8;margin-top:12px}
</style></head><body>
<h1>Journal des Activités — DialySys</h1>
<table>
<thead><tr><th>Horodatage</th><th>Utilisateur</th><th>Rôle</th><th>Action</th><th>Entité</th><th>Détails</th><th>Statut</th></tr></thead>
<tbody>${rows}</tbody>
</table>
<div class="footer">Exporté le ${new Date().toLocaleString('fr-FR')} — ${entries.length} entrée(s)</div>
</body></html>`;
    const w = window.open('', '_blank', 'width=1100,height=700,toolbar=0,menubar=0');
    if (!w) { this.showToast("Autorisez les popups pour exporter.", 'warning'); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
    setTimeout(() => { w.focus(); w.print(); }, 600);
    this.logAction('EXPORT', 'Audit', `Export PDF journal (${entries.length} entrées)`);
  }

  auditActionLabel(action: string): string {
    const labels: Record<string, string> = {
      CONNEXION: 'Connexion', CREATION: 'Création', MODIFICATION: 'Modification',
      SUPPRESSION: 'Suppression', EXPORT: 'Export', DECONNEXION: 'Déconnexion',
      LECTURE: 'Lecture',
    };
    return labels[action] ?? action;
  }

  auditActionClass(action: string): string {
    const classes: Record<string, string> = {
      CONNEXION: 'audit-action--connexion', CREATION: 'audit-action--creation',
      MODIFICATION: 'audit-action--modification', SUPPRESSION: 'audit-action--suppression',
      EXPORT: 'audit-action--export', DECONNEXION: 'audit-action--deconnexion',
      LECTURE: 'audit-action--lecture',
    };
    return classes[action] ?? '';
  }

  fmtAuditDate(iso: string): string {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  private logAction(action: import('../../../services/audit.service').AuditAction, entite: string, details: string, statut: 'success' | 'error' = 'success'): void {
    const user = this.authService.getUtilisateur?.() ?? null;
    const username = user ? `${user.prenom} ${user.nom}` : 'Admin';
    this.auditService.log(username, 'ADMIN', action, entite, details, statut)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          if (this.activeTab === 'audit') {
            this.loadAuditEntries(false);
          }
        },
        error: () => {}
      });
  }

  // ------------------------------------------------------------------------------
  //  KPI
  // ------------------------------------------------------------------------------

  get totalUsers(): number { return this.users.length; }
  get activeUsers(): number { return this.users.filter(u => u.statut === 'actif').length; }
  get medecinCount(): number { return this.users.filter(u => u.role === 'medecin').length; }
  get infMajeurCount(): number { return this.users.filter(u => u.role === 'infirmier-majeur').length; }
  get infirmierCount(): number { return this.users.filter(u => u.role === 'infirmier').length; }
  get patientCount(): number { return this.users.filter(u => u.role === 'patient').length; }
  get suspendedCount(): number { return this.users.filter(u => u.statut === 'suspendu').length; }

  // ------------------------------------------------------------------------------
  //  HELPERS UI
  // ------------------------------------------------------------------------------

  roleLabel(id: RoleId | string): string { return this.getRoleConfig(typeof id === 'string' ? this.toRoleId(id) : id)?.label ?? String(id); }
  roleColorVar(id: RoleId | string): string { return this.getRoleConfig(typeof id === 'string' ? this.toRoleId(id) : id)?.colorVar ?? 'var(--c-text-2)'; }
  statusClass(status: UserStatus): string { return status === 'actif' ? 'ok' : status === 'suspendu' ? 'crit' : 'neutral'; }
  statusLabel(status: UserStatus): string { return status === 'actif' ? 'Actif' : status === 'suspendu' ? 'Suspendu' : 'Inactif'; }
  initials(user: AppUser): string { return `${user.prenom?.[0] ?? ''}${user.nom?.[0] ?? ''}`.toUpperCase(); }
  profilTabLabel(role: RoleId): string { return ({ admin: 'Admins', medecin: 'Medecins', 'infirmier-majeur': 'Inf. Majeurs', infirmier: 'Infirmiers', patient: 'Patients' } as Record<RoleId, string>)[role]; }
  get activeTabTitle(): string { return ({ profils: 'Gestion des Profils', seances: 'Planification des Séances', statistiques: 'Statistiques & Indicateurs', audit: 'Journal des Activités' } as Record<AdminTab, string>)[this.activeTab]; }

  /** Expose isoToDisplayDate au template */
  isoToDisplayDate(value: string): string {
    if (!value || !value.includes('-')) return value;
    const [y, m, d] = value.slice(0, 10).split('-');
    return `${d}/${m}/${y}`;
  }

  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }
  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }
  toastIcon(type: string): string { return ({ success: 'check_circle', warning: 'warning', error: 'error', info: 'info', ok: 'check_circle' } as Record<string, string>)[type] ?? 'info'; }

  saveSettings(): void {
    this.adminSettingsService.update(this.settings).subscribe({
      next: (saved) => { this.settings = { ...saved }; this.showSettingsModal = false; this.showToast('Parametres systeme enregistres', 'success'); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible d enregistrer les parametres', 'error')
    });
  }

  toggleTheme(): void {
    this.isLight = !this.isLight;
    if (this.isLight) {
      document.body.classList.add('theme-light');
      localStorage.setItem('admin_theme', 'light');
    } else {
      document.body.classList.remove('theme-light');
      localStorage.setItem('admin_theme', 'dark');
    }
  }

  logout(): void {
    this.stopPolling();
    this.destroy$.next();
    this.destroy$.complete();
    this.authService.logout();
  }

  // ------------------------------------------------------------------------------
  //  PRIVATE HELPERS
  // ------------------------------------------------------------------------------

  private normalizePhone(value: string | null | undefined): string { return String(value ?? '').replace(/\D/g, ''); }
  private isValidPhone(value: string): boolean { return /^0\d{9}$/.test(value); }
  private isValidOptionalPhone(value: string | null | undefined): boolean { const normalized = this.normalizePhone(value); return !normalized || this.isValidPhone(normalized); }
  private isStrongPassword(value: string): boolean { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/.test(value); }

  hasWizardError(field: string): boolean { return !!this.wizardErrors[field]; }
  wizardError(field: string): string { return this.wizardErrors[field] ?? ''; }
  clearWizardError(field: string): void {
    if (!this.wizardErrors[field]) return;
    const { [field]: _removed, ...remaining } = this.wizardErrors;
    this.wizardErrors = remaining;
  }

  private setWizardStep(step: number): void {
    this.wizardStep = step;
    setTimeout(() => {
      const body = document.querySelector('.wz-body');
      body?.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }

  private validateWizardIdentityStep(): boolean {
    const errors: Record<string, string> = {};
    if (!this.wizardData.nom.trim()) errors['nom'] = 'Le nom est obligatoire';
    if (!this.wizardData.prenom.trim()) errors['prenom'] = 'Le prenom est obligatoire';
    if (!this.isValidOptionalPhone(this.wizardData.telephone)) errors['telephone'] = 'Le telephone doit contenir 10 chiffres et commencer par 0';

    if (this.wizardIsPatient) {
      if (!this.wizardData.dateNaissance) errors['dateNaissance'] = 'La date de naissance est obligatoire';
      if (!this.wizardData.genre) errors['genre'] = 'Le genre est obligatoire';
    } else {
      if (!this.wizardData.email.trim()) errors['email'] = "L'email professionnel est obligatoire";
      if (this.wizardData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.wizardData.email.trim())) {
        errors['email'] = "L'email n'est pas valide";
      }
      if (this.wizardRole === 'medecin' && !this.wizardData.specialite.trim()) {
        errors['specialite'] = 'La specialite est obligatoire';
      }
    }

    this.wizardErrors = errors;
    return Object.keys(errors).length === 0;
  }

  private handleCreateUserError(err: any): void {
    const fieldErrors = err?.error?.fieldErrors;
    if (fieldErrors && typeof fieldErrors === 'object') {
      this.wizardErrors = fieldErrors;
      this.showWizardModal = true;
      this.setWizardStep(2);
      return;
    }
    this.showToast(err?.error?.message ?? 'Impossible de creer le compte', 'error');
  }

  private applyRolePermissions(configs: RolePermissionsDto[]): void {
    this.roles.forEach(r => r.permissions = {});
    configs.forEach(c => {
      const role = this.roles.find(r => this.toBackendRole(r.id) === c.role.toUpperCase());
      if (role) role.permissions = { ...c.permissions };
    });
  }

  private mapUtilisateurToAppUser(dto: UtilisateurResponseDto): AppUser {
    const role = this.toRoleId(dto.role);
    return {
      id: dto.id, login: dto.login, username: dto.username, role, backendRole: dto.role,
      mat: dto.mat, nom: dto.nom, prenom: dto.prenom, email: dto.email, mdp: '********',
      dateCreation: this.formatDateTime(dto.dateCreation), actif: dto.actif,
      statut: dto.actif ? 'actif' : 'suspendu', derniereConnexion: '—',
      specialite: dto.specialite, superviseurId: dto.superviseurId,
      telephone: dto.telephone || '',
      service: (dto.service || this.serviceParRole[role]) ?? ''
    };
  }

  private mapPatientToAppUser(dto: PatientDto): AppUser {
    return {
      id: dto.id, login: '', username: '', role: 'patient', backendRole: 'PATIENT',
      mat: `PAT-${String(dto.id).padStart(4, '0')}`,
      nom: dto.nom, prenom: dto.prenom, email: '', mdp: '',
      dateCreation: dto.dossierPatient?.dateCreation ? this.formatDateTime(dto.dossierPatient.dateCreation) : '—',
      actif: true, statut: 'actif', derniereConnexion: '—',
      telephone: dto.telephone ?? '',
      service: dto.medecinReferent ? `Referent: ${dto.medecinReferent.prenom} ${dto.medecinReferent.nom}` : '',
      dateNaissance: dto.dateNaissance, groupeSanguin: dto.groupeSanguin,
      cin: dto.cin ?? null, genre: dto.genre ?? null
    };
  }

  private mapSeanceToRow(dto: SeanceDto): SeanceAdminRow {
    const infirmier = dto.infirmier;
    const infirmierNom = infirmier ? `${infirmier.prenom} ${infirmier.nom}` : '—';
    const creneau = dto.creneau ?? 'MATIN';
    const heureDebut = creneau === 'APRES_MIDI' ? '13:30' : '07:30';
    const heureFin = creneau === 'APRES_MIDI' ? '17:30' : '11:30';
    return {
      id: dto.id, patientId: dto.patient.id, patientNom: `${dto.patient.prenom} ${dto.patient.nom}`,
      responsableId: infirmier?.id ?? null, infirmierNom,
      date: this.isoToDisplayDate(String(dto.date)),
      heureDebut,
      heureFin,
      statut: 'PLANIFIEE',
      jourPlanifie: dto.jourPlanifie ?? this.uiDayFromIsoDate(String(dto.date)),
      creneau
    };
  }

  private upsertStaffUser(user: AppUser): void {
    const index = this.staffUsers.findIndex(u => u.id === user.id);
    if (index >= 0) this.staffUsers[index] = user; else this.staffUsers.unshift(user);
    this.users = [...this.staffUsers, ...this.patientUsersData];
  }

  private toRoleId(role: string): RoleId {
    const value = String(role ?? '').toUpperCase().replace(/^ROLE_/, '');
    switch (value) {
      case 'ADMIN': return 'admin';
      case 'MEDECIN': return 'medecin';
      case 'INFIRMIER_MAJEUR': return 'infirmier-majeur';
      case 'INFIRMIER': return 'infirmier';
      default: return 'patient';
    }
  }

  private toBackendRole(role: RoleId): string {
    return role === 'admin' ? 'ADMIN' : role === 'medecin' ? 'MEDECIN' :
      role === 'infirmier-majeur' ? 'INFIRMIER_MAJEUR' : role === 'infirmier' ? 'INFIRMIER' :
      'PATIENT';
  }

  private buildCalendarDays(year: number, month: number): ({ date: string; day: number; today: boolean } | null)[] {
    const first = new Date(year, month, 1).getDay();
    const offset = (first + 6) % 7;
    const total = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const cells: ({ date: string; day: number; today: boolean } | null)[] = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= total; d++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      cells.push({ date, day: d, today: today.getFullYear() === year && today.getMonth() === month && today.getDate() === d });
    }
    return cells;
  }

  private toggleDateSelection(target: string[], date: string): void {
    const index = target.indexOf(date);
    if (index === -1) { target.push(date); target.sort(); } else target.splice(index, 1);
  }

  private computeDuration(start: string, end: string): number {
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    return Math.max(1, Math.round(((eh * 60 + em) - (sh * 60 + sm)) / 60));
  }

  private timeOnly(value: string): string { return value?.slice(0, 5) || '00:00'; }

  private uiDayFromDisplayDate(value: string): number {
    return this.uiDayFromIsoDate(this.displayToIsoDate(value));
  }

  private uiDayFromIsoDate(value: string): number {
    const date = new Date(`${value.slice(0, 10)}T00:00:00`);
    return Number.isNaN(date.getTime()) ? 0 : date.getDay();
  }

  private creneauFromTime(heureDebut: string, heureFin: string): 'MATIN' | 'APRES_MIDI' | null {
    if (heureDebut === '07:30' && heureFin === '11:30') return 'MATIN';
    if (heureDebut === '13:30' && heureFin === '17:30') return 'APRES_MIDI';
    return heureDebut < '12:00' ? 'MATIN' : 'APRES_MIDI';
  }

  private displayToIsoDate(value: string): string {
    if (!value || !value.includes('/')) return value;
    const [d, m, y] = value.split('/');
    return `${y}-${m}-${d}`;
  }

  private formatDateTime(value: string): string {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date);
  }

  private normalizeSeanceStatut(statut: string): string {
    const value = String(statut ?? '').toUpperCase().replace('-', '_');
    return value === 'EN_COURS' || value === 'TERMINEE' || value === 'ANNULEE' ? value : 'PLANIFIEE';
  }

  private syncSelectedInfirmier(): void {
    if (!this.newSeance.infirmierId) return;
    const selectedId = Number(this.newSeance.infirmierId);
    if (!this.availableInfirmiers.some(user => user.id === selectedId)) this.newSeance.infirmierId = '';
  }

  private syncSelectedInfirmiersByDate(): void {
    this.newSeance.datesSeances = this.newSeance.datesSeances.map(dateSeance => {
      const selectedId = dateSeance.infirmierId ? Number(dateSeance.infirmierId) : null;
      const candidates = this.getAvailableInfirmiersForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);

      if (selectedId && candidates.some(user => user.id === selectedId)) {
        return dateSeance;
      }

      return {
        ...dateSeance,
        infirmierId: this.resolveDefaultInfirmierIdForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin)
      };
    });
  }

  private syncSelectedInfirmierForEdit(): void {
    if (!this.editSeance?.responsableId) return;
    const selectedId = Number(this.editSeance.responsableId);
    if (!this.availableInfirmiersForEdit.some(user => user.id === selectedId))
      this.editSeance.responsableId = this.availableInfirmiersForEdit[0]?.id ?? null;
  }

  private resolveAvailableInfirmierId(): number | null {
    const selectedId = this.newSeance.infirmierId ? Number(this.newSeance.infirmierId) : null;
    if (selectedId && this.availableInfirmiers.some(user => user.id === selectedId)) return selectedId;
    return this.availableInfirmiers[0]?.id ?? null;
  }

  private resolveAvailableInfirmierIdForDate(dateSeance: JourSeance): number | null {
    const selectedId = dateSeance.infirmierId ? Number(dateSeance.infirmierId) : null;
    const candidates = this.getAvailableInfirmiersForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);
    if (selectedId && candidates.some(user => user.id === selectedId)) return selectedId;
    return candidates[0]?.id ?? null;
  }

  private resolveDefaultInfirmierIdForDate(date: string, start: string, end: string): number | null {
    const globalSelectedId = this.newSeance.infirmierId ? Number(this.newSeance.infirmierId) : null;
    const candidates = this.getAvailableInfirmiersForDate(date, start, end);
    if (globalSelectedId && candidates.some(user => user.id === globalSelectedId)) return globalSelectedId;
    return candidates[0]?.id ?? null;
  }

  private getActiveNewSeanceDateEntry(): JourSeance | null {
    if (!this.newSeance.datesSeances.length) return null;
    if (this.newSeanceActiveDate) {
      return this.newSeance.datesSeances.find(d => d.date === this.newSeanceActiveDate) ?? this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1];
    }
    return this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1];
  }

  private resolveAvailableInfirmierIdForEdit(): number | null {
    const selectedId = this.editSeance?.responsableId ? Number(this.editSeance.responsableId) : null;
    if (selectedId && this.availableInfirmiersForEdit.some(user => user.id === selectedId)) return selectedId;
    return this.availableInfirmiersForEdit[0]?.id ?? null;
  }

  private isInfirmierAvailableForSelection(userId: number): boolean {
    const selectedDate = this.getActiveNewSeanceDateEntry();
    if (!selectedDate) return false;
    return !this.hasSeanceConflict(userId, selectedDate.date, selectedDate.heureDebut, selectedDate.heureFin);
  }

  private isInfirmierAvailableForEdit(userId: number): boolean {
    if (!this.editSeance) return false;
    if (!this.editSeance.datesSeances.length) return false;
    return this.editSeance.datesSeances.every(ds => {
      const source = this.editSeance!.sourceSeances.find(s => this.displayToIsoDate(s.date) === ds.date);
      return !this.hasSeanceConflict(userId, ds.date, ds.heureDebut, ds.heureFin, source?.id);
    });
  }

  private hasSeanceConflict(userId: number, date: string, start: string, end: string, excludeSeanceId?: number): boolean {
    return this.seancesAdmin.some(seance =>
      seance.id !== excludeSeanceId && seance.responsableId === userId &&
      this.displayToIsoDate(seance.date) === date && this.rangesOverlap(start, end, seance.heureDebut, seance.heureFin)
    );
  }

  private rangesOverlap(startA: string, endA: string, startB: string, endB: string): boolean {
    return startA < endB && startB < endA;
  }

  pageEnd(page: number, total: number): number { return Math.min(page * this.pageSize, total); }

  goToPage(pageKey: 'staffPage' | 'patientPage' | 'seancePage', page: number, totalPages: number): void {
    const safeTotal = Math.max(1, totalPages);
    this[pageKey] = Math.min(Math.max(1, page), safeTotal);
  }

  getPageNumbers(currentPage: number, totalPages: number): (number | '...')[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (currentPage > 3) pages.push('...');
    const start = Math.max(2, currentPage - 1);
    const end   = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  }

  private paginateArray<T>(items: T[], pageKey: 'staffPage' | 'patientPage' | 'seancePage'): T[] {
    const totalPages = this.getTotalPages(items.length);
    if (this[pageKey] > totalPages) this[pageKey] = totalPages;
    const start = (this[pageKey] - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }

  private getTotalPages(totalItems: number): number { return Math.max(1, Math.ceil(totalItems / this.pageSize)); }

  private normalizeAllPages(): void {
    this.staffPage   = Math.min(this.staffPage,   this.totalStaffPages);
    this.patientPage = Math.min(this.patientPage, this.totalPatientPages);
    this.seancePage  = Math.min(this.seancePage,  this.totalSeancePages);
  }

  private scrollAdminToTop(): void { this.adminMainRef?.nativeElement.scrollTo({ top: 0, behavior: 'smooth' }); }
  private confirmDeletion(message: string): boolean { return window.confirm(message); }
  private refreshAfterMutation(): void { this.refreshAdminCollections(false, true); }

  private insertSeances(createdSeances: SeanceDto[]): void {
    this.seancesAdmin = this.sortSeances([
      ...createdSeances.map(seance => this.mapSeanceToRow(seance)),
      ...this.seancesAdmin
    ]);
    this.normalizeAllPages();
  }

  private replaceSeanceRows(updatedSeances: SeanceDto[], createdSeances: SeanceDto[], deletedIds: number[]): void {
    const replacedIds = updatedSeances.map(seance => seance.id);
    this.seancesAdmin = this.sortSeances([
      ...this.seancesAdmin.filter(seance => !replacedIds.includes(seance.id) && !deletedIds.includes(seance.id)),
      ...updatedSeances.map(seance => this.mapSeanceToRow(seance)),
      ...createdSeances.map(seance => this.mapSeanceToRow(seance))
    ]);
    this.normalizeAllPages();
  }

  private removeSeanceRows(ids: number[]): void {
    this.seancesAdmin = this.seancesAdmin.filter(seance => !ids.includes(seance.id));
    this.normalizeAllPages();
  }

  private sortSeances(seances: SeanceAdminRow[]): SeanceAdminRow[] {
    return [...seances].sort((left, right) => {
      const dateDiff = this.displayToIsoDate(right.date).localeCompare(this.displayToIsoDate(left.date));
      if (dateDiff !== 0) return dateDiff;
      const startDiff = right.heureDebut.localeCompare(left.heureDebut);
      if (startDiff !== 0) return startDiff;
      return left.patientNom.localeCompare(right.patientNom, 'fr');
    });
  }

  onNewSeanceInfirmierChange(): void {
    if (this.newSeance.infirmierId) {
      const id = Number(this.newSeance.infirmierId);
      this.newSeance.datesSeances = this.newSeance.datesSeances.map(d => ({ ...d, infirmierId: id }));
    }
    this.onNewSeanceScheduleChange();
  }

  onNewSeanceScheduleChange(): void {
    this.syncSelectedInfirmier();
    this.syncSelectedInfirmiersByDate();
  }

  onEditSeanceScheduleChange(): void {
    this.syncSelectedInfirmierForEdit();
  }

  private resetNewSeanceForm(): void {
    this.newSeance = { patientId: '', infirmierId: '', dates: [], datesSeances: [], heureDebut: '07:30', heureFin: '11:30', jours: [], abordFAV: false, abordCatheter: false, shiftMatin: false, shiftApresMidi: false };
    this.newSeanceActiveDate = null;
  }

  private todayLocalIso(): string {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  }
}
