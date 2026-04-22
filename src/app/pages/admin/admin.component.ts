import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mapUtilisateurToAppUser, UtilisateurResponseDto } from '../../../models/utilisateur.model';

// ── Types ────────────────────────────────────────────────────────────────────

export type RoleId = 'medecin' | 'infirmier-majeur' | 'infirmier' | 'aide-soignant' | 'patient';
export type UserStatus = 'actif' | 'inactif' | 'suspendu';

export interface AppUser {
  id: number;
  login: string;
  role: RoleId;
  mat: string;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  username: string;
  dateCreation: string;
  actif: boolean;
  statut: UserStatus;
  derniereConnexion: string;
  telephone?: string;
  service?: string;
  dateNaissance?: string;
  groupeSanguin?: string;
}

export interface Permission {
  id: string;
  label: string;
  description: string;
  category: string;
}

export interface RoleConfig {
  id: RoleId;
  label: string;
  icon: string;
  color: string;
  colorVar: string;
  description: string;
  permissions: Record<string, boolean>;
}

interface Toast { message: string; type: 'success' | 'warning' | 'info' | 'error'; id: number; }

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl:    './admin.component.scss',
})
export class AdminComponent {
  constructor(private router: Router) {}

  // ── Tabs ──
  activeTab: 'profils' | 'horaires' | 'seances' | 'affectations' = 'profils';
  activeProfilRole: RoleId = 'medecin';

  // ── Permissions catalogue ──
  readonly permissions: Permission[] = [
    // Patients
    { id: 'p_view',    category: 'Patients',     label: 'Voir les dossiers patients',     description: 'Accès en lecture aux fiches et historiques patients' },
    { id: 'p_edit',    category: 'Patients',     label: 'Modifier les dossiers',          description: 'Éditer les informations médicales et administratives' },
    { id: 'p_create',  category: 'Patients',     label: 'Créer un patient',               description: 'Ajouter un nouveau patient dans le système' },
    // Médical
    { id: 'm_rx',      category: 'Médical',      label: 'Créer des prescriptions',        description: 'Rédiger et enregistrer des ordonnances' },
    { id: 'm_rx_val',  category: 'Médical',      label: 'Valider des prescriptions',      description: 'Approuver les prescriptions en attente' },
    { id: 'm_bilan',   category: 'Médical',      label: 'Voir les bilans & résultats',    description: 'Consulter les analyses et résultats biologiques' },
    { id: 'm_proto',   category: 'Médical',      label: 'Gérer les protocoles',           description: 'Créer et modifier les protocoles de dialyse' },
    // Planning
    { id: 'pl_view',   category: 'Planning',     label: 'Voir le planning',               description: 'Consulter le planning des séances' },
    { id: 'pl_edit',   category: 'Planning',     label: 'Créer / modifier des séances',   description: 'Planifier et éditer les séances de dialyse' },
    { id: 'pl_delete', category: 'Planning',     label: 'Supprimer des séances',          description: 'Retirer une séance du planning' },
    // Monitoring
    { id: 'mo_view',   category: 'Monitoring',   label: 'Voir le monitoring',             description: 'Accès au suivi temps réel des patients en dialyse' },
    { id: 'mo_saisie', category: 'Monitoring',   label: 'Saisir les constantes vitales',  description: 'Enregistrer PA, FC, poids et autres paramètres' },
    // Équipement
    { id: 'eq_view',   category: 'Équipement',   label: 'Voir les machines',              description: "Consulter l'état et les disponibilités des machines" },
    { id: 'eq_stock',  category: 'Équipement',   label: 'Gérer les stocks',               description: 'Voir et commander les consommables' },
    { id: 'eq_maint',  category: 'Équipement',   label: 'Signaler une maintenance',       description: 'Déclarer une panne ou une intervention technique' },
    // Rapports
    { id: 'r_gen',     category: 'Rapports',     label: 'Générer des rapports',           description: 'Créer des rapports statistiques et médicaux' },
    { id: 'r_export',  category: 'Rapports',     label: 'Exporter les données',           description: 'Télécharger les données en PDF ou CSV' },
    // Administration
    { id: 'a_users',   category: 'Administration', label: 'Gérer les utilisateurs',       description: 'Ajouter, modifier et désactiver des comptes' },
    { id: 'a_roles',   category: 'Administration', label: 'Configurer les rôles',         description: 'Modifier les permissions des rôles' },
  ];

  get permCategories(): string[] {
    return [...new Set(this.permissions.map(p => p.category))];
  }

  permsByCategory(cat: string): Permission[] {
    return this.permissions.filter(p => p.category === cat);
  }

