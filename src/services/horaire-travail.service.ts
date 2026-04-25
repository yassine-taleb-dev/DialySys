import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HoraireTravailDto } from '../models/horaire-travail-dto';
import { HoraireTravailRequestDto } from '../models/horaire-travail-request-dto';

@Injectable({ providedIn: 'root' })
export class HoraireTravailService {
  private readonly api = `${environment.apiUrl}/admin/horaires`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<HoraireTravailDto[]> {
    return this.http.get<HoraireTravailDto[]>(this.api);
  }

  create(payload: HoraireTravailRequestDto): Observable<HoraireTravailDto> {
    return this.http.post<HoraireTravailDto>(this.api, payload);
  }

  update(id: number, payload: HoraireTravailRequestDto): Observable<HoraireTravailDto> {
    return this.http.put<HoraireTravailDto>(`${this.api}/${id}`, payload);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.api}/${id}`);
  }
}
