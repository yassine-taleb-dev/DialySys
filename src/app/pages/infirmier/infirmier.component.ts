import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ── Interfaces ────────────────────────────────────────────────────────────────

interface MonitorPatient {
  initials: string; name: string; machine: string;
  time: string; timeLeft: string;
  pa: string; paClass: string; fc: number;
  poidsPerdu: number; debit: number; progress: number;
  status: 'ok' | 'warn';
}

interface Task {
  id: number; title: string; patient: string;
  priority: 'urgent' | 'standard'; done: boolean;
}

interface SeanceJour {
  heure: string; heureEnd: string;
  patient: string; patientInit: string;
  machine: string; duree: string;
  infirmier: string;
  statut: 'terminee' | 'en-cours' | 'planifiee';
  statutClass: string;
}

interface SoinItem {
  id: number; heure: string;
  patient: string; patientInit: string;
  type: string; description: string;
  priorite: 'urgent' | 'normal'; fait: boolean;
}

interface Toast  { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }
interface Notif  { icon: string; text: string; time: string; type: string; read: boolean; }

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-infirmier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier.component.html',
  styleUrl: './infirmier.component.scss',
})
export class InfirmierComponent {
  constructor(private router: Router) {}

  // ── Navigation ──
  activeSection = 'dashboard';

  get sectionTitle(): string {
    const map: Record<string, string> = {
      dashboard:  'Tableau de Bord',
      monitoring: 'Monitoring en Temps Réel',
      seances:    'Mes Séances du Jour',
      taches:     'Mes Tâches',
      soins:      'Soins Infirmiers',
      machines:   'État des Machines',
      patients:   'Mes Patients',
    };
    return map[this.activeSection] ?? 'Tableau de Bord';
  }

  setSection(s: string): void {
    this.activeSection = s;
    this.showNotifPanel = false;
  }

  // ── Monitoring Patients ──
  patients: MonitorPatient[] = [
    { initials: 'SB', name: 'Saidi Bouchra',      machine: 'M-07', time: '10:30 → 14:30', timeLeft: '2h15', pa: '128/82', paClass: 'ok',       fc: 74, poidsPerdu: 1.2, debit: 350, progress: 44, status: 'ok'   },
    { initials: 'ME', name: 'Moussaoui El Hassan', machine: 'M-02', time: '09:00 → 13:00', timeLeft: '1h30', pa: '172/98', paClass: 'warn-val',  fc: 88, poidsPerdu: 2.1, debit: 300, progress: 72, status: 'warn' },
    { initials: 'OB', name: 'Ouali Badreddine',   machine: 'M-05', time: '09:30 → 13:30', timeLeft: '2h00', pa: '122/76', paClass: 'ok',       fc: 68, poidsPerdu: 0.8, debit: 380, progress: 58, status: 'ok'   },
  ];

  selectedPatient: MonitorPatient | null = null;
  showPatientModal = false;

  openPatient(p: MonitorPatient): void {
    this.selectedPatient = p;
    this.showVitalsEdit = false;
    this.showPatientModal = true;
    this.showNotifPanel = false;
  }

  closePatient(): void { this.showPatientModal = false; this.selectedPatient = null; }

  alerterMedecin(p: MonitorPatient): void {
    this.showToast(`Dr. Benali alerté pour ${p.name} — PA ${p.pa}`, 'warning');
    this.closePatient();
  }

  // ── Update vitals inline ──
  showVitalsEdit = false;
  editedPa = ''; editedFc = 0; editedDebit = 0; editedPoids = 0;

  startEditVitals(p: MonitorPatient): void {
    this.editedPa    = p.pa;
    this.editedFc    = p.fc;
    this.editedDebit = p.debit;
    this.editedPoids = p.poidsPerdu;
    this.showVitalsEdit = true;
  }

  saveVitals(p: MonitorPatient): void {
    p.pa         = this.editedPa;
    p.fc         = this.editedFc;
    p.debit      = this.editedDebit;
    p.poidsPerdu = this.editedPoids;
    p.paClass    = this.editedFc > 100 || (parseInt(this.editedPa) > 160) ? 'warn-val' : 'ok';
    p.status     = p.paClass === 'warn-val' ? 'warn' : 'ok';
    this.showVitalsEdit = false;
    this.showPatientModal = false;
    this.showToast(`Constantes de ${p.name} enregistrées`, 'success');
  }

