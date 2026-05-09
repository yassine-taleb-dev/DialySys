import {
  OrdonnanceService
} from "./chunk-ADRQN3WJ.js";
import {
  PatientService
} from "./chunk-O7CSYSXH.js";
import {
  SeanceService
} from "./chunk-O7WTSBFZ.js";
import {
  AuthService,
  environment
} from "./chunk-XKHRPCVX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-M52EQFS5.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  SlicePipe,
  UpperCasePipe
} from "./chunk-CGTKSDI3.js";
import {
  __spreadProps,
  __spreadValues,
  forkJoin,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KZPRPR6G.js";

// src/models/dateutils.ts
function todayIso() {
  const d = /* @__PURE__ */ new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatDateFr(isoDate) {
  if (!isoDate)
    return "\u2014";
  const parts = isoDate.split("-");
  if (parts.length !== 3)
    return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// src/services/dossier-patient.service.ts
var DossierPatientService = class _DossierPatientService {
  http;
  api = `${environment.apiUrl}/dossiers`;
  constructor(http) {
    this.http = http;
  }
  getByPatient(patientId) {
    return this.http.get(`${this.api}/dossiers/${patientId}`);
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  create(patientId, payload) {
    return this.http.post(`${this.api}/patient/${patientId}`, payload);
  }
  update(patientId, payload) {
    return this.http.put(`${this.api}/patient/${patientId}`, payload);
  }
  static \u0275fac = function DossierPatientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DossierPatientService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DossierPatientService, factory: _DossierPatientService.\u0275fac, providedIn: "root" });
};

// src/services/alerte.service.ts
var AlerteService = class _AlerteService {
  http;
  api = `${environment.apiUrl}/alertes`;
  constructor(http) {
    this.http = http;
  }
  // ── GET /api/alertes → toutes les alertes non lues ──────────────
  getAll() {
    return this.http.get(this.api);
  }
  // ── GET /api/alertes/mes-alertes/{username} ──────────────────────
  getMesAlertes(username) {
    return this.http.get(`${this.api}/mes-alertes/${username}`);
  }
  // ── GET /api/alertes/patient/{patientId} ────────────────────────
  getByPatient(patientId) {
    return this.http.get(`${this.api}/patient/${patientId}`);
  }
  // ── POST /api/alertes → création manuelle (admin) ───────────────
  create(payload) {
    return this.http.post(this.api, payload);
  }
  // ── PUT /api/alertes/{id}/lue ────────────────────────────────────
  marquerLue(id) {
    return this.http.put(`${this.api}/${id}/lue`, {});
  }
  // ── PUT /api/alertes/lue-tout ────────────────────────────────────
  marquerToutesLues() {
    return this.http.put(`${this.api}/lue-tout`, {});
  }
  static \u0275fac = function AlerteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlerteService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlerteService, factory: _AlerteService.\u0275fac, providedIn: "root" });
};

