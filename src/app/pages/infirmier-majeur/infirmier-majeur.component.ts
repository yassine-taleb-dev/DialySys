import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, forkJoin, of } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { SupervisionService } from '../../../services/supervision.service';
import { AlerteService } from '../../../services/alerte.service';
import { PatientService } from '../../../services/patient.service';
import { ConstantesVitalesService } from '../../../services/constantes-vitales.service';
import { Utilisateur } from '../../../models/utilisateur';
import { SeanceDto } from '../../../models/seance-dto';
import { AlerteDto } from '../../../models/alerte-dto';
import { PatientDto } from '../../../models/patient-dto';
import { ConstantesVitalesDto } from '../../../models/constantes-vitales-dto';
import { InfirmierChargeDto, SupervisionDashboardDto } from '../../../models/supervision.models';

interface Infirmier {
  id: number; init: string; nom: string; role: string;
  statut: 'en-service' | 'absent' | 'conge';
  vacation: string; telephone: string;
  seancesSemaine: number; maxSemaine: number; creneaux: string[];
}
interface Seance {
  id: number; heure: string; heureEnd: string;
  patient: string; patientInit: string;
  infirmier: string | null; machine: string; duree: string;
  statut: 'en-cours' | 'planifiee' | 'terminee';
  periode: 'matin' | 'apres-midi' | 'soir';
}
interface Patient {
  id: number; init: string; nom: string; age: number;
  pathologie: string; infirmier: string; machine: string;
  statutSeance: 'en-cours' | 'planifiee' | 'terminee' | 'aucune';
  groupeSanguin: string; telephone: string;
}
interface Alerte {
  id: number; heure: string; patient: string; machine: string;
  type: string; message: string;
  priorite: 'critique' | 'elevee' | 'normale'; statut: 'active' | 'traitee';
}
interface Constante {
  id: number; heure: string; patient: string; infirmier: string;
  tensionSys: number | null; tensionDia: number | null;
  poids: number | null; bpm: number | null; saisie: boolean;
}
interface Toast { id: number; message: string; type: 'success' | 'warning' | 'info' | 'error'; }

@Component({
  selector: 'app-infirmier-majeur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infirmier-majeur.component.html',
  styleUrl: './infirmier-majeur.component.scss',
})
export class InfirmierMajeurComponent implements OnInit, OnDestroy {

  isLight       = false;
  sidebarOpen   = false;
  activeSection = 'dashboard';
  currentUser: Utilisateur | null = null;
  loading = false;
  apiError = '';
  dashboard: SupervisionDashboardDto | null = null;
  private alertInterval: ReturnType<typeof setInterval> | null = null;

  constructor(
    private authService: AuthService,
    private supervisionService: SupervisionService,
    private alerteService: AlerteService,
    private patientService: PatientService,
    private constantesVitalesService: ConstantesVitalesService,
  ) {}
  ngOnInit(): void {
    this.currentUser = this.authService.getUtilisateur();
    this.loadBackendData();
    this.alertInterval = setInterval(() => this.loadAlertes(), 15000);
  }

  ngOnDestroy(): void {
    if (this.alertInterval) clearInterval(this.alertInterval);
  }

  get userInitials(): string {
    const u = this.currentUser;
    return `${u?.prenom?.[0] ?? ''}${u?.nom?.[0] ?? ''}`.toUpperCase() || 'IM';
  }
  get userName(): string {
    const u = this.currentUser;
    return u ? `${u.prenom} ${u.nom}`.trim() : 'Infirmier Major';
  }
  toggleTheme(): void { this.isLight = !this.isLight; }
  logout():      void { this.authService.logout(); }
  setSection(s: string): void { this.activeSection = s; this.sidebarOpen = false; }
  get sectionTitle(): string {
    const m: Record<string, string> = {
      dashboard:  'Tableau de Bord',      equipe:     'Équipe Infirmière',
      planning:   'Planning des Séances', alertes:    'Alertes du Centre',
      patients:   'Liste des Patients',   constantes: 'Constantes Vitales',
    };
    return m[this.activeSection] ?? 'Tableau de Bord';
  }