  // ── Roles ──
  roles: RoleConfig[] = [
    {
      id: 'medecin', label: 'Médecin', icon: 'medical_services',
      color: '#00D9C4', colorVar: 'var(--c-teal)', description: 'Néphrologue responsable du suivi médical des patients',
      permissions: {
        p_view: true,  p_edit: true,  p_create: true,
        m_rx: true,    m_rx_val: true, m_bilan: true, m_proto: true,
        pl_view: true, pl_edit: true, pl_delete: true,
        mo_view: true, mo_saisie: false,
        eq_view: true, eq_stock: false, eq_maint: false,
        r_gen: true,   r_export: true,
        a_users: false, a_roles: false,
      },
    },
    {
      id: 'infirmier-majeur', label: 'Infirmier Majeur', icon: 'supervisor_account',
      color: '#A78BFA', colorVar: 'var(--c-purple)', description: "Coordonne l'équipe soignante et supervise l'ensemble du service",
      permissions: {
        p_view: true,  p_edit: false,  p_create: false,
        m_rx: false,   m_rx_val: false, m_bilan: true, m_proto: false,
        pl_view: true, pl_edit: true,  pl_delete: true,
        mo_view: true, mo_saisie: true,
        eq_view: true, eq_stock: true, eq_maint: true,
        r_gen: true,   r_export: true,
        a_users: true, a_roles: false,
      },
    },
    {
      id: 'infirmier', label: 'Infirmier(e)', icon: 'local_hospital',
      color: '#4EA8F8', colorVar: 'var(--c-blue)', description: 'Assure les soins infirmiers et le suivi des séances de dialyse',
      permissions: {
        p_view: true,  p_edit: false, p_create: false,
        m_rx: false,   m_rx_val: false, m_bilan: true, m_proto: false,
        pl_view: true, pl_edit: false, pl_delete: false,
        mo_view: true, mo_saisie: true,
        eq_view: true, eq_stock: false, eq_maint: true,
        r_gen: false,  r_export: false,
        a_users: false, a_roles: false,
      },
    },
    {
      id: 'aide-soignant', label: 'Aide-Soignant', icon: 'volunteer_activism',
      color: '#F5A623', colorVar: 'var(--c-amber)', description: 'Apporte assistance aux soins et gère la préparation des équipements',
      permissions: {
        p_view: false, p_edit: false, p_create: false,
        m_rx: false,   m_rx_val: false, m_bilan: false, m_proto: false,
        pl_view: true, pl_edit: false, pl_delete: false,
        mo_view: false, mo_saisie: false,
        eq_view: true, eq_stock: true, eq_maint: true,
        r_gen: false,  r_export: false,
        a_users: false, a_roles: false,
      },
    },
    {
      id: 'patient', label: 'Patient', icon: 'person',
      color: '#22c55e', colorVar: 'var(--c-green)', description: 'Patient suivi pour des séances de dialyse chronique',
      permissions: {
        p_view: false, p_edit: false, p_create: false,
        m_rx: false,   m_rx_val: false, m_bilan: false, m_proto: false,
        pl_view: false, pl_edit: false, pl_delete: false,
        mo_view: false, mo_saisie: false,
        eq_view: false, eq_stock: false, eq_maint: false,
        r_gen: false,  r_export: false,
        a_users: false, a_roles: false,
      },
    },
  ];

  getRoleConfig(id: RoleId): RoleConfig | undefined {
    return this.roles.find(r => r.id === id);
  }

  selectedRoleId: RoleId = 'medecin';
  get selectedRole(): RoleConfig {
    return this.roles.find(r => r.id === this.selectedRoleId)!;
  }

  unsavedChanges: Partial<Record<RoleId, boolean>> = {};

  togglePermission(role: RoleConfig, permId: string): void {
    role.permissions[permId] = !role.permissions[permId];
    this.unsavedChanges[role.id] = true;
  }

  saveRolePermissions(role: RoleConfig): void {
    delete this.unsavedChanges[role.id];
    this.showToast(`Permissions de "${role.label}" enregistrées`, 'success');
  }

  resetRole(role: RoleConfig): void {
    // Reset to all false (demo — in prod would restore defaults)
    this.showToast(`Permissions de "${role.label}" réinitialisées`, 'info');
    delete this.unsavedChanges[role.id];
  }

  permCount(role: RoleConfig): number {
    return Object.values(role.permissions).filter(Boolean).length;
  }

  // ── Users ──
  private nextUserId = 50;
  searchQuery     = '';
  filterRole: RoleId | '' = '';
  filterStatus: UserStatus | '' = '';

