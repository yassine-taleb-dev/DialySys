import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface HistoriqueItem {
  date: string;
  type: 'seance' | 'bilan' | 'consultation' | 'urgence';
  description: string;
  notes: string;
  icon: string;
  typeClass: string;
}

export interface MedicamentRx {
  nom: string;
  dosage: string;
  voie: string;
  frequence: string;
  duree: string;
}

export interface Ordonnance {
  id: number;
  date: string;
  patientId: number;
  patientNom: string;
  patientInit: string;
  medicaments: MedicamentRx[];
  note: string;
  statut: 'active' | 'terminee' | 'annulee';
}

export interface Patient {
  id: number;
  initials: string;
  nom: string;
  genre: string;
  age: number;
  dateNaissance: string;
  cin: string;
  telephone: string;
  adresse: string;
  groupeSanguin: string;
  allergies: string;
  pathologie: string;
  debutDialyse: string;
  poids: string;
  taille: string;
  tension: string;
  prochaine: string;
  creatinine: string;
  creatinineClass: string;
  uree: string;
  hemoglobine: string;
  statut: string;
  statutClass: string;
  historique: HistoriqueItem[];
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

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-medecin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.scss',
})
export class MedecinComponent {
  constructor(private router: Router) {}

  // ── Navigation ──
  activeSection = 'dashboard';
  dossierTab: 'info' | 'historique' | 'ordonnances' = 'info';

  get sectionTitle(): string {
    const map: Record<string, string> = {
      dashboard:    'Tableau de Bord',
      patients:     'Mes Patients',
      dossier:      this.selectedPatient ? `Dossier — ${this.selectedPatient.nom}` : 'Dossier Patient',
      ordonnances:  'Ordonnances',
      alertes:      'Alertes Critiques',
    };
    return map[this.activeSection] ?? 'Tableau de Bord';
  }

  setSection(section: string): void {
    if (section === 'planning') { this.router.navigate(['/planning']); return; }
    const dev: Record<string, string> = { bilans: 'Bilans & Résultats', analyses: 'Analyses Biologiques', protocoles: 'Protocoles' };
    if (dev[section]) { this.showToast(`${dev[section]} — section en développement`, 'info'); return; }
    this.activeSection = section;
    this.showNotifPanel = false;
  }

  // ── Patients ──
  searchQuery = '';
  filterPathologie = '';

