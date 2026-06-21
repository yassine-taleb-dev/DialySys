import {
  OrdonnanceService,
  PatientInstructionsService
} from "./chunk-PNJLX44P.js";
import {
  AlerteService,
  ConstantesVitalesService
} from "./chunk-SU363RGH.js";
import {
  PatientService
} from "./chunk-XXOLSQYR.js";
import {
  AuthService,
  environment
} from "./chunk-LFASSBRV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-I57MQ5R6.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf
} from "./chunk-EH4I5CFZ.js";
import {
  __spreadProps,
  __spreadValues,
  catchError,
  forkJoin,
  of,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NP5N7FWI.js";

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
    return this.http.get(`${this.api}/patient/${patientId}`);
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

// src/app/pages/medecin/medecin.component.ts
function MedecinComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MedecinComponent_button_1_Template_button_click_0_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(toast_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("toast toast--", toast_r2.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toastIcon(toast_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
function MedecinComponent_div_15_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.unreadCount > 99 ? "99+" : ctx_r2.unreadCount);
  }
}
function MedecinComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 25);
    \u0275\u0275listener("click", function MedecinComponent_div_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTheme());
    });
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275listener("click", function MedecinComponent_div_15_Template_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.notifOpen = !ctx_r2.notifOpen;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MedecinComponent_div_15_span_14_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function MedecinComponent_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17, "logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentUserInitials, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Dr. ", ctx_r2.currentUser.prenom, " ", ctx_r2.currentUser.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentUser.login);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.isLight ? "Mode sombre" : "Mode clair");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isLight ? "dark_mode" : "light_mode");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.unreadCount > 0);
  }
}
function MedecinComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function MedecinComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.notifOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_17_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.unreadCount, " non lue", ctx_r2.unreadCount > 1 ? "s" : "", "");
  }
}
function MedecinComponent_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 17);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Toutes les alertes ont \xE9t\xE9 trait\xE9es ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_17_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function MedecinComponent_div_17_div_10_Template_div_click_0_listener() {
      const a_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPatientFromNotif(a_r8));
    });
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275listener("click", function MedecinComponent_div_17_div_10_Template_button_click_10_listener($event) {
      const a_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.traiterAlerte(a_r8, $event));
    });
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Traiter ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("notif-card " + ctx_r2.alerteTypeClass(a_r8.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alerteTypeIcon(a_r8.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", a_r8.patient == null ? null : a_r8.patient.prenom, " ", a_r8.patient == null ? null : a_r8.patient.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alerteTimeLabel(a_r8.dateCreation));
  }
}
function MedecinComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function MedecinComponent_div_17_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "span", 17);
    \u0275\u0275text(3, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Alertes actives");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MedecinComponent_div_17_span_6_Template, 2, 2, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275template(8, MedecinComponent_div_17_div_8_Template, 3, 0, "div", 35)(9, MedecinComponent_div_17_div_9_Template, 4, 0, "div", 36)(10, MedecinComponent_div_17_div_10_Template, 14, 7, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingNotif);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingNotif && ctx_r2.activeAlertes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.activeAlertes);
  }
}
function MedecinComponent_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du dossier... ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_18_ng_container_16_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 64)(2, "span", 17);
    \u0275\u0275text(3, "water_drop");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61)(6, "div", 62)(7, "label");
    \u0275\u0275text(8, "Pathologie");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 62)(11, "label");
    \u0275\u0275text(12, "D\xE9but dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 61)(15, "div", 62)(16, "label");
    \u0275\u0275text(17, "Poids sec (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 62)(20, "label");
    \u0275\u0275text(21, "Taille (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 64)(24, "span", 17);
    \u0275\u0275text(25, "biotech");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Biologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 61)(28, "div", 62)(29, "label");
    \u0275\u0275text(30, "Cr\xE9atinine");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 62)(33, "label");
    \u0275\u0275text(34, "Ur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 61)(37, "div", 62)(38, "label");
    \u0275\u0275text(39, "H\xE9moglobine");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 62)(42, "label");
    \u0275\u0275text(43, "Saturation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 64)(46, "span", 17);
    \u0275\u0275text(47, "history_edu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Ant\xE9c\xE9dents & Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 61)(50, "div", 65)(51, "label");
    \u0275\u0275text(52, "Ant\xE9c\xE9dents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "textarea", 66);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 61)(56, "div", 65)(57, "label");
    \u0275\u0275text(58, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "textarea", 66);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r2.dossierData.pathologie || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.dossierData.debutDialyse || "-");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.dossierData.poids || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.dossierData.taille || "-");
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r2.dossierData.creatinine || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.dossierData.uree || "-");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.dossierData.hemoglobine || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.dossierData.saturation != null ? ctx_r2.dossierData.saturation + " %" : "-");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.dossierData.antecedents || "Aucun ant\xE9c\xE9dent renseign\xE9");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.dossierData.instructions || "Aucune instruction renseign\xE9e");
  }
}
function MedecinComponent_div_18_ng_container_16_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 17);
    \u0275\u0275text(2, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun dossier disponible pour ce patient ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_18_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 60)(2, "span", 17);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61)(6, "div", 62)(7, "label");
    \u0275\u0275text(8, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 62)(11, "label");
    \u0275\u0275text(12, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 61)(15, "div", 62)(16, "label");
    \u0275\u0275text(17, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 62)(20, "label");
    \u0275\u0275text(21, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, MedecinComponent_div_18_ng_container_16_ng_container_23_Template, 61, 10, "ng-container", 19)(24, MedecinComponent_div_18_ng_container_16_div_24_Template, 4, 0, "div", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", (ctx_r2.dossierPatient == null ? null : ctx_r2.dossierPatient.cin) || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (ctx_r2.dossierPatient == null ? null : ctx_r2.dossierPatient.groupeSanguin) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (ctx_r2.dossierPatient == null ? null : ctx_r2.dossierPatient.dateNaissance) || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (ctx_r2.dossierPatient == null ? null : ctx_r2.dossierPatient.genre) || "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dossierData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dossierData);
  }
}
function MedecinComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function MedecinComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDossierModal());
    });
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275listener("click", function MedecinComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49)(4, "span", 50);
    \u0275\u0275text(5, "folder_shared");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 52);
    \u0275\u0275listener("click", function MedecinComponent_div_18_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDossierModal());
    });
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 53);
    \u0275\u0275template(15, MedecinComponent_div_18_div_15_Template, 4, 0, "div", 54)(16, MedecinComponent_div_18_ng_container_16_Template, 25, 6, "ng-container", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 55)(18, "div", 56)(19, "button", 57);
    \u0275\u0275listener("click", function MedecinComponent_div_18_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDossierModal());
    });
    \u0275\u0275text(20, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 58);
    \u0275\u0275listener("click", function MedecinComponent_div_18_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectPatient(ctx_r2.dossierPatient);
      ctx_r2.closeDossierModal();
      return \u0275\u0275resetView(ctx_r2.showPatientsPanel = false);
    });
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Ouvrir le dossier complet ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.dossierPatient == null ? null : ctx_r2.dossierPatient.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.dossierPatient == null ? null : ctx_r2.dossierPatient.age, " ans \xB7 ", ctx_r2.dossierPatient == null ? null : ctx_r2.dossierPatient.pathologie, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDossier);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDossier);
  }
}
function MedecinComponent_ng_container_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des patients... ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_27_div_2_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 71);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_27_div_2_tr_18_Template_tr_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.selectPatient(p_r11);
      return \u0275\u0275resetView(ctx_r2.showPatientsPanel = false);
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 72)(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 74);
    \u0275\u0275text(19, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r11.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.age > 0 ? p_r11.age + " ans" : "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.cin || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.groupeSanguin || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.pathologie || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.genre || "-");
  }
}
function MedecinComponent_ng_container_27_div_2_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 75)(2, "span", 76);
    \u0275\u0275text(3, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun patient trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_ng_container_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "table", 69)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\xC2ge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Pathologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, MedecinComponent_ng_container_27_div_2_tr_18_Template, 20, 7, "tr", 70)(19, MedecinComponent_ng_container_27_div_2_tr_19_Template, 5, 0, "tr", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.filteredDossierPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredDossierPatients.length === 0);
  }
}
function MedecinComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MedecinComponent_ng_container_27_div_1_Template, 4, 0, "div", 54)(2, MedecinComponent_ng_container_27_div_2_Template, 20, 2, "div", 67);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPatients);
  }
}
function MedecinComponent_ng_container_28_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 78)(1, "span", 17);
    \u0275\u0275text(2, "clinical_notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Selectionnez un patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Le dossier medical, les constantes saisies par l'infirmier et les ordonnances apparaitront ici.");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MedecinComponent_ng_container_28_section_1_Template, 7, 0, "section", 77);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedPatient);
  }
}
function MedecinComponent_ng_container_29_div_11_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.patientUnreadCount);
  }
}
function MedecinComponent_ng_container_29_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "button", 90);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("resume"));
    });
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Consulter patient");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 90);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_div_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("ordonnances"));
    });
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Ordonnances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 90);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_div_11_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("constantes"));
    });
    \u0275\u0275elementStart(14, "span", 17);
    \u0275\u0275text(15, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Instructions de patient");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 90);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_div_11_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("statistiques"));
    });
    \u0275\u0275elementStart(19, "span", 17);
    \u0275\u0275text(20, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Statistiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 91);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_div_11_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("alertes"));
    });
    \u0275\u0275elementStart(24, "span", 17);
    \u0275\u0275text(25, "notifications_active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Alertes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, MedecinComponent_ng_container_29_div_11_small_28_Template, 2, 1, "small", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "resume");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "ordonnances");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.ordonnances.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "constantes");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "statistiques");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "alertes");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.patientUnreadCount > 0);
  }
}
function MedecinComponent_ng_container_29_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du dossier... ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 17);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.detailError, " ");
  }
}
function MedecinComponent_ng_container_29_section_14_article_1_strong_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.latestConstantes.saisiePar.prenom, " ", ctx_r2.latestConstantes.saisiePar.nom, "");
  }
}
function MedecinComponent_ng_container_29_section_14_article_1_strong_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_14_article_1_p_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.latestConstantes.notes);
  }
}
function MedecinComponent_ng_container_29_section_14_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 97)(1, "div")(2, "span");
    \u0275\u0275text(3, "Derniere saisie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span");
    \u0275\u0275text(8, "Infirmier");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MedecinComponent_ng_container_29_section_14_article_1_strong_9_Template, 2, 2, "strong", 19)(10, MedecinComponent_ng_container_29_section_14_article_1_strong_10_Template, 2, 0, "strong", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 98)(12, "span")(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17, "mmHg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span")(19, "b");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "br");
    \u0275\u0275elementStart(22, "small");
    \u0275\u0275text(23, "bpm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span")(25, "b");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "br");
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "kg");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, MedecinComponent_ng_container_29_section_14_article_1_p_30_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.fmtDateTime(ctx_r2.latestConstantes.saisieAt));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.latestConstantes.saisiePar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.latestConstantes.saisiePar);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.latestConstantes.tensionSys, "/", ctx_r2.latestConstantes.tensionDia, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.latestConstantes.bpm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.latestConstantes.poids);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.latestConstantes.notes);
  }
}
function MedecinComponent_ng_container_29_section_14_div_2_tr_17_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const constante_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", constante_r13.saisiePar.prenom, " ", constante_r13.saisiePar.nom, "");
  }
}
function MedecinComponent_ng_container_29_section_14_div_2_tr_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_14_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, MedecinComponent_ng_container_29_section_14_div_2_tr_17_span_4_Template, 2, 2, "span", 19)(5, MedecinComponent_ng_container_29_section_14_div_2_tr_17_span_5_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const constante_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtDateTime(constante_r13.saisieAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", constante_r13.saisiePar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !constante_r13.saisiePar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", constante_r13.tensionSys, "/", constante_r13.tensionDia, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", constante_r13.bpm, " bpm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", constante_r13.poids, " kg");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(constante_r13.notes || "-");
  }
}
function MedecinComponent_ng_container_29_section_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Infirmier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Tension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Frequence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Notes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, MedecinComponent_ng_container_29_section_14_div_2_tr_17_Template, 14, 8, "tr", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.constantes);
  }
}
function MedecinComponent_ng_container_29_section_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 17);
    \u0275\u0275text(2, "sensors_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune constante vitale saisie pour ce patient. ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 94);
    \u0275\u0275template(1, MedecinComponent_ng_container_29_section_14_article_1_Template, 31, 8, "article", 95)(2, MedecinComponent_ng_container_29_section_14_div_2_Template, 18, 1, "div", 96)(3, MedecinComponent_ng_container_29_section_14_div_3_Template, 4, 0, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.latestConstantes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantes.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.latestConstantes);
  }
}
function MedecinComponent_ng_container_29_section_15_div_109_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_div_109_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.eprexDose, $event) || (ctx_r2.instructionsForm.eprexDose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.eprexDose);
  }
}
function MedecinComponent_ng_container_29_section_15_div_109_input_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_div_109_input_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.recormonDose, $event) || (ctx_r2.instructionsForm.recormonDose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.recormonDose);
  }
}
function MedecinComponent_ng_container_29_section_15_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 120)(2, "label", 121)(3, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_div_109_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.instructionsForm.eprex = !ctx_r2.instructionsForm.eprex;
      return \u0275\u0275resetView(ctx_r2.instructionsForm.recormon = ctx_r2.instructionsForm.eprex ? false : ctx_r2.instructionsForm.recormon);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Eprex");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MedecinComponent_ng_container_29_section_15_div_109_input_6_Template, 1, 1, "input", 135);
    \u0275\u0275elementStart(7, "label", 121)(8, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_div_109_Template_input_change_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.instructionsForm.recormon = !ctx_r2.instructionsForm.recormon;
      return \u0275\u0275resetView(ctx_r2.instructionsForm.eprex = ctx_r2.instructionsForm.recormon ? false : ctx_r2.instructionsForm.eprex);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Recormon");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, MedecinComponent_ng_container_29_section_15_div_109_input_11_Template, 1, 1, "input", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 136)(13, "label");
    \u0275\u0275text(14, "Frequence (/ semaine)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_div_109_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.epoFrequence, $event) || (ctx_r2.instructionsForm.epoFrequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.eprex);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.instructionsForm.eprex);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.recormon);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.instructionsForm.recormon);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.epoFrequence);
  }
}
function MedecinComponent_ng_container_29_section_15_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 120)(2, "span", 139);
    \u0275\u0275text(3, "Venofer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_div_115_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.venoferDose, $event) || (ctx_r2.instructionsForm.venoferDose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 136)(6, "label");
    \u0275\u0275text(7, "Frequence (/ semaine)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_div_115_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.ferIvFrequence, $event) || (ctx_r2.instructionsForm.ferIvFrequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.venoferDose);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.ferIvFrequence);
  }
}
function MedecinComponent_ng_container_29_section_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 101)(1, "article", 102)(2, "header", 103)(3, "span", 17);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Parametres dialyse ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 104)(7, "div", 105)(8, "label");
    \u0275\u0275text(9, "Poids sec (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.poidsSec, $event) || (ctx_r2.instructionsForm.poidsSec = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 105)(12, "label");
    \u0275\u0275text(13, "Taille (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.taille, $event) || (ctx_r2.instructionsForm.taille = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 105)(16, "label");
    \u0275\u0275text(17, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.groupeSanguin, $event) || (ctx_r2.instructionsForm.groupeSanguin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 109);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 110);
    \u0275\u0275text(22, "A+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 111);
    \u0275\u0275text(24, "A-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 112);
    \u0275\u0275text(26, "B+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 113);
    \u0275\u0275text(28, "B-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 114);
    \u0275\u0275text(30, "AB+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 115);
    \u0275\u0275text(32, "AB-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 116);
    \u0275\u0275text(34, "O+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 117);
    \u0275\u0275text(36, "O-");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 118)(38, "label", 119);
    \u0275\u0275text(39, "Abord vasculaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 120)(41, "label", 121)(42, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_42_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.abordVasculaire = ctx_r2.instructionsForm.abordVasculaire === "FAV" ? "" : "FAV");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "FAV");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "label", 121)(46, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_46_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.abordVasculaire = ctx_r2.instructionsForm.abordVasculaire === "Catheter" ? "" : "Catheter");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Catheter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "label", 121)(50, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_50_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.abordVasculaire = ctx_r2.instructionsForm.abordVasculaire === "Goretex" ? "" : "Goretex");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52, "Goretex");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 118)(54, "label", 119);
    \u0275\u0275text(55, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 120)(57, "label", 121)(58, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_58_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.localisation = ctx_r2.instructionsForm.localisation === "Bras G" ? "" : "Bras G");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Bras G");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "label", 121)(62, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_62_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.localisation = ctx_r2.instructionsForm.localisation === "Bras D" ? "" : "Bras D");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64, "Bras D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "label", 121)(66, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_66_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.localisation = ctx_r2.instructionsForm.localisation === "Jugulaire" ? "" : "Jugulaire");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "Jugulaire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 118)(70, "label", 119);
    \u0275\u0275text(71, "Type d'aiguilles habituel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 120)(73, "label", 121)(74, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_74_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.aiguilles = ctx_r2.instructionsForm.aiguilles === "15G" ? "" : "15G");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "15G");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "label", 121)(78, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_78_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.aiguilles = ctx_r2.instructionsForm.aiguilles === "16G" ? "" : "16G");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80, "16G");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "label", 121)(82, "input", 122);
    \u0275\u0275listener("change", function MedecinComponent_ng_container_29_section_15_Template_input_change_82_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm.aiguilles = ctx_r2.instructionsForm.aiguilles === "17G" ? "" : "17G");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84, "17G");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(85, "article", 102)(86, "header", 103)(87, "span", 17);
    \u0275\u0275text(88, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " Tensions de reference ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 104)(91, "div", 105)(92, "label");
    \u0275\u0275text(93, "TA Systolique cible (mmHg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.taSystolique, $event) || (ctx_r2.instructionsForm.taSystolique = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 105)(96, "label");
    \u0275\u0275text(97, "TA Diastolique cible (mmHg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_input_ngModelChange_98_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.taDiastolique, $event) || (ctx_r2.instructionsForm.taDiastolique = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(99, "article", 102)(100, "header", 103)(101, "span", 17);
    \u0275\u0275text(102, "biotech");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, " Traitement anemie ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 118)(105, "label", 125)(106, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_input_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.epoActif, $event) || (ctx_r2.instructionsForm.epoActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span");
    \u0275\u0275text(108, "EPO");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(109, MedecinComponent_ng_container_29_section_15_div_109_Template, 16, 5, "div", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 128)(111, "label", 125)(112, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_input_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.ferIvActif, $event) || (ctx_r2.instructionsForm.ferIvActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span");
    \u0275\u0275text(114, "FER IV");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(115, MedecinComponent_ng_container_29_section_15_div_115_Template, 9, 2, "div", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "article", 102)(117, "header", 103)(118, "span", 17);
    \u0275\u0275text(119, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, " Allergies / Remarques ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 129)(122, "label");
    \u0275\u0275text(123, "Allergies connues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "textarea", 130);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_15_Template_textarea_ngModelChange_124_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.allergies, $event) || (ctx_r2.instructionsForm.allergies = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 131)(126, "button", 132);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_section_15_Template_button_click_126_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveInstructions());
    });
    \u0275\u0275elementStart(127, "span", 17);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd();
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "button", 133);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_section_15_Template_button_click_130_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm = ctx_r2.emptyInstructionsFormPublic());
    });
    \u0275\u0275elementStart(131, "span", 17);
    \u0275\u0275text(132, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(133, " Reinitialiser ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.poidsSec);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.taille);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.groupeSanguin);
    \u0275\u0275advance(24);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.abordVasculaire === "FAV");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.abordVasculaire === "Catheter");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.abordVasculaire === "Goretex");
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.localisation === "Bras G");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.localisation === "Bras D");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.localisation === "Jugulaire");
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.aiguilles === "15G");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.aiguilles === "16G");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r2.instructionsForm.aiguilles === "17G");
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.taSystolique);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.taDiastolique);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.epoActif);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.instructionsForm.epoActif);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.ferIvActif);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.instructionsForm.ferIvActif);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.allergies);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isSavingInstructions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isSavingInstructions ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSavingInstructions ? "Enregistrement..." : "Enregistrer", " ");
  }
}
function MedecinComponent_ng_container_29_section_16_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147)(1, "button", 148);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_section_16_div_8_div_1_Template_button_click_1_listener() {
      const ordonnance_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openOrdonnance(ordonnance_r21));
    });
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 149)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 150);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_section_16_div_8_div_1_Template_button_click_11_listener() {
      const ordonnance_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.printOrdonnance(ordonnance_r21));
    });
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13, "print");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ordonnance_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Ordonnance #", ordonnance_r21.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.fmtDate(ordonnance_r21.dateEmission), " - ", ordonnance_r21.medicaments, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("pill pill--", ctx_r2.ordonnanceStatusTone(ordonnance_r21.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ordonnanceStatusLabel(ordonnance_r21.statut), " ");
  }
}
function MedecinComponent_ng_container_29_section_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275template(1, MedecinComponent_ng_container_29_section_16_div_8_div_1_Template, 14, 7, "div", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.ordonnances);
  }
}
function MedecinComponent_ng_container_29_section_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 17);
    \u0275\u0275text(2, "description_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune ordonnance pour ce patient. ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 94)(1, "div", 142)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 143);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_section_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("rediger"));
    });
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Nouvelle ordonnance ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MedecinComponent_ng_container_29_section_16_div_8_Template, 2, 1, "div", 144)(9, MedecinComponent_ng_container_29_section_16_div_9_Template, 4, 0, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.ordonnanceCountLabel);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.ordonnances.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.ordonnances.length);
  }
}
function MedecinComponent_ng_container_29_section_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 94)(1, "form", 151);
    \u0275\u0275listener("ngSubmit", function MedecinComponent_ng_container_29_section_17_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitOrdonnance());
    });
    \u0275\u0275elementStart(2, "header")(3, "span", 17);
    \u0275\u0275text(4, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7, "Rediger une ordonnance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "label", 152)(11, "span");
    \u0275\u0275text(12, "Medicaments *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 153);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_17_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.medicaments, $event) || (ctx_r2.ordonnanceForm.medicaments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 154)(15, "span");
    \u0275\u0275text(16, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_17_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.posologie, $event) || (ctx_r2.ordonnanceForm.posologie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 154)(19, "span");
    \u0275\u0275text(20, "Date d'expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_17_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.dateExpiration, $event) || (ctx_r2.ordonnanceForm.dateExpiration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 152)(23, "span");
    \u0275\u0275text(24, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 157);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_29_section_17_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.instructions, $event) || (ctx_r2.ordonnanceForm.instructions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "footer")(27, "button", 158)(28, "span", 17);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 133);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_section_17_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetOrdonnanceForm());
    });
    \u0275\u0275elementStart(32, "span", 17);
    \u0275\u0275text(33, "backspace");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Effacer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Patient: ", ctx_r2.selectedPatient.nomComplet, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.ordonnanceForm.medicaments);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.ordonnanceForm.posologie);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.ordonnanceForm.dateExpiration);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.ordonnanceForm.instructions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isSaving ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSaving ? "Enregistrement..." : "Enregistrer", " ");
  }
}
function MedecinComponent_ng_container_29_section_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Chargement des statistiques... ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "span", 17);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Alertes critiques");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.alertesCritiques);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "span", 17);
    \u0275\u0275text(2, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Alertes attention");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.alertesAttention);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "span", 17);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Ordonnances");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.ordonnances.length);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "span", 17);
    \u0275\u0275text(2, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Constantes saisies");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.constantes.length);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 17);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " S\xE9lectionnez un patient pour afficher ses graphiques. ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1__svg_path_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 182);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275attribute("d", ctx_r2.tensionSysPath);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1__svg_path_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 183);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275attribute("d", ctx_r2.tensionDiaPath);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1__svg_g_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "circle", 184)(2, "circle", 185);
    \u0275\u0275elementStart(3, "text", 186);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pt_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", pt_r23.x)("cy", pt_r23.ySys);
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", pt_r23.x)("cy", pt_r23.yDia);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", pt_r23.x)("y", pt_r23.ySys - 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pt_r23.sys);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 172)(2, "span", 17);
    \u0275\u0275text(3, "show_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 173);
    \u0275\u0275element(6, "span", 174);
    \u0275\u0275text(7, "Sys. ");
    \u0275\u0275element(8, "span", 175);
    \u0275\u0275text(9, "Dia. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 176);
    \u0275\u0275element(11, "line", 177)(12, "line", 178)(13, "line", 179);
    \u0275\u0275template(14, MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1__svg_path_14_Template, 1, 1, "path", 180)(15, MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1__svg_path_15_Template, 1, 1, "path", 181)(16, MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1__svg_g_16_Template, 5, 7, "g", 100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \xC9volution de la tension \u2014 ", ctx_r2.selectedPatient.nomComplet, " ");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.tensionSysPath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tensionDiaPath);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.tensionChartPoints);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190);
    \u0275\u0275element(2, "div", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 192)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bar_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r24.pct * 100, "%")("background", bar_r24.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bar_r24.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", bar_r24.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bar_r24.count);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 172)(2, "span", 17);
    \u0275\u0275text(3, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 187);
    \u0275\u0275template(6, MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_2_div_6_Template, 8, 8, "div", 188);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" R\xE9partition des ordonnances \u2014 ", ctx_r2.selectedPatient.nomComplet, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.ordonnancesBarChart);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_1_Template, 17, 4, "div", 170)(2, MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_div_2_Template, 7, 2, "div", 170);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantes.length >= 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ordonnances.length);
  }
}
function MedecinComponent_ng_container_29_section_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 160)(2, "div", 161)(3, "span", 17);
    \u0275\u0275text(4, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Patients");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, MedecinComponent_ng_container_29_section_18_ng_container_2_div_10_Template, 8, 1, "div", 162)(11, MedecinComponent_ng_container_29_section_18_ng_container_2_div_11_Template, 8, 1, "div", 163)(12, MedecinComponent_ng_container_29_section_18_ng_container_2_div_12_Template, 8, 1, "div", 164)(13, MedecinComponent_ng_container_29_section_18_ng_container_2_div_13_Template, 8, 1, "div", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MedecinComponent_ng_container_29_section_18_ng_container_2_div_14_Template, 4, 0, "div", 54)(15, MedecinComponent_ng_container_29_section_18_ng_container_2_ng_container_15_Template, 3, 2, "ng-container", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.patients.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.alertesCritiques > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.alertesAttention > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedPatient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient);
  }
}
function MedecinComponent_ng_container_29_section_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 159);
    \u0275\u0275template(1, MedecinComponent_ng_container_29_section_18_div_1_Template, 4, 0, "div", 54)(2, MedecinComponent_ng_container_29_section_18_ng_container_2_Template, 16, 7, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingStats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingStats);
  }
}
function MedecinComponent_ng_container_29_section_19_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 197);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.patientUnreadCount, " active", ctx_r2.patientUnreadCount > 1 ? "s" : "", " ");
  }
}
function MedecinComponent_ng_container_29_section_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 198)(1, "span", 17);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune alerte pour ce patient.");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_ng_container_29_section_19_div_8_div_1_span_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r25 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 par ", a_r25.traitePar, "");
  }
}
function MedecinComponent_ng_container_29_section_19_div_8_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 208)(1, "span", 17);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, MedecinComponent_ng_container_29_section_19_div_8_div_1_span_9_ng_container_4_Template, 2, 1, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Trait\xE9 ", ctx_r2.alerteTimeLabel(a_r25.dateTraitement), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r25.traitePar);
  }
}
function MedecinComponent_ng_container_29_section_19_div_8_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 209);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_29_section_19_div_8_div_1_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r26);
      const a_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.traiterAlerte(a_r25, $event));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Traiter l'alerte ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_19_div_8_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 210)(1, "span", 17);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Trait\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_29_section_19_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 201)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 202)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 203);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MedecinComponent_ng_container_29_section_19_div_8_div_1_span_9_Template, 5, 2, "span", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 205);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MedecinComponent_ng_container_29_section_19_div_8_div_1_button_12_Template, 4, 0, "button", 206)(13, MedecinComponent_ng_container_29_section_19_div_8_div_1_span_13_Template, 4, 0, "span", 207);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r25 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap("alerte-card " + ctx_r2.alerteTypeClass(a_r25.type) + (a_r25.traitee ? " alerte-card--traitee" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.alerteTypeIcon(a_r25.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r25.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alerteTimeLabel(a_r25.dateCreation));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r25.traitee && a_r25.dateTraitement);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r25.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r25.traitee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r25.traitee);
  }
}
function MedecinComponent_ng_container_29_section_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275template(1, MedecinComponent_ng_container_29_section_19_div_8_div_1_Template, 14, 9, "div", 200);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.patientAlertes);
  }
}
function MedecinComponent_ng_container_29_section_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 94)(1, "div", 193)(2, "span", 17);
    \u0275\u0275text(3, "notifications_active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MedecinComponent_ng_container_29_section_19_span_6_Template, 2, 2, "span", 194);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MedecinComponent_ng_container_29_section_19_div_7_Template, 5, 0, "div", 195)(8, MedecinComponent_ng_container_29_section_19_div_8_Template, 2, 1, "div", 196);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Alertes de ", ctx_r2.selectedPatient == null ? null : ctx_r2.selectedPatient.nomComplet, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.patientUnreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.patientAlertes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.patientAlertes.length > 0);
  }
}
function MedecinComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 79)(2, "div", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 81)(5, "div", 82);
    \u0275\u0275text(6, "Dossier patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, MedecinComponent_ng_container_29_div_11_Template, 29, 12, "div", 83)(12, MedecinComponent_ng_container_29_div_12_Template, 4, 0, "div", 84)(13, MedecinComponent_ng_container_29_div_13_Template, 4, 1, "div", 85)(14, MedecinComponent_ng_container_29_section_14_Template, 4, 3, "section", 86)(15, MedecinComponent_ng_container_29_section_15_Template, 134, 22, "section", 87)(16, MedecinComponent_ng_container_29_section_16_Template, 10, 3, "section", 86)(17, MedecinComponent_ng_container_29_section_17_Template, 35, 8, "section", 86)(18, MedecinComponent_ng_container_29_section_18_Template, 3, 2, "section", 88)(19, MedecinComponent_ng_container_29_section_19_Template, 9, 4, "section", 86);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.initials);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r2.selectedPatient.age, " ans - CIN ", ctx_r2.selectedPatient.cin || "-", " - Groupe ", ctx_r2.selectedPatient.groupeSanguin || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.detailError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "resume");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "constantes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "ordonnances");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "rediger");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "statistiques");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "alertes");
  }
}
function MedecinComponent_div_30_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "label");
    \u0275\u0275text(2, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedOrdonnance.posologie);
  }
}
function MedecinComponent_div_30_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 219);
    \u0275\u0275listener("click", function MedecinComponent_div_30_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editInstructions());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Modifier ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_30_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedOrdonnance.instructions || "Aucune instruction renseignee.");
  }
}
function MedecinComponent_div_30_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 220)(1, "textarea", 221);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_30_div_27_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionDraft, $event) || (ctx_r2.instructionDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 222)(3, "button", 132);
    \u0275\u0275listener("click", function MedecinComponent_div_30_div_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveOrdonnanceInstructions());
    });
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 223);
    \u0275\u0275listener("click", function MedecinComponent_div_30_div_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelEditInstructions());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionDraft);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isUpdatingInstructions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isUpdatingInstructions ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isUpdatingInstructions ? "Sauvegarde..." : "Sauvegarder", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isUpdatingInstructions);
  }
}
function MedecinComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 211);
    \u0275\u0275listener("click", function MedecinComponent_div_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrdonnance());
    });
    \u0275\u0275elementStart(1, "article", 212);
    \u0275\u0275listener("click", function MedecinComponent_div_30_Template_article_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header")(3, "div")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 213)(9, "button", 214);
    \u0275\u0275listener("click", function MedecinComponent_div_30_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.printOrdonnance(ctx_r2.selectedOrdonnance));
    });
    \u0275\u0275elementStart(10, "span", 17);
    \u0275\u0275text(11, "print");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 215);
    \u0275\u0275listener("click", function MedecinComponent_div_30_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrdonnance());
    });
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "section")(16, "label");
    \u0275\u0275text(17, "Medicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, MedecinComponent_div_30_section_20_Template, 5, 1, "section", 19);
    \u0275\u0275elementStart(21, "section")(22, "div", 216)(23, "label");
    \u0275\u0275text(24, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, MedecinComponent_div_30_button_25_Template, 4, 0, "button", 217);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, MedecinComponent_div_30_p_26_Template, 2, 1, "p", 19)(27, MedecinComponent_div_30_div_27_Template, 9, 5, "div", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "footer")(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ordonnance #", ctx_r2.selectedOrdonnance.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.selectedOrdonnance.dateEmission));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.selectedOrdonnance.medicaments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedOrdonnance.posologie);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r2.isEditingInstructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isEditingInstructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEditingInstructions);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("pill pill--", ctx_r2.ordonnanceStatusTone(ctx_r2.selectedOrdonnance.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ordonnanceStatusLabel(ctx_r2.selectedOrdonnance.statut), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Expiration: ", ctx_r2.fmtDate(ctx_r2.selectedOrdonnance.dateExpiration), "");
  }
}
var MedecinComponent = class _MedecinComponent {
  patientService;
  ordonnanceService;
  constantesService;
  dossierService;
  instructionsService;
  authService;
  alerteService;
  isLight = false;
  isLoadingPatients = true;
  isLoadingDetails = false;
  isSaving = false;
  loadError = "";
  detailError = "";
  searchQuery = "";
  activeTab = "resume";
  // Sidebar nav
  showPatientsPanel = true;
  dossierSearchQuery = "";
  // Dossier modal
  showDossierModal = false;
  dossierPatient = null;
  dossierData = null;
  isLoadingDossier = false;
  modalTab = "resume";
  modalOrdonnances = [];
  modalConstantes = [];
  patients = [];
  selectedPatient = null;
  ordonnances = [];
  constantes = [];
  selectedOrdonnance = null;
  isEditingInstructions = false;
  isUpdatingInstructions = false;
  instructionDraft = "";
  ordonnanceForm = this.emptyOrdonnanceForm();
  instructionsForm = this.emptyInstructionsForm();
  isSavingInstructions = false;
  toasts = [];
  toastId = 0;
  // Stats
  alertesCritiques = 0;
  alertesAttention = 0;
  isLoadingStats = false;
  // Notification panel
  notifOpen = false;
  allAlertes = [];
  patientAlertes = [];
  isLoadingNotif = false;
  alertInterval = null;
  constructor(patientService, ordonnanceService, constantesService, dossierService, instructionsService, authService, alerteService) {
    this.patientService = patientService;
    this.ordonnanceService = ordonnanceService;
    this.constantesService = constantesService;
    this.dossierService = dossierService;
    this.instructionsService = instructionsService;
    this.authService = authService;
    this.alerteService = alerteService;
  }
  ngOnInit() {
    this.loadPatients();
    this.loadAllAlertes();
    this.alertInterval = setInterval(() => this.loadAllAlertes(), 6e4);
  }
  ngOnDestroy() {
    if (this.alertInterval)
      clearInterval(this.alertInterval);
  }
  get currentUser() {
    return this.authService.getUtilisateur();
  }
  get currentUserInitials() {
    const user = this.currentUser;
    return `${user?.prenom?.[0] ?? ""}${user?.nom?.[0] ?? ""}`.toUpperCase();
  }
  get filteredPatients() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query)
      return this.patients;
    return this.patients.filter((patient) => patient.nomComplet.toLowerCase().includes(query) || (patient.cin ?? "").toLowerCase().includes(query) || patient.pathologie.toLowerCase().includes(query));
  }
  get latestConstantes() {
    return this.constantes[0] ?? null;
  }
  get ordonnanceCountLabel() {
    return `${this.ordonnances.length} ordonnance${this.ordonnances.length > 1 ? "s" : ""}`;
  }
  loadPatients() {
    this.isLoadingPatients = true;
    this.loadError = "";
    this.patientService.invalidateCache();
    this.patientService.getAll().subscribe({
      next: (patients) => {
        this.patients = patients.map((patient) => this.toPatientVM(patient));
        this.isLoadingPatients = false;
        if (patients.length === 0) {
          this.loadError = "Aucun patient enregistr\xE9 dans le syst\xE8me.";
        }
      },
      error: (err) => {
        if (err?.status === 401 || err?.status === 403) {
          this.loadError = "Session expir\xE9e. Veuillez vous reconnecter.";
        } else if (err?.status === 0) {
          this.loadError = "Serveur inaccessible. V\xE9rifiez votre connexion ou r\xE9essayez dans quelques secondes.";
        } else {
          this.loadError = "Impossible de charger la liste des patients.";
        }
        this.isLoadingPatients = false;
      }
    });
  }
  selectPatient(patient) {
    this.selectedPatient = patient;
    this.activeTab = "resume";
    this.detailError = "";
    this.selectedOrdonnance = null;
    this.ordonnances = [];
    this.constantes = [];
    this.patientAlertes = [];
    this.ordonnanceForm = this.emptyOrdonnanceForm();
    this.instructionsForm = this.toInstructionsForm(null, patient.groupeSanguin);
    this.isLoadingDetails = true;
    this.loadPatientAlertes(patient.id);
    forkJoin({
      ordonnances: this.ordonnanceService.getByPatient(patient.id).pipe(catchError(() => of([]))),
      constantes: this.constantesService.getByPatient(patient.id).pipe(catchError(() => of([]))),
      dossier: this.dossierService.getByPatient(patient.id).pipe(catchError(() => of(null))),
      instructions: this.instructionsService.getByPatient(patient.id).pipe(catchError(() => of(null)))
    }).subscribe({
      next: ({ ordonnances, constantes, dossier, instructions }) => {
        this.updateSelectedPatientDossier(dossier);
        this.instructionsForm = this.toInstructionsForm(instructions, this.selectedPatient?.groupeSanguin ?? patient.groupeSanguin);
        this.ordonnances = this.sortOrdonnances(ordonnances);
        this.constantes = this.sortConstantes(constantes);
        this.isLoadingDetails = false;
      },
      error: (err) => {
        this.detailError = err?.status === 401 || err?.status === 403 ? "Acces refuse. Veuillez vous reconnecter avec un compte autorise." : "Impossible de charger les donnees de ce patient.";
        this.isLoadingDetails = false;
      }
    });
  }
  setTab(tab) {
    this.activeTab = tab;
    if (tab === "statistiques")
      this.loadStats();
    if (tab === "alertes")
      this.markPatientAlertesAsRead();
  }
  get filteredDossierPatients() {
    const q = this.dossierSearchQuery.trim().toLowerCase();
    if (!q)
      return this.patients;
    return this.patients.filter((p) => p.nomComplet.toLowerCase().includes(q) || (p.cin ?? "").toLowerCase().includes(q) || p.pathologie.toLowerCase().includes(q));
  }
  openDossierModal(patient) {
    this.dossierPatient = patient;
    this.dossierData = null;
    this.modalOrdonnances = [];
    this.modalConstantes = [];
    this.modalTab = "resume";
    this.showDossierModal = true;
    this.isLoadingDossier = true;
    forkJoin({
      dossier: this.dossierService.getByPatient(patient.id).pipe(catchError(() => of(null))),
      ordonnances: this.ordonnanceService.getByPatient(patient.id).pipe(catchError(() => of([]))),
      constantes: this.constantesService.getByPatient(patient.id).pipe(catchError(() => of([])))
    }).subscribe(({ dossier, ordonnances, constantes }) => {
      this.dossierData = dossier;
      this.modalOrdonnances = this.sortOrdonnances(ordonnances);
      this.modalConstantes = this.sortConstantes(constantes);
      this.isLoadingDossier = false;
    });
  }
  closeDossierModal() {
    this.showDossierModal = false;
    this.dossierPatient = null;
    this.dossierData = null;
    this.modalOrdonnances = [];
    this.modalConstantes = [];
  }
  openOrdonnance(ordonnance) {
    this.selectedOrdonnance = ordonnance;
    this.isEditingInstructions = false;
    this.instructionDraft = ordonnance.instructions ?? "";
  }
  closeOrdonnance() {
    this.selectedOrdonnance = null;
    this.isEditingInstructions = false;
    this.isUpdatingInstructions = false;
    this.instructionDraft = "";
  }
  editInstructions() {
    if (!this.selectedOrdonnance)
      return;
    this.instructionDraft = this.selectedOrdonnance.instructions ?? "";
    this.isEditingInstructions = true;
  }
  cancelEditInstructions() {
    this.instructionDraft = this.selectedOrdonnance?.instructions ?? "";
    this.isEditingInstructions = false;
  }
  saveOrdonnanceInstructions() {
    if (!this.selectedOrdonnance || this.isUpdatingInstructions)
      return;
    const instructions = this.instructionDraft.trim() || null;
    this.isUpdatingInstructions = true;
    this.ordonnanceService.update(this.selectedOrdonnance.id, { instructions }).subscribe({
      next: (updated) => {
        this.selectedOrdonnance = updated;
        this.ordonnances = this.sortOrdonnances(this.ordonnances.map((ordonnance) => ordonnance.id === updated.id ? updated : ordonnance));
        this.instructionDraft = updated.instructions ?? "";
        this.isEditingInstructions = false;
        this.isUpdatingInstructions = false;
        this.showToast("Instructions modifiees avec succes.", "success");
      },
      error: () => {
        this.isUpdatingInstructions = false;
        this.showToast("Les instructions n'ont pas pu etre modifiees.", "error");
      }
    });
  }
  submitOrdonnance() {
    if (!this.selectedPatient || this.isSaving)
      return;
    if (!this.ordonnanceForm.medicaments.trim()) {
      this.showToast("Le champ medicaments est obligatoire.", "warning");
      return;
    }
    const utilisateurId = this.authService.utilisateurId;
    if (!utilisateurId) {
      this.showToast("Session medecin introuvable. Reconnectez-vous.", "error");
      return;
    }
    const payload = {
      patientId: this.selectedPatient.id,
      utilisateurId,
      dossierPatientId: this.selectedPatient.dossierPatient?.id ?? null,
      medicaments: this.ordonnanceForm.medicaments.trim(),
      posologie: this.ordonnanceForm.posologie.trim(),
      instructions: this.ordonnanceForm.instructions.trim() || null,
      dateEmission: todayIso(),
      dateExpiration: this.ordonnanceForm.dateExpiration || null,
      statut: "EN_ATTENTE"
    };
    this.isSaving = true;
    this.ordonnanceService.create(payload).subscribe({
      next: (ordonnance) => {
        this.ordonnances = this.sortOrdonnances([ordonnance, ...this.ordonnances]);
        this.ordonnanceForm = this.emptyOrdonnanceForm();
        this.activeTab = "ordonnances";
        this.isSaving = false;
        this.showToast("Ordonnance enregistree avec succes.", "success");
      },
      error: () => {
        this.isSaving = false;
        this.showToast("L'ordonnance n'a pas pu etre enregistree.", "error");
      }
    });
  }
  resetOrdonnanceForm() {
    this.ordonnanceForm = this.emptyOrdonnanceForm();
  }
  saveInstructions() {
    if (!this.selectedPatient || this.isSavingInstructions)
      return;
    const f = this.instructionsForm;
    const s = (v) => String(v ?? "").trim();
    const payload = {
      poidsSec: s(f.poidsSec),
      taille: s(f.taille),
      groupeSanguin: s(f.groupeSanguin),
      abordVasculaire: s(f.abordVasculaire),
      localisationAbord: s(f.localisation),
      aiguilles: s(f.aiguilles),
      taSystoliqueCible: s(f.taSystolique),
      taDiastoliqueCible: s(f.taDiastolique),
      epoActif: f.epoActif,
      eprex: f.eprex,
      eprexDose: s(f.eprexDose),
      recormon: f.recormon,
      recormonDose: s(f.recormonDose),
      epoFrequence: s(f.epoFrequence),
      ferIvActif: f.ferIvActif,
      venoferDose: s(f.venoferDose),
      ferIvFrequence: s(f.ferIvFrequence),
      allergies: s(f.allergies)
    };
    this.isSavingInstructions = true;
    this.instructionsService.saveForPatient(this.selectedPatient.id, payload).subscribe({
      next: (instructions) => {
        const groupeSanguin = instructions.groupeSanguin ?? f.groupeSanguin;
        if (this.selectedPatient) {
          this.updateSelectedPatient(__spreadProps(__spreadValues({}, this.selectedPatient), { groupeSanguin }));
        }
        this.instructionsForm = this.toInstructionsForm(instructions, groupeSanguin);
        this.isSavingInstructions = false;
        this.showToast("Instructions sauvegardees.", "success");
      },
      error: () => {
        this.isSavingInstructions = false;
        this.showToast("Erreur lors de la sauvegarde.", "error");
      }
    });
  }
  toInstructionsForm(instructions, groupeSanguin) {
    const abord = instructions?.abordVasculaire ?? "";
    const localisation = instructions?.localisationAbord ?? "";
    const aiguilles = instructions?.aiguilles ?? "";
    return __spreadProps(__spreadValues({}, this.emptyInstructionsForm()), {
      poidsSec: instructions?.poidsSec ?? "",
      taille: instructions?.taille ?? "",
      groupeSanguin: instructions?.groupeSanguin ?? groupeSanguin ?? "",
      abordVasculaire: abord,
      localisation,
      aiguilles,
      taSystolique: instructions?.taSystoliqueCible ?? "",
      taDiastolique: instructions?.taDiastoliqueCible ?? "",
      epoActif: instructions?.epoActif ?? false,
      eprex: instructions?.eprex ?? false,
      eprexDose: instructions?.eprexDose ?? "",
      recormon: instructions?.recormon ?? false,
      recormonDose: instructions?.recormonDose ?? "",
      epoFrequence: instructions?.epoFrequence ?? "",
      ferIvActif: instructions?.ferIvActif ?? false,
      venoferDose: instructions?.venoferDose ?? "",
      ferIvFrequence: instructions?.ferIvFrequence ?? "",
      allergies: instructions?.allergies ?? ""
    });
  }
  updateSelectedPatientDossier(dossier) {
    if (!this.selectedPatient || !dossier)
      return;
    const updated = this.toPatientVM(__spreadProps(__spreadValues({}, this.selectedPatient), { dossierPatient: dossier }));
    this.updateSelectedPatient(updated);
  }
  updateSelectedPatient(patient) {
    const updated = this.toPatientVM(patient);
    this.selectedPatient = updated;
    this.patients = this.patients.map((item) => item.id === updated.id ? updated : item);
  }
  // ── Statistics tab ──────────────────────────────────────────────────────────
  loadStats() {
    if (this.isLoadingStats)
      return;
    this.isLoadingStats = true;
    this.alerteService.getMesAlertes(this.currentUser?.login ?? "").pipe(catchError(() => of([]))).subscribe((alertes) => {
      this.alertesCritiques = alertes.filter((a) => !a.lue && a.type === "CRITIQUE").length;
      this.alertesAttention = alertes.filter((a) => !a.lue && (a.type === "ATTENTION" || a.type === "IMPORTANT")).length;
      this.isLoadingStats = false;
    });
  }
  // ── Notification panel ───────────────────────────────────────────────────────
  loadAllAlertes() {
    this.isLoadingNotif = true;
    const username = this.currentUser?.login ?? "";
    (username ? this.alerteService.getMesAlertes(username) : this.alerteService.getAll()).pipe(catchError(() => of([]))).subscribe((list) => {
      this.allAlertes = list.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
      this.isLoadingNotif = false;
    });
  }
  loadPatientAlertes(patientId) {
    this.alerteService.getByPatient(patientId).pipe(catchError(() => of([]))).subscribe((list) => {
      this.patientAlertes = list.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
    });
  }
  openPatientFromNotif(alerte) {
    this.notifOpen = false;
    const p = this.patients.find((x) => x.id === alerte.patient?.id);
    if (p) {
      this.showPatientsPanel = false;
      this.selectPatient(p);
      setTimeout(() => this.setTab("alertes"), 200);
    }
  }
  markPatientAlertesAsRead() {
    const unread = this.patientAlertes.filter((a) => !a.lue);
    unread.forEach((a) => {
      this.alerteService.marquerLue(a.id).pipe(catchError(() => of(null))).subscribe((updated) => {
        if (updated) {
          a.lue = true;
          const g = this.allAlertes.find((x) => x.id === a.id);
          if (g)
            g.lue = true;
        }
      });
    });
  }
  traiterAlerte(alerte, event) {
    event.stopPropagation();
    this.alerteService.traiter(alerte.id).pipe(catchError(() => of(null))).subscribe((updated) => {
      if (updated) {
        alerte.traitee = true;
        alerte.dateTraitement = updated.dateTraitement;
        alerte.traitePar = updated.traitePar;
        alerte.lue = true;
        const g = this.allAlertes.find((x) => x.id === alerte.id);
        if (g) {
          g.traitee = true;
          g.lue = true;
          g.dateTraitement = updated.dateTraitement;
        }
      }
    });
  }
  get activeAlertes() {
    return this.allAlertes.filter((a) => !a.traitee);
  }
  get activePatientAlertes() {
    return this.patientAlertes.filter((a) => !a.traitee);
  }
  get unreadCount() {
    return this.allAlertes.filter((a) => !a.traitee).length;
  }
  get patientUnreadCount() {
    return this.patientAlertes.filter((a) => !a.traitee).length;
  }
  alerteTypeClass(type) {
    return {
      CRITIQUE: "alerte--critique",
      IMPORTANT: "alerte--important",
      ATTENTION: "alerte--important",
      TENDANCE: "alerte--tendance",
      SEANCE: "alerte--seance",
      INFO: "alerte--info"
    }[type] ?? "alerte--info";
  }
  alerteTypeIcon(type) {
    return {
      CRITIQUE: "emergency",
      IMPORTANT: "warning_amber",
      ATTENTION: "warning_amber",
      TENDANCE: "trending_up",
      SEANCE: "schedule",
      INFO: "info"
    }[type] ?? "info";
  }
  alerteTimeLabel(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime()))
      return "";
    return d.toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  }
  get ordonnancesActives() {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return this.ordonnances.filter((o) => o.statut === "VALIDEE" || o.statut === "EN_ATTENTE" && (!o.dateExpiration || o.dateExpiration >= today)).length;
  }
  get ordonnancesExpirees() {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return this.ordonnances.filter((o) => o.dateExpiration && o.dateExpiration < today).length;
  }
  get tensionChartPoints() {
    const pts = [...this.constantes].reverse().slice(0, 10);
    if (pts.length < 1)
      return [];
    const maxSys = Math.max(...pts.map((c) => c.tensionSys ?? 0), 180);
    const minDia = Math.min(...pts.map((c) => c.tensionDia ?? 0), 50);
    const range = Math.max(maxSys - minDia, 60);
    return pts.map((c, i) => ({
      x: pts.length === 1 ? 140 : i * (280 / (pts.length - 1)) + 10,
      ySys: 100 - ((c.tensionSys ?? 0) - minDia) / range * 80,
      yDia: 100 - ((c.tensionDia ?? 0) - minDia) / range * 80,
      sys: c.tensionSys ?? 0,
      dia: c.tensionDia ?? 0
    }));
  }
  get tensionSysPath() {
    const pts = this.tensionChartPoints;
    if (pts.length < 2)
      return "";
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.ySys.toFixed(1)}`).join(" ");
  }
  get tensionDiaPath() {
    const pts = this.tensionChartPoints;
    if (pts.length < 2)
      return "";
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.yDia.toFixed(1)}`).join(" ");
  }
  get ordonnancesBarChart() {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const items = [
      { label: "En attente", count: this.ordonnances.filter((o) => o.statut === "EN_ATTENTE").length, color: "#f59e0b" },
      { label: "Valid\xE9es", count: this.ordonnances.filter((o) => o.statut === "VALIDEE").length, color: "#22c55e" },
      { label: "Annul\xE9es", count: this.ordonnances.filter((o) => o.statut === "ANNULEE").length, color: "#ef4444" },
      { label: "Expir\xE9es", count: this.ordonnancesExpirees, color: "#94a3b8" }
    ];
    const max = Math.max(...items.map((i) => i.count), 1);
    return items.map((i) => __spreadProps(__spreadValues({}, i), { pct: i.count / max }));
  }
  // ── Print ordonnance ─────────────────────────────────────────────────────────
  printOrdonnance(ord) {
    const patient = this.selectedPatient;
    const doctor = this.currentUser;
    if (!patient)
      return;
    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Ordonnance \u2014 ${patient.nomComplet}</title>
<style>
@page { margin: 15mm 20mm; size: A4 portrait; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Georgia, 'Times New Roman', serif; color: #1a202c; font-size: 13px; line-height: 1.6; background: #fff; }
.header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 14px; border-bottom: 2px solid #00857a; margin-bottom: 22px; }
.center-name { font-size: 17px; font-weight: bold; color: #00857a; }
.center-sub { font-size: 11px; color: #718096; margin-top: 3px; }
.doc-info { text-align: right; font-size: 11px; color: #4a5568; }
.doc-name { font-weight: bold; font-size: 14px; color: #1a202c; }
.title { text-align: center; margin: 18px 0 16px; font-size: 20px; font-weight: bold; letter-spacing: 4px; text-transform: uppercase; color: #00857a; }
.patient-box { background: #f0fff4; border-left: 4px solid #00857a; padding: 12px 16px; margin-bottom: 22px; border-radius: 0 6px 6px 0; }
.patient-name { font-size: 15px; font-weight: bold; color: #1a202c; }
.patient-meta { display: flex; gap: 18px; margin-top: 5px; font-size: 11px; color: #718096; }
.rx-block { border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 14px; }
.rx-symbol { font-size: 22px; font-weight: bold; color: #00857a; float: left; margin-right: 10px; line-height: 1; }
.rx-label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: .5px; color: #718096; margin-bottom: 6px; }
.rx-text { font-size: 14px; white-space: pre-wrap; color: #1a202c; clear: both; }
.posologie { font-size: 12px; color: #4a5568; font-style: italic; margin-top: 8px; }
.instructions { background: #fffbeb; border-left: 3px solid #f59e0b; padding: 12px 16px; margin-top: 12px; font-size: 12px; border-radius: 0 4px 4px 0; }
.instr-title { font-weight: bold; color: #92400e; margin-bottom: 4px; font-size: 11px; text-transform: uppercase; }
.footer { margin-top: 48px; display: flex; justify-content: space-between; align-items: flex-end; }
.stamp { width: 90px; height: 90px; border: 2px dashed #cbd5e0; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 9px; color: #a0aec0; line-height: 1.3; }
.signature-box { text-align: center; }
.signature-line { border-top: 1px solid #1a202c; width: 200px; margin: 0 auto; padding-top: 6px; font-size: 11px; color: #4a5568; }
.print-info { text-align: right; font-size: 10px; color: #a0aec0; margin-top: 10px; }
.status-badge { display: inline-block; padding: 2px 10px; border-radius: 10px; font-size: 10px; font-weight: bold; background: #e6f7f5; color: #00857a; margin-left: 8px; }
</style>
</head>
<body>
<div class="header">
  <div>
    <div class="center-name">Centre d'H\xE9modialyse \u2014 DialySys</div>
    <div class="center-sub">Service de N\xE9phrologie &nbsp;\xB7&nbsp; Unit\xE9 d'H\xE9modialyse</div>
  </div>
  <div class="doc-info">
    <div class="doc-name">Dr. ${this.escHtml(doctor?.prenom ?? "")} ${this.escHtml(doctor?.nom ?? "")}</div>
    <div>M\xE9decin N\xE9phrologue</div>
  </div>
</div>

<div class="title">Ordonnance M\xE9dicale</div>

<div class="patient-box">
  <div class="patient-name">${this.escHtml(patient.nomComplet)}<span class="status-badge">${this.ordonnanceStatusLabel(ord.statut)}</span></div>
  <div class="patient-meta">
    <span>\xC2ge&nbsp;: ${patient.age} ans</span>
    <span>CIN&nbsp;: ${this.escHtml(patient.cin ?? "N/A")}</span>
    <span>Groupe sanguin&nbsp;: ${this.escHtml(patient.groupeSanguin ?? "N/A")}</span>
    <span>Date \xE9mission&nbsp;: ${this.fmtDate(ord.dateEmission)}</span>
    ${ord.dateExpiration ? `<span>Expire le&nbsp;: ${this.fmtDate(ord.dateExpiration)}</span>` : ""}
  </div>
</div>

<div class="rx-block">
  <div class="rx-symbol">Rx</div>
  <div class="rx-label">M\xE9dicaments &amp; Traitements</div>
  <div class="rx-text">${this.escHtml(ord.medicaments)}</div>
  ${ord.posologie ? `<div class="posologie">Posologie&nbsp;: ${this.escHtml(ord.posologie)}</div>` : ""}
</div>

${ord.instructions ? `<div class="instructions"><div class="instr-title">Instructions sp\xE9cifiques</div>${this.escHtml(ord.instructions).replace(/\n/g, "<br>")}</div>` : ""}

<div class="footer">
  <div class="stamp">Cachet<br>du<br>m\xE9decin</div>
  <div class="signature-box">
    <div class="signature-line">Dr. ${this.escHtml(doctor?.prenom ?? "")} ${this.escHtml(doctor?.nom ?? "")}</div>
    <div style="font-size:10px;color:#a0aec0;margin-top:4px">M\xE9decin N\xE9phrologue \u2014 DialySys</div>
  </div>
</div>

<div class="print-info">Imprim\xE9 le ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")} \xE0 ${(/* @__PURE__ */ new Date()).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} &nbsp;\xB7&nbsp; DialySys</div>
</body>
</html>`;
    const w = window.open("", "_blank", "width=794,height=1123,toolbar=0,menubar=0,scrollbars=1");
    if (!w) {
      this.showToast("Autorisez les popups pour imprimer.", "warning");
      return;
    }
    w.document.open();
    w.document.write(html);
    w.document.close();
    setTimeout(() => {
      w.focus();
      w.print();
    }, 700);
  }
  escHtml(value) {
    return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  toggleTheme() {
    this.isLight = !this.isLight;
    if (this.isLight) {
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
    }
  }
  logout() {
    this.authService.logout();
  }
  fmtDate(value) {
    return value ? formatDateFr(value) : "-";
  }
  fmtDateTime(value) {
    if (!value)
      return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return "-";
    return date.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  ordonnanceStatusLabel(statut) {
    const labels = {
      EN_ATTENTE: "En attente",
      VALIDEE: "Validee",
      ANNULEE: "Annulee"
    };
    return labels[statut] ?? statut;
  }
  ordonnanceStatusTone(statut) {
    const tones = {
      EN_ATTENTE: "warning",
      VALIDEE: "stable",
      ANNULEE: "critical"
    };
    return tones[statut] ?? "neutral";
  }
  removeToast(id) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }
  toastIcon(type) {
    return {
      success: "check_circle",
      warning: "warning",
      info: "info",
      error: "error"
    }[type];
  }
  toPatientVM(patient) {
    const dossier = patient.dossierPatient;
    return __spreadProps(__spreadValues({}, patient), {
      age: this.calculateAge(patient.dateNaissance),
      initials: `${patient.prenom?.[0] ?? ""}${patient.nom?.[0] ?? ""}`.toUpperCase(),
      nomComplet: `${patient.prenom ?? ""} ${patient.nom ?? ""}`.trim(),
      pathologie: dossier?.pathologie || "Non renseignee",
      debutDialyse: dossier?.debutDialyse ? formatDateFr(dossier.debutDialyse) : "-",
      poidsDossier: this.withUnit(dossier?.poids, "kg"),
      tensionDossier: dossier?.tensionArterielle || "-",
      frequenceDossier: this.withUnit(dossier?.frequenceCardiaque, "bpm"),
      saturationDossier: this.withUnit(dossier?.saturation, "%"),
      temperatureDossier: this.withUnit(dossier?.temperature, "C"),
      creatinine: this.withUnit(dossier?.creatinine, "mg/L"),
      uree: this.withUnit(dossier?.uree, "mmol/L"),
      hemoglobine: this.withUnit(dossier?.hemoglobine, "g/dL"),
      antecedents: dossier?.antecedents || "Aucun antecedent renseigne."
    });
  }
  sortOrdonnances(ordonnances) {
    return [...ordonnances].sort((a, b) => this.dateValue(b.dateEmission) - this.dateValue(a.dateEmission));
  }
  sortConstantes(constantes) {
    return [...constantes].sort((a, b) => this.dateValue(b.saisieAt) - this.dateValue(a.saisieAt));
  }
  dateValue(value) {
    if (!value)
      return 0;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? 0 : date.getTime();
  }
  calculateAge(dateNaissance) {
    if (!dateNaissance)
      return 0;
    const birth = new Date(dateNaissance);
    const today = /* @__PURE__ */ new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) {
      age--;
    }
    return age;
  }
  withUnit(value, unit) {
    if (value === null || value === void 0 || value === "")
      return "-";
    return `${value} ${unit}`;
  }
  emptyOrdonnanceForm() {
    return { medicaments: "", posologie: "", instructions: "", dateExpiration: "" };
  }
  emptyInstructionsFormPublic() {
    return this.emptyInstructionsForm();
  }
  emptyInstructionsForm() {
    return {
      poidsSec: "",
      taille: "",
      groupeSanguin: "",
      abordVasculaire: "",
      localisation: "",
      aiguilles: "",
      taSystolique: "",
      taDiastolique: "",
      epoActif: false,
      eprex: false,
      eprexDose: "",
      recormon: false,
      recormonDose: "",
      epoFrequence: "",
      ferIvActif: false,
      venoferDose: "",
      ferIvFrequence: "",
      allergies: ""
    };
  }
  showToast(message, type) {
    const id = ++this.toastId;
    this.toasts = [...this.toasts, { id, message, type }];
    setTimeout(() => this.removeToast(id), 3500);
  }
  static \u0275fac = function MedecinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MedecinComponent)(\u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(OrdonnanceService), \u0275\u0275directiveInject(ConstantesVitalesService), \u0275\u0275directiveInject(DossierPatientService), \u0275\u0275directiveInject(PatientInstructionsService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AlerteService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MedecinComponent, selectors: [["app-medecin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 13, consts: [[1, "toast-stack"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "doctor-shell"], [1, "doctor-topbar"], [1, "brand"], [1, "brand__mark"], ["width", "28", "height", "28", "viewBox", "0 0 52 52", "fill", "none"], ["cx", "26", "cy", "26", "r", "24", "fill", "rgba(0,217,196,0.15)", "stroke", "rgba(0,217,196,0.5)", "stroke-width", "1.5"], ["d", "M26 13v10M21 18h10", "stroke", "#00D9C4", "stroke-width", "2.8", "stroke-linecap", "round"], ["d", "M14 33c0 0 3-9 6-9s4 6 6 6 3-9 6-9 6 9 6 9", "stroke", "#00D9C4", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["class", "doctor-profile", 4, "ngIf"], ["class", "notif-backdrop", 3, "click", 4, "ngIf"], ["class", "notif-panel", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "doctor-layout"], [1, "doctor-sidebar"], [1, "doctor-sidebar__item", 3, "click"], [1, "material-icons"], [1, "patient-workspace"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "doctor-profile"], [1, "doctor-profile__avatar"], [1, "doctor-profile__text"], ["type", "button", 1, "icon-button", 3, "click", "title"], ["type", "button", "title", "Notifications", 1, "notif-btn", 3, "click"], ["class", "notif-badge", 4, "ngIf"], ["type", "button", "title", "Deconnexion", 1, "icon-button", "icon-button--danger", 3, "click"], [1, "notif-badge"], [1, "notif-backdrop", 3, "click"], [1, "notif-panel", 3, "click"], [1, "notif-panel__head"], ["class", "notif-count", 4, "ngIf"], [1, "notif-panel__body"], ["class", "notif-loading", 4, "ngIf"], ["class", "notif-empty", 4, "ngIf"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "notif-count"], [1, "notif-loading"], [1, "material-icons", "spin"], [1, "notif-empty"], [3, "click"], [1, "material-icons", "notif-card__icon"], [1, "notif-card__body"], ["type", "button", "title", "Traiter l'alerte", 1, "btn-traiter", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", "modal-panel--dossier", 3, "click"], [1, "wizard-header"], [1, "wizard-header__icon", 2, "background", "rgba(0,217,196,0.12)"], [1, "material-icons", 2, "color", "var(--c-teal)"], [1, "wizard-header__text"], [1, "modal-close-btn", 3, "click"], [1, "wizard-body", "wizard-body--form", 2, "padding", "20px 24px"], ["class", "state-box", 4, "ngIf"], [1, "wizard-footer"], [1, "wizard-footer__actions"], [1, "btn-outline-sm", 3, "click"], [1, "btn-sm-primary", 3, "click"], [1, "state-box"], [1, "wz-section-title"], [1, "wz-form-row"], [1, "wz-field", "wz-field--readonly"], ["disabled", "", 3, "value"], [1, "wz-section-title", 2, "margin-top", "16px"], [1, "wz-field", "wz-field--readonly", "wz-field--full"], ["disabled", "", "rows", "3", 2, "resize", "none", "width", "100%", "padding", "8px", "border-radius", "8px", "border", "1px solid var(--c-border)", "background", "var(--c-input-bg)", "color", "var(--c-text)"], ["class", "patients-table-wrap", 4, "ngIf"], [1, "patients-table-wrap"], [1, "patients-table"], ["class", "patients-table__row", 3, "click", 4, "ngFor", "ngForOf"], [1, "patients-table__row", 3, "click"], [1, "patients-table__name"], [1, "patient-row__avatar"], [1, "material-icons", 2, "color", "var(--c-teal)", "font-size", "18px"], ["colspan", "7", 2, "text-align", "center", "padding", "32px", "color", "#94a3b8"], [1, "material-icons", 2, "display", "block", "font-size", "36px", "margin-bottom", "8px"], ["class", "empty-detail", 4, "ngIf"], [1, "empty-detail"], [1, "patient-hero"], [1, "hero-avatar"], [1, "hero-copy"], [1, "eyebrow"], ["class", "quick-actions", 4, "ngIf"], ["class", "detail-loading", 4, "ngIf"], ["class", "detail-error", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], ["class", "tab-content instr-content", 4, "ngIf"], ["class", "tab-content stats-tab", 4, "ngIf"], [1, "quick-actions"], ["type", "button", 1, "quick-btn", 3, "click"], ["type", "button", 1, "quick-btn", "quick-btn--alert", 3, "click"], [1, "detail-loading"], [1, "detail-error"], [1, "tab-content"], ["class", "latest-vitals", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "latest-vitals"], [1, "vital-strip"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "tab-content", "instr-content"], [1, "instr-bloc"], [1, "instr-bloc__header"], [1, "instr-grid"], [1, "instr-field"], ["type", "number", "placeholder", "Ex: 65", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 170", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "instr-check-group"], [1, "instr-check-title"], [1, "instr-checks"], [1, "instr-check"], ["type", "checkbox", 3, "change", "checked"], ["type", "number", "placeholder", "Ex: 140", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 90", 3, "ngModelChange", "ngModel"], [1, "instr-check", "instr-check--bold"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "instr-sub", 4, "ngIf"], [1, "instr-check-group", 2, "margin-top", "12px"], [1, "instr-field", "instr-field--wide"], ["rows", "3", "placeholder", "Ex: Penicilline, Iode...", 3, "ngModelChange", "ngModel"], [1, "instr-actions"], ["type", "button", 1, "primary-button", 3, "click", "disabled"], ["type", "button", 1, "ghost-button", 3, "click"], [1, "instr-sub"], ["class", "instr-inline-input", "type", "number", "placeholder", "UI", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "instr-field", "instr-field--sm"], ["type", "number", "placeholder", "Ex: 3", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "UI", 1, "instr-inline-input", 3, "ngModelChange", "ngModel"], [1, "instr-label-sm"], ["type", "number", "placeholder", "mg", 1, "instr-inline-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 2", 3, "ngModelChange", "ngModel"], [1, "ordonnance-toolbar"], ["type", "button", 1, "primary-button", 3, "click"], ["class", "ordonnance-list", 4, "ngIf"], [1, "ordonnance-list"], ["class", "ordonnance-card-row", 4, "ngFor", "ngForOf"], [1, "ordonnance-card-row"], ["type", "button", 1, "ordonnance-card", 2, "flex", "1", 3, "click"], [1, "ordonnance-card__body"], ["type", "button", "title", "Imprimer", 1, "icon-button", "print-btn", 3, "click"], [1, "prescription-form", 3, "ngSubmit"], [1, "field", "field--wide"], ["name", "medicaments", "rows", "5", "placeholder", "Ex: Epoetine alfa 4000 UI...", 3, "ngModelChange", "ngModel"], [1, "field"], ["name", "posologie", "type", "text", "placeholder", "Ex: 1 injection / semaine", 3, "ngModelChange", "ngModel"], ["name", "dateExpiration", "type", "date", 3, "ngModelChange", "ngModel"], ["name", "instructions", "rows", "3", "placeholder", "Surveillance, remarques ou consignes...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", 3, "disabled"], [1, "tab-content", "stats-tab"], [1, "stats-kpi-row"], [1, "stats-kpi", "stats-kpi--teal"], ["class", "stats-kpi stats-kpi--red", 4, "ngIf"], ["class", "stats-kpi stats-kpi--amber", 4, "ngIf"], ["class", "stats-kpi stats-kpi--green", 4, "ngIf"], ["class", "stats-kpi stats-kpi--blue", 4, "ngIf"], [1, "stats-kpi", "stats-kpi--red"], [1, "stats-kpi", "stats-kpi--amber"], [1, "stats-kpi", "stats-kpi--green"], [1, "stats-kpi", "stats-kpi--blue"], ["class", "stat-chart-card", 4, "ngIf"], [1, "stat-chart-card"], [1, "stat-chart-card__head"], [1, "chart-legend"], [1, "legend-dot", 2, "background", "#ef4444"], [1, "legend-dot", 2, "background", "#4EA8F8", "margin-left", "10px"], ["viewBox", "0 0 300 120", "preserveAspectRatio", "xMidYMid meet", 1, "line-chart-svg"], ["x1", "10", "y1", "20", "x2", "290", "y2", "20", "stroke", "var(--c-border)", "stroke-width", "1"], ["x1", "10", "y1", "60", "x2", "290", "y2", "60", "stroke", "var(--c-border)", "stroke-width", "1"], ["x1", "10", "y1", "100", "x2", "290", "y2", "100", "stroke", "var(--c-border)", "stroke-width", "1"], ["fill", "none", "stroke", "#ef4444", "stroke-width", "2", "stroke-linejoin", "round", "stroke-linecap", "round", 4, "ngIf"], ["fill", "none", "stroke", "#4EA8F8", "stroke-width", "2", "stroke-linejoin", "round", "stroke-linecap", "round", 4, "ngIf"], ["fill", "none", "stroke", "#ef4444", "stroke-width", "2", "stroke-linejoin", "round", "stroke-linecap", "round"], ["fill", "none", "stroke", "#4EA8F8", "stroke-width", "2", "stroke-linejoin", "round", "stroke-linecap", "round"], ["r", "3", "fill", "#ef4444"], ["r", "3", "fill", "#4EA8F8"], ["text-anchor", "middle", "font-size", "7", "fill", "var(--c-text-3)"], [1, "ordonnances-bar-wrap"], ["class", "ord-bar-item", 4, "ngFor", "ngForOf"], [1, "ord-bar-item"], [1, "ord-bar-track"], [1, "ord-bar-fill"], [1, "ord-bar-meta"], [1, "alerte-section-head"], ["class", "alerte-section-badge", 4, "ngIf"], ["class", "empty-tab", 4, "ngIf"], ["class", "alerte-list", 4, "ngIf"], [1, "alerte-section-badge"], [1, "empty-tab"], [1, "alerte-list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "alerte-card__icon"], [1, "alerte-card__body"], [1, "alerte-card__time"], ["class", "alerte-card__traitee-info", 4, "ngIf"], [1, "alerte-card__badge"], ["class", "btn-traiter btn-traiter--card", "type", "button", 3, "click", 4, "ngIf"], ["class", "alerte-card__traitee-badge", 4, "ngIf"], [1, "alerte-card__traitee-info"], ["type", "button", 1, "btn-traiter", "btn-traiter--card", 3, "click"], [1, "alerte-card__traitee-badge"], [1, "modal-backdrop", 3, "click"], [1, "ordonnance-modal", 3, "click"], [2, "display", "flex", "gap", "8px", "align-items", "center"], ["type", "button", "title", "Imprimer l'ordonnance", 1, "icon-button", 2, "color", "var(--c-teal)", 3, "click"], ["type", "button", "title", "Fermer", 1, "icon-button", 3, "click"], [1, "modal-section-title"], ["class", "text-button", "type", "button", 3, "click", 4, "ngIf"], ["class", "instruction-editor", 4, "ngIf"], ["type", "button", 1, "text-button", 3, "click"], [1, "instruction-editor"], ["rows", "4", "placeholder", "Ajouter ou modifier les instructions du patient...", 3, "ngModelChange", "ngModel"], [1, "instruction-editor__actions"], ["type", "button", 1, "ghost-button", 3, "click", "disabled"]], template: function MedecinComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, MedecinComponent_button_1_Template, 5, 5, "button", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "header", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "circle", 7)(8, "path", 8)(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div")(11, "strong");
      \u0275\u0275text(12, "DialySys");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Espace medecin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, MedecinComponent_div_15_Template, 18, 7, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, MedecinComponent_div_16_Template, 1, 0, "div", 11)(17, MedecinComponent_div_17_Template, 11, 4, "div", 12)(18, MedecinComponent_div_18_Template, 25, 5, "div", 13);
      \u0275\u0275elementStart(19, "div", 14)(20, "aside", 15)(21, "button", 16);
      \u0275\u0275listener("click", function MedecinComponent_Template_button_click_21_listener() {
        ctx.showPatientsPanel = true;
        return ctx.selectedPatient = null;
      });
      \u0275\u0275elementStart(22, "span", 17);
      \u0275\u0275text(23, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Liste de patients");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "main", 18);
      \u0275\u0275template(27, MedecinComponent_ng_container_27_Template, 3, 2, "ng-container", 19)(28, MedecinComponent_ng_container_28_Template, 2, 1, "ng-container", 19)(29, MedecinComponent_ng_container_29_Template, 20, 14, "ng-container", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, MedecinComponent_div_30_Template, 33, 12, "div", 20);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275classProp("light", ctx.isLight);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.currentUser);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notifOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notifOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDossierModal);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("doctor-sidebar__item--active", ctx.showPatientsPanel);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showPatientsPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPatientsPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPatient && !ctx.showPatientsPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedOrdonnance);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n.doctor-shell[_ngcontent-%COMP%] {\n  --c-bg: #06090F;\n  --c-surface-1: #06090F;\n  --c-surface-2: #0B111E;\n  --c-surface-3: #0F1729;\n  --c-card: #0B111E;\n  --c-border: rgba(0,217,196,.10);\n  --c-text-1: #ffffff;\n  --c-text-2: #ffffff;\n  --c-text-3: rgba(255,255,255,.6);\n  --c-teal: #00D9C4;\n  --c-teal-soft: rgba(0,217,196,.12);\n  --c-topbar-bg: rgba(11,17,30,.88);\n}\n.doctor-shell.light[_ngcontent-%COMP%] {\n  --c-bg: #f0f4f8;\n  --c-surface-1: #f0f4f8;\n  --c-surface-2: #ffffff;\n  --c-surface-3: #f8fafc;\n  --c-card: #ffffff;\n  --c-border: rgba(148,163,184,.28);\n  --c-text-1: #0f172a;\n  --c-text-2: #334155;\n  --c-text-3: #64748b;\n  --c-teal: #147c75;\n  --c-teal-soft: rgba(20,124,117,.12);\n  --c-topbar-bg: rgba(255,255,255,.88);\n}\n.doctor-shell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: var(--c-text-1);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 217, 196, 0.06) 0%,\n      transparent 40%),\n    linear-gradient(\n      225deg,\n      rgba(59, 130, 246, 0.05) 0%,\n      transparent 40%),\n    var(--c-bg);\n}\n.doctor-shell[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  background: var(--c-bg);\n}\n.doctor-topbar[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--c-topbar-bg);\n  border-bottom: 1px solid var(--c-border);\n  backdrop-filter: blur(14px);\n  color: var(--c-text-1);\n}\n.doctor-topbar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.doctor-topbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.doctor-topbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.doctor-topbar[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.doctor-topbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.brand[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%], \n.panel-heading[_ngcontent-%COMP%], \n.tabs[_ngcontent-%COMP%], \n.ordonnance-toolbar[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.brand[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.1);\n  border: 1px solid rgba(0, 217, 196, 0.3);\n}\n.brand[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) {\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.doctor-profile[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.doctor-profile__avatar[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%]   .hero-avatar[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%]   .patient-row__avatar[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.doctor-profile__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  font-weight: 800;\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.doctor-profile__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.doctor-profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.doctor-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.doctor-layout[_ngcontent-%COMP%] {\n  min-height: 0;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 220px minmax(0, 1fr);\n  background: var(--c-bg);\n}\n.patients-panel[_ngcontent-%COMP%] {\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--c-surface-2);\n  border-right: 1px solid var(--c-border);\n}\n.panel-heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 22px 20px 14px;\n}\n.panel-heading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.panel-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-2);\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n.panel-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 28px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 999px;\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.search-box[_ngcontent-%COMP%] {\n  margin: 0 20px 16px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: var(--c-card);\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: var(--c-text-3);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  color: var(--c-text-1);\n  font: inherit;\n  background: transparent;\n}\n.patient-list[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow-y: auto;\n  padding: 0 12px 16px;\n}\n.patient-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  text-align: left;\n  color: inherit;\n  background: transparent;\n  cursor: pointer;\n}\n.patient-row[_ngcontent-%COMP%]:hover, \n.patient-row--active[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border-color: var(--c-teal-soft);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);\n}\n.patient-row__avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 800;\n}\n.patient-row__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.patient-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.patient-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  font-size: 12px;\n}\n.patient-row__avatar--stable[_ngcontent-%COMP%], \n.hero-avatar--stable[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  background: #d9f2ee;\n}\n.patient-row__avatar--warning[_ngcontent-%COMP%], \n.hero-avatar--warning[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.patient-row__avatar--critical[_ngcontent-%COMP%], \n.hero-avatar--critical[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--c-teal);\n}\n.status-dot--warning[_ngcontent-%COMP%] {\n  background: #d99000;\n}\n.status-dot--critical[_ngcontent-%COMP%] {\n  background: #d92d20;\n}\n.patient-workspace[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-y: auto;\n  padding: 28px;\n  background: var(--c-bg);\n  color: var(--c-text-1);\n}\n.empty-detail[_ngcontent-%COMP%], \n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: var(--c-text-2);\n}\n.empty-detail[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 128px);\n  flex-direction: column;\n  text-align: center;\n}\n.empty-detail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--c-text-3);\n}\n.empty-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n}\n.empty-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0;\n  line-height: 1.6;\n}\n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px dashed var(--c-border);\n  border-radius: 8px;\n  background: var(--c-surface-2);\n}\n.state-box--error[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  color: #ff5757;\n  border-color: rgba(255, 87, 87, 0.25);\n  background: rgba(255, 87, 87, 0.08);\n}\n.patient-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  border-radius: 8px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card);\n  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.18);\n}\n.hero-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 900;\n}\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 30px;\n  letter-spacing: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-text-2);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-teal);\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin: 18px 0 4px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 56px;\n  padding: 0 18px;\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  background: var(--c-card);\n  color: var(--c-text-2);\n  font: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.18s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.quick-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--c-teal);\n}\n.quick-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  min-width: 22px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 900;\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 6px 20px var(--c-teal-soft);\n  color: var(--c-text-1);\n}\n.quick-btn--active[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n  border-color: var(--c-teal);\n  color: var(--c-card);\n  box-shadow: 0 8px 24px var(--c-teal-soft);\n}\n.quick-btn--active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-card);\n}\n.quick-btn--active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n  color: var(--c-card);\n}\n.tabs[_ngcontent-%COMP%] {\n  gap: 6px;\n  margin: 20px 0;\n  padding: 6px;\n  border-radius: 8px;\n  border: 1px solid var(--c-border);\n  background: var(--c-surface-2);\n}\n.tabs__item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 0;\n  border-radius: 6px;\n  color: var(--c-text-2);\n  background: transparent;\n  font-weight: 800;\n  cursor: pointer;\n}\n.tabs__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.tabs__item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  min-width: 22px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: var(--c-teal-soft);\n}\n.tabs__item--active[_ngcontent-%COMP%] {\n  color: var(--c-card);\n  background: var(--c-teal);\n  box-shadow: 0 10px 20px var(--c-teal-soft);\n}\n.tabs__item--active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n}\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  background: transparent;\n  color: var(--c-text-1);\n}\n.metric-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.metric-card[_ngcontent-%COMP%], \n.info-panel[_ngcontent-%COMP%], \n.latest-vitals[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: var(--c-card);\n  color: var(--c-text-1);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);\n}\n.metric-card[_ngcontent-%COMP%] {\n  min-height: 104px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--c-text-1);\n}\n.split-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 18px;\n}\n.info-panel[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.info-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  font-weight: 900;\n}\n.info-panel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.info-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.info-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--c-border);\n}\n.info-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n}\n.info-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n}\n.info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  font-weight: 500;\n}\n.latest-vitals[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: minmax(190px, auto) minmax(0, 1fr);\n  gap: 16px;\n}\n.latest-vitals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n}\n.latest-vitals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 18px;\n}\n.latest-vitals[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: 0;\n  padding: 12px;\n  border-radius: 8px;\n  background: var(--c-teal-soft);\n}\n.vital-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.vital-strip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 8px;\n  color: var(--c-text-2);\n  background: var(--c-surface-3);\n  text-align: center;\n}\n.vital-strip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--c-text-1);\n  font-size: 20px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: var(--c-card);\n  color: var(--c-text-1) !important;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--c-card);\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid var(--c-border);\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--c-text-2) !important;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: var(--c-surface-3) !important;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-1) !important;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--c-surface-3);\n}\n.ordonnance-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 16px;\n}\n.ordonnance-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.ordonnance-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-1) !important;\n  background: var(--c-card);\n  cursor: pointer;\n}\n.ordonnance-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(20, 124, 117, 0.38);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.ordonnance-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.ordonnance-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  text-align: left;\n}\n.ordonnance-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n}\n.prescription-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  padding: 20px;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   .field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--c-border);\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  font-size: 30px;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n}\n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 4px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  font-size: 13px;\n  font-weight: 800;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 11px 12px;\n  resize: vertical;\n  color: var(--c-text-1);\n  background: var(--c-surface-2);\n  font: inherit;\n  outline: none;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n  background: var(--c-card);\n  box-shadow: 0 0 0 3px rgba(20, 124, 117, 0.12);\n}\n.icon-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%], \n.toast[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 8px;\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n}\n.icon-button[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  color: var(--c-text-2);\n  background: var(--c-card);\n}\n.icon-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  color: var(--c-teal);\n  border-color: rgba(20, 124, 117, 0.3);\n}\n.icon-button--danger[_ngcontent-%COMP%]:hover {\n  color: #b42318;\n  border-color: rgba(180, 35, 24, 0.3);\n}\n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 16px;\n}\n.primary-button[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--c-card);\n  background: var(--c-teal);\n}\n.primary-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.ghost-button[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  color: var(--c-text-2);\n  background: var(--c-card);\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n.pill--stable[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.pill--warning[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.pill--critical[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.pill--neutral[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  background: #e2e8f0;\n}\n.toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 50;\n  display: grid;\n  gap: 10px;\n}\n.toast[_ngcontent-%COMP%] {\n  max-width: 360px;\n  justify-content: flex-start;\n  padding: 12px 14px;\n  border: 1px solid rgba(148, 163, 184, 0.32);\n  color: var(--c-text-1);\n  background: var(--c-card);\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.14);\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.toast--success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.toast--warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d99000;\n}\n.toast--error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d92d20;\n}\n.toast--info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2f6fed;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  background: rgba(15, 23, 42, 0.48);\n  backdrop-filter: blur(8px);\n}\n.ordonnance-modal[_ngcontent-%COMP%] {\n  width: min(620px, 100%);\n  max-height: calc(100vh - 48px);\n  overflow-y: auto;\n  border-radius: 8px;\n  background: var(--c-card);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.28);\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   section[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  border-bottom: 1px solid var(--c-border);\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  font-size: 13px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--c-border);\n}\n.ordonnance-modal[_ngcontent-%COMP%]   .modal-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.7;\n}\n.instr-content[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n.instr-bloc[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.instr-bloc__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 800;\n  font-size: 14px;\n  color: var(--c-text-1);\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--c-border);\n}\n.instr-bloc__header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  font-size: 18px;\n}\n.instr-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.instr-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.instr-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--c-text-2);\n}\n.instr-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.instr-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 9px 12px;\n  font: inherit;\n  font-size: 13px;\n  color: var(--c-text-1);\n  background: var(--c-surface-2);\n  outline: none;\n  resize: vertical;\n  appearance: none;\n  width: 100%;\n}\n.instr-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.instr-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n  background: var(--c-card);\n  box-shadow: 0 0 0 3px var(--c-teal-soft);\n}\n.instr-field--sm[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.instr-field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.instr-check-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.instr-check-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--c-text-2);\n  margin-bottom: 8px;\n}\n.instr-checks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n}\n.instr-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--c-text-1);\n}\n.instr-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--c-teal);\n  cursor: pointer;\n}\n.instr-check--bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--c-text-1);\n}\n.instr-sub[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.instr-inline-input[_ngcontent-%COMP%] {\n  width: 90px;\n  border: 1px solid var(--c-border);\n  border-radius: 6px;\n  padding: 6px 10px;\n  font: inherit;\n  font-size: 13px;\n  color: var(--c-text-1);\n  background: var(--c-surface-2);\n  outline: none;\n}\n.instr-inline-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n  background: var(--c-card);\n}\n.instr-label-sm[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.instr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding-top: 4px;\n}\n.doctor-shell.light[_ngcontent-%COMP%]   .instr-check-title[_ngcontent-%COMP%], \n.doctor-shell.light[_ngcontent-%COMP%]   .instr-label-sm[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.doctor-shell.light[_ngcontent-%COMP%]   .instr-check[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.doctor-shell.light[_ngcontent-%COMP%]   .instr-check--bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.doctor-shell.light[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.doctor-shell.light[_ngcontent-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  color: var(--c-teal);\n  background: transparent;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 900;\n  cursor: pointer;\n}\n.text-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.instruction-editor[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.instruction-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 11px 12px;\n  resize: vertical;\n  color: var(--c-text-1);\n  background: var(--c-surface-2);\n  font: inherit;\n  outline: none;\n}\n.instruction-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n  background: var(--c-card);\n  box-shadow: 0 0 0 3px var(--c-teal-soft);\n}\n.instruction-editor__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1080px) {\n  .doctor-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 300px minmax(0, 1fr);\n  }\n  .metric-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .split-grid[_ngcontent-%COMP%], \n   .latest-vitals[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 780px) {\n  .doctor-topbar[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 72px;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 16px;\n  }\n  .doctor-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .patients-panel[_ngcontent-%COMP%] {\n    max-height: 360px;\n    border-right: 0;\n    border-bottom: 1px solid rgba(148, 163, 184, 0.3);\n  }\n  .patient-workspace[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .patient-hero[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .patient-hero[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-self: flex-start;\n  }\n  .tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .tabs__item[_ngcontent-%COMP%] {\n    min-width: 138px;\n  }\n  .prescription-form[_ngcontent-%COMP%], \n   .metric-grid[_ngcontent-%COMP%], \n   .vital-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.doctor-sidebar[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border-right: 1px solid var(--c-border);\n  display: flex;\n  flex-direction: column;\n  padding: 16px 12px;\n  gap: 4px;\n}\n.doctor-sidebar__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 11px 14px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: var(--c-text-2);\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  transition: background 0.15s, color 0.15s;\n}\n.doctor-sidebar__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.doctor-sidebar__item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.08);\n  color: var(--c-teal);\n}\n.doctor-sidebar__item--active[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n  font-weight: 600;\n}\n.modal-panel--dossier[_ngcontent-%COMP%] {\n  width: min(680px, 95vw);\n  max-height: 88vh;\n  overflow-y: auto;\n}\n.patients-main-list[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n.patients-main-list__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.patients-main-list__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--c-text-1);\n}\n.patients-main-list__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.patients-main-list__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 14px;\n}\n.patient-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    box-shadow 0.15s,\n    border-color 0.15s,\n    transform 0.1s;\n}\n.patient-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 4px 16px rgba(0, 217, 196, 0.12);\n  transform: translateY(-1px);\n}\n.patient-card__avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n  font-weight: 700;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.patient-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.patient-card__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.patient-card__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-teal);\n  font-weight: 500;\n}\n.patient-card__body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3, var(--c-text-2));\n}\n.patient-card__arrow[_ngcontent-%COMP%] {\n  color: var(--c-text-3, var(--c-text-2));\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.patients-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 14px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card);\n}\n.patients-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.patients-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--c-surface-3);\n  border-bottom: 1px solid var(--c-border);\n}\n.patients-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--c-text-2);\n  white-space: nowrap;\n}\n.patients-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  color: var(--c-text-1);\n  border-bottom: 1px solid var(--c-border);\n}\n.patients-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.patients-table__row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.patients-table__row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.05);\n}\n.patients-table__name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.patients-table__name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.ordonnance-card-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 6px;\n}\n.print-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  background: var(--c-surface-2, var(--c-card));\n  color: var(--c-teal);\n  padding: 0 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.print-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-teal-soft);\n}\n.print-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.stats-tab[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.stats-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.stats-kpi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-radius: 12px;\n  border: 1px solid var(--c-border);\n  background: var(--c-surface-2, var(--c-card));\n  min-width: 140px;\n  flex: 1;\n}\n.stats-kpi[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.stats-kpi[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1;\n  color: var(--c-text-1);\n}\n.stats-kpi[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  margin-top: 2px;\n  display: block;\n}\n.stats-kpi--teal[_ngcontent-%COMP%] {\n  border-color: rgba(0, 217, 196, 0.2);\n}\n.stats-kpi--teal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.stats-kpi--red[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.stats-kpi--red[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.stats-kpi--amber[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.stats-kpi--amber[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.stats-kpi--green[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.stats-kpi--green[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.stats-kpi--blue[_ngcontent-%COMP%] {\n  border-color: rgba(78, 168, 248, 0.2);\n}\n.stats-kpi--blue[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #4EA8F8;\n}\n.stat-chart-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n  background: var(--c-surface-2, var(--c-card));\n}\n.stat-chart-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n  margin-bottom: 14px;\n}\n.stat-chart-card__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.chart-legend[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.line-chart-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n}\n.ordonnances-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ord-bar-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ord-bar-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.ord-bar-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ord-bar-track[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  background: var(--c-border);\n  overflow: hidden;\n}\n.ord-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n  min-width: 2px;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: var(--c-card, #0B111E);\n  color: var(--c-text-2, #fff);\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n  flex-shrink: 0;\n}\n.notif-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.notif-btn[_ngcontent-%COMP%]:hover {\n  color: var(--c-teal, #00D9C4);\n  border-color: rgba(0, 217, 196, 0.4);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background: #ef4444;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--c-card, #0B111E);\n  pointer-events: none;\n}\n.notif-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 98;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 76px;\n  right: 20px;\n  width: 340px;\n  max-height: 520px;\n  background: var(--c-card, #0B111E);\n  border: 1px solid var(--c-border, rgba(0, 217, 196, 0.12));\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n  z-index: 99;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.notif-panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--c-border, rgba(0, 217, 196, 0.12));\n  color: var(--c-text-1, #fff);\n}\n.notif-panel__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal, #00D9C4);\n}\n.notif-panel__head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}\n.notif-panel__body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.notif-count[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n  font-size: 11px;\n  font-weight: 700;\n}\n.notif-loading[_ngcontent-%COMP%], \n.notif-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px;\n  color: var(--c-text-3, rgba(255, 255, 255, 0.5));\n  font-size: 13px;\n}\n.notif-loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.notif-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.5;\n}\n.notif-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border: none;\n  border-bottom: 1px solid var(--c-border, rgba(0, 217, 196, 0.08));\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n  font: inherit;\n  transition: background 0.12s;\n  position: relative;\n}\n.notif-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.notif-card--read[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.notif-card__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.notif-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.notif-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-card__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--c-text-1, #fff);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notif-card__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2, rgba(255, 255, 255, 0.8));\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notif-card__body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3, rgba(255, 255, 255, 0.45));\n}\n.notif-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ef4444;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.alerte--critique[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--critique[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.alerte--critique[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.alerte--critique[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.alerte--important[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--important[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.alerte--important[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.alerte--important[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.alerte--tendance[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--tendance[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #3b82f6;\n}\n.alerte--tendance[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.alerte--tendance[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.alerte--seance[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--seance[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #8b5cf6;\n}\n.alerte--seance[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.alerte--seance[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.alerte--info[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--info[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.15);\n  color: #94a3b8;\n}\n.alerte--info[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.alerte--info[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.quick-btn--alert[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.quick-btn--alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.quick-btn--alert.quick-btn--active[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  border-color: #ef4444;\n  color: #ef4444;\n  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2);\n}\n.quick-btn--alert.quick-btn--active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.quick-btn--alert[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.alerte-section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  color: var(--c-text-1);\n}\n.alerte-section-head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #ef4444;\n}\n.alerte-section-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n}\n.alerte-section-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n  font-size: 12px;\n  font-weight: 700;\n}\n.alerte-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.alerte-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 10px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card, #0B111E);\n}\n.alerte-card--read[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.alerte-card__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.alerte-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.alerte-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.alerte-card__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  line-height: 1.4;\n}\n.alerte-card__time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.alerte-card__badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  flex-shrink: 0;\n  align-self: flex-start;\n  background: var(--c-teal-soft, rgba(0, 217, 196, 0.12));\n  color: var(--c-teal, #00D9C4);\n}\n.alerte--critique[_ngcontent-%COMP%]   .alerte-card__badge[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n.alerte--important[_ngcontent-%COMP%]   .alerte-card__badge[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #f59e0b;\n}\n.alerte--tendance[_ngcontent-%COMP%]   .alerte-card__badge[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n.alerte--seance[_ngcontent-%COMP%]   .alerte-card__badge[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.12);\n  color: #8b5cf6;\n}\n.alerte--info[_ngcontent-%COMP%]   .alerte-card__badge[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.12);\n  color: #94a3b8;\n}\n.alerte-card--traitee[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  filter: grayscale(0.4);\n}\n.alerte-card__traitee-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #22c55e;\n  font-weight: 600;\n}\n.alerte-card__traitee-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.alerte-card__traitee-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(34, 197, 94, 0.12);\n  color: #22c55e;\n  flex-shrink: 0;\n  align-self: flex-start;\n}\n.alerte-card__traitee-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.btn-traiter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(34, 197, 94, 0.35);\n  background: rgba(34, 197, 94, 0.1);\n  color: #22c55e;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s, transform 0.1s;\n  white-space: nowrap;\n}\n.btn-traiter[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-traiter[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.22);\n  transform: scale(1.03);\n}\n.btn-traiter--card[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 6px;\n}\n.notif-card[_ngcontent-%COMP%]   .btn-traiter[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=medecin.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MedecinComponent, { className: "MedecinComponent", filePath: "app\\pages\\medecin\\medecin.component.ts", lineNumber: 85 });
})();
export {
  MedecinComponent
};
//# sourceMappingURL=chunk-JL52PF62.js.map
