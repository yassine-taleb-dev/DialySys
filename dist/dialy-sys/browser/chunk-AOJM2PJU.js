import {
  ConstantesVitalesService,
  OrdonnanceService
} from "./chunk-3LRH6NXZ.js";
import {
  PatientService
} from "./chunk-WYLEWLM2.js";
import {
  AuthService,
  environment
} from "./chunk-CJHGJ72Z.js";
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
} from "./chunk-UXOLEOXG.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf
} from "./chunk-UMA4ZBEK.js";
import {
  __spreadProps,
  __spreadValues,
  catchError,
  forkJoin,
  of,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SO5DYVYC.js";

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

// src/services/patient-instructions.service.ts
var PatientInstructionsService = class _PatientInstructionsService {
  http;
  api = `${environment.apiUrl}/patient-instructions`;
  constructor(http) {
    this.http = http;
  }
  getByPatient(patientId) {
    return this.http.get(`${this.api}/patient/${patientId}`);
  }
  saveForPatient(patientId, payload) {
    return this.http.put(`${this.api}/patient/${patientId}`, payload);
  }
  static \u0275fac = function PatientInstructionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientInstructionsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PatientInstructionsService, factory: _PatientInstructionsService.\u0275fac, providedIn: "root" });
};

// src/app/pages/medecin/medecin.component.ts
function MedecinComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function MedecinComponent_button_1_Template_button_click_0_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(toast_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 15);
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
function MedecinComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 28);
    \u0275\u0275listener("click", function MedecinComponent_div_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTheme());
    });
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 29);
    \u0275\u0275listener("click", function MedecinComponent_div_15_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13, "logout");
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
  }
}
function MedecinComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des patients ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 15);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadError, " ");
  }
}
function MedecinComponent_div_30_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function MedecinComponent_div_30_button_1_Template_button_click_0_listener() {
      const patient_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPatient(patient_r6));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const patient_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("patient-row--active", (ctx_r2.selectedPatient == null ? null : ctx_r2.selectedPatient.id) === patient_r6.id);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("patient-row__avatar patient-row__avatar--", patient_r6.statutTone, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(patient_r6.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(patient_r6.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", patient_r6.age, " ans - ", patient_r6.pathologie, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("status-dot status-dot--", patient_r6.statutTone, "");
  }
}
function MedecinComponent_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 15);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun patient trouve ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, MedecinComponent_div_30_button_1_Template, 9, 12, "button", 34)(2, MedecinComponent_div_30_div_2_Template, 4, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredPatients.length === 0);
  }
}
function MedecinComponent_section_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "span", 15);
    \u0275\u0275text(2, "clinical_notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Selectionnez un patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Le dossier medical, les constantes saisies par l'aide-soignant et les ordonnances apparaitront ici.");
    \u0275\u0275elementEnd()();
  }
}
function MedecinComponent_ng_container_33_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 47);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("resume"));
    });
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Consulter patient");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 47);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("ordonnances"));
    });
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Ordonnances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 47);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_div_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("constantes"));
    });
    \u0275\u0275elementStart(14, "span", 15);
    \u0275\u0275text(15, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Instructions de patient");
    \u0275\u0275elementEnd()()();
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
  }
}
function MedecinComponent_ng_container_33_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 31);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du dossier... ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 15);
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
function MedecinComponent_ng_container_33_section_16_article_1_strong_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.latestConstantes.aideSoignant.prenom, " ", ctx_r2.latestConstantes.aideSoignant.nom, "");
  }
}
function MedecinComponent_ng_container_33_section_16_article_1_strong_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_16_article_1_p_30_Template(rf, ctx) {
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
function MedecinComponent_ng_container_33_section_16_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 53)(1, "div")(2, "span");
    \u0275\u0275text(3, "Derniere saisie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span");
    \u0275\u0275text(8, "Aide-soignant");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MedecinComponent_ng_container_33_section_16_article_1_strong_9_Template, 2, 2, "strong", 22)(10, MedecinComponent_ng_container_33_section_16_article_1_strong_10_Template, 2, 0, "strong", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 54)(12, "span")(13, "b");
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
    \u0275\u0275template(30, MedecinComponent_ng_container_33_section_16_article_1_p_30_Template, 2, 1, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.fmtDateTime(ctx_r2.latestConstantes.saisieAt));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.latestConstantes.aideSoignant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.latestConstantes.aideSoignant);
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
function MedecinComponent_ng_container_33_section_16_div_2_tr_17_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const constante_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", constante_r8.aideSoignant.prenom, " ", constante_r8.aideSoignant.nom, "");
  }
}
function MedecinComponent_ng_container_33_section_16_div_2_tr_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_16_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, MedecinComponent_ng_container_33_section_16_div_2_tr_17_span_4_Template, 2, 2, "span", 22)(5, MedecinComponent_ng_container_33_section_16_div_2_tr_17_span_5_Template, 2, 0, "span", 22);
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
    const constante_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtDateTime(constante_r8.saisieAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", constante_r8.aideSoignant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !constante_r8.aideSoignant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", constante_r8.tensionSys, "/", constante_r8.tensionDia, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", constante_r8.bpm, " bpm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", constante_r8.poids, " kg");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(constante_r8.notes || "-");
  }
}
function MedecinComponent_ng_container_33_section_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Aide-soignant");
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
    \u0275\u0275template(17, MedecinComponent_ng_container_33_section_16_div_2_tr_17_Template, 14, 8, "tr", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.constantes);
  }
}
function MedecinComponent_ng_container_33_section_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 15);
    \u0275\u0275text(2, "sensors_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune constante vitale saisie pour ce patient. ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 50);
    \u0275\u0275template(1, MedecinComponent_ng_container_33_section_16_article_1_Template, 31, 8, "article", 51)(2, MedecinComponent_ng_container_33_section_16_div_2_Template, 18, 1, "div", 52)(3, MedecinComponent_ng_container_33_section_16_div_3_Template, 4, 0, "div", 17);
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
function MedecinComponent_ng_container_33_section_17_div_109_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_div_109_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
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
function MedecinComponent_ng_container_33_section_17_div_109_input_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_div_109_input_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
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
function MedecinComponent_ng_container_33_section_17_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 76)(2, "label", 77)(3, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_div_109_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.eprex, $event) || (ctx_r2.instructionsForm.eprex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Eprex");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MedecinComponent_ng_container_33_section_17_div_109_input_6_Template, 1, 1, "input", 90);
    \u0275\u0275elementStart(7, "label", 77)(8, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_div_109_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.recormon, $event) || (ctx_r2.instructionsForm.recormon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Recormon");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, MedecinComponent_ng_container_33_section_17_div_109_input_11_Template, 1, 1, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 91)(13, "label");
    \u0275\u0275text(14, "Frequence (/ semaine)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_div_109_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.epoFrequence, $event) || (ctx_r2.instructionsForm.epoFrequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.eprex);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.instructionsForm.eprex);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.recormon);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.instructionsForm.recormon);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.epoFrequence);
  }
}
function MedecinComponent_ng_container_33_section_17_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 76)(2, "span", 94);
    \u0275\u0275text(3, "Venofer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_div_115_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.venoferDose, $event) || (ctx_r2.instructionsForm.venoferDose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 91)(6, "label");
    \u0275\u0275text(7, "Frequence (/ semaine)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_div_115_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r13);
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
function MedecinComponent_ng_container_33_section_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 57)(1, "article", 58)(2, "header", 59)(3, "span", 15);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Parametres dialyse ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60)(7, "div", 61)(8, "label");
    \u0275\u0275text(9, "Poids sec (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.poidsSec, $event) || (ctx_r2.instructionsForm.poidsSec = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 61)(12, "label");
    \u0275\u0275text(13, "Taille (cm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.taille, $event) || (ctx_r2.instructionsForm.taille = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61)(16, "label");
    \u0275\u0275text(17, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.groupeSanguin, $event) || (ctx_r2.instructionsForm.groupeSanguin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 65);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 66);
    \u0275\u0275text(22, "A+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 67);
    \u0275\u0275text(24, "A-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 68);
    \u0275\u0275text(26, "B+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 69);
    \u0275\u0275text(28, "B-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 70);
    \u0275\u0275text(30, "AB+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 71);
    \u0275\u0275text(32, "AB-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 72);
    \u0275\u0275text(34, "O+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 73);
    \u0275\u0275text(36, "O-");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 74)(38, "label", 75);
    \u0275\u0275text(39, "Abord vasculaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 76)(41, "label", 77)(42, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.abordFav, $event) || (ctx_r2.instructionsForm.abordFav = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "FAV");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "label", 77)(46, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.abordCatheter, $event) || (ctx_r2.instructionsForm.abordCatheter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Catheter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "label", 77)(50, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.abordGoretex, $event) || (ctx_r2.instructionsForm.abordGoretex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52, "Goretex");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 74)(54, "label", 75);
    \u0275\u0275text(55, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 76)(57, "label", 77)(58, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.locBrasG, $event) || (ctx_r2.instructionsForm.locBrasG = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Bras G");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "label", 77)(62, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.locBrasD, $event) || (ctx_r2.instructionsForm.locBrasD = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64, "Bras D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "label", 77)(66, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.locJugulaire, $event) || (ctx_r2.instructionsForm.locJugulaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "Jugulaire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 74)(70, "label", 75);
    \u0275\u0275text(71, "Type d'aiguilles habituel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 76)(73, "label", 77)(74, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.aiguilles15, $event) || (ctx_r2.instructionsForm.aiguilles15 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "15G");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "label", 77)(78, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.aiguilles16, $event) || (ctx_r2.instructionsForm.aiguilles16 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80, "16G");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "label", 77)(82, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.aiguilles17, $event) || (ctx_r2.instructionsForm.aiguilles17 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84, "17G");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(85, "article", 58)(86, "header", 59)(87, "span", 15);
    \u0275\u0275text(88, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " Tensions de reference ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 60)(91, "div", 61)(92, "label");
    \u0275\u0275text(93, "TA Systolique cible (mmHg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.taSystolique, $event) || (ctx_r2.instructionsForm.taSystolique = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 61)(96, "label");
    \u0275\u0275text(97, "TA Diastolique cible (mmHg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_98_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.taDiastolique, $event) || (ctx_r2.instructionsForm.taDiastolique = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(99, "article", 58)(100, "header", 59)(101, "span", 15);
    \u0275\u0275text(102, "biotech");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, " Traitement anemie ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 74)(105, "label", 81)(106, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.epoActif, $event) || (ctx_r2.instructionsForm.epoActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span");
    \u0275\u0275text(108, "EPO");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(109, MedecinComponent_ng_container_33_section_17_div_109_Template, 16, 5, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 83)(111, "label", 81)(112, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_input_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.ferIvActif, $event) || (ctx_r2.instructionsForm.ferIvActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span");
    \u0275\u0275text(114, "FER IV");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(115, MedecinComponent_ng_container_33_section_17_div_115_Template, 9, 2, "div", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "article", 58)(117, "header", 59)(118, "span", 15);
    \u0275\u0275text(119, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, " Allergies / Remarques ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 84)(122, "label");
    \u0275\u0275text(123, "Allergies connues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "textarea", 85);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_17_Template_textarea_ngModelChange_124_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionsForm.allergies, $event) || (ctx_r2.instructionsForm.allergies = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 86)(126, "button", 87);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_17_Template_button_click_126_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveInstructions());
    });
    \u0275\u0275elementStart(127, "span", 15);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd();
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "button", 88);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_17_Template_button_click_130_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.instructionsForm = ctx_r2.emptyInstructionsFormPublic());
    });
    \u0275\u0275elementStart(131, "span", 15);
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
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.abordFav);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.abordCatheter);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.abordGoretex);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.locBrasG);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.locBrasD);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.locJugulaire);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.aiguilles15);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.aiguilles16);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.instructionsForm.aiguilles17);
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
function MedecinComponent_ng_container_33_section_18_div_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_18_div_8_button_1_Template_button_click_0_listener() {
      const ordonnance_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openOrdonnance(ordonnance_r16));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 103)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ordonnance_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ordonnance #", ordonnance_r16.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.fmtDate(ordonnance_r16.dateEmission), " - ", ordonnance_r16.medicaments, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("pill pill--", ctx_r2.ordonnanceStatusTone(ordonnance_r16.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ordonnanceStatusLabel(ordonnance_r16.statut), " ");
  }
}
function MedecinComponent_ng_container_33_section_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275template(1, MedecinComponent_ng_container_33_section_18_div_8_button_1_Template, 10, 7, "button", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.ordonnances);
  }
}
function MedecinComponent_ng_container_33_section_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 15);
    \u0275\u0275text(2, "description_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune ordonnance pour ce patient. ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 50)(1, "div", 97)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("rediger"));
    });
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Nouvelle ordonnance ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MedecinComponent_ng_container_33_section_18_div_8_Template, 2, 1, "div", 99)(9, MedecinComponent_ng_container_33_section_18_div_9_Template, 4, 0, "div", 17);
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
function MedecinComponent_ng_container_33_section_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 50)(1, "form", 104);
    \u0275\u0275listener("ngSubmit", function MedecinComponent_ng_container_33_section_19_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitOrdonnance());
    });
    \u0275\u0275elementStart(2, "header")(3, "span", 15);
    \u0275\u0275text(4, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7, "Rediger une ordonnance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "label", 105)(11, "span");
    \u0275\u0275text(12, "Medicaments *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 106);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.medicaments, $event) || (ctx_r2.ordonnanceForm.medicaments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 107)(15, "span");
    \u0275\u0275text(16, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.posologie, $event) || (ctx_r2.ordonnanceForm.posologie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 107)(19, "span");
    \u0275\u0275text(20, "Date d'expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.dateExpiration, $event) || (ctx_r2.ordonnanceForm.dateExpiration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 105)(23, "span");
    \u0275\u0275text(24, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 110);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.instructions, $event) || (ctx_r2.ordonnanceForm.instructions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "footer")(27, "button", 111)(28, "span", 15);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 88);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_19_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetOrdonnanceForm());
    });
    \u0275\u0275elementStart(32, "span", 15);
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
function MedecinComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 38)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "div", 40);
    \u0275\u0275text(6, "Dossier patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, MedecinComponent_ng_container_33_div_13_Template, 18, 7, "div", 41)(14, MedecinComponent_ng_container_33_div_14_Template, 4, 0, "div", 42)(15, MedecinComponent_ng_container_33_div_15_Template, 4, 1, "div", 43)(16, MedecinComponent_ng_container_33_section_16_Template, 4, 3, "section", 44)(17, MedecinComponent_ng_container_33_section_17_Template, 134, 22, "section", 45)(18, MedecinComponent_ng_container_33_section_18_Template, 10, 3, "section", 44)(19, MedecinComponent_ng_container_33_section_19_Template, 35, 8, "section", 44);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("hero-avatar hero-avatar--", ctx_r2.selectedPatient.statutTone, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.initials);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r2.selectedPatient.age, " ans - CIN ", ctx_r2.selectedPatient.cin || "-", " - Groupe ", ctx_r2.selectedPatient.groupeSanguin || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("pill pill--", ctx_r2.selectedPatient.statutTone, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.statutLabel);
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
  }
}
function MedecinComponent_div_34_section_16_Template(rf, ctx) {
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
function MedecinComponent_div_34_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function MedecinComponent_div_34_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editInstructions());
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Modifier ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_34_p_22_Template(rf, ctx) {
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
function MedecinComponent_div_34_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "textarea", 120);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_div_34_div_23_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.instructionDraft, $event) || (ctx_r2.instructionDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 121)(3, "button", 87);
    \u0275\u0275listener("click", function MedecinComponent_div_34_div_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveOrdonnanceInstructions());
    });
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 122);
    \u0275\u0275listener("click", function MedecinComponent_div_34_div_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
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
function MedecinComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function MedecinComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrdonnance());
    });
    \u0275\u0275elementStart(1, "article", 113);
    \u0275\u0275listener("click", function MedecinComponent_div_34_Template_article_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header")(3, "div")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 114);
    \u0275\u0275listener("click", function MedecinComponent_div_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrdonnance());
    });
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "section")(12, "label");
    \u0275\u0275text(13, "Medicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, MedecinComponent_div_34_section_16_Template, 5, 1, "section", 22);
    \u0275\u0275elementStart(17, "section")(18, "div", 115)(19, "label");
    \u0275\u0275text(20, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, MedecinComponent_div_34_button_21_Template, 4, 0, "button", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, MedecinComponent_div_34_p_22_Template, 2, 1, "p", 22)(23, MedecinComponent_div_34_div_23_Template, 9, 5, "div", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "footer")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ordonnance #", ctx_r2.selectedOrdonnance.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.selectedOrdonnance.dateEmission));
    \u0275\u0275advance(8);
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
  isLight = true;
  isLoadingPatients = true;
  isLoadingDetails = false;
  isSaving = false;
  loadError = "";
  detailError = "";
  searchQuery = "";
  activeTab = "resume";
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
  constructor(patientService, ordonnanceService, constantesService, dossierService, instructionsService, authService) {
    this.patientService = patientService;
    this.ordonnanceService = ordonnanceService;
    this.constantesService = constantesService;
    this.dossierService = dossierService;
    this.instructionsService = instructionsService;
    this.authService = authService;
  }
  ngOnInit() {
    this.loadPatients();
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
    return this.patients.filter((patient) => patient.nomComplet.toLowerCase().includes(query) || (patient.cin ?? "").toLowerCase().includes(query) || patient.pathologie.toLowerCase().includes(query) || patient.statutLabel.toLowerCase().includes(query));
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
    this.ordonnanceForm = this.emptyOrdonnanceForm();
    this.instructionsForm = this.toInstructionsForm(null, patient.groupeSanguin);
    this.isLoadingDetails = true;
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
      abordVasculaire: this.joinSelected([
        [f.abordFav, "FAV"],
        [f.abordCatheter, "Catheter"],
        [f.abordGoretex, "Goretex"]
      ]),
      localisationAbord: this.joinSelected([
        [f.locBrasG, "Bras G"],
        [f.locBrasD, "Bras D"],
        [f.locJugulaire, "Jugulaire"]
      ]),
      aiguilles: this.joinSelected([
        [f.aiguilles15, "15G"],
        [f.aiguilles16, "16G"],
        [f.aiguilles17, "17G"]
      ]),
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
      abordFav: this.containsValue(abord, "FAV"),
      abordCatheter: this.containsValue(abord, "Catheter"),
      abordGoretex: this.containsValue(abord, "Goretex"),
      locBrasG: this.containsValue(localisation, "Bras G"),
      locBrasD: this.containsValue(localisation, "Bras D"),
      locJugulaire: this.containsValue(localisation, "Jugulaire"),
      aiguilles15: this.containsValue(aiguilles, "15G"),
      aiguilles16: this.containsValue(aiguilles, "16G"),
      aiguilles17: this.containsValue(aiguilles, "17G"),
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
  joinSelected(items) {
    return items.filter(([selected]) => selected).map(([, value]) => value).join(", ");
  }
  containsValue(source, value) {
    return source.split(",").map((item) => item.trim()).includes(value);
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
    const statut = (patient.statut ?? "STABLE").toUpperCase();
    const tone = statut === "CRITIQUE" ? "critical" : statut === "ATTENTION" ? "warning" : "stable";
    return __spreadProps(__spreadValues({}, patient), {
      age: this.calculateAge(patient.dateNaissance),
      initials: `${patient.prenom?.[0] ?? ""}${patient.nom?.[0] ?? ""}`.toUpperCase(),
      nomComplet: `${patient.prenom ?? ""} ${patient.nom ?? ""}`.trim(),
      statutLabel: tone === "critical" ? "Critique" : tone === "warning" ? "Attention" : "Stable",
      statutTone: tone,
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
      abordFav: false,
      abordCatheter: false,
      abordGoretex: false,
      locBrasG: false,
      locBrasD: false,
      locJugulaire: false,
      aiguilles15: false,
      aiguilles16: false,
      aiguilles17: false,
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
    return new (__ngFactoryType__ || _MedecinComponent)(\u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(OrdonnanceService), \u0275\u0275directiveInject(ConstantesVitalesService), \u0275\u0275directiveInject(DossierPatientService), \u0275\u0275directiveInject(PatientInstructionsService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MedecinComponent, selectors: [["app-medecin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 10, consts: [[1, "toast-stack"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "doctor-shell"], [1, "doctor-topbar"], [1, "brand"], [1, "brand__mark"], ["width", "28", "height", "28", "viewBox", "0 0 52 52", "fill", "none"], ["cx", "26", "cy", "26", "r", "24", "fill", "rgba(0,217,196,0.15)", "stroke", "rgba(0,217,196,0.5)", "stroke-width", "1.5"], ["d", "M26 13v10M21 18h10", "stroke", "#00D9C4", "stroke-width", "2.8", "stroke-linecap", "round"], ["d", "M14 33c0 0 3-9 6-9s4 6 6 6 3-9 6-9 6 9 6 9", "stroke", "#00D9C4", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["class", "doctor-profile", 4, "ngIf"], [1, "doctor-layout"], [1, "patients-panel"], [1, "panel-heading"], [1, "search-box"], [1, "material-icons"], ["type", "search", "placeholder", "Nom, CIN, statut...", 3, "ngModelChange", "ngModel"], ["class", "state-box", 4, "ngIf"], ["class", "state-box state-box--error", 4, "ngIf"], ["class", "patient-list", 4, "ngIf"], [1, "patient-workspace"], ["class", "empty-detail", 4, "ngIf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "doctor-profile"], [1, "doctor-profile__avatar"], [1, "doctor-profile__text"], ["type", "button", 1, "icon-button", 3, "click", "title"], ["type", "button", "title", "Deconnexion", 1, "icon-button", "icon-button--danger", 3, "click"], [1, "state-box"], [1, "material-icons", "spin"], [1, "state-box", "state-box--error"], [1, "patient-list"], ["class", "patient-row", "type", "button", 3, "patient-row--active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "patient-row", 3, "click"], [1, "patient-row__body"], [1, "empty-detail"], [1, "patient-hero"], [1, "hero-copy"], [1, "eyebrow"], ["class", "quick-actions", 4, "ngIf"], ["class", "detail-loading", 4, "ngIf"], ["class", "detail-error", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], ["class", "tab-content instr-content", 4, "ngIf"], [1, "quick-actions"], ["type", "button", 1, "quick-btn", 3, "click"], [1, "detail-loading"], [1, "detail-error"], [1, "tab-content"], ["class", "latest-vitals", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "latest-vitals"], [1, "vital-strip"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "tab-content", "instr-content"], [1, "instr-bloc"], [1, "instr-bloc__header"], [1, "instr-grid"], [1, "instr-field"], ["type", "number", "placeholder", "Ex: 65", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 170", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], [1, "instr-check-group"], [1, "instr-check-title"], [1, "instr-checks"], [1, "instr-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 140", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 90", 3, "ngModelChange", "ngModel"], [1, "instr-check", "instr-check--bold"], ["class", "instr-sub", 4, "ngIf"], [1, "instr-check-group", 2, "margin-top", "12px"], [1, "instr-field", "instr-field--wide"], ["rows", "3", "placeholder", "Ex: Penicilline, Iode...", 3, "ngModelChange", "ngModel"], [1, "instr-actions"], ["type", "button", 1, "primary-button", 3, "click", "disabled"], ["type", "button", 1, "ghost-button", 3, "click"], [1, "instr-sub"], ["class", "instr-inline-input", "type", "number", "placeholder", "UI", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "instr-field", "instr-field--sm"], ["type", "number", "placeholder", "Ex: 3", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "UI", 1, "instr-inline-input", 3, "ngModelChange", "ngModel"], [1, "instr-label-sm"], ["type", "number", "placeholder", "mg", 1, "instr-inline-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 2", 3, "ngModelChange", "ngModel"], [1, "ordonnance-toolbar"], ["type", "button", 1, "primary-button", 3, "click"], ["class", "ordonnance-list", 4, "ngIf"], [1, "ordonnance-list"], ["class", "ordonnance-card", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "ordonnance-card", 3, "click"], [1, "ordonnance-card__body"], [1, "prescription-form", 3, "ngSubmit"], [1, "field", "field--wide"], ["name", "medicaments", "rows", "5", "placeholder", "Ex: Epoetine alfa 4000 UI...", 3, "ngModelChange", "ngModel"], [1, "field"], ["name", "posologie", "type", "text", "placeholder", "Ex: 1 injection / semaine", 3, "ngModelChange", "ngModel"], ["name", "dateExpiration", "type", "date", 3, "ngModelChange", "ngModel"], ["name", "instructions", "rows", "3", "placeholder", "Surveillance, remarques ou consignes...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", 3, "disabled"], [1, "modal-backdrop", 3, "click"], [1, "ordonnance-modal", 3, "click"], ["type", "button", "title", "Fermer", 1, "icon-button", 3, "click"], [1, "modal-section-title"], ["class", "text-button", "type", "button", 3, "click", 4, "ngIf"], ["class", "instruction-editor", 4, "ngIf"], ["type", "button", 1, "text-button", 3, "click"], [1, "instruction-editor"], ["rows", "4", "placeholder", "Ajouter ou modifier les instructions du patient...", 3, "ngModelChange", "ngModel"], [1, "instruction-editor__actions"], ["type", "button", 1, "ghost-button", 3, "click", "disabled"]], template: function MedecinComponent_Template(rf, ctx) {
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
      \u0275\u0275template(15, MedecinComponent_div_15_Template, 14, 6, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "aside", 12)(18, "div", 13)(19, "div")(20, "span");
      \u0275\u0275text(21, "Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "strong");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "label", 14)(25, "span", 15);
      \u0275\u0275text(26, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, MedecinComponent_div_28_Template, 4, 0, "div", 17)(29, MedecinComponent_div_29_Template, 4, 1, "div", 18)(30, MedecinComponent_div_30_Template, 3, 2, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "main", 20);
      \u0275\u0275template(32, MedecinComponent_section_32_Template, 7, 0, "section", 21)(33, MedecinComponent_ng_container_33_Template, 20, 19, "ng-container", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, MedecinComponent_div_34_Template, 29, 12, "div", 23);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.currentUser);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.filteredPatients.length);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoadingPatients);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingPatients && ctx.loadError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingPatients && !ctx.loadError);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedPatient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPatient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedOrdonnance);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  color: #18212f !important;\n  background: #f0f4f8 !important;\n  --c-bg: #f0f4f8;\n  --c-card: #ffffff;\n  --c-surface: #f8fafc;\n  --c-border: rgba(148,163,184,.28);\n  --c-text-1: #0f172a;\n  --c-text-2: #334155;\n  --c-text-3: #64748b;\n}\n.doctor-shell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: #18212f !important;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 124, 117, 0.08) 0%,\n      transparent 40%),\n    linear-gradient(\n      225deg,\n      rgba(59, 130, 246, 0.06) 0%,\n      transparent 40%),\n    #f0f4f8 !important;\n}\n.doctor-shell[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  background: #f0f4f8;\n}\n.doctor-topbar[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid rgba(148, 163, 184, 0.28);\n  backdrop-filter: blur(14px);\n}\n.brand[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%], \n.panel-heading[_ngcontent-%COMP%], \n.tabs[_ngcontent-%COMP%], \n.ordonnance-toolbar[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.brand[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.1);\n  border: 1px solid rgba(0, 217, 196, 0.3);\n}\n.brand[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) {\n  font-size: 12px;\n  color: #64748b;\n}\n.doctor-profile[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.doctor-profile__avatar[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%]   .hero-avatar[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%]   .patient-row__avatar[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.doctor-profile__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  font-weight: 800;\n  color: #147c75;\n  background: #d9f2ee;\n}\n.doctor-profile__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.doctor-profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.doctor-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.doctor-layout[_ngcontent-%COMP%] {\n  min-height: 0;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 340px minmax(0, 1fr);\n  background: #f0f4f8 !important;\n}\n.patients-panel[_ngcontent-%COMP%] {\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.82);\n  border-right: 1px solid rgba(148, 163, 184, 0.3);\n}\n.panel-heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 22px 20px 14px;\n}\n.panel-heading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.panel-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n.panel-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 28px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 999px;\n  color: #147c75;\n  background: #d9f2ee;\n}\n.search-box[_ngcontent-%COMP%] {\n  margin: 0 20px 16px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border: 1px solid rgba(148, 163, 184, 0.34);\n  border-radius: 8px;\n  background: #ffffff;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  color: #18212f;\n  font: inherit;\n  background: transparent;\n}\n.patient-list[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow-y: auto;\n  padding: 0 12px 16px;\n}\n.patient-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  text-align: left;\n  color: inherit;\n  background: transparent;\n  cursor: pointer;\n}\n.patient-row[_ngcontent-%COMP%]:hover, \n.patient-row--active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: rgba(20, 124, 117, 0.24);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07);\n}\n.patient-row__avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 800;\n}\n.patient-row__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.patient-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.patient-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.patient-row__avatar--stable[_ngcontent-%COMP%], \n.hero-avatar--stable[_ngcontent-%COMP%] {\n  color: #147c75;\n  background: #d9f2ee;\n}\n.patient-row__avatar--warning[_ngcontent-%COMP%], \n.hero-avatar--warning[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.patient-row__avatar--critical[_ngcontent-%COMP%], \n.hero-avatar--critical[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #147c75;\n}\n.status-dot--warning[_ngcontent-%COMP%] {\n  background: #d99000;\n}\n.status-dot--critical[_ngcontent-%COMP%] {\n  background: #d92d20;\n}\n.patient-workspace[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-y: auto;\n  padding: 28px;\n  background: #f0f4f8 !important;\n  color: #18212f !important;\n}\n.empty-detail[_ngcontent-%COMP%], \n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: #64748b;\n}\n.empty-detail[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 128px);\n  flex-direction: column;\n  text-align: center;\n}\n.empty-detail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #94a3b8;\n}\n.empty-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n}\n.empty-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0;\n  line-height: 1.6;\n}\n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px dashed rgba(148, 163, 184, 0.45);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.58);\n}\n.state-box--error[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  color: #b42318;\n  border-color: rgba(217, 45, 32, 0.25);\n  background: rgba(255, 224, 223, 0.58);\n}\n.patient-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  background: #ffffff;\n  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);\n}\n.hero-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 900;\n}\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 30px;\n  letter-spacing: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #147c75;\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin: 18px 0 4px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 56px;\n  padding: 0 18px;\n  border: 1px solid rgba(148, 163, 184, 0.28);\n  border-radius: 10px;\n  background: #ffffff;\n  color: #475569;\n  font: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.18s;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.quick-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #147c75;\n}\n.quick-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  min-width: 22px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 900;\n  background: rgba(20, 124, 117, 0.12);\n  color: #147c75;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(20, 124, 117, 0.4);\n  box-shadow: 0 6px 20px rgba(20, 124, 117, 0.12);\n  color: #0f172a;\n}\n.quick-btn--active[_ngcontent-%COMP%] {\n  background: #147c75;\n  border-color: #147c75;\n  color: #ffffff;\n  box-shadow: 0 8px 24px rgba(20, 124, 117, 0.25);\n}\n.quick-btn--active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.quick-btn--active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n  color: #ffffff;\n}\n.tabs[_ngcontent-%COMP%] {\n  gap: 6px;\n  margin: 20px 0;\n  padding: 6px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.28);\n  background: rgba(255, 255, 255, 0.72);\n}\n.tabs__item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 0;\n  border-radius: 6px;\n  color: #475569;\n  background: transparent;\n  font-weight: 800;\n  cursor: pointer;\n}\n.tabs__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.tabs__item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  min-width: 22px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: rgba(20, 124, 117, 0.12);\n}\n.tabs__item--active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #147c75;\n  box-shadow: 0 10px 20px rgba(20, 124, 117, 0.18);\n}\n.tabs__item--active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n}\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  background: transparent;\n  color: #18212f !important;\n}\n.metric-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.metric-card[_ngcontent-%COMP%], \n.info-panel[_ngcontent-%COMP%], \n.latest-vitals[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 8px;\n  background: #ffffff !important;\n  color: #18212f !important;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.metric-card[_ngcontent-%COMP%] {\n  min-height: 104px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #ffffff !important;\n}\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #0f172a !important;\n}\n.split-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 18px;\n}\n.info-panel[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.info-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  font-weight: 900;\n}\n.info-panel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n}\n.info-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.info-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eef2f6;\n}\n.info-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.info-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n}\n.info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  font-weight: 500;\n}\n.latest-vitals[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: minmax(190px, auto) minmax(0, 1fr);\n  gap: 16px;\n}\n.latest-vitals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.latest-vitals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 18px;\n}\n.latest-vitals[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: 0;\n  padding: 12px;\n  border-radius: 8px;\n  background: #eef7ff;\n}\n.vital-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.vital-strip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 8px;\n  color: #475569;\n  background: #f8fafc;\n  text-align: center;\n}\n.vital-strip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #18212f;\n  font-size: 20px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 8px;\n  background: #ffffff !important;\n  color: #18212f !important;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: #ffffff !important;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid #e8edf2;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8fafc !important;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a !important;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.ordonnance-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 16px;\n}\n.ordonnance-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.ordonnance-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 8px;\n  color: #18212f !important;\n  background: #ffffff !important;\n  cursor: pointer;\n}\n.ordonnance-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(20, 124, 117, 0.38);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.ordonnance-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n}\n.ordonnance-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  text-align: left;\n}\n.ordonnance-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.prescription-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  padding: 20px;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   .field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #eef2f6;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n  font-size: 30px;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 4px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 13px;\n  font-weight: 800;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  border-radius: 8px;\n  padding: 11px 12px;\n  resize: vertical;\n  color: #18212f;\n  background: #f8fafc;\n  font: inherit;\n  outline: none;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #147c75;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(20, 124, 117, 0.12);\n}\n.icon-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%], \n.toast[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 8px;\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n}\n.icon-button[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  color: #475569;\n  background: #ffffff;\n}\n.icon-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  color: #147c75;\n  border-color: rgba(20, 124, 117, 0.3);\n}\n.icon-button--danger[_ngcontent-%COMP%]:hover {\n  color: #b42318;\n  border-color: rgba(180, 35, 24, 0.3);\n}\n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 16px;\n}\n.primary-button[_ngcontent-%COMP%] {\n  border: 0;\n  color: #ffffff;\n  background: #147c75;\n}\n.primary-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.ghost-button[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  color: #475569;\n  background: #ffffff;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n.pill--stable[_ngcontent-%COMP%] {\n  color: #147c75;\n  background: #d9f2ee;\n}\n.pill--warning[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.pill--critical[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.pill--neutral[_ngcontent-%COMP%] {\n  color: #475569;\n  background: #e2e8f0;\n}\n.toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 50;\n  display: grid;\n  gap: 10px;\n}\n.toast[_ngcontent-%COMP%] {\n  max-width: 360px;\n  justify-content: flex-start;\n  padding: 12px 14px;\n  border: 1px solid rgba(148, 163, 184, 0.32);\n  color: #18212f;\n  background: #ffffff;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.14);\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.toast--success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n}\n.toast--warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d99000;\n}\n.toast--error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d92d20;\n}\n.toast--info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2f6fed;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  background: rgba(15, 23, 42, 0.48);\n  backdrop-filter: blur(8px);\n}\n.ordonnance-modal[_ngcontent-%COMP%] {\n  width: min(620px, 100%);\n  max-height: calc(100vh - 48px);\n  overflow-y: auto;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.28);\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   section[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  border-bottom: 1px solid #eef2f6;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eef2f6;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   .modal-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.7;\n}\n.instr-content[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n.instr-bloc[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n.instr-bloc__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 800;\n  font-size: 14px;\n  color: #0f172a;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #eef2f6;\n}\n.instr-bloc__header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n  font-size: 18px;\n}\n.instr-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.instr-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.instr-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #475569;\n}\n.instr-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.instr-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  border-radius: 8px;\n  padding: 9px 12px;\n  font: inherit;\n  font-size: 13px;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  resize: vertical;\n  appearance: none;\n  width: 100%;\n}\n.instr-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.instr-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #147c75;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(20, 124, 117, 0.1);\n}\n.instr-field--sm[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.instr-field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.instr-check-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.instr-check-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 8px;\n}\n.instr-checks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n}\n.instr-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.instr-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #147c75;\n  cursor: pointer;\n}\n.instr-check--bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #94a3b8;\n}\n.instr-sub[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.instr-inline-input[_ngcontent-%COMP%] {\n  width: 90px;\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  border-radius: 6px;\n  padding: 6px 10px;\n  font: inherit;\n  font-size: 13px;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n}\n.instr-inline-input[_ngcontent-%COMP%]:focus {\n  border-color: #147c75;\n  background: #fff;\n}\n.instr-label-sm[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.instr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding-top: 4px;\n}\nbody.theme-dark[_nghost-%COMP%]   .instr-bloc[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-bloc[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .instr-bloc__header[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-bloc__header[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .instr-check-title[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-check-title[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .instr-check[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-check[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .instr-label-sm[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-label-sm[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .instr-check--bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-check--bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .instr-inline-input[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-inline-input[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1e293b !important;\n  color: #e0eaf8 !important;\n}\nbody:not(.theme-dark)[_nghost-%COMP%]   .instr-check-title[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .instr-check-title[_ngcontent-%COMP%], \nbody:not(.theme-dark)[_nghost-%COMP%]   .instr-check[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .instr-check[_ngcontent-%COMP%], \nbody:not(.theme-dark)[_nghost-%COMP%]   .instr-label-sm[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .instr-label-sm[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\nbody:not(.theme-dark)[_nghost-%COMP%]   .instr-check--bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .instr-check--bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\nbody:not(.theme-dark)[_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .instr-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #334155 !important;\n}\nbody:not(.theme-dark)[_nghost-%COMP%]   .field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\nbody:not(.theme-dark)[_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\nbody:not(.theme-dark)[_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], body:not(.theme-dark)   [_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #475569 !important;\n}\n.text-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  color: #147c75;\n  background: transparent;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 900;\n  cursor: pointer;\n}\n.text-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.instruction-editor[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.instruction-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  border-radius: 8px;\n  padding: 11px 12px;\n  resize: vertical;\n  color: #18212f;\n  background: #f8fafc;\n  font: inherit;\n  outline: none;\n}\n.instruction-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #147c75;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(20, 124, 117, 0.12);\n}\n.instruction-editor__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%]::before, body.theme-dark   [_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%]::before {\n  background: #30384a !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-layout[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-layout[_ngcontent-%COMP%] {\n  background: #0b111e !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-topbar[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-topbar[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.92) !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08) !important;\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .doctor-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-profile__avatar[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-profile__avatar[_ngcontent-%COMP%] {\n  color: #147c75 !important;\n  background: rgba(20, 124, 117, 0.25) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patients-panel[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patients-panel[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.82) !important;\n  border-right-color: rgba(255, 255, 255, 0.08) !important;\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #147c75 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-workspace[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-workspace[_ngcontent-%COMP%] {\n  background: #0b111e !important;\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]:hover, body.theme-dark   [_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]:hover, \nbody.theme-dark[_nghost-%COMP%]   .patient-row--active[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-row--active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .search-box[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .tabs__item[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .tabs__item[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .tabs__item--active[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .tabs__item--active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  background: #147c75 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .latest-vitals[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .latest-vitals[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n  color: #e0eaf8 !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .table-wrap[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n  border-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .icon-button[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .icon-button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .ghost-button[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ghost-button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .state-box[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .state-box[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .detail-loading[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .detail-loading[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .quick-btn[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .quick-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .quick-btn--active[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .quick-btn--active[_ngcontent-%COMP%] {\n  background: #147c75 !important;\n  border-color: #147c75 !important;\n  color: #ffffff !important;\n}\n@media (max-width: 1080px) {\n  .doctor-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 300px minmax(0, 1fr);\n  }\n  .metric-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .split-grid[_ngcontent-%COMP%], \n   .latest-vitals[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 780px) {\n  .doctor-topbar[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 72px;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 16px;\n  }\n  .doctor-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .patients-panel[_ngcontent-%COMP%] {\n    max-height: 360px;\n    border-right: 0;\n    border-bottom: 1px solid rgba(148, 163, 184, 0.3);\n  }\n  .patient-workspace[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .patient-hero[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .patient-hero[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-self: flex-start;\n  }\n  .tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .tabs__item[_ngcontent-%COMP%] {\n    min-width: 138px;\n  }\n  .prescription-form[_ngcontent-%COMP%], \n   .metric-grid[_ngcontent-%COMP%], \n   .vital-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=medecin.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MedecinComponent, { className: "MedecinComponent", filePath: "app\\pages\\medecin\\medecin.component.ts", lineNumber: 91 });
})();
export {
  MedecinComponent
};
//# sourceMappingURL=chunk-AOJM2PJU.js.map
