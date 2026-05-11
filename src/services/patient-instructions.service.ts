import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { PatientInstructionsDto } from '../models/patient-instructions-dto';
import { PatientInstructionsRequestDto } from '../models/patient-instructions-request-dto';

@Injectable({ providedIn: 'root' })
export class PatientInstructionsService {
  private readonly api = `${environment.apiUrl}/patient-instructions`;

  constructor(private http: HttpClient) {}

  getByPatient(patientId: number): Observable<PatientInstructionsDto> {
    return this.http.get<PatientInstructionsDto>(`${this.api}/patient/${patientId}`);
  }

  saveForPatient(patientId: number, payload: PatientInstructionsRequestDto): Observable<PatientInstructionsDto> {
    return this.http.put<PatientInstructionsDto>(`${this.api}/patient/${patientId}`, payload);
  }
}
