import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }
interface Notif  { icon: string; text: string; time: string; type: string; read: boolean; }

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {
  constructor(private router: Router) {}

  // ── Navigation ──
  activeSection = 'dashboard';
  setSection(s: string): void {
    const dev: Record<string,string> = {
      historique: 'Historique complet', analyses: 'Mes Analyses', constantes: 'Mes Constantes', medecin: 'Mon Médecin',
    };
    if (dev[s]) { this.showToast(`${dev[s]} — section en développement`, 'info'); return; }
    this.activeSection = s;
    this.showNotifPanel = false;
  }

  // ── Session detail modal ──
  showSessionModal = false;
  sessionModalTitle = '';
  openSessionModal(label: string): void {
    this.sessionModalTitle = label;
    this.showSessionModal = true;
    this.showNotifPanel = false;
  }

  // ── Notifications ──
  showNotifPanel = false;
  notifications: Notif[] = [
    { icon: 'event', text: 'Séance demain à 08:00 — Salle A Machine M-03', time: 'il y a 30min', type: 'info', read: false },
    { icon: 'warning_amber', text: 'Créatinine élevée — Résultat à consulter', time: 'il y a 2h', type: 'warn', read: false },
    { icon: 'check_circle',  text: 'Ordonnance EPO renouvelée par Dr. Benali', time: 'il y a 1j', type: 'ok',   read: true  },
  ];
  get unreadCount() { return this.notifications.filter(n => !n.read).length; }
  toggleNotifPanel(): void { this.showNotifPanel = !this.showNotifPanel; }
  markAllRead(): void { this.notifications.forEach(n => n.read = true); this.showToast('Notifications marquées comme lues', 'info'); }
  markRead(n: Notif): void { n.read = true; }

  // ── Actions ──
  ouvrirCalendrier(): void { this.showToast('Calendrier des séances affiché', 'info'); }
  exporterPDF(): void     { this.showToast('Export PDF de l\'historique en cours…', 'info'); }
  voirHistorique(): void  { this.showToast('Historique complet — section en développement', 'info'); }

  // ── Toast ──
  private tid = 0;
  toasts: Toast[] = [];
  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }
  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }
  toastIcon(type: string): string {
    return ({ success: 'check_circle', warning: 'warning', error: 'error', info: 'info' } as Record<string,string>)[type] ?? 'info';
  }

  logout(): void { this.router.navigate(['/login']); }
}
