import {
  SeanceService
} from "./chunk-U5D5UQBA.js";
import {
  PatientService
} from "./chunk-XXOLSQYR.js";
import {
  AuthService
} from "./chunk-LFASSBRV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-I57MQ5R6.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router
} from "./chunk-EH4I5CFZ.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NP5N7FWI.js";

// src/app/pages/planning/planning.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 0];
function PlanningComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PlanningComponent_div_1_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36)(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("toast toast--", t_r2.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toastIcon(t_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
function PlanningComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("value", p_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r4.nom, " ", p_r4.prenom, "");
  }
}
function PlanningComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function PlanningComponent_button_34_Template_button_click_0_listener() {
      const j_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleJour(j_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("day-chip--active", ctx_r2.isJourSelected(j_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.joursLabels[j_r6]);
  }
}
function PlanningComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd()();
  }
}
function PlanningComponent_div_63_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "span", 7);
    \u0275\u0275text(3, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucune s\uFFFDance trouv\uFFFDe ");
    \u0275\u0275elementEnd()();
  }
}
function PlanningComponent_div_63_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 45)(1, "td")(2, "div", 46)(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 48)(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 51)(12, "span", 52);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 53);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td")(17, "div", 54)(18, "button", 55)(19, "span", 7);
    \u0275\u0275text(20, "visibility");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.patientInit(s_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.patientNom(s_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.utilisateurNom(s_r7));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.jourLabel(s_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.creneauLabel(s_r7));
  }
}
function PlanningComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 41)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "PATIENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "S\uFFFDANCES PLANIFI\uFFFDES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "ACTIONS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, PlanningComponent_div_63_tr_11_Template, 5, 0, "tr", 42)(12, PlanningComponent_div_63_tr_12_Template, 21, 5, "tr", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.filteredSeances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredSeances);
  }
}
function toLocalIso(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
var PlanningComponent = class _PlanningComponent {
  router;
  seanceSvc;
  patientSvc;
  authSvc;
  constructor(router, seanceSvc, patientSvc, authSvc) {
    this.router = router;
    this.seanceSvc = seanceSvc;
    this.patientSvc = patientSvc;
    this.authSvc = authSvc;
  }
  joursLabels = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  //  Donnees 
  patients = [];
  seances = [];
  isLoading = false;
  isPlanning = false;
  isDark = false;
  searchQuery = "";
  // Formulaire (correspond exactement a l'image) 
  form = {
    patientId: 0,
    jours: [],
    shiftMatin: false,
    shiftApresMidi: false
  };
  //  Jours 
  toggleJour(j) {
    const i = this.form.jours.indexOf(j);
    if (i >= 0)
      this.form.jours.splice(i, 1);
    else
      this.form.jours.push(j);
  }
  isJourSelected(j) {
    return this.form.jours.includes(j);
  }
  setCreneau(creneau) {
    this.form.shiftMatin = creneau === "MATIN";
    this.form.shiftApresMidi = creneau === "APRES_MIDI";
  }
  //  Init 
  ngOnInit() {
    this.patientSvc.getAll().subscribe({ next: (p) => this.patients = p });
    this.loadSeances();
  }
  loadSeances() {
    this.isLoading = true;
    const today = /* @__PURE__ */ new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - 30);
    const end = new Date(today);
    end.setDate(today.getDate() + 60);
    this.seanceSvc.getByPeriode(toLocalIso(start), toLocalIso(end)).subscribe({
      next: (s) => {
        this.seances = s;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.showToast("Erreur chargement s\xC3\xA9ances", "error");
      }
    });
  }
  //  Liste filtrée 
  get filteredSeances() {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q)
      return this.seances;
    return this.seances.filter((s) => this.patientNom(s).toLowerCase().includes(q) || this.jourLabel(s).toLowerCase().includes(q) || this.creneauLabel(s).toLowerCase().includes(q));
  }
  //  Planifier 
  saveNewSession() {
    if (this.isPlanning)
      return;
    if (!this.form.patientId) {
      this.showToast("Veuillez selectionner un patient", "warning");
      return;
    }
    if (this.form.jours.length === 0) {
      this.showToast("Veuillez selectionner au moins un jour", "warning");
      return;
    }
    if (!this.form.shiftMatin && !this.form.shiftApresMidi) {
      this.showToast("Veuillez selectionner un creneau (Matin ou Apres-midi)", "warning");
      return;
    }
    const creneaux = [];
    if (this.form.shiftMatin)
      creneaux.push("MATIN");
    if (this.form.shiftApresMidi)
      creneaux.push("APRES_MIDI");
    const payload = {
      patientId: this.form.patientId,
      jours: [...this.form.jours].sort((a, b) => a - b),
      creneaux,
      dateDebut: toLocalIso(/* @__PURE__ */ new Date()),
      nombreSemaines: 1,
      utilisateurId: this.authSvc.utilisateurId ?? null
    };
    this.isPlanning = true;
    this.seanceSvc.planifier(payload).subscribe({
      next: (created) => {
        this.seances = [...created, ...this.seances];
        const count = created.length;
        this.showToast(count > 1 ? `${count} seances planifiees avec succes` : "Seance planifiee avec succes", "success");
        this.seanceSvc.invalidateCache();
        this.resetForm();
        this.isPlanning = false;
      },
      error: (err) => {
        this.isPlanning = false;
        this.showToast(err?.error?.message ?? "Erreur lors de la planification", "error");
      }
    });
  }
  resetForm() {
    this.form = { patientId: 0, jours: [], shiftMatin: false, shiftApresMidi: false };
  }
  // Helpers affichage 
  patientNom(s) {
    return s.patient ? `${s.patient.nom} ${s.patient.prenom}` : "\xE2\u20AC\u201D";
  }
  patientInit(s) {
    return `${s.patient?.nom?.[0] ?? ""}${s.patient?.prenom?.[0] ?? ""}`.toUpperCase();
  }
  utilisateurNom(s) {
    return s.utilisateur ? `${s.utilisateur.nom} ${s.utilisateur.prenom}` : "\xE2\u20AC\u201D";
  }
  statutClass(statut) {
    return { TERMINEE: "ok", EN_COURS: "info", PLANIFIEE: "purple", ANNULEE: "danger" }[statut] ?? "purple";
  }
  statutLabel(statut) {
    return { TERMINEE: "Termin\xC3\xA9e", EN_COURS: "En cours", PLANIFIEE: "Planifi\xC3\xA9e", ANNULEE: "Annul\xC3\xA9e" }[statut] ?? statut;
  }
  jourLabel(s) {
    const jour = s.jourPlanifie ?? this.uiDayFromIsoDate(String(s.date));
    return this.joursLabels[jour] ?? "-";
  }
  creneauLabel(s) {
    const creneau = String(s.creneau ?? "").toUpperCase();
    if (creneau === "MATIN")
      return "Matin";
    if (creneau === "APRES_MIDI" || creneau === "APRES-MIDI")
      return "Apres-midi";
    return "Matin";
  }
  uiDayFromIsoDate(value) {
    const date = /* @__PURE__ */ new Date(`${value.slice(0, 10)}T00:00:00`);
    return Number.isNaN(date.getTime()) ? 0 : date.getDay();
  }
  //  Toast 
  tid = 0;
  toasts = [];
  showToast(message, type = "info") {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter((t) => t.id !== id), 3500);
  }
  removeToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
  toastIcon(type) {
    return { success: "check_circle", warning: "warning", error: "error", info: "info" }[type] ?? "info";
  }
  backToDashboard() {
    this.router.navigate(["/medecin"]);
  }
  static \u0275fac = function PlanningComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanningComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanningComponent, selectors: [["app-planning"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 18, consts: [[1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "pl-shell"], [1, "pl-header"], [1, "pl-title"], [1, "pl-header-actions"], [1, "icon-btn", 3, "click", "title"], [1, "material-icons"], ["title", "Tableau de bord", 1, "icon-btn", 3, "click"], [1, "pl-content"], [1, "pl-card"], [1, "pl-card-title"], [1, "pl-form"], [1, "pf-field"], [1, "req"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pf-block"], [1, "pf-block-title"], [1, "pf-days-row"], ["type", "button", "class", "day-chip", 3, "day-chip--active", "click", 4, "ngFor", "ngForOf"], [1, "pf-creneaux-row"], [1, "pf-check"], ["type", "radio", "name", "planningCreneau", 3, "change", "checked"], [1, "pf-creneaux-sep"], [1, "pf-actions"], [1, "btn-plan", 3, "click", "disabled"], [1, "pl-list-header"], [1, "pl-list-title"], [1, "pl-search-wrap"], [1, "material-icons", "pl-search-icon"], ["type", "text", "placeholder", "Rechercher par patient, jour ou cr\uFFFDneau...", 1, "pl-search", 3, "ngModelChange", "ngModel"], ["class", "pl-loading", 4, "ngIf"], ["class", "pl-table-wrap", 4, "ngIf"], [3, "click"], [1, "toast-close"], ["type", "button", 1, "day-chip", 3, "click"], [1, "pl-loading"], [1, "material-icons", "spin"], [1, "pl-table-wrap"], [1, "pl-table"], [4, "ngIf"], ["class", "pl-row", 4, "ngFor", "ngForOf"], ["colspan", "3", 1, "pl-empty"], [1, "pl-row"], [1, "pl-patient"], [1, "pl-avatar"], [1, "pl-patient-info"], [1, "pl-patient-name"], [1, "pl-patient-sub"], [1, "pl-seance-info"], [1, "pl-date"], [1, "pl-time"], [1, "pl-row-actions"], ["title", "Voir d\xE9tails", 1, "act-btn"]], template: function PlanningComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PlanningComponent_div_1_Template, 8, 5, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "header", 3)(4, "h1", 4);
      \u0275\u0275text(5, "Planification des Seances");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_7_listener() {
        return ctx.isDark = !ctx.isDark;
      });
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_10_listener() {
        return ctx.backToDashboard();
      });
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "span", 7);
      \u0275\u0275text(17, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Planifier une s\uFFFDance de dialyse ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "label");
      \u0275\u0275text(22, "Patient ");
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.patientId, $event) || (ctx.form.patientId = $event);
        return $event;
      });
      \u0275\u0275elementStart(26, "option", 16);
      \u0275\u0275text(27, "S\uFFFDlectionner ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, PlanningComponent_option_28_Template, 2, 3, "option", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 18)(30, "div", 19)(31, "span", 7);
      \u0275\u0275text(32, "calendar_month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 20);
      \u0275\u0275template(34, PlanningComponent_button_34_Template, 2, 3, "button", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 18)(36, "div", 19)(37, "span", 7);
      \u0275\u0275text(38, "schedule");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 22)(40, "label", 23)(41, "input", 24);
      \u0275\u0275listener("change", function PlanningComponent_Template_input_change_41_listener() {
        return ctx.setCreneau("MATIN");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Matin");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "div", 25);
      \u0275\u0275elementStart(45, "label", 23)(46, "input", 24);
      \u0275\u0275listener("change", function PlanningComponent_Template_input_change_46_listener() {
        return ctx.setCreneau("APRES_MIDI");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Apr\uFFFDs-midi");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 26)(50, "button", 27);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_50_listener() {
        return ctx.saveNewSession();
      });
      \u0275\u0275elementStart(51, "span", 7);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 10)(55, "div", 28)(56, "h2", 29);
      \u0275\u0275text(57, "S\uFFFDances planifi\uFFFDes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 30)(59, "span", 31);
      \u0275\u0275text(60, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(62, PlanningComponent_div_62_Template, 3, 0, "div", 33)(63, PlanningComponent_div_63_Template, 13, 2, "div", 34);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275classProp("dark", ctx.isDark);
      \u0275\u0275advance(5);
      \u0275\u0275property("title", ctx.isDark ? "Mode clair" : "Mode sombre");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isDark ? "light_mode" : "dark_mode");
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.patientId);
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.patients);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(17, _c0));
      \u0275\u0275advance(7);
      \u0275\u0275property("checked", ctx.form.shiftMatin);
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.form.shiftApresMidi);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isPlanning);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isPlanning ? "sync" : "event_available");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isPlanning ? "Planification..." : "Planifier la seance", " ");
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.pl-shell[_ngcontent-%COMP%] {\n  --bg: #f0f4f8;\n  --card: #ffffff;\n  --border: #e2e8f0;\n  --text-1: #0f172a;\n  --text-2: #334155;\n  --text-3: #64748b;\n  --teal: #0d9488;\n  --teal-bg: rgba(13,148,136,.08);\n  --teal-glow:rgba(13,148,136,.15);\n  --input-bg: #f8fafc;\n  --chip-bg: #f1f5f9;\n  min-height: 100vh;\n  background: var(--bg);\n  font-family: "Inter", sans-serif;\n  color: var(--text-1);\n  transition: background 0.25s, color 0.25s;\n}\n.pl-shell.dark[_ngcontent-%COMP%] {\n  --bg: #06090F;\n  --card: #0B111E;\n  --border: rgba(0,217,196,.12);\n  --text-1: #E0EAF8;\n  --text-2: #7A8EAA;\n  --text-3: #3A4E66;\n  --teal: #00D9C4;\n  --teal-bg: rgba(0,217,196,.08);\n  --teal-glow:rgba(0,217,196,.15);\n  --input-bg: #060c18;\n  --chip-bg: #111827;\n}\n.pl-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 28px 16px;\n  background: var(--card);\n  border-bottom: 1px solid var(--border);\n}\n.pl-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-1);\n  margin: 0;\n}\n.pl-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--input-bg);\n  color: var(--text-2);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--teal);\n  background: var(--teal-bg);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pl-content[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 900px;\n}\n.pl-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.pl-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 20px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-1);\n  border-bottom: 1px solid var(--border);\n}\n.pl-card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--teal);\n}\n.pl-form[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.pf-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.pf-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.pf-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.pf-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.pf-field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 14px;\n  color: var(--text-1);\n  outline: none;\n  transition: border-color 0.15s;\n}\n.pf-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.pf-field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n}\n.pf-block[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.pf-block-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 14px;\n  background: var(--teal-bg);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  color: var(--teal);\n}\n.pf-block-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.pf-days-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 14px;\n}\n.day-chip[_ngcontent-%COMP%] {\n  min-width: 46px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--chip-bg);\n  color: var(--text-2);\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.day-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--teal);\n  color: var(--teal);\n}\n.day-chip--active[_ngcontent-%COMP%] {\n  background: var(--teal-glow);\n  border-color: var(--teal);\n  color: var(--teal);\n}\n.pf-creneaux-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 14px;\n  gap: 0;\n}\n.pf-creneaux-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: var(--border);\n  margin: 0 20px;\n}\n.pf-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.pf-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--teal);\n  cursor: pointer;\n}\n.pf-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.pf-row[_ngcontent-%COMP%]   .pf-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pf-row--hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.pf-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-plan[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 20px;\n  background: var(--teal);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-plan[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn-plan[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.btn-plan[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.pl-list-header[_ngcontent-%COMP%] {\n  padding: 14px 20px 0;\n}\n.pl-list-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-1);\n  margin: 0 0 12px;\n}\n.pl-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 20px 16px;\n}\n.pl-search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: var(--teal);\n  pointer-events: none;\n}\n.pl-search[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 12px 10px 40px;\n  background: var(--input-bg);\n  border: 1px solid var(--teal);\n  border-radius: 8px;\n  font-size: 13.5px;\n  color: var(--text-1);\n  outline: none;\n}\n.pl-search[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-3);\n}\n.pl-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.pl-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.pl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n}\n.pl-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  color: var(--text-3);\n  text-align: left;\n}\n.pl-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  border-bottom: 1px solid var(--border);\n  color: var(--text-1);\n}\n.pl-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--teal-bg);\n}\n.pl-patient[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.pl-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--teal-bg);\n  border: 1px solid var(--teal);\n  color: var(--teal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.pl-patient-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.pl-patient-name[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n}\n.pl-patient-sub[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--text-3);\n}\n.pl-seance-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pl-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.pl-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-3);\n  font-family: monospace;\n}\n.pl-row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text-3);\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.act-btn[_ngcontent-%COMP%]:hover {\n  color: var(--teal);\n  border-color: var(--teal);\n}\n.act-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.pl-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px !important;\n  color: var(--text-3);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.pl-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n  opacity: 0.4;\n}\n.pl-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px 20px;\n  color: var(--text-3);\n  font-size: 13px;\n}\n.pl-loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 10.5px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(48, 209, 88, 0.15);\n  color: #22c55e;\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(78, 168, 248, 0.15);\n  color: #60a5fa;\n}\n.badge.purple[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.15);\n  color: #a78bfa;\n}\n.badge.danger[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.15);\n  color: #f87171;\n}\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 9999;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease;\n}\n.toast--success[_ngcontent-%COMP%] {\n  background: #052e16;\n  color: #86efac;\n  border: 1px solid #16a34a;\n}\n.toast--error[_ngcontent-%COMP%] {\n  background: #1c0505;\n  color: #fca5a5;\n  border: 1px solid #dc2626;\n}\n.toast--warning[_ngcontent-%COMP%] {\n  background: #1c1205;\n  color: #fcd34d;\n  border: 1px solid #d97706;\n}\n.toast--info[_ngcontent-%COMP%] {\n  background: #0c1a2e;\n  color: #93c5fd;\n  border: 1px solid #2563eb;\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.toast-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.toast-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=planning.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanningComponent, { className: "PlanningComponent", filePath: "app\\pages\\planning\\planning.component.ts", lineNumber: 30 });
})();
export {
  PlanningComponent
};
//# sourceMappingURL=chunk-WH6BXHS4.js.map