  allPatients: Patient[] = [
    {
      id: 1, initials: 'AK', nom: 'Alaoui Khalid', genre: 'H', age: 58,
      dateNaissance: '12/03/1968', cin: 'BE234567', telephone: '06 12 34 56 78',
      adresse: '12 Rue Hassan II, Casablanca',
      groupeSanguin: 'B+', allergies: 'Pénicilline',
      pathologie: 'DRC', debutDialyse: '15/06/2020',
      poids: '72 kg', taille: '175 cm', tension: '145/92 mmHg',
      prochaine: '03/04 · 08:00',
      creatinine: '9.2 mg/dL', creatinineClass: 'crit-val',
      uree: '28 mmol/L', hemoglobine: '8.1 g/dL',
      statut: 'Critique', statutClass: 'crit',
      historique: [
        { date: '01/04/2026', type: 'seance',       description: 'Séance hémodialyse 4h — Machine M-03',      notes: 'Tension élevée en fin de séance',              icon: 'water_drop',      typeClass: 'seance'       },
        { date: '28/03/2026', type: 'bilan',        description: 'Bilan biologique complet',                  notes: 'Créatinine 9.2 mg/dL — Urée 28 mmol/L',       icon: 'science',         typeClass: 'bilan'        },
        { date: '25/03/2026', type: 'seance',       description: 'Séance hémodialyse 4h — Machine M-03',      notes: 'RAS',                                          icon: 'water_drop',      typeClass: 'seance'       },
        { date: '20/03/2026', type: 'consultation', description: 'Consultation néphrologue',                   notes: 'Révision protocole EPO — ajustement posologie', icon: 'medical_services', typeClass: 'consultation' },
      ],
    },
    {
      id: 2, initials: 'SB', nom: 'Saidi Bouchra', genre: 'F', age: 45,
      dateNaissance: '22/07/1980', cin: 'AB123456', telephone: '06 23 45 67 89',
      adresse: '5 Avenue Mohammed V, Rabat',
      groupeSanguin: 'A+', allergies: 'Aucune connue',
      pathologie: 'IRC', debutDialyse: '10/01/2022',
      poids: '58 kg', taille: '162 cm', tension: '130/82 mmHg',
      prochaine: '03/04 · 10:30',
      creatinine: '5.8 mg/dL', creatinineClass: '',
      uree: '18 mmol/L', hemoglobine: '10.5 g/dL',
      statut: 'Stable', statutClass: 'ok',
      historique: [
        { date: '31/03/2026', type: 'seance',  description: 'Séance hémodialyse 4h — Machine M-07',     notes: 'RAS',                       icon: 'water_drop', typeClass: 'seance' },
        { date: '28/03/2026', type: 'bilan',   description: 'Bilan mensuel',                             notes: 'Paramètres stables, Hb 10.5', icon: 'science',    typeClass: 'bilan'  },
        { date: '28/03/2026', type: 'seance',  description: 'Séance hémodialyse 4h — Machine M-07',     notes: 'Bonne tolérance',            icon: 'water_drop', typeClass: 'seance' },
      ],
    },
    {
      id: 3, initials: 'ME', nom: 'Moussaoui El Hassan', genre: 'H', age: 67,
      dateNaissance: '05/11/1958', cin: 'CD345678', telephone: '06 34 56 78 90',
      adresse: '8 Rue Ibn Battouta, Fès',
      groupeSanguin: 'O-', allergies: 'AINS',
      pathologie: 'DRC', debutDialyse: '03/09/2018',
      poids: '68 kg', taille: '170 cm', tension: '180/105 mmHg',
      prochaine: '04/04 · 08:00',
      creatinine: '7.1 mg/dL', creatinineClass: 'warn-val',
      uree: '22 mmol/L', hemoglobine: '9.2 g/dL',
      statut: 'Attention', statutClass: 'warn',
      historique: [
        { date: '01/04/2026', type: 'urgence',      description: 'Alerte pression artérielle 180/105 mmHg',  notes: 'Antihypertenseur IV administré — médecin alerté', icon: 'warning',          typeClass: 'urgence'      },
        { date: '29/03/2026', type: 'seance',       description: 'Séance hémodialyse 4h — Machine M-02',     notes: 'Pression limite en fin de séance',                icon: 'water_drop',       typeClass: 'seance'       },
        { date: '26/03/2026', type: 'consultation', description: 'Consultation cardiologie',                  notes: 'ECG normal — adaptation traitement antihypertenseur', icon: 'medical_services', typeClass: 'consultation' },
      ],
    },
    {
      id: 4, initials: 'FZ', nom: 'Filali Zineb', genre: 'F', age: 52,
      dateNaissance: '18/04/1973', cin: 'EF456789', telephone: '06 45 67 89 01',
      adresse: '23 Boulevard Zerktouni, Casablanca',
      groupeSanguin: 'AB+', allergies: 'Aspirine',
      pathologie: 'IRC', debutDialyse: '20/03/2021',
      poids: '62 kg', taille: '165 cm', tension: '125/78 mmHg',
      prochaine: '05/04 · 14:00',
      creatinine: '4.9 mg/dL', creatinineClass: '',
      uree: '15 mmol/L', hemoglobine: '11.2 g/dL',
      statut: 'Stable', statutClass: 'ok',
      historique: [
        { date: '29/03/2026', type: 'seance', description: 'Séance hémodialyse 3.5h — Machine M-09', notes: 'Bonne tolérance', icon: 'water_drop', typeClass: 'seance' },
        { date: '25/03/2026', type: 'bilan',  description: 'Bilan biologique trimestriel',           notes: 'Amélioration Hb — 11.2 g/dL', icon: 'science', typeClass: 'bilan' },
      ],
    },
    {
      id: 5, initials: 'OB', nom: 'Ouali Badreddine', genre: 'H', age: 39,
      dateNaissance: '30/09/1986', cin: 'GH567890', telephone: '06 56 78 90 12',
      adresse: '4 Rue Allal Ben Abdallah, Marrakech',
      groupeSanguin: 'A-', allergies: 'Aucune connue',
      pathologie: 'IRC', debutDialyse: '12/11/2023',
      poids: '80 kg', taille: '178 cm', tension: '135/85 mmHg',
      prochaine: '05/04 · 16:30',
      creatinine: '5.2 mg/dL', creatinineClass: '',
      uree: '16 mmol/L', hemoglobine: '10.8 g/dL',
      statut: 'Stable', statutClass: 'ok',
      historique: [
        { date: '30/03/2026', type: 'seance',       description: 'Séance hémodialyse 4h — Machine M-05', notes: 'RAS',             icon: 'water_drop',       typeClass: 'seance'       },
        { date: '20/03/2026', type: 'consultation', description: 'Consultation néphrologue',               notes: 'Suivi régulier', icon: 'medical_services', typeClass: 'consultation' },
      ],
    },
  ];

