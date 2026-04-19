 import { AppUser, RoleId, UserStatus } from '../pages/admin/admin.component';
import { formatDate } from '../utils/formatDate';

// ── DTO reçu du backend (correspond à UtilisateurResponseDto Java) ────────────

export interface UtilisateurResponseDto {
  id: number;
  login: string;
  role: string;          // 'medecin' | 'infirmier-majeur' | 'infirmier' | 'aide-soignant'
  nom: string;
  prenom: string;
  dateCreation: string;  // ISO 8601 — ex: "2024-01-10T00:00:00"
  actif: boolean;
}

// ── Adaptateur DTO → AppUser (modèle Angular) ─────────────────────────────────

export function mapUtilisateurToAppUser(dto: UtilisateurResponseDto): AppUser {
  const statut: UserStatus = dto.actif ? 'actif' : 'inactif';

  return {
    id:                  dto.id,
    login:               dto.login,
    role:                dto.role as RoleId,
    nom:                 dto.nom,
    prenom:              dto.prenom,
    dateCreation:        formatDate(dto.dateCreation),
    actif:               dto.actif,
    statut,

    // Champs non fournis par le DTO — valeurs par défaut
    mat:                 '',
    email:               '',
    mdp:                 '',
    username:            dto.login,
    derniereConnexion:   '—',
    telephone:           undefined,
    service:             undefined,
  };
}




