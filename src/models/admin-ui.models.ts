import { Role } from './role';

export type AdminTab = 'profils' | 'horaires' | 'seances';
export type RoleId = 'admin' | 'medecin' | 'infirmier-majeur' | 'infirmier' | 'aide-soignant' | 'patient';
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
  patientStatut?: string;
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

export interface HoraireRow {
  id: number;
  utilisateurId: number;
  staffNom: string;
  staffRole: string;
  jours: string[];
  heureDebut: string;
  heureFin: string;
}

export interface SeanceAdminRow {
  id: number;
  patientId: number;
  patientNom: string;
  responsableId: number | null;
  aideSoignantNom: string;
  date: string;
  heureDebut: string;
  heureFin: string;
  machine: string;
  statut: string;
}
