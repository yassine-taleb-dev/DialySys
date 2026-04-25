import { DossierPatientDto } from './dossier-patient-dto';
import { UtilisateurSummaryDto } from './utilisateur-summary-dto';

export interface PatientDto {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  groupeSanguin: string;
  statut: string;
  cin: string | null;
  telephone: string | null;
  adresse: string | null;
  genre: string | null;
  medecinReferent: UtilisateurSummaryDto | null;
  dossierPatient: DossierPatientDto | null;
}
