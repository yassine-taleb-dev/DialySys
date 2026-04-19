import { PatientSummaryDto } from "./patient-summary-dto";

export interface DossierPatientDto {
  id: number;
  dateCreation: string;
  tensionArterielle: string | null;
  temperature: number | null;
  glycemieCapillaire: number | null;
  saturation: number | null;
  frequenceCardiaque: number | null;
  frequenceRespiratoire: number | null;
  antecedents: string | null;
  pathologie: string | null;
  debutDialyse: string | null;
  poids: string | null;
  taille: string | null;
  creatinine: string | null;
  creatinineClass: string | null;
  uree: string | null;
  hemoglobine: string | null;
  prochaine: string | null;
  patient: PatientSummaryDto | null;
}
