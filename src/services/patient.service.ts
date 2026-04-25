import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { PatientDto } from '../models/patient-dto';
import { UtilisateurSummaryDto } from '../models/utilisateur-summary-dto';
import { environment } from '../environments/environment';

export interface PatientRequestDto {
  nom: string;
  prenom: string;
  dateNaissance: string;
  groupeSanguin: string;
  statut: string;
  cin?: string | null;
  telephone?: string | null;
  adresse?: string | null;
  genre?: string | null;
}

@Injectable({ providedIn: 'root' })
export class PatientService {
  private readonly apiUrl = `${environment.apiUrl}/patients`;
  private cacheAll$: Observable<PatientDto[]> | null = null;

  constructor(private http: HttpClient) {}

  invalidateCache(): void {
    this.cacheAll$ = null;
  }

  getAll(): Observable<PatientDto[]> {
    if (!this.cacheAll$) {
      this.cacheAll$ = this.http.get<PatientDto[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cacheAll$;
  }

  getById(id: number): Observable<PatientDto> {
    return this.http.get<PatientDto>(`${this.apiUrl}/${id}`);
  }

  create(payload: PatientRequestDto): Observable<PatientDto> {
    return this.http.post<PatientDto>(this.apiUrl, payload);
  }

  update(id: number, payload: PatientRequestDto): Observable<PatientDto> {
    return this.http.put<PatientDto>(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  getEquipe(patientId: number): Observable<UtilisateurSummaryDto[]> {
    return this.http.get<UtilisateurSummaryDto[]>(`${this.apiUrl}/${patientId}/equipe`);
  }

  addToEquipe(patientId: number, utilisateurId: number): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/${patientId}/equipe/${utilisateurId}`, {});
  }

  removeFromEquipe(patientId: number, utilisateurId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${patientId}/equipe/${utilisateurId}`);
  }
}
