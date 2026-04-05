import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly API = 'http://localhost:8085/api/auth';

  constructor(private http: HttpClient) {}

  login(login: string, motDePasse: string): Observable<any> {
    return this.http.post(`${this.API}/login`, { login, motDePasse });
  }

  logout(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post(`${this.API}/logout`, {}, { headers });
  }

  // ✅ Cherche dans localStorage ET sessionStorage
  getToken(): string | null {
    return localStorage.getItem('token') ?? sessionStorage.getItem('token');
  }

  getUtilisateur(): any {
    const raw = localStorage.getItem('utilisateur')
              ?? sessionStorage.getItem('utilisateur');
    return raw ? JSON.parse(raw) : null;
  }

  getRole(): string {
    return this.getUtilisateur()?.role?.toUpperCase() ?? '';
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('utilisateur');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('utilisateur');
  }
}