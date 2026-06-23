import { Role } from './role';

export type AdminTab = 'profils' | 'seances' | 'statistiques' | 'audit';

export interface DonutSegment {
  color: string;
  label: string;
  count: number;
  dasharray: string;
  rotate: number;
}

export interface BarPoint {
  label: string;
  count: number;
  pct: number;
}

export interface AuditEntryUI {
  id: number;
  timestamp: string;
  utilisateur: string;
  role: string;
  action: string;
  entite: string;
  details: string;
  statut: 'success' | 'error';
}
export type RoleId = 'admin' | 'medecin' | 'infirmier-majeur' | 'infirmier' | 'patient';
export type UserStatus = 'actif' | 'inactif' | 'suspendu';

// View models dedicated to the admin screen.
// Backend DTOs stay in their own model files.
export interface AppUser {
  id: number;
  login: string;
  username: string;
  role: RoleId;
  backendRole: Role['name'];
  mat: string;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  dateCreation: string;
  actif: boolean;
  statut: UserStatus;
  derniereConnexion: string;
  specialite?: string | null;
  superviseurId?: number | null;
  telephone?: string;
  service?: string;
  dateNaissance?: string;
  groupeSanguin?: string;
  cin?: string | null;
  genre?: string | null;
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

export interface Toast {
  message: string;
  type: 'success' | 'warning' | 'info' | 'error';
  id: number;
}

export interface SeanceAdminRow {
  id: number;
  patientId: number;
  patientNom: string;
  responsableId: number | null;
  infirmierNom: string;
  date: string;
  heureDebut: string;
  heureFin: string;
  statut: string;
  jourPlanifie?: number | null;
  creneau?: string | null;
}
