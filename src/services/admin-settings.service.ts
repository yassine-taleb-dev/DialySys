import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AdminSettingsDto } from '../models/admin-settings-dto';

@Injectable({ providedIn: 'root' })
export class AdminSettingsService {
  private readonly api = `${environment.apiUrl}/admin/settings`;

  constructor(private http: HttpClient) {}

  get(): Observable<AdminSettingsDto> {
    return this.http.get<AdminSettingsDto>(this.api);
  }

  update(payload: AdminSettingsDto): Observable<AdminSettingsDto> {
    return this.http.put<AdminSettingsDto>(this.api, payload);
  }
}
