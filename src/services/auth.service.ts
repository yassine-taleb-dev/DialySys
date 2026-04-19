import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { LoginRequestDto } from '../models/login-request-dto';
import { LoginResponseDto } from '../models/login-response-dto'; 
import { RefreshTokenResponseDto } from '../models/refresh-token-response-dto';
import { Utilisateur } from '../models/utilisateur';
import { VerifyTokenResponseDto } from '../models/verify-token-response-dto'; 
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,private router: Router) {}

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

logout(): void {
    const token = this.getToken();

    if (!token) {
      // Pas de token en local → nettoyage direct
      this.clearSession();
      this.router.navigate(['/login']);
      return;
    }

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    // 1. Appel backend pour blacklister le token
    this.http.post<{ message: string }>(
      `${this.apiUrl}/auth/logout`,
      {},
      { headers }
    ).subscribe({
      next: () => {
        // 2. Nettoyage local après confirmation backend
        this.clearSession();
        this.router.navigate(['/login']);
      },
      error: () => {
        // 3. Même en cas d'erreur réseau → on vide quand même la session locale
        this.clearSession();
        this.router.navigate(['/login']);
      }
    });
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
