import {
  FormsModule
} from "./chunk-F5SCC7LG.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  Router
} from "./chunk-446FZH4X.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H6MCD55Y.js";

// src/app/pages/patient/patient.component.ts
var _c0 = () => ({ nom: "\xC9rythropo\xEF\xE9tine (EPO)", detail: "4000 UI \xB7 Sous-cutan\xE9e \xB7 1\xD7/sem" });
var _c1 = () => ({ nom: "Furos\xE9mide 40 mg", detail: "Orale \xB7 1 comprim\xE9/jour" });
var _c2 = () => ({ nom: "Calcium carbonate 500 mg", detail: "Orale \xB7 3\xD7/jour avec les repas" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = () => ({ date: "29/03", dur: "4h00", av: "74.0 kg", ap: "71.8 kg", uf: "2.2 L", pa: "152/94", ktv: "1.44", ktvClass: "ok", st: "ok", stLbl: "Compl\xE8te" });
var _c5 = () => ({ date: "27/03", dur: "4h00", av: "73.8 kg", ap: "71.6 kg", uf: "2.2 L", pa: "148/90", ktv: "1.41", ktvClass: "ok", st: "ok", stLbl: "Compl\xE8te" });
var _c6 = () => ({ date: "25/03", dur: "3h30", av: "75.1 kg", ap: "72.9 kg", uf: "2.2 L", pa: "170/100", ktv: "1.28", ktvClass: "warn-val", st: "warn", stLbl: "\xC9court\xE9e" });
var _c7 = () => ({ date: "22/03", dur: "4h00", av: "73.5 kg", ap: "71.3 kg", uf: "2.2 L", pa: "144/88", ktv: "1.46", ktvClass: "ok", st: "ok", stLbl: "Compl\xE8te" });
var _c8 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function PatientComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275listener("click", function PatientComponent_div_1_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 80)(6, "span", 15);
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
function PatientComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function PatientComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNotifPanel = false);
    });
    \u0275\u0275elementEnd();
  }
}
function PatientComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("click", function PatientComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSessionModal = false);
    });
    \u0275\u0275elementStart(1, "div", 83);
    \u0275\u0275listener("click", function PatientComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 84)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 85);
    \u0275\u0275listener("click", function PatientComponent_div_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showSessionModal = false);
    });
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 86)(9, "div", 87)(10, "div", 88)(11, "span", 89);
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 90);
    \u0275\u0275text(14, "H\xE9modialyse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 88)(16, "span", 89);
    \u0275\u0275text(17, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 91);
    \u0275\u0275text(19, "4 heures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 88)(21, "span", 89);
    \u0275\u0275text(22, "Salle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 90);
    \u0275\u0275text(24, "Salle A \xB7 M-03");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 88)(26, "span", 89);
    \u0275\u0275text(27, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 90);
    \u0275\u0275text(29, "Inf. N. Tazi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 92)(31, "span", 15);
    \u0275\u0275text(32, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34, "Pr\xE9sentez-vous 15 min avant l'heure de la s\xE9ance. Pes\xE9e obligatoire \xE0 l'entr\xE9e.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 93)(36, "button", 94);
    \u0275\u0275listener("click", function PatientComponent_div_3_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Rappel SMS configur\xE9 pour cette s\xE9ance", "success");
      return \u0275\u0275resetView(ctx_r2.showSessionModal = false);
    });
    \u0275\u0275elementStart(37, "span", 15);
    \u0275\u0275text(38, "notifications_active");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Rappel SMS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 46);
    \u0275\u0275listener("click", function PatientComponent_div_3_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Questions envoy\xE9es au Dr. Benali", "info");
      return \u0275\u0275resetView(ctx_r2.showSessionModal = false);
    });
    \u0275\u0275elementStart(41, "span", 15);
    \u0275\u0275text(42, "question_answer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Poser une question ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.sessionModalTitle);
  }
}
function PatientComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 95);
  }
}
function PatientComponent_div_81_div_7_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 104);
  }
}
function PatientComponent_div_81_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275listener("click", function PatientComponent_div_81_div_7_Template_div_click_0_listener() {
      const n_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markRead(n_r8));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 102)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PatientComponent_div_81_div_7_span_8_Template, 1, 0, "span", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r8 = ctx.$implicit;
    \u0275\u0275classProp("notif-item--unread", !n_r8.read);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("material-icons notif-icon notif-icon--", n_r8.type, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r8.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r8.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r8.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r8.read);
  }
}
function PatientComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function PatientComponent_div_81_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAllRead());
    });
    \u0275\u0275text(5, "Tout marquer lu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 99);
    \u0275\u0275template(7, PatientComponent_div_81_div_7_Template, 9, 9, "div", 100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.notifications);
  }
}
function PatientComponent_div_270_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function PatientComponent_div_270_Template_div_click_0_listener() {
      const med_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showToast("D\xE9tails de " + med_r10.nom + " affich\xE9s", "info"));
    });
    \u0275\u0275elementStart(1, "div", 106)(2, "span", 15);
    \u0275\u0275text(3, "medication");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 107)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 55);
    \u0275\u0275text(10, "Actif");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const med_r10 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(med_r10.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(med_r10.detail);
  }
}
function PatientComponent_tr_299_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 78);
    \u0275\u0275listener("click", function PatientComponent_tr_299_Template_tr_click_0_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showToast("Rapport de s\xE9ance du " + row_r12.date + " ouvert", "info"));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 108);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 108);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r12.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.dur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r12.av);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r12.ap);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r12.uf);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r12.pa.includes("170") ? "warn-val" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.pa);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r12.ktvClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.ktv);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", row_r12.st, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.stLbl);
  }
}
var PatientComponent = class _PatientComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  // ── Sidebar mobile ──
  sidebarOpen = false;
  // ── Navigation ──
  activeSection = "dashboard";
  setSection(s) {
    const dev = {
      historique: "Historique complet",
      analyses: "Mes Analyses",
      constantes: "Mes Constantes",
      medecin: "Mon M\xE9decin"
    };
    if (dev[s]) {
      this.showToast(`${dev[s]} \u2014 section en d\xE9veloppement`, "info");
      return;
    }
    this.activeSection = s;
    this.showNotifPanel = false;
  }
  // ── Session detail modal ──
  showSessionModal = false;
  sessionModalTitle = "";
  openSessionModal(label) {
    this.sessionModalTitle = label;
    this.showSessionModal = true;
    this.showNotifPanel = false;
  }
  // ── Notifications ──
  showNotifPanel = false;
  notifications = [
    { icon: "event", text: "S\xE9ance demain \xE0 08:00 \u2014 Salle A Machine M-03", time: "il y a 30min", type: "info", read: false },
    { icon: "warning_amber", text: "Cr\xE9atinine \xE9lev\xE9e \u2014 R\xE9sultat \xE0 consulter", time: "il y a 2h", type: "warn", read: false },
    { icon: "check_circle", text: "Ordonnance EPO renouvel\xE9e par Dr. Benali", time: "il y a 1j", type: "ok", read: true }
  ];
  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
  toggleNotifPanel() {
    this.showNotifPanel = !this.showNotifPanel;
  }
  markAllRead() {
    this.notifications.forEach((n) => n.read = true);
    this.showToast("Notifications marqu\xE9es comme lues", "info");
  }
  markRead(n) {
    n.read = true;
  }
  // ── Actions ──
  ouvrirCalendrier() {
    this.showToast("Calendrier des s\xE9ances affich\xE9", "info");
  }
  exporterPDF() {
    this.showToast("Export PDF de l'historique en cours\u2026", "info");
  }
  voirHistorique() {
    this.showToast("Historique complet \u2014 section en d\xE9veloppement", "info");
  }
  // ── Toast ──
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
  logout() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function PatientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientComponent, selectors: [["app-patient"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 304, vars: 31, consts: [[1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "notif-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "dashboard"], [1, "sidebar-backdrop", 3, "click"], [1, "sidebar"], [1, "sidebar__logo"], ["width", "28", "height", "28", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "sidebar__nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "material-icons"], [1, "sidebar__user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "logout-btn", 3, "click"], [1, "main"], [1, "topbar"], [1, "topbar__left"], [1, "topbar__date"], [1, "topbar__right"], [1, "hamburger-btn", 3, "click"], [1, "notif-wrapper"], [1, "icon-btn", "notif-btn", 3, "click"], ["class", "notif-dot", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], [1, "profile-banner"], [1, "profile-banner__info"], [1, "profile-avatar"], [1, "profile-details"], [1, "profile-meta"], [1, "profile-banner__stats"], [1, "p-stat", 2, "cursor", "pointer", 3, "click"], [1, "mono"], ["title", "Cliquer pour en savoir plus", 1, "p-stat", "warn", 2, "cursor", "pointer", 3, "click"], [1, "mono", 2, "color", "var(--c-red)"], [2, "color", "var(--c-red)"], [1, "patient-grid"], [1, "panel"], [1, "panel__head"], [1, "btn-outline-sm", 3, "click"], [1, "next-sessions"], [1, "next-session", "next-session--next", 2, "cursor", "pointer", 3, "click"], [1, "next-session__date"], [1, "day"], [1, "num"], [1, "month"], [1, "next-session__info"], [1, "next-session__badge"], [1, "badge", "info"], [1, "countdown"], [1, "next-session", 2, "cursor", "pointer", 3, "click"], [1, "badge", "purple"], [1, "right-col"], [1, "vitals-list"], [1, "vital-entry", 2, "cursor", "pointer", 3, "click"], [1, "vital-entry__left"], [1, "material-icons", 2, "color", "var(--c-red)"], [1, "vital-entry__name"], [1, "vital-entry__right"], [1, "mono", "crit-val"], [1, "badge", "warn"], [1, "material-icons", 2, "color", "var(--c-blue)"], [1, "badge", "ok"], [1, "material-icons", 2, "color", "var(--c-teal)"], [1, "material-icons", 2, "color", "var(--c-amber)"], [1, "med-list"], ["class", "med-item", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "panel", "panel--history"], [1, "data-table"], ["style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "panel__footer"], [2, "cursor", "pointer", 3, "click"], [3, "click"], [1, "toast-close"], [1, "notif-backdrop", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", "modal-panel--sm", 3, "click"], [1, "modal-header"], [1, "modal-close-btn", 3, "click"], [1, "modal-body"], [1, "modal-stat-row", 2, "grid-template-columns", "1fr 1fr"], [1, "modal-stat"], [1, "modal-stat-lbl"], [1, "modal-stat-val"], [1, "modal-stat-val", "mono"], [1, "modal-note"], [1, "modal-actions"], [1, "btn-sm-primary", 3, "click"], [1, "notif-dot"], [1, "notif-panel"], [1, "notif-panel__head"], [1, "notif-read-all", 3, "click"], [1, "notif-list"], ["class", "notif-item", 3, "notif-item--unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-content"], ["class", "notif-unread-dot", 4, "ngIf"], [1, "notif-unread-dot"], [1, "med-item", 2, "cursor", "pointer", 3, "click"], [1, "med-icon"], [1, "med-info"], [1, "mono", 3, "ngClass"]], template: function PatientComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PatientComponent_div_1_Template, 8, 5, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, PatientComponent_div_2_Template, 1, 0, "div", 2)(3, PatientComponent_div_3_Template, 44, 1, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_5_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "aside", 6)(7, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9)(10, "path", 10)(11, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "DialySys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "nav", 12)(15, "div", 13);
      \u0275\u0275text(16, "Mon Espace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 14);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_17_listener() {
        return ctx.setSection("dashboard");
      });
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "a", 14);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_22_listener() {
        return ctx.setSection("seances");
      });
      \u0275\u0275elementStart(23, "span", 15);
      \u0275\u0275text(24, "event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Mes S\xE9ances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "a", 14);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_27_listener() {
        return ctx.setSection("historique");
      });
      \u0275\u0275elementStart(28, "span", 15);
      \u0275\u0275text(29, "history");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Historique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "a", 14);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_32_listener() {
        return ctx.setSection("traitements");
      });
      \u0275\u0275elementStart(33, "span", 15);
      \u0275\u0275text(34, "medication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Mes Traitements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 13);
      \u0275\u0275text(38, "Sant\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 14);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_39_listener() {
        return ctx.setSection("analyses");
      });
      \u0275\u0275elementStart(40, "span", 15);
      \u0275\u0275text(41, "science");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Mes Analyses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "a", 14);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_44_listener() {
        return ctx.setSection("constantes");
      });
      \u0275\u0275elementStart(45, "span", 15);
      \u0275\u0275text(46, "monitor_heart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Mes Constantes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "a", 14);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_49_listener() {
        return ctx.setSection("medecin");
      });
      \u0275\u0275elementStart(50, "span", 15);
      \u0275\u0275text(51, "local_hospital");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "Mon M\xE9decin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 16)(55, "div", 17);
      \u0275\u0275text(56, "AK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 18)(58, "span", 19);
      \u0275\u0275text(59, "Alaoui Khalid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 20);
      \u0275\u0275text(61, "Patient \xB7 DRC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "button", 21);
      \u0275\u0275listener("click", function PatientComponent_Template_button_click_62_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(63, "span", 15);
      \u0275\u0275text(64, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 22)(66, "header", 23)(67, "div", 24)(68, "h1");
      \u0275\u0275text(69, "Mon Espace Sant\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 25);
      \u0275\u0275text(71, "Bonjour, Khalid \u2014 3 Avril 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 26)(73, "button", 27);
      \u0275\u0275listener("click", function PatientComponent_Template_button_click_73_listener() {
        return ctx.sidebarOpen = !ctx.sidebarOpen;
      });
      \u0275\u0275elementStart(74, "span", 15);
      \u0275\u0275text(75, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 28)(77, "button", 29);
      \u0275\u0275listener("click", function PatientComponent_Template_button_click_77_listener() {
        return ctx.toggleNotifPanel();
      });
      \u0275\u0275elementStart(78, "span", 15);
      \u0275\u0275text(79, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275template(80, PatientComponent_span_80_Template, 1, 0, "span", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, PatientComponent_div_81_Template, 8, 1, "div", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 32)(83, "div", 33)(84, "div", 34);
      \u0275\u0275text(85, "AK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 35)(87, "h2");
      \u0275\u0275text(88, "Alaoui Khalid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 36)(90, "span")(91, "span", 15);
      \u0275\u0275text(92, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(93, " Homme \xB7 58 ans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span")(95, "span", 15);
      \u0275\u0275text(96, "local_hospital");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, " DRC \u2014 Dialyse 3\xD7/sem.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span")(99, "span", 15);
      \u0275\u0275text(100, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, " Dossier: DRC-2019-0042");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "span")(103, "span", 15);
      \u0275\u0275text(104, "person_4");
      \u0275\u0275elementEnd();
      \u0275\u0275text(105, " Dr. Benali Karim");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(106, "div", 37)(107, "div", 38);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_107_listener() {
        return ctx.showToast("Rapport Kt/V affich\xE9", "info");
      });
      \u0275\u0275elementStart(108, "b");
      \u0275\u0275text(109, "Kt/V");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "span", 39);
      \u0275\u0275text(111, "1.42");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "em");
      \u0275\u0275text(113, "Ad\xE9quat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 38);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_114_listener() {
        return ctx.showToast("Historique poids affich\xE9", "info");
      });
      \u0275\u0275elementStart(115, "b");
      \u0275\u0275text(116, "Poids sec");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "span", 39);
      \u0275\u0275text(118, "72 kg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "em");
      \u0275\u0275text(120, "Stable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 40);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_121_listener() {
        return ctx.showToast("R\xE9sultat cr\xE9atinine \u2014 Dr. Benali a \xE9t\xE9 alert\xE9", "warning");
      });
      \u0275\u0275elementStart(122, "b");
      \u0275\u0275text(123, "Cr\xE9atinine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "span", 41);
      \u0275\u0275text(125, "9.2 mg/dL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "em", 42);
      \u0275\u0275text(127, "\xC9lev\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 38);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_128_listener() {
        return ctx.showToast("R\xE9sultat h\xE9moglobine affich\xE9", "info");
      });
      \u0275\u0275elementStart(129, "b");
      \u0275\u0275text(130, "H\xE9moglobine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span", 39);
      \u0275\u0275text(132, "10.8 g/dL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "em");
      \u0275\u0275text(134, "Limite");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(135, "div", 43)(136, "div", 44)(137, "div", 45)(138, "h2");
      \u0275\u0275text(139, "Prochaines S\xE9ances");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "button", 46);
      \u0275\u0275listener("click", function PatientComponent_Template_button_click_140_listener() {
        return ctx.ouvrirCalendrier();
      });
      \u0275\u0275elementStart(141, "span", 15);
      \u0275\u0275text(142, "calendar_month");
      \u0275\u0275elementEnd();
      \u0275\u0275text(143, " Calendrier ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 47)(145, "div", 48);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_145_listener() {
        return ctx.openSessionModal("H\xE9modialyse \u2014 JEU 03 AVR \xB7 08:00");
      });
      \u0275\u0275elementStart(146, "div", 49)(147, "span", 50);
      \u0275\u0275text(148, "JEU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "span", 51);
      \u0275\u0275text(150, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "span", 52);
      \u0275\u0275text(152, "AVR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 53)(154, "b");
      \u0275\u0275text(155, "H\xE9modialyse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "span")(157, "span", 15);
      \u0275\u0275text(158, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, " 08:00 \u2014 12:00 (4 heures)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span")(161, "span", 15);
      \u0275\u0275text(162, "room");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, " Salle A \xB7 Machine M-03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "span")(165, "span", 15);
      \u0275\u0275text(166, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(167, " Inf. N. Tazi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 54)(169, "span", 55);
      \u0275\u0275text(170, "Demain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "span", 56);
      \u0275\u0275text(172, "Dans 20h");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 57);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_173_listener() {
        return ctx.openSessionModal("H\xE9modialyse \u2014 SAM 05 AVR \xB7 08:00");
      });
      \u0275\u0275elementStart(174, "div", 49)(175, "span", 50);
      \u0275\u0275text(176, "SAM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "span", 51);
      \u0275\u0275text(178, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "span", 52);
      \u0275\u0275text(180, "AVR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "div", 53)(182, "b");
      \u0275\u0275text(183, "H\xE9modialyse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "span")(185, "span", 15);
      \u0275\u0275text(186, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275text(187, " 08:00 \u2014 12:00 (4 heures)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "span")(189, "span", 15);
      \u0275\u0275text(190, "room");
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, " Salle A \xB7 Machine M-03");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "div", 54)(193, "span", 58);
      \u0275\u0275text(194, "Planifi\xE9e");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(195, "div", 57);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_195_listener() {
        return ctx.openSessionModal("H\xE9modialyse \u2014 LUN 07 AVR \xB7 08:00");
      });
      \u0275\u0275elementStart(196, "div", 49)(197, "span", 50);
      \u0275\u0275text(198, "LUN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "span", 51);
      \u0275\u0275text(200, "07");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "span", 52);
      \u0275\u0275text(202, "AVR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "div", 53)(204, "b");
      \u0275\u0275text(205, "H\xE9modialyse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "span")(207, "span", 15);
      \u0275\u0275text(208, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275text(209, " 08:00 \u2014 12:00 (4 heures)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "div", 54)(211, "span", 58);
      \u0275\u0275text(212, "Planifi\xE9e");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(213, "div", 59)(214, "div", 44)(215, "div", 45)(216, "h2");
      \u0275\u0275text(217, "Derni\xE8res Constantes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "span", 25);
      \u0275\u0275text(219, "02/04/2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 60)(221, "div", 61);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_221_listener() {
        return ctx.showToast("\xC9volution PA affich\xE9e", "info");
      });
      \u0275\u0275elementStart(222, "div", 62)(223, "span", 63);
      \u0275\u0275text(224, "favorite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "span", 64);
      \u0275\u0275text(226, "Pression art\xE9rielle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 65)(228, "span", 66);
      \u0275\u0275text(229, "158/96");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "span", 67);
      \u0275\u0275text(231, "\xC9lev\xE9e");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(232, "div", 61);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_232_listener() {
        return ctx.showToast("\xC9volution FC affich\xE9e", "info");
      });
      \u0275\u0275elementStart(233, "div", 62)(234, "span", 68);
      \u0275\u0275text(235, "monitor_heart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "span", 64);
      \u0275\u0275text(237, "Fr\xE9quence cardiaque");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div", 65)(239, "span", 39);
      \u0275\u0275text(240, "82 bpm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "span", 69);
      \u0275\u0275text(242, "Normal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(243, "div", 61);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_243_listener() {
        return ctx.showToast("\xC9volution poids affich\xE9e", "info");
      });
      \u0275\u0275elementStart(244, "div", 62)(245, "span", 70);
      \u0275\u0275text(246, "scale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "span", 64);
      \u0275\u0275text(248, "Poids pr\xE9-s\xE9ance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "div", 65)(250, "span", 39);
      \u0275\u0275text(251, "74.2 kg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "span", 67);
      \u0275\u0275text(253, "+2.2 kg");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "div", 61);
      \u0275\u0275listener("click", function PatientComponent_Template_div_click_254_listener() {
        return ctx.showToast("\xC9volution temp\xE9rature affich\xE9e", "info");
      });
      \u0275\u0275elementStart(255, "div", 62)(256, "span", 71);
      \u0275\u0275text(257, "thermostat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "span", 64);
      \u0275\u0275text(259, "Temp\xE9rature");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 65)(261, "span", 39);
      \u0275\u0275text(262, "37.1 \xB0C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "span", 69);
      \u0275\u0275text(264, "Normal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(265, "div", 44)(266, "div", 45)(267, "h2");
      \u0275\u0275text(268, "Mes Traitements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 72);
      \u0275\u0275template(270, PatientComponent_div_270_Template, 11, 2, "div", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "div", 74)(272, "div", 45)(273, "h2");
      \u0275\u0275text(274, "Historique des S\xE9ances");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "button", 46);
      \u0275\u0275listener("click", function PatientComponent_Template_button_click_275_listener() {
        return ctx.exporterPDF();
      });
      \u0275\u0275elementStart(276, "span", 15);
      \u0275\u0275text(277, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(278, " Exporter PDF ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "table", 75)(280, "thead")(281, "tr")(282, "th");
      \u0275\u0275text(283, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "th");
      \u0275\u0275text(285, "Dur\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "th");
      \u0275\u0275text(287, "Poids avant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "th");
      \u0275\u0275text(289, "Poids apr\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "th");
      \u0275\u0275text(291, "UF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "th");
      \u0275\u0275text(293, "PA pr\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "th");
      \u0275\u0275text(295, "Kt/V");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "th");
      \u0275\u0275text(297, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(298, "tbody");
      \u0275\u0275template(299, PatientComponent_tr_299_Template, 24, 13, "tr", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "div", 77);
      \u0275\u0275text(301, " 4 derni\xE8res s\xE9ances \xB7 ");
      \u0275\u0275elementStart(302, "a", 78);
      \u0275\u0275listener("click", function PatientComponent_Template_a_click_302_listener() {
        return ctx.voirHistorique();
      });
      \u0275\u0275text(303, "Voir tout l'historique");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSessionModal);
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.activeSection === "dashboard");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeSection === "seances");
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.activeSection === "traitements");
      \u0275\u0275advance(48);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance(189);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction3(18, _c3, \u0275\u0275pureFunction0(15, _c0), \u0275\u0275pureFunction0(16, _c1), \u0275\u0275pureFunction0(17, _c2)));
      \u0275\u0275advance(29);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(26, _c8, \u0275\u0275pureFunction0(22, _c4), \u0275\u0275pureFunction0(23, _c5), \u0275\u0275pureFunction0(24, _c6), \u0275\u0275pureFunction0(25, _c7)));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n.patient-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  grid-template-rows: auto auto;\n  gap: 16px;\n  padding: 0 28px 28px;\n  flex: 1;\n  overflow-y: auto;\n}\n.patient-grid[_ngcontent-%COMP%]   .panel--history[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.profile-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  padding: 20px 28px;\n  margin: 0 28px 16px;\n  flex-shrink: 0;\n}\n.profile-banner__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.profile-banner__stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  background: var(--c-teal-soft);\n  border: 2px solid var(--c-border-hi);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--f-head);\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--c-teal);\n  flex-shrink: 0;\n}\n.profile-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin: 0 0 8px;\n}\n.profile-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.profile-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.profile-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-3);\n}\n.p-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 2px;\n}\n.p-stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--c-text-3);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.p-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--c-text-1);\n  line-height: 1.2;\n}\n.p-stat[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 10px;\n  color: var(--c-green);\n}\n.next-sessions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.next-session[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--c-border);\n  transition: background 0.15s;\n}\n.next-session[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.next-session[_ngcontent-%COMP%]:hover {\n  background: var(--c-card-hi);\n}\n.next-session--next[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n  border-left: 3px solid var(--c-teal);\n}\n.next-session--next[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.15);\n}\n.next-session__date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 44px;\n  flex-shrink: 0;\n}\n.next-session__date[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.next-session__date[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--c-teal);\n  line-height: 1;\n}\n.next-session__date[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n}\n.next-session__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.next-session__info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin-bottom: 4px;\n}\n.next-session__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11.5px;\n  color: var(--c-text-2);\n  margin-top: 2px;\n}\n.next-session__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-3);\n}\n.next-session__badge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.countdown[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 11px;\n  color: var(--c-teal);\n}\n.vitals-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.vital-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.vital-entry[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.vital-entry__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.vital-entry__left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.vital-entry__name[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--c-text-2);\n}\n.vital-entry__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.vital-entry__right[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.med-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.med-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.med-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.med-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--c-blue-soft);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.med-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--c-blue);\n}\n.med-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.med-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.med-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.mono.ok[_ngcontent-%COMP%] {\n  color: var(--c-green);\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n    padding: 12px 14px !important;\n  }\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n}\n/*# sourceMappingURL=patient.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientComponent, { className: "PatientComponent", filePath: "app\\pages\\patient\\patient.component.ts", lineNumber: 16 });
})();
export {
  PatientComponent
};
//# sourceMappingURL=chunk-ZY7WR5BQ.js.map
