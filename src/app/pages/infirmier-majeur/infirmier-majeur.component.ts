import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ── Interfaces ────────────────────────────────────────────────────────────────

interface Session {
  heure: string; patientInit: string; patientNom: string;
  infirmier: string; machine: string; duree: string;
  statusClass: string; statusLabel: string;
}

interface StockItem {
  icon: string; nom: string; detail: string; quantite: number;
  seuil: number; statusClass: string; ordered: boolean;
}

interface StaffMember {
  init: string; nom: string; role: string;
  patients: number; statut: string; statutClass: string;
  vacation: string; telephone: string;
}

interface Patient {
  init: string; nom: string; pathologie: string;
  infirmier: string; machine: string; statut: string; statutClass: string;
  pa: string; paClass: string; fc: number; progress: number;
}

interface Incident {
  id: number; heure: string; machine: string; type: string;
  description: string; signalePar: string;
  priorite: 'critique' | 'elevee' | 'normale';
  statut: 'ouvert' | 'en-cours' | 'resolu';
}

interface MonitorCard {
  init: string; nom: string; machine: string; infirmier: string;
  pa: string; paClass: string; fc: number; saturation: number;
  poids: string; debit: number; dureeRestante: string;
  statut: 'ok' | 'warn' | 'crit'; statutLabel: string;
}

interface RapportStat {
  id: number; date: string; infirmier: string;
  patient: string; machine: string; duree: string;
  pa: string; fc: number; incidents: string; statut: 'complet' | 'incomplet';
}

interface PlanningSeanceIM {
  heure: string; heureEnd: string; patient: string; patientInit: string;
  infirmier: string; machine: string; duree: string;
  statut: 'en-cours' | 'planifiee' | 'terminee';
  // détail
  pathologie?: string; groupeSanguin?: string;
  pa?: string; fc?: number; poids?: string; saturation?: number;
  debit?: number; observations?: string; ordonnance?: string;
}

interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }
interface Notif  { icon: string; text: string; time: string; type: string; read: boolean; }

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-infirmier-majeur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier-majeur.component.html',
  styleUrl: './infirmier-majeur.component.scss',
})
export class InfirmierMajeurComponent {
  constructor(private router: Router) {}

  // ── Navigation ──
  activeSection = 'dashboard';

  get sectionTitle(): string {
    const map: Record<string, string> = {
      dashboard:   'Supervision Générale',
      planning:    'Planning Global des Séances',
      equipe:      'Équipe Aide-Soignante',
      supervision: 'Supervision des Infirmiers',
      patients:    'Tous les Patients',
      monitoring:  'Monitoring Global en Temps Réel',
      rapports:    'Rapports & Statistiques',
      stocks:      'Stocks & Consommables',
      incidents:   'Incidents Signalés',
    };
    return map[this.activeSection] ?? 'Tableau de Bord';
  }

  setSection(s: string): void {
    this.activeSection = s;
    this.showNotifPanel = false;
  }

  // ── Sessions ──
  searchQuery = '';
  filterStatut = '';

  sessions: Session[] = [
    { heure: '08:00', patientInit: 'AK', patientNom: 'Alaoui Khalid',      infirmier: 'Inf. N. Tazi',     machine: 'M-03', duree: '4h',   statusClass: 'ok',     statusLabel: 'Terminé'   },
    { heure: '09:00', patientInit: 'ME', patientNom: 'Moussaoui El Hassan', infirmier: 'Inf. A. Haddad',   machine: 'M-02', duree: '4h',   statusClass: 'warn',   statusLabel: 'Alerte PA' },
    { heure: '09:30', patientInit: 'OB', patientNom: 'Ouali Badreddine',    infirmier: 'Inf. N. Tazi',     machine: 'M-05', duree: '4h',   statusClass: 'info',   statusLabel: 'En cours'  },
    { heure: '10:30', patientInit: 'SB', patientNom: 'Saidi Bouchra',       infirmier: 'Inf. L. Mansouri', machine: 'M-07', duree: '4h',   statusClass: 'info',   statusLabel: 'En cours'  },
    { heure: '14:00', patientInit: 'FZ', patientNom: 'Filali Zineb',        infirmier: 'Inf. R. Berrada',  machine: 'M-09', duree: '3.5h', statusClass: 'purple', statusLabel: 'Planifiée' },
    { heure: '16:30', patientInit: 'OB', patientNom: 'Ouali Badreddine',    infirmier: 'Inf. N. Tazi',     machine: 'M-05', duree: '4h',   statusClass: 'purple', statusLabel: 'Planifiée' },
  ];

