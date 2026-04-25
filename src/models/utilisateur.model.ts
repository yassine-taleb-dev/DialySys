export interface UtilisateurResponseDto {
  id: number;
  login: string;
  username: string;
  nom: string;
  prenom: string;
  email: string;
  mat: string;
  role: string;
  specialite: string | null;
  superviseurId: number | null;
  dateCreation: string;
  actif: boolean;
  telephone?: string;  
  service?: string;   
}
