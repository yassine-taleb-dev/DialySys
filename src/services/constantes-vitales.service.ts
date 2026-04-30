import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ConstantesVitalesDto } from '../models/constantes-vitales-dto';
import { ConstantesVitalesRequestDto } from '../models/constantes-vitales-request-dto';

@Injectable({ providedIn: 'root' })
export class ConstantesVitalesService {
  private readonly api = `${environment.apiUrl}/constantes-vitales`;

  constructor(private http: HttpClient) {}

  create(payload: ConstantesVitalesRequestDto): Observable<ConstantesVitalesDto> {
    return this.http.post<ConstantesVitalesDto>(this.api, payload);
  }

  update(id: number, payload: ConstantesVitalesRequestDto): Observable<ConstantesVitalesDto> {
    return this.http.put<ConstantesVitalesDto>(`${this.api}/${id}`, payload);
  }

  getMesSaisies(): Observable<ConstantesVitalesDto[]> {
    return this.http.get<ConstantesVitalesDto[]>(`${this.api}/mes-saisies`);
  }

  getByPatient(patientId: number): Observable<ConstantesVitalesDto[]> {
    return this.http.get<ConstantesVitalesDto[]>(`${this.api}/patient/${patientId}`);
  }
}