  private loadBackendData(): void {
    this.loading = true;
    this.apiError = '';
    const today = this.todayIso();

    forkJoin({
      dashboard: this.supervisionService.getDashboard().pipe(catchError(() => of(null))),
      charge: this.supervisionService.getChargeHebdomadaire(today).pipe(catchError(() => of([]))),
      planning: this.supervisionService.getPlanning(today, today).pipe(catchError(() => of([]))),
      alertes: this.alerteService.getAll().pipe(catchError(() => of([]))),
      patients: this.patientService.getAll().pipe(catchError(() => of([]))),
      constantesManquantes: this.supervisionService.getConstantesManquantes(today).pipe(catchError(() => of([]))),
    }).subscribe({
      next: data => {
        this.dashboard = data.dashboard;
        this.applyInfirmiers(data.charge);
        this.seances = data.planning.map(s => this.mapSeance(s));
        this.alertes = this.sortAlertes(data.alertes).map(a => this.mapAlerte(a));
        this.patients = data.patients.map(p => this.mapPatient(p));
        this.applyConstantes(data.patients, data.constantesManquantes);
        this.syncPatientSeanceStatus();
        this.loading = false;
      },
      error: () => {
        this.apiError = 'Impossible de charger les données de supervision.';
        this.loading = false;
      },
    });
  }

  private loadAlertes(): void {
    this.alerteService.getAll()
      .pipe(catchError(() => of([])))
      .subscribe(alertes => {
        this.alertes = this.sortAlertes(alertes).map(a => this.mapAlerte(a));
      });
  }

  private sortAlertes(alertes: AlerteDto[]): AlerteDto[] {
    return [...alertes].sort((a, b) =>
      new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime()
    );
  }

  private applyInfirmiers(charges: InfirmierChargeDto[]): void {
    if (!charges.length) return;
    this.infirmiers = charges.map(item => {
      const u = item.infirmier;
      const fullName = this.fullName(u.prenom, u.nom);
      return {
        id: u.id,
        init: this.initials(fullName),
        nom: fullName,
        role: 'Infirmier(e)',
        statut: 'en-service',
        vacation: u.service || 'Service',
        telephone: u.telephone || '-',
        seancesSemaine: item.nombreSeancesCetteSemaine,
        maxSemaine: 10,
        creneaux: [],
      };
    });
  }

  private applyConstantes(patients: PatientDto[], manquantes: SeanceDto[]): void {
    const missingRows = manquantes.map(s => ({
      id: s.id,
      heure: this.heureByCreneau(s.creneau),
      patient: this.fullName(s.patient?.prenom, s.patient?.nom),
      infirmier: s.infirmier ? this.fullName(s.infirmier.prenom, s.infirmier.nom) : 'A assigner',
      tensionSys: null, tensionDia: null, poids: null, bpm: null,
      saisie: false,
    }));

    if (!patients.length) {
      this.constantes = missingRows;
      return;
    }

    forkJoin(
      patients.map(patient =>
        this.constantesVitalesService.getByPatient(patient.id).pipe(catchError(() => of([] as ConstantesVitalesDto[])))
      )
    ).subscribe(rows => {
      const saisies = rows.flatMap((constantes, i) => {
        const patient = patients[i];
        return constantes
          .filter(c => c.date === this.todayIso())
          .map(c => ({
            id: c.id,
            heure: this.timeFromIso(c.saisieAt),
            patient: this.fullName(patient.prenom, patient.nom),
            infirmier: c.saisiePar ? this.fullName(c.saisiePar.prenom, c.saisiePar.nom) : '-',
            tensionSys: c.tensionSys,
            tensionDia: c.tensionDia,
            poids: c.poids,
            bpm: c.bpm,
            saisie: true,
          }));
      });
      this.constantes = [...saisies, ...missingRows];
    });
  }

  private mapSeance(s: SeanceDto): Seance {
    const patient = this.fullName(s.patient?.prenom, s.patient?.nom);
    return {
      id: s.id,
      heure: this.heureByCreneau(s.creneau),
      heureEnd: this.heureFinByCreneau(s.creneau),
      patient,
      patientInit: this.initials(patient),
      infirmier: s.infirmier ? this.shortName(s.infirmier.prenom, s.infirmier.nom) : null,
      machine: '-',
      duree: '4h',
      statut: this.mapStatutSeance(s.statut),
      periode: this.mapPeriode(s.creneau),
    };
  }

  private mapAlerte(a: AlerteDto): Alerte {
    const patient = this.fullName(a.patient?.prenom, a.patient?.nom);
    return {
      id: a.id,
      heure: this.timeFromIso(a.dateCreation),
      patient,
      machine: '-',
      type: a.type,
      message: this.cleanAlertMessage(a),
      priorite: this.mapPriorite(a.type),
      statut: a.lue ? 'traitee' : 'active',
    };
  }

