import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PlanningSession {
  id: number;
  weekOffset: number;   // 0 = current week, -1 = prev week, +1 = next, …
  dayOffset: number;    // 0 = Mon … 5 = Sat
  hour: number;         // 8–17
  minute: number;       // 0 or 30
  duration: number;     // hours (e.g. 4, 3.5)
  patient: string;
  patientInit: string;
  infirmier: string;
  machine: string;
  statusClass: string;
  statusLabel: string;
  note?: string;
}

interface Toast { message: string; type: 'success'|'warning'|'info'|'error'; id: number; }

const PX_PER_HOUR = 80;   // 1 hour = 80 px in the grid
const GRID_START  = 8;    // 08:00
const GRID_END    = 18;   // 18:00 (exclusive)

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})
export class PlanningComponent implements OnInit {

  constructor(private router: Router) {}

  // ── Time grid ──
  readonly hours: number[] = Array.from({ length: GRID_END - GRID_START }, (_, i) => GRID_START + i);
  readonly pxPerHour = PX_PER_HOUR;
  readonly dayLabels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  // ── Week navigation ──
  currentWeekOffset = 0;   // 0 = current calendar week
  private weekStartBase!: Date;

  ngOnInit(): void {
    // Compute Monday of the current real week
    const today = new Date();
    const dow   = today.getDay();                  // 0=Sun … 6=Sat
    const diff  = dow === 0 ? -6 : 1 - dow;       // days to Monday
    this.weekStartBase = new Date(today);
    this.weekStartBase.setDate(today.getDate() + diff);
    this.weekStartBase.setHours(0, 0, 0, 0);
  }

  /** Date object for the Monday of the displayed week */
  get displayedWeekStart(): Date {
    const d = new Date(this.weekStartBase);
    d.setDate(d.getDate() + this.currentWeekOffset * 7);
    return d;
  }

  /** Array of 6 Date objects (Mon–Sat) for the displayed week */
  get weekDays(): Date[] {
    const start = this.displayedWeekStart;
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }

  get weekRangeLabel(): string {
    const days   = this.weekDays;
    const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const locale = 'fr-FR';
    const start  = days[0].toLocaleDateString(locale, opts);
    const end    = days[5].toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    return `${start} — ${end}`;
  }

  isToday(date: Date): boolean {
    const t = new Date();
    return date.getDate()     === t.getDate() &&
           date.getMonth()    === t.getMonth() &&
           date.getFullYear() === t.getFullYear();
  }

  isPast(date: Date): boolean {
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return date < t;
  }

  prevWeek(): void { this.currentWeekOffset--; }
  nextWeek(): void { this.currentWeekOffset++; }
  goToday():  void { this.currentWeekOffset = 0; }

  // ── Sessions data ──
  private nextId = 100;

