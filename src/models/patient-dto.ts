import { DossierPatientDto } from "./dossier-patient-dto";

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
  dossierPatient: DossierPatientDto | null;
}
