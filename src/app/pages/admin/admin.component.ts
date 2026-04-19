import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mapUtilisateurToAppUser, UtilisateurResponseDto } from '../../../models/utilisateur.model';

// ── Types ────────────────────────────────────────────────────────────────────

export type RoleId = 'medecin' | 'infirmier-majeur' | 'infirmier' | 'aide-soignant';
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
  activeTab: 'users' | 'roles' | 'activity' = 'users';

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

  // ── KPIs ──
  get totalUsers()      { return this.users.length; }
  get activeUsers()     { return this.users.filter(u => u.statut === 'actif').length; }
  get medecinCount()    { return this.users.filter(u => u.role === 'medecin').length; }
  get infMajeurCount()  { return this.users.filter(u => u.role === 'infirmier-majeur').length; }
  get infirmierCount()  { return this.users.filter(u => u.role === 'infirmier').length; }
  get aideSoignantCount(){ return this.users.filter(u => u.role === 'aide-soignant').length; }
  get suspendedCount()  { return this.users.filter(u => u.statut === 'suspendu').length; }

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

  roleIds: RoleId[] = ['medecin', 'infirmier-majeur', 'infirmier', 'aide-soignant'];

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

  logout(): void { this.router.navigate(['/login']); }
}