// src/app/pages/medecin/medecin.component.ts
function MedecinComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function MedecinComponent_div_1_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43)(6, "span", 18);
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
function MedecinComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "span", 46);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Chargement des donn\xE9es\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function MedecinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function MedecinComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNotifPanel = false);
    });
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_4_div_10_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function MedecinComponent_div_4_div_10_div_1_div_5_Template_div_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.searchGoToPatient(p_r7));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 67);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r7.pathologie, " \xB7 ", p_r7.statut, "");
  }
}
function MedecinComponent_div_4_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 18);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Patients ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MedecinComponent_div_4_div_10_div_1_div_5_Template, 10, 4, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.globalResults.patients);
  }
}
function MedecinComponent_div_4_div_10_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function MedecinComponent_div_4_div_10_div_2_div_5_Template_div_click_0_listener() {
      const o_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.searchGoToOrdonnance(o_r9));
    });
    \u0275\u0275elementStart(1, "div", 68)(2, "span", 18);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.ordPatientNomComplet(o_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(9, 7, o_r9.medicaments, 0, 50), "", o_r9.medicaments.length > 50 ? "\u2026" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge badge--", ctx_r2.ordStatutClass(o_r9.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.ordStatutLabel(o_r9.statut));
  }
}
function MedecinComponent_div_4_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 18);
    \u0275\u0275text(3, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Ordonnances ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MedecinComponent_div_4_div_10_div_2_div_5_Template, 12, 11, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.globalResults.ordonnances);
  }
}
function MedecinComponent_div_4_div_10_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function MedecinComponent_div_4_div_10_div_3_div_5_Template_div_click_0_listener() {
      const a_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.searchGoToAlerte(a_r11));
    });
    \u0275\u0275elementStart(1, "div", 69)(2, "span", 18);
    \u0275\u0275text(3, "emergency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r11 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", a_r11.patient.nom, " ", a_r11.patient.prenom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r11.message);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge badge--", a_r11.lue ? "ok" : "danger", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r11.lue ? "Lue" : "Non lue");
  }
}
function MedecinComponent_div_4_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 18);
    \u0275\u0275text(3, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Alertes ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MedecinComponent_div_4_div_10_div_3_div_5_Template, 11, 7, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.globalResults.alertes);
  }
}
function MedecinComponent_div_4_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 18);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Aucun r\xE9sultat pour \xAB ", ctx_r2.globalSearchQuery, " \xBB");
  }
}
function MedecinComponent_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, MedecinComponent_div_4_div_10_div_1_Template, 6, 1, "div", 57)(2, MedecinComponent_div_4_div_10_div_2_Template, 6, 1, "div", 57)(3, MedecinComponent_div_4_div_10_div_3_Template, 6, 1, "div", 57)(4, MedecinComponent_div_4_div_10_div_4_Template, 5, 1, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.globalResults.patients.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.globalResults.ordonnances.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.globalResults.alertes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.globalResultsCount === 0);
  }
}
function MedecinComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 18);
    \u0275\u0275text(2, "tips_and_updates");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Tapez le nom d'un patient, un m\xE9dicament ou un message d'alerte ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function MedecinComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275listener("click", function MedecinComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 50)(3, "span", 51);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 52, 0);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_4_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.globalSearchQuery, $event) || (ctx_r2.globalSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.escape", function MedecinComponent_div_4_Template_input_keydown_escape_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function MedecinComponent_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, MedecinComponent_div_4_div_10_Template, 5, 4, "div", 54)(11, MedecinComponent_div_4_div_11_Template, 4, 0, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.globalSearchQuery);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.globalSearchQuery.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.globalSearchQuery.trim());
  }
}
function MedecinComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSettings());
    });
    \u0275\u0275elementStart(1, "div", 73);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 74)(3, "span", 75);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Param\xE8tres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 76);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSettings());
    });
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 77)(11, "div", 78);
    \u0275\u0275text(12, "Mon Profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 79)(14, "div", 80);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 81)(18, "span", 82);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 83);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 84);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 77)(25, "div", 78);
    \u0275\u0275text(26, "Navigation rapide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 85)(28, "button", 86);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setSection("dashboard");
      return \u0275\u0275resetView(ctx_r2.closeSettings());
    });
    \u0275\u0275elementStart(29, "span", 18);
    \u0275\u0275text(30, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Tableau de bord ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 86);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setSection("patients");
      return \u0275\u0275resetView(ctx_r2.closeSettings());
    });
    \u0275\u0275elementStart(33, "span", 18);
    \u0275\u0275text(34, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Mes patients ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 86);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setSection("ordonnances");
      return \u0275\u0275resetView(ctx_r2.closeSettings());
    });
    \u0275\u0275elementStart(37, "span", 18);
    \u0275\u0275text(38, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Ordonnances ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 86);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setSection("alertes");
      return \u0275\u0275resetView(ctx_r2.closeSettings());
    });
    \u0275\u0275elementStart(41, "span", 18);
    \u0275\u0275text(42, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Alertes ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 77)(45, "button", 87);
    \u0275\u0275listener("click", function MedecinComponent_div_5_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(46, "span", 18);
    \u0275\u0275text(47, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Se d\xE9connecter ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 5, ((tmp_1_0 = ctx_r2.currentUser == null ? null : ctx_r2.currentUser.nom == null ? null : ctx_r2.currentUser.nom[0]) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "") + ((tmp_1_0 = ctx_r2.currentUser == null ? null : ctx_r2.currentUser.prenom == null ? null : ctx_r2.currentUser.prenom[0]) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "")), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.currentUser == null ? null : ctx_r2.currentUser.prenom, " ", ctx_r2.currentUser == null ? null : ctx_r2.currentUser.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentUser == null ? null : ctx_r2.currentUser.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentUser == null ? null : ctx_r2.currentUser.login);
  }
}
function MedecinComponent_div_6_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275property("value", p_r14.nom + " " + p_r14.prenom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", p_r14.nom, " ", p_r14.prenom, " (", p_r14.pathologie, ") ");
  }
}
function MedecinComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function MedecinComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNouvelleOrdonnanceModal = false);
    });
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function MedecinComponent_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 89)(3, "span", 90);
    \u0275\u0275text(4, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Nouvelle Ordonnance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 76);
    \u0275\u0275listener("click", function MedecinComponent_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNouvelleOrdonnanceModal = false);
    });
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 91)(11, "div", 92)(12, "div", 93)(13, "label");
    \u0275\u0275text(14, "Patient ");
    \u0275\u0275elementStart(15, "span", 94);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_6_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newOrd.patientNomComplet, $event) || (ctx_r2.newOrd.patientNomComplet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function MedecinComponent_div_6_Template_select_change_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOrdPatientChange());
    });
    \u0275\u0275elementStart(18, "option", 96);
    \u0275\u0275text(19, "\u2014 S\xE9lectionner un patient \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, MedecinComponent_div_6_option_20_Template, 2, 4, "option", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 98)(22, "label");
    \u0275\u0275text(23, "Date d'\xE9mission");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 98)(26, "label");
    \u0275\u0275text(27, "Date d'expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_6_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newOrd.dateExpiration, $event) || (ctx_r2.newOrd.dateExpiration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 93)(30, "label");
    \u0275\u0275text(31, "M\xE9dicaments ");
    \u0275\u0275elementStart(32, "span", 94);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "textarea", 101);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_6_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newOrd.medicaments, $event) || (ctx_r2.newOrd.medicaments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 93)(36, "label");
    \u0275\u0275text(37, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 102);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_6_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newOrd.posologie, $event) || (ctx_r2.newOrd.posologie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 93)(40, "label");
    \u0275\u0275text(41, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 103);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_6_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newOrd.instructions, $event) || (ctx_r2.newOrd.instructions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 104)(44, "button", 105);
    \u0275\u0275listener("click", function MedecinComponent_div_6_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sauvegarderOrdonnance());
    });
    \u0275\u0275elementStart(45, "span", 18);
    \u0275\u0275text(46, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Enregistrer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_div_6_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNouvelleOrdonnanceModal = false);
    });
    \u0275\u0275text(49, "Annuler");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newOrd.patientNomComplet);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.allPatients);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.today);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newOrd.dateExpiration);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newOrd.medicaments);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newOrd.posologie);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newOrd.instructions);
  }
}
function MedecinComponent_div_7_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 18);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedOrdonnance.instructions);
  }
}
function MedecinComponent_div_7_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "span", 18);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Prescripteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 115);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", ctx_r2.selectedOrdonnance.utilisateur.nom, " ", ctx_r2.selectedOrdonnance.utilisateur.prenom, " \xB7 Mat. ", ctx_r2.selectedOrdonnance.utilisateur.mat, " ");
  }
}
function MedecinComponent_div_7_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function MedecinComponent_div_7_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.annulerOrdonnance(ctx_r2.selectedOrdonnance));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function MedecinComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showOrdonnanceDetail = false);
    });
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function MedecinComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 108)(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 110)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 76);
    \u0275\u0275listener("click", function MedecinComponent_div_7_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showOrdonnanceDetail = false);
    });
    \u0275\u0275elementStart(13, "span", 18);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 91)(16, "div", 111)(17, "div", 112)(18, "span", 18);
    \u0275\u0275text(19, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "span");
    \u0275\u0275text(22, "Date d'\xE9mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "b");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 112)(26, "span", 18);
    \u0275\u0275text(27, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "span");
    \u0275\u0275text(30, "Date d'expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "b");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 113)(34, "div", 114)(35, "span", 18);
    \u0275\u0275text(36, "medication");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " M\xE9dicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 115);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 113)(41, "div", 114)(42, "span", 18);
    \u0275\u0275text(43, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 115);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, MedecinComponent_div_7_div_47_Template, 5, 1, "div", 116)(48, MedecinComponent_div_7_div_48_Template, 7, 3, "div", 117);
    \u0275\u0275elementStart(49, "div", 104)(50, "button", 105);
    \u0275\u0275listener("click", function MedecinComponent_div_7_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showToast("Impression ordonnance...", "info"));
    });
    \u0275\u0275elementStart(51, "span", 18);
    \u0275\u0275text(52, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Imprimer ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, MedecinComponent_div_7_button_54_Template, 4, 0, "button", 118);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.ordPatientInit(ctx_r2.selectedOrdonnance));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Ordonnance N\xB0", ctx_r2.selectedOrdonnance.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.ordPatientNomComplet(ctx_r2.selectedOrdonnance), " \xB7 ", ctx_r2.formatOrdDate(ctx_r2.selectedOrdonnance.dateEmission), "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.ordStatutClass(ctx_r2.selectedOrdonnance.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ordStatutLabel(ctx_r2.selectedOrdonnance.statut), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.formatOrdDate(ctx_r2.selectedOrdonnance.dateEmission));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.formatOrdDate(ctx_r2.selectedOrdonnance.dateExpiration));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedOrdonnance.medicaments);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedOrdonnance.posologie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedOrdonnance.instructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedOrdonnance.utilisateur);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.selectedOrdonnance.statut === "EN_ATTENTE");
  }
}
function MedecinComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.unreadCount);
  }
}
function MedecinComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275listener("click", function MedecinComponent_div_67_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("patients"));
    });
    \u0275\u0275text(2, "Patients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedPatient == null ? null : ctx_r2.selectedPatient.nom, " ", ctx_r2.selectedPatient == null ? null : ctx_r2.selectedPatient.prenom, "");
  }
}
function MedecinComponent_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 124);
  }
}
function MedecinComponent_div_84_div_7_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 134);
  }
}
function MedecinComponent_div_84_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275listener("click", function MedecinComponent_div_84_div_7_Template_div_click_0_listener() {
      const n_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markNotifRead(n_r20));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 132)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MedecinComponent_div_84_div_7_span_8_Template, 1, 0, "span", 133);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r20 = ctx.$implicit;
    \u0275\u0275classProp("notif-item--unread", !n_r20.read);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("material-icons notif-icon notif-icon--", n_r20.type, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r20.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r20.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r20.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r20.read);
  }
}
function MedecinComponent_div_84_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "span", 136);
    \u0275\u0275text(2, "Aucune notification");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 127);
    \u0275\u0275listener("click", function MedecinComponent_div_84_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAllRead());
    });
    \u0275\u0275text(5, "Tout marquer lu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 128);
    \u0275\u0275template(7, MedecinComponent_div_84_div_7_Template, 9, 9, "div", 129)(8, MedecinComponent_div_84_div_8_Template, 3, 0, "div", 130);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.notifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.notifications.length === 0);
  }
}
function MedecinComponent_ng_container_89_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 157);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_tr_60_Template_tr_click_0_listener() {
      const p_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDossier(p_r23));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 169)(3, "div", 170);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 171);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "button", 172);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_tr_60_Template_button_click_20_listener($event) {
      const p_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openDossier(p_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "span", 18);
    \u0275\u0275text(22, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r23 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r23.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r23.nom, " ", p_r23.prenom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", p_r23.genre === "H" ? "H" : "F", " \xB7 ", p_r23.age, " ans \xB7 ", p_r23.pathologie, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r23.prochaine);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("mono ", p_r23.creatinineClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r23.creatinine);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", p_r23.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r23.statut);
  }
}
function MedecinComponent_ng_container_89_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 173)(2, "span", 18);
    \u0275\u0275text(3, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun patient ");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_ng_container_89_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.unreadCount, " non lues");
  }
}
function MedecinComponent_ng_container_89_div_73_b_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r24.patient.nom, " ", a_r24.patient.prenom, "");
  }
}
function MedecinComponent_ng_container_89_div_73_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_div_73_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const a_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.marquerAlerteLue(a_r24));
    });
    \u0275\u0275text(1, "Lu");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_89_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 175)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, MedecinComponent_ng_container_89_div_73_b_4_Template, 2, 2, "b", 41);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, MedecinComponent_ng_container_89_div_73_button_7_Template, 2, 0, "button", 176);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", a_r24.type === "CRITIQUE" ? "emergency" : "warning_amber", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", a_r24.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r24.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r24.lue);
  }
}
function MedecinComponent_ng_container_89_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "span", 18);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune alerte ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_89_div_82_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180)(1, "div", 181);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 182);
    \u0275\u0275elementStart(4, "div", 183)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r26 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("done", s_r26.statut === "TERMINEE")("active", s_r26.statut === "EN_COURS");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.seanceHeure(s_r26));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.seancePatientNom(s_r26));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("H\xE9modialyse ", s_r26.dureeHeures, "h \xB7 ", s_r26.machine, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.seanceStatutClass(s_r26.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.seanceStatutLabel(s_r26.statut), " ");
  }
}
function MedecinComponent_ng_container_89_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275template(1, MedecinComponent_ng_container_89_div_82_div_1_Template, 11, 12, "div", 179);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.todaySeances);
  }
}
function MedecinComponent_ng_container_89_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "span", 18);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune s\xE9ance aujourd'hui ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_89_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 184)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 185);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_div_93_Template_button_click_8_listener() {
      const o_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openOrdonnanceDetail(o_r28));
    });
    \u0275\u0275text(9, "Voir");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r28 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", o_r28.statut === "EN_ATTENTE" ? "var(--c-amber)" : "var(--c-green)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r28.statut === "EN_ATTENTE" ? "edit_note" : "check_circle", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r28.medicaments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.ordPatientNomComplet(o_r28), " \u2014 ", ctx_r2.formatOrdDate(o_r28.dateEmission), "");
  }
}
function MedecinComponent_ng_container_89_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "span", 18);
    \u0275\u0275text(2, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune ordonnance ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 137)(2, "div", 138);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("patients"));
    });
    \u0275\u0275elementStart(3, "div", 139)(4, "span", 75);
    \u0275\u0275text(5, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 140)(7, "span", 141);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 142);
    \u0275\u0275text(10, "Patients actifs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 138);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("planning"));
    });
    \u0275\u0275elementStart(12, "div", 143)(13, "span", 144);
    \u0275\u0275text(14, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 140)(16, "span", 141);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 142);
    \u0275\u0275text(19, "S\xE9ances aujourd'hui");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 138);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_Template_div_click_20_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("ordonnances"));
    });
    \u0275\u0275elementStart(21, "div", 145)(22, "span", 146);
    \u0275\u0275text(23, "edit_note");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 140)(25, "span", 141);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 142);
    \u0275\u0275text(28, "Ordonnances en attente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 138);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_Template_div_click_29_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("alertes"));
    });
    \u0275\u0275elementStart(30, "div", 147)(31, "span", 148);
    \u0275\u0275text(32, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 140)(34, "span", 141);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 142);
    \u0275\u0275text(37, "Alertes non lues");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 149)(39, "div", 150)(40, "div", 151)(41, "h2");
    \u0275\u0275text(42, "Patients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 152)(44, "span", 18);
    \u0275\u0275text(45, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_89_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "table", 154)(48, "thead")(49, "tr")(50, "th");
    \u0275\u0275text(51, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "Prochaine S\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "Cr\xE9atinine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "tbody");
    \u0275\u0275template(60, MedecinComponent_ng_container_89_tr_60_Template, 23, 15, "tr", 155)(61, MedecinComponent_ng_container_89_tr_61_Template, 5, 0, "tr", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 156);
    \u0275\u0275text(63);
    \u0275\u0275elementStart(64, "a", 157);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_Template_a_click_64_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("patients"));
    });
    \u0275\u0275text(65, "Voir tous");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 158)(67, "div", 159)(68, "div", 151)(69, "h2");
    \u0275\u0275text(70, "Alertes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, MedecinComponent_ng_container_89_span_71_Template, 2, 1, "span", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 161);
    \u0275\u0275template(73, MedecinComponent_ng_container_89_div_73_Template, 8, 4, "div", 162);
    \u0275\u0275pipe(74, "slice");
    \u0275\u0275template(75, MedecinComponent_ng_container_89_div_75_Template, 4, 0, "div", 163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 164)(77, "div", 151)(78, "h2");
    \u0275\u0275text(79, "S\xE9ances du Jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 32);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(82, MedecinComponent_ng_container_89_div_82_Template, 2, 1, "div", 165)(83, MedecinComponent_ng_container_89_div_83_Template, 4, 0, "div", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 166)(85, "div", 151)(86, "h2");
    \u0275\u0275text(87, "Ordonnances en Attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 105);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNouvelleOrdonnance());
    });
    \u0275\u0275elementStart(89, "span", 18);
    \u0275\u0275text(90, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, " Nouvelle ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 167);
    \u0275\u0275template(93, MedecinComponent_ng_container_89_div_93_Template, 10, 6, "div", 168);
    \u0275\u0275pipe(94, "slice");
    \u0275\u0275template(95, MedecinComponent_ng_container_89_div_95_Template, 4, 0, "div", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 156)(97, "a", 157);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_89_Template_a_click_97_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("ordonnances"));
    });
    \u0275\u0275text(98, "Voir toutes \u2192");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.allPatients.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.todaySeances.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.activeOrdCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.unreadCount);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.filteredPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredPatients.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.filteredPatients.length, " / ", ctx_r2.allPatients.length, " \xB7 ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(74, 17, ctx_r2.rawAlertes, 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.rawAlertes.length === 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.today);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.todaySeances.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.todaySeances.length === 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(94, 21, ctx_r2.ordonnances, 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.ordonnances.length === 0);
  }
}
function MedecinComponent_ng_container_90_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 157);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_90_tr_43_Template_tr_click_0_listener() {
      const p_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDossier(p_r31));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 169)(3, "div", 170);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 171);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 194);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span", 171);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span", 171);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "div", 195)(32, "button", 172);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_90_tr_43_Template_button_click_32_listener($event) {
      const p_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openDossier(p_r31, "info");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(33, "span", 18);
    \u0275\u0275text(34, "folder_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 172);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_90_tr_43_Template_button_click_35_listener($event) {
      const p_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openNouvelleOrdonnance(p_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(36, "span", 18);
    \u0275\u0275text(37, "edit_note");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const p_r31 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r31.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r31.nom, " ", p_r31.prenom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r31.telephone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r31.cin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r31.age, " ans \xB7 ", p_r31.genre === "H" ? "Homme" : "Femme", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r31.pathologie);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("mono ", p_r31.creatinineClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r31.creatinine);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_11_0 = p_r31.dossierPatient == null ? null : p_r31.dossierPatient.tensionArterielle) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r31.prochaine);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", p_r31.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r31.statut);
  }
}
function MedecinComponent_ng_container_90_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 196)(2, "span", 18);
    \u0275\u0275text(3, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun patient ");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 186)(2, "div", 187)(3, "div", 152)(4, "span", 18);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 188);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_90_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 189);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_90_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterPathologie, $event) || (ctx_r2.filterPathologie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 96);
    \u0275\u0275text(9, "Toutes pathologies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 190);
    \u0275\u0275text(11, "IRC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 191);
    \u0275\u0275text(13, "DRC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 192);
    \u0275\u0275text(15, "SN");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_90_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadAll());
    });
    \u0275\u0275elementStart(17, "span", 18);
    \u0275\u0275text(18, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Actualiser ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 193)(21, "table", 154)(22, "thead")(23, "tr")(24, "th");
    \u0275\u0275text(25, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "\xC2ge / Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Pathologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Cr\xE9atinine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Tension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Prochaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275template(43, MedecinComponent_ng_container_90_tr_43_Template, 38, 18, "tr", 155)(44, MedecinComponent_ng_container_90_tr_44_Template, 5, 0, "tr", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 156);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterPathologie);
    \u0275\u0275advance(36);
    \u0275\u0275property("ngForOf", ctx_r2.filteredPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredPatients.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.filteredPatients.length, " / ", ctx_r2.allPatients.length, " patients");
  }
}
function MedecinComponent_ng_container_91_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 210)(2, "div", 211)(3, "div", 151)(4, "h2")(5, "span", 18);
    \u0275\u0275text(6, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Identit\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 212)(9, "div", 213)(10, "span");
    \u0275\u0275text(11, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 213)(15, "span");
    \u0275\u0275text(16, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "b");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 213)(20, "span");
    \u0275\u0275text(21, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "b", 171);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 213)(25, "span");
    \u0275\u0275text(26, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "b");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 213)(30, "span");
    \u0275\u0275text(31, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "b");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 213)(35, "span");
    \u0275\u0275text(36, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "b");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 213)(40, "span");
    \u0275\u0275text(41, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "b", 214);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 211)(45, "div", 151)(46, "h2")(47, "span", 18);
    \u0275\u0275text(48, "medical_information");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " M\xE9dical");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 212)(51, "div", 213)(52, "span");
    \u0275\u0275text(53, "Pathologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "b")(55, "span", 194);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 213)(58, "span");
    \u0275\u0275text(59, "D\xE9but dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "b");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 213)(63, "span");
    \u0275\u0275text(64, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "b");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 213)(68, "span");
    \u0275\u0275text(69, "Taille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "b");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 215)(73, "div", 151)(74, "h2")(75, "span", 18);
    \u0275\u0275text(76, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " Constantes Vitales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 216)(79, "div", 217)(80, "span", 218);
    \u0275\u0275text(81, "Tension art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 219);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 220);
    \u0275\u0275text(85, "Cible : < 140/90");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 217)(87, "span", 218);
    \u0275\u0275text(88, "Temp\xE9rature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 219);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 220);
    \u0275\u0275text(92, "36.1 \u2013 37.2 \xB0C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 217)(94, "span", 218);
    \u0275\u0275text(95, "Glyc\xE9mie capillaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 219);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 220);
    \u0275\u0275text(99, "3.9 \u2013 5.5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 217)(101, "span", 218);
    \u0275\u0275text(102, "Saturation SpO\u2082");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 219);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 220);
    \u0275\u0275text(106, "\u2265 95 %");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 217)(108, "span", 218);
    \u0275\u0275text(109, "Fr\xE9quence cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 219);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 220);
    \u0275\u0275text(113, "60 \u2013 100 bpm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 217)(115, "span", 218);
    \u0275\u0275text(116, "Fr\xE9quence respiratoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span", 219);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span", 220);
    \u0275\u0275text(120, "12 \u2013 20 /min");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(121, "div", 215)(122, "div", 151)(123, "h2")(124, "span", 18);
    \u0275\u0275text(125, "history_edu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, " Ant\xE9c\xE9dents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 221);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 215)(130, "div", 151)(131, "h2")(132, "span", 18);
    \u0275\u0275text(133, "science");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, " R\xE9sultats Biologiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 216)(136, "div", 217)(137, "span", 218);
    \u0275\u0275text(138, "Cr\xE9atinine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "span", 219);
    \u0275\u0275text(140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "span", 220);
    \u0275\u0275text(142, "0.7 \u2013 1.2 mg/dL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 217)(144, "span", 218);
    \u0275\u0275text(145, "Ur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "span", 219);
    \u0275\u0275text(147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "span", 220);
    \u0275\u0275text(149, "2.5 \u2013 7.5 mmol/L");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 217)(151, "span", 218);
    \u0275\u0275text(152, "H\xE9moglobine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "span", 219);
    \u0275\u0275text(154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span", 220);
    \u0275\u0275text(156, "12 \u2013 16 g/dL");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedPatient.nom, " ", ctx_r2.selectedPatient.prenom, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.dateNaissance);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r2.selectedPatient.cin) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.genre === "H" ? "Homme" : "Femme");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r2.selectedPatient.telephone) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.selectedPatient.adresse) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.groupeSanguin);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.pathologie) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.debutDialyse);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.poids) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.taille) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((tmp_13_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.tensionArterielle) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", (tmp_14_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.temperature) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014", " \xB0C");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", (tmp_15_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.glycemieCapillaire) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "\u2014", " mmol/L");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", (tmp_16_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.saturation) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "\u2014", " %");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", (tmp_17_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.frequenceCardiaque) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : "\u2014", " bpm");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", (tmp_18_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.frequenceRespiratoire) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "\u2014", " /min");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.antecedents) || "\u2014", " ");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("bio-item--crit", ctx_r2.selectedPatient.creatinineClass === "crit-val")("bio-item--warn", ctx_r2.selectedPatient.creatinineClass === "warn-val");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.creatinine);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.uree);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.hemoglobine);
  }
}
function MedecinComponent_ng_container_91_div_63_div_5_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 232);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r33.notes);
  }
}
function MedecinComponent_ng_container_91_div_63_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 225)(1, "div")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "div", 226);
    \u0275\u0275elementStart(5, "div", 227)(6, "div", 228)(7, "span", 229);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 230);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MedecinComponent_ng_container_91_div_63_div_5_div_1_p_13_Template, 2, 1, "p", 231);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r33 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("histo-icon histo-icon--", h_r33.typeClass, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r33.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(h_r33.date);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("histo-type histo-type--", h_r33.typeClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.histoLabel(h_r33.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r33.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", h_r33.notes);
  }
}
function MedecinComponent_ng_container_91_div_63_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223);
    \u0275\u0275template(1, MedecinComponent_ng_container_91_div_63_div_5_div_1_Template, 14, 11, "div", 224);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedPatient.historique);
  }
}
function MedecinComponent_ng_container_91_div_63_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "span", 18);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun historique ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_91_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 193)(2, "div", 151)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, MedecinComponent_ng_container_91_div_63_div_5_Template, 2, 1, "div", 222)(6, MedecinComponent_ng_container_91_div_63_div_6_Template, 4, 0, "div", 163);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Historique \u2014 ", ctx_r2.selectedPatient.nom, " ", ctx_r2.selectedPatient.prenom, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient.historique.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient.historique.length === 0);
  }
}
function MedecinComponent_ng_container_91_div_64_div_8_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "span", 18);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(o_r36.posologie);
  }
}
function MedecinComponent_ng_container_91_div_64_div_8_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248)(1, "span", 18);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", o_r36.instructions, " ");
  }
}
function MedecinComponent_ng_container_91_div_64_div_8_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "span", 18);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5, "Prescripteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", o_r36.utilisateur.nom, " ", o_r36.utilisateur.prenom, "");
  }
}
function MedecinComponent_ng_container_91_div_64_div_8_div_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_div_64_div_8_div_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const o_r36 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.annulerOrdonnance(o_r36));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_91_div_64_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 239)(1, "div", 240)(2, "div")(3, "span", 241);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 242);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 243)(10, "span", 18);
    \u0275\u0275text(11, "medication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "b");
    \u0275\u0275text(14, "M\xE9dicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, MedecinComponent_ng_container_91_div_64_div_8_div_1_div_17_Template, 8, 1, "div", 244)(18, MedecinComponent_ng_container_91_div_64_div_8_div_1_div_18_Template, 4, 1, "div", 245)(19, MedecinComponent_ng_container_91_div_64_div_8_div_1_div_19_Template, 8, 2, "div", 244);
    \u0275\u0275elementStart(20, "div", 246);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 247)(23, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_div_64_div_8_div_1_Template_button_click_23_listener() {
      const o_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openOrdonnanceDetail(o_r36));
    });
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Voir ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, MedecinComponent_ng_container_91_div_64_div_8_div_1_button_27_Template, 4, 0, "button", 118);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r36 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ordonnance N\xB0", o_r36.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatOrdDate(o_r36.dateEmission));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.ordStatutClass(o_r36.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.ordStatutLabel(o_r36.statut));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(o_r36.medicaments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r36.posologie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r36.instructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r36.utilisateur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Expiration : ", ctx_r2.formatOrdDate(o_r36.dateExpiration), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", o_r36.statut === "EN_ATTENTE");
  }
}
function MedecinComponent_ng_container_91_div_64_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237);
    \u0275\u0275template(1, MedecinComponent_ng_container_91_div_64_div_8_div_1_Template, 28, 12, "div", 238);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.ordonnancesForSelectedPatient);
  }
}
function MedecinComponent_ng_container_91_div_64_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 249)(1, "span", 18);
    \u0275\u0275text(2, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune ordonnance ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_91_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 233)(2, "span", 234);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 105);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_div_64_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNouvelleOrdonnance(ctx_r2.selectedPatient));
    });
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Nouvelle ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MedecinComponent_ng_container_91_div_64_div_8_Template, 2, 1, "div", 235)(9, MedecinComponent_ng_container_91_div_64_div_9_Template, 4, 0, "div", 236);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ordonnancesForSelectedPatient.length, " ordonnance(s) ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.ordonnancesForSelectedPatient.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ordonnancesForSelectedPatient.length === 0);
  }
}
function MedecinComponent_ng_container_91_div_65_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 257);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 258);
    \u0275\u0275element(2, "circle", 259)(3, "circle", 260);
    \u0275\u0275elementStart(4, "text", 261);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "text", 262);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 263);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 264);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r38 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("stroke-dasharray", ctx_r2.gaugeTrack);
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke", g_r38.color)("stroke-dasharray", ctx_r2.gaugeArc(g_r38.pct));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r38.valueStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r38.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r38.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r38.refLabel);
  }
}
function MedecinComponent_ng_container_91_div_65_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 267)(1, "span", 268);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 269);
    \u0275\u0275element(4, "div", 270)(5, "span", 271);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r39 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r39.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r39.value / b_r39.max * 100, "%")("background", b_r39.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", (b_r39.label.startsWith("Sys") ? 140 : 90) / b_r39.max * 100, "%");
  }
}
function MedecinComponent_ng_container_91_div_65_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "span", 18);
    \u0275\u0275text(3, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Tension Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 265);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 255);
    \u0275\u0275template(9, MedecinComponent_ng_container_91_div_65_div_9_div_9_Template, 6, 7, "div", 256);
    \u0275\u0275elementStart(10, "div", 266);
    \u0275\u0275text(11, "Cible : < 140 / 90 mmHg");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.tensionArterielle) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014", " mmHg ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.tensionBars);
  }
}
function MedecinComponent_ng_container_91_div_65_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 267)(1, "span", 268);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 269);
    \u0275\u0275element(4, "div", 270);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 272)(6, "span", 171);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 273);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r40 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r40.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r40.pct * 100, "%")("background", b_r40.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", b_r40.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r40.valueStr, " ", b_r40.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("R\xE9f : ", b_r40.refLabel, "");
  }
}
function MedecinComponent_ng_container_91_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 250)(2, "div", 251)(3, "span", 18);
    \u0275\u0275text(4, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Constantes Vitales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 252);
    \u0275\u0275template(8, MedecinComponent_ng_container_91_div_65_div_8_Template, 12, 7, "div", 253);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, MedecinComponent_ng_container_91_div_65_div_9_Template, 12, 2, "div", 254);
    \u0275\u0275elementStart(10, "div", 250)(11, "div", 251)(12, "span", 18);
    \u0275\u0275text(13, "science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15, "R\xE9sultats Biologiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 255);
    \u0275\u0275template(17, MedecinComponent_ng_container_91_div_65_div_17_Template, 10, 10, "div", 256);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.vitalGauges);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient && (ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.tensionArterielle));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.bioBarData);
  }
}
function MedecinComponent_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 197)(2, "div", 198);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 199)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 200)(10, "div", 201)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 202);
    \u0275\u0275text(14, "Cr\xE9atinine");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 201)(16, "span", 203);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 202);
    \u0275\u0275text(19, "Ur\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 201)(21, "span", 203);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 202);
    \u0275\u0275text(24, "H\xE9moglobine");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 201)(26, "span", 203);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 202);
    \u0275\u0275text(29, "Tension");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 204)(33, "button", 105);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNouvelleOrdonnance(ctx_r2.selectedPatient));
    });
    \u0275\u0275elementStart(34, "span", 18);
    \u0275\u0275text(35, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Ordonnance ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.backToPatients());
    });
    \u0275\u0275elementStart(38, "span", 18);
    \u0275\u0275text(39, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Retour ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 205)(42, "button", 206);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dossierTab = "info");
    });
    \u0275\u0275elementStart(43, "span", 18);
    \u0275\u0275text(44, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Informations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 206);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dossierTab = "historique");
    });
    \u0275\u0275elementStart(47, "span", 18);
    \u0275\u0275text(48, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " Historique ");
    \u0275\u0275elementStart(50, "span", 207);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "button", 206);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dossierTab = "ordonnances");
    });
    \u0275\u0275elementStart(53, "span", 18);
    \u0275\u0275text(54, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Ordonnances ");
    \u0275\u0275elementStart(56, "span", 207);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "button", 206);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_91_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dossierTab = "graphiques");
    });
    \u0275\u0275elementStart(59, "span", 18);
    \u0275\u0275text(60, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Graphiques ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, MedecinComponent_ng_container_91_div_62_Template, 157, 26, "div", 208)(63, MedecinComponent_ng_container_91_div_63_Template, 7, 4, "div", 208)(64, MedecinComponent_ng_container_91_div_64_Template, 10, 3, "div", 208)(65, MedecinComponent_ng_container_91_div_65_Template, 18, 3, "div", 208);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedPatient.nom, " ", ctx_r2.selectedPatient.prenom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", ctx_r2.selectedPatient.genre === "H" ? "Homme" : "Femme", " \xB7 ", ctx_r2.selectedPatient.age, " ans \xB7 ", ctx_r2.selectedPatient.pathologie, " \xB7 Dialyse depuis ", ctx_r2.selectedPatient.debutDialyse, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("dossier-kpi__val mono ", ctx_r2.selectedPatient.creatinineClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedPatient.creatinine, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.uree);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.hemoglobine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_8_0 = ctx_r2.selectedPatient.dossierPatient == null ? null : ctx_r2.selectedPatient.dossierPatient.tensionArterielle) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.selectedPatient.statutClass, " badge--lg");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.statut);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("active", ctx_r2.dossierTab === "info");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.dossierTab === "historique");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.historique.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.dossierTab === "ordonnances");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.ordonnancesForSelectedPatient.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.dossierTab === "graphiques");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.dossierTab === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dossierTab === "historique");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dossierTab === "ordonnances");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dossierTab === "graphiques");
  }
}
function MedecinComponent_ng_container_92_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r42 = ctx.$implicit;
    \u0275\u0275property("value", p_r42.nom + " " + p_r42.prenom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r42.nom, " ", p_r42.prenom, " ");
  }
}
function MedecinComponent_ng_container_92_div_40_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "span", 18);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(o_r44.posologie);
  }
}
function MedecinComponent_ng_container_92_div_40_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248)(1, "span", 18);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", o_r44.instructions, " ");
  }
}
function MedecinComponent_ng_container_92_div_40_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "span", 18);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5, "Prescripteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3("", o_r44.utilisateur.nom, " ", o_r44.utilisateur.prenom, " \xB7 Mat. ", o_r44.utilisateur.mat, "");
  }
}
function MedecinComponent_ng_container_92_div_40_div_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_92_div_40_div_1_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r45);
      const o_r44 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.annulerOrdonnance(o_r44));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_92_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 239)(1, "div", 240)(2, "div", 283)(3, "div", 170);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 241);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 284);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 285)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 286);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 243)(16, "span", 18);
    \u0275\u0275text(17, "medication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "b");
    \u0275\u0275text(20, "M\xE9dicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, MedecinComponent_ng_container_92_div_40_div_1_div_23_Template, 8, 1, "div", 244)(24, MedecinComponent_ng_container_92_div_40_div_1_div_24_Template, 4, 1, "div", 245)(25, MedecinComponent_ng_container_92_div_40_div_1_div_25_Template, 8, 3, "div", 244);
    \u0275\u0275elementStart(26, "div", 246);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 247)(29, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_92_div_40_div_1_Template_button_click_29_listener() {
      const o_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openOrdonnanceDetail(o_r44));
    });
    \u0275\u0275elementStart(30, "span", 18);
    \u0275\u0275text(31, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " D\xE9tail ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, MedecinComponent_ng_container_92_div_40_div_1_button_33_Template, 4, 0, "button", 118);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r44 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.ordPatientInit(o_r44));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Ordonnance N\xB0", o_r44.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.ordPatientNomComplet(o_r44));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.ordStatutClass(o_r44.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.ordStatutLabel(o_r44.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatOrdDate(o_r44.dateEmission), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(o_r44.medicaments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r44.posologie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r44.instructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r44.utilisateur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Expiration : ", ctx_r2.formatOrdDate(o_r44.dateExpiration), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", o_r44.statut === "EN_ATTENTE");
  }
}
function MedecinComponent_ng_container_92_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237);
    \u0275\u0275template(1, MedecinComponent_ng_container_92_div_40_div_1_Template, 34, 14, "div", 238);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredOrdonnances);
  }
}
function MedecinComponent_ng_container_92_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 249)(1, "span", 18);
    \u0275\u0275text(2, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune ordonnance ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 186)(2, "div", 187)(3, "div", 152)(4, "span", 18);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 274);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_92_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchOrdonnances, $event) || (ctx_r2.searchOrdonnances = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 189);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_92_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterOrdPatient, $event) || (ctx_r2.filterOrdPatient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 96);
    \u0275\u0275text(9, "Tous les patients");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MedecinComponent_ng_container_92_option_10_Template, 2, 3, "option", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 189);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_92_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterOrdStatut, $event) || (ctx_r2.filterOrdStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 96);
    \u0275\u0275text(13, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 275);
    \u0275\u0275text(15, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 276);
    \u0275\u0275text(17, "Valid\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 277);
    \u0275\u0275text(19, "Annul\xE9e");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 105);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_92_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNouvelleOrdonnance());
    });
    \u0275\u0275elementStart(21, "span", 18);
    \u0275\u0275text(22, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Nouvelle ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 278)(25, "div", 279)(26, "span", 280);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 281)(31, "span", 280);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "En attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 282)(36, "span", 280);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Cl\xF4tur\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(40, MedecinComponent_ng_container_92_div_40_Template, 2, 1, "div", 235)(41, MedecinComponent_ng_container_92_div_41_Template, 4, 0, "div", 236);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchOrdonnances);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterOrdPatient);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.allPatients);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterOrdStatut);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r2.ordonnances.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.activeOrdCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.ordonnances.length - ctx_r2.activeOrdCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.filteredOrdonnances.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredOrdonnances.length === 0);
  }
}
function MedecinComponent_ng_container_93_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.unreadCount, " non lues");
  }
}
function MedecinComponent_ng_container_93_div_12_b_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", a_r48.patient.nom, " ", a_r48.patient.prenom, " \u2014 ", a_r48.message, "");
  }
}
function MedecinComponent_ng_container_93_div_12_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_93_div_12_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      const a_r48 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.marquerAlerteLue(a_r48));
    });
    \u0275\u0275text(1, " Marquer lu ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_93_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 291)(1, "span", 292);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, MedecinComponent_ng_container_93_div_12_b_4_Template, 2, 3, "b", 41);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 293)(9, "button", 105);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_93_div_12_Template_button_click_9_listener() {
      const a_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.voirPatientAlerte(a_r48));
    });
    \u0275\u0275text(10, "Dossier");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MedecinComponent_ng_container_93_div_12_button_11_Template, 2, 0, "button", 176);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r48 = ctx.$implicit;
    \u0275\u0275styleProp("opacity", a_r48.lue ? 0.5 : 1);
    \u0275\u0275classProp("alert-item--crit", a_r48.type === "CRITIQUE")("alert-item--warn", a_r48.type === "ATTENTION");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", a_r48.type === "CRITIQUE" ? "emergency" : "warning_amber", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", a_r48.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r48.type, " \xB7 ", \u0275\u0275pipeBind2(7, 11, a_r48.dateCreation, "dd/MM/yyyy HH:mm"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !a_r48.lue);
  }
}
function MedecinComponent_ng_container_93_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "span", 18);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune alerte ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 287)(2, "div", 151)(3, "h2");
    \u0275\u0275text(4, "Alertes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 288);
    \u0275\u0275template(6, MedecinComponent_ng_container_93_span_6_Template, 2, 1, "span", 160);
    \u0275\u0275elementStart(7, "button", 106);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_93_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.marquerToutesAlertesLues());
    });
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Tout marquer lu ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 289);
    \u0275\u0275template(12, MedecinComponent_ng_container_93_div_12_Template, 12, 14, "div", 290)(13, MedecinComponent_ng_container_93_div_13_Template, 4, 0, "div", 163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.unreadCount > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.rawAlertes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.rawAlertes.length === 0);
  }
}
var MedecinComponent = class _MedecinComponent {
  router;
  patientSvc;
  ordonnanceSvc;
  seanceSvc;
  dossierSvc;
  alerteSvc;
  authSvc;
  constructor(router, patientSvc, ordonnanceSvc, seanceSvc, dossierSvc, alerteSvc, authSvc) {
    this.router = router;
    this.patientSvc = patientSvc;
    this.ordonnanceSvc = ordonnanceSvc;
    this.seanceSvc = seanceSvc;
    this.dossierSvc = dossierSvc;
    this.alerteSvc = alerteSvc;
    this.authSvc = authSvc;
  }
  // ── Sidebar mobile ────────────────────────────────────────────────────────
  sidebarOpen = false;
  // ── État global ────────────────────────────────────────────────────────────
  isLoading = true;
  get today() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR");
  }
  // ── Navigation ─────────────────────────────────────────────────────────────
  activeSection = "dashboard";
  dossierTab = "info";
  get sectionTitle() {
    const map = {
      dashboard: "Tableau de Bord",
      patients: "Mes Patients",
      dossier: this.selectedPatient ? `Dossier \u2014 ${this.selectedPatient.nomComplet}` : "Dossier Patient",
      ordonnances: "Ordonnances",
      alertes: "Alertes Critiques"
    };
    return map[this.activeSection] ?? "Tableau de Bord";
  }
  setSection(section) {
    if (section === "planning") {
      this.router.navigate(["/planning"]);
      return;
    }
    this.activeSection = section;
    this.showNotifPanel = false;
  }
  // ── Données brutes (typage DTO strict) ─────────────────────────────────────
  allPatients = [];
  ordonnances = [];
  todaySeances = [];
  rawAlertes = [];
  // ── Initialisation ─────────────────────────────────────────────────────────
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.isLoading = true;
    const currentUser = this.authSvc.getUtilisateur();
    const login = currentUser?.login ?? "";
    forkJoin({
      patients: this.patientSvc.getAll(),
      seances: this.seanceSvc.getToday()
    }).subscribe({
      next: ({ patients, seances }) => {
        this.allPatients = patients.map((p) => this.buildPatientVM(p));
        this.todaySeances = seances;
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Erreur chargement primaire", err);
        this.showToast("Erreur de connexion au serveur", "error");
        this.isLoading = false;
      }
    });
    forkJoin({
      ordonnances: this.ordonnanceSvc.getAll(),
      alertes: this.alerteSvc.getMesAlertes(login)
    }).subscribe({
      next: ({ ordonnances, alertes }) => {
        this.ordonnances = ordonnances;
        this.rawAlertes = alertes;
        this.buildNotifications();
      },
      error: (err) => console.error("Erreur chargement secondaire", err)
    });
  }
  // ── Mapper PatientDto → PatientVM ──────────────────────────────────────────
  buildPatientVM(p) {
    const d = p.dossierPatient ?? null;
    const statutRaw = (p.statut ?? "STABLE").toUpperCase();
    const statutClass = statutRaw === "CRITIQUE" ? "crit" : statutRaw === "ATTENTION" ? "warn" : "ok";
    return __spreadProps(__spreadValues({}, p), {
      // ── Champs calculés UI ───────────────────────────────────────────────
      nomComplet: `${p.nom} ${p.prenom}`,
      initials: `${p.nom?.[0] ?? ""}${p.prenom?.[0] ?? ""}`.toUpperCase(),
      age: this.calcAge(p.dateNaissance),
      statut: statutRaw === "CRITIQUE" ? "Critique" : statutRaw === "ATTENTION" ? "Attention" : "Stable",
      statutClass,
      // ── Champs issus du DossierPatientDto ────────────────────────────────
      creatinine: d?.creatinine ?? "\u2014",
      creatinineClass: d?.creatinineClass ?? "",
      uree: d?.uree ?? "\u2014",
      hemoglobine: d?.hemoglobine ?? "\u2014",
      pathologie: d?.pathologie ?? "\u2014",
      prochaine: d?.prochaine ? formatDateFr(d.prochaine) : "\u2014",
      poids: d?.poids ?? "\u2014",
      taille: d?.taille ?? "\u2014",
      debutDialyse: d?.debutDialyse ? formatDateFr(d.debutDialyse) : "\u2014",
      historique: []
    });
  }
  // ── Filtres patients ───────────────────────────────────────────────────────
  searchQuery = "";
  filterPathologie = "";
  get filteredPatients() {
    const q = this.searchQuery.trim().toLowerCase();
    return this.allPatients.filter((p) => (!this.filterPathologie || p.pathologie === this.filterPathologie) && (!q || p.nomComplet.toLowerCase().includes(q) || (p.cin ?? "").toLowerCase().includes(q) || p.pathologie.toLowerCase().includes(q)));
  }
  // ── KPIs ───────────────────────────────────────────────────────────────────
  get activeOrdCount() {
    return this.ordonnances.filter((o) => o.statut === "EN_ATTENTE").length;
  }
  get criticalPatients() {
    return this.allPatients.filter((p) => p.statutClass === "crit");
  }
  // ── Dossier patient ────────────────────────────────────────────────────────
  selectedPatient = null;
  openDossier(p, tab = "info") {
    this.selectedPatient = p;
    this.dossierTab = tab;
    this.activeSection = "dossier";
    this.showNotifPanel = false;
    this.loadPatientHistorique(p.id);
  }
  loadPatientHistorique(patientId) {
    this.seanceSvc.getByPatient(patientId).subscribe({
      next: (seances) => {
        if (!this.selectedPatient)
          return;
        this.selectedPatient.historique = seances.map((s) => ({
          date: s.date ? formatDateFr(s.date) : "\u2014",
          type: "seance",
          description: `S\xE9ance h\xE9modialyse ${s.dureeHeures}h \u2014 Machine ${s.machine ?? "\u2014"}`,
          notes: s.notes ?? "RAS",
          icon: "water_drop",
          typeClass: "seance"
        }));
      },
      error: () => {
      }
    });
  }
  backToPatients() {
    this.selectedPatient = null;
    this.activeSection = "patients";
  }
  // ── Ordonnances — filtres ──────────────────────────────────────────────────
  searchOrdonnances = "";
  filterOrdStatut = "";
  filterOrdPatient = "";
  get filteredOrdonnances() {
    const q = this.searchOrdonnances.trim().toLowerCase();
    return this.ordonnances.filter((o) => (!this.filterOrdStatut || o.statut === this.filterOrdStatut) && (!this.filterOrdPatient || this.ordPatientNomComplet(o) === this.filterOrdPatient) && (!q || this.ordPatientNomComplet(o).toLowerCase().includes(q) || o.medicaments.toLowerCase().includes(q)));
  }
  get ordonnancesForSelectedPatient() {
    if (!this.selectedPatient)
      return [];
    return this.ordonnances.filter((o) => o.patient?.id === this.selectedPatient.id);
  }
  // ── Helpers affichage OrdonnanceDto ───────────────────────────────────────
  /** Initiales depuis PatientSummaryDto embarqué dans OrdonnanceDto */
  ordPatientInit(o) {
    const p = o.patient;
    return `${p?.nom?.[0] ?? ""}${p?.prenom?.[0] ?? ""}`.toUpperCase();
  }
  /** Nom complet depuis PatientSummaryDto embarqué dans OrdonnanceDto */
  ordPatientNomComplet(o) {
    return o.patient ? `${o.patient.nom} ${o.patient.prenom}` : "\u2014";
  }
  ordStatutLabel(statut) {
    const map = {
      EN_ATTENTE: "En attente",
      VALIDEE: "Valid\xE9e",
      ANNULEE: "Annul\xE9e"
    };
    return map[statut] ?? statut;
  }
  ordStatutClass(statut) {
    const map = {
      EN_ATTENTE: "warn",
      VALIDEE: "ok",
      ANNULEE: "danger"
    };
    return map[statut] ?? "";
  }
  formatOrdDate(d) {
    return d ? formatDateFr(d) : "\u2014";
  }
  // ── Détail ordonnance ──────────────────────────────────────────────────────
  selectedOrdonnance = null;
  showOrdonnanceDetail = false;
  openOrdonnanceDetail(o) {
    this.selectedOrdonnance = o;
    this.showOrdonnanceDetail = true;
  }
  annulerOrdonnance(o) {
    this.ordonnanceSvc.annuler(o.id).subscribe({
      next: (updated) => {
        const idx = this.ordonnances.findIndex((x) => x.id === o.id);
        if (idx !== -1)
          this.ordonnances[idx] = updated;
        if (this.selectedOrdonnance?.id === o.id) {
          this.selectedOrdonnance = updated;
        }
        this.showOrdonnanceDetail = false;
        this.showToast(`Ordonnance N\xB0${o.id} annul\xE9e`, "warning");
      },
      error: () => this.showToast("Erreur lors de l'annulation", "error")
    });
  }
  // ── Nouvelle ordonnance ────────────────────────────────────────────────────
  showNouvelleOrdonnanceModal = false;
  newOrd = {
    patientNomComplet: "",
    patientId: 0,
    medicaments: "",
    posologie: "",
    instructions: "",
    dateExpiration: ""
  };
  openNouvelleOrdonnance(patient) {
    this.newOrd = {
      patientNomComplet: patient ? `${patient.nom} ${patient.prenom}` : "",
      patientId: patient?.id ?? 0,
      medicaments: "",
      posologie: "",
      instructions: "",
      dateExpiration: ""
    };
    this.showNouvelleOrdonnanceModal = true;
  }
  /** Synchronise patientId quand l'utilisateur change le <select> */
  onOrdPatientChange() {
    const found = this.allPatients.find((p) => `${p.nom} ${p.prenom}` === this.newOrd.patientNomComplet);
    this.newOrd.patientId = found?.id ?? 0;
  }
  sauvegarderOrdonnance() {
    if (!this.newOrd.patientNomComplet.trim()) {
      this.showToast("S\xE9lectionnez un patient", "warning");
      return;
    }
    if (!this.newOrd.medicaments.trim()) {
      this.showToast("Saisissez les m\xE9dicaments", "warning");
      return;
    }
    const uid = this.authSvc.utilisateurId;
    if (!uid) {
      this.showToast("Utilisateur non authentifi\xE9", "error");
      return;
    }
    const payload = {
      patientId: this.newOrd.patientId,
      utilisateurId: uid,
      medicaments: this.newOrd.medicaments,
      posologie: this.newOrd.posologie,
      instructions: this.newOrd.instructions || null,
      dateEmission: todayIso(),
      dateExpiration: this.newOrd.dateExpiration || null,
      statut: "EN_ATTENTE"
    };
    this.ordonnanceSvc.create(payload).subscribe({
      next: (created) => {
        this.ordonnances.unshift(created);
        this.showNouvelleOrdonnanceModal = false;
        this.showToast(`Ordonnance cr\xE9\xE9e pour ${this.newOrd.patientNomComplet}`, "success");
      },
      error: () => this.showToast("Erreur lors de la cr\xE9ation", "error")
    });
  }
  // ── Alertes (AlerteDto) ────────────────────────────────────────────────────
  marquerAlerteLue(a) {
    this.alerteSvc.marquerLue(a.id).subscribe({
      next: (updated) => {
        const idx = this.rawAlertes.findIndex((x) => x.id === a.id);
        if (idx !== -1)
          this.rawAlertes[idx] = updated;
        this.buildNotifications();
      }
    });
  }
  marquerToutesAlertesLues() {
    this.alerteSvc.marquerToutesLues().subscribe({
      next: () => {
        this.rawAlertes = this.rawAlertes.map((a) => __spreadProps(__spreadValues({}, a), { lue: true }));
        this.buildNotifications();
        this.showToast("Toutes les alertes marqu\xE9es comme lues", "success");
      }
    });
  }
  voirPatientAlerte(a) {
    const p = this.allPatients.find((pm) => pm.id === a.patient?.id);
    if (p)
      this.openDossier(p);
    else
      this.showToast("Patient introuvable", "warning");
  }
  // ── Séances (SeanceDto) ────────────────────────────────────────────────────
  seanceStatutLabel(statut) {
    const map = {
      TERMINEE: "Termin\xE9",
      EN_COURS: "En cours",
      ANNULEE: "Annul\xE9e",
      PLANIFIEE: "Planifi\xE9e"
    };
    return map[statut] ?? statut;
  }
  seanceStatutClass(statut) {
    const map = {
      TERMINEE: "ok",
      EN_COURS: "info",
      ANNULEE: "danger",
      PLANIFIEE: "purple"
    };
    return map[statut] ?? "";
  }
  /** Nom complet depuis PatientSummaryDto embarqué dans SeanceDto */
  seancePatientNom(s) {
    return s.patient ? `${s.patient.nom} ${s.patient.prenom}` : "\u2014";
  }
  seanceHeure(s) {
    return s.heureDebut?.substring(0, 5) ?? "";
  }
  // ── Notifications ──────────────────────────────────────────────────────────
  showNotifPanel = false;
  notifications = [];
  buildNotifications() {
    this.notifications = this.rawAlertes.filter((a) => !a.lue).map((a) => ({
      icon: a.type === "CRITIQUE" ? "emergency" : a.type === "ATTENTION" ? "warning_amber" : "info",
      text: `${a.patient?.nom ?? ""} ${a.patient?.prenom ?? ""} \u2014 ${a.message}`,
      time: this.relativeTime(a.dateCreation),
      type: a.type === "CRITIQUE" ? "crit" : a.type === "ATTENTION" ? "warn" : "info",
      read: a.lue,
      alerteId: a.id
    }));
  }
  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
  toggleNotifPanel() {
    this.showNotifPanel = !this.showNotifPanel;
  }
  markAllRead() {
    this.marquerToutesAlertesLues();
  }
  markNotifRead(n) {
    n.read = true;
    this.alerteSvc.marquerLue(n.alerteId).subscribe();
    const a = this.rawAlertes.find((x) => x.id === n.alerteId);
    if (a)
      a.lue = true;
    this.buildNotifications();
  }
  // ── Historique label ───────────────────────────────────────────────────────
  histoLabel(type) {
    const map = {
      seance: "S\xE9ance",
      bilan: "Bilan",
      consultation: "Consultation",
      urgence: "Urgence"
    };
    return map[type] ?? type;
  }
  // ── Recherche globale ──────────────────────────────────────────────────────
  showSearchModal = false;
  globalSearchQuery = "";
  openSearch() {
    this.showSearchModal = true;
    this.globalSearchQuery = "";
  }
  closeSearch() {
    this.showSearchModal = false;
  }
  get globalResults() {
    const q = this.globalSearchQuery.trim().toLowerCase();
    if (!q)
      return { patients: [], ordonnances: [], alertes: [] };
    return {
      patients: this.allPatients.filter((p) => p.nomComplet.toLowerCase().includes(q) || (p.cin ?? "").toLowerCase().includes(q) || p.pathologie.toLowerCase().includes(q)).slice(0, 5),
      ordonnances: this.ordonnances.filter((o) => this.ordPatientNomComplet(o).toLowerCase().includes(q) || o.medicaments.toLowerCase().includes(q)).slice(0, 5),
      alertes: this.rawAlertes.filter((a) => a.message.toLowerCase().includes(q) || `${a.patient?.nom ?? ""} ${a.patient?.prenom ?? ""}`.toLowerCase().includes(q)).slice(0, 5)
    };
  }
  get globalResultsCount() {
    const r = this.globalResults;
    return r.patients.length + r.ordonnances.length + r.alertes.length;
  }
  searchGoToPatient(p) {
    this.closeSearch();
    this.openDossier(p);
  }
  searchGoToOrdonnance(o) {
    this.closeSearch();
    this.setSection("ordonnances");
    setTimeout(() => this.openOrdonnanceDetail(o), 50);
  }
  searchGoToAlerte(a) {
    this.closeSearch();
    this.setSection("alertes");
  }
  // ── Paramètres ─────────────────────────────────────────────────────────────
  showSettingsPanel = false;
  openSettings() {
    this.showSettingsPanel = true;
  }
  closeSettings() {
    this.showSettingsPanel = false;
  }
  get currentUser() {
    return this.authSvc.getUtilisateur();
  }
  logout() {
    this.authSvc.logout();
  }
  // ── Toasts ─────────────────────────────────────────────────────────────────
  toastIdCounter = 0;
  toasts = [];
  showToast(message, type = "info") {
    const id = ++this.toastIdCounter;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.removeToast(id), 3500);
  }
  removeToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
  toastIcon(type) {
    const map = {
      success: "check_circle",
      warning: "warning",
      error: "error",
      info: "info"
    };
    return map[type] ?? "info";
  }
  // ── Utilitaires privés ─────────────────────────────────────────────────────
  calcAge(dateNaissance) {
    if (!dateNaissance)
      return 0;
    const dob = new Date(dateNaissance);
    const today = /* @__PURE__ */ new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || m === 0 && today.getDate() < dob.getDate())
      age--;
    return age;
  }
  relativeTime(iso) {
    if (!iso)
      return "";
    const h = Math.floor((Date.now() - new Date(iso).getTime()) / 36e5);
    if (h < 1)
      return "il y a < 1h";
    if (h < 24)
      return `il y a ${h}h`;
    return `il y a ${Math.floor(h / 24)}j`;
  }
  // ── Graphiques ─────────────────────────────────────────────────────────────
  parseNum(s) {
    if (s === null || s === void 0 || s === "\u2014")
      return null;
    if (typeof s === "number")
      return s;
    const n = parseFloat(s.replace(",", "."));
    return isNaN(n) ? null : n;
  }
  numStr(v) {
    return v !== null && v !== void 0 ? String(v) : "\u2014";
  }
  norm(v, min, max) {
    if (v === null)
      return 0;
    return Math.min(1, Math.max(0, (v - min) / (max - min)));
  }
  metricColor(v, okRange, warnRange) {
    if (v === null)
      return "var(--c-text-3)";
    if (v >= okRange[0] && v <= okRange[1])
      return "var(--c-teal)";
    if (v >= warnRange[0] && v <= warnRange[1])
      return "var(--c-amber)";
    return "var(--c-red)";
  }
  // SVG gauge arc (270° sweep, r=38, cx=50, cy=54)
  gaugeArc(pct) {
    const r = 38, C = 2 * Math.PI * r, gaugeC = C * 0.75;
    return `${Math.min(1, Math.max(0, pct)) * gaugeC} ${C}`;
  }
  get gaugeTrack() {
    const r = 38, C = 2 * Math.PI * r, gaugeC = C * 0.75;
    return `${gaugeC} ${C - gaugeC}`;
  }
  get vitalGauges() {
    const d = this.selectedPatient?.dossierPatient;
    const sat = this.parseNum(d?.saturation);
    const temp = this.parseNum(d?.temperature);
    const fc = this.parseNum(d?.frequenceCardiaque);
    const fr = this.parseNum(d?.frequenceRespiratoire);
    const glyc = this.parseNum(d?.glycemieCapillaire);
    return [
      {
        label: "Saturation SpO\u2082",
        valueStr: this.numStr(d?.saturation),
        unit: "%",
        refLabel: "\u2265 95%",
        pct: this.norm(sat, 85, 100),
        color: this.metricColor(sat, [95, 100], [90, 94])
      },
      {
        label: "Temp\xE9rature",
        valueStr: this.numStr(d?.temperature),
        unit: "\xB0C",
        refLabel: "36.1\u201337.2\xB0C",
        pct: this.norm(temp, 35, 40),
        color: this.metricColor(temp, [36.1, 37.2], [35.5, 38])
      },
      {
        label: "Fr\xE9q. cardiaque",
        valueStr: this.numStr(d?.frequenceCardiaque),
        unit: "bpm",
        refLabel: "60\u2013100 bpm",
        pct: this.norm(fc, 40, 140),
        color: this.metricColor(fc, [60, 100], [50, 120])
      },
      {
        label: "Fr\xE9q. respiratoire",
        valueStr: this.numStr(d?.frequenceRespiratoire),
        unit: "/min",
        refLabel: "12\u201320 /min",
        pct: this.norm(fr, 8, 30),
        color: this.metricColor(fr, [12, 20], [10, 25])
      },
      {
        label: "Glyc\xE9mie",
        valueStr: this.numStr(d?.glycemieCapillaire),
        unit: "mmol/L",
        refLabel: "3.9\u20135.5",
        pct: this.norm(glyc, 2, 12),
        color: this.metricColor(glyc, [3.9, 5.5], [2, 7])
      }
    ];
  }
  get tensionBars() {
    const ta = this.selectedPatient?.dossierPatient?.tensionArterielle;
    if (!ta || ta === "\u2014")
      return [];
    const parts = ta.split("/");
    const sys = parseFloat(parts[0]);
    const dia = parseFloat(parts[1] ?? "0");
    if (isNaN(sys))
      return [];
    return [
      {
        label: `Systolique \u2014 ${sys} mmHg`,
        value: sys,
        max: 200,
        color: sys < 140 ? "var(--c-teal)" : sys < 160 ? "var(--c-amber)" : "var(--c-red)"
      },
      {
        label: `Diastolique \u2014 ${dia} mmHg`,
        value: dia,
        max: 120,
        color: dia < 90 ? "var(--c-teal)" : dia < 100 ? "var(--c-amber)" : "var(--c-red)"
      }
    ];
  }
  get bioBarData() {
    const p = this.selectedPatient;
    if (!p)
      return [];
    const cr = this.parseNum(p.creatinine);
    const ur = this.parseNum(p.uree);
    const hb = this.parseNum(p.hemoglobine);
    return [
      {
        label: "Cr\xE9atinine",
        valueStr: p.creatinine,
        unit: "mg/dL",
        refLabel: "0.7\u20131.2",
        pct: Math.min(1, (cr ?? 0) / 20),
        color: cr === null ? "var(--c-text-3)" : cr <= 1.2 ? "var(--c-teal)" : cr <= 5 ? "var(--c-amber)" : "var(--c-red)"
      },
      {
        label: "Ur\xE9e",
        valueStr: p.uree,
        unit: "mmol/L",
        refLabel: "2.5\u20137.5",
        pct: Math.min(1, (ur ?? 0) / 30),
        color: ur === null ? "var(--c-text-3)" : ur <= 7.5 ? "var(--c-teal)" : ur <= 15 ? "var(--c-amber)" : "var(--c-red)"
      },
      {
        label: "H\xE9moglobine",
        valueStr: p.hemoglobine,
        unit: "g/dL",
        refLabel: "12\u201316",
        pct: Math.min(1, (hb ?? 0) / 20),
        color: hb === null ? "var(--c-text-3)" : hb >= 12 && hb <= 16 ? "var(--c-teal)" : hb >= 9 ? "var(--c-amber)" : "var(--c-red)"
      }
    ];
  }
  static \u0275fac = function MedecinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MedecinComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(OrdonnanceService), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(DossierPatientService), \u0275\u0275directiveInject(AlerteService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MedecinComponent, selectors: [["app-medecin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 94, vars: 30, consts: [["searchInput", ""], [1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "notif-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-overlay search-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "dashboard"], [1, "sidebar-backdrop", 3, "click"], [1, "sidebar"], [1, "sidebar__logo"], ["width", "28", "height", "28", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "sidebar__nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "material-icons"], [1, "nav-badge"], [1, "nav-badge", "warn"], ["class", "nav-badge crit", 4, "ngIf"], [1, "sidebar__user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["title", "Se d\xE9connecter", 1, "logout-btn", 3, "click"], [1, "main"], [1, "topbar"], [1, "topbar__left"], ["class", "breadcrumb", 4, "ngIf"], [1, "topbar__date"], [1, "topbar__right"], [1, "hamburger-btn", 3, "click"], [1, "icon-btn", 3, "click"], [1, "notif-wrapper"], [1, "icon-btn", "notif-btn", 3, "click"], ["class", "notif-dot", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], [1, "main-scroll"], [4, "ngIf"], [3, "click"], [1, "toast-close"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "material-icons", "spin"], [1, "notif-backdrop", 3, "click"], [1, "modal-overlay", "search-overlay", 3, "click"], [1, "search-modal", 3, "click"], [1, "search-modal__input-row"], [1, "material-icons", "search-modal__icon"], ["type", "text", "placeholder", "Rechercher un patient, ordonnance, alerte\u2026", "autofocus", "", 1, "search-modal__input", 3, "ngModelChange", "keydown.escape", "ngModel"], [1, "search-modal__close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-hint", 4, "ngIf"], [1, "search-results"], ["class", "search-group", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-group"], [1, "search-group__label"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "click"], [1, "sri__avatar"], [1, "sri__info"], [1, "sri__name"], [1, "sri__sub"], [1, "material-icons", "sri__arrow"], [1, "sri__avatar", "sri__avatar--ord"], [1, "sri__avatar", "sri__avatar--alerte"], [1, "search-empty"], [1, "search-hint"], [1, "modal-overlay", 3, "click"], [1, "settings-panel", 3, "click"], [1, "settings-panel__head"], [1, "material-icons", 2, "color", "var(--c-teal)"], [1, "modal-close-btn", 3, "click"], [1, "settings-section"], [1, "settings-section__title"], [1, "settings-profile-card"], [1, "settings-avatar"], [1, "settings-profile-info"], [1, "settings-profile-name"], [1, "settings-profile-role"], [1, "settings-profile-login"], [1, "settings-nav-list"], [1, "settings-nav-item", 3, "click"], [1, "settings-logout-btn", 3, "click"], [1, "modal-panel", "modal-panel--ord", 3, "click"], [1, "modal-header", "modal-header--simple"], [1, "material-icons", 2, "color", "var(--c-teal)", "font-size", "22px"], [1, "modal-body"], [1, "form-grid"], [1, "form-field", "form-field--full"], [1, "req"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-field"], ["type", "text", "disabled", "", 2, "opacity", ".6", 3, "value"], ["type", "date", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Ex : EPO 4000 UI SC\u2026", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Fr\xE9quence et dur\xE9e\u2026", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Remarques, consignes\u2026", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], [1, "btn-sm-primary", 3, "click"], [1, "btn-outline-sm", 3, "click"], [3, "value"], [1, "modal-header"], [1, "avatar-lg"], [1, "modal-patient-info"], [1, "ord-dates-row"], [1, "ord-date-item"], [1, "ord-detail-section"], [1, "ord-detail-label"], [1, "ord-detail-text"], ["class", "modal-note", 4, "ngIf"], ["class", "ord-detail-section", 4, "ngIf"], ["class", "btn-outline-sm btn-warn", 3, "click", 4, "ngIf"], [1, "modal-note"], [1, "btn-outline-sm", "btn-warn", 3, "click"], [1, "nav-badge", "crit"], [1, "breadcrumb"], [1, "breadcrumb__link", 3, "click"], [1, "notif-dot"], [1, "notif-panel"], [1, "notif-panel__head"], [1, "notif-read-all", 3, "click"], [1, "notif-list"], ["class", "notif-item", 3, "notif-item--unread", "click", 4, "ngFor", "ngForOf"], ["class", "notif-item", 4, "ngIf"], [1, "notif-item", 3, "click"], [1, "notif-content"], ["class", "notif-unread-dot", 4, "ngIf"], [1, "notif-unread-dot"], [1, "notif-item"], [2, "color", "var(--c-text-3)", "font-size", "13px"], [1, "kpi-row"], [1, "kpi-card", 2, "cursor", "pointer", 3, "click"], [1, "kpi-icon", 2, "background", "var(--c-teal-soft)"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-lbl"], [1, "kpi-icon", 2, "background", "var(--c-blue-soft)"], [1, "material-icons", 2, "color", "var(--c-blue)"], [1, "kpi-icon", 2, "background", "var(--c-amber-soft)"], [1, "material-icons", 2, "color", "var(--c-amber)"], [1, "kpi-icon", 2, "background", "var(--c-red-soft)"], [1, "material-icons", 2, "color", "var(--c-red)"], [1, "content-grid"], [1, "panel", "panel--patients"], [1, "panel__head"], [1, "search-mini"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], [1, "data-table"], ["style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "panel__footer"], [2, "cursor", "pointer", 3, "click"], [1, "right-col"], [1, "panel", "panel--alerts"], ["class", "badge crit", 4, "ngIf"], [1, "alerts-list"], ["class", "alert-item alert-item--crit", 4, "ngFor", "ngForOf"], ["class", "empty-row", 4, "ngIf"], [1, "panel", "panel--sessions"], ["class", "session-timeline", 4, "ngIf"], [1, "panel", "panel--rx"], [1, "rx-list"], ["class", "rx-item", 4, "ngFor", "ngForOf"], [1, "patient-cell"], [1, "avatar-sm"], [1, "mono"], [1, "row-btn", 3, "click"], ["colspan", "5", 1, "empty-row"], [1, "badge", "crit"], [1, "alert-item", "alert-item--crit"], ["class", "btn-outline-sm", 3, "click", 4, "ngIf"], [1, "empty-row"], [1, "session-timeline"], ["class", "session-item", 3, "done", "active", 4, "ngFor", "ngForOf"], [1, "session-item"], [1, "session-time"], [1, "session-dot"], [1, "session-body"], [1, "rx-item"], [1, "btn-teal-xs", 3, "click"], [1, "section-bar"], [1, "section-bar__filters"], ["type", "text", "placeholder", "Nom, CIN, pathologie\u2026", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "IRC"], ["value", "DRC"], ["value", "SN"], [1, "panel", "panel--full"], [1, "patho-tag"], [1, "row-actions-mini"], ["colspan", "9", 1, "empty-row"], [1, "dossier-hero"], [1, "dossier-hero__avatar"], [1, "dossier-hero__info"], [1, "dossier-hero__kpis"], [1, "dossier-kpi"], [1, "dossier-kpi__lbl"], [1, "dossier-kpi__val", "mono"], [1, "dossier-hero__actions"], [1, "dossier-tabs"], [1, "dossier-tab", 3, "click"], [1, "tab-count"], ["class", "dossier-tab-pane", 4, "ngIf"], [1, "dossier-tab-pane"], [1, "info-panels"], [1, "panel", "info-panel"], [1, "info-grid"], [1, "info-item"], [1, "blood-tag"], [1, "panel", "info-panel", "info-panel--bio"], [1, "bio-grid"], [1, "bio-item"], [1, "bio-lbl"], [1, "bio-val", "mono"], [1, "bio-ref"], [2, "padding", "16px 20px", "font-size", "13px", "color", "var(--c-text-2)", "line-height", "1.6"], ["class", "historique-list", 4, "ngIf"], [1, "historique-list"], ["class", "histo-item", 4, "ngFor", "ngForOf"], [1, "histo-item"], [1, "histo-line"], [1, "histo-body"], [1, "histo-meta"], [1, "histo-date", "mono"], [1, "histo-desc"], ["class", "histo-notes", 4, "ngIf"], [1, "histo-notes"], [1, "section-bar", 2, "margin-bottom", "16px"], [2, "font-size", "13px", "color", "var(--c-text-3)"], ["class", "ordonnances-grid", 4, "ngIf"], ["class", "empty-row panel panel--full", 4, "ngIf"], [1, "ordonnances-grid"], ["class", "ord-card", 4, "ngFor", "ngForOf"], [1, "ord-card"], [1, "ord-card__head"], [1, "ord-card__id"], [1, "ord-card__date", "mono"], [1, "ord-card__field"], ["class", "ord-card__field", 4, "ngIf"], ["class", "ord-card__note", 4, "ngIf"], [1, "ord-card__meta", "mono"], [1, "ord-card__actions"], [1, "ord-card__note"], [1, "empty-row", "panel", "panel--full"], [1, "charts-section"], [1, "charts-section__head"], [1, "gauges-grid"], ["class", "gauge-card", 4, "ngFor", "ngForOf"], ["class", "charts-section", 4, "ngIf"], [1, "bar-chart"], ["class", "bar-row", 4, "ngFor", "ngForOf"], [1, "gauge-card"], ["viewBox", "0 0 100 90", 1, "gauge-svg"], ["cx", "50", "cy", "54", "r", "38", "fill", "none", "stroke", "var(--c-surface-2)", "stroke-width", "9", "stroke-linecap", "round", "transform", "rotate(135, 50, 54)"], ["cx", "50", "cy", "54", "r", "38", "fill", "none", "stroke-width", "9", "stroke-linecap", "round", "transform", "rotate(135, 50, 54)"], ["x", "50", "y", "51", "text-anchor", "middle", 1, "gauge-val-text"], ["x", "50", "y", "64", "text-anchor", "middle", 1, "gauge-unit-text"], [1, "gauge-label"], [1, "gauge-ref"], [1, "charts-section__val", "mono"], [1, "bar-ref-note"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-marker"], [1, "bar-meta"], [1, "bar-ref-inline"], ["type", "text", "placeholder", "Patient, m\xE9dicament\u2026", 3, "ngModelChange", "ngModel"], ["value", "EN_ATTENTE"], ["value", "VALIDEE"], ["value", "ANNULEE"], [1, "ord-kpi-row"], [1, "ord-kpi"], [1, "ord-kpi__val"], [1, "ord-kpi", "ord-kpi--ok"], [1, "ord-kpi", "ord-kpi--info"], [1, "ord-card__patient"], [1, "ord-card__pnom"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-end", "gap", "4px"], [1, "mono", 2, "font-size", "11px", "color", "var(--c-text-3)"], [1, "panel", "panel--full", 2, "overflow", "visible"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "alerts-list", "alerts-list--full"], ["class", "alert-item", 3, "alert-item--crit", "alert-item--warn", "opacity", 4, "ngFor", "ngForOf"], [1, "alert-item"], [1, "material-icons", 2, "font-size", "28px"], [2, "display", "flex", "gap", "8px"]], template: function MedecinComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, MedecinComponent_div_1_Template, 8, 5, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, MedecinComponent_div_2_Template, 6, 0, "div", 3)(3, MedecinComponent_div_3_Template, 1, 0, "div", 4)(4, MedecinComponent_div_4_Template, 12, 3, "div", 5)(5, MedecinComponent_div_5_Template, 49, 7, "div", 6)(6, MedecinComponent_div_6_Template, 50, 7, "div", 6)(7, MedecinComponent_div_7_Template, 55, 15, "div", 6);
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
      \u0275\u0275listener("click", function MedecinComponent_Template_div_click_9_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "aside", 9)(11, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "path", 12)(14, "path", 13)(15, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "DialySys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "nav", 15)(19, "div", 16);
      \u0275\u0275text(20, "Principal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 17);
      \u0275\u0275listener("click", function MedecinComponent_Template_a_click_21_listener() {
        return ctx.setSection("dashboard");
      });
      \u0275\u0275elementStart(22, "span", 18);
      \u0275\u0275text(23, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "a", 17);
      \u0275\u0275listener("click", function MedecinComponent_Template_a_click_26_listener() {
        return ctx.setSection("patients");
      });
      \u0275\u0275elementStart(27, "span", 18);
      \u0275\u0275text(28, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Mes Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 19);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "a", 17);
      \u0275\u0275listener("click", function MedecinComponent_Template_a_click_33_listener() {
        return ctx.setSection("planning");
      });
      \u0275\u0275elementStart(34, "span", 18);
      \u0275\u0275text(35, "event_note");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Planning S\xE9ances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "a", 17);
      \u0275\u0275listener("click", function MedecinComponent_Template_a_click_38_listener() {
        return ctx.setSection("ordonnances");
      });
      \u0275\u0275elementStart(39, "span", 18);
      \u0275\u0275text(40, "edit_note");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Ordonnances");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 20);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 16);
      \u0275\u0275text(46, "M\xE9dical");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 17);
      \u0275\u0275listener("click", function MedecinComponent_Template_a_click_47_listener() {
        return ctx.setSection("alertes");
      });
      \u0275\u0275elementStart(48, "span", 18);
      \u0275\u0275text(49, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "Alertes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, MedecinComponent_span_52_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 22)(54, "div", 23);
      \u0275\u0275text(55, "DR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 24)(57, "span", 25);
      \u0275\u0275text(58, "Dr. M\xE9decin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 26);
      \u0275\u0275text(60, "N\xE9phrologue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "button", 27);
      \u0275\u0275listener("click", function MedecinComponent_Template_button_click_61_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(62, "span", 18);
      \u0275\u0275text(63, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 28)(65, "header", 29)(66, "div", 30);
      \u0275\u0275template(67, MedecinComponent_div_67_Template, 7, 2, "div", 31);
      \u0275\u0275elementStart(68, "h1");
      \u0275\u0275text(69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 32);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 33)(73, "button", 34);
      \u0275\u0275listener("click", function MedecinComponent_Template_button_click_73_listener() {
        return ctx.sidebarOpen = !ctx.sidebarOpen;
      });
      \u0275\u0275elementStart(74, "span", 18);
      \u0275\u0275text(75, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 35);
      \u0275\u0275listener("click", function MedecinComponent_Template_button_click_76_listener() {
        return ctx.openSearch();
      });
      \u0275\u0275elementStart(77, "span", 18);
      \u0275\u0275text(78, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 36)(80, "button", 37);
      \u0275\u0275listener("click", function MedecinComponent_Template_button_click_80_listener() {
        return ctx.toggleNotifPanel();
      });
      \u0275\u0275elementStart(81, "span", 18);
      \u0275\u0275text(82, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, MedecinComponent_span_83_Template, 1, 0, "span", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(84, MedecinComponent_div_84_Template, 9, 2, "div", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "button", 35);
      \u0275\u0275listener("click", function MedecinComponent_Template_button_click_85_listener() {
        return ctx.openSettings();
      });
      \u0275\u0275elementStart(86, "span", 18);
      \u0275\u0275text(87, "settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "div", 40);
      \u0275\u0275template(89, MedecinComponent_ng_container_89_Template, 99, 25, "ng-container", 41)(90, MedecinComponent_ng_container_90_Template, 47, 6, "ng-container", 41)(91, MedecinComponent_ng_container_91_Template, 66, 32, "ng-container", 41)(92, MedecinComponent_ng_container_92_Template, 42, 9, "ng-container", 41)(93, MedecinComponent_ng_container_93_Template, 14, 3, "ng-container", 41);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSearchModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSettingsPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNouvelleOrdonnanceModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOrdonnanceDetail && ctx.selectedOrdonnance);
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.activeSection === "dashboard");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeSection === "patients" || ctx.activeSection === "dossier");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.allPatients.length);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.activeSection === "ordonnances");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.activeOrdCount);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeSection === "alertes");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.activeSection === "dossier");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.sectionTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.today);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.activeSection === "dashboard");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "patients");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "dossier" && ctx.selectedPatient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "ordonnances");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "alertes");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, UpperCasePipe, SlicePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  height: 100dvh;\n}\n.main-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n}\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  background: var(--c-card-hi);\n  border: 1px solid var(--c-border-hi);\n  color: var(--c-text-1);\n  pointer-events: all;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_toastIn 0.22s ease;\n  min-width: 280px;\n  max-width: 360px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.toast[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n  padding: 0;\n}\n.toast[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.toast[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%]:hover {\n  color: var(--c-text-1);\n}\n.toast--success[_ngcontent-%COMP%] {\n  border-color: rgba(48, 209, 88, 0.35);\n}\n.toast--success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  color: var(--c-green);\n}\n.toast--warning[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.35);\n}\n.toast--warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  color: var(--c-amber);\n}\n.toast--error[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.35);\n}\n.toast--error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  color: var(--c-red);\n}\n.toast--info[_ngcontent-%COMP%] {\n  border-color: rgba(78, 168, 248, 0.35);\n}\n.toast--info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  color: var(--c-blue);\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(6, 9, 15, 0.75);\n  backdrop-filter: blur(4px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_fadeIn 0.18s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-panel[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border-hi);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 560px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);\n  animation: _ngcontent-%COMP%_modalIn 0.22s ease;\n}\n.modal-panel--form[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 22px;\n  border-bottom: 1px solid var(--c-border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin: 0;\n}\n.modal-header--simple[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.modal-header--simple[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-patient-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-patient-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 2px;\n}\n.modal-patient-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  border-radius: 6px;\n  transition: all 0.15s;\n  margin-left: auto;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  color: var(--c-text-1);\n  background: var(--c-card-hi);\n}\n.modal-close-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 22px;\n  overflow-y: auto;\n  max-height: calc(100vh - 180px);\n}\n.modal-stat-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.modal-stat[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.modal-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 600;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modal-stat-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.modal-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: var(--c-blue-soft);\n  border: 1px solid rgba(78, 168, 248, 0.2);\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n}\n.modal-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-blue);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.modal-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2);\n  margin: 0;\n  line-height: 1.5;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: var(--c-teal-soft);\n  border: 1.5px solid var(--c-border-hi);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-teal);\n  font-family: var(--f-head);\n  flex-shrink: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--c-text-2);\n}\n.form-field[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n  color: var(--c-text-1);\n  font-family: var(--f-body);\n  font-size: 13px;\n  padding: 9px 12px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-border-hi);\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--c-card);\n}\n.notif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 98;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 320px;\n  background: var(--c-card);\n  border: 1px solid var(--c-border-hi);\n  border-radius: var(--radius);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);\n  z-index: 99;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_toastIn 0.18s ease;\n}\n.notif-panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.notif-panel__head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.notif-read-all[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--c-teal);\n  font-size: 11.5px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--f-body);\n}\n.notif-read-all[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.notif-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--c-border);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: var(--c-card-hi);\n}\n.notif-item--unread[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.04);\n}\n.notif-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.notif-icon--crit[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.notif-icon--warn[_ngcontent-%COMP%] {\n  color: var(--c-amber);\n}\n.notif-icon--info[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n}\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notif-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--c-text-1);\n  margin: 0 0 3px;\n  line-height: 1.4;\n}\n.notif-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.notif-unread-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--c-teal);\n  flex-shrink: 0;\n  margin-top: 5px;\n}\n.rx-item--prescribed[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.btn-done[_ngcontent-%COMP%] {\n  background: var(--c-green-soft) !important;\n  border-color: rgba(48, 209, 88, 0.3) !important;\n  color: var(--c-green) !important;\n  cursor: default !important;\n}\n.btn-done[_ngcontent-%COMP%]:hover {\n  background: var(--c-green-soft) !important;\n  color: var(--c-green) !important;\n}\n.btn-warn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-red) !important;\n  color: var(--c-red) !important;\n}\n.modal-panel--ord[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.ord-detail-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.ord-detail-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\n  padding: 8px 14px;\n  background: var(--c-surface);\n  border-bottom: 1px solid var(--c-border);\n  gap: 12px;\n}\n.ord-detail-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n}\n.ord-detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--c-border);\n  gap: 12px;\n  align-items: center;\n  font-size: 13px;\n}\n.ord-detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ord-detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n}\n.med-nom[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--c-text-1) !important;\n}\n.voie-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  background: rgba(41, 182, 246, 0.1);\n  color: var(--c-blue);\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--c-text-3);\n  margin-bottom: 4px;\n}\n.breadcrumb__link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--c-teal);\n}\n.breadcrumb__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.section-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.section-bar__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.filter-select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-1);\n  font-size: 13px;\n  cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--c-teal);\n}\n.row-actions-mini[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.patho-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background: rgba(41, 182, 246, 0.1);\n  color: var(--c-blue);\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.blood-tag[_ngcontent-%COMP%] {\n  color: var(--c-red);\n  font-weight: 700;\n}\n.allergy-tag[_ngcontent-%COMP%] {\n  color: var(--c-amber);\n  font-weight: 600;\n}\n.dossier-hero[_ngcontent-%COMP%] {\n  background: var(--c-surface-2, var(--c-card));\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.dossier-hero__avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 14px;\n  background: var(--c-teal-soft);\n  border: 2px solid var(--c-teal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--c-teal);\n  flex-shrink: 0;\n}\n.dossier-hero__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dossier-hero__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.dossier-hero__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.dossier-hero__kpis[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.dossier-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.dossier-kpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.dossier-kpi__val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.dossier-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n}\n.badge--lg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 14px;\n}\n.dossier-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 4px;\n  margin-bottom: 16px;\n}\n.dossier-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: transparent;\n  border: none;\n  border-radius: 7px;\n  color: var(--c-text-2);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dossier-tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.dossier-tab[_ngcontent-%COMP%]:hover {\n  background: var(--c-card-hi);\n  color: var(--c-text-1);\n}\n.dossier-tab.active[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n  color: #050A14;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(0, 217, 196, 0.3);\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 1px 7px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.dossier-tab.active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: rgba(5, 10, 20, 0.2);\n}\n.dossier-tab-pane[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.18s ease;\n  overflow-y: auto;\n  max-height: calc(100vh - 280px);\n  padding-right: 4px;\n}\n.info-panels[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.info-panel--bio[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.panel__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.panel__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--c-border);\n  border-right: 1px solid var(--c-border);\n}\n.info-item[_ngcontent-%COMP%]:nth-child(even) {\n  border-right: none;\n}\n.info-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  border-bottom: none;\n}\n.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--c-text-3);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.info-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n  font-weight: 600;\n}\n.bio-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  padding: 16px;\n}\n.bio-item[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  transition: border-color 0.2s;\n}\n.bio-item--crit[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.4);\n  background: rgba(255, 87, 87, 0.06);\n}\n.bio-item--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.4);\n  background: rgba(255, 193, 7, 0.06);\n}\n.bio-lbl[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n}\n.bio-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.bio-ref[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n}\n.historique-list[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.histo-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 0;\n  position: relative;\n}\n.histo-item[_ngcontent-%COMP%]:not(:last-child)   .histo-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 17px;\n  top: 50px;\n  bottom: -14px;\n  width: 2px;\n  background: var(--c-border);\n}\n.histo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.histo-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.histo-icon--seance[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n}\n.histo-icon--bilan[_ngcontent-%COMP%] {\n  background: rgba(41, 182, 246, 0.12);\n  color: var(--c-blue);\n}\n.histo-icon--consultation[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.12);\n  color: var(--c-purple);\n}\n.histo-icon--urgence[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.12);\n  color: var(--c-red);\n}\n.histo-line[_ngcontent-%COMP%] {\n  width: 0;\n  flex-shrink: 0;\n}\n.histo-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 4px;\n}\n.histo-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.histo-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.histo-type[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.histo-type--seance[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n}\n.histo-type--bilan[_ngcontent-%COMP%] {\n  background: rgba(41, 182, 246, 0.12);\n  color: var(--c-blue);\n}\n.histo-type--consultation[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.12);\n  color: var(--c-purple);\n}\n.histo-type--urgence[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.12);\n  color: var(--c-red);\n}\n.histo-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n  margin: 0 0 2px;\n}\n.histo-notes[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n  margin: 0;\n}\n.ordonnances-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));\n  gap: 14px;\n}\n.ord-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.ord-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.07);\n}\n.ord-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--c-border);\n  gap: 12px;\n}\n.ord-card__patient[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ord-card__id[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.ord-card__pnom[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n  margin-top: 1px;\n}\n.ord-card__date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.ord-card__meds[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  border-bottom: 1px solid var(--c-border);\n}\n.ord-card__note[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 12px;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  border-bottom: 1px solid var(--c-border);\n}\n.ord-card__note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-blue);\n  flex-shrink: 0;\n}\n.ord-card__actions[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ord-med-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ord-med-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n}\n.ord-med-row[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.ord-freq[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.ord-card__field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 12px;\n}\n.ord-card__field[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ord-card__field[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: var(--c-text-2);\n  margin-bottom: 2px;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.ord-card__field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-text-1);\n  font-size: 13px;\n  line-height: 1.5;\n}\n.ord-card__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.ord-dates-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.ord-date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 10px 14px;\n}\n.ord-date-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n}\n.ord-date-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ord-date-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--c-text-3);\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.ord-date-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.ord-detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.ord-detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 6px;\n}\n.ord-detail-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-teal);\n}\n.ord-detail-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n  line-height: 1.6;\n  margin: 0;\n}\n.ord-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.ord-kpi[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 12px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  min-width: 100px;\n}\n.ord-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.ord-kpi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.ord-kpi--ok[_ngcontent-%COMP%] {\n  border-color: rgba(0, 217, 196, 0.3);\n}\n.ord-kpi--ok[_ngcontent-%COMP%]   .ord-kpi__val[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.ord-kpi--info[_ngcontent-%COMP%] {\n  border-color: rgba(41, 182, 246, 0.3);\n}\n.ord-kpi--info[_ngcontent-%COMP%]   .ord-kpi__val[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n}\n.rx-meds-section[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.rx-meds-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--c-surface);\n  border-bottom: 1px solid var(--c-border);\n}\n.rx-meds-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.rx-meds-header[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n}\n.add-med-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n  background: rgba(0, 217, 196, 0.1);\n  border: 1px solid rgba(0, 217, 196, 0.3);\n  border-radius: 6px;\n  color: var(--c-teal);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.add-med-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.add-med-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.2);\n}\n.rx-meds-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rx-med-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--c-border);\n}\n.rx-med-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rx-med-row__fields[_ngcontent-%COMP%] {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1.5fr 1fr;\n  gap: 8px;\n}\n.rx-input[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 6px;\n  color: var(--c-text-1);\n  font-family: var(--f-body);\n  font-size: 12px;\n  padding: 7px 10px;\n  outline: none;\n  width: 100%;\n}\n.rx-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n}\n.rx-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.rx-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--c-card);\n}\n.rx-input--lg[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.rx-del-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--c-border);\n  border-radius: 6px;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.rx-del-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.rx-del-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--c-red);\n  color: var(--c-red);\n}\n.rx-del-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\ntextarea[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n  color: var(--c-text-1);\n  font-family: var(--f-body);\n  font-size: 13px;\n  padding: 9px 12px;\n  outline: none;\n  resize: vertical;\n  width: 100%;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n}\ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.row-crit[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.04);\n}\n.row-warn[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.03);\n}\n.val-crit[_ngcontent-%COMP%] {\n  color: var(--c-red) !important;\n  font-weight: 700;\n}\n.val-warn[_ngcontent-%COMP%] {\n  color: var(--c-amber) !important;\n  font-weight: 600;\n}\n.val-ok[_ngcontent-%COMP%] {\n  color: var(--c-green) !important;\n}\n.tend-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.modal-panel--bilan[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.bilan-detail-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.bilan-detail-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n}\n.bilan-detail-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--c-border);\n}\n.bilan-detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--c-border);\n}\n.bilan-detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.bilan-detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  color: var(--c-text-1);\n}\n.analyses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n}\n.analyse-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1.5px solid var(--c-border);\n  border-radius: 14px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.2s;\n}\n.analyse-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n}\n.analyse-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.analyse-card__head[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.analyse-param[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.analyse-param__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.analyse-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--c-surface);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.analyse-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.analyse-bar__fill--ok[_ngcontent-%COMP%] {\n  background: var(--c-green);\n}\n.analyse-bar__fill--warn[_ngcontent-%COMP%] {\n  background: var(--c-amber);\n}\n.analyse-bar__fill--crit[_ngcontent-%COMP%] {\n  background: var(--c-red);\n}\n.analyse-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.analyse-detail-item[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.analyse-detail-item--crit[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.4);\n  background: rgba(255, 87, 87, 0.05);\n}\n.analyse-detail-item--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.4);\n  background: rgba(255, 193, 7, 0.04);\n}\n.ad-lbl[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n}\n.ad-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.ad-ref[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n}\n.protocoles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 16px;\n}\n.proto-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1.5px solid var(--c-border);\n  border-radius: 14px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.proto-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.07);\n}\n.proto-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.proto-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.proto-card__info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.proto-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-teal);\n  border-left: 3px solid var(--c-teal);\n  padding-left: 10px;\n}\n.proto-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid var(--c-border);\n}\n.proto-params[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.proto-param[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 12px;\n}\n.proto-param[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.proto-param[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.proto-param[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--c-text-2);\n  font-size: 11px;\n}\n.proto-param[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--c-text-1);\n  font-size: 12px;\n}\n.proto-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  font-family: var(--f-mono);\n}\n.proto-detail-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-teal);\n  border-left: 3px solid var(--c-teal);\n  padding-left: 12px;\n  margin-bottom: 16px;\n}\n.proto-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.proto-detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--c-border);\n  border-right: 1px solid var(--c-border);\n}\n.proto-detail-item[_ngcontent-%COMP%]:nth-child(even) {\n  border-right: none;\n}\n.proto-detail-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  border-bottom: none;\n}\n.proto-detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--c-text-3);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.proto-detail-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n  font-weight: 600;\n}\n.alerts-list--full[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  max-height: calc(100vh - 180px);\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--c-text-3);\n  padding: 32px 16px !important;\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.search-overlay[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding-top: 80px;\n}\n.search-modal[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 620px;\n  overflow: hidden;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);\n}\n.search-modal__input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 20px;\n  gap: 12px;\n  border-bottom: 1px solid var(--c-border);\n}\n.search-modal__icon[_ngcontent-%COMP%] {\n  color: var(--c-text-3);\n  font-size: 22px;\n}\n.search-modal__input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  color: var(--c-text-1);\n}\n.search-modal__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.search-modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n}\n.search-modal__close[_ngcontent-%COMP%]:hover {\n  color: var(--c-text-1);\n}\n.search-results[_ngcontent-%COMP%] {\n  max-height: 420px;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.search-group__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px 6px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--c-text-3);\n}\n.search-group__label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 20px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.search-result-item[_ngcontent-%COMP%]:hover {\n  background: var(--c-hover, rgba(255, 255, 255, 0.05));\n}\n.sri__avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.15);\n  color: var(--c-teal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.sri__avatar--ord[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.sri__avatar--alerte[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.sri__avatar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sri__info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow: hidden;\n}\n.sri__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sri__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sri__arrow[_ngcontent-%COMP%] {\n  color: var(--c-text-3);\n  font-size: 18px;\n}\n.search-empty[_ngcontent-%COMP%], \n.search-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 24px 20px;\n  color: var(--c-text-3);\n  font-size: 13px;\n}\n.search-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.search-hint[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.settings-panel[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);\n}\n.settings-panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--c-border);\n}\n.settings-panel__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin: 0;\n}\n.settings-section[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--c-border);\n}\n.settings-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.settings-section__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--c-text-3);\n  margin-bottom: 12px;\n}\n.settings-profile-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.settings-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.15);\n  color: var(--c-teal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.settings-profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.settings-profile-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.settings-profile-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-teal);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.settings-profile-login[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.settings-nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.settings-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--c-text-2);\n  font-size: 13px;\n  font-weight: 500;\n  width: 100%;\n  text-align: left;\n  transition: background 0.15s, color 0.15s;\n}\n.settings-nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.settings-nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--c-hover, rgba(255, 255, 255, 0.06));\n  color: var(--c-text-1);\n}\n.settings-logout-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  color: #f87171;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  transition: background 0.15s;\n}\n.settings-logout-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.settings-logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n.charts-section[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  padding: 20px 24px;\n  margin-bottom: 16px;\n}\n.charts-section__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.charts-section__head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--c-text-1);\n  margin: 0;\n}\n.charts-section__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--c-teal);\n}\n.charts-section__val[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 14px;\n  color: var(--c-text-2);\n}\n.gauges-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 16px;\n}\n.gauge-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--c-surface, rgba(255, 255, 255, 0.03));\n  border: 1px solid var(--c-border);\n  border-radius: 12px;\n  padding: 12px 8px 14px;\n}\n.gauge-svg[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 90px;\n}\n.gauge-val-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  fill: var(--c-text-1);\n  font-family: "JetBrains Mono", monospace;\n}\n.gauge-unit-text[_ngcontent-%COMP%] {\n  font-size: 9px;\n  fill: var(--c-text-3);\n}\n.gauge-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--c-text-2);\n  text-align: center;\n  margin-top: 4px;\n}\n.gauge-ref[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n  margin-top: 2px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--c-text-2);\n}\n.bar-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n  background: var(--c-surface-2, rgba(255, 255, 255, 0.06));\n  border-radius: 5px;\n  overflow: visible;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.5s ease;\n  min-width: 4px;\n}\n.bar-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  width: 2px;\n  height: 18px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 1px;\n  transform: translateX(-50%);\n}\n.bar-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n}\n.bar-ref-inline[_ngcontent-%COMP%] {\n  color: var(--c-text-3);\n}\n.bar-ref-note[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  margin-top: 4px;\n}\n@media (max-width: 1100px) {\n  .main-scroll[_ngcontent-%COMP%] {\n    padding: 0 18px 18px;\n  }\n}\n@media (max-width: 768px) {\n  .main-scroll[_ngcontent-%COMP%] {\n    padding: 0 12px 12px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .section-header__actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .patient-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .chart-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n/*# sourceMappingURL=medecin.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MedecinComponent, { className: "MedecinComponent", filePath: "app\\pages\\medecin\\medecin.component.ts", lineNumber: 100 });
})();
export {
  MedecinComponent
};
//# sourceMappingURL=chunk-C3BW3XJD.js.map
