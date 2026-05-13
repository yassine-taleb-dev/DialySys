export interface ConstantesVitalesRequestDto {
  tensionSys: number;
  tensionDia: number;
  poids: number;
  bpm: number;
  notes: string;
  date: string;
  patientId: number;
  seanceId: number | null;
  aideSoignantId?: number | null;
}
