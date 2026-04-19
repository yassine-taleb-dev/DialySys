import { PatientSummaryDto } from "./patient-summary-dto";
import { UtilisateurSummaryDto } from "./utilisateur-summary-dto";

export interface OrdonnanceDto {
  id: number;
  dateEmission: string;
  dateExpiration: string;
  medicaments: string;
  posologie: string;
  instructions: string | null;
  statut: 'EN_ATTENTE' | 'VALIDEE' | 'ANNULEE';
  utilisateur: UtilisateurSummaryDto;
  patient: PatientSummaryDto;
  dossierPatientId: number | null;
}
