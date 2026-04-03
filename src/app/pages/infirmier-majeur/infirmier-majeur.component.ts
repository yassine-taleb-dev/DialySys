import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Session {
  heure: string; patientInit: string; patientNom: string;
  infirmier: string; machine: string; duree: string;
  statusClass: string; statusLabel: string;
}
interface StockItem { icon: string; nom: string; detail: string; statusClass: string; ordered: boolean; }
interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }
interface Notif  { icon: string; text: string; time: string; type: string; read: boolean; }

@Component({
  selector: 'app-infirmier-majeur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier-majeur.component.html',
  styleUrl: './infirmier-majeur.component.scss'
})
export class InfirmierMajeurComponent {
  constructor(private router: Router) {}

  // ── Navigation ──
  activeSection = 'dashboard';
  setSection(s: string): void {
    if (s === 'planning') { this.router.navigate(['/planning']); return; }
    const dev: Record<string,string> = { monitoring: 'Monitoring Global', rapports: 'Rapports & Stats', stocks: 'Stocks & Consommables' };
    if (dev[s]) { this.showToast(`${dev[s]} — section en développement`, 'info'); return; }
    this.activeSection = s;
    this.showNotifPanel = false;
  }

  // ── Sessions ──
  searchQuery = '';
  sessions: Session[] = [
    { heure: '08:00', patientInit: 'AK', patientNom: 'Alaoui Khalid',      infirmier: 'Inf. N. Tazi',     machine: 'M-03', duree: '4h',   statusClass: 'ok',     statusLabel: 'Terminé'   },
    { heure: '09:00', patientInit: 'ME', patientNom: 'Moussaoui H.',        infirmier: 'Inf. A. Haddad',   machine: 'M-02', duree: '4h',   statusClass: 'warn',   statusLabel: 'Alerte PA' },
    { heure: '09:30', patientInit: 'OB', patientNom: 'Ouali Badreddine',    infirmier: 'Inf. N. Tazi',     machine: 'M-05', duree: '4h',   statusClass: 'info',   statusLabel: 'En cours'  },
    { heure: '10:30', patientInit: 'SB', patientNom: 'Saidi Bouchra',       infirmier: 'Inf. L. Mansouri', machine: 'M-07', duree: '4h',   statusClass: 'info',   statusLabel: 'En cours'  },
    { heure: '14:00', patientInit: 'FZ', patientNom: 'Filali Zineb',        infirmier: 'Inf. R. Berrada',  machine: 'M-09', duree: '3.5h', statusClass: 'purple', statusLabel: 'Planifiée' },
  ];

  get filteredSessions(): Session[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return this.sessions;
    return this.sessions.filter(s =>
      s.patientNom.toLowerCase().includes(q) ||
      s.infirmier.toLowerCase().includes(q) ||
      s.machine.toLowerCase().includes(q)
    );
  }

  selectedSession: Session | null = null;
  showSessionModal = false;
  openSession(s: Session): void { this.selectedSession = s; this.showSessionModal = true; this.showNotifPanel = false; }
  closeSession(): void { this.showSessionModal = false; this.selectedSession = null; }

  // ── Nouvelle Séance modal ──
  showNouvelleSeanceModal = false;
  newSeance = { patient: '', infirmier: '', machine: '', heure: '', duree: '4h' };

  ajouterSeance(): void {
    if (!this.newSeance.patient.trim() || !this.newSeance.heure) {
      this.showToast('Patient et heure sont obligatoires', 'warning'); return;
    }
    this.sessions.push({
      heure: this.newSeance.heure,
      patientInit: this.newSeance.patient.slice(0, 2).toUpperCase(),
      patientNom: this.newSeance.patient,
      infirmier: this.newSeance.infirmier || 'À assigner',
      machine: this.newSeance.machine || 'À assigner',
      duree: this.newSeance.duree,
      statusClass: 'purple', statusLabel: 'Planifiée',
    });
    this.sessions.sort((a, b) => a.heure.localeCompare(b.heure));
    this.newSeance = { patient: '', infirmier: '', machine: '', heure: '', duree: '4h' };
    this.showNouvelleSeanceModal = false;
    this.showToast('Séance ajoutée au planning', 'success');
  }

  // ── Stocks ──
  stocks: StockItem[] = [
    { icon: 'inventory_2', nom: 'Bicarbonate 8.4% — 500mL', detail: 'Stock: 12 flacons · Seuil: 20', statusClass: 'warn', ordered: false },
    { icon: 'inventory_2', nom: 'Dialyseurs FX80',            detail: 'Stock: 8 unités · Seuil: 15',  statusClass: 'warn', ordered: false },
    { icon: 'inventory_2', nom: 'Lignes artérielles',         detail: 'Stock: 45 unités · OK',         statusClass: 'ok',   ordered: false },
  ];

  commanderStock(item: StockItem): void {
    if (item.ordered) { this.showToast(`Commande de "${item.nom}" déjà envoyée`, 'info'); return; }
    item.ordered = true;
    this.showToast(`Commande de "${item.nom}" envoyée au fournisseur`, 'success');
  }

  // ── Incident ──
  incidentResolu = false;
  traiterIncident(): void {
    this.incidentResolu = true;
    this.showToast('Incident M-02 pris en charge — Technicien alerté', 'success');
  }

  // ── Staff ──
  staffAction(nom: string): void {
    this.showToast(`Fiche de ${nom} ouverte`, 'info');
  }

  // ── Notifications ──
  showNotifPanel = false;
  notifications: Notif[] = [
    { icon: 'report_problem', text: 'Alarme pression veineuse — M-02',          time: 'il y a 15min', type: 'warn', read: false },
    { icon: 'inventory_2',    text: 'Bicarbonate — stock critique (12 flacons)', time: 'il y a 1h',    type: 'warn', read: false },
    { icon: 'event',          text: '14 séances programmées pour aujourd\'hui',  time: 'il y a 3h',    type: 'info', read: true  },
  ];
  get unreadCount() { return this.notifications.filter(n => !n.read).length; }
  toggleNotifPanel(): void { this.showNotifPanel = !this.showNotifPanel; }
  markAllRead(): void { this.notifications.forEach(n => n.read = true); this.showToast('Notifications marquées comme lues', 'info'); }
  markRead(n: Notif): void { n.read = true; }

  filterAction(): void { this.showToast('Filtres appliqués', 'info'); }
  get criticalStocksCount() { return this.stocks.filter(s => s.statusClass === 'warn').length; }

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
