import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { SeanceDto } from '../models/seance-dto';
import { SeanceRequestDto } from '../models/seance-request-dto';
import { SeanceUpdateRequestDto } from '../models/seance-update-request-dto';
import { environment } from '../environments/environment';
function todayLocalIso(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const j = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${j}`;
}

@Injectable({ providedIn: 'root' })
export class SeanceService {

  private readonly api = `${environment.apiUrl}/seances`;

  private cacheTodayKey = '';
  private cacheToday$: Observable<SeanceDto[]> | null = null;

  constructor(private http: HttpClient) {}

  invalidateCache(): void {
    this.cacheToday$ = null;
    this.cacheTodayKey = '';
  }

  getAll(): Observable<SeanceDto[]> {
    return this.http.get<SeanceDto[]>(this.api);
  }

  getToday(): Observable<SeanceDto[]> {
    const today = todayLocalIso();

    if (this.cacheTodayKey !== today || !this.cacheToday$) {
      this.cacheTodayKey = today;
      this.cacheToday$ = this.http
        .get<SeanceDto[]>(`${this.api}/date/${today}`)
        .pipe(shareReplay(1));
    }

    return this.cacheToday$;
  }

  getByPeriode(debut: string, fin: string): Observable<SeanceDto[]> {
    return this.http.get<SeanceDto[]>(`${this.api}/periode?debut=${debut}&fin=${fin}`);
  }

  getByPatient(patientId: number): Observable<SeanceDto[]> {
    return this.http.get<SeanceDto[]>(`${this.api}/patient/${patientId}`);
  }

  getMesSeances(): Observable<SeanceDto[]> {
    return this.http.get<SeanceDto[]>(`${this.api}/mes-seances`);
  }

  getById(id: number): Observable<SeanceDto> {
    return this.http.get<SeanceDto>(`${this.api}/${id}`);
  }

  create(payload: SeanceRequestDto): Observable<SeanceDto> {
    return this.http.post<SeanceDto>(this.api, payload).pipe(
      tap(() => this.invalidateCache())
    );
  }

  update(id: number, payload: SeanceUpdateRequestDto): Observable<SeanceDto> {
    return this.http.put<SeanceDto>(`${this.api}/${id}`, payload).pipe(
      tap(() => this.invalidateCache())
    );
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.api}/${id}`).pipe(
      tap(() => this.invalidateCache())
    );
  }
}
