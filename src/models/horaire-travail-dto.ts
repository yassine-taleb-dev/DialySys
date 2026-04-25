export interface HoraireTravailDto {
  id: number;
  utilisateurId: number;
  utilisateurNom: string;
  role: string;
  jours: string[];
  heureDebut: string;
  heureFin: string;
}