  get filteredPatients(): Patient[] {
    const q = this.searchQuery.trim().toLowerCase();
    return this.allPatients.filter(p =>
      (!this.filterPathologie || p.pathologie === this.filterPathologie) &&
      (!q || p.nom.toLowerCase().includes(q) || p.cin.toLowerCase().includes(q) || p.pathologie.toLowerCase().includes(q))
    );
  }

  // ── Dossier ──
  selectedPatient: Patient | null = null;

  openDossier(p: Patient, tab: 'info' | 'historique' | 'ordonnances' = 'info'): void {
    this.selectedPatient = p;
    this.dossierTab = tab;
    this.activeSection = 'dossier';
    this.showNotifPanel = false;
  }

  backToPatients(): void {
    this.selectedPatient = null;
    this.activeSection = 'patients';
  }

  // ── New Patient Modal ──
  showNouveauPatientModal = false;
  newPatient = { nom: '', prenom: '', age: '', genre: 'H', pathologie: 'IRC', cin: '', telephone: '' };

  ouvrirNouveauPatient(): void { this.showNouveauPatientModal = true; }

  fermerNouveauPatient(): void {
    this.showNouveauPatientModal = false;
    this.newPatient = { nom: '', prenom: '', age: '', genre: 'H', pathologie: 'IRC', cin: '', telephone: '' };
  }

  ajouterPatient(): void {
    if (!this.newPatient.nom.trim() || !this.newPatient.prenom.trim() || !this.newPatient.age) {
      this.showToast('Veuillez remplir tous les champs obligatoires', 'warning'); return;
    }
    const initials = (this.newPatient.prenom[0] + this.newPatient.nom[0]).toUpperCase();
    const id = Math.max(...this.allPatients.map(p => p.id)) + 1;
    this.allPatients.unshift({
      id, initials,
      nom:            `${this.newPatient.nom} ${this.newPatient.prenom}`,
      genre:          this.newPatient.genre,
      age:            +this.newPatient.age,
      dateNaissance:  '—',
      cin:            this.newPatient.cin || '—',
      telephone:      this.newPatient.telephone || '—',
      adresse:        '—',
      groupeSanguin:  '—',
      allergies:      'Aucune connue',
      pathologie:     this.newPatient.pathologie,
      debutDialyse:   new Date().toLocaleDateString('fr-FR'),
      poids:          '—',
      taille:         '—',
      tension:        '—',
      prochaine:      'À planifier',
      creatinine:     '—',
      creatinineClass: '',
      uree:           '—',
      hemoglobine:    '—',
      statut:         'Stable',
      statutClass:    'ok',
      historique:     [],
    });
    this.fermerNouveauPatient();
    this.showToast('Patient ajouté avec succès', 'success');
  }

  // ── Ordonnances ──
  private nextOrdId = 10;
  searchOrdonnances = '';
  filterOrdStatut: '' | 'active' | 'terminee' | 'annulee' = '';
  filterOrdPatient = '';
  selectedOrdonnance: Ordonnance | null = null;
  showOrdonnanceDetail = false;

