import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { UtilisateurCreateDto, UtilisateurService, UtilisateurUpdateDto } from '../../../services/utilisateur.service';
import { PatientRequestDto, PatientService } from '../../../services/patient.service';
import { SeanceService } from '../../../services/seance.service';
import { HoraireTravailService } from '../../../services/horaire-travail.service';
import { AdminSettingsService } from '../../../services/admin-settings.service';
import { RolePermissionService } from '../../../services/role-permission.service';
import { UtilisateurResponseDto } from '../../../models/utilisateur.model';
import { PatientDto } from '../../../models/patient-dto';
import { SeanceDto } from '../../../models/seance-dto';
import { HoraireTravailDto } from '../../../models/horaire-travail-dto';
import { HoraireTravailRequestDto } from '../../../models/horaire-travail-request-dto';
import { AdminSettingsDto } from '../../../models/admin-settings-dto';
import { RolePermissionsDto } from '../../../models/role-permissions-dto';
import { SeanceRequestDto } from '../../../models/seance-request-dto';
import { SeanceUpdateRequestDto } from '../../../models/seance-update-request-dto';
import { MachineDto } from '../../../models/machine-dto';
import { Subject } from 'rxjs';
import { MachineService } from '../../../services/machine.service';
import { takeUntil } from 'rxjs/operators';
import { AdminTab, AppUser, HoraireRow, Permission, RoleConfig, RoleId, SeanceAdminRow, Toast, UserStatus } from '../../../models/admin-ui.models';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit,OnDestroy {
  @ViewChild('adminMain') private adminMainRef?: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private utilisateurService: UtilisateurService,
    private patientService: PatientService,
    private seanceService: SeanceService,
    private machineService: MachineService,
    private horaireTravailService: HoraireTravailService,
    private adminSettingsService: AdminSettingsService,
    private rolePermissionService: RolePermissionService
  ) {}
private destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
     this.stopPolling();
    this.destroy$.complete();
  }
  private startPolling(): void {
  this.stopPolling(); // éviter les doublons
  this.pollingInterval = setInterval(() => {
    this.refreshAdminCollections(false, true); // false = pas de spinner
  }, this.POLLING_INTERVAL_MS);
}