  users: AppUser[] = [
    { id: 1,  login: 'k.benali',    username: 'KBenali',    mat: 'MED-2024-001', nom: 'Benali',    prenom: 'Karim',   email: 'k.benali@dialysys.ma',    role: 'medecin',          mdp: '********', dateCreation: '10/01/2024', actif: true,  statut: 'actif',    derniereConnexion: 'il y a 5 min',   telephone: '06 12 34 56 78', service: 'Hémodialyse'  },
    { id: 2,  login: 'f.chraibi',   username: 'FChraibi',   mat: 'IM-2024-008',  nom: 'Chraibi',   prenom: 'Fatima',  email: 'f.chraibi@dialysys.ma',   role: 'infirmier-majeur', mdp: '********', dateCreation: '15/01/2024', actif: true,  statut: 'actif',    derniereConnexion: 'il y a 12 min',  telephone: '06 23 45 67 89', service: 'Hémodialyse'  },
    { id: 3,  login: 'n.tazi',      username: 'NTazi',      mat: 'INF-2024-042', nom: 'Tazi',      prenom: 'Nadia',   email: 'n.tazi@dialysys.ma',      role: 'infirmier',        mdp: '********', dateCreation: '20/02/2024', actif: true,  statut: 'actif',    derniereConnexion: 'il y a 1h',      telephone: '06 34 56 78 90', service: 'Hémodialyse'  },
    { id: 4,  login: 'a.haddad',    username: 'AHaddad',    mat: 'INF-2024-031', nom: 'Haddad',    prenom: 'Amine',   email: 'a.haddad@dialysys.ma',    role: 'infirmier',        mdp: '********', dateCreation: '05/02/2024', actif: true,  statut: 'actif',    derniereConnexion: 'il y a 2h',      telephone: '06 45 67 89 01', service: 'Hémodialyse'  },
    { id: 5,  login: 'l.mansouri',  username: 'LMansouri',  mat: 'INF-2024-027', nom: 'Mansouri',  prenom: 'Leila',   email: 'l.mansouri@dialysys.ma',  role: 'infirmier',        mdp: '********', dateCreation: '01/02/2024', actif: true,  statut: 'actif',    derniereConnexion: 'Hier 16:45',     telephone: '06 56 78 90 12', service: 'Hémodialyse'  },
    { id: 6,  login: 'r.berrada',   username: 'RBerrada',   mat: 'INF-2024-019', nom: 'Berrada',   prenom: 'Rachid',  email: 'r.berrada@dialysys.ma',   role: 'infirmier',        mdp: '********', dateCreation: '22/01/2024', actif: true,  statut: 'actif',    derniereConnexion: 'Hier 14:20',     telephone: '06 67 89 01 23', service: 'Hémodialyse'  },
    { id: 7,  login: 'y.kettani',   username: 'YKettani',   mat: 'AS-2024-021',  nom: 'Kettani',   prenom: 'Youssef', email: 'y.kettani@dialysys.ma',   role: 'aide-soignant',    mdp: '********', dateCreation: '10/02/2024', actif: true,  statut: 'actif',    derniereConnexion: 'il y a 3h',      telephone: '06 78 90 12 34', service: 'Hémodialyse'  },
    { id: 8,  login: 's.oulmane',   username: 'SOulmane',   mat: 'AS-2024-015',  nom: 'Oulmane',   prenom: 'Sara',    email: 's.oulmane@dialysys.ma',   role: 'aide-soignant',    mdp: '********', dateCreation: '18/01/2024', actif: false, statut: 'inactif',  derniereConnexion: 'il y a 3 jours', telephone: '06 89 01 23 45', service: 'Hémodialyse'  },
    { id: 9,  login: 'h.lachgar',   username: 'HLachgar',   mat: 'MED-2023-004', nom: 'Lachgar',   prenom: 'Hassan',  email: 'h.lachgar@dialysys.ma',   role: 'medecin',          mdp: '********', dateCreation: '03/06/2023', actif: false, statut: 'suspendu', derniereConnexion: 'il y a 8 jours', telephone: '06 90 12 34 56', service: 'Consultation' },
    { id: 10, login: 's.bouchekif', username: 'SBouchekif', mat: 'INF-2023-055', nom: 'Bouchekif', prenom: 'Samira',  email: 's.bouchekif@dialysys.ma', role: 'infirmier',        mdp: '********', dateCreation: '12/09/2023', actif: false, statut: 'inactif',  derniereConnexion: 'il y a 5 jours', telephone: '06 01 23 45 67', service: 'Hémodialyse'  },
    { id: 11, login: 'a.mansouri',  username: 'AMansouri',  mat: 'PAT-2024-001', nom: 'Mansouri',  prenom: 'Ahmed',   email: 'a.mansouri@patient.ma',   role: 'patient',          mdp: '********', dateCreation: '05/03/2024', actif: true,  statut: 'actif',    derniereConnexion: '—',              telephone: '06 11 22 33 44', service: 'Hémodialyse'  },
    { id: 12, login: 'f.kbiri',     username: 'FKbiri',     mat: 'PAT-2024-002', nom: 'Kbiri',     prenom: 'Fatima',  email: 'f.kbiri@patient.ma',      role: 'patient',          mdp: '********', dateCreation: '12/03/2024', actif: true,  statut: 'actif',    derniereConnexion: '—',              telephone: '06 22 33 44 55', service: 'Hémodialyse'  },
    { id: 13, login: 'm.alami',     username: 'MAlami',     mat: 'PAT-2024-003', nom: 'El Alami',  prenom: 'Mohamed', email: 'm.alami@patient.ma',      role: 'patient',          mdp: '********', dateCreation: '18/03/2024', actif: true,  statut: 'actif',    derniereConnexion: '—',              telephone: '06 33 44 55 66', service: 'Hémodialyse'  },
    { id: 14, login: 'k.tahiri',    username: 'KTahiri',    mat: 'PAT-2024-004', nom: 'Tahiri',    prenom: 'Khadija', email: 'k.tahiri@patient.ma',     role: 'patient',          mdp: '********', dateCreation: '20/03/2024', actif: true,  statut: 'actif',    derniereConnexion: '—',              telephone: '06 44 55 66 77', service: 'Hémodialyse'  },
    { id: 15, login: 'y.bennis',    username: 'YBennis',    mat: 'PAT-2024-005', nom: 'Bennis',    prenom: 'Youssef', email: 'y.bennis@patient.ma',     role: 'patient',          mdp: '********', dateCreation: '25/03/2024', actif: true,  statut: 'actif',    derniereConnexion: '—',              telephone: '06 55 66 77 88', service: 'Hémodialyse'  },
  ];

