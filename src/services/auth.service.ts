import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

export interface LoginRequestDto {
  login: string;
  motDePasse: string;
}

export interface UtilisateurDto {
  id: number;
  login: string;
  role: string;
  nom: string;
  prenom: string;
  dateCreation: string;
  actif: boolean;
}

export interface LoginResponseDto {
  token: string;
  utilisateur: UtilisateurDto;
}

const TOKEN_KEY = 'dialysys_token';
const USER_KEY  = 'dialysys_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(payload: LoginRequestDto) {
    return this.http.post<LoginResponseDto>(`${this.apiUrl}/auth/login`, payload);
  }

  saveSession(response: LoginResponseDto, remember: boolean): void {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(TOKEN_KEY, response.token);
    storage.setItem(USER_KEY, JSON.stringify({
      role:   response.utilisateur.role,
      nom:    response.utilisateur.nom,
      prenom: response.utilisateur.prenom,
      login:  response.utilisateur.login,
    }));
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY);
  }

  getUser(): { role: string; nom: string; prenom: string; login: string } | null {
    const raw = localStorage.getItem(USER_KEY) ?? sessionStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
  }
}

