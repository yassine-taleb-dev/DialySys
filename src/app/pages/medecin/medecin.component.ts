import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Patient {
  initials: string;
  nom: string;
  genre: string;
  age: number;
  pathologie: string;
  prochaine: string;
  creatinine: string;
  creatinineClass: string;
  statut: string;
  statutClass: string;
}

export interface Prescription {
  nom: string;
  patient: string;
  note: string;
  prescribed: boolean;
}

export interface Toast {
  message: string;
  type: 'success' | 'warning' | 'info' | 'error';
  id: number;
}

export interface Notification {
  icon: string;
  text: string;
  time: string;
  type: string;
  read: boolean;
}

@Component({
  selector: 'app-medecin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.scss'
})
export class MedecinComponent {
  constructor(private router: Router) {}

  // ── Navigation ──
  activeSection = 'dashboard';

  setSection(section: string): void {
    if (section === 'planning') {
      this.router.navigate(['/planning']);
      return;
    }
    const devSections: Record<string, string> = {
      bilans: 'Bilans & Résultats',
      analyses: 'Analyses Biologiques',
      protocoles: 'Protocoles',
    };
    if (devSections[section]) {
      this.showToast(`${devSections[section]} — section en développement`, 'info');
      return;
    }
    this.activeSection = section;
    this.showNotifPanel = false;
  }

  // ── Patients ──
  searchQuery = '';

  allPatients: Patient[] = [
    { initials: 'AK', nom: 'Alaoui Khalid',      genre: 'H', age: 58, pathologie: 'DRC', prochaine: '03/04 · 08:00', creatinine: '9.2 mg/dL', creatinineClass: 'crit-val', statut: 'Critique', statutClass: 'crit' },
    { initials: 'SB', nom: 'Saidi Bouchra',       genre: 'F', age: 45, pathologie: 'IRC', prochaine: '03/04 · 10:30', creatinine: '5.8 mg/dL', creatinineClass: '',          statut: 'Stable',   statutClass: 'ok'   },
    { initials: 'ME', nom: 'Moussaoui El Hassan', genre: 'H', age: 67, pathologie: 'DRC', prochaine: '04/04 · 08:00', creatinine: '7.1 mg/dL', creatinineClass: 'warn-val',  statut: 'Attention', statutClass: 'warn' },
    { initials: 'FZ', nom: 'Filali Zineb',        genre: 'F', age: 52, pathologie: 'IRC', prochaine: '05/04 · 14:00', creatinine: '4.9 mg/dL', creatinineClass: '',          statut: 'Stable',   statutClass: 'ok'   },
    { initials: 'OB', nom: 'Ouali Badreddine',    genre: 'H', age: 39, pathologie: 'IRC', prochaine: '05/04 · 16:30', creatinine: '5.2 mg/dL', creatinineClass: '',          statut: 'Stable',   statutClass: 'ok'   },
  ];

  get filteredPatients(): Patient[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return this.allPatients;
    return this.allPatients.filter(p =>
      p.nom.toLowerCase().includes(q) ||
      p.pathologie.toLowerCase().includes(q) ||
      p.statut.toLowerCase().includes(q)
    );
  }

  // ── Patient Detail Modal ──
  selectedPatient: Patient | null = null;
  showPatientModal = false;

  openPatient(patient: Patient): void {
    this.selectedPatient = patient;
    this.showPatientModal = true;
    this.showNotifPanel = false;
  }

  closePatientModal(): void {
    this.showPatientModal = false;
    this.selectedPatient = null;
  }

  patientAction(label: string): void {
    if (!this.selectedPatient) return;
    const messages: Record<string, string> = {
      dossier:  `Dossier complet de ${this.selectedPatient.nom} ouvert`,
      ordonnance: `Nouvelle ordonnance créée pour ${this.selectedPatient.nom}`,
      planifier: `Séance planifiée pour ${this.selectedPatient.nom}`,
    };
    this.showToast(messages[label] ?? label, 'success');
  }

