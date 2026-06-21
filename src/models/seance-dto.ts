import { PatientSummaryDto } from "./patient-summary-dto";
import { UtilisateurSummaryDto } from './utilisateur-summary-dto';
export interface SeanceDto {
  id: number;
  date: string;
  jourPlanifie?: number | null;
  creneau?: 'MATIN' | 'APRES_MIDI' | 'SOIR' | string | null;
  statut?: 'PLANIFIEE' | 'EN_COURS' | 'TERMINEE' | string | null;
  heureDebutEffective?: string | null;
  heureFinEffective?: string | null;
  dureeMinutes?: number | null;
  tempsRestantMinutes?: number | null;
  constantesSaisies?: boolean;
  patient: PatientSummaryDto;
  utilisateur: UtilisateurSummaryDto;
  infirmier?: UtilisateurSummaryDto | null;
}