  get filteredSessions(): Session[] {
    const q = this.searchQuery.trim().toLowerCase();
    return this.sessions.filter(s =>
      (!this.filterStatut || s.statusLabel === this.filterStatut) &&
      (!q || s.patientNom.toLowerCase().includes(q) || s.infirmier.toLowerCase().includes(q) || s.machine.toLowerCase().includes(q))
    );
  }

  get sessionsEnCours():    number { return this.sessions.filter(s => s.statusClass === 'info').length; }
  get sessionsTerminees():  number { return this.sessions.filter(s => s.statusClass === 'ok').length; }
  get sessionsPlanifiees(): number { return this.sessions.filter(s => s.statusClass === 'purple').length; }

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
      heure:       this.newSeance.heure,
      patientInit: this.newSeance.patient.slice(0, 2).toUpperCase(),
      patientNom:  this.newSeance.patient,
      infirmier:   this.newSeance.infirmier || 'À assigner',
      machine:     this.newSeance.machine   || 'À assigner',
      duree:       this.newSeance.duree,
      statusClass: 'purple', statusLabel: 'Planifiée',
    });
    this.sessions.sort((a, b) => a.heure.localeCompare(b.heure));
    this.newSeance = { patient: '', infirmier: '', machine: '', heure: '', duree: '4h' };
    this.showNouvelleSeanceModal = false;
    this.showToast('Séance ajoutée au planning', 'success');
  }

  // ── Staff ──
  staff: StaffMember[] = [
    { init: 'NT', nom: 'Inf. Nadia Tazi',          role: 'Infirmier(e)',   patients: 2, statut: 'En service', statutClass: 'ok',     vacation: 'Matin 07:00–15:00',  telephone: '06 12 34 56 78' },
    { init: 'AH', nom: 'Inf. Amine Haddad',         role: 'Infirmier(e)',   patients: 1, statut: 'Alerte',    statutClass: 'warn',   vacation: 'Matin 07:00–15:00',  telephone: '06 23 45 67 89' },
    { init: 'LM', nom: 'Inf. Leila Mansouri',        role: 'Infirmier(e)',   patients: 1, statut: 'En service', statutClass: 'ok',     vacation: 'Matin 07:00–15:00',  telephone: '06 34 56 78 90' },
    { init: 'RB', nom: 'Inf. Rachid Berrada',        role: 'Infirmier(e)',   patients: 1, statut: 'Préparation', statutClass: 'purple', vacation: 'Soir 15:00–23:00',   telephone: '06 45 67 89 01' },
    { init: 'YK', nom: 'Aid. Youssef Kettani',       role: 'Aide-Soignant', patients: 0, statut: 'En service', statutClass: 'ok',     vacation: 'Matin 07:00–15:00',  telephone: '06 56 78 90 12' },
    { init: 'SO', nom: 'Aid. Sara Oulmane',           role: 'Aide-Soignant', patients: 0, statut: 'Absent',    statutClass: 'danger', vacation: 'Congé',              telephone: '06 67 89 01 23' },
  ];

  selectedStaff: StaffMember | null = null;
  showStaffModal = false;
  openStaff(s: StaffMember): void { this.selectedStaff = s; this.showStaffModal = true; }
  closeStaff(): void { this.showStaffModal = false; this.selectedStaff = null; }
  staffAction(nom: string): void { this.showToast(`Fiche de ${nom} ouverte`, 'info'); }

  get staffEnService(): number { return this.staff.filter(s => s.statut === 'En service').length; }
  get staffAbsents():   number { return this.staff.filter(s => s.statut === 'Absent').length; }

  // ── Patients ──
  allPatients: Patient[] = [
    { init: 'AK', nom: 'Alaoui Khalid',      pathologie: 'DRC', infirmier: 'Inf. N. Tazi',     machine: 'M-03', statut: 'Terminé',   statutClass: 'ok',   pa: '138/88', paClass: 'ok',       fc: 72, progress: 100 },
    { init: 'ME', nom: 'Moussaoui El Hassan', pathologie: 'DRC', infirmier: 'Inf. A. Haddad',   machine: 'M-02', statut: 'Alerte PA', statutClass: 'warn', pa: '172/98', paClass: 'warn-val', fc: 88, progress: 72  },
    { init: 'OB', nom: 'Ouali Badreddine',    pathologie: 'IRC', infirmier: 'Inf. N. Tazi',     machine: 'M-05', statut: 'En cours',  statutClass: 'info', pa: '122/76', paClass: 'ok',       fc: 68, progress: 58  },
    { init: 'SB', nom: 'Saidi Bouchra',       pathologie: 'IRC', infirmier: 'Inf. L. Mansouri', machine: 'M-07', statut: 'En cours',  statutClass: 'info', pa: '128/82', paClass: 'ok',       fc: 74, progress: 44  },
    { init: 'FZ', nom: 'Filali Zineb',        pathologie: 'IRC', infirmier: 'Inf. R. Berrada',  machine: 'M-09', statut: 'Planifiée', statutClass: 'purple',pa: '—',     paClass: '',          fc: 0,  progress: 0   },
  ];

  searchPatients = '';
  get filteredPatients(): Patient[] {
    const q = this.searchPatients.trim().toLowerCase();
    return this.allPatients.filter(p => !q || p.nom.toLowerCase().includes(q) || p.infirmier.toLowerCase().includes(q) || p.machine.toLowerCase().includes(q));
  }

  // ── Stocks ──
  stocks: StockItem[] = [
    { icon: 'inventory_2', nom: 'Bicarbonate 8.4% — 500mL', detail: 'Lot BIC-2024-112',       quantite: 12, seuil: 20, statusClass: 'warn', ordered: false },
    { icon: 'inventory_2', nom: 'Dialyseurs FX80',            detail: 'Lot DIA-2024-088',       quantite: 8,  seuil: 15, statusClass: 'warn', ordered: false },
    { icon: 'inventory_2', nom: 'Lignes artérielles',         detail: 'Lot LIG-2024-200',       quantite: 45, seuil: 30, statusClass: 'ok',   ordered: false },
    { icon: 'inventory_2', nom: 'Poches NaCl 0.9% — 500mL',  detail: 'Lot NAC-2024-055',       quantite: 30, seuil: 40, statusClass: 'warn', ordered: false },
    { icon: 'inventory_2', nom: 'Épinéphrine 1mg/mL',         detail: 'Urgence — Lot EPI-2024', quantite: 5,  seuil: 10, statusClass: 'warn', ordered: false },
    { icon: 'inventory_2', nom: 'Gants nitrile — L',          detail: 'Boîtes de 100',          quantite: 22, seuil: 15, statusClass: 'ok',   ordered: false },
  ];

  filterStockStatus = '';
  get filteredStocks(): StockItem[] {
    return this.stocks.filter(s => !this.filterStockStatus || s.statusClass === this.filterStockStatus);
  }
  get criticalStocksCount(): number { return this.stocks.filter(s => s.statusClass === 'warn').length; }

  commanderStock(item: StockItem): void {
    if (item.ordered) { this.showToast(`Commande de "${item.nom}" déjà envoyée`, 'info'); return; }
    item.ordered = true;
    this.showToast(`Commande de "${item.nom}" envoyée au fournisseur`, 'success');
  }

  commanderTout(): void {
    const nonCommandes = this.stocks.filter(s => s.statusClass === 'warn' && !s.ordered);
    nonCommandes.forEach(s => s.ordered = true);
    this.showToast(`${nonCommandes.length} commande(s) urgentes envoyées`, 'success');
  }

  stockPct(item: StockItem): number {
    return Math.min(100, Math.round((item.quantite / (item.seuil * 2)) * 100));
  }

  // ── Incidents ──
  incidents: Incident[] = [
    { id: 1, heure: '11:05', machine: 'M-02', type: 'Alarme pression',   description: 'Alarme pression veineuse — seuil dépassé pendant séance Moussaoui H. Technicien contacté.',           signalePar: 'Inf. A. Haddad', priorite: 'critique', statut: 'en-cours' },
    { id: 2, heure: '09:40', machine: 'M-11', type: 'Panne mécanique',   description: 'Machine M-11 hors service — pompe défectueuse. Maintenance préventive programmée demain matin.',       signalePar: 'Inf. N. Tazi',   priorite: 'elevee',  statut: 'ouvert'   },
    { id: 3, heure: '08:15', machine: 'M-03', type: 'Fuite circuit',     description: 'Petite fuite détectée sur le circuit de retour. Séance Alaoui K. terminée normalement. Machine OK.', signalePar: 'Inf. N. Tazi',   priorite: 'normale', statut: 'resolu'   },
  ];

  get incidentsOuverts():   Incident[] { return this.incidents.filter(i => i.statut !== 'resolu'); }
  get incidentsResolus():   Incident[] { return this.incidents.filter(i => i.statut === 'resolu'); }

  resoudreIncident(i: Incident): void {
    i.statut = 'resolu';
    this.showToast(`Incident ${i.machine} — marqué comme résolu`, 'success');
  }

  prendreEnCharge(i: Incident): void {
    i.statut = 'en-cours';
    this.showToast(`Incident ${i.machine} — pris en charge`, 'info');
  }

  incidentPrioriteClass(p: string): string {
    return p === 'critique' ? 'crit' : p === 'elevee' ? 'warn' : 'info';
  }

  incidentStatutClass(s: string): string {
    return s === 'resolu' ? 'ok' : s === 'en-cours' ? 'warn' : 'crit';
  }

  incidentStatutLabel(s: string): string {
    return ({ ouvert: 'Ouvert', 'en-cours': 'En charge', resolu: 'Résolu' } as Record<string,string>)[s] ?? s;
  }

  // ── Monitoring Global ──
  monitorCards: MonitorCard[] = [
    { init: 'ME', nom: 'Moussaoui El Hassan', machine: 'M-02', infirmier: 'Inf. A. Haddad',   pa: '172/98', paClass: 'warn-val', fc: 88, saturation: 95, poids: '68 kg', debit: 250, dureeRestante: '1h 10min', statut: 'warn', statutLabel: 'Alerte PA'  },
    { init: 'OB', nom: 'Ouali Badreddine',    machine: 'M-05', infirmier: 'Inf. N. Tazi',     pa: '122/76', paClass: 'ok',       fc: 68, saturation: 98, poids: '74 kg', debit: 300, dureeRestante: '1h 42min', statut: 'ok',   statutLabel: 'En cours'   },
    { init: 'SB', nom: 'Saidi Bouchra',       machine: 'M-07', infirmier: 'Inf. L. Mansouri', pa: '128/82', paClass: 'ok',       fc: 74, saturation: 97, poids: '57 kg', debit: 280, dureeRestante: '2h 16min', statut: 'ok',   statutLabel: 'En cours'   },
  ];

  get monitorsEnAlerte(): number { return this.monitorCards.filter(m => m.statut !== 'ok').length; }

  alerterInfirmier(m: MonitorCard): void {
    this.showToast(`${m.infirmier} alerté(e) pour ${m.nom} — PA ${m.pa}`, 'warning');
  }

  // ── Rapports ──
  rapports: RapportStat[] = [
    { id: 1, date: '12/04/2026', infirmier: 'Inf. N. Tazi',     patient: 'Alaoui Khalid',      machine: 'M-03', duree: '4h',   pa: '138/88', fc: 72, incidents: 'Aucun',               statut: 'complet'   },
    { id: 2, date: '12/04/2026', infirmier: 'Inf. A. Haddad',   patient: 'Moussaoui El Hassan', machine: 'M-02', duree: '4h',   pa: '172/98', fc: 88, incidents: 'Alarme pression veineuse', statut: 'complet' },
    { id: 3, date: '12/04/2026', infirmier: 'Inf. L. Mansouri', patient: 'Saidi Bouchra',       machine: 'M-07', duree: '4h',   pa: '128/82', fc: 74, incidents: 'Aucun',               statut: 'complet'   },
    { id: 4, date: '11/04/2026', infirmier: 'Inf. N. Tazi',     patient: 'Ouali Badreddine',    machine: 'M-05', duree: '4h',   pa: '120/74', fc: 70, incidents: 'Aucun',               statut: 'complet'   },
    { id: 5, date: '11/04/2026', infirmier: 'Inf. R. Berrada',  patient: 'Filali Zineb',        machine: 'M-09', duree: '3.5h', pa: '126/80', fc: 72, incidents: 'Aucun',               statut: 'incomplet' },
  ];

  searchRapports = '';
  filterRapportDate = '';

  get filteredRapports(): RapportStat[] {
    const q = this.searchRapports.trim().toLowerCase();
    return this.rapports.filter(r =>
      (!q || r.patient.toLowerCase().includes(q) || r.infirmier.toLowerCase().includes(q)) &&
      (!this.filterRapportDate || r.date === this.filterRapportDate)
    );
  }

  get seancesTotal():    number { return this.rapports.length; }
  get seancesCompletes(): number { return this.rapports.filter(r => r.statut === 'complet').length; }

  voirRapport(r: RapportStat): void {
    this.showToast(`Rapport de ${r.patient} — ${r.date} ouvert`, 'info');
  }
  exporterRapport(r: RapportStat): void {
    this.showToast(`Rapport exporté en PDF — ${r.patient}`, 'success');
  }

  // ── Planning Global (interne) ──
  planningSeances: PlanningSeanceIM[] = [
    {
      heure: '08:00', heureEnd: '12:00', patient: 'Alaoui Khalid',      patientInit: 'AK',
      machine: 'M-03', duree: '4h',   infirmier: 'Inf. N. Tazi',     statut: 'terminee',
      pathologie: 'DRC', groupeSanguin: 'B+', pa: '138/88', fc: 72, poids: '72 kg',
      saturation: 97, debit: 300,
      observations: 'Séance bien tolérée. Pas de complication. PA stable tout au long de la séance.',
      ordonnance: 'Amlodipine 5 mg, Furosémide 40 mg, EPO 4000 UI',
    },
    {
      heure: '09:00', heureEnd: '13:00', patient: 'Moussaoui El Hassan', patientInit: 'ME',
      machine: 'M-02', duree: '4h',   infirmier: 'Inf. A. Haddad',   statut: 'en-cours',
      pathologie: 'DRC', groupeSanguin: 'A+', pa: '172/98', fc: 88, poids: '68 kg',
      saturation: 95, debit: 250,
      observations: 'Alarme pression veineuse déclenchée à 11h05. Débit réduit. Médecin informé.',
      ordonnance: 'Amlodipine 10 mg, Bisoprolol 5 mg',
    },
    {
      heure: '09:30', heureEnd: '13:30', patient: 'Ouali Badreddine',    patientInit: 'OB',
      machine: 'M-05', duree: '4h',   infirmier: 'Inf. N. Tazi',     statut: 'en-cours',
      pathologie: 'IRC', groupeSanguin: 'O+', pa: '122/76', fc: 68, poids: '74 kg',
      saturation: 98, debit: 300,
      observations: 'Séance en cours, constantes stables.',
      ordonnance: 'Bicarbonate de sodium 1 g, Fer IV 100 mg',
    },
    {
      heure: '10:30', heureEnd: '14:30', patient: 'Saidi Bouchra',       patientInit: 'SB',
      machine: 'M-07', duree: '4h',   infirmier: 'Inf. L. Mansouri', statut: 'en-cours',
      pathologie: 'IRC', groupeSanguin: 'A+', pa: '128/82', fc: 74, poids: '57 kg',
      saturation: 97, debit: 280,
      observations: 'Séance en cours, aucun incident signalé.',
      ordonnance: 'Bicarbonate de sodium 1 g, Fer IV 100 mg',
    },
    {
      heure: '14:00', heureEnd: '17:30', patient: 'Filali Zineb',        patientInit: 'FZ',
      machine: 'M-09', duree: '3.5h', infirmier: 'Inf. R. Berrada',  statut: 'planifiee',
      pathologie: 'IRC', groupeSanguin: 'AB+', pa: '—', fc: 0, poids: '62 kg',
      saturation: 0, debit: 0,
      observations: 'Séance planifiée — patient attendu à 13h45.',
      ordonnance: 'Lévothyroxine 50 µg, Calcium carbonate 500 mg',
    },
    {
      heure: '16:30', heureEnd: '20:30', patient: 'Ouali Badreddine',    patientInit: 'OB',
      machine: 'M-05', duree: '4h',   infirmier: 'Inf. N. Tazi',     statut: 'planifiee',
      pathologie: 'IRC', groupeSanguin: 'O+', pa: '—', fc: 0, poids: '74 kg',
      saturation: 0, debit: 0,
      observations: 'Deuxième séance de la journée — surveillance renforcée recommandée.',
      ordonnance: 'Bicarbonate de sodium 1 g, Fer IV 100 mg',
    },
  ];

  filterPlanningStatut = '';
  selectedPlanning: PlanningSeanceIM | null = null;
  showPlanningDetailModal = false;

  get filteredPlanning(): PlanningSeanceIM[] {
    return this.planningSeances.filter(s => !this.filterPlanningStatut || s.statut === this.filterPlanningStatut);
  }

  openPlanningDetail(s: PlanningSeanceIM): void {
    this.selectedPlanning = s;
    this.showPlanningDetailModal = true;
  }
  closePlanningDetail(): void {
    this.showPlanningDetailModal = false;
    this.selectedPlanning = null;
  }

  planningStatutClass(s: string): string { return s === 'terminee' ? 'ok' : s === 'en-cours' ? 'info' : 'purple'; }
  planningStatutLabel(s: string): string { return ({ terminee: 'Terminée', 'en-cours': 'En cours', planifiee: 'Planifiée' } as Record<string,string>)[s] ?? s; }

  get planningTerminees():  number { return this.planningSeances.filter(s => s.statut === 'terminee').length; }
  get planningEnCours():    number { return this.planningSeances.filter(s => s.statut === 'en-cours').length; }
  get planningPlanifiees(): number { return this.planningSeances.filter(s => s.statut === 'planifiee').length; }

  // ── Supervision des infirmiers ──
  get supervisionInfirmiers(): { membre: StaffMember; patients: Patient[] }[] {
    return this.staff
      .filter(s => s.role === 'Infirmier(e)')
      .map(s => ({
        membre: s,
        patients: this.allPatients.filter(p => p.infirmier === s.nom),
      }));
  }

  // ── Notifications ──
  showNotifPanel = false;
  notifications: Notif[] = [
    { icon: 'report_problem', text: 'Alarme pression veineuse — M-02',          time: 'il y a 15min', type: 'warn', read: false },
    { icon: 'inventory_2',    text: 'Bicarbonate — stock critique (12 flacons)', time: 'il y a 1h',    type: 'warn', read: false },
    { icon: 'event',          text: '6 séances programmées aujourd\'hui',        time: 'il y a 3h',    type: 'info', read: true  },
  ];
  get unreadCount(): number { return this.notifications.filter(n => !n.read).length; }
  toggleNotifPanel(): void { this.showNotifPanel = !this.showNotifPanel; }
  markAllRead(): void { this.notifications.forEach(n => n.read = true); this.showToast('Notifications marquées comme lues', 'info'); }
  markRead(n: Notif): void { n.read = true; }

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