  // ── New Patient Modal ──
  showNouveauPatientModal = false;
  newPatient = { nom: '', prenom: '', age: '', genre: 'H', pathologie: 'IRC' };

  ouvrirNouveauPatient(): void { this.showNouveauPatientModal = true; }

  fermerNouveauPatient(): void {
    this.showNouveauPatientModal = false;
    this.newPatient = { nom: '', prenom: '', age: '', genre: 'H', pathologie: 'IRC' };
  }

  ajouterPatient(): void {
    if (!this.newPatient.nom.trim() || !this.newPatient.prenom.trim() || !this.newPatient.age) {
      this.showToast('Veuillez remplir tous les champs obligatoires', 'warning');
      return;
    }
    const initials = (this.newPatient.prenom[0] + this.newPatient.nom[0]).toUpperCase();
    this.allPatients.unshift({
      initials,
      nom: `${this.newPatient.nom} ${this.newPatient.prenom}`,
      genre: this.newPatient.genre,
      age: +this.newPatient.age,
      pathologie: this.newPatient.pathologie,
      prochaine: 'À planifier',
      creatinine: '—',
      creatinineClass: '',
      statut: 'Stable',
      statutClass: 'ok',
    });
    this.fermerNouveauPatient();
    this.showToast('Patient ajouté avec succès', 'success');
  }

  // ── Prescriptions ──
  prescriptions: Prescription[] = [
    { nom: 'EPO 4000 UI / Sous-cut.',  patient: 'Alaoui K.',    note: 'Renouvellement urgent',       prescribed: false },
    { nom: 'Furosémide 40 mg / Oral',  patient: 'Moussaoui H.', note: 'En attente validation',       prescribed: false },
    { nom: 'Fer IV 200 mg / Perf.',    patient: 'Saidi B.',     note: 'Bilan anémie',                prescribed: false },
  ];

  prescrire(rx: Prescription): void {
    rx.prescribed = true;
    this.showToast(`"${rx.nom}" prescrit pour ${rx.patient}`, 'success');
  }

  nouvelleOrdonnance(): void {
    this.showToast('Formulaire de nouvelle prescription ouvert', 'info');
  }

  // ── Alerts ──
  voirAlert(keyword: string): void {
    const patient = this.allPatients.find(p => p.nom.toLowerCase().includes(keyword.toLowerCase()));
    if (patient) {
      this.openPatient(patient);
    } else {
      this.showToast(`Patient introuvable`, 'warning');
    }
  }

  // ── Notifications Panel ──
  showNotifPanel = false;

  notifications: Notification[] = [
    { icon: 'emergency',    text: 'Alaoui Khalid – Créatinine critique (9.2 mg/dL)', time: 'il y a 2h', type: 'crit', read: false },
    { icon: 'warning_amber',text: 'Moussaoui H. – Pression artérielle 180/105 mmHg', time: 'il y a 5h', type: 'warn', read: false },
    { icon: 'medication',   text: '3 prescriptions en attente de validation',         time: 'il y a 8h', type: 'info', read: true  },
  ];

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  toggleNotifPanel(): void {
    this.showNotifPanel = !this.showNotifPanel;
  }

  markAllRead(): void {
    this.notifications.forEach(n => (n.read = true));
    this.showToast('Toutes les notifications marquées comme lues', 'info');
  }

  markNotifRead(notif: Notification): void {
    notif.read = true;
  }

  // ── Search / Settings ──
  openSearch(): void {
    this.showToast('Recherche globale ouverte', 'info');
  }

  openSettings(): void {
    this.showToast('Paramètres — bientôt disponible', 'info');
  }

  // ── Toasts ──
  private toastIdCounter = 0;
  toasts: Toast[] = [];

  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.toastIdCounter;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.removeToast(id), 3500);
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  toastIcon(type: string): string {
    const icons: Record<string, string> = {
      success: 'check_circle', warning: 'warning', error: 'error', info: 'info',
    };
    return icons[type] ?? 'info';
  }

  // ── Auth ──
  logout(): void {
    this.router.navigate(['/login']);
  }
}