  private cleanAlertMessage(a: AlerteDto): string {
    let msg = a.message ?? '';
    // Replace "séance #N" or "seance #N" with meaningful context
    if (/s[eé]ance\s*#?\d+/i.test(msg)) {
      const patientNom = this.fullName(a.patient?.prenom, a.patient?.nom);
      const dateSeance = a.dateCreation ? new Date(a.dateCreation).toLocaleDateString('fr-FR', { day:'2-digit', month:'2-digit', year:'numeric' }) : '';
      msg = msg.replace(/s[eé]ance\s*#?\d+/gi, `séance de ${patientNom}${dateSeance ? ' du ' + dateSeance : ''}`);
    }
    return msg;
  }

  private mapPatient(p: PatientDto): Patient {
    const nom = this.fullName(p.prenom, p.nom);
    return {
      id: p.id,
      init: this.initials(nom),
      nom,
      age: this.ageFromDate(p.dateNaissance),
      pathologie: p.dossierPatient?.pathologie || '-',
      infirmier: 'A assigner',
      machine: '-',
      statutSeance: 'aucune',
      groupeSanguin: p.groupeSanguin || '-',
      telephone: p.telephone || '-',
    };
  }

  private syncPatientSeanceStatus(): void {
    this.patients = this.patients.map(patient => {
      const seance = this.seances.find(s => s.patient === patient.nom);
      return seance
        ? { ...patient, statutSeance: seance.statut, infirmier: seance.infirmier || 'A assigner', machine: seance.machine }
        : patient;
    });
  }

  private todayIso(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private fullName(prenom?: string | null, nom?: string | null): string {
    return [prenom, nom].filter(Boolean).join(' ').trim() || '-';
  }

  private initials(name: string): string {
    return name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || '?';
  }

  private shortName(prenom?: string | null, nom?: string | null): string {
    return `${prenom?.[0] ? prenom[0] + '. ' : ''}${nom ?? ''}`.trim() || '-';
  }

  private mapPeriode(creneau?: string | null): Seance['periode'] {
    const value = String(creneau || '').toUpperCase();
    if (value === 'SOIR') return 'soir';
    if (value === 'APRES_MIDI' || value === 'APRES-MIDI') return 'apres-midi';
    return 'matin';
  }

  private mapStatutSeance(statut?: string | null): Seance['statut'] {
    const value = String(statut || '').toUpperCase();
    if (value === 'EN_COURS') return 'en-cours';
    if (value === 'TERMINEE') return 'terminee';
    return 'planifiee';
  }

  private mapPriorite(type?: string | null): Alerte['priorite'] {
    const value = String(type || '').toUpperCase();
    if (['CRITIQUE', 'CRITICAL', 'ROUGE'].includes(value)) return 'critique';
    if (['ATTENTION', 'ORANGE', 'WARNING'].includes(value)) return 'elevee';
    return 'normale';
  }

  private heureByCreneau(creneau?: string | null): string {
    const p = this.mapPeriode(creneau);
    return p === 'soir' ? '18:00' : p === 'apres-midi' ? '13:30' : '07:30';
  }

  private heureFinByCreneau(creneau?: string | null): string {
    const p = this.mapPeriode(creneau);
    return p === 'soir' ? '22:00' : p === 'apres-midi' ? '17:30' : '11:30';
  }

  private timeFromIso(value?: string | null): string {
    if (!value) return '-';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value.slice(11, 16) || '-';
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }

  private ageFromDate(value?: string | null): number {
    if (!value) return 0;
    const birth = new Date(value);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    return Math.max(age, 0);
  }

  // ── Data ─────────────────────────────────────────────────────────────────
  infirmiers: Infirmier[] = [
    { id:1, init:'NT', nom:'Nadia Tazi',      role:'Infirmier(e)',  statut:'en-service', vacation:'Matin',       telephone:'06 12 34 56 78', seancesSemaine:8, maxSemaine:10, creneaux:['Matin'] },
    { id:2, init:'AH', nom:'Amine Haddad',    role:'Infirmier(e)',  statut:'absent',     vacation:'Matin',       telephone:'06 23 45 67 89', seancesSemaine:0, maxSemaine:10, creneaux:['Matin'] },
    { id:3, init:'LM', nom:'Leila Mansouri',  role:'Infirmier(e)',  statut:'en-service', vacation:'Matin',       telephone:'06 34 56 78 90', seancesSemaine:6, maxSemaine:10, creneaux:['Matin','Après-midi'] },
    { id:4, init:'RB', nom:'Rachid Berrada',  role:'Infirmier(e)',  statut:'en-service', vacation:'Soir',        telephone:'06 45 67 89 01', seancesSemaine:7, maxSemaine:10, creneaux:['Après-midi','Soir'] },
    { id:5, init:'YK', nom:'Youssef Kettani', role:'Aide-soignant', statut:'en-service', vacation:'Après-midi',  telephone:'06 56 78 90 12', seancesSemaine:5, maxSemaine:10, creneaux:['Après-midi'] },
    { id:6, init:'SO', nom:'Sara Oulmane',    role:'Infirmier(e)',  statut:'conge',      vacation:'Congé',       telephone:'06 67 89 01 23', seancesSemaine:0, maxSemaine:10, creneaux:[] },
  ];

  seances: Seance[] = [
    { id:1,  heure:'07:30', heureEnd:'11:30', patient:'Alaoui K.',      patientInit:'AK', infirmier:'N. Tazi',     machine:'M-03', duree:'4h',   statut:'terminee',  periode:'matin'      },
    { id:2,  heure:'08:00', heureEnd:'12:00', patient:'Saidi B.',       patientInit:'SB', infirmier:'L. Mansouri', machine:'M-07', duree:'4h',   statut:'terminee',  periode:'matin'      },
    { id:3,  heure:'09:00', heureEnd:'13:00', patient:'Moussaoui H.',  patientInit:'MH', infirmier:'A. Haddad',   machine:'M-02', duree:'4h',   statut:'planifiee', periode:'matin'      },
    { id:4,  heure:'09:30', heureEnd:'13:30', patient:'Ouali B.',       patientInit:'OB', infirmier:'N. Tazi',     machine:'M-05', duree:'4h',   statut:'en-cours',  periode:'matin'      },
    { id:5,  heure:'10:30', heureEnd:'14:30', patient:'Benali M.',      patientInit:'BM', infirmier:'L. Mansouri', machine:'M-08', duree:'4h',   statut:'en-cours',  periode:'matin'      },
    { id:6,  heure:'14:00', heureEnd:'17:30', patient:'Filali Z.',      patientInit:'FZ', infirmier:'R. Berrada',  machine:'M-09', duree:'3.5h', statut:'planifiee', periode:'apres-midi' },
    { id:7,  heure:'15:30', heureEnd:'19:30', patient:'El Idrissi F.', patientInit:'EI', infirmier:'Y. Kettani',  machine:'M-11', duree:'4h',   statut:'planifiee', periode:'apres-midi' },
    { id:8,  heure:'16:30', heureEnd:'20:30', patient:'Chraibi A.',    patientInit:'CA', infirmier:null,           machine:'M-04', duree:'4h',   statut:'planifiee', periode:'apres-midi' },
    { id:9,  heure:'18:00', heureEnd:'22:00', patient:'Kettani S.',    patientInit:'KS', infirmier:'R. Berrada',  machine:'M-06', duree:'4h',   statut:'planifiee', periode:'soir'       },
    { id:10, heure:'19:30', heureEnd:'23:30', patient:'Oulmane Y.',    patientInit:'OY', infirmier:'N. Tazi',     machine:'M-10', duree:'4h',   statut:'planifiee', periode:'soir'       },
  ];

  patients: Patient[] = [
    { id:1, init:'AK', nom:'Alaoui Khalid',       age:58, pathologie:'IRC terminale', infirmier:'N. Tazi',     machine:'M-03', statutSeance:'terminee',  groupeSanguin:'B+',  telephone:'06 11 22 33 44' },
    { id:2, init:'MH', nom:'Moussaoui El Hassan', age:62, pathologie:'DRC avancée',  infirmier:'A. Haddad',   machine:'M-02', statutSeance:'planifiee', groupeSanguin:'A+',  telephone:'06 22 33 44 55' },
    { id:3, init:'OB', nom:'Ouali Badreddine',    age:45, pathologie:'IRC',           infirmier:'N. Tazi',     machine:'M-05', statutSeance:'en-cours',  groupeSanguin:'O+',  telephone:'06 33 44 55 66' },
    { id:4, init:'SB', nom:'Saidi Bouchra',       age:51, pathologie:'IRC',           infirmier:'L. Mansouri', machine:'M-07', statutSeance:'terminee',  groupeSanguin:'A+',  telephone:'06 44 55 66 77' },
    { id:5, init:'FZ', nom:'Filali Zineb',        age:67, pathologie:'DRC',           infirmier:'R. Berrada',  machine:'M-09', statutSeance:'planifiee', groupeSanguin:'AB+', telephone:'06 55 66 77 88' },
    { id:6, init:'BM', nom:'Benali Mohammed',     age:55, pathologie:'IRC terminale', infirmier:'L. Mansouri', machine:'M-08', statutSeance:'en-cours',  groupeSanguin:'O-',  telephone:'06 66 77 88 99' },
    { id:7, init:'EI', nom:'El Idrissi Fatima',   age:49, pathologie:'IRC',           infirmier:'Y. Kettani',  machine:'M-11', statutSeance:'planifiee', groupeSanguin:'B-',  telephone:'06 77 88 99 00' },
    { id:8, init:'CA', nom:'Chraibi Ahmed',       age:71, pathologie:'DRC',           infirmier:'À assigner',  machine:'M-04', statutSeance:'planifiee', groupeSanguin:'A-',  telephone:'06 88 99 00 11' },
  ];

  alertes: Alerte[] = [
    { id:1, heure:'09:45', patient:'Moussaoui El Hassan', machine:'M-02', type:'PA critique',           message:'Pression artérielle 180/110 — dépasse le seuil critique. Intervention médicale requise.',  priorite:'critique', statut:'active'  },
    { id:2, heure:'11:05', patient:'Ouali Badreddine',    machine:'M-05', type:'Alarme pression',       message:'Alarme pression veineuse déclenchée — débit réduit automatiquement à 200 mL/min.',          priorite:'elevee',   statut:'active'  },
    { id:3, heure:'08:30', patient:'Benali Mohammed',     machine:'M-08', type:'Constantes manquantes', message:'Constantes vitales non saisies depuis le début de séance (30 min écoulées).',               priorite:'elevee',   statut:'active'  },
    { id:4, heure:'10:15', patient:'Saidi Bouchra',       machine:'M-07', type:'Rapport incomplet',     message:'Séance terminée — rapport de fin non complété. Constantes de fin à saisir.',                priorite:'normale',  statut:'active'  },
    { id:5, heure:'07:50', patient:'Alaoui Khalid',       machine:'M-03', type:'Poids hors cible',      message:'Poids avant séance (74.2 kg) dépasse le poids cible de 1.2 kg. Situation surveillée.',     priorite:'normale',  statut:'traitee' },
  ];

  constantes: Constante[] = [
    { id:1, heure:'07:30', patient:'Alaoui Khalid',       infirmier:'N. Tazi',     tensionSys:138, tensionDia:88, poids:72, bpm:72, saisie:true  },
    { id:2, heure:'08:00', patient:'Saidi Bouchra',       infirmier:'L. Mansouri', tensionSys:128, tensionDia:82, poids:65, bpm:74, saisie:true  },
    { id:3, heure:'09:30', patient:'Ouali Badreddine',    infirmier:'N. Tazi',     tensionSys:122, tensionDia:76, poids:80, bpm:68, saisie:true  },
    { id:4, heure:'10:30', patient:'Benali Mohammed',     infirmier:'L. Mansouri', tensionSys:null, tensionDia:null, poids:null, bpm:null, saisie:false },
    { id:5, heure:'09:00', patient:'Moussaoui El Hassan', infirmier:'À assigner',  tensionSys:null, tensionDia:null, poids:null, bpm:null, saisie:false },
    { id:6, heure:'16:30', patient:'Chraibi Ahmed',       infirmier:'À assigner',  tensionSys:null, tensionDia:null, poids:null, bpm:null, saisie:false },
  ];

  // ── Dashboard ─────────────────────────────────────────────────────────────
  get sessionsMatin():        number { return this.seances.filter(s => s.periode === 'matin').length; }
  get sessionsApresMidi():    number { return this.seances.filter(s => s.periode === 'apres-midi').length; }
  get sessionsSoir():         number { return this.seances.filter(s => s.periode === 'soir').length; }
  get sessionsEnCours():      number { return this.seances.filter(s => s.statut === 'en-cours').length; }
  get constantesManquantes(): number { return this.constantes.filter(c => !c.saisie).length; }
  get seancesTerminees():     number { return this.seances.filter(s => s.statut === 'terminee').length; }
  get seancesActives():       number { return this.seances.filter(s => s.statut !== 'planifiee').length; }
  get tauxCompletion(): number {
    return this.seancesActives ? Math.round(this.seancesTerminees / this.seancesActives * 100) : 0;
  }
  get chargeParInfirmier(): { label: string; count: number; pct: number }[] {
    const map = new Map<string, number>();
    this.seances.forEach(s => { const k = s.infirmier ?? 'Non assigné'; map.set(k, (map.get(k) ?? 0) + 1); });
    const items = Array.from(map.entries()).map(([label, count]) => ({ label, count, pct: 0 }));
    const max = Math.max(...items.map(i => i.count), 1);
    return items.sort((a, b) => b.count - a.count).map(i => ({ ...i, pct: i.count / max }));
  }
  private readonly CIRC = 282.74;
  get alertesDonut(): { label: string; count: number; color: string; dasharray: string; rotate: number }[] {
    const raw = [
      { label:'Critique', count:this.alertes.filter(a => a.priorite==='critique').length, color:'#ef4444' },
      { label:'Élevée',   count:this.alertes.filter(a => a.priorite==='elevee').length,   color:'#f59e0b' },
      { label:'Normale',  count:this.alertes.filter(a => a.priorite==='normale').length,  color:'#4EA8F8' },
    ].filter(d => d.count > 0);
    const total = raw.reduce((s, d) => s + d.count, 0) || 1;
    let rot = -90;
    return raw.map(d => {
      const pct = d.count / total;
      const seg = { ...d, dasharray:`${Math.max(0, pct*this.CIRC-1).toFixed(1)} ${this.CIRC}`, rotate:rot };
      rot += pct * 360; return seg;
    });
  }
  get totalAlertes(): number { return this.alertes.length; }
  get gaugeDash():    string { return `${(this.tauxCompletion / 100 * 251.3).toFixed(1)} 251.3`; }
  get gaugeColor():   string {
    return this.tauxCompletion >= 80 ? 'var(--c-teal)' : this.tauxCompletion >= 50 ? 'var(--c-amber)' : 'var(--c-red)';
  }

  // ── Équipe ────────────────────────────────────────────────────────────────
  filterEquipeStatut = '';
  get filteredEquipe(): Infirmier[] {
    return this.infirmiers.filter(i => !this.filterEquipeStatut || i.statut === this.filterEquipeStatut);
  }
  get staffEnService(): number { return this.infirmiers.filter(i => i.statut === 'en-service').length; }
  get staffAbsents():   number { return this.infirmiers.filter(i => i.statut === 'absent').length; }
  get staffConge():     number { return this.infirmiers.filter(i => i.statut === 'conge').length; }

  statutClass(s: string): string { return s === 'en-service' ? 'ok' : s === 'absent' ? 'crit' : 'warn'; }
  statutLabel(s: string): string {
    return ({'en-service':'En service', absent:'Absent', conge:'Congé'} as Record<string,string>)[s] ?? s;
  }
  workloadPct(inf: Infirmier): number { return Math.min(100, Math.round(inf.seancesSemaine / inf.maxSemaine * 100)); }
  workloadColor(inf: Infirmier): string {
    const p = this.workloadPct(inf);
    return p >= 90 ? 'var(--c-red)' : p >= 70 ? 'var(--c-amber)' : 'var(--c-teal)';
  }

  showReaffectModal = false;
  infirmierAbsent: Infirmier | null = null;
  remplacantId = 0;

  private toInitials(nom: string): string {
    const p = nom.split(' '); return `${p[0][0]}. ${p.slice(1).join(' ')}`;
  }
  get seancesAbsent(): Seance[] {
    if (!this.infirmierAbsent) return [];
    return this.seances.filter(s => s.infirmier === this.toInitials(this.infirmierAbsent!.nom));
  }
  get infirmiersDisponibles(): Infirmier[] { return this.infirmiers.filter(i => i.statut === 'en-service'); }

  openReaffect(inf: Infirmier): void {
    this.infirmierAbsent = inf;
    this.remplacantId = this.infirmiersDisponibles[0]?.id ?? 0;
    this.showReaffectModal = true;
  }
  confirmerReaffect(): void {
    if (!this.infirmierAbsent || !this.remplacantId) return;
    const remplacant = this.infirmiers.find(i => i.id === +this.remplacantId);
    if (!remplacant) return;
    this.supervisionService.reaffecterSeances({
      infirmierAbsentId: this.infirmierAbsent.id,
      infirmierRemplacantId: +this.remplacantId,
      debut: this.todayIso(),
      fin: this.todayIso(),
    }).subscribe({
      next: response => {
        this.showToast(
          response.nombreSeancesReaffectees > 0
            ? `${response.nombreSeancesReaffectees} séance(s) réaffectée(s) à ${remplacant.nom}`
            : 'Aucune séance à réaffecter',
          response.nombreSeancesReaffectees > 0 ? 'success' : 'info',
        );
        this.showReaffectModal = false;
        this.infirmierAbsent = null;
        this.loadBackendData();
      },
      error: () => this.showToast('Réaffectation impossible: vérifiez la disponibilité du remplaçant', 'error'),
    });
  }
  isAbsentInfirmier(name: string | null): boolean {
    if (!name) return false;
    return this.infirmiers.some(i => this.toInitials(i.nom) === name && i.statut !== 'en-service');
  }

  // ── Planning ──────────────────────────────────────────────────────────────
  filterPlanningPeriode = '';
  sansInfirmierOnly     = false;
  searchPlanning        = '';

  get filteredSeances(): Seance[] {
    const q = this.searchPlanning.trim().toLowerCase();
    return this.seances.filter(s => {
      if (this.filterPlanningPeriode && s.periode !== this.filterPlanningPeriode) return false;
      if (this.sansInfirmierOnly && s.infirmier !== null) return false;
      if (q && !s.patient.toLowerCase().includes(q) && !(s.infirmier ?? '').toLowerCase().includes(q)) return false;
      return true;
    });
  }
  get seancesSansInfirmierCount(): number { return this.seances.filter(s => s.infirmier === null).length; }
  get planningTerminees():  number { return this.seances.filter(s => s.statut === 'terminee').length; }
  get planningEnCours():    number { return this.seances.filter(s => s.statut === 'en-cours').length; }
  get planningPlanifiees(): number { return this.seances.filter(s => s.statut === 'planifiee').length; }

  readonly dureeOptions = [
    { label: '30 min', minutes: 30  },
    { label: '1h',     minutes: 60  },
    { label: '1h 30',  minutes: 90  },
    { label: '2h',     minutes: 120 },
    { label: '2h 30',  minutes: 150 },
    { label: '3h',     minutes: 180 },
    { label: '3h 30',  minutes: 210 },
    { label: '4h',     minutes: 240 },
    { label: '4h 30',  minutes: 270 },
    { label: '5h',     minutes: 300 },
  ];
  showDemarrerModal = false;
  seanceADemarrer: Seance | null = null;
  selectedDureeMin = 240;
  demarrerError = false;

  openDemarrerModal(s: Seance): void {
    this.seanceADemarrer = s;
    this.selectedDureeMin = 240;
    this.demarrerError = false;
    this.showDemarrerModal = true;
  }
  closeDemarrerModal(): void {
    this.showDemarrerModal = false;
    this.seanceADemarrer = null;
    this.demarrerError = false;
  }
  confirmerDemarrer(): void {
    if (!this.selectedDureeMin) { this.demarrerError = true; return; }
    const s = this.seanceADemarrer!;
    const fin = this.addMinutesToTime(s.heure, this.selectedDureeMin);
    s.heureEnd = fin;
    this.closeDemarrerModal();
    this.demarrerSeance(s, fin);
  }

  calcHeureFinPreview(heureDebut: string, dureeMin: number): string {
    return this.addMinutesToTime(heureDebut, dureeMin);
  }

  private addMinutesToTime(hhmm: string, minutes: number): string {
    const [h, m] = (hhmm || '07:30').split(':').map(Number);
    const total = h * 60 + m + minutes;
    return `${String(Math.floor(total / 60) % 24).padStart(2,'0')}:${String(total % 60).padStart(2,'0')}`;
  }

  demarrerSeance(s: Seance, heureFinPrevue?: string): void {
    this.supervisionService.demarrerSeance(s.id, heureFinPrevue, this.selectedDureeMin).subscribe({
      next: updated => {
        Object.assign(s, this.mapSeance(updated));
        if (heureFinPrevue) s.heureEnd = heureFinPrevue;
        this.syncPatientSeanceStatus();
        this.showToast(`Séance ${s.patient} démarrée — fin prévue à ${s.heureEnd}`, 'success');
      },
      error: () => this.showToast('Impossible de démarrer la séance', 'error'),
    });
  }
  terminerSeance(s: Seance): void {
    this.supervisionService.terminerSeance(s.id).subscribe({
      next: updated => {
        Object.assign(s, this.mapSeance(updated));
        this.syncPatientSeanceStatus();
        this.showToast(`Séance ${s.patient} terminée`, 'success');
      },
      error: () => this.showToast('Impossible de terminer la séance', 'error'),
    });
  }

  periodeLabel(p: string): string {
    return ({matin:'Matin','apres-midi':'Après-midi',soir:'Soir'} as Record<string,string>)[p] ?? p;
  }
  seanceStatutClass(s: string): string { return s === 'terminee' ? 'ok' : s === 'en-cours' ? 'info' : 'purple'; }
  seanceStatutLabel(s: string): string {
    return ({terminee:'Terminée','en-cours':'En cours',planifiee:'Planifiée'} as Record<string,string>)[s] ?? s;
  }

  // ── Alertes ───────────────────────────────────────────────────────────────
  filterAlertePriorite = '';
  get filteredAlertes(): Alerte[] {
    return this.alertes.filter(a => !this.filterAlertePriorite || a.priorite === this.filterAlertePriorite);
  }
  get alertesActivesCount():   number { return this.alertes.filter(a => a.statut === 'active').length; }
  get alertesCritiquesCount(): number { return this.alertes.filter(a => a.priorite === 'critique' && a.statut === 'active').length; }
  get alertesTraiteesCount():  number { return this.alertes.filter(a => a.statut === 'traitee').length; }
  get alertesCritiquesTotal(): number { return this.alertes.filter(a => a.priorite === 'critique').length; }
  get alertesEleveeTotal():    number { return this.alertes.filter(a => a.priorite === 'elevee').length; }
  get alertesNormaleTotal():   number { return this.alertes.filter(a => a.priorite === 'normale').length; }

  traiterAlerte(a: Alerte): void {
    if (a.statut === 'traitee') return;
    this.alertes = this.alertes.map(alerte =>
      alerte.id === a.id ? { ...alerte, statut: 'traitee' } : alerte
    );
    this.alerteService.marquerLue(a.id)
      .pipe(catchError(() => of(null)))
      .subscribe({
        next: (updated) => {
          if (updated) {
            this.alertes = this.alertes.map(alerte =>
              alerte.id === updated.id ? this.mapAlerte(updated) : alerte
            );
          }
        },
        error: () => this.loadAlertes()
      });
  }
  alertePrioriteClass(p: string): string { return p === 'critique' ? 'crit' : p === 'elevee' ? 'warn' : 'info'; }
  alertePrioriteIcon(p: string):  string { return p === 'critique' ? 'crisis_alert' : p === 'elevee' ? 'warning' : 'info'; }

  // ── Patients ──────────────────────────────────────────────────────────────
  searchPatients = '';
  selectedPatient: Patient | null = null;
  showPatientModal = false;
  get filteredPatients(): Patient[] {
    const q = this.searchPatients.trim().toLowerCase();
    return this.patients.filter(p => !q || p.nom.toLowerCase().includes(q) || p.pathologie.toLowerCase().includes(q));
  }
  openPatient(p: Patient): void { this.selectedPatient = p; this.showPatientModal = true; }
  closePatient(): void          { this.showPatientModal = false; this.selectedPatient = null; }
  patientStatutClass(s: string): string { return s === 'en-cours' ? 'info' : s === 'terminee' ? 'ok' : s === 'planifiee' ? 'purple' : ''; }
  patientStatutLabel(s: string): string {
    return ({'en-cours':'En cours',terminee:'Terminée',planifiee:'Planifiée',aucune:'Aucune'} as Record<string,string>)[s] ?? s;
  }

  // ── Constantes ────────────────────────────────────────────────────────────
  filterConstantesStatut = '';
  get filteredConstantes(): Constante[] {
    return this.constantes.filter(c => {
      if (this.filterConstantesStatut === 'saisie')    return  c.saisie;
      if (this.filterConstantesStatut === 'manquante') return !c.saisie;
      return true;
    });
  }
  get constantesSaisiesCount():    number { return this.constantes.filter(c =>  c.saisie).length; }
  get constantesManquantesCount(): number { return this.constantes.filter(c => !c.saisie).length; }

  // ── Patient counts ────────────────────────────────────────────────────────
  get patientsEnCours():  number { return this.patients.filter(p => p.statutSeance === 'en-cours').length; }
  get patientsPlanifies():number { return this.patients.filter(p => p.statutSeance === 'planifiee').length; }
  get patientsTermines(): number { return this.patients.filter(p => p.statutSeance === 'terminee').length; }

  // ── Toast ─────────────────────────────────────────────────────────────────
  private toastId = 0;
  toasts: Toast[] = [];
  showToast(message: string, type: Toast['type'] = 'info'): void {
    const id = ++this.toastId;
    this.toasts.push({ id, message, type });
    setTimeout(() => this.toasts = this.toasts.filter(t => t.id !== id), 3500);
  }
  dismissToast(id: number): void { this.toasts = this.toasts.filter(t => t.id !== id); }
  toastIcon(t: string): string {
    return ({success:'check_circle',warning:'warning',error:'error',info:'info'} as Record<string,string>)[t] ?? 'info';
  }
}
