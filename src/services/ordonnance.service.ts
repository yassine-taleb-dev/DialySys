import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { OrdonnanceDto } from '../models/ordonnance-dto';
  import { OrdonnanceRequestDto } from '../models/ordonnance-request-dto';
import { environment } from '../environments/environment';
  @Injectable({ providedIn: 'root' })
export class OrdonnanceService {
  private cacheAll$: Observable<OrdonnanceDto[]> | null = null;
private readonly api = `${environment.apiUrl}/ordonnances`;
  constructor(private http: HttpClient) {}

  invalidateCache(): void {
    this.cacheAll$ = null;
  }

  getAll(): Observable<OrdonnanceDto[]> {
    if (!this.cacheAll$) {
      this.cacheAll$ = this.http.get<OrdonnanceDto[]>(this.api).pipe(shareReplay(1));
    }
    return this.cacheAll$;
  }

  getByPatient(patientId: number): Observable<OrdonnanceDto[]> {
    return this.http.get<OrdonnanceDto[]>(`${this.api}/patient/${patientId}`);
  }

  getByMedecin(utilisateurId: number): Observable<OrdonnanceDto[]> {
    return this.http.get<OrdonnanceDto[]>(`${this.api}/medecin/${utilisateurId}`);
  }

  getById(id: number): Observable<OrdonnanceDto> {
    return this.http.get<OrdonnanceDto>(`${this.api}/${id}`);
  }

  create(payload: OrdonnanceRequestDto): Observable<OrdonnanceDto> {
    return this.http.post<OrdonnanceDto>(this.api, payload).pipe(
      tap(() => this.invalidateCache())
    );
  }

  update(id: number, payload: Partial<OrdonnanceRequestDto>): Observable<OrdonnanceDto> {
    return this.http.put<OrdonnanceDto>(`${this.api}/${id}`, payload).pipe(
      tap(() => this.invalidateCache())
    );
  }

  updateStatut(id: number, statut: 'EN_ATTENTE' | 'VALIDEE' | 'ANNULEE'): Observable<OrdonnanceDto> {
    return this.http.put<OrdonnanceDto>(`${this.api}/${id}/statut`, { statut }).pipe(
      tap(() => this.invalidateCache())
    );
  }

  annuler(id: number): Observable<OrdonnanceDto> {
    return this.http.put<OrdonnanceDto>(`${this.api}/${id}/annuler`, {}).pipe(
      tap(() => this.invalidateCache())
    );
  }

  valider(id: number): Observable<OrdonnanceDto> {
    return this.http.put<OrdonnanceDto>(`${this.api}/${id}/valider`, {}).pipe(
      tap(() => this.invalidateCache())
    );
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.api}/${id}`).pipe(
      tap(() => this.invalidateCache())
    );
  }
}
