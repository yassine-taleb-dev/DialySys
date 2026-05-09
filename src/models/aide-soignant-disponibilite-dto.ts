import { HoraireTravailDto } from './horaire-travail-dto';
import { UtilisateurSummaryDto } from './utilisateur-summary-dto';

export interface AideSoignantDisponibiliteDto {
  aideSoignant: UtilisateurSummaryDto;
  horaires: HoraireTravailDto[];
}