  sessions: PlanningSession[] = [
    // ── Week 0 Monday ──
    { id:1,  weekOffset:0, dayOffset:0, hour:8,  minute:0,  duration:4,   patient:'Alaoui Khalid',       patientInit:'AK', infirmier:'Inf. N. Tazi',      machine:'M-03', statusClass:'ok',     statusLabel:'Terminé',    note:'Séance régulière. RAS.'                  },
    { id:2,  weekOffset:0, dayOffset:0, hour:9,  minute:0,  duration:4,   patient:'Moussaoui El Hassan',  patientInit:'ME', infirmier:'Inf. A. Haddad',    machine:'M-02', statusClass:'ok',     statusLabel:'Terminé',    note:'PA stable en fin de séance.'             },
    { id:3,  weekOffset:0, dayOffset:0, hour:14, minute:0,  duration:4,   patient:'Saidi Bouchra',        patientInit:'SB', infirmier:'Inf. L. Mansouri',  machine:'M-07', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    // ── Week 0 Tuesday ──
    { id:4,  weekOffset:0, dayOffset:1, hour:8,  minute:0,  duration:4,   patient:'Ouali Badreddine',     patientInit:'OB', infirmier:'Inf. N. Tazi',      machine:'M-05', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    { id:5,  weekOffset:0, dayOffset:1, hour:9,  minute:30, duration:3.5, patient:'Filali Zineb',         patientInit:'FZ', infirmier:'Inf. R. Berrada',   machine:'M-09', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    { id:6,  weekOffset:0, dayOffset:1, hour:14, minute:0,  duration:4,   patient:'Alaoui Khalid',       patientInit:'AK', infirmier:'Inf. A. Haddad',    machine:'M-03', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    // ── Week 0 Wednesday ──
    { id:7,  weekOffset:0, dayOffset:2, hour:8,  minute:0,  duration:4,   patient:'Moussaoui El Hassan',  patientInit:'ME', infirmier:'Inf. A. Haddad',    machine:'M-02', statusClass:'ok',     statusLabel:'Terminé',    note:'Alarme PA à 11h05 — traitée.'            },
    { id:8,  weekOffset:0, dayOffset:2, hour:10, minute:30, duration:4,   patient:'Ouali Badreddine',     patientInit:'OB', infirmier:'Inf. N. Tazi',      machine:'M-05', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    { id:9,  weekOffset:0, dayOffset:2, hour:14, minute:0,  duration:4,   patient:'Saidi Bouchra',        patientInit:'SB', infirmier:'Inf. L. Mansouri',  machine:'M-07', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    // ── Week 0 Thursday ──
    { id:10, weekOffset:0, dayOffset:3, hour:8,  minute:0,  duration:4,   patient:'Alaoui Khalid',       patientInit:'AK', infirmier:'Inf. N. Tazi',      machine:'M-03', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    { id:11, weekOffset:0, dayOffset:3, hour:9,  minute:0,  duration:4,   patient:'Filali Zineb',         patientInit:'FZ', infirmier:'Inf. R. Berrada',   machine:'M-09', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    { id:12, weekOffset:0, dayOffset:3, hour:14, minute:0,  duration:4,   patient:'Moussaoui El Hassan',  patientInit:'ME', infirmier:'Inf. A. Haddad',    machine:'M-02', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    // ── Week 0 Friday (today) ──
    { id:13, weekOffset:0, dayOffset:4, hour:8,  minute:0,  duration:4,   patient:'Saidi Bouchra',        patientInit:'SB', infirmier:'Inf. N. Tazi',      machine:'M-07', statusClass:'ok',     statusLabel:'Terminé'                                                    },
    { id:14, weekOffset:0, dayOffset:4, hour:9,  minute:0,  duration:4,   patient:'Ouali Badreddine',     patientInit:'OB', infirmier:'Inf. A. Haddad',    machine:'M-05', statusClass:'info',   statusLabel:'En cours'                                                   },
    { id:15, weekOffset:0, dayOffset:4, hour:14, minute:0,  duration:4,   patient:'Alaoui Khalid',       patientInit:'AK', infirmier:'Inf. L. Mansouri',  machine:'M-03', statusClass:'purple', statusLabel:'Planifiée'                                                  },
    // ── Week 0 Saturday ──
    { id:16, weekOffset:0, dayOffset:5, hour:8,  minute:0,  duration:4,   patient:'Moussaoui El Hassan',  patientInit:'ME', infirmier:'Inf. N. Tazi',      machine:'M-02', statusClass:'purple', statusLabel:'Planifiée'                                                  },
    { id:17, weekOffset:0, dayOffset:5, hour:9,  minute:30, duration:3.5, patient:'Filali Zineb',         patientInit:'FZ', infirmier:'Inf. R. Berrada',   machine:'M-09', statusClass:'purple', statusLabel:'Planifiée'                                                  },
    // ── Week 1 (next week) — light preview ──
    { id:18, weekOffset:1, dayOffset:0, hour:8,  minute:0,  duration:4,   patient:'Alaoui Khalid',       patientInit:'AK', infirmier:'Inf. N. Tazi',      machine:'M-03', statusClass:'purple', statusLabel:'Planifiée'                                                  },
    { id:19, weekOffset:1, dayOffset:0, hour:14, minute:0,  duration:4,   patient:'Saidi Bouchra',        patientInit:'SB', infirmier:'Inf. L. Mansouri',  machine:'M-07', statusClass:'purple', statusLabel:'Planifiée'                                                  },
    { id:20, weekOffset:1, dayOffset:2, hour:8,  minute:0,  duration:4,   patient:'Moussaoui El Hassan',  patientInit:'ME', infirmier:'Inf. A. Haddad',    machine:'M-02', statusClass:'purple', statusLabel:'Planifiée'                                                  },
    { id:21, weekOffset:1, dayOffset:4, hour:8,  minute:0,  duration:4,   patient:'Filali Zineb',         patientInit:'FZ', infirmier:'Inf. R. Berrada',   machine:'M-09', statusClass:'purple', statusLabel:'Planifiée'                                                  },
    { id:22, weekOffset:1, dayOffset:5, hour:9,  minute:0,  duration:4,   patient:'Ouali Badreddine',     patientInit:'OB', infirmier:'Inf. N. Tazi',      machine:'M-05', statusClass:'purple', statusLabel:'Planifiée'                                                  },
  ];

  getSessionsForDay(dayOffset: number): PlanningSession[] {
    return this.sessions.filter(s => s.weekOffset === this.currentWeekOffset && s.dayOffset === dayOffset);
  }

  sessionTop(s: PlanningSession): number {
    return (s.hour - GRID_START) * PX_PER_HOUR + (s.minute / 60) * PX_PER_HOUR;
  }

  sessionHeight(s: PlanningSession): number {
    return Math.max(s.duration * PX_PER_HOUR, 40);   // min 40px
  }

  formatHour(h: number): string {
    return `${String(h).padStart(2, '0')}:00`;
  }

  formatTime(h: number, m: number): string {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  // ── Stats ──
  get weekSessions(): PlanningSession[] {
    return this.sessions.filter(s => s.weekOffset === this.currentWeekOffset);
  }
  get weekSessionCount():   number { return this.weekSessions.length; }
  get ongoingCount():       number { return this.weekSessions.filter(s => s.statusClass === 'info').length; }
  get plannedCount():       number { return this.weekSessions.filter(s => s.statusClass === 'purple').length; }
  get completedCount():     number { return this.weekSessions.filter(s => s.statusClass === 'ok').length; }
  get machinesUsed():       number { return new Set(this.weekSessions.map(s => s.machine)).size; }

  // ── Session detail modal ──
  selectedSession: PlanningSession | null = null;
  showDetailModal = false;

  openSession(s: PlanningSession): void {
    this.selectedSession = { ...s };
    this.showDetailModal = true;
  }

  closeDetail(): void {
    this.showDetailModal = false;
    this.selectedSession = null;
  }

  deleteSession(s: PlanningSession): void {
    this.sessions = this.sessions.filter(x => x.id !== s.id);
    this.closeDetail();
    this.showToast(`Séance de ${s.patient} supprimée`, 'warning');
  }

  // ── New session modal ──
  showNewModal = false;
  newSession = {
    patient: '', infirmier: '', machine: '', dayOffset: 0,
    hour: 8, minute: 0, duration: 4, note: ''
  };

  openNewModal(dayOffset?: number): void {
    this.newSession = {
      patient: '', infirmier: '', machine: '',
      dayOffset: dayOffset ?? 0, hour: 8, minute: 0, duration: 4, note: ''
    };
    this.showNewModal = true;
  }

  saveNewSession(): void {
    if (!this.newSession.patient.trim() || !this.newSession.machine.trim()) {
      this.showToast('Patient et machine sont obligatoires', 'warning');
      return;
    }
    const initials = this.newSession.patient.trim().split(' ')
      .map(w => w[0]).join('').toUpperCase().slice(0, 2);

    this.sessions.push({
      id:          ++this.nextId,
      weekOffset:  this.currentWeekOffset,
      dayOffset:   +this.newSession.dayOffset,
      hour:        +this.newSession.hour,
      minute:      +this.newSession.minute,
      duration:    +this.newSession.duration,
      patient:     this.newSession.patient.trim(),
      patientInit: initials,
      infirmier:   this.newSession.infirmier.trim() || 'À assigner',
      machine:     this.newSession.machine.trim().toUpperCase(),
      note:        this.newSession.note.trim(),
      statusClass: 'purple',
      statusLabel: 'Planifiée',
    });

    this.showNewModal = false;
    this.showToast(`Séance de ${this.newSession.patient} planifiée`, 'success');
  }

  // ── Filters ──
  filterMachine  = '';
  filterInfirmier = '';
  filterStatus   = '';

  get filteredWeekSessions(): PlanningSession[] {
    return this.weekSessions.filter(s =>
      (!this.filterMachine   || s.machine.toLowerCase().includes(this.filterMachine.toLowerCase())) &&
      (!this.filterInfirmier || s.infirmier.toLowerCase().includes(this.filterInfirmier.toLowerCase())) &&
      (!this.filterStatus    || s.statusClass === this.filterStatus)
    );
  }

  getFilteredSessionsForDay(dayOffset: number): PlanningSession[] {
    return this.filteredWeekSessions.filter(s => s.dayOffset === dayOffset);
  }

  get hasActiveFilters(): boolean {
    return !!(this.filterMachine || this.filterInfirmier || this.filterStatus);
  }

  clearFilters(): void {
    this.filterMachine   = '';
    this.filterInfirmier = '';
    this.filterStatus    = '';
  }

  // ── View mode ──
  viewMode: 'semaine' | 'liste' = 'semaine';

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
    return ({ success:'check_circle', warning:'warning', error:'error', info:'info' } as Record<string,string>)[type] ?? 'info';
  }

  // ── Helpers ──
  dayName(dayOffset: number): string {
    const days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    return days[dayOffset] ?? '';
  }

  sessionEndTime(s: PlanningSession): string {
    const totalMin = s.hour * 60 + s.minute + s.duration * 60;
    return this.formatTime(Math.floor(totalMin / 60), totalMin % 60);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  get allMachines(): string[] {
    return [...new Set(this.sessions.map(s => s.machine))].sort();
  }

  get allInfirmiers(): string[] {
    return [...new Set(this.sessions.map(s => s.infirmier))].sort();
  }

  backToDashboard(): void { this.router.navigate(['/medecin']); }
  logout():          void { this.router.navigate(['/login']); }
}
