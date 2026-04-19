import { PatientSummaryDto } from "./patient-summary-dto";
import { UtilisateurSummaryDto } from './utilisateur-summary-dto';
export interface SeanceDto {
  id: number;
  date: string;
  heureDebut: string;
  heureFin: string;
  statut: string;
  machine: string | null;
  notes: string | null;
  dureeHeures: number;
  patient: PatientSummaryDto;
  utilisateur: UtilisateurSummaryDto;
}
