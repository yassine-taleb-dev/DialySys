import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';

export type AuditAction = 'CONNEXION' | 'CREATION' | 'MODIFICATION' | 'SUPPRESSION' | 'EXPORT' | 'DECONNEXION' | 'LECTURE';

export interface AuditEntry {
  id: number;
  timestamp: string;
  utilisateur: string;
  role: string;
  action: AuditAction;
  entite: string;
  details: string;
  statut: 'success' | 'error';
}

interface AdminAuditLogDto {
  id: number;
  actorLogin: string;
  actorRole?: string | null;
  method: string;
  path: string;
  status: number;
  ipAddress?: string | null;
  userAgent?: string | null;
  action?: AuditAction | string | null;
  entite?: string | null;
  details?: string | null;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class AuditService {
  private readonly api = `${environment.apiUrl}/admin/settings/journal-activites`;

  constructor(private http: HttpClient) {}

  log(
    utilisateur: string,
    role: string,
    action: AuditAction,
    entite: string,
    details: string,
    statut: 'success' | 'error' = 'success'
  ): Observable<AuditEntry> {
    return this.http
      .post<AdminAuditLogDto>(this.api, { utilisateur, role, action, entite, details, statut })
      .pipe(map(log => this.toAuditEntry(log)));
  }

  getAll(): Observable<AuditEntry[]> {
    return this.http.get<AdminAuditLogDto[]>(this.api).pipe(
      map(logs => logs.map(log => this.toAuditEntry(log)))
    );
  }

  clear(): void {
    // Le journal vient de la base de données et n'est pas supprimé côté frontend.
  }

  private toAuditEntry(log: AdminAuditLogDto): AuditEntry {
    return {
      id: log.id,
      timestamp: log.createdAt,
      utilisateur: log.actorLogin || '—',
      role: this.normalizeRole(log.actorRole, log.actorLogin),
      action: this.normalizeAction(log.action, log.method),
      entite: log.entite || this.entityFromPath(log.path),
      details: this.humanReadableDetails(log),
      statut: log.status >= 400 ? 'error' : 'success',
    };
  }

  private actionFromMethod(method: string): AuditAction {
    switch ((method || '').toUpperCase()) {
      case 'POST': return 'CREATION';
      case 'PUT':
      case 'PATCH': return 'MODIFICATION';
      case 'DELETE': return 'SUPPRESSION';
      case 'GET': return 'LECTURE';
      default: return 'MODIFICATION';
    }
  }

  private normalizeAction(action: string | null | undefined, method: string): AuditAction {
    const value = String(action || '').toUpperCase();
    if (['CONNEXION', 'CREATION', 'MODIFICATION', 'SUPPRESSION', 'EXPORT', 'DECONNEXION', 'LECTURE'].includes(value)) {
      return value as AuditAction;
    }
    return this.actionFromMethod(method);
  }

  private normalizeRole(role: string | null | undefined, actorLogin: string): string {
    const value = String(role || '').replace(/^ROLE_/i, '').toUpperCase();
    if (['ADMIN', 'MEDECIN', 'INFIRMIER', 'INFIRMIER_MAJEUR', 'PATIENT'].includes(value)) {
      return value;
    }
    return actorLogin?.toLowerCase().includes('admin') ? 'ADMIN' : 'UTILISATEUR';
  }

  private entityFromPath(path: string): string {
    const cleanPath = (path || '').split('?')[0];
    if (cleanPath.includes('/utilisateurs')) return 'Utilisateurs';
    if (cleanPath.includes('/patients')) return 'Patients';
    if (cleanPath.includes('/seances')) return 'Séances';
    if (cleanPath.includes('/roles') || cleanPath.includes('/role-permissions')) return 'Rôles';
    if (cleanPath.includes('/admin/settings')) return 'Paramètres';
    return 'Administration';
  }

  private detailsFromLog(log: AdminAuditLogDto): string {
    const method = (log.method || '').toUpperCase();
    const path = (log.path || '').split('?')[0];
    if (method === 'POST' && path.endsWith('/seances/planification')) return 'Séance(s) planifiée(s)';
    if (method === 'PUT' && /\/seances\/\d+\/demarrer$/.test(path)) return 'Séance démarrée';
    if (method === 'PUT' && /\/seances\/\d+\/terminer$/.test(path)) return 'Séance terminée';
    if (method === 'POST' && path.endsWith('/patients')) return 'Nouveau patient';
    if (method === 'POST' && path.endsWith('/utilisateurs')) return 'Nouveau compte utilisateur';
    if (method === 'PUT' && path.includes('/patients/')) return 'Patient modifié';
    if (method === 'PUT' && path.includes('/seances/')) return 'Séance modifiée';
    if (method === 'PUT' && path.includes('/utilisateurs/')) return 'Profil utilisateur modifié';
    if (method === 'DELETE' && path.includes('/patients/')) return 'Patient supprimé';
    if (method === 'DELETE' && path.includes('/seances/')) return 'Séance supprimée';
    if (method === 'DELETE' && path.includes('/utilisateurs/')) return 'Utilisateur supprimé';
    return 'Action enregistrée';
  }

  private humanReadableDetails(log: AdminAuditLogDto): string {
    const raw = String(log.details || '').trim();
    if (!raw || /^[A-Z]+\s+\/api\//.test(raw)) {
      return this.detailsFromLog(log);
    }
    return raw;
  }
}