  ordonnances: Ordonnance[] = [
    {
      id: 1, date: '01/04/2026', patientId: 1, patientNom: 'Alaoui Khalid', patientInit: 'AK',
      medicaments: [
        { nom: 'EPO (Érythropoïétine)', dosage: '4000 UI', voie: 'SC', frequence: '3×/semaine', duree: '3 mois' },
        { nom: 'Fer sucrose (Venofer)',  dosage: '200 mg',  voie: 'IV', frequence: '1×/semaine', duree: '4 semaines' },
      ],
      note: 'Contrôle bilan dans 4 semaines. Surveiller Hb cible > 10 g/dL.',
      statut: 'active',
    },
    {
      id: 2, date: '28/03/2026', patientId: 3, patientNom: 'Moussaoui El Hassan', patientInit: 'ME',
      medicaments: [
        { nom: 'Furosémide',  dosage: '40 mg',  voie: 'oral', frequence: '2×/jour',  duree: '1 mois'  },
        { nom: 'Amlodipine',  dosage: '10 mg',  voie: 'oral', frequence: '1×/jour',  duree: 'continu' },
        { nom: 'Losartan',    dosage: '50 mg',  voie: 'oral', frequence: '1×/jour',  duree: 'continu' },
      ],
      note: 'Surveillance tension artérielle quotidienne. Objectif < 140/90.',
      statut: 'active',
    },
    {
      id: 3, date: '25/03/2026', patientId: 2, patientNom: 'Saidi Bouchra', patientInit: 'SB',
      medicaments: [
        { nom: 'Fer IV (Venofer)', dosage: '200 mg', voie: 'IV perf.', frequence: '1×/semaine', duree: '4 semaines' },
      ],
      note: 'Bilan anémie à refaire dans 1 mois. Objectif Hb > 11 g/dL.',
      statut: 'active',
    },
    {
      id: 4, date: '10/03/2026', patientId: 1, patientNom: 'Alaoui Khalid', patientInit: 'AK',
      medicaments: [
        { nom: 'Sévélamer (Renagel)', dosage: '800 mg', voie: 'oral', frequence: '3×/jour (repas)', duree: '3 mois' },
      ],
      note: 'Phosphorémie élevée — régime pauvre en phosphore.',
      statut: 'terminee',
    },
    {
      id: 5, date: '05/03/2026', patientId: 4, patientNom: 'Filali Zineb', patientInit: 'FZ',
      medicaments: [
        { nom: 'Alfacalcidol', dosage: '0.5 mcg', voie: 'oral', frequence: '1×/jour', duree: '2 mois' },
      ],
      note: 'Suivi vitamine D. Contrôle calcémie dans 6 semaines.',
      statut: 'active',
    },
    {
      id: 6, date: '20/02/2026', patientId: 5, patientNom: 'Ouali Badreddine', patientInit: 'OB',
      medicaments: [
        { nom: 'Carbonate de calcium', dosage: '500 mg', voie: 'oral', frequence: '3×/jour', duree: '2 mois' },
      ],
      note: 'Hypocalcémie légère. Réévaluation à 8 semaines.',
      statut: 'terminee',
    },
  ];

  get filteredOrdonnances(): Ordonnance[] {
    const q = this.searchOrdonnances.trim().toLowerCase();
    return this.ordonnances.filter(o =>
      (!this.filterOrdStatut  || o.statut     === this.filterOrdStatut) &&
      (!this.filterOrdPatient || o.patientNom === this.filterOrdPatient) &&
      (!q || o.patientNom.toLowerCase().includes(q) || o.medicaments.some(m => m.nom.toLowerCase().includes(q)))
    );
  }

  get ordonnancesForSelectedPatient(): Ordonnance[] {
    if (!this.selectedPatient) return [];
    return this.ordonnances.filter(o => o.patientId === this.selectedPatient!.id);
  }

  openOrdonnanceDetail(o: Ordonnance): void {
    this.selectedOrdonnance = o;
    this.showOrdonnanceDetail = true;
  }

  annulerOrdonnance(o: Ordonnance): void {
    o.statut = 'annulee';
    this.showOrdonnanceDetail = false;
    this.showToast(`Ordonnance N°${o.id} annulée`, 'warning');
  }

  // ── Nouvelle Ordonnance Modal ──
  showNouvelleOrdonnanceModal = false;
  newOrd: { patientNom: string; patientId: number; medicaments: MedicamentRx[]; note: string } = {
    patientNom: '', patientId: 0,
    medicaments: [{ nom: '', dosage: '', voie: 'oral', frequence: '', duree: '' }],
    note: '',
  };

  openNouvelleOrdonnance(patient?: Patient): void {
    this.newOrd = {
      patientNom: patient?.nom ?? '',
      patientId:  patient?.id  ?? 0,
      medicaments: [{ nom: '', dosage: '', voie: 'oral', frequence: '', duree: '' }],
      note: '',
    };
    this.showNouvelleOrdonnanceModal = true;
  }