  // ── Séances du jour ──
  seancesJour: SeanceJour[] = [
    { heure: '08:00', heureEnd: '12:00', patient: 'Alaoui Khalid',      patientInit: 'AK', machine: 'M-03', duree: '4h',   infirmier: 'Inf. N. Tazi',    statut: 'terminee',  statutClass: 'ok'     },
    { heure: '09:00', heureEnd: '13:00', patient: 'Moussaoui El Hassan', patientInit: 'ME', machine: 'M-02', duree: '4h',   infirmier: 'Inf. A. Haddad',  statut: 'en-cours',  statutClass: 'info'   },
    { heure: '09:30', heureEnd: '13:30', patient: 'Ouali Badreddine',    patientInit: 'OB', machine: 'M-05', duree: '4h',   infirmier: 'Inf. N. Tazi',    statut: 'en-cours',  statutClass: 'info'   },
    { heure: '10:30', heureEnd: '14:30', patient: 'Saidi Bouchra',       patientInit: 'SB', machine: 'M-07', duree: '4h',   infirmier: 'Inf. L. Mansouri',statut: 'en-cours',  statutClass: 'info'   },
    { heure: '14:00', heureEnd: '17:30', patient: 'Filali Zineb',        patientInit: 'FZ', machine: 'M-09', duree: '3.5h', infirmier: 'Inf. N. Tazi',    statut: 'planifiee', statutClass: 'purple' },
    { heure: '16:30', heureEnd: '20:30', patient: 'Ouali Badreddine',    patientInit: 'OB', machine: 'M-05', duree: '4h',   infirmier: 'Inf. N. Tazi',    statut: 'planifiee', statutClass: 'purple' },
  ];

  get seancesTerminees():  SeanceJour[] { return this.seancesJour.filter(s => s.statut === 'terminee');  }
  get seancesEnCours():    SeanceJour[] { return this.seancesJour.filter(s => s.statut === 'en-cours');   }
  get seancesPlanifiees(): SeanceJour[] { return this.seancesJour.filter(s => s.statut === 'planifiee'); }

  statutSeanceLabel(s: string): string { return ({ terminee: 'Terminée', 'en-cours': 'En cours', planifiee: 'Planifiée' } as Record<string,string>)[s] ?? s; }

  // ── Soins (care tasks) ──
  soins: SoinItem[] = [
    { id: 1,  heure: '09:15', patient: 'Moussaoui El Hassan', patientInit: 'ME', type: 'Pression artérielle', description: 'Contrôle PA — Résultat 172/98 mmHg. Médecin informé.', priorite: 'urgent', fait: false },
    { id: 2,  heure: '09:30', patient: 'Saidi Bouchra',       patientInit: 'SB', type: 'Injection',          description: 'Administration fer IV 200 mg selon ordonnance.',        priorite: 'normal', fait: false },
    { id: 3,  heure: '10:00', patient: 'Ouali Badreddine',    patientInit: 'OB', type: 'Pesée',              description: 'Pesée pré-séance — Poids : 80 kg.',                    priorite: 'normal', fait: true  },
    { id: 4,  heure: '10:30', patient: 'Alaoui Khalid',       patientInit: 'AK', type: 'Injection EPO',      description: 'EPO 4000 UI sous-cutané selon ordonnance Dr. Benali.',  priorite: 'normal', fait: true  },
    { id: 5,  heure: '11:00', patient: 'Saidi Bouchra',       patientInit: 'SB', type: 'Constantes',         description: 'Relève des constantes — PA 130/82, FC 74.',            priorite: 'normal', fait: false },
    { id: 6,  heure: '12:00', patient: 'Moussaoui El Hassan', patientInit: 'ME', type: 'Surveillance',       description: 'Surveillance renforcée — bilan PA toutes les 30 min.',  priorite: 'urgent', fait: false },
    { id: 7,  heure: '13:30', patient: 'Ouali Badreddine',    patientInit: 'OB', type: 'Fin séance',         description: 'Débranchement et pesée post-séance.',                  priorite: 'normal', fait: false },
    { id: 8,  heure: '14:00', patient: 'Filali Zineb',        patientInit: 'FZ', type: 'Préparation',        description: 'Préparer machine M-09 pour séance 14h.',                priorite: 'normal', fait: false },
  ];

  filterSoinPriorite = '';
  get filteredSoins(): SoinItem[] {
    return this.soins.filter(s => !this.filterSoinPriorite || s.priorite === this.filterSoinPriorite);
  }
  get soinsUrgents():  SoinItem[] { return this.soins.filter(s => s.priorite === 'urgent' && !s.fait); }
  get soinsNormaux():  SoinItem[] { return this.soins.filter(s => s.priorite === 'normal' && !s.fait); }
  get soinsFaits():    SoinItem[] { return this.soins.filter(s => s.fait); }

