import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlerteDto } from '../models/alerte-dto';
import { AlerteRequestDto } from '../models/alerte-request-dto';
import { MessageResponseDto } from '../models/message-response-dto';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })  // ← suppression du doublon
export class AlerteService {

  private readonly api = `${environment.apiUrl}/alertes`;

  constructor(private http: HttpClient) {}

  // ── GET /api/alertes → toutes les alertes non lues ──────────────
  getAll(): Observable<AlerteDto[]> {
    return this.http.get<AlerteDto[]>(this.api);
  }

  // ── GET /api/alertes/mes-alertes/{username} ──────────────────────
  getMesAlertes(username: string): Observable<AlerteDto[]> {
    return this.http.get<AlerteDto[]>(`${this.api}/mes-alertes/${username}`);
  }

  // ── GET /api/alertes/patient/{patientId} ────────────────────────
  getByPatient(patientId: number): Observable<AlerteDto[]> {
    return this.http.get<AlerteDto[]>(`${this.api}/patient/${patientId}`);
  }

  // ── POST /api/alertes → création manuelle (admin) ───────────────
  create(payload: AlerteRequestDto): Observable<AlerteDto> {
    return this.http.post<AlerteDto>(this.api, payload);
  }

  // ── PUT /api/alertes/{id}/lue ────────────────────────────────────
  marquerLue(id: number): Observable<AlerteDto> {
    return this.http.put<AlerteDto>(`${this.api}/${id}/lue`, {});
  }

  // ── PUT /api/alertes/lue-tout ────────────────────────────────────
  marquerToutesLues(): Observable<MessageResponseDto> {
    return this.http.put<MessageResponseDto>(`${this.api}/lue-tout`, {});
  }
}