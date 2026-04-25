import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { UtilisateurSummaryDto } from '../models/utilisateur-summary-dto';
import { UtilisateurResponseDto } from '../models/utilisateur.model';

export interface UtilisateurCreateDto {
  login: string;
  username: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  email: string;
  mat: string;
  role: string;
  specialite?: string | null;
  superviseurId?: number | null;
 telephone?: string | null; 
  service?: string | null;     
}

export interface UtilisateurUpdateDto {
  login?: string;
  username?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  mat?: string;
  role?: string;
  specialite?: string | null;
  superviseurId?: number | null;
  actif?: boolean;
 telephone?: string | null; 
  service?: string | null;
  
}

@Injectable({ providedIn: 'root' })
export class UtilisateurService {
  private readonly api = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<UtilisateurResponseDto[]> {
    return this.http.get<UtilisateurResponseDto[]>(`${this.api}/utilisateurs`);
  }

  getByRole(roleName: string): Observable<UtilisateurSummaryDto[]> {
    return this.http.get<UtilisateurSummaryDto[]>(`${this.api}/utilisateurs/role/${roleName}`);
  }

  create(payload: UtilisateurCreateDto): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.api}/auth/register`, payload);
  }

  update(id: number, payload: UtilisateurUpdateDto): Observable<UtilisateurResponseDto> {
    return this.http.put<UtilisateurResponseDto>(`${this.api}/utilisateurs/${id}`, payload);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.api}/utilisateurs/${id}`);
  }

  toggleActif(id: number): Observable<UtilisateurResponseDto> {
    return this.http.put<UtilisateurResponseDto>(`${this.api}/utilisateurs/${id}/toggle-actif`, {});
  }

  resetPassword(loginOuEmail: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.api}/auth/reset-password`, { email: loginOuEmail });
  }
}
