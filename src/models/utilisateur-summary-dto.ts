export interface UtilisateurSummaryDto {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  mat: string;
  role: string;
  specialite: string | null;
  superviseurId: number | null;
  telephone?: string;  
  service?: string; 
}
