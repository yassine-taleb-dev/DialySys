export interface PlanificationSeancesRequestDto {
  patientId: number;
  jours: number[];
  creneaux: Array<'MATIN' | 'APRES_MIDI'>;
  dateDebut?: string | null;
  nombreSemaines?: number | null;
  utilisateurId?: number | null;
}
