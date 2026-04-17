import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlerteDto } from '../models/alerte-dto';
import { AlerteRequestDto } from '../models/alerte-request-dto';
import { MessageResponseDto } from '../models/message-response-dto';
import { environment } from '../environments/environment';
@Injectable({ providedIn: 'root' })
@Injectable({ providedIn: 'root' })
export class AlerteService {

  private readonly api = `${environment.apiUrl}/alertes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AlerteDto[]> {
    return this.http.get<AlerteDto[]>(this.api);
  }

  getMesAlertes(username: string): Observable<AlerteDto[]> {
    return this.http.get<AlerteDto[]>(`${this.api}/mes-alertes/${username}`);
  }

  getByPatient(patientId: number): Observable<AlerteDto[]> {
    return this.http.get<AlerteDto[]>(`${this.api}/patient/${patientId}`);
  }

  create(payload: AlerteRequestDto): Observable<AlerteDto> {
    return this.http.post<AlerteDto>(this.api, payload);
  }

  marquerLue(id: number): Observable<AlerteDto> {
    return this.http.put<AlerteDto>(`${this.api}/${id}/lue`, {});
  }

  marquerToutesLues(): Observable<MessageResponseDto> {
    return this.http.put<MessageResponseDto>(`${this.api}/lue-tout`, {});
  }
}
