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

export interface Ordonnance {
  id: number;
  dateEmission: string;
  dateExpiration: string;
  medicaments: string;
  posologie: string;
  instructions: string;
  statut: 'active' | 'terminee' | 'annulee';
  // relations display
  patientId: number;
  patientNom: string;
  patientInit: string;
}

export interface DossierPatient {
  idPatient: number;
  dateCreation: string;
  tensionArterielle: string;
  temperature: number;
  glycemieCapillaire: number;
  saturation: number;
  antecedents: string;
  frequenceCardiaque: number;
  frequenceRespiratoire: number;
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
  pathologie: string;
  debutDialyse: string;
  poids: string;
  taille: string;
  prochaine: string;
  creatinine: string;
  creatinineClass: string;
  uree: string;
  hemoglobine: string;
  statut: string;
  statutClass: string;
  historique: HistoriqueItem[];
  dossier: DossierPatient;
}

export interface BilanResult {
  parametre: string;
  valeur: string;
  unite: string;
  norme: string;
  classe: 'ok' | 'warn' | 'crit' | '';
  tendance: 'up' | 'down' | 'stable';
}

export interface Bilan {
  id: number;
  patientId: number;
  patientNom: string;
  patientInit: string;
  date: string;
  type: string;
  resultats: BilanResult[];
  statut: 'normal' | 'anormal' | 'critique';
}

export interface AnalyseBiologique {
  id: number;
  patientId: number;
  patientNom: string;
  patientInit: string;
  date: string;
  creatinine: number;
  uree: number;
  hemoglobine: number;
  potassium: number;
  sodium: number;
  calcium: number;
  phosphore: number;
  albumine: number;
}

export interface Protocole {
  id: number;
  patientId: number;
  patientNom: string;
  patientInit: string;
  pathologie: string;
  typeDialyse: string;
  dureeSeance: string;
  frequence: string;
  debitSanguin: string;
  debitDialysat: string;
  membrane: string;
  anticoagulant: string;
  poidsSecRef: string;
  objectifUf: string;
  actif: boolean;
  dateCreation: string;
  dateMaj: string;
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

  // ── Helpers ──
  get today(): string { return new Date().toLocaleDateString('fr-FR'); }

  // ── Navigation ──
  activeSection = 'dashboard';
  dossierTab: 'info' | 'historique' | 'ordonnances' = 'info';

  get sectionTitle(): string {
    const map: Record<string, string> = {
      dashboard:   'Tableau de Bord',
      patients:    'Mes Patients',
      dossier:     this.selectedPatient ? `Dossier — ${this.selectedPatient.nom}` : 'Dossier Patient',
      ordonnances: 'Ordonnances',
      alertes:     'Alertes Critiques',
      bilans:      'Bilans & Résultats',
      analyses:    'Analyses Biologiques',
      protocoles:  'Protocoles de Dialyse',
    };
    return map[this.activeSection] ?? 'Tableau de Bord';
  }

