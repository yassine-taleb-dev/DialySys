import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { SeanceDto } from '../models/seance-dto';
import { UtilisateurSummaryDto } from '../models/utilisateur-summary-dto';
import {
  InfirmierChargeDto,
  InfirmierDisponibiliteDto,
  ReaffectationSeancesRequestDto,
  ReaffectationSeancesResponseDto,
  SupervisionDashboardDto,
  TauxCompletionDto,
} from '../models/supervision.models';

@Injectable({ providedIn: 'root' })
export class SupervisionService {
  private readonly api = `${environment.apiUrl}/supervision`;

  constructor(private http: HttpClient) {}

  getInfirmiers(): Observable<UtilisateurSummaryDto[]> {
    return this.http.get<UtilisateurSummaryDto[]>(`${this.api}/infirmiers`);
  }

  getChargeHebdomadaire(date?: string): Observable<InfirmierChargeDto[]> {
    const params = date ? new HttpParams().set('date', date) : undefined;
    return this.http.get<InfirmierChargeDto[]>(`${this.api}/infirmiers/charge`, { params });
  }

  getDisponibilites(date: string, creneau: string): Observable<InfirmierDisponibiliteDto[]> {
    const params = new HttpParams().set('date', date).set('creneau', creneau);
    return this.http.get<InfirmierDisponibiliteDto[]>(`${this.api}/infirmiers/disponibilites`, { params });
  }

  reaffecterSeances(payload: ReaffectationSeancesRequestDto): Observable<ReaffectationSeancesResponseDto> {
    return this.http.put<ReaffectationSeancesResponseDto>(`${this.api}/seances/reaffectation`, payload);
  }

  getPlanning(debut?: string, fin?: string, creneau?: string): Observable<SeanceDto[]> {
    let params = new HttpParams();
    if (debut) params = params.set('debut', debut);
    if (fin) params = params.set('fin', fin);
    if (creneau) params = params.set('creneau', creneau);
    return this.http.get<SeanceDto[]>(`${this.api}/planning`, { params });
  }

  getSeancesSansInfirmier(debut?: string, fin?: string): Observable<SeanceDto[]> {
    let params = new HttpParams();
    if (debut) params = params.set('debut', debut);
    if (fin) params = params.set('fin', fin);
    return this.http.get<SeanceDto[]>(`${this.api}/seances/sans-infirmier`, { params });
  }

  demarrerSeance(id: number, heureFinPrevue?: string, dureeMinutes?: number): Observable<SeanceDto> {
    const body: Record<string, unknown> = {};
    if (heureFinPrevue) body['heureFinPrevue'] = heureFinPrevue;
    if (dureeMinutes)   body['dureeMinutes']   = dureeMinutes;
    return this.http.put<SeanceDto>(`${this.api}/seances/${id}/demarrer`, body);
  }

  terminerSeance(id: number): Observable<SeanceDto> {
    return this.http.put<SeanceDto>(`${this.api}/seances/${id}/terminer`, {});
  }

  getDashboard(): Observable<SupervisionDashboardDto> {
    return this.http.get<SupervisionDashboardDto>(`${this.api}/dashboard`);
  }

  getTauxCompletion(debut?: string, fin?: string): Observable<TauxCompletionDto> {
    let params = new HttpParams();
    if (debut) params = params.set('debut', debut);
    if (fin) params = params.set('fin', fin);
    return this.http.get<TauxCompletionDto>(`${this.api}/stats/completion`, { params });
  }

  getConstantesManquantes(date?: string): Observable<SeanceDto[]> {
    const params = date ? new HttpParams().set('date', date) : undefined;
    return this.http.get<SeanceDto[]>(`${this.api}/constantes/manquantes`, { params });
  }
}
