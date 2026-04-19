import { PatientSummaryDto } from './patient-summary-dto';

export interface AlerteDto {
  id: number;
  type: 'CRITIQUE' | 'ATTENTION' | 'INFO';
  message: string;
  dateCreation: string;   // LocalDateTime → string ISO en JSON
  lue: boolean;
  patient: PatientSummaryDto;
}