  setSection(section: string): void {
    if (section === 'planning') { this.router.navigate(['/planning']); return; }
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
      groupeSanguin: 'B+',
      pathologie: 'DRC', debutDialyse: '15/06/2020',
      poids: '72 kg', taille: '175 cm',
      prochaine: '03/04 · 08:00',
      creatinine: '9.2 mg/dL', creatinineClass: 'crit-val',
      uree: '28 mmol/L', hemoglobine: '8.1 g/dL',
      statut: 'Critique', statutClass: 'crit',
      dossier: {
        idPatient: 1, dateCreation: '15/06/2020',
        tensionArterielle: '145/92 mmHg', temperature: 37.8,
        glycemieCapillaire: 6.2, saturation: 94,
        antecedents: 'Insuffisance rénale chronique stade 5, HTA, Diabète type 2, Allergie Pénicilline',
        frequenceCardiaque: 92, frequenceRespiratoire: 18,
      },
      historique: [
        { date: '01/04/2026', type: 'seance',       description: 'Séance hémodialyse 4h — Machine M-03',      notes: 'Tension élevée en fin de séance',              icon: 'water_drop',       typeClass: 'seance'       },
        { date: '28/03/2026', type: 'bilan',        description: 'Bilan biologique complet',                  notes: 'Créatinine 9.2 mg/dL — Urée 28 mmol/L',       icon: 'science',          typeClass: 'bilan'        },
        { date: '25/03/2026', type: 'seance',       description: 'Séance hémodialyse 4h — Machine M-03',      notes: 'RAS',                                          icon: 'water_drop',       typeClass: 'seance'       },
        { date: '20/03/2026', type: 'consultation', description: 'Consultation néphrologue',                   notes: 'Révision protocole EPO — ajustement posologie', icon: 'medical_services', typeClass: 'consultation' },
      ],
    },
    {
      id: 2, initials: 'SB', nom: 'Saidi Bouchra', genre: 'F', age: 45,
      dateNaissance: '22/07/1980', cin: 'AB123456', telephone: '06 23 45 67 89',
      adresse: '5 Avenue Mohammed V, Rabat',
      groupeSanguin: 'A+',
      pathologie: 'IRC', debutDialyse: '10/01/2022',
      poids: '58 kg', taille: '162 cm',
      prochaine: '03/04 · 10:30',
      creatinine: '5.8 mg/dL', creatinineClass: '',
      uree: '18 mmol/L', hemoglobine: '10.5 g/dL',
      statut: 'Stable', statutClass: 'ok',
      dossier: {
        idPatient: 2, dateCreation: '10/01/2022',
        tensionArterielle: '130/82 mmHg', temperature: 36.9,
        glycemieCapillaire: 5.4, saturation: 97,
        antecedents: 'IRC stade 4, Aucune allergie médicamenteuse connue',
        frequenceCardiaque: 76, frequenceRespiratoire: 15,
      },
      historique: [
        { date: '31/03/2026', type: 'seance', description: 'Séance hémodialyse 4h — Machine M-07',     notes: 'RAS',                        icon: 'water_drop', typeClass: 'seance' },
        { date: '28/03/2026', type: 'bilan',  description: 'Bilan mensuel',                             notes: 'Paramètres stables, Hb 10.5', icon: 'science',    typeClass: 'bilan'  },
        { date: '28/03/2026', type: 'seance', description: 'Séance hémodialyse 4h — Machine M-07',     notes: 'Bonne tolérance',             icon: 'water_drop', typeClass: 'seance' },
      ],
    },
    {
      id: 3, initials: 'ME', nom: 'Moussaoui El Hassan', genre: 'H', age: 67,
      dateNaissance: '05/11/1958', cin: 'CD345678', telephone: '06 34 56 78 90',
      adresse: '8 Rue Ibn Battouta, Fès',
      groupeSanguin: 'O-',
      pathologie: 'DRC', debutDialyse: '03/09/2018',
      poids: '68 kg', taille: '170 cm',
      prochaine: '04/04 · 08:00',
      creatinine: '7.1 mg/dL', creatinineClass: 'warn-val',
      uree: '22 mmol/L', hemoglobine: '9.2 g/dL',
      statut: 'Attention', statutClass: 'warn',
      dossier: {
        idPatient: 3, dateCreation: '03/09/2018',
        tensionArterielle: '180/105 mmHg', temperature: 37.2,
        glycemieCapillaire: 7.8, saturation: 95,
        antecedents: 'DRC stade 5, HTA sévère, Allergie AINS, Antécédent AVC 2019',
        frequenceCardiaque: 88, frequenceRespiratoire: 20,
      },
      historique: [
        { date: '01/04/2026', type: 'urgence',      description: 'Alerte pression artérielle 180/105 mmHg',  notes: 'Antihypertenseur IV administré — médecin alerté',    icon: 'warning',          typeClass: 'urgence'      },
        { date: '29/03/2026', type: 'seance',       description: 'Séance hémodialyse 4h — Machine M-02',     notes: 'Pression limite en fin de séance',                   icon: 'water_drop',       typeClass: 'seance'       },
        { date: '26/03/2026', type: 'consultation', description: 'Consultation cardiologie',                  notes: 'ECG normal — adaptation traitement antihypertenseur', icon: 'medical_services', typeClass: 'consultation' },
      ],
    },
    {
      id: 4, initials: 'FZ', nom: 'Filali Zineb', genre: 'F', age: 52,
      dateNaissance: '18/04/1973', cin: 'EF456789', telephone: '06 45 67 89 01',
      adresse: '23 Boulevard Zerktouni, Casablanca',
      groupeSanguin: 'AB+',
      pathologie: 'IRC', debutDialyse: '20/03/2021',
      poids: '62 kg', taille: '165 cm',
      prochaine: '05/04 · 14:00',
      creatinine: '4.9 mg/dL', creatinineClass: '',
      uree: '15 mmol/L', hemoglobine: '11.2 g/dL',
      statut: 'Stable', statutClass: 'ok',
      dossier: {
        idPatient: 4, dateCreation: '20/03/2021',
        tensionArterielle: '125/78 mmHg', temperature: 36.7,
        glycemieCapillaire: 5.1, saturation: 98,
        antecedents: 'IRC stade 4, Allergie Aspirine, Hypothyroïdie traitée',
        frequenceCardiaque: 72, frequenceRespiratoire: 14,
      },
      historique: [
        { date: '29/03/2026', type: 'seance', description: 'Séance hémodialyse 3.5h — Machine M-09', notes: 'Bonne tolérance',             icon: 'water_drop', typeClass: 'seance' },
        { date: '25/03/2026', type: 'bilan',  description: 'Bilan biologique trimestriel',           notes: 'Amélioration Hb — 11.2 g/dL', icon: 'science',    typeClass: 'bilan'  },
      ],
    },
    {
      id: 5, initials: 'OB', nom: 'Ouali Badreddine', genre: 'H', age: 39,
      dateNaissance: '30/09/1986', cin: 'GH567890', telephone: '06 56 78 90 12',
      adresse: '4 Rue Allal Ben Abdallah, Marrakech',
      groupeSanguin: 'A-',
      pathologie: 'IRC', debutDialyse: '12/11/2023',
      poids: '80 kg', taille: '178 cm',
      prochaine: '05/04 · 16:30',
      creatinine: '5.2 mg/dL', creatinineClass: '',
      uree: '16 mmol/L', hemoglobine: '10.8 g/dL',
      statut: 'Stable', statutClass: 'ok',
      dossier: {
        idPatient: 5, dateCreation: '12/11/2023',
        tensionArterielle: '135/85 mmHg', temperature: 36.8,
        glycemieCapillaire: 5.6, saturation: 97,
        antecedents: 'IRC stade 3, Aucune allergie connue',
        frequenceCardiaque: 68, frequenceRespiratoire: 15,
      },
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

  // ── Ordonnances ──
  private nextOrdId = 10;
  searchOrdonnances = '';
  filterOrdStatut: '' | 'active' | 'terminee' | 'annulee' = '';
  filterOrdPatient = '';
  selectedOrdonnance: Ordonnance | null = null;
  showOrdonnanceDetail = false;

  ordonnances: Ordonnance[] = [
    {
      id: 1, dateEmission: '01/04/2026', dateExpiration: '01/07/2026',
      patientId: 1, patientNom: 'Alaoui Khalid', patientInit: 'AK',
      medicaments: 'EPO (Érythropoïétine) 4000 UI SC, Fer sucrose (Venofer) 200 mg IV',
      posologie: 'EPO : 3×/semaine — Fer sucrose : 1×/semaine pendant 4 semaines',
      instructions: 'Contrôle bilan dans 4 semaines. Surveiller Hb cible > 10 g/dL.',
      statut: 'active',
    },
    {
      id: 2, dateEmission: '28/03/2026', dateExpiration: '28/04/2026',
      patientId: 3, patientNom: 'Moussaoui El Hassan', patientInit: 'ME',
      medicaments: 'Furosémide 40 mg, Amlodipine 10 mg, Losartan 50 mg',
      posologie: 'Furosémide : 2×/jour — Amlodipine : 1×/jour — Losartan : 1×/jour (continu)',
      instructions: 'Surveillance tension artérielle quotidienne. Objectif < 140/90 mmHg.',
      statut: 'active',
    },
    {
      id: 3, dateEmission: '25/03/2026', dateExpiration: '25/04/2026',
      patientId: 2, patientNom: 'Saidi Bouchra', patientInit: 'SB',
      medicaments: 'Fer IV (Venofer) 200 mg',
      posologie: '1×/semaine en perfusion IV — 4 semaines',
      instructions: 'Bilan anémie à refaire dans 1 mois. Objectif Hb > 11 g/dL.',
      statut: 'active',
    },
    {
      id: 4, dateEmission: '10/03/2026', dateExpiration: '10/06/2026',
      patientId: 1, patientNom: 'Alaoui Khalid', patientInit: 'AK',
      medicaments: 'Sévélamer (Renagel) 800 mg oral',
      posologie: '3×/jour aux repas — 3 mois',
      instructions: 'Phosphorémie élevée — régime pauvre en phosphore.',
      statut: 'terminee',
    },
    {
      id: 5, dateEmission: '05/03/2026', dateExpiration: '05/05/2026',
      patientId: 4, patientNom: 'Filali Zineb', patientInit: 'FZ',
      medicaments: 'Alfacalcidol 0.5 mcg oral',
      posologie: '1×/jour — 2 mois',
      instructions: 'Suivi vitamine D. Contrôle calcémie dans 6 semaines.',
      statut: 'active',
    },
    {
      id: 6, dateEmission: '20/02/2026', dateExpiration: '20/04/2026',
      patientId: 5, patientNom: 'Ouali Badreddine', patientInit: 'OB',
      medicaments: 'Carbonate de calcium 500 mg oral',
      posologie: '3×/jour — 2 mois',
      instructions: 'Hypocalcémie légère. Réévaluation à 8 semaines.',
      statut: 'terminee',
    },
  ];

  get filteredOrdonnances(): Ordonnance[] {
    const q = this.searchOrdonnances.trim().toLowerCase();
    return this.ordonnances.filter(o =>
      (!this.filterOrdStatut  || o.statut     === this.filterOrdStatut) &&
      (!this.filterOrdPatient || o.patientNom === this.filterOrdPatient) &&
      (!q || o.patientNom.toLowerCase().includes(q) || o.medicaments.toLowerCase().includes(q))
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
  newOrd: { patientNom: string; patientId: number; medicaments: string; posologie: string; instructions: string; dateExpiration: string } = {
    patientNom: '', patientId: 0, medicaments: '', posologie: '', instructions: '', dateExpiration: '',
  };

  openNouvelleOrdonnance(patient?: Patient): void {
    this.newOrd = {
      patientNom:     patient?.nom ?? '',
      patientId:      patient?.id  ?? 0,
      medicaments:    '', posologie: '', instructions: '', dateExpiration: '',
    };
    this.showNouvelleOrdonnanceModal = true;
  }

  onOrdPatientChange(): void {
    const p = this.allPatients.find(p => p.nom === this.newOrd.patientNom);
    this.newOrd.patientId = p?.id ?? 0;
  }

  sauvegarderOrdonnance(): void {
    if (!this.newOrd.patientNom.trim())   { this.showToast('Sélectionnez un patient', 'warning'); return; }
    if (!this.newOrd.medicaments.trim())  { this.showToast('Saisissez les médicaments', 'warning'); return; }
    const patient = this.allPatients.find(p => p.nom === this.newOrd.patientNom);
    const init    = patient?.initials ?? this.newOrd.patientNom.slice(0, 2).toUpperCase();
    const today   = new Date().toLocaleDateString('fr-FR');
    this.ordonnances.unshift({
      id:             ++this.nextOrdId,
      dateEmission:   today,
      dateExpiration: this.newOrd.dateExpiration || '—',
      patientId:      patient?.id ?? 0,
      patientNom:     this.newOrd.patientNom,
      patientInit:    init,
      medicaments:    this.newOrd.medicaments,
      posologie:      this.newOrd.posologie,
      instructions:   this.newOrd.instructions,
      statut:         'active',
    });
    this.showNouvelleOrdonnanceModal = false;
    this.showToast(`Ordonnance créée pour ${this.newOrd.patientNom}`, 'success');
  }

  // ── Bilans & Résultats ──
  searchBilans = '';
  filterBilanPatient = '';
  filterBilanStatut: '' | 'normal' | 'anormal' | 'critique' = '';
  selectedBilan: Bilan | null = null;
  showBilanDetail = false;

  bilans: Bilan[] = [
    {
      id: 1, patientId: 1, patientNom: 'Alaoui Khalid', patientInit: 'AK',
      date: '28/03/2026', type: 'Bilan biologique complet', statut: 'critique',
      resultats: [
        { parametre: 'Créatinine',    valeur: '9.2',  unite: 'mg/dL',   norme: '0.7–1.2',  classe: 'crit',  tendance: 'up'     },
        { parametre: 'Urée',          valeur: '28',   unite: 'mmol/L',  norme: '2.5–7.5',  classe: 'crit',  tendance: 'up'     },
        { parametre: 'Hémoglobine',   valeur: '8.1',  unite: 'g/dL',    norme: '12–16',    classe: 'warn',  tendance: 'down'   },
        { parametre: 'Potassium',     valeur: '5.8',  unite: 'mEq/L',   norme: '3.5–5.0',  classe: 'warn',  tendance: 'up'     },
        { parametre: 'Sodium',        valeur: '138',  unite: 'mEq/L',   norme: '136–145',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Calcium',       valeur: '1.98', unite: 'mmol/L',  norme: '2.2–2.6',  classe: 'warn',  tendance: 'down'   },
        { parametre: 'Phosphore',     valeur: '2.1',  unite: 'mmol/L',  norme: '0.8–1.5',  classe: 'crit',  tendance: 'up'     },
        { parametre: 'Albumine',      valeur: '33',   unite: 'g/L',     norme: '38–50',    classe: 'warn',  tendance: 'down'   },
      ],
    },
    {
      id: 2, patientId: 3, patientNom: 'Moussaoui El Hassan', patientInit: 'ME',
      date: '01/04/2026', type: 'Bilan urgent', statut: 'anormal',
      resultats: [
        { parametre: 'Créatinine',    valeur: '7.1',  unite: 'mg/dL',   norme: '0.7–1.2',  classe: 'warn',  tendance: 'stable' },
        { parametre: 'Urée',          valeur: '22',   unite: 'mmol/L',  norme: '2.5–7.5',  classe: 'crit',  tendance: 'stable' },
        { parametre: 'Hémoglobine',   valeur: '9.2',  unite: 'g/dL',    norme: '12–16',    classe: 'warn',  tendance: 'down'   },
        { parametre: 'Potassium',     valeur: '4.8',  unite: 'mEq/L',   norme: '3.5–5.0',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Sodium',        valeur: '140',  unite: 'mEq/L',   norme: '136–145',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Calcium',       valeur: '2.1',  unite: 'mmol/L',  norme: '2.2–2.6',  classe: 'warn',  tendance: 'down'   },
        { parametre: 'Phosphore',     valeur: '1.7',  unite: 'mmol/L',  norme: '0.8–1.5',  classe: 'warn',  tendance: 'up'     },
        { parametre: 'Albumine',      valeur: '36',   unite: 'g/L',     norme: '38–50',    classe: 'warn',  tendance: 'stable' },
      ],
    },
    {
      id: 3, patientId: 2, patientNom: 'Saidi Bouchra', patientInit: 'SB',
      date: '28/03/2026', type: 'Bilan mensuel', statut: 'normal',
      resultats: [
        { parametre: 'Créatinine',    valeur: '5.8',  unite: 'mg/dL',   norme: '0.7–1.2',  classe: 'warn',  tendance: 'stable' },
        { parametre: 'Urée',          valeur: '18',   unite: 'mmol/L',  norme: '2.5–7.5',  classe: 'crit',  tendance: 'down'   },
        { parametre: 'Hémoglobine',   valeur: '10.5', unite: 'g/dL',    norme: '12–16',    classe: 'warn',  tendance: 'up'     },
        { parametre: 'Potassium',     valeur: '4.2',  unite: 'mEq/L',   norme: '3.5–5.0',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Sodium',        valeur: '139',  unite: 'mEq/L',   norme: '136–145',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Calcium',       valeur: '2.3',  unite: 'mmol/L',  norme: '2.2–2.6',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Phosphore',     valeur: '1.2',  unite: 'mmol/L',  norme: '0.8–1.5',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Albumine',      valeur: '40',   unite: 'g/L',     norme: '38–50',    classe: 'ok',    tendance: 'up'     },
      ],
    },
    {
      id: 4, patientId: 4, patientNom: 'Filali Zineb', patientInit: 'FZ',
      date: '25/03/2026', type: 'Bilan trimestriel', statut: 'normal',
      resultats: [
        { parametre: 'Créatinine',    valeur: '4.9',  unite: 'mg/dL',   norme: '0.7–1.2',  classe: 'warn',  tendance: 'down'   },
        { parametre: 'Urée',          valeur: '15',   unite: 'mmol/L',  norme: '2.5–7.5',  classe: 'crit',  tendance: 'down'   },
        { parametre: 'Hémoglobine',   valeur: '11.2', unite: 'g/dL',    norme: '12–16',    classe: 'warn',  tendance: 'up'     },
        { parametre: 'Potassium',     valeur: '4.0',  unite: 'mEq/L',   norme: '3.5–5.0',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Sodium',        valeur: '141',  unite: 'mEq/L',   norme: '136–145',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Calcium',       valeur: '2.4',  unite: 'mmol/L',  norme: '2.2–2.6',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Phosphore',     valeur: '1.0',  unite: 'mmol/L',  norme: '0.8–1.5',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Albumine',      valeur: '41',   unite: 'g/L',     norme: '38–50',    classe: 'ok',    tendance: 'stable' },
      ],
    },
    {
      id: 5, patientId: 5, patientNom: 'Ouali Badreddine', patientInit: 'OB',
      date: '30/03/2026', type: 'Bilan mensuel', statut: 'anormal',
      resultats: [
        { parametre: 'Créatinine',    valeur: '5.2',  unite: 'mg/dL',   norme: '0.7–1.2',  classe: 'warn',  tendance: 'stable' },
        { parametre: 'Urée',          valeur: '16',   unite: 'mmol/L',  norme: '2.5–7.5',  classe: 'crit',  tendance: 'stable' },
        { parametre: 'Hémoglobine',   valeur: '10.8', unite: 'g/dL',    norme: '12–16',    classe: 'warn',  tendance: 'up'     },
        { parametre: 'Potassium',     valeur: '4.5',  unite: 'mEq/L',   norme: '3.5–5.0',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Sodium',        valeur: '137',  unite: 'mEq/L',   norme: '136–145',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Calcium',       valeur: '2.2',  unite: 'mmol/L',  norme: '2.2–2.6',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Phosphore',     valeur: '1.3',  unite: 'mmol/L',  norme: '0.8–1.5',  classe: 'ok',    tendance: 'stable' },
        { parametre: 'Albumine',      valeur: '38',   unite: 'g/L',     norme: '38–50',    classe: 'ok',    tendance: 'stable' },
      ],
    },
  ];

  get filteredBilans(): Bilan[] {
    const q = this.searchBilans.trim().toLowerCase();
    return this.bilans.filter(b =>
      (!this.filterBilanPatient || b.patientNom === this.filterBilanPatient) &&
      (!this.filterBilanStatut  || b.statut === this.filterBilanStatut) &&
      (!q || b.patientNom.toLowerCase().includes(q) || b.type.toLowerCase().includes(q))
    );
  }

  openBilanDetail(b: Bilan): void { this.selectedBilan = b; this.showBilanDetail = true; }
  bilanStatutClass(s: string): string { return s === 'critique' ? 'crit' : s === 'anormal' ? 'warn' : 'ok'; }
  bilanStatutLabel(s: string): string { return s === 'critique' ? 'Critique' : s === 'anormal' ? 'Anormal' : 'Normal'; }
  tendanceIcon(t: string): string { return t === 'up' ? 'trending_up' : t === 'down' ? 'trending_down' : 'trending_flat'; }
  tendanceColor(t: string, c: string): string {
    if (c === 'crit') return 'var(--c-red)';
    if (c === 'warn') return 'var(--c-amber)';
    return t === 'up' ? 'var(--c-green)' : t === 'down' ? 'var(--c-text-3)' : 'var(--c-teal)';
  }
  get critBilansCount(): number { return this.bilans.filter(b => b.statut === 'critique').length; }

  // ── Analyses Biologiques ──
  filterAnalysePatient = '';
  selectedAnalyse: AnalyseBiologique | null = null;
  showAnalyseDetail = false;

  analyses: AnalyseBiologique[] = [
    { id: 1, patientId: 1, patientNom: 'Alaoui Khalid',       patientInit: 'AK', date: '28/03/2026', creatinine: 9.2, uree: 28,  hemoglobine: 8.1,  potassium: 5.8, sodium: 138, calcium: 1.98, phosphore: 2.1, albumine: 33 },
    { id: 2, patientId: 2, patientNom: 'Saidi Bouchra',       patientInit: 'SB', date: '28/03/2026', creatinine: 5.8, uree: 18,  hemoglobine: 10.5, potassium: 4.2, sodium: 139, calcium: 2.3,  phosphore: 1.2, albumine: 40 },
    { id: 3, patientId: 3, patientNom: 'Moussaoui El Hassan', patientInit: 'ME', date: '01/04/2026', creatinine: 7.1, uree: 22,  hemoglobine: 9.2,  potassium: 4.8, sodium: 140, calcium: 2.1,  phosphore: 1.7, albumine: 36 },
    { id: 4, patientId: 4, patientNom: 'Filali Zineb',        patientInit: 'FZ', date: '25/03/2026', creatinine: 4.9, uree: 15,  hemoglobine: 11.2, potassium: 4.0, sodium: 141, calcium: 2.4,  phosphore: 1.0, albumine: 41 },
    { id: 5, patientId: 5, patientNom: 'Ouali Badreddine',    patientInit: 'OB', date: '30/03/2026', creatinine: 5.2, uree: 16,  hemoglobine: 10.8, potassium: 4.5, sodium: 137, calcium: 2.2,  phosphore: 1.3, albumine: 38 },
  ];

  get filteredAnalyses(): AnalyseBiologique[] {
    return this.analyses.filter(a => !this.filterAnalysePatient || a.patientNom === this.filterAnalysePatient);
  }

  openAnalyseDetail(a: AnalyseBiologique): void { this.selectedAnalyse = a; this.showAnalyseDetail = true; }

  // bar width % for biological values (normalized to safe max)
  analyseBar(val: number, max: number): number { return Math.min((val / max) * 100, 100); }
  analyseClass(val: number, min: number, max: number): string {
    if (val < min * 0.8 || val > max * 1.3) return 'crit';
    if (val < min || val > max) return 'warn';
    return 'ok';
  }

  // ── Protocoles ──
  searchProtocoles = '';
  filterProtocolePatient = '';
  selectedProtocole: Protocole | null = null;
  showProtocoleDetail = false;

  protocoles: Protocole[] = [
    {
      id: 1, patientId: 1, patientNom: 'Alaoui Khalid', patientInit: 'AK', pathologie: 'DRC',
      typeDialyse: 'Hémodialyse conventionnelle', dureeSeance: '4h', frequence: '3×/semaine',
      debitSanguin: '300 mL/min', debitDialysat: '500 mL/min',
      membrane: 'Haute perméabilité (HF)', anticoagulant: 'Héparine standard 5000 UI',
      poidsSecRef: '72 kg', objectifUf: '2.5 L/séance',
      actif: true, dateCreation: '15/06/2020', dateMaj: '01/04/2026',
    },
    {
      id: 2, patientId: 2, patientNom: 'Saidi Bouchra', patientInit: 'SB', pathologie: 'IRC',
      typeDialyse: 'Hémodialyse conventionnelle', dureeSeance: '4h', frequence: '3×/semaine',
      debitSanguin: '280 mL/min', debitDialysat: '500 mL/min',
      membrane: 'Basse perméabilité (LF)', anticoagulant: 'Héparine HBPM 2500 UI',
      poidsSecRef: '58 kg', objectifUf: '1.8 L/séance',
      actif: true, dateCreation: '10/01/2022', dateMaj: '25/03/2026',
    },
    {
      id: 3, patientId: 3, patientNom: 'Moussaoui El Hassan', patientInit: 'ME', pathologie: 'DRC',
      typeDialyse: 'Hémodiafiltration en ligne (HDF)', dureeSeance: '4h', frequence: '3×/semaine',
      debitSanguin: '350 mL/min', debitDialysat: '600 mL/min',
      membrane: 'Haute perméabilité (HF)', anticoagulant: 'Héparine standard 6000 UI',
      poidsSecRef: '68 kg', objectifUf: '2.0 L/séance',
      actif: true, dateCreation: '03/09/2018', dateMaj: '28/03/2026',
    },
    {
      id: 4, patientId: 4, patientNom: 'Filali Zineb', patientInit: 'FZ', pathologie: 'IRC',
      typeDialyse: 'Hémodialyse conventionnelle', dureeSeance: '3h30', frequence: '3×/semaine',
      debitSanguin: '260 mL/min', debitDialysat: '500 mL/min',
      membrane: 'Basse perméabilité (LF)', anticoagulant: 'Sans héparine (rinçage NaCl)',
      poidsSecRef: '62 kg', objectifUf: '1.5 L/séance',
      actif: true, dateCreation: '20/03/2021', dateMaj: '20/03/2026',
    },
    {
      id: 5, patientId: 5, patientNom: 'Ouali Badreddine', patientInit: 'OB', pathologie: 'IRC',
      typeDialyse: 'Hémodialyse conventionnelle', dureeSeance: '4h', frequence: '3×/semaine',
      debitSanguin: '300 mL/min', debitDialysat: '500 mL/min',
      membrane: 'Haute perméabilité (HF)', anticoagulant: 'Héparine HBPM 3000 UI',
      poidsSecRef: '80 kg', objectifUf: '2.2 L/séance',
      actif: true, dateCreation: '12/11/2023', dateMaj: '30/03/2026',
    },
  ];

  get filteredProtocoles(): Protocole[] {
    const q = this.searchProtocoles.trim().toLowerCase();
    return this.protocoles.filter(p =>
      (!this.filterProtocolePatient || p.patientNom === this.filterProtocolePatient) &&
      (!q || p.patientNom.toLowerCase().includes(q) || p.typeDialyse.toLowerCase().includes(q))
    );
  }

  openProtocoleDetail(p: Protocole): void { this.selectedProtocole = p; this.showProtocoleDetail = true; }

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
