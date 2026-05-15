import { PatientSummaryDto } from "./patient-summary-dto";
import { UtilisateurSummaryDto } from './utilisateur-summary-dto';
export interface SeanceDto {
  id: number;
  date: string;
  jourPlanifie?: number | null;
  creneau?: 'MATIN' | 'APRES_MIDI' | string | null;
  patient: PatientSummaryDto;
  utilisateur: UtilisateurSummaryDto;
  infirmier?: UtilisateurSummaryDto | null;
}
