export interface LoginRequestDto {
  login: string;
  motDePasse: string;
  twoFactorCode?: string;
}
