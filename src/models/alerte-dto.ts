import { PatientSummaryDto } from "./patient-summary-dto";

export interface AlerteDto {
  id: number;
  type: string;
  message: string;
  dateCreation: string;
  lue: boolean;
  patient: PatientSummaryDto;
}
