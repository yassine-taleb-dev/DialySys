export interface ConstantesVitalesDto {
  id: number;
  tensionSys: number;
  tensionDia: number;
  poids: number;
  bpm: number;
  notes: string | null;
  date: string;
  saisieAt: string;
  seanceId: number | null;
}
