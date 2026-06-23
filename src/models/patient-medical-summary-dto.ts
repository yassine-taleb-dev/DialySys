import { AlerteDto } from './alerte-dto';
import { ConstantesVitalesDto } from './constantes-vitales-dto';
import { OrdonnanceDto } from './ordonnance-dto';
import { PatientSummaryDto } from './patient-summary-dto';
import { SeanceDto } from './seance-dto';

export interface PatientRiskDto {
  score: number;
  niveau: 'FAIBLE' | 'MOYEN' | 'ELEVE' | string;
  facteurs: string[];
}

export interface PatientMedicalSummaryDto {
  patient: PatientSummaryDto;
  resume: string;
  risque: PatientRiskDto;
  dernieresConstantes: ConstantesVitalesDto | null;
  alertesActives: AlerteDto[];
  ordonnancesRecentes: OrdonnanceDto[];
  seancesRecentes: SeanceDto[];
}
