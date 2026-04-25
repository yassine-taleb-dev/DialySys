import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { RolePermissionsDto } from '../models/role-permissions-dto';

@Injectable({ providedIn: 'root' })
export class RolePermissionService {
  private readonly api = `${environment.apiUrl}/admin/role-permissions`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<RolePermissionsDto[]> {
    return this.http.get<RolePermissionsDto[]>(this.api);
  }

  update(roleName: string, payload: RolePermissionsDto): Observable<RolePermissionsDto> {
    return this.http.put<RolePermissionsDto>(`${this.api}/${roleName}`, payload);
  }
}
