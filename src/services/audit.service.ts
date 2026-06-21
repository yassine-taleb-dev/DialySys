import { Injectable } from '@angular/core';

export type AuditAction = 'CONNEXION' | 'CREATION' | 'MODIFICATION' | 'SUPPRESSION' | 'EXPORT' | 'DECONNEXION';

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

@Injectable({ providedIn: 'root' })
export class AuditService {
  private readonly KEY = 'dsys_audit';
  private seq = Date.now();

  log(
    utilisateur: string,
    role: string,
    action: AuditAction,
    entite: string,
    details: string,
    statut: 'success' | 'error' = 'success'
  ): void {
    const entries = this.getAll();
    entries.unshift({
      id: ++this.seq,
      timestamp: new Date().toISOString(),
      utilisateur,
      role,
      action,
      entite,
      details,
      statut,
    });
    try {
      localStorage.setItem(this.KEY, JSON.stringify(entries.slice(0, 500)));
    } catch {}
  }

  getAll(): AuditEntry[] {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  clear(): void {
    localStorage.removeItem(this.KEY);
  }
}