  marquerSoinFait(s: SoinItem): void {
    s.fait = true;
    this.showToast(`"${s.type}" pour ${s.patient} — effectué`, 'success');
  }

  // ── Tasks ──
  tasks: Task[] = [
    { id: 1, title: 'Contrôler PA — Moussaoui H.',   patient: 'Moussaoui El Hassan', priority: 'urgent',   done: false },
    { id: 2, title: 'Préparer Machine M-09',           patient: 'Filali Zineb (14h)',  priority: 'standard', done: false },
    { id: 3, title: 'Injecter EPO 4000 UI',            patient: 'Alaoui K.',          priority: 'standard', done: false },
    { id: 4, title: 'Pesée post-séance',               patient: 'Saidi Bouchra',      priority: 'standard', done: true  },
  ];

  filterTaskPriority = '';
  get filteredTasks(): Task[] {
    return this.tasks.filter(t => !this.filterTaskPriority || t.priority === this.filterTaskPriority);
  }
  get urgentPending():  Task[] { return this.tasks.filter(t => t.priority === 'urgent'   && !t.done); }
  get standardPending():Task[] { return this.tasks.filter(t => t.priority === 'standard' && !t.done); }
  get doneTasks():      Task[] { return this.tasks.filter(t => t.done); }
  get availableMachinesCount(): number { return this.machines.filter(m => m.statusClass === 'ok').length; }
  get warnPatientsCount(): number { return this.patients.filter(p => p.status === 'warn').length; }
  get machinesEnCours(): number { return this.machines.filter(m => m.statusClass === 'info').length; }
  get machinesEnMaintenance(): number { return this.machines.filter(m => m.statusClass === 'crit').length; }

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

  deleteTask(t: Task): void {
    this.tasks = this.tasks.filter(x => x.id !== t.id);
    this.showToast('Tâche supprimée', 'info');
  }

  // ── Machines ──
  machines = [
    { id: 'M-02', model: 'Fresenius 5008S',  statusClass: 'info', label: 'En cours',    patient: 'Moussaoui El Hassan', debit: 300 },
    { id: 'M-05', model: 'B.Braun Dialog+',  statusClass: 'info', label: 'En cours',    patient: 'Ouali Badreddine',    debit: 380 },
    { id: 'M-07', model: 'Fresenius 5008S',  statusClass: 'info', label: 'En cours',    patient: 'Saidi Bouchra',       debit: 350 },
    { id: 'M-09', model: 'B.Braun Dialog+',  statusClass: 'ok',   label: 'Disponible',  patient: '—',                   debit: 0   },
    { id: 'M-11', model: 'Gambro AK 200S',   statusClass: 'crit', label: 'Maintenance', patient: '—',                   debit: 0   },
    { id: 'M-03', model: 'Fresenius 5008S',  statusClass: 'ok',   label: 'Disponible',  patient: '—',                   debit: 0   },
  ];

  machineClick(m: {id: string; statusClass: string; label: string; patient: string}): void {
    if (m.statusClass === 'crit')  this.showToast(`Machine ${m.id} — Rapport de maintenance envoyé`, 'warning');
    else if (m.statusClass === 'ok') this.showToast(`Machine ${m.id} disponible — Prête à l'emploi`, 'info');
    else {
      const p = this.patients.find(pt => pt.machine === m.id);
      if (p) this.openPatient(p);
    }
  }

  signalerPanne(m: {id: string}): void {
    this.showToast(`Panne signalée pour ${m.id} — Technicien alerté`, 'warning');
  }

  // ── Notifications ──
  showNotifPanel = false;
  notifications: Notif[] = [
    { icon: 'warning_amber', text: 'Moussaoui H. — PA élevée 172/98 mmHg',    time: 'il y a 15min', type: 'warn', read: false },
    { icon: 'task_alt',      text: '4 tâches en attente aujourd\'hui',          time: 'il y a 1h',    type: 'info', read: false },
    { icon: 'check_circle',  text: 'Séance Alaoui K. terminée avec succès',    time: 'il y a 2h',    type: 'ok',   read: true  },
  ];

  get unreadCount(): number { return this.notifications.filter(n => !n.read).length; }

  toggleNotifPanel():    void { this.showNotifPanel = !this.showNotifPanel; }
  markAllRead():         void { this.notifications.forEach(n => n.read = true); this.showToast('Notifications marquées comme lues', 'info'); }
  markRead(n: Notif):    void { n.read = true; }
  openSettings():        void { this.showToast('Paramètres — bientôt disponible', 'info'); }

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
