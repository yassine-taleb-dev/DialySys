import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MonitorPatient {
  initials: string; name: string; machine: string;
  time: string; timeLeft: string;
  pa: string; paClass: string; fc: number;
  poidsPerdu: number; debit: number; progress: number;
  status: 'ok' | 'warn';
}
interface Task { id: number; title: string; patient: string; priority: 'urgent' | 'standard'; done: boolean; }
interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }
interface Notif { icon: string; text: string; time: string; type: string; read: boolean; }

@Component({
  selector: 'app-infirmier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier.component.html',
  styleUrl: './infirmier.component.scss'
})
export class InfirmierComponent {
  constructor(private router: Router) {}

  // ── Navigation ──
  activeSection = 'dashboard';
  setSection(s: string): void {
    const dev: Record<string,string> = { soins: 'Soins Infirmiers', monitoring: 'Monitoring', machines: 'État des Machines' };
    if (dev[s]) { this.showToast(`${dev[s]} — section en développement`, 'info'); return; }
    this.activeSection = s;
    this.showNotifPanel = false;
  }

  // ── Monitoring patients ──
  patients: MonitorPatient[] = [
    { initials: 'SB', name: 'Saidi Bouchra',      machine: 'M-07', time: '10:30 → 14:30', timeLeft: '2h15', pa: '128/82', paClass: 'ok',       fc: 74, poidsPerdu: 1.2, debit: 350, progress: 44, status: 'ok'   },
    { initials: 'ME', name: 'Moussaoui El Hassan', machine: 'M-02', time: '09:00 → 13:00', timeLeft: '1h30', pa: '172/98', paClass: 'warn-val',  fc: 88, poidsPerdu: 2.1, debit: 300, progress: 72, status: 'warn' },
    { initials: 'OB', name: 'Ouali Badreddine',   machine: 'M-05', time: '09:30 → 13:30', timeLeft: '2h00', pa: '122/76', paClass: 'ok',       fc: 68, poidsPerdu: 0.8, debit: 380, progress: 58, status: 'ok'   },
  ];

  selectedPatient: MonitorPatient | null = null;
  showPatientModal = false;
  openPatient(p: MonitorPatient): void { this.selectedPatient = p; this.showPatientModal = true; this.showNotifPanel = false; }
  closePatient(): void { this.showPatientModal = false; this.selectedPatient = null; }

  alerterMedecin(p: MonitorPatient): void {
    this.showToast(`Dr. Benali alerté pour ${p.name} — PA ${p.pa}`, 'warning');
    this.closePatient();
  }

  // ── Tasks ──
  tasks: Task[] = [
    { id: 1, title: 'Contrôler PA — Moussaoui H.',   patient: 'Moussaoui El Hassan', priority: 'urgent',   done: false },
    { id: 2, title: 'Préparer Machine M-09',           patient: 'Filali Zineb (14h)',  priority: 'standard', done: false },
    { id: 3, title: 'Injecter EPO 4000 UI',            patient: 'Alaoui K.',          priority: 'standard', done: false },
    { id: 4, title: 'Pesée post-séance',               patient: 'Saidi Bouchra',      priority: 'standard', done: true  },
  ];

  get urgentPending() { return this.tasks.filter(t => t.priority === 'urgent' && !t.done); }
  get standardPending() { return this.tasks.filter(t => t.priority === 'standard' && !t.done); }
  get doneTasks() { return this.tasks.filter(t => t.done); }
  get availableMachinesCount() { return this.machines.filter(m => m.statusClass === 'ok').length; }

  markDone(task: Task): void {
    task.done = true;
    this.showToast(`"${task.title}" — marquée comme faite`, 'success');
  }

  showAddTaskModal = false;
  newTask = { title: '', patient: '', priority: 'standard' as 'urgent'|'standard' };

  ajouterTask(): void {
    if (!this.newTask.title.trim()) { this.showToast('Veuillez saisir un titre', 'warning'); return; }
    this.tasks.unshift({ id: Date.now(), title: this.newTask.title, patient: this.newTask.patient, priority: this.newTask.priority, done: false });
    this.newTask = { title: '', patient: '', priority: 'standard' };
    this.showAddTaskModal = false;
    this.showToast('Tâche ajoutée avec succès', 'success');
  }

  // ── Machines ──
  machines = [
    { id: 'M-02', model: 'Fresenius 5008S', statusClass: 'info', label: 'En cours' },
    { id: 'M-05', model: 'B.Braun Dialog+', statusClass: 'info', label: 'En cours' },
    { id: 'M-07', model: 'Fresenius 5008S', statusClass: 'info', label: 'En cours' },
    { id: 'M-09', model: 'B.Braun Dialog+', statusClass: 'ok',   label: 'Disponible' },
    { id: 'M-11', model: 'Gambro AK 200S',  statusClass: 'crit', label: 'Maintenance' },
  ];

  machineClick(m: {id: string; statusClass: string; label: string}): void {
    if (m.statusClass === 'crit')  this.showToast(`Machine ${m.id} — Technicien averti`, 'warning');
    else if (m.statusClass === 'ok') this.showToast(`Machine ${m.id} disponible — Prête à l'emploi`, 'info');
    else {
      const p = this.patients.find(pt => pt.machine === m.id);
      if (p) this.openPatient(p);
    }
  }

  // ── Notifications ──
  showNotifPanel = false;
  notifications: Notif[] = [
    { icon: 'warning_amber', text: 'Moussaoui H. — PA élevée 172/98 mmHg',     time: 'il y a 15min', type: 'warn', read: false },
    { icon: 'task_alt',      text: '4 tâches en attente aujourd\'hui',           time: 'il y a 1h',    type: 'info', read: false },
    { icon: 'check_circle',  text: 'Séance de Alaoui K. terminée avec succès',  time: 'il y a 2h',    type: 'ok',   read: true  },
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

  logout(): void { this.router.navigate(['/login']); }
}
