export interface VerifyTokenResponseDto {
  message: string;
  login: string | null;
  role: string | null;
  valid: boolean;
  blacklisted?: boolean | null;
}
