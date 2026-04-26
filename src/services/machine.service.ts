import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { MachineDto } from '../models/machine-dto';

@Injectable({ providedIn: 'root' })
export class MachineService {
  private readonly api = `${environment.apiUrl}/machines`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<MachineDto[]> {
    return this.http.get<MachineDto[]>(this.api);
  }

  getAvailable(date: string, heureDebut: string, heureFin: string, excludeSeanceId?: number): Observable<MachineDto[]> {
    let params = new HttpParams()
      .set('date', date)
      .set('heureDebut', this.ensureTimeWithSeconds(heureDebut))
      .set('heureFin', this.ensureTimeWithSeconds(heureFin));

    if (excludeSeanceId != null) {
      params = params.set('excludeSeanceId', excludeSeanceId);
    }

    return this.http.get<MachineDto[]>(`${this.api}/disponibles`, { params });
  }

  private ensureTimeWithSeconds(value: string): string {
    return value?.length === 5 ? `${value}:00` : value;
  }
}
