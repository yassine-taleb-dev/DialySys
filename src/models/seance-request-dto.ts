export interface SeanceRequestDto {
  date: string;
  heureDebut: string;
  heureFin: string;
  patientId: number;
  utilisateurId?: number | null;
  infirmierId?: number | null;
}
