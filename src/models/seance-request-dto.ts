export interface SeanceRequestDto {
  date: string;
  heureDebut: string;
  heureFin: string;
  machine: string;
  notes?: string | null;
  dureeHeures: number;
  patientId: number;
  utilisateurId: number;
}
