import { AppUser } from '../app/pages/admin/admin.component';

export interface UtilisateurResponseDto {
  id: number;
  login: string;
  role: string;
  nom: string;
  prenom: string;
  dateCreation: string;
  actif: boolean;
}

export function mapUtilisateurToAppUser(dto: UtilisateurResponseDto): AppUser {
  return {
    id:                dto.id,
    login:             dto.login,
    username:          dto.login,
    mat:               '',
    role:              dto.role.toLowerCase().replace('_', '-') as AppUser['role'],
    nom:               dto.nom,
    prenom:            dto.prenom,
    email:             '',
    mdp:               '********',
    dateCreation:      dto.dateCreation,
    actif:             dto.actif,
    statut:            dto.actif ? 'actif' : 'inactif',
    derniereConnexion: '',
  };
}
