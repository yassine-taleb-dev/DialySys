import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  time: string;
  person?: string;
  priority: 'urgent' | 'standard';
  done: boolean;
}

interface CheckItem {
  id: number;
  label: string;
  machine?: string;
  done: boolean;
}

interface AssignedPatient {
  initials: string;
  name: string;
  info: string;
  status: 'post' | 'active' | 'waiting';
}

interface MachineClean {
  id: string;
  model: string;
  lastClean: string;
  status: 'done' | 'pending' | 'inProgress';
}

interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }
interface Notif  { icon: string; text: string; time: string; type: string; read: boolean; }

@Component({
  selector: 'app-aide-soignant',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, FormsModule],
  templateUrl: './aide-soignant.component.html',
  styleUrl: './aide-soignant.component.scss'
})
export class AideSoignantComponent {

  // ── Navigation ──
  activeSection = 'dashboard';
  setSection(s: string): void {
    const dev: Record<string,string> = { machines: 'État des Machines', consommables: 'Consommables', nettoyage: 'Nettoyage' };
    if (dev[s]) { this.showToast(`${dev[s]} — section en développement`, 'info'); return; }
    this.activeSection = s;
    this.showNotifPanel = false;
  }

  // ── Notifications ──
  showNotifPanel = false;
  notifications: Notif[] = [
    { icon: 'priority_high', text: 'Nettoyage machine M-02 — Urgent',           time: 'il y a 10min', type: 'warn', read: false },
    { icon: 'inventory_2',   text: 'Dialyseur FX80 à préparer pour Filali Z.',  time: 'il y a 30min', type: 'info', read: false },
    { icon: 'check_circle',  text: 'Nettoyage M-03 confirmé avec succès',        time: 'il y a 1h',    type: 'ok',   read: true  },
  ];
  get unreadCount() { return this.notifications.filter(n => !n.read).length; }
  toggleNotifPanel(): void { this.showNotifPanel = !this.showNotifPanel; }
  markAllRead(): void { this.notifications.forEach(n => n.read = true); this.showToast('Notifications marquées comme lues', 'info'); }
  markRead(n: Notif): void { n.read = true; }
  openSettings(): void { this.showToast('Paramètres — bientôt disponible', 'info'); }

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

  tasks: Task[] = [
    { id: 1, title: 'Nettoyage machine M-02',                          time: '11:10', person: 'Inf. Haddad',   priority: 'urgent',   done: false },
    { id: 2, title: 'Préparer dialyseur FX80 — patient Filali Z.',     time: '14:00', person: 'Inf. Berrada',  priority: 'urgent',   done: false },
    { id: 3, title: 'Installer tubulures machine M-09',                 time: '13:30', person: 'Inf. Mansouri', priority: 'standard', done: false },
    { id: 4, title: "Restock salle de soins — antiseptiques",           time: '15:00',                          priority: 'standard', done: false },
    { id: 5, title: "Transport patient Alaoui K. vers salle d'attente", time: '12:00',                          priority: 'standard', done: false },
    { id: 6, title: 'Nettoyage machine M-03 post-séance',               time: '08:52',                          priority: 'standard', done: true  },
    { id: 7, title: 'Préparation salle — séance 08:00',                 time: '07:45',                          priority: 'standard', done: true  },
    { id: 8, title: 'Pesée et installation patient Alaoui K.',          time: '08:05',                          priority: 'standard', done: true  },
  ];

  checkItems: CheckItem[] = [
    { id: 1, label: 'Machine M-03 — Nettoyée et désinfectée', machine: 'M-03', done: true  },
    { id: 2, label: 'Stock lignes artérielles vérifié',                         done: true  },
    { id: 3, label: 'Salle de soins nettoyée',                                  done: true  },
    { id: 4, label: 'Machine M-09 — Préparer pour 14h',       machine: 'M-09', done: false },
    { id: 5, label: 'Restock antiseptiques salle 2',                            done: false },
    { id: 6, label: 'Vérifier filtre dialyseur M-07',          machine: 'M-07', done: false },
  ];

  patients: AssignedPatient[] = [
    { initials: 'AK', name: 'Alaoui Khalid',       info: 'Séance terminée — Salle d\'attente', status: 'post'    },
    { initials: 'ME', name: 'Moussaoui El Hassan',  info: 'Machine M-02 — En cours',            status: 'active'  },
    { initials: 'FZ', name: 'Filali Zineb',         info: 'Séance à 14:00 — À préparer',        status: 'waiting' },
    { initials: 'OB', name: 'Ouali Badreddine',     info: 'Machine M-05 — En cours',            status: 'active'  },
  ];

  machines: MachineClean[] = [
    { id: 'M-02', model: 'Fresenius 5008S', lastClean: 'Hier 17:00', status: 'pending'    },
    { id: 'M-03', model: 'Fresenius 4008S', lastClean: 'Auj. 08:52', status: 'done'       },
    { id: 'M-05', model: 'B.Braun Dialog+', lastClean: 'Hier 16:30', status: 'pending'    },
    { id: 'M-07', model: 'Fresenius 5008S', lastClean: 'En cours…',  status: 'inProgress' },
    { id: 'M-09', model: 'B.Braun Dialog+', lastClean: 'Hier 17:30', status: 'pending'    },
  ];

  /* ── Computed helpers ── */
  get urgentTasks()   { return this.tasks.filter(t => t.priority === 'urgent' && !t.done); }
  get pendingTasks()  { return this.tasks.filter(t => t.priority === 'standard' && !t.done); }
  get doneTasks()     { return this.tasks.filter(t => t.done); }
  get totalTasks()    { return this.tasks.length; }
  get doneCount()     { return this.tasks.filter(t => t.done).length; }
  get progressPct()   { return Math.round((this.doneCount / this.totalTasks) * 100); }
  get pendingChecks() { return this.checkItems.filter(c => !c.done).length; }

  /* ── Actions ── */
  toggleTask(task: Task): void {
    task.done = !task.done;
    if (task.done) this.showToast(`"${task.title}" — marquée comme faite`, 'success');
  }
  toggleCheck(item: CheckItem): void {
    item.done = !item.done;
    if (item.done) this.showToast(`"${item.label}" — coché`, 'success');
  }

  patientBadgeClass(status: string): string {
    return status === 'post' ? 'ok' : status === 'active' ? 'info' : 'purple';
  }
  patientBadgeLabel(status: string): string {
    return status === 'post' ? 'Post-séance' : status === 'active' ? 'En dialyse' : 'En attente';
  }

  machineStatusClass(s: string): string {
    return s === 'done' ? 'ok' : s === 'inProgress' ? 'info' : 'warn';
  }
  machineStatusLabel(s: string): string {
    return s === 'done' ? 'Nettoyée' : s === 'inProgress' ? 'En cours' : 'À nettoyer';
  }

  constructor(private router: Router) {}
  logout(): void { this.router.navigate(['/login']); }
}
