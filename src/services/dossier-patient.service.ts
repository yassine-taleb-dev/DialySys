import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DossierPatientDto } from '../models/dossier-patient-dto';
  import { DossierPatientRequestDto } from '../models/dossier-patient-request-dto';
import { environment } from '../environments/environment';
  @Injectable({
  providedIn: 'root'
})
export class DossierPatientService {
  
    private readonly api = `${environment.apiUrl}/dossiers`;

  constructor(private http: HttpClient) {}

  getByPatient(patientId: number): Observable<DossierPatientDto> {
    return this.http.get<DossierPatientDto>(`${this.api}/dossiers/${patientId}`);
  }

  getById(id: number): Observable<DossierPatientDto> {
    return this.http.get<DossierPatientDto>(`${this.api}/${id}`);
  }

  create(patientId: number, payload: DossierPatientRequestDto): Observable<DossierPatientDto> {
    return this.http.post<DossierPatientDto>(`${this.api}/patient/${patientId}`, payload);
  }

  update(patientId: number, payload: DossierPatientRequestDto): Observable<DossierPatientDto> {
    return this.http.put<DossierPatientDto>(`${this.api}/patient/${patientId}`, payload);
  }
}
