export interface OrdonnanceRequestDto {
  patientId: number;
  utilisateurId: number;
  dossierPatientId?: number | null;
  medicaments: string;
  posologie: string;
  instructions?: string | null;
  dateEmission?: string | null;
  dateExpiration?: string | null;
  statut?: 'EN_ATTENTE' | 'VALIDEE' | 'ANNULEE' | null;
}
