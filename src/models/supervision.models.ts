import { SeanceDto } from './seance-dto';
import { UtilisateurSummaryDto } from './utilisateur-summary-dto';

export interface InfirmierChargeDto {
  infirmier: UtilisateurSummaryDto;
  nombreSeancesCetteSemaine: number;
}

export interface InfirmierDisponibiliteDto {
  infirmier: UtilisateurSummaryDto;
  disponible: boolean;
  nombreSeancesSurCreneau: number;
}

export interface ReaffectationSeancesRequestDto {
  infirmierAbsentId: number;
  infirmierRemplacantId: number;
  debut?: string | null;
  fin?: string | null;
}

export interface ReaffectationSeancesResponseDto {
  nombreSeancesReaffectees: number;
  seances: SeanceDto[];
}

export interface SupervisionDashboardDto {
  totalPatients: number;
  totalSeancesAujourdhui: number;
  seancesEnCours: number;
  seancesTermineesAujourdhui: number;
  seancesSansInfirmier: number;
  alertesActives: number;
  constantesManquantesAujourdhui: number;
  tauxCompletionAujourdhui: number;
}

export interface TauxCompletionDto {
  totalSeances: number;
  seancesTerminees: number;
  tauxCompletion: number;
}