  onOrdPatientChange(): void {
    const p = this.allPatients.find(p => p.nom === this.newOrd.patientNom);
    this.newOrd.patientId = p?.id ?? 0;
  }

  ajouterMedicamentLigne(): void {
    this.newOrd.medicaments.push({ nom: '', dosage: '', voie: 'oral', frequence: '', duree: '' });
  }

  supprimerMedicamentLigne(idx: number): void {
    if (this.newOrd.medicaments.length > 1) this.newOrd.medicaments.splice(idx, 1);
  }

  sauvegarderOrdonnance(): void {
    if (!this.newOrd.patientNom.trim()) { this.showToast('Sélectionnez un patient', 'warning'); return; }
    const validMeds = this.newOrd.medicaments.filter(m => m.nom.trim());
    if (validMeds.length === 0) { this.showToast('Ajoutez au moins un médicament', 'warning'); return; }
    const patient  = this.allPatients.find(p => p.nom === this.newOrd.patientNom);
    const init     = patient?.initials ?? this.newOrd.patientNom.slice(0, 2).toUpperCase();
    this.ordonnances.unshift({
      id:          ++this.nextOrdId,
      date:        new Date().toLocaleDateString('fr-FR'),
      patientId:   patient?.id ?? 0,
      patientNom:  this.newOrd.patientNom,
      patientInit: init,
      medicaments: validMeds,
      note:        this.newOrd.note,
      statut:      'active',
    });
    this.showNouvelleOrdonnanceModal = false;
    this.showToast(`Ordonnance créée pour ${this.newOrd.patientNom}`, 'success');
  }

  // ── KPI getters ──
  get activeOrdCount():   number { return this.ordonnances.filter(o => o.statut === 'active').length; }
  get criticalCount():    number { return this.allPatients.filter(p => p.statutClass === 'crit').length; }

  // ── Alerts ──
  voirAlert(keyword: string): void {
    const patient = this.allPatients.find(p => p.nom.toLowerCase().includes(keyword.toLowerCase()));
    if (patient) this.openDossier(patient);
    else this.showToast('Patient introuvable', 'warning');
  }

  // ── Notifications ──
  showNotifPanel = false;

  notifications: Notification[] = [
    { icon: 'emergency',    text: 'Alaoui Khalid — Créatinine critique (9.2 mg/dL)', time: 'il y a 2h', type: 'crit', read: false },
    { icon: 'warning_amber',text: 'Moussaoui H. — Pression artérielle 180/105 mmHg', time: 'il y a 5h', type: 'warn', read: false },
    { icon: 'medication',   text: '3 ordonnances en attente de validation',           time: 'il y a 8h', type: 'info', read: true  },
  ];

  get unreadCount(): number { return this.notifications.filter(n => !n.read).length; }

  toggleNotifPanel(): void { this.showNotifPanel = !this.showNotifPanel; }
  markAllRead():      void { this.notifications.forEach(n => (n.read = true)); this.showToast('Notifications marquées comme lues', 'info'); }
  markNotifRead(n: Notification): void { n.read = true; }

  openSearch():   void { this.showToast('Recherche globale — bientôt disponible', 'info'); }
  openSettings(): void { this.showToast('Paramètres — bientôt disponible', 'info'); }

  // ── Helpers ──
  ordStatutLabel(s: string): string { return s === 'active' ? 'Active' : s === 'terminee' ? 'Terminée' : 'Annulée'; }
  ordStatutClass(s: string): string { return s === 'active' ? 'ok' : s === 'terminee' ? 'info' : 'danger'; }
  histoLabel(type: string):  string { return ({ seance: 'Séance', bilan: 'Bilan', consultation: 'Consultation', urgence: 'Urgence' } as Record<string,string>)[type] ?? type; }
  voieLabel(v: string):      string { return v; }

  // ── Toast ──
  private toastIdCounter = 0;
  toasts: Toast[] = [];

  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.toastIdCounter;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.removeToast(id), 3500);
  }

  removeToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }

  toastIcon(type: string): string {
    return ({ success: 'check_circle', warning: 'warning', error: 'error', info: 'info' } as Record<string,string>)[type] ?? 'info';
  }

  logout(): void { this.router.navigate(['/login']); }
}
