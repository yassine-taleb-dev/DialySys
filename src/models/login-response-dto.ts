import { Utilisateur } from "./utilisateur";

export interface LoginResponseDto {
  token: string;
  utilisateur: Utilisateur;
}