  // ── Adapter : charge une liste de DTO backend et remplace les données locales ──
  chargerDepuisApi(dtos: UtilisateurResponseDto[]): void {
    this.users = dtos.map(mapUtilisateurToAppUser);
  }

  get filteredUsers(): AppUser[] {
    return this.users.filter(u =>
      (!this.filterRole   || u.role   === this.filterRole) &&
      (!this.filterStatus || u.statut === this.filterStatus) &&
      (!this.searchQuery  || u.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             u.prenom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             u.login.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             u.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             u.mat.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             u.email.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }

  usersForRole(roleId: RoleId): AppUser[] {
    return this.users.filter(u => u.role === roleId);
  }

  // ── User detail modal ──
  selectedUser: AppUser | null = null;
  showUserModal = false;

  openUser(u: AppUser): void {
    this.selectedUser = { ...u };
    this.showUserModal = true;
  }

  closeUserModal(): void {
    this.showUserModal = false;
    this.selectedUser = null;
  }

  saveUser(): void {
    if (!this.selectedUser) return;
    const idx = this.users.findIndex(u => u.id === this.selectedUser!.id);
    if (idx !== -1) this.users[idx] = { ...this.selectedUser };
    this.showToast(`Profil de ${this.selectedUser.prenom} ${this.selectedUser.nom} mis à jour`, 'success');
    this.closeUserModal();
  }

  toggleUserStatus(u: AppUser): void {
    u.statut = u.statut === 'actif' ? 'inactif' : 'actif';
    const action = u.statut === 'actif' ? 'activé' : 'désactivé';
    this.showToast(`Compte de ${u.prenom} ${u.nom} ${action}`, u.statut === 'actif' ? 'success' : 'warning');
  }

  suspendUser(u: AppUser): void {
    u.statut = 'suspendu';
    this.showToast(`Compte de ${u.prenom} ${u.nom} suspendu`, 'warning');
    this.closeUserModal();
  }

  deleteUser(u: AppUser): void {
    this.users = this.users.filter(x => x.id !== u.id);
    this.showToast(`Utilisateur ${u.prenom} ${u.nom} supprimé`, 'error');
    this.closeUserModal();
  }

  resetPassword(u: AppUser): void {
    this.showToast(`Lien de réinitialisation envoyé à ${u.email}`, 'info');
  }

  // ── New patient modal ──
  showNewPatientModal = false;
  newPatient = { nom: '', prenom: '', dateNaissance: '', groupeSanguin: '' };
  readonly groupesSanguins = ['A+','A−','B+','B−','AB+','AB−','O+','O−'];

  openNewPatient(): void {
    this.newPatient = { nom: '', prenom: '', dateNaissance: '', groupeSanguin: '' };
    this.showNewPatientModal = true;
  }

  saveNewPatient(): void {
    if (!this.newPatient.nom.trim() || !this.newPatient.prenom.trim() ||
        !this.newPatient.dateNaissance || !this.newPatient.groupeSanguin) {
      this.showToast('Veuillez remplir tous les champs obligatoires (*)', 'warning');
      return;
    }
    const today = new Date().toLocaleDateString('fr-FR');
    const id    = ++this.nextUserId;
    const mat   = `PAT-${new Date().getFullYear()}-${String(id).padStart(3,'0')}`;
    this.users.unshift({
      id, login: '', username: '', mat,
      nom: this.newPatient.nom, prenom: this.newPatient.prenom,
      email: '', mdp: '', role: 'patient',
      actif: true, statut: 'actif',
      dateCreation: today, derniereConnexion: '—',
      telephone: '', service: 'Hémodialyse',
      dateNaissance: this.newPatient.dateNaissance,
      groupeSanguin: this.newPatient.groupeSanguin,
    });
    this.showNewPatientModal = false;
    this.showToast(`Patient ${this.newPatient.prenom} ${this.newPatient.nom} créé`, 'success');
  }

  openNewProfil(): void {
    if (this.activeProfilRole === 'patient') { this.openNewPatient(); }
    else { this.openNewUser(); }
  }

  // ── New user modal ──
  showNewUserModal = false;
  newUser = {
    login: '', username: '', mat: '', nom: '', prenom: '',
    email: '', mdp: '', role: 'infirmier' as RoleId,
    actif: true, telephone: '', service: 'Hémodialyse',
  };

  openNewUser(): void {
    this.newUser = {
      login: '', username: '', mat: '', nom: '', prenom: '',
      email: '', mdp: '', role: 'infirmier',
      actif: true, telephone: '', service: 'Hémodialyse',
    };
    this.showNewUserModal = true;
  }

  saveNewUser(): void {
    if (!this.newUser.nom.trim() || !this.newUser.prenom.trim() ||
        !this.newUser.login.trim() || !this.newUser.email.trim() || !this.newUser.mat.trim()) {
      this.showToast('Veuillez remplir tous les champs obligatoires (*)', 'warning');
      return;
    }
    const today = new Date().toLocaleDateString('fr-FR');
    // Auto-generate username if empty
    const username = this.newUser.username.trim() ||
      (this.newUser.prenom[0] + this.newUser.nom).replace(/\s+/g, '');
    // Auto-generate mdp if empty
    const mdp = this.newUser.mdp.trim() || 'Temp@' + Math.random().toString(36).slice(2, 8);
    this.users.unshift({
      id:                ++this.nextUserId,
      login:             this.newUser.login,
      username,
      mat:               this.newUser.mat,
      nom:               this.newUser.nom,
      prenom:            this.newUser.prenom,
      email:             this.newUser.email,
      mdp,
      role:              this.newUser.role,
      actif:             this.newUser.actif,
      statut:            this.newUser.actif ? 'actif' : 'inactif',
      dateCreation:      today,
      telephone:         this.newUser.telephone,
      service:           this.newUser.service,
      derniereConnexion: 'Jamais connecté',
    });
    this.showNewUserModal = false;
    this.showToast(`Compte de ${this.newUser.prenom} ${this.newUser.nom} créé`, 'success');
  }

  // ── Activity log ──
  activityLog = [
    { icon: 'person_add',      text: 'Nouveau compte créé — Inf. N. Tazi',            user: 'Admin',         time: 'il y a 2h',      type: 'info'    },
    { icon: 'lock_reset',      text: 'Réinitialisation MDP — Inf. R. Berrada',         user: 'Admin',         time: 'il y a 4h',      type: 'warning' },
    { icon: 'manage_accounts', text: 'Rôle modifié : Aide-Soignant → Infirmier',       user: 'F. Chraibi',    time: 'Hier 15:22',     type: 'info'    },
    { icon: 'block',           text: 'Compte suspendu — Dr. H. Lachgar',               user: 'Admin',         time: 'il y a 8 jours', type: 'error'   },
    { icon: 'verified_user',   text: 'Permissions "Infirmier" mises à jour',           user: 'Admin',         time: 'il y a 10 jours',type: 'info'    },
    { icon: 'person_remove',   text: 'Compte désactivé — S. Oulmane',                  user: 'F. Chraibi',    time: 'il y a 12 jours',type: 'warning' },
    { icon: 'add_moderator',   text: 'Nouveau rôle Infirmier Majeur attribué',         user: 'Admin',         time: 'il y a 1 mois',  type: 'info'    },
    { icon: 'login',           text: 'Connexion administrateur',                        user: 'Admin',         time: 'Aujourd\'hui 08:05', type: 'ok'  },
  ];

  // ── Horaires de travail ──
  private nextHoraireId = 10;
  horaires: { id: number; staffNom: string; staffRole: string; date: string; heureDebut: string; heureFin: string; }[] = [
    { id: 1, staffNom: 'Tazi Nadia',      staffRole: 'Infirmier(e)',   date: '22/04/2026', heureDebut: '07:00', heureFin: '15:00' },
    { id: 2, staffNom: 'Haddad Amine',    staffRole: 'Infirmier(e)',   date: '22/04/2026', heureDebut: '15:00', heureFin: '23:00' },
    { id: 3, staffNom: 'Kettani Youssef', staffRole: 'Aide-Soignant', date: '22/04/2026', heureDebut: '07:00', heureFin: '15:00' },
    { id: 4, staffNom: 'Mansouri Leila',  staffRole: 'Infirmier(e)',   date: '23/04/2026', heureDebut: '07:00', heureFin: '15:00' },
    { id: 5, staffNom: 'Oulmane Sara',    staffRole: 'Aide-Soignant', date: '23/04/2026', heureDebut: '15:00', heureFin: '23:00' },
  ];
  newHoraire  = { staffType: '', staffNom: '', date: '', heureDebut: '07:00', heureFin: '15:00' };
  searchHoraire = '';

  get filteredHoraires() {
    const q = this.searchHoraire.toLowerCase();
    if (!q) return this.horaires;
    return this.horaires.filter(h =>
      h.staffNom.toLowerCase().includes(q) ||
      h.staffRole.toLowerCase().includes(q) ||
      h.date.includes(q)
    );
  }

  get staffSoignants(): AppUser[] {
    return this.users.filter(u => u.role === 'infirmier' || u.role === 'aide-soignant' || u.role === 'infirmier-majeur');
  }

  staffParType(type: string): AppUser[] {
    if (!type) return [];
    return this.users.filter(u => u.role === type as RoleId);
  }

  ajouterHoraire(): void {
    if (!this.newHoraire.staffNom || !this.newHoraire.date || !this.newHoraire.heureDebut || !this.newHoraire.heureFin) {
      this.showToast('Veuillez remplir tous les champs de l\'horaire', 'warning'); return;
    }
    const staff = this.users.find(u => u.id === +this.newHoraire.staffNom);
    const nom   = staff ? `${staff.nom} ${staff.prenom}` : '—';
    const role  = staff ? this.roleLabel(staff.role) : '—';
    this.horaires.unshift({ id: ++this.nextHoraireId, staffNom: nom, staffRole: role,
      date: this.newHoraire.date, heureDebut: this.newHoraire.heureDebut, heureFin: this.newHoraire.heureFin });
    this.newHoraire = { staffType: '', staffNom: '', date: '', heureDebut: '07:00', heureFin: '15:00' };
    this.showToast('Horaire ajouté avec succès', 'success');
  }

  supprimerHoraire(id: number): void {
    this.horaires = this.horaires.filter(h => h.id !== id);
    this.showToast('Horaire supprimé', 'warning');
  }

  showEditHoraireModal = false;
  editHoraire: { id: number; staffNom: string; staffRole: string; date: string; heureDebut: string; heureFin: string; } | null = null;

  openEditHoraire(h: typeof this.horaires[0]): void {
    this.editHoraire = { ...h };
    this.showEditHoraireModal = true;
  }

  saveEditHoraire(): void {
    if (!this.editHoraire) return;
    const idx = this.horaires.findIndex(h => h.id === this.editHoraire!.id);
    if (idx !== -1) this.horaires[idx] = { ...this.editHoraire };
    this.showEditHoraireModal = false;
    this.editHoraire = null;
    this.showToast('Horaire modifié avec succès', 'success');
  }

  // ── Séances admin ──
  private nextSeanceId = 10;
  seancesAdmin: { id: number; patientNom: string; infirmierNom: string; date: string; heureDebut: string; heureFin: string; machine: string; statut: string; }[] = [
    { id: 1, patientNom: 'Mansouri Ahmed',   infirmierNom: 'Tazi Nadia',     date: '22/04/2026', heureDebut: '07:30', heureFin: '11:30', machine: 'M-01', statut: 'planifiee' },
    { id: 2, patientNom: 'Kbiri Fatima',     infirmierNom: 'Haddad Amine',   date: '22/04/2026', heureDebut: '08:00', heureFin: '12:00', machine: 'M-02', statut: 'planifiee' },
    { id: 3, patientNom: 'El Alami Mohamed', infirmierNom: 'Mansouri Leila', date: '22/04/2026', heureDebut: '15:00', heureFin: '19:00', machine: 'M-03', statut: 'planifiee' },
    { id: 4, patientNom: 'Tahiri Khadija',   infirmierNom: 'Berrada Rachid', date: '23/04/2026', heureDebut: '07:30', heureFin: '11:30', machine: 'M-01', statut: 'planifiee' },
    { id: 5, patientNom: 'Bennis Youssef',   infirmierNom: 'Tazi Nadia',     date: '23/04/2026', heureDebut: '08:00', heureFin: '12:00', machine: 'M-04', statut: 'planifiee' },
  ];
  newSeance    = { patientId: '', infirmierId: '', date: '', heureDebut: '07:30', heureFin: '11:30', machine: 'M-01' };
  searchSeance = '';

  get filteredSeances() {
    const q = this.searchSeance.toLowerCase();
    if (!q) return this.seancesAdmin;
    return this.seancesAdmin.filter(s =>
      s.patientNom.toLowerCase().includes(q) ||
      s.infirmierNom.toLowerCase().includes(q) ||
      s.date.includes(q) ||
      s.machine.toLowerCase().includes(q)
    );
  }

  get infirmiers(): AppUser[] { return this.users.filter(u => u.role === 'infirmier'); }
  get patientsUsers(): AppUser[] { return this.users.filter(u => u.role === 'patient'); }
  readonly machines = ['M-01','M-02','M-03','M-04','M-05','M-06'];

  ajouterSeance(): void {
    if (!this.newSeance.patientId || !this.newSeance.infirmierId || !this.newSeance.date) {
      this.showToast('Veuillez remplir tous les champs de la séance', 'warning'); return;
    }
    const patient  = this.users.find(u => u.id === +this.newSeance.patientId);
    const infirmier = this.users.find(u => u.id === +this.newSeance.infirmierId);
    this.seancesAdmin.unshift({
      id: ++this.nextSeanceId,
      patientNom:   patient  ? `${patient.nom} ${patient.prenom}`   : '—',
      infirmierNom: infirmier ? `${infirmier.nom} ${infirmier.prenom}` : '—',
      date: this.newSeance.date, heureDebut: this.newSeance.heureDebut,
      heureFin: this.newSeance.heureFin, machine: this.newSeance.machine, statut: 'planifiee',
    });
    this.newSeance = { patientId: '', infirmierId: '', date: '', heureDebut: '07:30', heureFin: '11:30', machine: 'M-01' };
    this.showToast('Séance planifiée avec succès', 'success');
  }

  supprimerSeance(id: number): void {
    this.seancesAdmin = this.seancesAdmin.filter(s => s.id !== id);
    this.showToast('Séance supprimée', 'warning');
  }

  showEditSeanceModal = false;
  editSeance: { id: number; patientNom: string; infirmierNom: string; date: string; heureDebut: string; heureFin: string; machine: string; statut: string; } | null = null;

  openEditSeance(s: typeof this.seancesAdmin[0]): void {
    this.editSeance = { ...s };
    this.showEditSeanceModal = true;
  }

  saveEditSeance(): void {
    if (!this.editSeance) return;
    const idx = this.seancesAdmin.findIndex(s => s.id === this.editSeance!.id);
    if (idx !== -1) this.seancesAdmin[idx] = { ...this.editSeance };
    this.showEditSeanceModal = false;
    this.editSeance = null;
    this.showToast('Séance modifiée avec succès', 'success');
  }

  seanceStatutClass(s: string): string { return s === 'terminee' ? 'ok' : s === 'en-cours' ? 'info' : 'neutral'; }
  seanceStatutLabel(s: string): string { return s === 'terminee' ? 'Terminée' : s === 'en-cours' ? 'En cours' : 'Planifiée'; }

  // ── Affectations ──
  private nextAffId = 10;
  affectations: { id: number; patientNom: string; aideSoignantNom: string; dateAffectation: string; }[] = [
    { id: 1, patientNom: 'Mansouri Ahmed',   aideSoignantNom: 'Kettani Youssef', dateAffectation: '01/04/2026' },
    { id: 2, patientNom: 'Kbiri Fatima',     aideSoignantNom: 'Kettani Youssef', dateAffectation: '01/04/2026' },
    { id: 3, patientNom: 'El Alami Mohamed', aideSoignantNom: 'Oulmane Sara',    dateAffectation: '05/04/2026' },
    { id: 4, patientNom: 'Tahiri Khadija',   aideSoignantNom: 'Oulmane Sara',    dateAffectation: '05/04/2026' },
  ];
  newAffectation    = { patientId: '', aideSoignantId: '' };
  searchAffectation = '';

  get filteredAffectations() {
    const q = this.searchAffectation.toLowerCase();
    if (!q) return this.affectations;
    return this.affectations.filter(a =>
      a.patientNom.toLowerCase().includes(q) ||
      a.aideSoignantNom.toLowerCase().includes(q) ||
      a.dateAffectation.includes(q)
    );
  }

  get aidesSoignants(): AppUser[] { return this.users.filter(u => u.role === 'aide-soignant'); }

  ajouterAffectation(): void {
    if (!this.newAffectation.patientId || !this.newAffectation.aideSoignantId) {
      this.showToast('Veuillez sélectionner un patient et un aide-soignant', 'warning'); return;
    }
    const patient = this.users.find(u => u.id === +this.newAffectation.patientId);
    const as_     = this.users.find(u => u.id === +this.newAffectation.aideSoignantId);
    const today   = new Date().toLocaleDateString('fr-FR');
    this.affectations.unshift({
      id: ++this.nextAffId,
      patientNom:       patient ? `${patient.nom} ${patient.prenom}` : '—',
      aideSoignantNom:  as_     ? `${as_.nom} ${as_.prenom}`         : '—',
      dateAffectation:  today,
    });
    this.newAffectation = { patientId: '', aideSoignantId: '' };
    this.showToast('Affectation enregistrée', 'success');
  }

  supprimerAffectation(id: number): void {
    this.affectations = this.affectations.filter(a => a.id !== id);
    this.showToast('Affectation supprimée', 'warning');
  }

  showEditAffectationModal = false;
  editAffectation: { id: number; patientNom: string; aideSoignantNom: string; dateAffectation: string; } | null = null;

  openEditAffectation(a: typeof this.affectations[0]): void {
    this.editAffectation = { ...a };
    this.showEditAffectationModal = true;
  }

  saveEditAffectation(): void {
    if (!this.editAffectation) return;
    const idx = this.affectations.findIndex(a => a.id === this.editAffectation!.id);
    if (idx !== -1) this.affectations[idx] = { ...this.editAffectation };
    this.showEditAffectationModal = false;
    this.editAffectation = null;
    this.showToast('Affectation modifiée avec succès', 'success');
  }

  // ── KPIs ──
  get totalUsers()       { return this.users.length; }
  get activeUsers()      { return this.users.filter(u => u.statut === 'actif').length; }
  get medecinCount()     { return this.users.filter(u => u.role === 'medecin').length; }
  get infMajeurCount()   { return this.users.filter(u => u.role === 'infirmier-majeur').length; }
  get infirmierCount()   { return this.users.filter(u => u.role === 'infirmier').length; }
  get aideSoignantCount(){ return this.users.filter(u => u.role === 'aide-soignant').length; }
  get patientCount()     { return this.users.filter(u => u.role === 'patient').length; }
  get suspendedCount()   { return this.users.filter(u => u.statut === 'suspendu').length; }

  // ── Helpers ──
  roleLabel(id: RoleId): string {
    return this.getRoleConfig(id)?.label ?? id;
  }

  roleColorVar(id: RoleId): string {
    return this.getRoleConfig(id)?.colorVar ?? 'var(--c-text-2)';
  }

  statusClass(s: UserStatus): string {
    return s === 'actif' ? 'ok' : s === 'suspendu' ? 'crit' : 'neutral';
  }

  statusLabel(s: UserStatus): string {
    return s === 'actif' ? 'Actif' : s === 'suspendu' ? 'Suspendu' : 'Inactif';
  }

  initials(u: AppUser): string {
    return (u.prenom[0] + u.nom[0]).toUpperCase();
  }

  roleIds: RoleId[] = ['medecin', 'infirmier-majeur', 'infirmier', 'aide-soignant', 'patient'];

  profilTabLabel(r: RoleId): string {
    const map: Record<RoleId, string> = {
      'medecin': 'Médecins', 'infirmier-majeur': 'Inf. Majeurs',
      'infirmier': 'Infirmiers', 'aide-soignant': 'Aides-Soignants', 'patient': 'Patients',
    };
    return map[r] ?? r;
  }

  get activeTabTitle(): string {
    const map: Record<string, string> = {
      profils: 'Gestion des Profils', horaires: 'Planification des Horaires',
      seances: 'Planification des Séances', affectations: 'Affectations Patients',
    };
    return map[this.activeTab] ?? '';
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
    return ({ success:'check_circle', warning:'warning', error:'error', info:'info', ok:'check_circle' } as Record<string,string>)[type] ?? 'info';
  }

  // ── Settings modal ──
  showSettingsModal = false;
  settings = {
    notificationsEmail:   true,
    notificationsSystem:  true,
    sessionTimeout:       30,
    langue:               'fr',
    theme:                'dark',
    exportFormat:         'csv',
    auditLog:             true,
    doubleAuth:           false,
  };

  saveSettings(): void {
    this.showSettingsModal = false;
    this.showToast('Paramètres système enregistrés', 'success');
  }

  logout(): void { this.router.navigate(['/login']); }
}