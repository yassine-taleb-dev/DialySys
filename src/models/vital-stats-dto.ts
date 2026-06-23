import { ConstantesVitalesDto } from './constantes-vitales-dto';

export interface VitalTrendPointDto {
  id: number;
  date: string;
  tensionSys: number;
  tensionDia: number;
  poids: number;
  bpm: number;
}

export interface VitalStatsDto {
  patientId: number;
  totalMesures: number;
  tensionSysMoyenne: number | null;
  tensionDiaMoyenne: number | null;
  bpmMoyen: number | null;
  poidsMoyen: number | null;
  derniereMesure: ConstantesVitalesDto | null;
  evolution: VitalTrendPointDto[];
}