private stopPolling(): void {
  if (this.pollingInterval) {
    clearInterval(this.pollingInterval);
    this.pollingInterval = null;
  }
}
  activeTab: AdminTab = 'profils';
  activeProfilRole: RoleId = 'medecin';
  loading = false;
  isLight = false;
  private profilsLoaded = false;
  private horairesLoaded = false;
  private seancesLoaded = false;

  // -- Wizard nouveau profil --
  showWizardModal = false;
  wizardStep = 1;
  wizardRole: RoleId = 'medecin';

  readonly wizardRoleOptions: { id: RoleId; label: string; icon: string; color: string; desc: string }[] = [
    { id: 'medecin',          label: 'Médecin',          icon: 'medical_services',   color: 'var(--c-teal)',   desc: 'Néphrologue, prescriptions, dossiers' },
    { id: 'infirmier-majeur', label: 'Infirmier Majeur',  icon: 'supervisor_account', color: 'var(--c-purple)', desc: 'Coordinateur, planification, équipes' },
    { id: 'infirmier',        label: 'Infirmier(e)',      icon: 'local_hospital',     color: 'var(--c-blue)',   desc: 'Soins, monitoring, constantes vitales' },
    { id: 'aide-soignant',    label: 'Aide-Soignant',    icon: 'volunteer_activism', color: 'var(--c-amber)',  desc: 'Support aux soins, équipements' },
    { id: 'patient',          label: 'Patient',           icon: 'person',             color: 'var(--c-green)',  desc: 'Patient du centre de dialyse' },
  ];

  readonly serviceParRole: Record<string, string> = {
    'medecin':          'Service de Hémodialyse',
    'infirmier-majeur': 'Service d\'Hémodialyse',
    'infirmier':        'Service d\'Hémodialyse',
    'aide-soignant':    'Service d\'Hémodialyse',
    'patient':          '',
    'admin':            'Administration',
  };

  readonly specialiteParRole: Record<string, string> = {
    'medecin':          'Néphrologie',
    'infirmier-majeur': 'Hémodialyse',
    'infirmier':        'Hémodialyse',
    'aide-soignant':    'Soins généraux',
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
    { id: 'eq_view',   category: 'Equipement',     label: 'Voir les machines',               description: 'Consulter les disponibilites des machines' },
    { id: 'eq_stock',  category: 'Equipement',     label: 'Gerer les stocks',                description: 'Voir et commander les consommables' },
    { id: 'eq_maint',  category: 'Equipement',     label: 'Signaler une maintenance',        description: 'Declarer une panne ou une intervention technique' },
    { id: 'r_gen',     category: 'Rapports',       label: 'Generer des rapports',            description: 'Creer des rapports statistiques et medicaux' },
    { id: 'r_export',  category: 'Rapports',       label: 'Exporter les donnees',            description: 'Telecharger les donnees en PDF ou CSV' },
    { id: 'a_users',   category: 'Administration', label: 'Gerer les utilisateurs',          description: 'Ajouter, modifier et desactiver des comptes' },
    { id: 'a_roles',   category: 'Administration', label: 'Configurer les roles',            description: 'Modifier les permissions des roles' },
  ];

  roles: RoleConfig[] = [
    { id: 'admin',          label: 'Administrateur',  icon: 'admin_panel_settings', color: '#ff5757', colorVar: 'var(--c-red)',    description: 'Administration du systeme',    permissions: {} },
    { id: 'medecin',        label: 'Medecin',          icon: 'medical_services',    color: '#00D9C4', colorVar: 'var(--c-teal)',   description: 'Medecin nephrologue',          permissions: {} },
    { id: 'infirmier-majeur', label: 'Infirmier Majeur', icon: 'supervisor_account', color: '#A78BFA', colorVar: 'var(--c-purple)', description: 'Coordinateur du service',      permissions: {} },
    { id: 'infirmier',      label: 'Infirmier(e)',     icon: 'local_hospital',      color: '#4EA8F8', colorVar: 'var(--c-blue)',   description: 'Suivi des seances et soins',   permissions: {} },
    { id: 'aide-soignant',  label: 'Aide-Soignant',   icon: 'volunteer_activism',  color: '#F5A623', colorVar: 'var(--c-amber)',  description: 'Support aux soins',            permissions: {} },
    { id: 'patient',        label: 'Patient',          icon: 'person',              color: '#22c55e', colorVar: 'var(--c-green)',  description: 'Patient du centre',            permissions: {} },
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
  showEditHoraireModal = false;
  showEditSeanceModal = false;

  searchQuery = ''; filterRole: RoleId | '' = ''; filterStatus: UserStatus | '' = '';
  searchPatient = '';
  searchHoraire = ''; searchSeance = '';
  readonly pageSize = 4;
  staffPage = 1;
  patientPage = 1;
  horairePage = 1;
  seancePage = 1;

  readonly groupesSanguins = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  machines: string[] = [];
  private allMachineCodes: string[] = [];
  readonly joursTitles = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  readonly moisLabels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  roleIds: RoleId[] = ['admin', 'medecin', 'infirmier-majeur', 'infirmier', 'aide-soignant', 'patient'];

  newPatient = { nom: '', prenom: '', dateNaissance: '', groupeSanguin: '', cin: '', telephone: '', adresse: '', genre: '', statut: 'STABLE' };

  editPatient: {
    id: number; nom: string; prenom: string; dateNaissance: string;
    groupeSanguin: string; patientStatut: string; cin: string;
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

  horaires: HoraireRow[] = [];
  newHoraire = { staffType: '', staffNom: '', heureDebut: '07:00', heureFin: '15:00', jours: [] as string[] };
  editHoraire: { id: number; utilisateurId: number; staffNom: string; staffRole: string; jours: string[]; heureDebut: string; heureFin: string; } | null = null;

  seancesAdmin: SeanceAdminRow[] = [];
  newSeance = { patientId: '', aideSoignantId: '', dates: [] as string[], heureDebut: '07:30', heureFin: '11:30', machine: '' };
  editSeance: { id: number; patientId: number; patientNom: string; responsableId: number | null; aideSoignantNom: string; date: string; heureDebut: string; heureFin: string; machine: string; statut: string; } | null = null;
  editSeanceDates: string[] = [];

  calYear = new Date().getFullYear(); calMonth = new Date().getMonth();
  editCalYear = new Date().getFullYear(); editCalMonth = new Date().getMonth();
  seanceCalYear = new Date().getFullYear(); seanceCalMonth = new Date().getMonth();
  editSeanceCalYear = new Date().getFullYear(); editSeanceCalMonth = new Date().getMonth();

  private tid = 0;
  toasts: Toast[] = [];
// Ajouter ces propriétés après destroy$

private pollingInterval: any = null;
private readonly POLLING_INTERVAL_MS = 30000; // 30 secondes
  // --------------------------------------------------
  //  LIFECYCLE
  // --------------------------------------------------

  ngOnInit(): void {
    this.loadSharedAdminData();
    this.loadMachines();
    this.refreshAdminCollections();
     this.startPolling();
     
  }

  setActiveTab(tab: AdminTab): void {
    this.activeTab = tab;
    this.scrollAdminToTop();
    this.refreshAdminCollections(false, false);
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
    horaires: this.horaireTravailService.getAll().pipe(catchError(() => of([] as any[]))),
    seances:  this.seanceService.getAll().pipe(catchError(() => of([] as any[])))
  }).pipe(takeUntil(this.destroy$)).subscribe({
    next: ({ users, patients, horaires, seances }) => {
      this.staffUsers = users.map((u: any) => this.mapUtilisateurToAppUser(u));
      this.patientUsersData = patients.map((p: any) => this.mapPatientToAppUser(p));
      this.users = [...this.staffUsers, ...this.patientUsersData];
      this.horaires = horaires.map((h: any) => this.mapHoraireToRow(h));
      this.seancesAdmin = seances.map((s: any) => this.mapSeanceToRow(s));
      this.profilsLoaded = true;
      this.horairesLoaded = true;
      this.seancesLoaded = true;
      this.normalizeAllPages();
      this.syncSelectedAideSoignant();

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
    }).pipe(takeUntil(this.destroy$)).subscribe({  // ?
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

  loadHorairesData(): void {
    this.loading = true;
    this.horaireTravailService.getAll().subscribe({
      next: (horaires) => {
        this.horaires = horaires.map(h => this.mapHoraireToRow(h));
        this.horairesLoaded = true;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? 'Erreur lors du chargement des horaires', 'error');
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

  // --------------------------------------------------
  //  WIZARD — création profil multi-étapes
  // --------------------------------------------------

  wizardData = {
    nom: '', prenom: '', mat: '', email: '', telephone: '', service: '',
    login: '', username: '', mdp: '', actif: true,
    dateNaissance: '', groupeSanguin: '', genre: '', adresse: '', cin: '',
    specialite: '', superviseurId: '',
  };

  get wizardIsPatient(): boolean { return this.wizardRole === 'patient'; }
  get wizardStepCount(): number  { return this.wizardIsPatient ? 2 : 3; }

  get wizardSelectedConfig(): { id: RoleId; label: string; icon: string; color: string; desc: string } | undefined {
    return this.wizardRoleOptions.find(r => r.id === this.wizardRole);
  }

  openNewProfil(): void {
    this.wizardStep = 1;
    this.wizardRole = this.activeProfilRole === 'admin' ? 'medecin' : (this.activeProfilRole as RoleId);
    this.wizardData = {
      nom: '', prenom: '', mat: '', email: '', telephone: '',
      service: this.serviceParRole[this.wizardRole] ?? '',
      login: '', username: '', mdp: '', actif: true,
      dateNaissance: '', groupeSanguin: '', genre: '', adresse: '', cin: '',
      specialite: this.specialiteParRole[this.wizardRole] ?? '', superviseurId: '',
    };
    this.showWizardModal = true;
  }

  wizardNext(): void {
    if (this.wizardStep === 1) {
      this.wizardData.service = this.serviceParRole[this.wizardRole] ?? '';
      this.wizardData.specialite = this.specialiteParRole[this.wizardRole] ?? '';
      this.wizardStep = 2;
    } else if (this.wizardStep === 2) {
      if (!this.wizardData.nom.trim() || !this.wizardData.prenom.trim()) {
        this.showToast('Nom et prenom sont obligatoires', 'warning');
        return;
      }

      if (!this.isValidOptionalPhone(this.wizardData.telephone)) {
        this.showToast('Le telephone doit contenir 10 chiffres et commencer par 0', 'warning');
        return;
      }

      if (this.wizardIsPatient) {
        const missingFields: string[] = [];
        if (!this.wizardData.dateNaissance) missingFields.push('date de naissance');
        if (!this.wizardData.groupeSanguin) missingFields.push('groupe sanguin');
        if (!this.wizardData.genre) missingFields.push('genre');

        if (missingFields.length) {
          this.showToast(`Les champs suivants sont obligatoires: ${missingFields.join(', ')}`, 'warning');
          return;
        }

        this.wizardSave();
      } else {
        if (!this.wizardData.mat.trim() || !this.wizardData.email.trim()) {
          this.showToast('Matricule et email sont obligatoires', 'warning');
          return;
        }
        this.wizardStep = 3;
      }
    } else if (this.wizardStep === 3) {
      if (!this.wizardData.login.trim()) {
        this.showToast('Le login est obligatoire', 'warning');
        return;
      }
      if (this.wizardData.mdp.trim() && !this.isStrongPassword(this.wizardData.mdp.trim())) {
        this.showToast('Le mot de passe doit contenir au moins 8 caracteres, avec majuscule, minuscule, chiffre et symbole', 'warning');
        return;
      }
      this.wizardSave();
    }
  }

  wizardPrev(): void { if (this.wizardStep > 1) this.wizardStep--; }

  wizardCancel(): void { this.showWizardModal = false; }

  wizardSave(): void {
    if (this.wizardIsPatient) {
      this.newPatient = {
        nom: this.wizardData.nom, prenom: this.wizardData.prenom,
        dateNaissance: this.wizardData.dateNaissance, groupeSanguin: this.wizardData.groupeSanguin,
        cin: this.wizardData.cin, telephone: this.wizardData.telephone,
        adresse: this.wizardData.adresse, genre: this.wizardData.genre, statut: 'STABLE',
      };
      this.showWizardModal = false;
      this.saveNewPatient();
    } else {
      this.newUser = {
        login: this.wizardData.login, username: this.wizardData.username,
        mat: this.wizardData.mat, nom: this.wizardData.nom, prenom: this.wizardData.prenom,
        email: this.wizardData.email, mdp: this.wizardData.mdp,
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

  // --------------------------------------------------
  //  PERMISSIONS
  // --------------------------------------------------

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

  // --------------------------------------------------
  //  FILTRES
  // --------------------------------------------------

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

  get paginatedUsers(): AppUser[] {
    return this.paginateArray(this.filteredUsers, 'staffPage');
  }

  get totalStaffPages(): number {
    return this.getTotalPages(this.filteredUsers.length);
  }

  usersForRole(roleId: RoleId): AppUser[] { return this.users.filter(u => u.role === roleId); }

  get filteredPatients(): AppUser[] {
    const q = this.searchPatient.toLowerCase().trim();
    const patients = this.usersForRole('patient');
    return !q ? patients : patients.filter(u =>
      u.nom.toLowerCase().includes(q) ||
      u.prenom.toLowerCase().includes(q) ||
      String(u.id).includes(q) ||
      (u.dateNaissance || '').toLowerCase().includes(q) ||
      (u.groupeSanguin || '').toLowerCase().includes(q)
    );
  }

  get paginatedPatients(): AppUser[] {
    return this.paginateArray(this.filteredPatients, 'patientPage');
  }

  get totalPatientPages(): number {
    return this.getTotalPages(this.filteredPatients.length);
  }

  // --------------------------------------------------
  //  MODAL UTILISATEUR (édition)
  // --------------------------------------------------

  openUser(user: AppUser): void { this.selectedUser = { ...user }; this.showUserModal = true; }
  closeUserModal(): void { this.showUserModal = false; this.selectedUser = null; }

  saveUser(): void {
    if (!this.selectedUser) return;
    const payload: UtilisateurUpdateDto = {
      login: this.selectedUser.login,
      username: this.selectedUser.username,
      nom: this.selectedUser.nom,
      prenom: this.selectedUser.prenom,
      email: this.selectedUser.email,
      mat: this.selectedUser.mat,
      role: this.toBackendRole(this.selectedUser.role),
      specialite: this.selectedUser.specialite ?? null,
      superviseurId: this.selectedUser.superviseurId ?? null,
      actif: this.selectedUser.statut === 'actif'
    };
    this.utilisateurService.update(this.selectedUser.id, payload).subscribe({
      next: () => {
        this.showToast(`Profil de ${this.selectedUser?.prenom} ${this.selectedUser?.nom} mis a jour`, 'success');
        this.closeUserModal();
        this.refreshAdminCollections(false, true);
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de mettre a jour le profil', 'error')
    });
  }

  toggleUserStatus(user: AppUser): void {
    this.utilisateurService.toggleActif(user.id).subscribe({
      next: (updated) => {
        this.showToast(`Compte de ${updated.prenom} ${updated.nom} ${updated.actif ? 'active' : 'desactive'}`, updated.actif ? 'success' : 'warning');
        this.refreshAdminCollections(false);
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de modifier le statut du compte', 'error')
    });
  }

  suspendUser(user: AppUser): void {
    this.utilisateurService.update(user.id, { actif: false }).subscribe({
      next: () => { this.showToast(`Compte de ${user.prenom} ${user.nom} suspendu`, 'warning'); this.closeUserModal(); this.refreshAdminCollections(false,true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de suspendre le compte', 'error')
    });
  }

  deleteUser(user: AppUser): void {
    const request = user.role === 'patient' ? this.patientService.delete(user.id) : this.utilisateurService.delete(user.id);
    request.subscribe({
      next: () => { this.showToast(`${user.role === 'patient' ? 'Patient' : 'Utilisateur'} ${user.prenom} ${user.nom} supprime`, 'warning'); this.closeUserModal(); this.refreshAdminCollections(false, true); },
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

  // --------------------------------------------------
  //  PATIENT — création & édition
  // --------------------------------------------------

  saveNewPatient(): void {
    const missingFields: string[] = [];
    if (!this.newPatient.nom.trim()) missingFields.push('nom');
    if (!this.newPatient.prenom.trim()) missingFields.push('prenom');
    if (!this.newPatient.dateNaissance) missingFields.push('date de naissance');
    if (!this.newPatient.groupeSanguin) missingFields.push('groupe sanguin');
    if (!this.newPatient.genre) missingFields.push('genre');

    if (missingFields.length) {
      this.showToast(`Veuillez renseigner: ${missingFields.join(', ')}`, 'warning');
      return;
    }

    const normalizedPhone = this.normalizePhone(this.newPatient.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) {
      this.showToast('Le telephone doit contenir 10 chiffres et commencer par 0', 'warning');
      return;
    }

    const payload: PatientRequestDto = {
      nom: this.newPatient.nom.trim(),
      prenom: this.newPatient.prenom.trim(),
      dateNaissance: this.newPatient.dateNaissance,
      groupeSanguin: this.newPatient.groupeSanguin,
      statut: this.newPatient.statut || 'STABLE',
      cin: this.newPatient.cin || null,
      telephone: normalizedPhone || null,
      adresse: this.newPatient.adresse || null,
      genre: this.newPatient.genre || null
    };
    this.patientService.create(payload).subscribe({
      next: () => { this.patientService.invalidateCache(); this.showNewPatientModal = false; this.showToast(`Patient ${payload.prenom} ${payload.nom} cree`, 'success'); this.refreshAdminCollections(false, true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de creer le patient', 'error')
    });
  }

  openEditPatient(user: AppUser): void {
    this.editPatient = {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      dateNaissance: user.dateNaissance || '',
      groupeSanguin: user.groupeSanguin || '',
      patientStatut: user.patientStatut || 'STABLE',
      cin: '',
      telephone: user.telephone || '',
      adresse: '',
      genre: ''
    };
    this.showEditPatientModal = true;
  }

  saveEditPatient(): void {
    if (!this.editPatient) return;

    const normalizedPhone = this.normalizePhone(this.editPatient.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) {
      this.showToast('Le telephone doit contenir 10 chiffres et commencer par 0', 'warning');
      return;
    }

    const payload: PatientRequestDto = {
      nom: this.editPatient.nom.trim(),
      prenom: this.editPatient.prenom.trim(),
      dateNaissance: this.editPatient.dateNaissance,
      groupeSanguin: this.editPatient.groupeSanguin,
      statut: this.editPatient.patientStatut,
      cin: this.editPatient.cin || null,
      telephone: normalizedPhone || null,
      adresse: this.editPatient.adresse || null,
      genre: this.editPatient.genre || null
    };
    this.patientService.update(this.editPatient.id, payload).subscribe({
      next: () => { this.patientService.invalidateCache(); this.showEditPatientModal = false; this.editPatient = null; this.showToast('Patient modifie avec succes', 'success'); this.refreshAdminCollections(false, true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de modifier le patient', 'error')
    });
  }

  // --------------------------------------------------
  //  UTILISATEUR — création
  // --------------------------------------------------

  saveNewUser(): void {
    if (!this.newUser.nom.trim() || !this.newUser.prenom.trim() || !this.newUser.login.trim() || !this.newUser.email.trim() || !this.newUser.mat.trim()) {
      this.showToast('Veuillez remplir tous les champs obligatoires du compte', 'warning');
      return;
    }

    const normalizedPhone = this.normalizePhone(this.newUser.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) {
      this.showToast('Le telephone doit contenir 10 chiffres et commencer par 0', 'warning');
      return;
    }

    const rawPassword = this.newUser.mdp.trim();
    if (rawPassword && !this.isStrongPassword(rawPassword)) {
      this.showToast('Le mot de passe doit contenir au moins 8 caracteres, avec majuscule, minuscule, chiffre et symbole', 'warning');
      return;
    }

    const payload: UtilisateurCreateDto = {
      login: this.newUser.login.trim(),
      username: this.newUser.username.trim() || this.newUser.login.trim(),
      motDePasse: rawPassword || `Temp@${Math.random().toString(36).slice(2, 8)}`,
      nom: this.newUser.nom.trim(),
      prenom: this.newUser.prenom.trim(),
      email: this.newUser.email.trim(),
      mat: this.newUser.mat.trim(),
      role: this.toBackendRole(this.newUser.role),
      telephone: normalizedPhone || null,
      service: this.newUser.service.trim() || null,
      specialite: this.newUser.specialite.trim() || null,
      superviseurId: this.newUser.superviseurId ? Number(this.newUser.superviseurId) : null
    };
    this.utilisateurService.create(payload).subscribe({
      next: () => {
        this.showNewUserModal = false;
        if (!this.newUser.actif) {
          this.utilisateurService.getAll().subscribe({
            next: (users) => {
              const created = users.find(u => u.login === payload.login);
              if (created) {
                this.utilisateurService.toggleActif(created.id).subscribe({
                  next: () => { this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree`, 'success'); this.refreshAdminCollections(false, true); },
                  error: () => { this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree`, 'success'); this.refreshAdminCollections(false, true); }
                });
                return;
              }
              this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree`, 'success');
              this.refreshAdminCollections(false, true);
            },
            error: () => { this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree`, 'success'); this.refreshAdminCollections(false, true); }
          });
          return;
        }
        this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree`, 'success');
        this.refreshAdminCollections(false, true);
      },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de creer le compte', 'error')
    });
  }

  // --------------------------------------------------
  //  CALENDRIER — horaires
  // --------------------------------------------------

  get calTitle(): string { return `${this.moisLabels[this.calMonth]} ${this.calYear}`; }
  calPrevMonth(): void { this.calMonth === 0 ? (this.calMonth = 11, this.calYear--) : this.calMonth--; }
  calNextMonth(): void { this.calMonth === 11 ? (this.calMonth = 0, this.calYear++) : this.calMonth++; }
  get calDays(): ({ date: string; day: number; today: boolean } | null)[] { return this.buildCalendarDays(this.calYear, this.calMonth); }
  toggleCalDay(date: string): void { this.toggleDateSelection(this.newHoraire.jours, date); }
  isDaySelected(date: string): boolean { return this.newHoraire.jours.includes(date); }
  formatJours(jours: string[]): string {
  if (!jours.length) return '—';
  return jours.map(j => this.isoToDisplayDate(j)).join(', ');
}
  get filteredHoraires(): HoraireRow[] {
    const q = this.searchHoraire.toLowerCase().trim();
    return !q ? this.horaires : this.horaires.filter(h =>
      h.staffNom.toLowerCase().includes(q) || h.staffRole.toLowerCase().includes(q) ||
      this.formatJours(h.jours).toLowerCase().includes(q) || h.heureDebut.includes(q) || h.heureFin.includes(q)
    );
  }

  get paginatedHoraires(): HoraireRow[] {
    return this.paginateArray(this.filteredHoraires, 'horairePage');
  }

  get totalHorairePages(): number {
    return this.getTotalPages(this.filteredHoraires.length);
  }

  get staffSoignants(): AppUser[] { return this.users.filter(u => ['infirmier', 'aide-soignant', 'infirmier-majeur'].includes(u.role)); }
  get superviseurs(): AppUser[] { return this.users.filter(u => u.role === 'infirmier-majeur'); }

  staffParType(type: string): AppUser[] {
    if (!type) return [];
    const normalized = type.toLowerCase();
    if (normalized.includes('aide')) return this.users.filter(u => u.role === 'aide-soignant');
    if (normalized.includes('majeur')) return this.users.filter(u => u.role === 'infirmier-majeur');
    if (normalized.includes('infirmier')) return this.users.filter(u => u.role === 'infirmier');
    return this.users.filter(u => u.role === this.toRoleId(type));
  }

  ajouterHoraire(): void {
    if (!this.newHoraire.staffNom || !this.newHoraire.jours.length) {
      this.showToast('Veuillez selectionner un personnel et au moins un jour', 'warning'); return;
    }
    const payload: HoraireTravailRequestDto = {
      utilisateurId: Number(this.newHoraire.staffNom),
      jours: [...this.newHoraire.jours],
      heureDebut: this.newHoraire.heureDebut,
      heureFin: this.newHoraire.heureFin
    };
    this.horaireTravailService.create(payload).subscribe({
      next: () => { this.newHoraire = { staffType: '', staffNom: '', heureDebut: '07:00', heureFin: '15:00', jours: [] }; this.showToast('Horaire ajoute avec succes', 'success'); this.refreshAdminCollections(false, true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible d enregistrer l horaire', 'error')
    });
  }

  supprimerHoraire(id: number): void {
    this.horaireTravailService.delete(id).subscribe({
      next: () => { this.showToast('Horaire supprime', 'warning'); this.refreshAdminCollections(false, true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de supprimer l horaire', 'error')
    });
  }

  get editCalTitle(): string { return `${this.moisLabels[this.editCalMonth]} ${this.editCalYear}`; }
  editCalPrevMonth(): void { this.editCalMonth === 0 ? (this.editCalMonth = 11, this.editCalYear--) : this.editCalMonth--; }
  editCalNextMonth(): void { this.editCalMonth === 11 ? (this.editCalMonth = 0, this.editCalYear++) : this.editCalMonth++; }
  get editCalDays(): ({ date: string; day: number; today: boolean } | null)[] { return this.buildCalendarDays(this.editCalYear, this.editCalMonth); }
  toggleEditCalDay(date: string): void { if (this.editHoraire) this.toggleDateSelection(this.editHoraire.jours, date); }
  isEditDaySelected(date: string): boolean { return !!this.editHoraire && this.editHoraire.jours.includes(date); }

  openEditHoraire(h: HoraireRow): void {
    this.editHoraire = { ...h, staffNom: h.staffNom, staffRole: h.staffRole, jours: [...h.jours] };
    this.editCalYear = new Date().getFullYear();
    this.editCalMonth = new Date().getMonth();
    this.showEditHoraireModal = true;
  }

  saveEditHoraire(): void {
    if (!this.editHoraire) return;
    const staff = this.staffParType(this.editHoraire.staffRole).find(u =>
      `${u.prenom} ${u.nom}` === this.editHoraire?.staffNom || `${u.nom} ${u.prenom}` === this.editHoraire?.staffNom
    );
    if (!staff) { this.showToast('Impossible d identifier le personnel pour cet horaire', 'warning'); return; }
    const payload: HoraireTravailRequestDto = { utilisateurId: staff.id, jours: [...this.editHoraire.jours], heureDebut: this.editHoraire.heureDebut, heureFin: this.editHoraire.heureFin };
    this.horaireTravailService.update(this.editHoraire.id, payload).subscribe({
      next: () => { this.showEditHoraireModal = false; this.editHoraire = null; this.showToast('Horaire modifie avec succes', 'success'); this.refreshAdminCollections(false, true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de modifier l horaire', 'error')
    });
  }

  // --------------------------------------------------
  //  CALENDRIER — séances
  // --------------------------------------------------

  get seanceCalTitle(): string { return `${this.moisLabels[this.seanceCalMonth]} ${this.seanceCalYear}`; }
  seanceCalPrevMonth(): void { this.seanceCalMonth === 0 ? (this.seanceCalMonth = 11, this.seanceCalYear--) : this.seanceCalMonth--; }
  seanceCalNextMonth(): void { this.seanceCalMonth === 11 ? (this.seanceCalMonth = 0, this.seanceCalYear++) : this.seanceCalMonth++; }
  get seanceCalDays(): ({ date: string; day: number; today: boolean } | null)[] { return this.buildCalendarDays(this.seanceCalYear, this.seanceCalMonth); }
  toggleSeanceCalDay(date: string): void { this.toggleDateSelection(this.newSeance.dates, date); this.refreshAvailableMachinesForNewSeance(); }
  isSeanceDaySelected(date: string): boolean { return this.newSeance.dates.includes(date); }

  get filteredSeances(): SeanceAdminRow[] {
    const q = this.searchSeance.toLowerCase().trim();
    return !q ? this.seancesAdmin : this.seancesAdmin.filter(s =>
      s.patientNom.toLowerCase().includes(q) || s.aideSoignantNom.toLowerCase().includes(q) ||
      s.date.toLowerCase().includes(q) || s.heureDebut.includes(q) || s.heureFin.includes(q) ||
      s.machine.toLowerCase().includes(q) || s.statut.toLowerCase().includes(q)
    );
  }

  get paginatedSeances(): SeanceAdminRow[] {
    return this.paginateArray(this.filteredSeances, 'seancePage');
  }

  get totalSeancePages(): number {
    return this.getTotalPages(this.filteredSeances.length);
  }

  get infirmiers(): AppUser[] { return this.users.filter(u => u.role === 'infirmier'); }
  get aidesSoignants(): AppUser[] { return this.users.filter(u => u.role === 'aide-soignant'); }
  get availableAidesSoignants(): AppUser[] {
    const candidates = this.aidesSoignants.filter(user => this.isAideSoignantAvailableForSelection(user.id));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getAideSoignantLoadForSelection(left.id) - this.getAideSoignantLoadForSelection(right.id);
      if (loadDiff !== 0) {
        return loadDiff;
      }
      return `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, 'fr');
    });
  }
  get patientsUsers(): AppUser[] { return this.users.filter(u => u.role === 'patient'); }

  getAideSoignantLoadForSelection(userId: number): number {
    const dates = this.newSeance.dates.length ? this.newSeance.dates : [this.todayLocalIso()];
    return this.seancesAdmin.filter(seance =>
      seance.responsableId === userId &&
      dates.includes(this.displayToIsoDate(seance.date))
    ).length;
  }

  ajouterSeance(): void {
    if (!this.newSeance.patientId || !this.newSeance.dates.length) {
      this.showToast('Veuillez choisir un patient et au moins une date', 'warning'); return;
    }
    const utilisateurId = this.resolveAvailableAideSoignantId();
    if (!utilisateurId) {
      this.showToast('Aucun aide-soignant disponible pour cette plage horaire', 'warning');
      return;
    }
    const requests = this.newSeance.dates.map((date): SeanceRequestDto => ({
      date, heureDebut: this.newSeance.heureDebut, heureFin: this.newSeance.heureFin,
      machine: this.newSeance.machine, notes: 'Planifiee depuis l administration',
      dureeHeures: this.computeDuration(this.newSeance.heureDebut, this.newSeance.heureFin),
      patientId: Number(this.newSeance.patientId), utilisateurId
    }));
    forkJoin(requests.map(r => this.seanceService.create(r))).subscribe({
      next: () => { this.resetNewSeanceForm(); this.showToast('Seance(s) planifiee(s) avec succes', 'success'); this.refreshAdminCollections(false, true); },
    error: (err) => {
  const msg = err?.error?.message 
    || err?.error?.detail 
    || err?.error?.error
    || 'Impossible de planifier la séance';
  this.showToast(msg, 'error');
}});
  }

  supprimerSeance(id: number): void {
    this.seanceService.delete(id).subscribe({
      next: () => { this.showToast('Seance supprimee', 'warning'); this.refreshAdminCollections(false, true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de supprimer la seance', 'error')
    });
  }

  get editSeanceCalTitle(): string { return `${this.moisLabels[this.editSeanceCalMonth]} ${this.editSeanceCalYear}`; }
  editSeanceCalPrevMonth(): void { this.editSeanceCalMonth === 0 ? (this.editSeanceCalMonth = 11, this.editSeanceCalYear--) : this.editSeanceCalMonth--; }
  editSeanceCalNextMonth(): void { this.editSeanceCalMonth === 11 ? (this.editSeanceCalMonth = 0, this.editSeanceCalYear++) : this.editSeanceCalMonth++; }
  get editSeanceCalDays(): ({ date: string; day: number; today: boolean } | null)[] { return this.buildCalendarDays(this.editSeanceCalYear, this.editSeanceCalMonth); }
  toggleEditSeanceCalDay(date: string): void { this.toggleDateSelection(this.editSeanceDates, date); this.refreshAvailableMachinesForEditSeance(); }
  isEditSeanceDaySelected(date: string): boolean { return this.editSeanceDates.includes(date); }

  openEditSeance(s: SeanceAdminRow): void {
    this.editSeance = { ...s };
    this.editSeanceDates = [this.displayToIsoDate(s.date)];
    this.editSeanceCalYear = new Date().getFullYear();
    this.editSeanceCalMonth = new Date().getMonth();
    this.showEditSeanceModal = true;
    this.refreshAvailableMachinesForEditSeance();
  }

  saveEditSeance(): void {
    if (!this.editSeance) return;
    const payload: SeanceUpdateRequestDto = {
      date: this.editSeanceDates[0] || this.displayToIsoDate(this.editSeance.date),
      heureDebut: this.editSeance.heureDebut, heureFin: this.editSeance.heureFin,
      machine: this.editSeance.machine, statut: this.normalizeSeanceStatut(this.editSeance.statut),
      notes: 'Mise a jour depuis l administration'
    };
    this.seanceService.update(this.editSeance.id, payload).subscribe({
      next: () => { this.showEditSeanceModal = false; this.editSeance = null; this.editSeanceDates = []; this.showToast('Seance modifiee avec succes', 'success'); this.refreshAdminCollections(false, true); },
      error: (err) => this.showToast(err?.error?.message ?? 'Impossible de modifier la seance', 'error')
    });
  }

  seanceStatutClass(statut: string): string { const v = this.normalizeSeanceStatut(statut); return v === 'TERMINEE' ? 'ok' : v === 'EN_COURS' ? 'info' : 'neutral'; }
  seanceStatutLabel(statut: string): string { const v = this.normalizeSeanceStatut(statut); return v === 'TERMINEE' ? 'Terminee' : v === 'EN_COURS' ? 'En cours' : v === 'ANNULEE' ? 'Annulee' : 'Planifiee'; }

  // --------------------------------------------------
  //  KPI
  // --------------------------------------------------

  get totalUsers(): number { return this.users.length; }
  get activeUsers(): number { return this.users.filter(u => u.statut === 'actif').length; }
  get medecinCount(): number { return this.users.filter(u => u.role === 'medecin').length; }
  get infMajeurCount(): number { return this.users.filter(u => u.role === 'infirmier-majeur').length; }
  get infirmierCount(): number { return this.users.filter(u => u.role === 'infirmier').length; }
  get aideSoignantCount(): number { return this.users.filter(u => u.role === 'aide-soignant').length; }
  get patientCount(): number { return this.users.filter(u => u.role === 'patient').length; }
  get suspendedCount(): number { return this.users.filter(u => u.statut === 'suspendu').length; }

  // --------------------------------------------------
  //  HELPERS UI
  // --------------------------------------------------

  roleLabel(id: RoleId | string): string { return this.getRoleConfig(typeof id === 'string' ? this.toRoleId(id) : id)?.label ?? String(id); }
  roleColorVar(id: RoleId | string): string { return this.getRoleConfig(typeof id === 'string' ? this.toRoleId(id) : id)?.colorVar ?? 'var(--c-text-2)'; }
  statusClass(status: UserStatus): string { return status === 'actif' ? 'ok' : status === 'suspendu' ? 'crit' : 'neutral'; }
  statusLabel(status: UserStatus): string { return status === 'actif' ? 'Actif' : status === 'suspendu' ? 'Suspendu' : 'Inactif'; }
  initials(user: AppUser): string { return `${user.prenom?.[0] ?? ''}${user.nom?.[0] ?? ''}`.toUpperCase(); }
  profilTabLabel(role: RoleId): string { return ({ admin: 'Admins', medecin: 'Medecins', 'infirmier-majeur': 'Inf. Majeurs', infirmier: 'Infirmiers', 'aide-soignant': 'Aides-Soignants', patient: 'Patients' } as Record<RoleId, string>)[role]; }
  get activeTabTitle(): string { return ({ profils: 'Gestion des Profils', horaires: 'Planification des Horaires', seances: 'Planification des Seances' } as Record<AdminTab, string>)[this.activeTab]; }

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

  toggleTheme(): void { this.isLight = !this.isLight; }
logout(): void {
   this.stopPolling();
  this.destroy$.next();
  this.destroy$.complete();
  this.authService.logout();
  }

  // --------------------------------------------------
  //  PRIVATE HELPERS
  // --------------------------------------------------

  private normalizePhone(value: string | null | undefined): string {
    return String(value ?? '').replace(/\D/g, '');
  }

  private isValidPhone(value: string): boolean {
    return /^0\d{9}$/.test(value);
  }

  private isValidOptionalPhone(value: string | null | undefined): boolean {
    const normalized = this.normalizePhone(value);
    return !normalized || this.isValidPhone(normalized);
  }

  private isStrongPassword(value: string): boolean {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/.test(value);
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
    id: dto.id, 
    login: dto.login, 
    username: dto.username, 
    role,
    backendRole: dto.role, 
    mat: dto.mat, 
    nom: dto.nom, 
    prenom: dto.prenom,
    email: dto.email, 
    mdp: '********',
    dateCreation: this.formatDateTime(dto.dateCreation),
    actif: dto.actif, 
    statut: dto.actif ? 'actif' : 'inactif',
    derniereConnexion: '—', 
    specialite: dto.specialite,
    superviseurId: dto.superviseurId,
    telephone: dto.telephone || '',  // OK - pas de mélange
    service: (dto.service || this.serviceParRole[role]) ?? ''  // ? Corrigé avec parenthèses
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
      dateNaissance: dto.dateNaissance, groupeSanguin: dto.groupeSanguin, patientStatut: dto.statut
    };
  }

  private mapHoraireToRow(dto: HoraireTravailDto): HoraireRow {
    return { id: dto.id, utilisateurId: dto.utilisateurId, staffNom: dto.utilisateurNom, staffRole: this.roleLabel(dto.role), jours: dto.jours, heureDebut: this.timeOnly(dto.heureDebut), heureFin: this.timeOnly(dto.heureFin) };
  }

  private mapSeanceToRow(dto: SeanceDto): SeanceAdminRow {
    const responsable = dto.utilisateur ? `${dto.utilisateur.prenom} ${dto.utilisateur.nom}` : '—';
    return {
      id: dto.id, patientId: dto.patient.id, patientNom: `${dto.patient.prenom} ${dto.patient.nom}`,
      responsableId: dto.utilisateur?.id ?? null, aideSoignantNom: responsable,
      date: this.isoToDisplayDate(String(dto.date)),
      heureDebut: this.timeOnly(String(dto.heureDebut)), heureFin: this.timeOnly(String(dto.heureFin)),
      machine: dto.machine ?? '—', statut: this.normalizeSeanceStatut(dto.statut)
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
      case 'AIDE_SOIGNANT': return 'aide-soignant';
      default: return 'patient';
    }
  }

  private toBackendRole(role: RoleId): string {
    return role === 'admin' ? 'ADMIN' : role === 'medecin' ? 'MEDECIN' :
      role === 'infirmier-majeur' ? 'INFIRMIER_MAJEUR' : role === 'infirmier' ? 'INFIRMIER' :
      role === 'aide-soignant' ? 'AIDE_SOIGNANT' : 'PATIENT';
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

  private isoToDisplayDate(value: string): string {
    if (!value || !value.includes('-')) return value;
    const [y, m, d] = value.slice(0, 10).split('-');
    return `${d}/${m}/${y}`;
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

  private syncSelectedAideSoignant(): void {
    if (!this.newSeance.aideSoignantId) {
      return;
    }

    const selectedId = Number(this.newSeance.aideSoignantId);
    const stillAvailable = this.availableAidesSoignants.some(user => user.id === selectedId);
    if (!stillAvailable) {
      this.newSeance.aideSoignantId = '';
    }
  }

  private resolveAvailableAideSoignantId(): number | null {
    const selectedId = this.newSeance.aideSoignantId ? Number(this.newSeance.aideSoignantId) : null;
    if (selectedId && this.availableAidesSoignants.some(user => user.id === selectedId)) {
      return selectedId;
    }

    return this.availableAidesSoignants[0]?.id ?? null;
  }

  private isAideSoignantAvailableForSelection(userId: number): boolean {
    if (!this.newSeance.dates.length) {
      return true;
    }

    return this.newSeance.dates.every(date =>
      this.hasHoraireCoverage(userId, date, this.newSeance.heureDebut, this.newSeance.heureFin) &&
      !this.hasSeanceConflict(userId, date, this.newSeance.heureDebut, this.newSeance.heureFin)
    );
  }

  private hasHoraireCoverage(userId: number, date: string, start: string, end: string): boolean {
    return this.horaires.some(horaire =>
      horaire.utilisateurId === userId &&
      horaire.jours.includes(date) &&
      horaire.heureDebut <= start &&
      horaire.heureFin >= end
    );
  }

  private hasSeanceConflict(userId: number, date: string, start: string, end: string): boolean {
    return this.seancesAdmin.some(seance =>
      seance.responsableId === userId &&
      this.displayToIsoDate(seance.date) === date &&
      this.rangesOverlap(start, end, seance.heureDebut, seance.heureFin)
    );
  }

  private rangesOverlap(startA: string, endA: string, startB: string, endB: string): boolean {
    return startA < endB && startB < endA;
  }

  pageEnd(page: number, total: number): number {
    return Math.min(page * this.pageSize, total);
  }

  goToPage(pageKey: 'staffPage' | 'patientPage' | 'horairePage' | 'seancePage', page: number, totalPages: number): void {
    const safeTotal = Math.max(1, totalPages);
    this[pageKey] = Math.min(Math.max(1, page), safeTotal);
  }

  getPageNumbers(currentPage: number, totalPages: number): (number | '...')[] {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | '...')[] = [1];
    if (currentPage > 3) pages.push('...');
    const start = Math.max(2, currentPage - 1);
    const end   = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  }

  private paginateArray<T>(items: T[], pageKey: 'staffPage' | 'patientPage' | 'horairePage' | 'seancePage'): T[] {
    const totalPages = this.getTotalPages(items.length);
    if (this[pageKey] > totalPages) {
      this[pageKey] = totalPages;
    }
    const start = (this[pageKey] - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }

  private getTotalPages(totalItems: number): number {
    return Math.max(1, Math.ceil(totalItems / this.pageSize));
  }

  private normalizeAllPages(): void {
    this.staffPage = Math.min(this.staffPage, this.totalStaffPages);
    this.patientPage = Math.min(this.patientPage, this.totalPatientPages);
    this.horairePage = Math.min(this.horairePage, this.totalHorairePages);
    this.seancePage = Math.min(this.seancePage, this.totalSeancePages);
  }

  private scrollAdminToTop(): void {
    this.adminMainRef?.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onNewSeanceScheduleChange(): void {
    this.syncSelectedAideSoignant();
    this.refreshAvailableMachinesForNewSeance();
  }

  onEditSeanceScheduleChange(): void {
    this.refreshAvailableMachinesForEditSeance();
  }

  private loadMachines(): void {
    this.machineService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (machines) => {
        const codes = machines.map(machine => machine.code).sort();
        this.allMachineCodes = codes;
        this.machines = [...codes];
        if (!this.newSeance.machine) {
          this.newSeance.machine = codes[0] ?? '';
        }
      },
      error: () => {
        this.allMachineCodes = [];
        this.machines = [];
        this.showToast('Erreur lors du chargement des machines', 'error');
      }
    });
  }

  private refreshAvailableMachinesForNewSeance(): void {
    const dates = this.newSeance.dates.length ? [...this.newSeance.dates] : [];
    if (!dates.length || !this.newSeance.heureDebut || !this.newSeance.heureFin) {
      this.machines = [...this.allMachineCodes];
      if (!this.machines.includes(this.newSeance.machine)) {
        this.newSeance.machine = this.machines[0] ?? '';
      }
      return;
    }

    forkJoin(
      dates.map(date => this.machineService.getAvailable(date, this.newSeance.heureDebut, this.newSeance.heureFin).pipe(
        catchError(() => of([] as MachineDto[]))
      ))
    ).pipe(takeUntil(this.destroy$)).subscribe({
      next: (machineGroups) => {
        this.machines = this.intersectMachineCodes(machineGroups);
        if (!this.machines.includes(this.newSeance.machine)) {
          this.newSeance.machine = this.machines[0] ?? '';
        }
      },
      error: () => {
        this.machines = [...this.allMachineCodes];
      }
    });
  }

  private refreshAvailableMachinesForEditSeance(): void {
    if (!this.editSeance) {
      return;
    }

    const date = this.editSeanceDates[0] || this.displayToIsoDate(this.editSeance.date);
    if (!date || !this.editSeance.heureDebut || !this.editSeance.heureFin) {
      this.machines = [...this.allMachineCodes];
      return;
    }

    this.machineService.getAvailable(date, this.editSeance.heureDebut, this.editSeance.heureFin, this.editSeance.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (machines) => {
          this.machines = machines.map(machine => machine.code).sort();
          if (!this.machines.includes(this.editSeance!.machine)) {
            this.editSeance!.machine = this.machines[0] ?? '';
          }
        },
        error: () => {
          this.machines = [...this.allMachineCodes];
        }
      });
  }

  private intersectMachineCodes(machineGroups: MachineDto[][]): string[] {
    if (!machineGroups.length) {
      return [...this.allMachineCodes];
    }

    const [firstGroup, ...restGroups] = machineGroups;
    return firstGroup
      .map(machine => machine.code)
      .filter(code => restGroups.every(group => group.some(machine => machine.code === code)))
      .sort();
  }

  private resetNewSeanceForm(): void {
    this.newSeance = {
      patientId: '',
      aideSoignantId: '',
      dates: [],
      heureDebut: '07:30',
      heureFin: '11:30',
      machine: this.allMachineCodes[0] ?? ''
    };
    this.machines = [...this.allMachineCodes];
  }
  private todayLocalIso(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}


