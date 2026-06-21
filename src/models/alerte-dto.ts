import { PatientSummaryDto } from './patient-summary-dto';

export interface AlerteDto {
  id: number;
  type: 'CRITIQUE' | 'IMPORTANT' | 'TENDANCE' | 'SEANCE' | 'ATTENTION' | 'INFO';
  message: string;
  dateCreation: string;
  lue: boolean;
  traitee: boolean;
  dateTraitement?: string | null;
  traitePar?: string | null;
  patient: PatientSummaryDto;
}