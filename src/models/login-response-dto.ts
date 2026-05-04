import { Utilisateur } from "./utilisateur";

export interface LoginResponseDto {
  token: string | null;
  utilisateur: Utilisateur | null;
  requiresTwoFactor?: boolean;
  message?: string;
}
