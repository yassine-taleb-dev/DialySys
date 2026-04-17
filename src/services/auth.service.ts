import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { LoginRequestDto } from '../models/login-request-dto';
import { LoginResponseDto } from '../models/login-response-dto'; 
import { RefreshTokenResponseDto } from '../models/refresh-token-response-dto';
import { Utilisateur } from '../models/utilisateur';
import { VerifyTokenResponseDto } from '../models/verify-token-response-dto'; 
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(login: string, motDePasse: string, rememberMe = false): Observable<LoginResponseDto> {
    const body: LoginRequestDto = { login, motDePasse };

    return this.http.post<LoginResponseDto>(`${this.apiUrl}/auth/login`, body).pipe(
      tap(response => {
        if (response?.token) {
          this.clearSession();
          const storage = rememberMe ? localStorage : sessionStorage;
          storage.setItem('token', response.token);
          storage.setItem('utilisateur', JSON.stringify(response.utilisateur));
        }
      })
    );
  }

  logout(): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/auth/logout`, {}).pipe(
      tap({
        next: () => this.clearSession(),
        error: () => this.clearSession(),
      })
    );
  }

  verifyToken(): Observable<VerifyTokenResponseDto> {
    return this.http.get<VerifyTokenResponseDto>(`${this.apiUrl}/auth/verify`);
  }

  refreshToken(): Observable<RefreshTokenResponseDto> {
    return this.http.post<RefreshTokenResponseDto>(`${this.apiUrl}/auth/refresh`, {});
  }

  getToken(): string | null {
    return localStorage.getItem('token') ?? sessionStorage.getItem('token');
  }

  getUtilisateur(): Utilisateur | null {
    const raw = localStorage.getItem('utilisateur') ?? sessionStorage.getItem('utilisateur');
    if (!raw) return null;

    try {
      return JSON.parse(raw) as Utilisateur;
    } catch {
      this.clearSession();
      return null;
    }
  }

  getRole(): string {
    const role = this.getUtilisateur()?.role ?? '';
    return String(role).toUpperCase().replace(/^ROLE_/, '');
  }

  get utilisateurId(): number {
    return this.getUtilisateur()?.id ?? 0;
  }

  getCurrentUserId(): number {
    return this.utilisateurId;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  clearSession(): void {
    ['token', 'utilisateur'].forEach(key => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
  }
}
