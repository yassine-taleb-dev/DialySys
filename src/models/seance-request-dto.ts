export interface SeanceRequestDto {
  date: string;
  heureDebut: string;
  heureFin: string;
  machine?: string | null;
  notes?: string | null;
  dureeHeures: number;
  patientId: number;
  utilisateurId?: number | null;
  aideSoignantId?: number | null;
}
