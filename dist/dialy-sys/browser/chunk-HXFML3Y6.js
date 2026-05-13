import {
  PatientService
} from "./chunk-WYLEWLM2.js";
import {
  SeanceService
} from "./chunk-YYTEJVF7.js";
import {
  AuthService,
  environment
} from "./chunk-CJHGJ72Z.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-UXOLEOXG.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  NgClass,
  NgForOf,
  NgIf,
  Router
} from "./chunk-UMA4ZBEK.js";
import {
  Subject,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues,
  catchError,
  forkJoin,
  of,
  takeUntil,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SO5DYVYC.js";

// src/services/utilisateur.service.ts
var UtilisateurService = class _UtilisateurService {
  http;
  api = `${environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${this.api}/utilisateurs`);
  }
  getByRole(roleName) {
    return this.http.get(`${this.api}/utilisateurs/role/${roleName}`);
  }
  create(payload) {
    return this.http.post(`${this.api}/auth/register`, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.api}/utilisateurs/${id}`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.api}/utilisateurs/${id}`);
  }
  toggleActif(id) {
    return this.http.put(`${this.api}/utilisateurs/${id}/toggle-actif`, {});
  }
  resetPassword(loginOuEmail) {
    return this.http.post(`${this.api}/auth/reset-password`, { email: loginOuEmail });
  }
  static \u0275fac = function UtilisateurService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilisateurService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilisateurService, factory: _UtilisateurService.\u0275fac, providedIn: "root" });
};

// src/services/machine.service.ts
var MachineService = class _MachineService {
  http;
  api = `${environment.apiUrl}/machines`;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.api);
  }
  getAvailable(date, heureDebut, heureFin, excludeSeanceId) {
    let params = new HttpParams().set("date", date).set("heureDebut", this.ensureTimeWithSeconds(heureDebut)).set("heureFin", this.ensureTimeWithSeconds(heureFin));
    if (excludeSeanceId != null) {
      params = params.set("excludeSeanceId", excludeSeanceId);
    }
    return this.http.get(`${this.api}/disponibles`, { params });
  }
  ensureTimeWithSeconds(value) {
    return value?.length === 5 ? `${value}:00` : value;
  }
  static \u0275fac = function MachineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MachineService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MachineService, factory: _MachineService.\u0275fac, providedIn: "root" });
};

// src/services/horaire-travail.service.ts
var HoraireTravailService = class _HoraireTravailService {
  http;
  api = `${environment.apiUrl}/admin/horaires`;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.api);
  }
  create(payload) {
    return this.http.post(this.api, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.api}/${id}`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
  static \u0275fac = function HoraireTravailService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HoraireTravailService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HoraireTravailService, factory: _HoraireTravailService.\u0275fac, providedIn: "root" });
};

// src/services/admin-settings.service.ts
var AdminSettingsService = class _AdminSettingsService {
  http;
  api = `${environment.apiUrl}/admin/settings`;
  constructor(http) {
    this.http = http;
  }
  get() {
    return this.http.get(this.api);
  }
  update(payload) {
    return this.http.put(this.api, payload);
  }
  static \u0275fac = function AdminSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSettingsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminSettingsService, factory: _AdminSettingsService.\u0275fac, providedIn: "root" });
};

// src/services/role-permission.service.ts
var RolePermissionService = class _RolePermissionService {
  http;
  api = `${environment.apiUrl}/admin/role-permissions`;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.api);
  }
  update(roleName, payload) {
    return this.http.put(`${this.api}/${roleName}`, payload);
  }
  static \u0275fac = function RolePermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolePermissionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RolePermissionService, factory: _RolePermissionService.\u0275fac, providedIn: "root" });
};

// src/app/pages/admin/admin.component.ts
var _c0 = ["adminMain"];
function AdminComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function AdminComponent_div_1_Template_div_click_0_listener() {
      const t_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeToast(t_r3.id));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35)(6, "span", 16);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("toast toast--", t_r3.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.toastIcon(t_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.message);
  }
}
function AdminComponent_div_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouveau profil");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminComponent_div_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Informations personnelles");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminComponent_div_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Authentification");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminComponent_div_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Choisissez le type de compte \xE0 cr\xE9er");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminComponent_div_2_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Patient \xB7 coordonn\xE9es & donn\xE9es m\xE9dicales");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminComponent_div_2_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.wizardSelectedConfig == null ? null : ctx_r3.wizardSelectedConfig.label, " \xB7 identit\xE9 & contact");
  }
}
function AdminComponent_div_2_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Identifiants de connexion g\xE9n\xE9r\xE9s automatiquement");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminComponent_div_2_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 49);
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46)(4, "span");
    \u0275\u0275text(5, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7, "Authentification");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-step__line--done", ctx_r3.wizardStep > 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-step--active", ctx_r3.wizardStep === 3);
  }
}
function AdminComponent_div_2_section_35_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", role_r7.color);
  }
}
function AdminComponent_div_2_section_35_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function AdminComponent_div_2_section_35_div_6_Template_div_click_0_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.wizardRole = role_r7.id;
      return \u0275\u0275resetView(ctx_r3.onWizardRoleChange());
    });
    \u0275\u0275element(1, "div", 64);
    \u0275\u0275elementStart(2, "div", 65)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 66)(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminComponent_div_2_section_35_div_6_div_10_Template, 3, 2, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("wz-role-card--selected", ctx_r3.wizardRole === role_r7.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", role_r7.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", role_r7.color + "18")("border-color", role_r7.color + "40");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", role_r7.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r7.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r7.desc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardRole === role_r7.id);
  }
}
function AdminComponent_div_2_section_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 59)(1, "p", 60)(2, "span", 16);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " S\xE9lectionnez le type de profil \xE0 cr\xE9er. Ce choix d\xE9finira les permissions et les informations demand\xE9es. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61);
    \u0275\u0275template(6, AdminComponent_div_2_section_35_div_6_Template, 11, 14, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r3.wizardRoleOptions);
  }
}
function AdminComponent_div_2_section_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r3.wizardSelectedConfig.color + "18")("border-color", ctx_r3.wizardSelectedConfig.color + "40")("color", ctx_r3.wizardSelectedConfig.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.wizardSelectedConfig.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.wizardSelectedConfig.label, " ");
  }
}
function AdminComponent_div_2_section_36_ng_container_2_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("nom"));
  }
}
function AdminComponent_div_2_section_36_ng_container_2_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("prenom"));
  }
}
function AdminComponent_div_2_section_36_ng_container_2_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("dateNaissance"));
  }
}
function AdminComponent_div_2_section_36_ng_container_2_small_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("genre"));
  }
}
function AdminComponent_div_2_section_36_ng_container_2_small_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("cin"));
  }
}
function AdminComponent_div_2_section_36_ng_container_2_small_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("telephone"));
  }
}
function AdminComponent_div_2_section_36_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 73)(2, "span", 16);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 74)(6, "div", 75)(7, "label");
    \u0275\u0275text(8, "Nom ");
    \u0275\u0275elementStart(9, "span", 76);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.nom, $event) || (ctx_r3.wizardData.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("nom"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminComponent_div_2_section_36_ng_container_2_small_12_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 75)(14, "label");
    \u0275\u0275text(15, "Pr\xE9nom ");
    \u0275\u0275elementStart(16, "span", 76);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.prenom, $event) || (ctx_r3.wizardData.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("prenom"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminComponent_div_2_section_36_ng_container_2_small_19_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 80)(21, "span", 16);
    \u0275\u0275text(22, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Donn\xE9es m\xE9dicales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 74)(25, "div", 75)(26, "label");
    \u0275\u0275text(27, "Date de naissance ");
    \u0275\u0275elementStart(28, "span", 76);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.dateNaissance, $event) || (ctx_r3.wizardData.dateNaissance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_30_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("dateNaissance"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AdminComponent_div_2_section_36_ng_container_2_small_31_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 82)(33, "label");
    \u0275\u0275text(34, "Genre ");
    \u0275\u0275elementStart(35, "span", 76);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.genre, $event) || (ctx_r3.wizardData.genre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_select_ngModelChange_37_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("genre"));
    });
    \u0275\u0275elementStart(38, "option", 84);
    \u0275\u0275text(39, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 85);
    \u0275\u0275text(41, "Homme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 86);
    \u0275\u0275text(43, "Femme");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, AdminComponent_div_2_section_36_ng_container_2_small_44_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 74)(46, "div", 75)(47, "label");
    \u0275\u0275text(48, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.cin, $event) || (ctx_r3.wizardData.cin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_49_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("cin"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, AdminComponent_div_2_section_36_ng_container_2_small_50_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 75)(52, "label");
    \u0275\u0275text(53, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.telephone, $event) || (ctx_r3.wizardData.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_2_Template_input_ngModelChange_54_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("telephone"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, AdminComponent_div_2_section_36_ng_container_2_small_55_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("nom"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("nom"));
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("prenom"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.prenom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("prenom"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("dateNaissance"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.dateNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("dateNaissance"));
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("genre"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.genre);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("genre"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("cin"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.cin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("cin"));
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("telephone"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.telephone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("telephone"));
  }
}
function AdminComponent_div_2_section_36_ng_container_3_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("nom"));
  }
}
function AdminComponent_div_2_section_36_ng_container_3_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("prenom"));
  }
}
function AdminComponent_div_2_section_36_ng_container_3_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("email"));
  }
}
function AdminComponent_div_2_section_36_ng_container_3_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.wizardError("telephone"));
  }
}
function AdminComponent_div_2_section_36_ng_container_3_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 97)(2, "label");
    \u0275\u0275text(3, "Sp\xE9cialit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_div_52_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.specialite, $event) || (ctx_r3.wizardData.specialite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_div_52_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("specialite"));
    });
    \u0275\u0275elementStart(5, "option", 98);
    \u0275\u0275text(6, "N\xE9phrologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 99);
    \u0275\u0275text(8, "G\xE9n\xE9raliste");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.specialite);
  }
}
function AdminComponent_div_2_section_36_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 73)(2, "span", 16);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 74)(6, "div", 75)(7, "label");
    \u0275\u0275text(8, "Nom ");
    \u0275\u0275elementStart(9, "span", 76);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.nom, $event) || (ctx_r3.wizardData.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("nom"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminComponent_div_2_section_36_ng_container_3_small_12_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 75)(14, "label");
    \u0275\u0275text(15, "Pr\xE9nom ");
    \u0275\u0275elementStart(16, "span", 76);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.prenom, $event) || (ctx_r3.wizardData.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("prenom"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminComponent_div_2_section_36_ng_container_3_small_19_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 74)(21, "div", 90)(22, "label");
    \u0275\u0275text(23, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.mat, $event) || (ctx_r3.wizardData.mat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 75)(26, "label");
    \u0275\u0275text(27, "Email professionnel ");
    \u0275\u0275elementStart(28, "span", 76);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.email, $event) || (ctx_r3.wizardData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_30_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("email"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AdminComponent_div_2_section_36_ng_container_3_small_31_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 80)(33, "span", 16);
    \u0275\u0275text(34, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Poste & Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 74)(37, "div", 75)(38, "label");
    \u0275\u0275text(39, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.telephone, $event) || (ctx_r3.wizardData.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearWizardError("telephone"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, AdminComponent_div_2_section_36_ng_container_3_small_41_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 75)(43, "label");
    \u0275\u0275text(44, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.service, $event) || (ctx_r3.wizardData.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(46, "option", 93);
    \u0275\u0275text(47, "H\xE9modialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 94);
    \u0275\u0275text(49, "Permanence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 95);
    \u0275\u0275text(51, "Laboratoire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(52, AdminComponent_div_2_section_36_ng_container_3_div_52_Template, 9, 1, "div", 96);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("nom"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("nom"));
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("prenom"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.prenom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("prenom"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.mat);
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("email"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("email"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wz-field--error", ctx_r3.hasWizardError("telephone"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.telephone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasWizardError("telephone"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.wizardData.service);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.wizardRole === "medecin");
  }
}
function AdminComponent_div_2_section_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 59);
    \u0275\u0275template(1, AdminComponent_div_2_section_36_div_1_Template, 4, 8, "div", 71)(2, AdminComponent_div_2_section_36_ng_container_2_Template, 56, 24, "ng-container", 33)(3, AdminComponent_div_2_section_36_ng_container_3_Template, 53, 19, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardSelectedConfig);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardIsPatient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.wizardIsPatient);
  }
}
function AdminComponent_div_2_section_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r3.wizardSelectedConfig.color + "18")("border-color", ctx_r3.wizardSelectedConfig.color + "40")("color", ctx_r3.wizardSelectedConfig.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.wizardSelectedConfig.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r3.wizardSelectedConfig.label, " \u2014 ", ctx_r3.wizardData.prenom, " ", ctx_r3.wizardData.nom, " ");
  }
}
function AdminComponent_div_2_section_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 59);
    \u0275\u0275template(1, AdminComponent_div_2_section_37_div_1_Template, 4, 10, "div", 71);
    \u0275\u0275elementStart(2, "div", 73)(3, "span", 16);
    \u0275\u0275text(4, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Identifiants de connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 100)(7, "span", 16);
    \u0275\u0275text(8, "mark_email_read");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "strong");
    \u0275\u0275text(11, "Le login et le mot de passe temporaire seront g\xE9n\xE9r\xE9s automatiquement.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 101)(13, "div", 102)(14, "span", 16);
    \u0275\u0275text(15, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " R\xE9capitulatif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 103)(18, "div", 104)(19, "span", 105);
    \u0275\u0275text(20, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 106);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 104)(24, "span", 105);
    \u0275\u0275text(25, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 106);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 104)(29, "span", 105);
    \u0275\u0275text(30, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 106);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 104)(34, "span", 105);
    \u0275\u0275text(35, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 106);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 104)(39, "span", 105);
    \u0275\u0275text(40, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 106);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 104)(44, "span", 105);
    \u0275\u0275text(45, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 106);
    \u0275\u0275text(47, "Envoy\xE9 par email");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardSelectedConfig);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r3.wizardSelectedConfig == null ? null : ctx_r3.wizardSelectedConfig.label);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.wizardData.prenom, " ", ctx_r3.wizardData.nom, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.wizardData.mat);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.wizardData.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.wizardData.service);
  }
}
function AdminComponent_div_2_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_2_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.wizardCancel());
    });
    \u0275\u0275text(1, "Annuler");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_2_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.wizardPrev());
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_2_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Suivant ");
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AdminComponent_div_2_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.wizardIsPatient ? "Cr\xE9er le patient" : "Cr\xE9er le profil");
  }
}
function AdminComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.wizardCancel());
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 38)(3, "div", 39)(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40)(7, "h2", 41);
    \u0275\u0275template(8, AdminComponent_div_2_ng_container_8_Template, 2, 0, "ng-container", 33)(9, AdminComponent_div_2_ng_container_9_Template, 2, 0, "ng-container", 33)(10, AdminComponent_div_2_ng_container_10_Template, 2, 0, "ng-container", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 42);
    \u0275\u0275template(12, AdminComponent_div_2_ng_container_12_Template, 2, 0, "ng-container", 33)(13, AdminComponent_div_2_ng_container_13_Template, 2, 0, "ng-container", 33)(14, AdminComponent_div_2_ng_container_14_Template, 2, 1, "ng-container", 33)(15, AdminComponent_div_2_ng_container_15_Template, 2, 0, "ng-container", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 43);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.wizardCancel());
    });
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 44)(20, "div", 45)(21, "div", 46);
    \u0275\u0275template(22, AdminComponent_div_2_span_22_Template, 2, 0, "span", 47)(23, AdminComponent_div_2_span_23_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 48);
    \u0275\u0275text(25, "R\xF4le");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "div", 49);
    \u0275\u0275elementStart(27, "div", 45)(28, "div", 46);
    \u0275\u0275template(29, AdminComponent_div_2_span_29_Template, 2, 0, "span", 47)(30, AdminComponent_div_2_span_30_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 48);
    \u0275\u0275text(32, "Informations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, AdminComponent_div_2_ng_container_33_Template, 8, 4, "ng-container", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 50);
    \u0275\u0275template(35, AdminComponent_div_2_section_35_Template, 7, 1, "section", 51)(36, AdminComponent_div_2_section_36_Template, 4, 3, "section", 51)(37, AdminComponent_div_2_section_37_Template, 48, 7, "section", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 52)(39, "div", 53);
    \u0275\u0275template(40, AdminComponent_div_2_button_40_Template, 2, 0, "button", 54)(41, AdminComponent_div_2_button_41_Template, 4, 0, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 55)(43, "span", 56);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 57)(46, "button", 58);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.wizardNext());
    });
    \u0275\u0275template(47, AdminComponent_div_2_ng_container_47_Template, 4, 0, "ng-container", 33)(48, AdminComponent_div_2_ng_container_48_Template, 4, 1, "ng-container", 33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ((tmp_2_0 = ctx_r3.wizardSelectedConfig == null ? null : ctx_r3.wizardSelectedConfig.color) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "var(--c-teal)") + "1a")("border-color", ((tmp_3_0 = ctx_r3.wizardSelectedConfig == null ? null : ctx_r3.wizardSelectedConfig.color) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "var(--c-teal)") + "50");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", (tmp_4_0 = ctx_r3.wizardSelectedConfig == null ? null : ctx_r3.wizardSelectedConfig.color) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "var(--c-teal)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r3.wizardSelectedConfig == null ? null : ctx_r3.wizardSelectedConfig.icon) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "person_add", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 2 && ctx_r3.wizardIsPatient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 2 && !ctx_r3.wizardIsPatient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 3);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("wz-step--active", ctx_r3.wizardStep === 1)("wz-step--done", ctx_r3.wizardStep > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.wizardStep > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("wz-step__line--done", ctx_r3.wizardStep > 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("wz-step--active", ctx_r3.wizardStep === 2)("wz-step--done", ctx_r3.wizardStep > 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.wizardStep > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep <= 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r3.wizardIsPatient);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep > 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\xC9tape ", ctx_r3.wizardStep, " / ", ctx_r3.wizardStepCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.wizardStep === 1 && !ctx_r3.wizardRole);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep < ctx_r3.wizardStepCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.wizardStep === ctx_r3.wizardStepCount);
  }
}
function AdminComponent_div_3_option_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    \u0275\u0275property("value", r_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r14.label);
  }
}
function AdminComponent_div_3_button_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 143);
    \u0275\u0275listener("click", function AdminComponent_div_3_button_103_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.suspendUser(ctx_r3.selectedUser));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Suspendre");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeUserModal());
    });
    \u0275\u0275elementStart(1, "div", 109);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 110)(3, "div", 111)(4, "span", 112);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 113)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 114);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 115);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeUserModal());
    });
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 116)(17, "div", 117)(18, "span", 16);
    \u0275\u0275text(19, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 118)(22, "div", 119)(23, "label");
    \u0275\u0275text(24, "Nom ");
    \u0275\u0275elementStart(25, "span", 76);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.nom, $event) || (ctx_r3.selectedUser.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 119)(29, "label");
    \u0275\u0275text(30, "Pr\xE9nom ");
    \u0275\u0275elementStart(31, "span", 76);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.prenom, $event) || (ctx_r3.selectedUser.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 119)(35, "label");
    \u0275\u0275text(36, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.mat, $event) || (ctx_r3.selectedUser.mat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 119)(39, "label");
    \u0275\u0275text(40, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 121);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.email, $event) || (ctx_r3.selectedUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 119)(43, "label");
    \u0275\u0275text(44, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.telephone, $event) || (ctx_r3.selectedUser.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 123)(47, "label");
    \u0275\u0275text(48, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.service, $event) || (ctx_r3.selectedUser.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(50, "option", 93);
    \u0275\u0275text(51, "H\xE9modialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 94);
    \u0275\u0275text(53, "Permanence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 95);
    \u0275\u0275text(55, "Laboratoire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 124)(57, "span", 16);
    \u0275\u0275text(58, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " Acc\xE8s & Connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 118)(61, "div", 119)(62, "label");
    \u0275\u0275text(63, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.login, $event) || (ctx_r3.selectedUser.login = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 119)(66, "label");
    \u0275\u0275text(67, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.username, $event) || (ctx_r3.selectedUser.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 123)(70, "label");
    \u0275\u0275text(71, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_select_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.role, $event) || (ctx_r3.selectedUser.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(73, AdminComponent_div_3_option_73_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 123)(75, "label");
    \u0275\u0275text(76, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "select", 126);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_select_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.statut, $event) || (ctx_r3.selectedUser.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminComponent_div_3_Template_select_change_77_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedUser.actif = ctx_r3.selectedUser.statut === "actif");
    });
    \u0275\u0275elementStart(78, "option", 127);
    \u0275\u0275text(79, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "option", 128);
    \u0275\u0275text(81, "Inactif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 129);
    \u0275\u0275text(83, "Suspendu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 119)(85, "label");
    \u0275\u0275text(86, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "input", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 119)(89, "label");
    \u0275\u0275text(90, "Compte actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 131)(92, "label", 132)(93, "input", 133);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_93_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.actif, $event) || (ctx_r3.selectedUser.actif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminComponent_div_3_Template_input_change_93_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedUser.statut = ctx_r3.selectedUser.actif ? "actif" : "inactif");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "span", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 135);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(97, "div", 136)(98, "div", 137)(99, "button", 138);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteUser(ctx_r3.selectedUser));
    });
    \u0275\u0275elementStart(100, "span", 16);
    \u0275\u0275text(101, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " Supprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, AdminComponent_div_3_button_103_Template, 4, 0, "button", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 140)(105, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.resetPassword(ctx_r3.selectedUser));
    });
    \u0275\u0275elementStart(106, "span", 16);
    \u0275\u0275text(107, "lock_reset");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, " R\xE9initialiser MDP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_109_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeUserModal());
    });
    \u0275\u0275text(110, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveUser());
    });
    \u0275\u0275elementStart(112, "span", 16);
    \u0275\u0275text(113, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, " Enregistrer");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("light", ctx_r3.isLight);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "color-mix(in srgb," + ctx_r3.roleColorVar(ctx_r3.selectedUser.role) + " 15%, transparent)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r3.roleColorVar(ctx_r3.selectedUser.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.initials(ctx_r3.selectedUser));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.selectedUser == null ? null : ctx_r3.selectedUser.prenom, " ", ctx_r3.selectedUser == null ? null : ctx_r3.selectedUser.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.selectedUser == null ? null : ctx_r3.selectedUser.mat, " \xB7 ", ctx_r3.roleLabel(ctx_r3.selectedUser.role), "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r3.statusClass(ctx_r3.selectedUser.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.statusLabel(ctx_r3.selectedUser.statut));
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.nom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.prenom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.mat);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.telephone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.service);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.login);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.role);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.staffRoleOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.statut);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r3.selectedUser.dateCreation);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.actif);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedUser.actif ? "Actif" : "Inactif");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedUser.statut !== "suspendu");
  }
}
function AdminComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewPatientModal = false);
    });
    \u0275\u0275elementStart(1, "div", 144);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 110)(3, "div", 145)(4, "span", 146);
    \u0275\u0275text(5, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 113)(7, "h2");
    \u0275\u0275text(8, "Nouveau patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Renseignez les informations du patient");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 115);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewPatientModal = false);
    });
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 116)(15, "div", 117)(16, "span", 16);
    \u0275\u0275text(17, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Identit\xE9 du patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 118)(20, "div", 119)(21, "label");
    \u0275\u0275text(22, "Nom ");
    \u0275\u0275elementStart(23, "span", 76);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.nom, $event) || (ctx_r3.newPatient.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 119)(27, "label");
    \u0275\u0275text(28, "Pr\xE9nom ");
    \u0275\u0275elementStart(29, "span", 76);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.prenom, $event) || (ctx_r3.newPatient.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 119)(33, "label");
    \u0275\u0275text(34, "Date de naissance ");
    \u0275\u0275elementStart(35, "span", 76);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.dateNaissance, $event) || (ctx_r3.newPatient.dateNaissance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 147)(39, "label");
    \u0275\u0275text(40, "Genre ");
    \u0275\u0275elementStart(41, "span", 76);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.genre, $event) || (ctx_r3.newPatient.genre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(44, "option", 84);
    \u0275\u0275text(45, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 85);
    \u0275\u0275text(47, "Homme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 86);
    \u0275\u0275text(49, "Femme");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 136)(51, "div", 148)(52, "span", 149);
    \u0275\u0275text(53, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Patient");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 140)(57, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewPatientModal = false);
    });
    \u0275\u0275text(58, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveNewPatient());
    });
    \u0275\u0275elementStart(60, "span", 16);
    \u0275\u0275text(61, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " Cr\xE9er le patient");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("light", ctx_r3.isLight);
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newPatient.nom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newPatient.prenom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newPatient.dateNaissance);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newPatient.genre);
  }
}
function AdminComponent_div_5_option_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r18 = ctx.$implicit;
    \u0275\u0275property("value", r_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r18.label);
  }
}
function AdminComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewUserModal = false);
    });
    \u0275\u0275elementStart(1, "div", 150);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 151)(3, "span", 152);
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Cr\xE9er un Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 115);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewUserModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 153)(11, "div", 154)(12, "span", 16);
    \u0275\u0275text(13, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 118)(16, "div", 119)(17, "label");
    \u0275\u0275text(18, "Nom ");
    \u0275\u0275elementStart(19, "span", 76);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.nom, $event) || (ctx_r3.newUser.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 119)(23, "label");
    \u0275\u0275text(24, "Pr\xE9nom ");
    \u0275\u0275elementStart(25, "span", 76);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.prenom, $event) || (ctx_r3.newUser.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 119)(29, "label");
    \u0275\u0275text(30, "Matricule (Mat) ");
    \u0275\u0275elementStart(31, "span", 76);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.mat, $event) || (ctx_r3.newUser.mat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 119)(35, "label");
    \u0275\u0275text(36, "Email ");
    \u0275\u0275elementStart(37, "span", 76);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.email, $event) || (ctx_r3.newUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 119)(41, "label");
    \u0275\u0275text(42, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.telephone, $event) || (ctx_r3.newUser.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 119)(45, "label");
    \u0275\u0275text(46, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.service, $event) || (ctx_r3.newUser.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(48, "option", 93);
    \u0275\u0275text(49, "H\xE9modialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 94);
    \u0275\u0275text(51, "Permanence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 95);
    \u0275\u0275text(53, "Laboratoire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 157)(55, "span", 16);
    \u0275\u0275text(56, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " Acc\xE8s & Connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 118)(59, "div", 119)(60, "label");
    \u0275\u0275text(61, "Login ");
    \u0275\u0275elementStart(62, "span", 76);
    \u0275\u0275text(63, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "input", 158);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.login, $event) || (ctx_r3.newUser.login = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 119)(66, "label");
    \u0275\u0275text(67, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.username, $event) || (ctx_r3.newUser.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 119)(70, "label");
    \u0275\u0275text(71, "Mot de passe (MdP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 160);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.mdp, $event) || (ctx_r3.newUser.mdp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 119)(74, "label");
    \u0275\u0275text(75, "R\xF4le ");
    \u0275\u0275elementStart(76, "span", 76);
    \u0275\u0275text(77, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_select_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.role, $event) || (ctx_r3.newUser.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(79, AdminComponent_div_5_option_79_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 161)(81, "label");
    \u0275\u0275text(82, "Compte actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 131)(84, "label", 132)(85, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.actif, $event) || (ctx_r3.newUser.actif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "span", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 135);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(89, "div", 163)(90, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveNewUser());
    });
    \u0275\u0275elementStart(91, "span", 16);
    \u0275\u0275text(92, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " Cr\xE9er le compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewUserModal = false);
    });
    \u0275\u0275text(95, "Annuler");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("light", ctx_r3.isLight);
    \u0275\u0275advance(21);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.nom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.prenom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.mat);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.telephone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.service);
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.login);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.mdp);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.role);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.staffRoleOptions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newUser.actif);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.newUser.actif ? "Compte actif d\xE8s la cr\xE9ation" : "Compte inactif (activation manuelle requise)");
  }
}
function AdminComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showSettingsModal = false);
    });
    \u0275\u0275elementStart(1, "div", 164);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 151)(3, "span", 152);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Param\xE8tres syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 115);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showSettingsModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 153)(11, "div", 165)(12, "div", 166)(13, "span", 16);
    \u0275\u0275text(14, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 167)(17, "div", 168)(18, "b");
    \u0275\u0275text(19, "Notifications par email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Recevoir les alertes critiques par email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 132)(23, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.notificationsEmail, $event) || (ctx_r3.settings.notificationsEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "span", 134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 167)(26, "div", 168)(27, "b");
    \u0275\u0275text(28, "Notifications syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Alertes en temps r\xE9el dans l'interface");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 132)(32, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.notificationsSystem, $event) || (ctx_r3.settings.notificationsSystem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "span", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 165)(35, "div", 166)(36, "span", 16);
    \u0275\u0275text(37, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " S\xE9curit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 167)(40, "div", 168)(41, "b");
    \u0275\u0275text(42, "Double authentification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "V\xE9rification en deux \xE9tapes \xE0 la connexion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "label", 132)(46, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.doubleAuth, $event) || (ctx_r3.settings.doubleAuth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "span", 134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 167)(49, "div", 168)(50, "b");
    \u0275\u0275text(51, "Journal d'audit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Enregistrer toutes les actions administratives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "label", 132)(55, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.auditLog, $event) || (ctx_r3.settings.auditLog = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "span", 134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 167)(58, "div", 168)(59, "b");
    \u0275\u0275text(60, "Expiration de session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "D\xE9connexion automatique apr\xE8s inactivit\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 169)(64, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.sessionTimeout, $event) || (ctx_r3.settings.sessionTimeout = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(65, "option", 142);
    \u0275\u0275text(66, "15 min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 142);
    \u0275\u0275text(68, "30 min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 142);
    \u0275\u0275text(70, "1 heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 142);
    \u0275\u0275text(72, "2 heures");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(73, "div", 165)(74, "div", 166)(75, "span", 16);
    \u0275\u0275text(76, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " Pr\xE9f\xE9rences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 167)(79, "div", 168)(80, "b");
    \u0275\u0275text(81, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83, "Langue de l'interface");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 170)(85, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_select_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.langue, $event) || (ctx_r3.settings.langue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(86, "option", 171);
    \u0275\u0275text(87, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "option", 172);
    \u0275\u0275text(89, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "option", 173);
    \u0275\u0275text(91, "English");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 167)(93, "div", 168)(94, "b");
    \u0275\u0275text(95, "Format d'export");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97, "Format par d\xE9faut pour les exports");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 170)(99, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_select_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.exportFormat, $event) || (ctx_r3.settings.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(100, "option", 174);
    \u0275\u0275text(101, "CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "option", 175);
    \u0275\u0275text(103, "Excel (XLSX)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "option", 176);
    \u0275\u0275text(105, "PDF");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(106, "div", 163)(107, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveSettings());
    });
    \u0275\u0275elementStart(108, "span", 16);
    \u0275\u0275text(109, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, " Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showSettingsModal = false);
    });
    \u0275\u0275text(112, "Annuler");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("light", ctx_r3.isLight);
    \u0275\u0275advance(23);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.settings.notificationsEmail);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.settings.notificationsSystem);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.settings.doubleAuth);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.settings.auditLog);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.settings.sessionTimeout);
    \u0275\u0275advance();
    \u0275\u0275property("value", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 60);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 120);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.settings.langue);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.settings.exportFormat);
  }
}
function AdminComponent_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 154)(2, "span", 16);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Identit\xE9 du patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 118)(6, "div", 119)(7, "label");
    \u0275\u0275text(8, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 119)(11, "label");
    \u0275\u0275text(12, "Nom ");
    \u0275\u0275elementStart(13, "span", 76);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.nom, $event) || (ctx_r3.editPatient.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 119)(17, "label");
    \u0275\u0275text(18, "Pr\xE9nom ");
    \u0275\u0275elementStart(19, "span", 76);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.prenom, $event) || (ctx_r3.editPatient.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 119)(23, "label");
    \u0275\u0275text(24, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.dateNaissance, $event) || (ctx_r3.editPatient.dateNaissance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 123)(27, "label");
    \u0275\u0275text(28, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.genre, $event) || (ctx_r3.editPatient.genre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 84);
    \u0275\u0275text(31, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 85);
    \u0275\u0275text(33, "Homme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 86);
    \u0275\u0275text(35, "Femme");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 119)(37, "label");
    \u0275\u0275text(38, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.cin, $event) || (ctx_r3.editPatient.cin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 163)(41, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_div_7_div_10_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveEditPatient());
    });
    \u0275\u0275elementStart(42, "span", 16);
    \u0275\u0275text(43, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_7_div_10_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showEditPatientModal = false);
    });
    \u0275\u0275text(46, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r3.editPatient.id);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editPatient.nom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editPatient.prenom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editPatient.dateNaissance);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editPatient.genre);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editPatient.cin);
  }
}
function AdminComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AdminComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditPatientModal = false);
    });
    \u0275\u0275elementStart(1, "div", 177);
    \u0275\u0275listener("click", function AdminComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 151)(3, "span", 178);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Modifier le Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 115);
    \u0275\u0275listener("click", function AdminComponent_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditPatientModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AdminComponent_div_7_div_10_Template, 47, 6, "div", 179);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("light", ctx_r3.isLight);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.editPatient);
  }
}
function AdminComponent_div_8_div_10_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    \u0275\u0275property("value", p_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r24.prenom, " ", p_r24.nom, "");
  }
}
function AdminComponent_div_8_div_10_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r25 = ctx.$implicit;
    \u0275\u0275property("value", m_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r25);
  }
}
function AdminComponent_div_8_div_10_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 193)(1, "span", 16);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 194);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.editSeanceDates = []);
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.editSeanceDates.length, " date(s) s\xE9lectionn\xE9e(s) ");
  }
}
function AdminComponent_div_8_div_10_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r27);
  }
}
function AdminComponent_div_8_div_10_ng_container_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 198);
  }
}
function AdminComponent_div_8_div_10_ng_container_37_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 199);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_ng_container_37_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const cell_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleEditSeanceCalDay(cell_r29.date));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cal-cell--today", cell_r29.today)("cal-cell--selected", ctx_r3.isEditSeanceDaySelected(cell_r29.date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r29.day);
  }
}
function AdminComponent_div_8_div_10_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminComponent_div_8_div_10_ng_container_37_div_1_Template, 1, 0, "div", 196)(2, AdminComponent_div_8_div_10_ng_container_37_button_2_Template, 2, 5, "button", 197);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r29 === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r29 !== null);
  }
}
function AdminComponent_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 181)(2, "div", 182)(3, "div", 123)(4, "label");
    \u0275\u0275text(5, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_8_div_10_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editSeance.patientId, $event) || (ctx_r3.editSeance.patientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(7, AdminComponent_div_8_div_10_option_7_Template, 2, 3, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 119)(9, "label");
    \u0275\u0275text(10, "Heure d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_8_div_10_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editSeance.heureDebut, $event) || (ctx_r3.editSeance.heureDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_8_div_10_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onEditSeanceScheduleChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 119)(13, "label");
    \u0275\u0275text(14, "Heure fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_8_div_10_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editSeance.heureFin, $event) || (ctx_r3.editSeance.heureFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_div_8_div_10_Template_input_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onEditSeanceScheduleChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 123)(17, "label");
    \u0275\u0275text(18, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_8_div_10_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editSeance.machine, $event) || (ctx_r3.editSeance.machine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 84);
    \u0275\u0275text(21, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminComponent_div_8_div_10_option_22_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, AdminComponent_div_8_div_10_div_23_Template, 7, 1, "div", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 185)(25, "div", 186)(26, "div", 187)(27, "button", 188);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editSeanceCalPrevMonth());
    });
    \u0275\u0275elementStart(28, "span", 16);
    \u0275\u0275text(29, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "span", 189);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 188);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editSeanceCalNextMonth());
    });
    \u0275\u0275elementStart(33, "span", 16);
    \u0275\u0275text(34, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 190);
    \u0275\u0275template(36, AdminComponent_div_8_div_10_div_36_Template, 2, 1, "div", 191)(37, AdminComponent_div_8_div_10_ng_container_37_Template, 3, 2, "ng-container", 192);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 163)(39, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveEditSeance());
    });
    \u0275\u0275elementStart(40, "span", 16);
    \u0275\u0275text(41, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 107);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showEditSeanceModal = false);
    });
    \u0275\u0275text(44, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editSeance.patientId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.patientsUsers);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editSeance.heureDebut);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editSeance.heureFin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editSeance.machine);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.machines);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.editSeanceDates.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.editSeanceCalTitle);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.joursTitles);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.editSeanceCalDays);
  }
}
function AdminComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function AdminComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditSeanceModal = false);
    });
    \u0275\u0275elementStart(1, "div", 180);
    \u0275\u0275listener("click", function AdminComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 151)(3, "span", 152);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Modifier la s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 115);
    \u0275\u0275listener("click", function AdminComponent_div_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditSeanceModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AdminComponent_div_8_div_10_Template, 45, 10, "div", 179);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("light", ctx_r3.isLight);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.editSeance);
  }
}
function AdminComponent_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_button_57_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openNewProfil());
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.activeProfilRole === "patient" ? "Nouveau patient" : "Nouveau profil", " ");
  }
}
function AdminComponent_div_64_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 212)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_64_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 212)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_64_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 212)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_64_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 212)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_64_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 212)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 200)(1, "div", 201);
    \u0275\u0275listener("click", function AdminComponent_div_64_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("medecin"));
    });
    \u0275\u0275elementStart(2, "div", 202)(3, "span", 16);
    \u0275\u0275text(4, "medical_services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 203)(6, "span", 204);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 205);
    \u0275\u0275text(9, "M\xE9decins");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminComponent_div_64_span_10_Template, 3, 0, "span", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 207);
    \u0275\u0275listener("click", function AdminComponent_div_64_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("infirmier-majeur"));
    });
    \u0275\u0275elementStart(12, "div", 202)(13, "span", 16);
    \u0275\u0275text(14, "supervisor_account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 203)(16, "span", 204);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 205);
    \u0275\u0275text(19, "Inf. Majeurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AdminComponent_div_64_span_20_Template, 3, 0, "span", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 208);
    \u0275\u0275listener("click", function AdminComponent_div_64_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("infirmier"));
    });
    \u0275\u0275elementStart(22, "div", 202)(23, "span", 16);
    \u0275\u0275text(24, "local_hospital");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 203)(26, "span", 204);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 205);
    \u0275\u0275text(29, "Infirmiers");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, AdminComponent_div_64_span_30_Template, 3, 0, "span", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 209);
    \u0275\u0275listener("click", function AdminComponent_div_64_Template_div_click_31_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("aide-soignant"));
    });
    \u0275\u0275elementStart(32, "div", 202)(33, "span", 16);
    \u0275\u0275text(34, "volunteer_activism");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 203)(36, "span", 204);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 205);
    \u0275\u0275text(39, "Aides-Soignants");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, AdminComponent_div_64_span_40_Template, 3, 0, "span", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 210);
    \u0275\u0275listener("click", function AdminComponent_div_64_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("patient"));
    });
    \u0275\u0275elementStart(42, "div", 202)(43, "span", 16);
    \u0275\u0275text(44, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 203)(46, "span", 204);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 205);
    \u0275\u0275text(49, "Patients");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, AdminComponent_div_64_span_50_Template, 3, 0, "span", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 211);
    \u0275\u0275listener("click", function AdminComponent_div_64_Template_div_click_51_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("seances"));
    });
    \u0275\u0275elementStart(52, "div", 202)(53, "span", 16);
    \u0275\u0275text(54, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 203)(56, "span", 204);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 205);
    \u0275\u0275text(59, "S\xE9ances planifi\xE9es");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("kpi-card--active", ctx_r3.activeKpi === "medecin");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.medecinCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.activeKpi === "medecin");
    \u0275\u0275advance();
    \u0275\u0275classProp("kpi-card--active", ctx_r3.activeKpi === "infirmier-majeur");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.infMajeurCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.activeKpi === "infirmier-majeur");
    \u0275\u0275advance();
    \u0275\u0275classProp("kpi-card--active", ctx_r3.activeKpi === "infirmier");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.infirmierCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.activeKpi === "infirmier");
    \u0275\u0275advance();
    \u0275\u0275classProp("kpi-card--active", ctx_r3.activeKpi === "aide-soignant");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.aideSoignantCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.activeKpi === "aide-soignant");
    \u0275\u0275advance();
    \u0275\u0275classProp("kpi-card--active", ctx_r3.activeKpi === "patient");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.patientCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.activeKpi === "patient");
    \u0275\u0275advance();
    \u0275\u0275classProp("kpi-card--active", ctx_r3.activeKpi === "seances");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.seancesAdmin.length);
  }
}
function AdminComponent_ng_container_65_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 219)(1, "span", 16);
    \u0275\u0275text(2, "filter_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 220);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_span_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectKpi(ctx_r3.activeKpi));
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.activeKpi === "medecin" ? "M\xE9decins" : ctx_r3.activeKpi === "infirmier-majeur" ? "Inf. Majeurs" : ctx_r3.activeKpi === "infirmier" ? "Infirmiers" : ctx_r3.activeKpi === "aide-soignant" ? "Aides-Soignants" : "Patients", " ");
  }
}
function AdminComponent_ng_container_65_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r34 = ctx.$implicit;
    \u0275\u0275property("value", r_r34.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r34.label);
  }
}
function AdminComponent_ng_container_65_div_20_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 227);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.searchQuery = "");
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_65_div_20_ng_container_23_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 228)(3, "div", 229)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 230);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 231)(23, "button", 232);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_ng_container_23_tr_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r37);
      const u_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openUser(u_r38));
    });
    \u0275\u0275elementStart(24, "span", 16);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 233);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_ng_container_23_tr_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r37);
      const u_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteUser(u_r38));
    });
    \u0275\u0275elementStart(27, "span", 16);
    \u0275\u0275text(28, "delete_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 234);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_ng_container_23_tr_1_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r37);
      const u_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleUserStatus(u_r38));
    });
    \u0275\u0275elementStart(30, "span", 16);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r38 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "color-mix(in srgb," + ctx_r3.roleColorVar(u_r38.role) + " 15%, transparent)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r3.roleColorVar(u_r38.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.initials(u_r38));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", u_r38.prenom, " ", u_r38.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r38.login);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r38.mat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r38.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r3.statusClass(u_r38.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.statusLabel(u_r38.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r38.dateCreation);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", u_r38.statut === "actif" ? "row-btn--warn" : "row-btn--ok")("title", u_r38.statut === "actif" ? "D\xE9sactiver" : "Activer");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r38.statut === "actif" ? "person_off" : "person");
  }
}
function AdminComponent_ng_container_65_div_20_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminComponent_ng_container_65_div_20_ng_container_23_tr_1_Template, 32, 18, "tr", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const u_r38 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r38.role !== "patient");
  }
}
function AdminComponent_ng_container_65_div_20_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 235)(2, "span", 16);
    \u0275\u0275text(3, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun profil trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_65_div_20_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 236)(1, "span", 237);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 238)(4, "button", 239);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("staffPage", 1, ctx_r3.totalStaffPages));
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 240);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("staffPage", ctx_r3.staffPage - 1, ctx_r3.totalStaffPages));
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 241);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 242);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_div_25_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("staffPage", ctx_r3.staffPage + 1, ctx_r3.totalStaffPages));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 243);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_20_div_25_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("staffPage", ctx_r3.totalStaffPages, ctx_r3.totalStaffPages));
    });
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17, "last_page");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", (ctx_r3.staffPage - 1) * ctx_r3.pageSize + 1, "\u2013", ctx_r3.pageEnd(ctx_r3.staffPage, ctx_r3.filteredUsers.length), " sur ", ctx_r3.filteredUsers.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.staffPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.staffPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r3.staffPage, " / ", ctx_r3.totalStaffPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.staffPage === ctx_r3.totalStaffPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.staffPage === ctx_r3.totalStaffPages);
  }
}
function AdminComponent_ng_container_65_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 221)(2, "span", 16);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 222);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_65_div_20_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchQuery, $event) || (ctx_r3.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminComponent_ng_container_65_div_20_button_5_Template, 3, 0, "button", 223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 224)(7, "table", 225)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Date cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AdminComponent_ng_container_65_div_20_ng_container_23_Template, 2, 1, "ng-container", 192)(24, AdminComponent_ng_container_65_div_20_tr_24_Template, 5, 0, "tr", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, AdminComponent_ng_container_65_div_20_div_25_Template, 18, 9, "div", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.searchQuery);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.paginatedUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredUsers.length > 0);
  }
}
function AdminComponent_ng_container_65_div_21_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 227);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_21_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.searchPatient = "");
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_65_div_21_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td")(3, "span", 230);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 231)(16, "button", 232);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_21_ng_container_23_Template_button_click_16_listener() {
      const u_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openEditPatient(u_r43));
    });
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 233);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_21_ng_container_23_Template_button_click_19_listener() {
      const u_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteUser(u_r43));
    });
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21, "delete_outline");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const u_r43 = ctx.$implicit;
    const i_r44 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r3.patientPage - 1) * ctx_r3.pageSize + i_r44 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r43.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r43.prenom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r43.cin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r43.dateNaissance || "\u2014");
  }
}
function AdminComponent_ng_container_65_div_21_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 235)(2, "span", 16);
    \u0275\u0275text(3, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun patient enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_65_div_21_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 236)(1, "span", 237);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 238)(4, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_21_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("patientPage", 1, ctx_r3.totalPatientPages));
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_21_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("patientPage", ctx_r3.patientPage - 1, ctx_r3.totalPatientPages));
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 241);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_21_div_25_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("patientPage", ctx_r3.patientPage + 1, ctx_r3.totalPatientPages));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_65_div_21_div_25_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("patientPage", ctx_r3.totalPatientPages, ctx_r3.totalPatientPages));
    });
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17, "last_page");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", (ctx_r3.patientPage - 1) * ctx_r3.pageSize + 1, "\u2013", ctx_r3.pageEnd(ctx_r3.patientPage, ctx_r3.filteredPatients.length), " sur ", ctx_r3.filteredPatients.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.patientPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.patientPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r3.patientPage, " / ", ctx_r3.totalPatientPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.patientPage === ctx_r3.totalPatientPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.patientPage === ctx_r3.totalPatientPages);
  }
}
function AdminComponent_ng_container_65_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 221)(2, "span", 16);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 244);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_65_div_21_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchPatient, $event) || (ctx_r3.searchPatient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminComponent_ng_container_65_div_21_button_5_Template, 3, 0, "button", 223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 224)(7, "table", 225)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AdminComponent_ng_container_65_div_21_ng_container_23_Template, 22, 5, "ng-container", 192)(24, AdminComponent_ng_container_65_div_21_tr_24_Template, 5, 0, "tr", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, AdminComponent_ng_container_65_div_21_div_25_Template, 18, 9, "div", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchPatient);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.searchPatient);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.paginatedPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredPatients.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredPatients.length > 0);
  }
}
function AdminComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 213)(2, "div", 214)(3, "h2");
    \u0275\u0275text(4, " Liste des Profils ");
    \u0275\u0275template(5, AdminComponent_ng_container_65_span_5_Template, 7, 1, "span", 215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 216)(7, "select", 217);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_65_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filterRole, $event) || (ctx_r3.filterRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_ng_container_65_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.activeKpi = $event || "";
      return \u0275\u0275resetView(ctx_r3.staffPage = 1);
    });
    \u0275\u0275elementStart(8, "option", 84);
    \u0275\u0275text(9, "Tous les r\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminComponent_ng_container_65_option_10_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 217);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_65_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filterStatus, $event) || (ctx_r3.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 84);
    \u0275\u0275text(13, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 127);
    \u0275\u0275text(15, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 128);
    \u0275\u0275text(17, "Inactif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 129);
    \u0275\u0275text(19, "Suspendu");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, AdminComponent_ng_container_65_div_20_Template, 26, 5, "div", 33)(21, AdminComponent_ng_container_65_div_21_Template, 26, 5, "div", 33);
    \u0275\u0275elementStart(22, "div", 218);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.activeKpi && ctx_r3.activeKpi !== "seances");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterRole);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.staffRoleOptions);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterStatus);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r3.activeKpi !== "patient");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.activeKpi !== "medecin" && ctx_r3.activeKpi !== "infirmier-majeur" && ctx_r3.activeKpi !== "infirmier" && ctx_r3.activeKpi !== "aide-soignant");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.totalUsers, " profil(s) enregistr\xE9(s)");
  }
}
function AdminComponent_ng_container_66_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r47 = ctx.$implicit;
    \u0275\u0275property("value", p_r47.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r47.prenom, " ", p_r47.nom, "");
  }
}
function AdminComponent_ng_container_66_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r48 = ctx.$implicit;
    \u0275\u0275property("value", m_r48);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r48);
  }
}
function AdminComponent_ng_container_66_small_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Utilis\xE9e comme pr\xE9f\xE9rence pour la date active, puis ajust\xE9e date par date.");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_ng_container_66_ng_container_41_ng_container_9_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machine_r51 = ctx.$implicit;
    \u0275\u0275property("value", machine_r51);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", machine_r51, " ");
  }
}
function AdminComponent_ng_container_66_ng_container_41_ng_container_9_small_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ds_r50 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Aucune machine disponible pour le ", ctx_r3.isoToDisplayDate(ds_r50.date), " sur ce cr\xE9neau. ");
  }
}
function AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 258)(2, "span", 259);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 260)(5, "input", 261);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template_input_ngModelChange_5_listener($event) {
      const ds_r50 = \u0275\u0275restoreView(_r49).$implicit;
      \u0275\u0275twoWayBindingSet(ds_r50.heureDebut, $event) || (ds_r50.heureDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onNewSeanceScheduleChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 262);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 261);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template_input_ngModelChange_8_listener($event) {
      const ds_r50 = \u0275\u0275restoreView(_r49).$implicit;
      \u0275\u0275twoWayBindingSet(ds_r50.heureFin, $event) || (ds_r50.heureFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onNewSeanceScheduleChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "select", 263);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template_select_ngModelChange_9_listener($event) {
      const ds_r50 = \u0275\u0275restoreView(_r49).$implicit;
      \u0275\u0275twoWayBindingSet(ds_r50.machine, $event) || (ds_r50.machine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 84);
    \u0275\u0275text(11, "Machine auto");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminComponent_ng_container_66_ng_container_41_ng_container_9_option_12_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 264);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template_button_click_13_listener() {
      const ds_r50 = \u0275\u0275restoreView(_r49).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleSeanceCalDay(ds_r50.date));
    });
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, AdminComponent_ng_container_66_ng_container_41_ng_container_9_small_16_Template, 2, 1, "small", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ds_r50 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.isoToDisplayDate(ds_r50.date));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("time-input--error", ds_r50.heureDebut >= ds_r50.heureFin);
    \u0275\u0275twoWayProperty("ngModel", ds_r50.heureDebut);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("time-input--error", ds_r50.heureDebut >= ds_r50.heureFin);
    \u0275\u0275twoWayProperty("ngModel", ds_r50.heureFin);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ds_r50.machine);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.getAvailableMachineCodesForDate(ds_r50.date, ds_r50.heureDebut, ds_r50.heureFin));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.getAvailableMachineCodesForDate(ds_r50.date, ds_r50.heureDebut, ds_r50.heureFin).length === 0);
  }
}
function AdminComponent_ng_container_66_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 255)(2, "span", 16);
    \u0275\u0275text(3, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Horaires par date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 256);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 257);
    \u0275\u0275template(9, AdminComponent_ng_container_66_ng_container_41_ng_container_9_Template, 17, 10, "ng-container", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r3.newSeance.datesSeances.length, " date(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.newSeance.datesSeances);
  }
}
function AdminComponent_ng_container_66_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 265)(1, "span", 16);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "S\xE9lectionnez des dates dans le calendrier");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_66_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r52 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r52);
  }
}
function AdminComponent_ng_container_66_ng_container_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 198);
  }
}
function AdminComponent_ng_container_66_ng_container_56_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 199);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_ng_container_56_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r53);
      const cell_r54 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleSeanceCalDay(cell_r54.date));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r54 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cal-cell--today", cell_r54.today)("cal-cell--selected", ctx_r3.isSeanceDaySelected(cell_r54.date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r54.day);
  }
}
function AdminComponent_ng_container_66_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminComponent_ng_container_66_ng_container_56_div_1_Template, 1, 0, "div", 196)(2, AdminComponent_ng_container_66_ng_container_56_button_2_Template, 2, 5, "button", 197);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r54 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r54 === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r54 !== null);
  }
}
function AdminComponent_ng_container_66_button_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 227);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_button_70_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.searchSeance = "");
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_66_tr_82_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r57 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", e_r57.machine, "");
  }
}
function AdminComponent_ng_container_66_tr_82_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 269)(1, "span", 270);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 271);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminComponent_ng_container_66_tr_82_div_6_span_5_Template, 2, 1, "span", 272);
    \u0275\u0275elementStart(6, "span", 273);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r57 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r57.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r57.heureDebut, " \u2192 ", e_r57.heureFin, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", e_r57.machine);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r3.seanceStatutClass(e_r57.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.seanceStatutLabel(e_r57.statut));
  }
}
function AdminComponent_ng_container_66_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 254)(5, "div", 266);
    \u0275\u0275template(6, AdminComponent_ng_container_66_tr_82_div_6_Template, 8, 8, "div", 267);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 231)(9, "button", 232);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_tr_82_Template_button_click_9_listener() {
      const p_r58 = \u0275\u0275restoreView(_r56).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditPersonSeance(p_r58));
    });
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 268);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_tr_82_Template_button_click_12_listener() {
      const p_r58 = \u0275\u0275restoreView(_r56).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.supprimerPersonSeances(p_r58));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "delete_outline");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r58 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r58.patientNom);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", p_r58.entries);
  }
}
function AdminComponent_ng_container_66_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 275)(2, "span", 16);
    \u0275\u0275text(3, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucune s\xE9ance planifi\xE9e ");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_66_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 236)(1, "span", 237);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 238)(4, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_div_84_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage("seancePage", 1, ctx_r3.totalPersonSeancePages));
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_div_84_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage("seancePage", ctx_r3.seancePage - 1, ctx_r3.totalPersonSeancePages));
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 241);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_div_84_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage("seancePage", ctx_r3.seancePage + 1, ctx_r3.totalPersonSeancePages));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 245);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_div_84_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage("seancePage", ctx_r3.totalPersonSeancePages, ctx_r3.totalPersonSeancePages));
    });
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17, "last_page");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", (ctx_r3.seancePage - 1) * ctx_r3.pageSize + 1, "\u2013", ctx_r3.pageEnd(ctx_r3.seancePage, ctx_r3.filteredPersonSeances.length), " sur ", ctx_r3.filteredPersonSeances.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.seancePage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.seancePage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r3.seancePage, " / ", ctx_r3.totalPersonSeancePages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.seancePage === ctx_r3.totalPersonSeancePages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.seancePage === ctx_r3.totalPersonSeancePages);
  }
}
function AdminComponent_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 246)(2, "div", 247)(3, "span", 16);
    \u0275\u0275text(4, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Planifier une s\xE9ance de dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 181)(7, "div", 182)(8, "div", 119)(9, "label");
    \u0275\u0275text(10, "Patient ");
    \u0275\u0275elementStart(11, "span", 76);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newSeance.patientId, $event) || (ctx_r3.newSeance.patientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 84);
    \u0275\u0275text(15, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AdminComponent_ng_container_66_option_16_Template, 2, 3, "option", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 248)(18, "span", 16);
    \u0275\u0275text(19, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Heures par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 249);
    \u0275\u0275text(23, "Appliqu\xE9es aux nouvelles dates s\xE9lectionn\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 250)(25, "div", 119)(26, "label");
    \u0275\u0275text(27, "D\xE9but par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newSeance.heureDebut, $event) || (ctx_r3.newSeance.heureDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_ng_container_66_Template_input_ngModelChange_28_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNewSeanceScheduleChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 119)(30, "label");
    \u0275\u0275text(31, "Fin par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newSeance.heureFin, $event) || (ctx_r3.newSeance.heureFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_ng_container_66_Template_input_ngModelChange_32_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNewSeanceScheduleChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 119)(34, "label");
    \u0275\u0275text(35, "Machine par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newSeance.machine, $event) || (ctx_r3.newSeance.machine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(37, "option", 84);
    \u0275\u0275text(38, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, AdminComponent_ng_container_66_option_39_Template, 2, 2, "option", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, AdminComponent_ng_container_66_small_40_Template, 2, 0, "small", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, AdminComponent_ng_container_66_ng_container_41_Template, 10, 2, "ng-container", 33)(42, AdminComponent_ng_container_66_div_42_Template, 5, 0, "div", 251);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 185)(44, "div", 186)(45, "div", 187)(46, "button", 188);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.seanceCalPrevMonth());
    });
    \u0275\u0275elementStart(47, "span", 16);
    \u0275\u0275text(48, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "span", 189);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 188);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.seanceCalNextMonth());
    });
    \u0275\u0275elementStart(52, "span", 16);
    \u0275\u0275text(53, "chevron_right");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 190);
    \u0275\u0275template(55, AdminComponent_ng_container_66_div_55_Template, 2, 1, "div", 191)(56, AdminComponent_ng_container_66_ng_container_56_Template, 3, 2, "ng-container", 192);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 252)(58, "button", 141);
    \u0275\u0275listener("click", function AdminComponent_ng_container_66_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.ajouterSeance());
    });
    \u0275\u0275elementStart(59, "span", 16);
    \u0275\u0275text(60, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 213)(63, "div", 214)(64, "h2");
    \u0275\u0275text(65, "S\xE9ances planifi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 221)(67, "span", 16);
    \u0275\u0275text(68, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 253);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_66_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.searchSeance, $event) || (ctx_r3.searchSeance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, AdminComponent_ng_container_66_button_70_Template, 3, 0, "button", 223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 224)(72, "table", 225)(73, "thead")(74, "tr")(75, "th");
    \u0275\u0275text(76, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th", 254);
    \u0275\u0275text(78, "S\xE9ances planifi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "tbody");
    \u0275\u0275template(82, AdminComponent_ng_container_66_tr_82_Template, 15, 2, "tr", 192)(83, AdminComponent_ng_container_66_tr_83_Template, 5, 0, "tr", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(84, AdminComponent_ng_container_66_div_84_Template, 18, 9, "div", 226);
    \u0275\u0275elementStart(85, "div", 218);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newSeance.patientId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.patientsUsers);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newSeance.heureDebut);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newSeance.heureFin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newSeance.machine);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.machines);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.newSeance.dates.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.newSeance.datesSeances.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.newSeance.datesSeances.length === 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.seanceCalTitle);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.joursTitles);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.seanceCalDays);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Planifier ", ctx_r3.newSeance.datesSeances.length > 1 ? "les " + ctx_r3.newSeance.datesSeances.length + " s\xE9ances" : "la s\xE9ance", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchSeance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.searchSeance);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r3.paginatedPersonSeances);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredPersonSeances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredPersonSeances.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.filteredPersonSeances.length, " patient(s) \xB7 ", ctx_r3.seancesAdmin.length, " s\xE9ance(s) au total");
  }
}
var AdminComponent = class _AdminComponent {
  router;
  authService;
  utilisateurService;
  patientService;
  seanceService;
  machineService;
  horaireTravailService;
  adminSettingsService;
  rolePermissionService;
  adminMainRef;
  constructor(router, authService, utilisateurService, patientService, seanceService, machineService, horaireTravailService, adminSettingsService, rolePermissionService) {
    this.router = router;
    this.authService = authService;
    this.utilisateurService = utilisateurService;
    this.patientService = patientService;
    this.seanceService = seanceService;
    this.machineService = machineService;
    this.horaireTravailService = horaireTravailService;
    this.adminSettingsService = adminSettingsService;
    this.rolePermissionService = rolePermissionService;
  }
  // ── Sidebar mobile ──
  sidebarOpen = false;
  destroy$ = new Subject();
  ngOnDestroy() {
    this.destroy$.next();
    this.stopPolling();
    this.destroy$.complete();
  }
  startPolling() {
    this.stopPolling();
    this.pollingInterval = setInterval(() => {
      this.refreshAfterMutation();
    }, this.POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }
  activeTab = ["profils", "seances"].includes(localStorage.getItem("admin_activeTab") ?? "") ? localStorage.getItem("admin_activeTab") : "profils";
  activeProfilRole = "medecin";
  loading = false;
  isLight = true;
  profilsLoaded = false;
  horairesLoaded = false;
  seancesLoaded = false;
  // -- Wizard nouveau profil --
  showWizardModal = false;
  wizardStep = 1;
  wizardRole = "medecin";
  wizardRoleOptions = [
    { id: "medecin", label: "M\xE9decin", icon: "medical_services", color: "var(--c-teal)", desc: "N\xE9phrologue, prescriptions, dossiers" },
    { id: "infirmier-majeur", label: "Infirmier Majeur", icon: "supervisor_account", color: "var(--c-purple)", desc: "Coordinateur, planification, \xE9quipes" },
    { id: "infirmier", label: "Infirmier(e)", icon: "local_hospital", color: "var(--c-blue)", desc: "Soins, monitoring, constantes vitales" },
    { id: "aide-soignant", label: "Aide-Soignant", icon: "volunteer_activism", color: "var(--c-amber)", desc: "Support aux soins, \xE9quipements" },
    { id: "patient", label: "Patient", icon: "person", color: "var(--c-green)", desc: "Patient du centre de dialyse" }
  ];
  serviceParRole = {
    "medecin": "H\xE9modialyse",
    "infirmier-majeur": "H\xE9modialyse",
    "infirmier": "H\xE9modialyse",
    "aide-soignant": "H\xE9modialyse",
    "patient": "",
    "admin": "H\xE9modialyse"
  };
  specialiteParRole = {
    "medecin": "N\xE9phrologie",
    "infirmier-majeur": "H\xE9modialyse",
    "infirmier": "H\xE9modialyse",
    "aide-soignant": "Soins g\xE9n\xE9raux",
    "patient": "",
    "admin": ""
  };
  permissions = [
    { id: "p_view", category: "Patients", label: "Voir les dossiers patients", description: "Acces en lecture aux fiches et historiques patients" },
    { id: "p_edit", category: "Patients", label: "Modifier les dossiers", description: "Editer les informations medicales et administratives" },
    { id: "p_create", category: "Patients", label: "Creer un patient", description: "Ajouter un nouveau patient dans le systeme" },
    { id: "m_rx", category: "Medical", label: "Creer des prescriptions", description: "Rediger et enregistrer des ordonnances" },
    { id: "m_rx_val", category: "Medical", label: "Valider des prescriptions", description: "Approuver les prescriptions en attente" },
    { id: "m_bilan", category: "Medical", label: "Voir les bilans et resultats", description: "Consulter les analyses et resultats biologiques" },
    { id: "m_proto", category: "Medical", label: "Gerer les protocoles", description: "Creer et modifier les protocoles de dialyse" },
    { id: "pl_view", category: "Planning", label: "Voir le planning", description: "Consulter le planning des seances" },
    { id: "pl_edit", category: "Planning", label: "Creer et modifier des seances", description: "Planifier et editer les seances de dialyse" },
    { id: "pl_delete", category: "Planning", label: "Supprimer des seances", description: "Retirer une seance du planning" },
    { id: "mo_view", category: "Monitoring", label: "Voir le monitoring", description: "Acces au suivi temps reel des patients en dialyse" },
    { id: "mo_saisie", category: "Monitoring", label: "Saisir les constantes vitales", description: "Enregistrer PA, FC, poids et autres parametres" },
    { id: "eq_view", category: "Equipement", label: "Voir les machines", description: "Consulter les disponibilites des machines" },
    { id: "eq_stock", category: "Equipement", label: "Gerer les stocks", description: "Voir et commander les consommables" },
    { id: "eq_maint", category: "Equipement", label: "Signaler une maintenance", description: "Declarer une panne ou une intervention technique" },
    { id: "r_gen", category: "Rapports", label: "Generer des rapports", description: "Creer des rapports statistiques et medicaux" },
    { id: "r_export", category: "Rapports", label: "Exporter les donnees", description: "Telecharger les donnees en PDF ou CSV" },
    { id: "a_users", category: "Administration", label: "Gerer les utilisateurs", description: "Ajouter, modifier et desactiver des comptes" },
    { id: "a_roles", category: "Administration", label: "Configurer les roles", description: "Modifier les permissions des roles" }
  ];
  roles = [
    { id: "admin", label: "Administrateur", icon: "admin_panel_settings", color: "#ff5757", colorVar: "var(--c-red)", description: "Administration du systeme", permissions: {} },
    { id: "medecin", label: "Medecin", icon: "medical_services", color: "#00D9C4", colorVar: "var(--c-teal)", description: "Medecin nephrologue", permissions: {} },
    { id: "infirmier-majeur", label: "Infirmier Majeur", icon: "supervisor_account", color: "#A78BFA", colorVar: "var(--c-purple)", description: "Coordinateur du service", permissions: {} },
    { id: "infirmier", label: "Infirmier(e)", icon: "local_hospital", color: "#4EA8F8", colorVar: "var(--c-blue)", description: "Suivi des seances et soins", permissions: {} },
    { id: "aide-soignant", label: "Aide-Soignant", icon: "volunteer_activism", color: "#F5A623", colorVar: "var(--c-amber)", description: "Support aux soins", permissions: {} },
    { id: "patient", label: "Patient", icon: "person", color: "#22c55e", colorVar: "var(--c-green)", description: "Patient du centre", permissions: {} }
  ];
  users = [];
  staffUsers = [];
  patientUsersData = [];
  selectedUser = null;
  showUserModal = false;
  showNewPatientModal = false;
  showNewUserModal = false;
  showSettingsModal = false;
  showEditPatientModal = false;
  showEditHoraireModal = false;
  showEditSeanceModal = false;
  searchQuery = "";
  filterRole = "";
  filterStatus = "";
  activeKpi = "";
  // tracks which KPI card is highlighted
  searchPatient = "";
  searchHoraire = "";
  filterHoraireDate = "";
  searchSeance = "";
  filterSeanceDate = "";
  pageSize = 4;
  staffPage = 1;
  patientPage = 1;
  horairePage = 1;
  seancePage = 1;
  groupesSanguins = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  machines = [];
  allMachineCodes = [];
  joursTitles = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  moisLabels = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
  roleIds = ["admin", "medecin", "infirmier-majeur", "infirmier", "aide-soignant", "patient"];
  newPatient = { nom: "", prenom: "", dateNaissance: "", cin: "", telephone: "", adresse: "", genre: "", statut: "STABLE" };
  editPatient = null;
  newUser = {
    login: "",
    username: "",
    mat: "",
    nom: "",
    prenom: "",
    email: "",
    mdp: "",
    role: "infirmier",
    actif: true,
    telephone: "",
    service: "",
    specialite: "",
    superviseurId: ""
  };
  settings = {
    notificationsEmail: true,
    notificationsSystem: true,
    sessionTimeout: 30,
    langue: "fr",
    exportFormat: "csv",
    auditLog: true,
    doubleAuth: false
  };
  // ─── HORAIRES ────────────────────────────────────────────────────────────────
  horaires = [];
  /** Formulaire de création d'horaire avec heures individuelles par jour */
  newHoraire = {
    staffType: "",
    staffNom: "",
    heureDebut: "07:00",
    // valeur par défaut appliquée aux nouveaux jours sélectionnés
    heureFin: "15:00",
    jours: [],
    joursHoraires: []
    // horaire spécifique par jour sélectionné
  };
  editHoraire = null;
  // ─── SÉANCES ─────────────────────────────────────────────────────────────────
  seancesAdmin = [];
  /** Formulaire de planification de séance avec heures individuelles par date */
  newSeance = {
    patientId: "",
    aideSoignantId: "",
    dates: [],
    datesSeances: [],
    // horaire spécifique par date sélectionnée
    heureDebut: "07:30",
    // valeur par défaut
    heureFin: "11:30",
    machine: ""
  };
  newSeanceActiveDate = null;
  editSeance = null;
  editSeanceDates = [];
  calYear = (/* @__PURE__ */ new Date()).getFullYear();
  calMonth = (/* @__PURE__ */ new Date()).getMonth();
  editCalYear = (/* @__PURE__ */ new Date()).getFullYear();
  editCalMonth = (/* @__PURE__ */ new Date()).getMonth();
  seanceCalYear = (/* @__PURE__ */ new Date()).getFullYear();
  seanceCalMonth = (/* @__PURE__ */ new Date()).getMonth();
  editSeanceCalYear = (/* @__PURE__ */ new Date()).getFullYear();
  editSeanceCalMonth = (/* @__PURE__ */ new Date()).getMonth();
  tid = 0;
  toasts = [];
  pollingInterval = null;
  POLLING_INTERVAL_MS = 3e4;
  // ──────────────────────────────────────────────────────────────────────────────
  //  LIFECYCLE
  // ──────────────────────────────────────────────────────────────────────────────
  ngOnInit() {
    if (this.isLight)
      document.body.classList.add("theme-light");
    this.loadSharedAdminData();
    this.loadMachines();
    this.refreshAdminCollections();
    this.startPolling();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    localStorage.setItem("admin_activeTab", tab);
    this.scrollAdminToTop();
    this.refreshAdminCollections(false, false);
  }
  selectKpi(role) {
    if (this.activeKpi === role) {
      this.activeKpi = "";
      this.activeProfilRole = "medecin";
      this.filterRole = "";
    } else {
      this.activeKpi = role;
      if (role === "seances") {
        this.setActiveTab("seances");
        return;
      }
      this.activeProfilRole = role;
      this.filterRole = role === "patient" ? "" : role;
      this.staffPage = 1;
      this.patientPage = 1;
    }
    this.setActiveTab("profils");
  }
  refreshAdminCollections(showLoader = true, restoreScroll = false) {
    if (showLoader)
      this.loading = true;
    this.patientService.invalidateCache();
    this.seanceService.invalidateCache();
    const savedScrollTop = restoreScroll ? this.adminMainRef?.nativeElement.scrollTop ?? 0 : null;
    forkJoin({
      users: this.utilisateurService.getAll().pipe(catchError(() => of([]))),
      patients: this.patientService.getAll().pipe(catchError(() => of([]))),
      horaires: this.horaireTravailService.getAll().pipe(catchError(() => of([]))),
      seances: this.seanceService.getAll().pipe(catchError(() => of([])))
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ users, patients, horaires, seances }) => {
        this.staffUsers = users.map((u) => this.mapUtilisateurToAppUser(u));
        this.patientUsersData = patients.map((p) => this.mapPatientToAppUser(p));
        this.users = [...this.staffUsers, ...this.patientUsersData];
        this.horaires = horaires.map((h) => this.mapHoraireToRow(h));
        this.seancesAdmin = seances.map((s) => this.mapSeanceToRow(s));
        this.profilsLoaded = true;
        this.horairesLoaded = true;
        this.seancesLoaded = true;
        this.normalizeAllPages();
        this.syncSelectedAideSoignant();
        if (showLoader) {
          this.loading = false;
        } else if (savedScrollTop !== null) {
          setTimeout(() => {
            if (this.adminMainRef?.nativeElement) {
              this.adminMainRef.nativeElement.scrollTop = savedScrollTop;
            }
          }, 0);
        }
      },
      error: () => {
        if (showLoader)
          this.loading = false;
        this.showToast("Serveur inaccessible \u2014 v\xE9rifiez que le backend est d\xE9marr\xE9", "error");
      }
    });
  }
  loadSharedAdminData() {
    this.loading = true;
    forkJoin({
      settings: this.adminSettingsService.get(),
      rolePermissions: this.rolePermissionService.getAll()
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ settings, rolePermissions }) => {
        this.settings = __spreadValues({}, settings);
        this.applyRolePermissions(rolePermissions);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? "Erreur lors du chargement", "error");
      }
    });
  }
  loadProfilesData() {
    this.loading = true;
    forkJoin({
      users: this.utilisateurService.getAll(),
      patients: this.patientService.getAll()
    }).subscribe({
      next: ({ users, patients }) => {
        this.staffUsers = users.map((u) => this.mapUtilisateurToAppUser(u));
        this.patientUsersData = patients.map((p) => this.mapPatientToAppUser(p));
        this.users = [...this.staffUsers, ...this.patientUsersData];
        this.profilsLoaded = true;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? "Erreur lors du chargement des profils", "error");
      }
    });
  }
  loadHorairesData() {
    this.loading = true;
    this.horaireTravailService.getAll().subscribe({
      next: (horaires) => {
        this.horaires = horaires.map((h) => this.mapHoraireToRow(h));
        this.horairesLoaded = true;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? "Erreur lors du chargement des horaires", "error");
      }
    });
  }
  loadSeancesData() {
    this.loading = true;
    this.seanceService.getAll().subscribe({
      next: (seances) => {
        this.seancesAdmin = seances.map((s) => this.mapSeanceToRow(s));
        this.seancesLoaded = true;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err?.error?.message ?? "Erreur lors du chargement des seances", "error");
      }
    });
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  WIZARD — création profil multi-étapes
  // ──────────────────────────────────────────────────────────────────────────────
  wizardData = {
    nom: "",
    prenom: "",
    mat: "",
    email: "",
    telephone: "",
    service: "",
    login: "",
    username: "",
    mdp: "",
    actif: true,
    dateNaissance: "",
    groupeSanguin: "",
    genre: "",
    adresse: "",
    cin: "",
    specialite: "",
    superviseurId: ""
  };
  wizardErrors = {};
  get wizardIsPatient() {
    return this.wizardRole === "patient";
  }
  get wizardStepCount() {
    return this.wizardIsPatient ? 2 : 3;
  }
  get wizardSelectedConfig() {
    return this.wizardRoleOptions.find((r) => r.id === this.wizardRole);
  }
  matPrefix = {
    "medecin": "MED",
    "infirmier": "INF",
    "infirmier-majeur": "IMJ",
    "aide-soignant": "ASG",
    "admin": "ADM",
    "patient": "PAT"
  };
  generateMat(role) {
    const prefix = this.matPrefix[role] ?? "USR";
    const pattern = new RegExp(`^${prefix}-(\\d+)$`, "i");
    const max = this.users.map((u) => {
      const m = u.mat?.match(pattern);
      return m ? parseInt(m[1], 10) : 0;
    }).reduce((a, b) => Math.max(a, b), 0);
    return `${prefix}-${String(max + 1).padStart(3, "0")}`;
  }
  openNewProfil() {
    this.wizardStep = 1;
    this.wizardErrors = {};
    this.wizardRole = this.activeProfilRole === "admin" ? "medecin" : this.activeProfilRole;
    this.wizardData = {
      nom: "",
      prenom: "",
      mat: this.generateMat(this.wizardRole),
      email: "",
      telephone: "",
      service: this.serviceParRole[this.wizardRole] ?? "",
      login: "",
      username: "",
      mdp: "",
      actif: true,
      dateNaissance: "",
      groupeSanguin: "",
      genre: "",
      adresse: "",
      cin: "",
      specialite: this.specialiteParRole[this.wizardRole] ?? "",
      superviseurId: ""
    };
    this.showWizardModal = true;
  }
  onWizardRoleChange() {
    this.wizardErrors = {};
    this.wizardData.mat = this.generateMat(this.wizardRole);
    this.wizardData.service = this.serviceParRole[this.wizardRole] ?? "";
    this.wizardData.specialite = this.specialiteParRole[this.wizardRole] ?? "";
  }
  wizardNext() {
    if (this.wizardStep === 1) {
      this.wizardData.service = this.serviceParRole[this.wizardRole] ?? "";
      this.wizardData.specialite = this.specialiteParRole[this.wizardRole] ?? "";
      this.setWizardStep(2);
    } else if (this.wizardStep === 2) {
      if (!this.validateWizardIdentityStep())
        return;
      if (this.wizardIsPatient) {
        this.wizardSave();
      } else {
        this.setWizardStep(3);
      }
    } else if (this.wizardStep === 3) {
      this.wizardSave();
    }
  }
  wizardPrev() {
    if (this.wizardStep > 1)
      this.setWizardStep(this.wizardStep - 1);
  }
  wizardCancel() {
    this.showWizardModal = false;
    this.wizardErrors = {};
  }
  wizardSave() {
    if (this.wizardIsPatient) {
      this.newPatient = {
        nom: this.wizardData.nom,
        prenom: this.wizardData.prenom,
        dateNaissance: this.wizardData.dateNaissance,
        cin: this.wizardData.cin,
        telephone: this.wizardData.telephone,
        adresse: this.wizardData.adresse,
        genre: this.wizardData.genre,
        statut: "STABLE"
      };
      this.showWizardModal = false;
      this.saveNewPatient();
    } else {
      this.newUser = {
        login: "",
        username: "",
        mat: this.wizardData.mat,
        nom: this.wizardData.nom,
        prenom: this.wizardData.prenom,
        email: this.wizardData.email,
        mdp: "",
        role: this.wizardRole,
        actif: this.wizardData.actif,
        telephone: this.wizardData.telephone,
        service: this.wizardData.service,
        specialite: this.wizardData.specialite,
        superviseurId: this.wizardData.superviseurId
      };
      this.showWizardModal = false;
      this.saveNewUser();
    }
  }
  get staffRoleOptions() {
    return this.roles.filter((role) => role.id !== "patient");
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  PERMISSIONS
  // ──────────────────────────────────────────────────────────────────────────────
  get permCategories() {
    return [...new Set(this.permissions.map((p) => p.category))];
  }
  permsByCategory(category) {
    return this.permissions.filter((p) => p.category === category);
  }
  getRoleConfig(id) {
    return this.roles.find((r) => r.id === id);
  }
  togglePermission(role, permissionId) {
    role.permissions[permissionId] = !role.permissions[permissionId];
  }
  saveRolePermissions(role) {
    const payload = { role: this.toBackendRole(role.id), permissions: __spreadValues({}, role.permissions) };
    this.rolePermissionService.update(payload.role, payload).subscribe({
      next: (saved) => {
        role.permissions = __spreadValues({}, saved.permissions);
        this.showToast(`Permissions de ${role.label} enregistrees`, "success");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible d enregistrer les permissions", "error")
    });
  }
  resetRole(role) {
    const permissions = Object.fromEntries(this.permissions.map((p) => [p.id, false]));
    const payload = { role: this.toBackendRole(role.id), permissions };
    this.rolePermissionService.update(payload.role, payload).subscribe({
      next: (saved) => {
        role.permissions = __spreadValues({}, saved.permissions);
        this.showToast(`Permissions de ${role.label} reinitialisees`, "info");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de reinitialiser les permissions", "error")
    });
  }
  permCount(role) {
    return Object.values(role.permissions ?? {}).filter(Boolean).length;
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  FILTRES — Profils
  // ──────────────────────────────────────────────────────────────────────────────
  get filteredUsers() {
    const q = this.searchQuery.toLowerCase();
    return this.users.filter((u) => u.role !== "patient" && (!this.filterRole || u.role === this.filterRole) && (!this.filterStatus || u.statut === this.filterStatus) && (!q || u.nom.toLowerCase().includes(q) || u.prenom.toLowerCase().includes(q) || u.login.toLowerCase().includes(q) || u.username.toLowerCase().includes(q) || u.mat.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)));
  }
  get paginatedUsers() {
    return this.paginateArray(this.filteredUsers, "staffPage");
  }
  get totalStaffPages() {
    return this.getTotalPages(this.filteredUsers.length);
  }
  usersForRole(roleId) {
    return this.users.filter((u) => u.role === roleId);
  }
  get filteredPatients() {
    const q = this.searchPatient.toLowerCase().trim();
    const patients = this.usersForRole("patient");
    return !q ? patients : patients.filter((u) => u.nom.toLowerCase().includes(q) || u.prenom.toLowerCase().includes(q) || String(u.id).includes(q) || (u.dateNaissance || "").toLowerCase().includes(q) || (u.groupeSanguin || "").toLowerCase().includes(q));
  }
  get paginatedPatients() {
    return this.paginateArray(this.filteredPatients, "patientPage");
  }
  get totalPatientPages() {
    return this.getTotalPages(this.filteredPatients.length);
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  MODAL UTILISATEUR (édition)
  // ──────────────────────────────────────────────────────────────────────────────
  openUser(user) {
    this.selectedUser = __spreadValues({}, user);
    this.showUserModal = true;
  }
  closeUserModal() {
    this.showUserModal = false;
    this.selectedUser = null;
  }
  saveUser() {
    if (!this.selectedUser)
      return;
    const payload = {
      login: this.selectedUser.login,
      username: this.selectedUser.username,
      nom: this.selectedUser.nom,
      prenom: this.selectedUser.prenom,
      email: this.selectedUser.email,
      mat: this.selectedUser.mat,
      role: this.toBackendRole(this.selectedUser.role),
      specialite: this.selectedUser.specialite ?? null,
      superviseurId: this.selectedUser.superviseurId ?? null,
      actif: this.selectedUser.statut === "actif",
      telephone: this.normalizePhone(this.selectedUser.telephone) || null,
      service: this.selectedUser.service?.trim() || null
    };
    this.utilisateurService.update(this.selectedUser.id, payload).subscribe({
      next: () => {
        this.showToast(`Profil de ${this.selectedUser?.prenom} ${this.selectedUser?.nom} mis a jour`, "success");
        this.closeUserModal();
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de mettre a jour le profil", "error")
    });
  }
  toggleUserStatus(user) {
    this.utilisateurService.toggleActif(user.id).subscribe({
      next: (updated) => {
        this.showToast(`Compte de ${updated.prenom} ${updated.nom} ${updated.actif ? "active" : "desactive"}`, updated.actif ? "success" : "warning");
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de modifier le statut du compte", "error")
    });
  }
  suspendUser(user) {
    this.utilisateurService.update(user.id, { actif: false }).subscribe({
      next: () => {
        this.showToast(`Compte de ${user.prenom} ${user.nom} suspendu`, "warning");
        this.closeUserModal();
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de suspendre le compte", "error")
    });
  }
  deleteUser(user) {
    if (!this.confirmDeletion(`Supprimer ${user.prenom} ${user.nom} ? Cette action est irreversible.`))
      return;
    const request = user.role === "patient" ? this.patientService.delete(user.id) : this.utilisateurService.delete(user.id);
    request.subscribe({
      next: () => {
        this.showToast(`${user.role === "patient" ? "Patient" : "Utilisateur"} ${user.prenom} ${user.nom} supprime`, "warning");
        this.closeUserModal();
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Suppression impossible", "error")
    });
  }
  resetPassword(user) {
    const target = user.email?.trim() || user.login;
    this.utilisateurService.resetPassword(target).subscribe({
      next: (r) => this.showToast(r.message || "Demande de reinitialisation envoyee", "info"),
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de lancer la reinitialisation", "error")
    });
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  PATIENT — création & édition
  // ──────────────────────────────────────────────────────────────────────────────
  saveNewPatient() {
    const missingFields = [];
    if (!this.newPatient.nom.trim())
      missingFields.push("nom");
    if (!this.newPatient.prenom.trim())
      missingFields.push("prenom");
    if (!this.newPatient.dateNaissance)
      missingFields.push("date de naissance");
    if (!this.newPatient.genre)
      missingFields.push("genre");
    if (missingFields.length) {
      this.showToast(`Veuillez renseigner: ${missingFields.join(", ")}`, "warning");
      return;
    }
    const normalizedPhone = this.normalizePhone(this.newPatient.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) {
      this.showToast("Le telephone doit contenir 10 chiffres et commencer par 0", "warning");
      return;
    }
    const payload = {
      nom: this.newPatient.nom.trim(),
      prenom: this.newPatient.prenom.trim(),
      dateNaissance: this.newPatient.dateNaissance,
      statut: this.newPatient.statut || "STABLE",
      cin: this.newPatient.cin || null,
      telephone: normalizedPhone || null,
      adresse: this.newPatient.adresse || null,
      genre: this.newPatient.genre || null
    };
    this.patientService.create(payload).subscribe({
      next: () => {
        this.patientService.invalidateCache();
        this.showNewPatientModal = false;
        this.showToast(`Patient ${payload.prenom} ${payload.nom} cree`, "success");
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de creer le patient", "error")
    });
  }
  openEditPatient(user) {
    this.editPatient = {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      dateNaissance: user.dateNaissance || "",
      groupeSanguin: user.groupeSanguin || "",
      patientStatut: user.patientStatut || "STABLE",
      cin: user.cin || "",
      telephone: user.telephone || "",
      adresse: "",
      genre: ""
    };
    this.showEditPatientModal = true;
  }
  saveEditPatient() {
    if (!this.editPatient)
      return;
    const normalizedPhone = this.normalizePhone(this.editPatient.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) {
      this.showToast("Le telephone doit contenir 10 chiffres et commencer par 0", "warning");
      return;
    }
    const payload = {
      nom: this.editPatient.nom.trim(),
      prenom: this.editPatient.prenom.trim(),
      dateNaissance: this.editPatient.dateNaissance,
      statut: this.editPatient.patientStatut,
      cin: this.editPatient.cin || null,
      telephone: normalizedPhone || null,
      adresse: this.editPatient.adresse || null,
      genre: this.editPatient.genre || null
    };
    this.patientService.update(this.editPatient.id, payload).subscribe({
      next: () => {
        this.patientService.invalidateCache();
        this.showEditPatientModal = false;
        this.editPatient = null;
        this.showToast("Patient modifie avec succes", "success");
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de modifier le patient", "error")
    });
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  UTILISATEUR — création
  // ──────────────────────────────────────────────────────────────────────────────
  saveNewUser() {
    this.wizardErrors = {};
    if (!this.newUser.nom.trim() || !this.newUser.prenom.trim() || !this.newUser.email.trim()) {
      this.wizardErrors = __spreadValues(__spreadValues(__spreadValues({}, !this.newUser.nom.trim() ? { nom: "Le nom est obligatoire" } : {}), !this.newUser.prenom.trim() ? { prenom: "Le prenom est obligatoire" } : {}), !this.newUser.email.trim() ? { email: "L'email est obligatoire" } : {});
      this.showWizardModal = true;
      this.setWizardStep(2);
      return;
    }
    const normalizedPhone = this.normalizePhone(this.newUser.telephone);
    if (normalizedPhone && !this.isValidPhone(normalizedPhone)) {
      this.wizardErrors = { telephone: "Le telephone doit contenir 10 chiffres et commencer par 0" };
      this.showWizardModal = true;
      this.setWizardStep(2);
      return;
    }
    const payload = {
      nom: this.newUser.nom.trim(),
      prenom: this.newUser.prenom.trim(),
      email: this.newUser.email.trim(),
      role: this.toBackendRole(this.newUser.role),
      telephone: normalizedPhone || null,
      service: this.newUser.service.trim() || null,
      specialite: this.newUser.specialite.trim() || null,
      superviseurId: this.newUser.superviseurId ? Number(this.newUser.superviseurId) : null
    };
    this.utilisateurService.create(payload).subscribe({
      next: () => {
        this.showNewUserModal = false;
        this.showWizardModal = false;
        this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree. Le mot de passe a ete envoye par email.`, "success");
        this.refreshAfterMutation();
      },
      error: (err) => this.handleCreateUserError(err)
    });
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  CALENDRIER — horaires  (avec heures individuelles par jour)
  // ──────────────────────────────────────────────────────────────────────────────
  get calTitle() {
    return `${this.moisLabels[this.calMonth]} ${this.calYear}`;
  }
  calPrevMonth() {
    this.calMonth === 0 ? (this.calMonth = 11, this.calYear--) : this.calMonth--;
  }
  calNextMonth() {
    this.calMonth === 11 ? (this.calMonth = 0, this.calYear++) : this.calMonth++;
  }
  get calDays() {
    return this.buildCalendarDays(this.calYear, this.calMonth);
  }
  isDaySelected(date) {
    return this.newHoraire.jours.includes(date);
  }
  /**
   * Sélectionne / désélectionne un jour dans le formulaire horaire.
   * À l'ajout, pré-remplit les heures avec les valeurs par défaut du formulaire.
   */
  toggleCalDay(date) {
    const idx = this.newHoraire.jours.indexOf(date);
    if (idx === -1) {
      this.newHoraire.jours.push(date);
      this.newHoraire.jours.sort();
      this.newHoraire.joursHoraires.push({
        date,
        heureDebut: this.newHoraire.heureDebut,
        heureFin: this.newHoraire.heureFin
      });
      this.newHoraire.joursHoraires.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      this.newHoraire.jours.splice(idx, 1);
      this.newHoraire.joursHoraires = this.newHoraire.joursHoraires.filter((j) => j.date !== date);
    }
  }
  /** Retourne l'entrée JourHoraire pour un jour donné */
  getJourHoraire(date) {
    return this.newHoraire.joursHoraires.find((j) => j.date === date);
  }
  formatJours(jours) {
    if (!jours.length)
      return "\u2014";
    return jours.map((j) => this.isoToDisplayDate(j)).join(", ");
  }
  groupHoraires(horaires) {
    const map = /* @__PURE__ */ new Map();
    for (const horaire of horaires) {
      const key = `${horaire.utilisateurId}|${horaire.staffRole}|${horaire.heureDebut}|${horaire.heureFin}`;
      const existing = map.get(key);
      if (existing) {
        const combinedDates = [...existing.dates, ...horaire.jours];
        existing.dates = [...new Set(combinedDates)].sort((a, b) => a.localeCompare(b));
        existing.horaires.push(horaire);
      } else {
        map.set(key, {
          utilisateurId: horaire.utilisateurId,
          staffNom: horaire.staffNom,
          staffRole: horaire.staffRole,
          dates: [...horaire.jours].sort((a, b) => a.localeCompare(b)),
          heureDebut: horaire.heureDebut,
          heureFin: horaire.heureFin,
          horaires: [horaire]
        });
      }
    }
    return Array.from(map.values());
  }
  get filteredHorairesFlat() {
    const q = this.searchHoraire.toLowerCase().trim();
    let result = this.horaires;
    if (this.filterHoraireDate)
      result = result.filter((h) => h.jours.includes(this.filterHoraireDate));
    if (!q)
      return result;
    return result.filter((h) => {
      const datesDisplay = this.formatJours(h.jours).toLowerCase();
      const datesIso = h.jours.join(" ").toLowerCase();
      return h.staffNom.toLowerCase().includes(q) || h.staffRole.toLowerCase().includes(q) || datesDisplay.includes(q) || datesIso.includes(q) || h.heureDebut.includes(q) || h.heureFin.includes(q);
    });
  }
  get filteredGroupedHoraires() {
    return this.groupHoraires(this.filteredHorairesFlat);
  }
  get filteredPersonHoraires() {
    const map = /* @__PURE__ */ new Map();
    for (const h of this.filteredHorairesFlat) {
      let person = map.get(h.utilisateurId);
      if (!person) {
        person = { utilisateurId: h.utilisateurId, staffNom: h.staffNom, staffRole: h.staffRole, entries: [] };
        map.set(h.utilisateurId, person);
      }
      for (const date of h.jours) {
        if (this.filterHoraireDate && date !== this.filterHoraireDate)
          continue;
        person.entries.push({ date, heureDebut: h.heureDebut, heureFin: h.heureFin, horaireId: h.id });
      }
    }
    const persons = Array.from(map.values()).filter((p) => p.entries.length > 0);
    persons.forEach((p) => p.entries.sort((a, b) => a.date.localeCompare(b.date)));
    return persons;
  }
  get paginatedPersonHoraires() {
    const items = this.filteredPersonHoraires;
    const totalPages = Math.max(1, Math.ceil(items.length / this.pageSize));
    if (this.horairePage > totalPages)
      this.horairePage = totalPages;
    const start = (this.horairePage - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }
  get totalPersonHorairePages() {
    return Math.max(1, Math.ceil(this.filteredPersonHoraires.length / this.pageSize));
  }
  get paginatedHoraires() {
    return this.paginateArray(this.filteredHorairesFlat, "horairePage");
  }
  get paginatedGroupedHoraires() {
    const items = this.filteredGroupedHoraires;
    const totalPages = this.getTotalPages(items.length);
    if (this.horairePage > totalPages)
      this.horairePage = totalPages;
    const start = (this.horairePage - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }
  get totalHorairePages() {
    return this.getTotalPages(this.filteredHorairesFlat.length);
  }
  supprimerPersonHoraires(person) {
    const ids = [...new Set(person.entries.map((e) => e.horaireId))];
    forkJoin(ids.map((id) => this.horaireTravailService.delete(id))).subscribe({
      next: () => {
        this.showToast(`${ids.length} horaire(s) supprim\xE9(s)`, "warning");
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de supprimer les horaires", "error")
    });
  }
  supprimerGroupedHoraires(group) {
    const ids = group.horaires.map((h) => h.id);
    forkJoin(ids.map((id) => this.horaireTravailService.delete(id))).subscribe({
      next: () => {
        this.showToast(`${ids.length} horaire(s) supprim\xE9(s)`, "warning");
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de supprimer les horaires", "error")
    });
  }
  getVisibleHoraireDates(dates) {
    const query = this.searchHoraire.trim().toLowerCase();
    if (!query)
      return dates;
    const matchedDates = dates.filter((date) => {
      const iso = date.toLowerCase();
      const display = this.isoToDisplayDate(date).toLowerCase();
      return iso.includes(query) || display.includes(query);
    });
    return matchedDates.length ? matchedDates : dates;
  }
  get staffSoignants() {
    return this.users.filter((u) => ["infirmier", "aide-soignant", "infirmier-majeur"].includes(u.role));
  }
  get superviseurs() {
    return this.users.filter((u) => u.role === "infirmier-majeur");
  }
  staffParType(type) {
    if (!type)
      return [];
    const normalized = type.toLowerCase();
    if (normalized.includes("aide"))
      return this.users.filter((u) => u.role === "aide-soignant");
    if (normalized.includes("majeur"))
      return this.users.filter((u) => u.role === "infirmier-majeur");
    if (normalized.includes("infirmier"))
      return this.users.filter((u) => u.role === "infirmier");
    return this.users.filter((u) => u.role === this.toRoleId(type));
  }
  /**
   * Enregistre les horaires : UNE requête par jour avec ses heures propres.
   * Valide que chaque jour a des heures cohérentes avant d'envoyer.
   */
  ajouterHoraire() {
    if (!this.newHoraire.staffNom || !this.newHoraire.joursHoraires.length) {
      this.showToast("Veuillez s\xE9lectionner un personnel et au moins un jour", "warning");
      return;
    }
    const invalid = this.newHoraire.joursHoraires.find((j) => !j.heureDebut || !j.heureFin || j.heureDebut >= j.heureFin);
    if (invalid) {
      this.showToast(`Horaire invalide pour le ${this.isoToDisplayDate(invalid.date)} : l'heure de fin doit \xEAtre apr\xE8s l'heure de d\xE9but`, "warning");
      return;
    }
    const requests = this.newHoraire.joursHoraires.map((j) => ({
      utilisateurId: Number(this.newHoraire.staffNom),
      jours: [j.date],
      heureDebut: j.heureDebut,
      heureFin: j.heureFin
    }));
    forkJoin(requests.map((r) => this.horaireTravailService.create(r))).subscribe({
      next: (createdHoraires) => {
        this.newHoraire = { staffType: "", staffNom: "", heureDebut: "07:00", heureFin: "15:00", jours: [], joursHoraires: [] };
        this.insertHoraires(createdHoraires);
        this.showToast(`${requests.length} horaire(s) ajout\xE9(s) avec succ\xE8s`, "success");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible d'enregistrer les horaires", "error")
    });
  }
  supprimerHoraire(id) {
    if (!this.confirmDeletion("Supprimer cet horaire ?"))
      return;
    this.horaireTravailService.delete(id).subscribe({
      next: () => {
        this.removeHoraireRows([id]);
        this.showToast("Horaire supprime", "warning");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de supprimer l horaire", "error")
    });
  }
  get editCalTitle() {
    return `${this.moisLabels[this.editCalMonth]} ${this.editCalYear}`;
  }
  editCalPrevMonth() {
    this.editCalMonth === 0 ? (this.editCalMonth = 11, this.editCalYear--) : this.editCalMonth--;
  }
  editCalNextMonth() {
    this.editCalMonth === 11 ? (this.editCalMonth = 0, this.editCalYear++) : this.editCalMonth++;
  }
  get editCalDays() {
    return this.buildCalendarDays(this.editCalYear, this.editCalMonth);
  }
  toggleEditCalDay(date) {
    if (!this.editHoraire)
      return;
    const idx = this.editHoraire.jours.indexOf(date);
    if (idx === -1) {
      this.editHoraire.jours.push(date);
      this.editHoraire.jours.sort();
      this.editHoraire.joursHoraires.push({ date, heureDebut: this.editHoraire.heureDebut, heureFin: this.editHoraire.heureFin });
      this.editHoraire.joursHoraires.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      this.editHoraire.jours.splice(idx, 1);
      this.editHoraire.joursHoraires = this.editHoraire.joursHoraires.filter((j) => j.date !== date);
    }
  }
  isEditDaySelected(date) {
    return !!this.editHoraire && this.editHoraire.jours.includes(date);
  }
  openEditPersonHoraire(person) {
    const ids = [...new Set(person.entries.map((e) => e.horaireId))];
    const rows = this.horaires.filter((h) => ids.includes(h.id));
    if (!rows.length)
      return;
    const group = {
      utilisateurId: person.utilisateurId,
      staffNom: person.staffNom,
      staffRole: person.staffRole,
      dates: rows.flatMap((h) => h.jours),
      heureDebut: rows[0].heureDebut,
      heureFin: rows[0].heureFin,
      horaires: rows
    };
    this.openEditHoraire(group);
  }
  openEditHoraire(groupOrRow) {
    const group = "horaires" in groupOrRow ? groupOrRow : {
      utilisateurId: groupOrRow.utilisateurId,
      staffNom: groupOrRow.staffNom,
      staffRole: groupOrRow.staffRole,
      dates: [...groupOrRow.jours],
      heureDebut: groupOrRow.heureDebut,
      heureFin: groupOrRow.heureFin,
      horaires: [groupOrRow]
    };
    const sourceHoraires = [...group.horaires];
    const joursHoraires = sourceHoraires.flatMap((h) => h.jours.map((date) => ({ date, heureDebut: h.heureDebut, heureFin: h.heureFin }))).sort((a, b) => a.date.localeCompare(b.date));
    this.editHoraire = {
      id: sourceHoraires[0]?.id ?? 0,
      utilisateurId: group.utilisateurId,
      staffNom: group.staffNom,
      staffRole: group.staffRole,
      jours: joursHoraires.map((j) => j.date),
      heureDebut: joursHoraires[0]?.heureDebut ?? "07:00",
      heureFin: joursHoraires[0]?.heureFin ?? "15:00",
      joursHoraires,
      sourceHoraires
    };
    this.editCalYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.editCalMonth = (/* @__PURE__ */ new Date()).getMonth();
    this.showEditHoraireModal = true;
  }
  saveEditHoraire() {
    if (!this.editHoraire)
      return;
    const staff = this.staffParType(this.editHoraire.staffRole).find((u) => `${u.prenom} ${u.nom}` === this.editHoraire?.staffNom || `${u.nom} ${u.prenom}` === this.editHoraire?.staffNom);
    if (!staff) {
      this.showToast("Impossible d identifier le personnel pour cet horaire", "warning");
      return;
    }
    const invalid = this.editHoraire.joursHoraires.find((j) => !j.heureDebut || !j.heureFin || j.heureDebut >= j.heureFin);
    if (invalid) {
      this.showToast(`Horaire invalide pour le ${this.isoToDisplayDate(invalid.date)} : l'heure de fin doit ?tre apr?s l'heure de d?but`, "warning");
      return;
    }
    const requests = this.editHoraire.joursHoraires.map((j) => ({
      utilisateurId: staff.id,
      jours: [j.date],
      heureDebut: j.heureDebut,
      heureFin: j.heureFin
    }));
    const sourceIds = this.editHoraire.sourceHoraires.map((h) => h.id);
    const deletions = this.editHoraire.sourceHoraires.map((h) => this.horaireTravailService.delete(h.id));
    forkJoin([...deletions, ...requests.map((r) => this.horaireTravailService.create(r))]).subscribe({
      next: (results) => {
        const createdHoraires = results.slice(deletions.length);
        this.replaceHoraireRows(sourceIds, createdHoraires);
        this.showEditHoraireModal = false;
        this.editHoraire = null;
        this.showToast("Horaires modifies avec succes", "success");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de modifier les horaires", "error")
    });
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  CALENDRIER — séances  (avec heures individuelles par date)
  // ──────────────────────────────────────────────────────────────────────────────
  get seanceCalTitle() {
    return `${this.moisLabels[this.seanceCalMonth]} ${this.seanceCalYear}`;
  }
  seanceCalPrevMonth() {
    this.seanceCalMonth === 0 ? (this.seanceCalMonth = 11, this.seanceCalYear--) : this.seanceCalMonth--;
  }
  seanceCalNextMonth() {
    this.seanceCalMonth === 11 ? (this.seanceCalMonth = 0, this.seanceCalYear++) : this.seanceCalMonth++;
  }
  get seanceCalDays() {
    return this.buildCalendarDays(this.seanceCalYear, this.seanceCalMonth);
  }
  isSeanceDaySelected(date) {
    return this.newSeance.dates.includes(date);
  }
  /**
   * Sélectionne / désélectionne une date pour une nouvelle séance.
   * À l'ajout, pré-remplit les heures avec les valeurs par défaut du formulaire.
   */
  toggleSeanceCalDay(date) {
    const idx = this.newSeance.dates.indexOf(date);
    if (idx === -1) {
      this.newSeance.dates.push(date);
      this.newSeance.dates.sort();
      this.newSeance.datesSeances.push({
        date,
        heureDebut: this.newSeance.heureDebut,
        heureFin: this.newSeance.heureFin,
        aideSoignantId: this.newSeance.aideSoignantId ? Number(this.newSeance.aideSoignantId) : this.resolveDefaultAideSoignantIdForDate(date, this.newSeance.heureDebut, this.newSeance.heureFin),
        machine: this.resolveDefaultMachineForDate(date, this.newSeance.heureDebut, this.newSeance.heureFin)
      });
      this.newSeance.datesSeances.sort((a, b) => a.date.localeCompare(b.date));
      this.newSeanceActiveDate = date;
    } else {
      this.newSeance.dates.splice(idx, 1);
      this.newSeance.datesSeances = this.newSeance.datesSeances.filter((d) => d.date !== date);
      if (this.newSeanceActiveDate === date) {
        this.newSeanceActiveDate = this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1]?.date ?? null;
      }
    }
    this.onNewSeanceScheduleChange();
  }
  /** Retourne l'entrée JourSeance pour une date donnée */
  getJourSeance(date) {
    return this.newSeance.datesSeances.find((d) => d.date === date);
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  SÉANCES — filtre, recherche, regroupement
  // ──────────────────────────────────────────────────────────────────────────────
  groupSeances(seances) {
    const map = /* @__PURE__ */ new Map();
    for (const s of seances) {
      const key = `${s.patientId}|${s.responsableId}|${s.heureDebut}|${s.heureFin}|${s.machine}|${s.statut}`;
      const existing = map.get(key);
      if (existing) {
        if (!existing.dates.includes(s.date)) {
          existing.dates.push(s.date);
          existing.dates.sort((a, b) => this.displayToIsoDate(a).localeCompare(this.displayToIsoDate(b)));
        }
        existing.seances.push(s);
      } else {
        map.set(key, {
          patientId: s.patientId,
          patientNom: s.patientNom,
          responsableId: s.responsableId,
          aideSoignantNom: s.aideSoignantNom,
          dates: [s.date],
          heureDebut: s.heureDebut,
          heureFin: s.heureFin,
          machine: s.machine,
          statut: s.statut,
          seances: [s]
        });
      }
    }
    return Array.from(map.values());
  }
  get filteredSeances() {
    let result = this.seancesAdmin;
    if (this.filterSeanceDate) {
      const filterDisplay = this.isoToDisplayDate(this.filterSeanceDate);
      result = result.filter((s) => s.date === filterDisplay);
    }
    const q = this.searchSeance.toLowerCase().trim();
    if (q) {
      result = result.filter((s) => s.patientNom.toLowerCase().includes(q) || s.aideSoignantNom.toLowerCase().includes(q) || s.date.toLowerCase().includes(q) || s.heureDebut.includes(q) || s.heureFin.includes(q) || s.machine.toLowerCase().includes(q) || s.statut.toLowerCase().includes(q));
    }
    return result;
  }
  get filteredGroupedSeances() {
    return this.groupSeances(this.filteredSeances);
  }
  get paginatedGroupedSeances() {
    const items = this.filteredGroupedSeances;
    const totalPages = this.getTotalPages(items.length);
    if (this.seancePage > totalPages)
      this.seancePage = totalPages;
    const start = (this.seancePage - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }
  get paginatedSeances() {
    return this.paginateArray(this.filteredSeances, "seancePage");
  }
  get totalSeancePages() {
    return this.getTotalPages(this.filteredSeances.length);
  }
  get filteredPersonSeances() {
    const map = /* @__PURE__ */ new Map();
    for (const s of this.filteredSeances) {
      let person = map.get(s.patientId);
      if (!person) {
        person = { patientId: s.patientId, patientNom: s.patientNom, aideSoignantNom: s.aideSoignantNom, entries: [] };
        map.set(s.patientId, person);
      }
      person.entries.push({ date: s.date, heureDebut: s.heureDebut, heureFin: s.heureFin, machine: s.machine, statut: s.statut, seanceId: s.id });
    }
    const persons = Array.from(map.values());
    persons.forEach((p) => p.entries.sort((a, b) => a.date.localeCompare(b.date)));
    return persons;
  }
  get paginatedPersonSeances() {
    const items = this.filteredPersonSeances;
    const totalPages = Math.max(1, Math.ceil(items.length / this.pageSize));
    if (this.seancePage > totalPages)
      this.seancePage = totalPages;
    const start = (this.seancePage - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }
  get totalPersonSeancePages() {
    return Math.max(1, Math.ceil(this.filteredPersonSeances.length / this.pageSize));
  }
  supprimerPersonSeances(person) {
    const ids = person.entries.map((e) => e.seanceId);
    forkJoin(ids.map((id) => this.seanceService.delete(id))).subscribe({
      next: () => {
        this.showToast(`${ids.length} s\xE9ance(s) supprim\xE9e(s)`, "warning");
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de supprimer les s\xE9ances", "error")
    });
  }
  openEditPersonSeance(person) {
    if (!person.entries.length)
      return;
    const rows = person.entries.map((e) => this.seancesAdmin.find((s) => s.id === e.seanceId)).filter((r) => !!r).sort((a, b) => this.displayToIsoDate(a.date).localeCompare(this.displayToIsoDate(b.date)));
    if (!rows.length)
      return;
    const first = rows[0];
    const datesSeances = rows.map((s) => ({ date: this.displayToIsoDate(s.date), heureDebut: s.heureDebut, heureFin: s.heureFin }));
    this.editSeance = __spreadProps(__spreadValues({}, first), { datesSeances, sourceSeances: rows });
    this.editSeanceDates = datesSeances.map((d) => d.date);
    const firstDate = new Date(datesSeances[0].date);
    this.editSeanceCalYear = firstDate.getFullYear();
    this.editSeanceCalMonth = firstDate.getMonth();
    this.showEditSeanceModal = true;
    this.syncSelectedAideSoignantForEdit();
    this.refreshAvailableMachinesForEditSeance();
  }
  isSeanceDateMatchingFilter(displayDate) {
    if (!this.filterSeanceDate)
      return false;
    return displayDate === this.isoToDisplayDate(this.filterSeanceDate);
  }
  formatFilterDate(isoDate) {
    return this.isoToDisplayDate(isoDate);
  }
  supprimerGroupedSeances(group) {
    const ids = group.seances.map((s) => s.id);
    forkJoin(ids.map((id) => this.seanceService.delete(id))).subscribe({
      next: () => {
        this.showToast(`${ids.length} s\xE9ance(s) supprim\xE9e(s)`, "warning");
        this.refreshAfterMutation();
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de supprimer les s\xE9ances", "error")
    });
  }
  get infirmiers() {
    return this.users.filter((u) => u.role === "infirmier");
  }
  get aidesSoignants() {
    return this.users.filter((u) => u.role === "aide-soignant");
  }
  get availableAidesSoignants() {
    const activeDate = this.getActiveNewSeanceDateEntry();
    if (!activeDate)
      return [];
    const candidates = this.aidesSoignants.filter((user) => this.isAideSoignantAvailableForSelection(user.id));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getAideSoignantLoadForSelection(left.id) - this.getAideSoignantLoadForSelection(right.id);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, "fr");
    });
  }
  get availableAidesSoignantsForEdit() {
    const candidates = this.aidesSoignants.filter((user) => this.isAideSoignantAvailableForEdit(user.id));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getAideSoignantLoadForEdit(left.id) - this.getAideSoignantLoadForEdit(right.id);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, "fr");
    });
  }
  get patientsUsers() {
    return this.users.filter((u) => u.role === "patient");
  }
  getAideSoignantLoadForSelection(userId) {
    const activeDate = this.getActiveNewSeanceDateEntry();
    const dates = activeDate ? [activeDate.date] : [];
    if (!dates.length)
      return 0;
    return this.seancesAdmin.filter((seance) => seance.responsableId === userId && dates.includes(this.displayToIsoDate(seance.date))).length;
  }
  getAvailableAidesSoignantsForDate(date, start, end) {
    const candidates = this.aidesSoignants.filter((user) => this.hasHoraireCoverage(user.id, date, start, end) && !this.hasSeanceConflict(user.id, date, start, end));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getAideSoignantLoadForDate(left.id, date) - this.getAideSoignantLoadForDate(right.id, date);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, "fr");
    });
  }
  getAideSoignantLoadForDate(userId, date) {
    return this.seancesAdmin.filter((seance) => seance.responsableId === userId && this.displayToIsoDate(seance.date) === date).length;
  }
  getAideSoignantLoadForEdit(userId) {
    const dates = this.editSeanceDates.length ? this.editSeanceDates : this.editSeance ? [this.displayToIsoDate(this.editSeance.date)] : [this.todayLocalIso()];
    return this.seancesAdmin.filter((seance) => seance.id !== this.editSeance?.id && seance.responsableId === userId && dates.includes(this.displayToIsoDate(seance.date))).length;
  }
  /**
   * Planifie les séances : UNE requête par date avec ses heures propres.
   * Valide que chaque date a des heures cohérentes avant d'envoyer.
   */
  ajouterSeance() {
    if (!this.newSeance.patientId || !this.newSeance.datesSeances.length) {
      this.showToast("Veuillez choisir un patient et au moins une date", "warning");
      return;
    }
    const invalid = this.newSeance.datesSeances.find((d) => !d.heureDebut || !d.heureFin || d.heureDebut >= d.heureFin);
    if (invalid) {
      this.showToast(`Horaire invalide pour le ${this.isoToDisplayDate(invalid.date)} : l'heure de fin doit \xEAtre apr\xE8s l'heure de d\xE9but`, "warning");
      return;
    }
    const adminId = this.authService.utilisateurId;
    const requests = this.newSeance.datesSeances.map((d) => {
      const machine = this.resolveMachineForDate(d) ?? (this.newSeance.machine || "");
      return {
        date: d.date,
        heureDebut: d.heureDebut,
        heureFin: d.heureFin,
        machine,
        notes: "Planifiee depuis l administration",
        dureeHeures: this.computeDuration(d.heureDebut, d.heureFin),
        patientId: Number(this.newSeance.patientId),
        utilisateurId: adminId
      };
    });
    forkJoin(requests.map((r) => this.seanceService.create(r))).subscribe({
      next: (createdSeances) => {
        this.insertSeances(createdSeances);
        this.resetNewSeanceForm();
        this.showToast(`${requests.length} s\xE9ance(s) planifi\xE9e(s) avec succ\xE8s`, "success");
      },
      error: (err) => {
        const msg = err?.error?.message || err?.error?.detail || err?.error?.error || "Impossible de planifier la s\xE9ance";
        this.showToast(msg, "error");
      }
    });
  }
  supprimerSeance(id) {
    if (!this.confirmDeletion("Supprimer cette seance ?"))
      return;
    this.seanceService.delete(id).subscribe({
      next: () => {
        this.removeSeanceRows([id]);
        this.showToast("Seance supprimee", "warning");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de supprimer la seance", "error")
    });
  }
  get editSeanceCalTitle() {
    return `${this.moisLabels[this.editSeanceCalMonth]} ${this.editSeanceCalYear}`;
  }
  editSeanceCalPrevMonth() {
    this.editSeanceCalMonth === 0 ? (this.editSeanceCalMonth = 11, this.editSeanceCalYear--) : this.editSeanceCalMonth--;
  }
  editSeanceCalNextMonth() {
    this.editSeanceCalMonth === 11 ? (this.editSeanceCalMonth = 0, this.editSeanceCalYear++) : this.editSeanceCalMonth++;
  }
  get editSeanceCalDays() {
    return this.buildCalendarDays(this.editSeanceCalYear, this.editSeanceCalMonth);
  }
  toggleEditSeanceCalDay(date) {
    if (!this.editSeance)
      return;
    const idx = this.editSeanceDates.indexOf(date);
    if (idx === -1) {
      this.editSeanceDates.push(date);
      this.editSeanceDates.sort();
      this.editSeance.datesSeances.push({ date, heureDebut: this.editSeance.heureDebut, heureFin: this.editSeance.heureFin });
      this.editSeance.datesSeances.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      this.editSeanceDates.splice(idx, 1);
      this.editSeance.datesSeances = this.editSeance.datesSeances.filter((d) => d.date !== date);
    }
    this.syncSelectedAideSoignantForEdit();
    this.refreshAvailableMachinesForEditSeance();
  }
  isEditSeanceDaySelected(date) {
    return this.editSeanceDates.includes(date);
  }
  openEditSeance(groupOrRow) {
    const group = "seances" in groupOrRow ? groupOrRow : {
      patientId: groupOrRow.patientId,
      patientNom: groupOrRow.patientNom,
      responsableId: groupOrRow.responsableId,
      aideSoignantNom: groupOrRow.aideSoignantNom,
      dates: [groupOrRow.date],
      heureDebut: groupOrRow.heureDebut,
      heureFin: groupOrRow.heureFin,
      machine: groupOrRow.machine,
      statut: groupOrRow.statut,
      seances: [groupOrRow]
    };
    const sourceSeances = [...group.seances].sort((a, b) => this.displayToIsoDate(a.date).localeCompare(this.displayToIsoDate(b.date)));
    const first = sourceSeances[0];
    this.editSeance = __spreadProps(__spreadValues({}, first), {
      datesSeances: sourceSeances.map((s) => ({ date: this.displayToIsoDate(s.date), heureDebut: s.heureDebut, heureFin: s.heureFin })),
      sourceSeances
    });
    this.editSeanceDates = this.editSeance.datesSeances.map((d) => d.date);
    this.editSeanceCalYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.editSeanceCalMonth = (/* @__PURE__ */ new Date()).getMonth();
    this.showEditSeanceModal = true;
    this.syncSelectedAideSoignantForEdit();
    this.refreshAvailableMachinesForEditSeance();
  }
  saveEditSeance() {
    if (!this.editSeance)
      return;
    const invalid = this.editSeance.datesSeances.find((d) => !d.heureDebut || !d.heureFin || d.heureDebut >= d.heureFin);
    if (invalid) {
      this.showToast(`Horaire invalide pour le ${this.isoToDisplayDate(invalid.date)} : l'heure de fin doit ?tre apr?s l'heure de d?but`, "warning");
      return;
    }
    const sourceByDate = new Map(this.editSeance.sourceSeances.map((s) => [this.displayToIsoDate(s.date), s]));
    const currentDates = new Set(this.editSeance.datesSeances.map((d) => d.date));
    const updates = this.editSeance.datesSeances.filter((d) => sourceByDate.has(d.date)).map((d) => {
      const source = sourceByDate.get(d.date);
      const payload = {
        date: d.date,
        heureDebut: d.heureDebut,
        heureFin: d.heureFin,
        machine: this.editSeance.machine,
        statut: this.normalizeSeanceStatut(this.editSeance.statut),
        notes: "Mise a jour depuis l administration"
      };
      return this.seanceService.update(source.id, payload);
    });
    const creations = this.editSeance.datesSeances.filter((d) => !sourceByDate.has(d.date)).map((d) => this.seanceService.create({
      date: d.date,
      heureDebut: d.heureDebut,
      heureFin: d.heureFin,
      machine: this.editSeance.machine,
      notes: "Planifiee depuis l administration",
      dureeHeures: this.computeDuration(d.heureDebut, d.heureFin),
      patientId: this.editSeance.patientId,
      utilisateurId: this.authService.utilisateurId
    }));
    const deletions = this.editSeance.sourceSeances.filter((s) => !currentDates.has(this.displayToIsoDate(s.date))).map((s) => this.seanceService.delete(s.id));
    forkJoin([...updates, ...creations, ...deletions]).subscribe({
      next: (results) => {
        const updatedSeances = results.slice(0, updates.length);
        const createdSeances = results.slice(updates.length, updates.length + creations.length);
        const deletedIds = this.editSeance?.sourceSeances.filter((s) => !currentDates.has(this.displayToIsoDate(s.date))).map((s) => s.id) ?? [];
        this.replaceSeanceRows(updatedSeances, createdSeances, deletedIds);
        this.showEditSeanceModal = false;
        this.editSeance = null;
        this.editSeanceDates = [];
        this.showToast("Seances modifiees avec succes", "success");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de modifier les seances", "error")
    });
  }
  seanceStatutClass(statut) {
    const v = this.normalizeSeanceStatut(statut);
    return v === "TERMINEE" ? "ok" : v === "EN_COURS" ? "info" : "neutral";
  }
  seanceStatutLabel(statut) {
    const v = this.normalizeSeanceStatut(statut);
    return v === "TERMINEE" ? "Terminee" : v === "EN_COURS" ? "En cours" : v === "ANNULEE" ? "Annulee" : "Planifiee";
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  KPI
  // ──────────────────────────────────────────────────────────────────────────────
  get totalUsers() {
    return this.users.length;
  }
  get activeUsers() {
    return this.users.filter((u) => u.statut === "actif").length;
  }
  get medecinCount() {
    return this.users.filter((u) => u.role === "medecin").length;
  }
  get infMajeurCount() {
    return this.users.filter((u) => u.role === "infirmier-majeur").length;
  }
  get infirmierCount() {
    return this.users.filter((u) => u.role === "infirmier").length;
  }
  get aideSoignantCount() {
    return this.users.filter((u) => u.role === "aide-soignant").length;
  }
  get patientCount() {
    return this.users.filter((u) => u.role === "patient").length;
  }
  get suspendedCount() {
    return this.users.filter((u) => u.statut === "suspendu").length;
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  HELPERS UI
  // ──────────────────────────────────────────────────────────────────────────────
  roleLabel(id) {
    return this.getRoleConfig(typeof id === "string" ? this.toRoleId(id) : id)?.label ?? String(id);
  }
  roleColorVar(id) {
    return this.getRoleConfig(typeof id === "string" ? this.toRoleId(id) : id)?.colorVar ?? "var(--c-text-2)";
  }
  statusClass(status) {
    return status === "actif" ? "ok" : status === "suspendu" ? "crit" : "neutral";
  }
  statusLabel(status) {
    return status === "actif" ? "Actif" : status === "suspendu" ? "Suspendu" : "Inactif";
  }
  initials(user) {
    return `${user.prenom?.[0] ?? ""}${user.nom?.[0] ?? ""}`.toUpperCase();
  }
  profilTabLabel(role) {
    return { admin: "Admins", medecin: "Medecins", "infirmier-majeur": "Inf. Majeurs", infirmier: "Infirmiers", "aide-soignant": "Aides-Soignants", patient: "Patients" }[role];
  }
  get activeTabTitle() {
    return { profils: "Gestion des Profils", seances: "Planification des Seances" }[this.activeTab];
  }
  /** Expose isoToDisplayDate au template */
  isoToDisplayDate(value) {
    if (!value || !value.includes("-"))
      return value;
    const [y, m, d] = value.slice(0, 10).split("-");
    return `${d}/${m}/${y}`;
  }
  showToast(message, type = "info") {
    const id = ++this.tid;
    this.toasts.push({ message, type, id });
    setTimeout(() => this.toasts = this.toasts.filter((t) => t.id !== id), 3500);
  }
  removeToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
  toastIcon(type) {
    return { success: "check_circle", warning: "warning", error: "error", info: "info", ok: "check_circle" }[type] ?? "info";
  }
  saveSettings() {
    this.adminSettingsService.update(this.settings).subscribe({
      next: (saved) => {
        this.settings = __spreadValues({}, saved);
        this.showSettingsModal = false;
        this.showToast("Parametres systeme enregistres", "success");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible d enregistrer les parametres", "error")
    });
  }
  toggleTheme() {
    this.isLight = !this.isLight;
    if (this.isLight) {
      document.body.classList.add("theme-light");
    } else {
      document.body.classList.remove("theme-light");
    }
  }
  logout() {
    this.stopPolling();
    this.destroy$.next();
    this.destroy$.complete();
    this.authService.logout();
  }
  // ──────────────────────────────────────────────────────────────────────────────
  //  PRIVATE HELPERS
  // ──────────────────────────────────────────────────────────────────────────────
  normalizePhone(value) {
    return String(value ?? "").replace(/\D/g, "");
  }
  isValidPhone(value) {
    return /^0\d{9}$/.test(value);
  }
  isValidOptionalPhone(value) {
    const normalized = this.normalizePhone(value);
    return !normalized || this.isValidPhone(normalized);
  }
  isStrongPassword(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/.test(value);
  }
  hasWizardError(field) {
    return !!this.wizardErrors[field];
  }
  wizardError(field) {
    return this.wizardErrors[field] ?? "";
  }
  clearWizardError(field) {
    if (!this.wizardErrors[field])
      return;
    const _a = this.wizardErrors, { [field]: _removed } = _a, remaining = __objRest(_a, [__restKey(field)]);
    this.wizardErrors = remaining;
  }
  setWizardStep(step) {
    this.wizardStep = step;
    setTimeout(() => {
      const body = document.querySelector(".wz-body");
      body?.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }
  validateWizardIdentityStep() {
    const errors = {};
    if (!this.wizardData.nom.trim())
      errors["nom"] = "Le nom est obligatoire";
    if (!this.wizardData.prenom.trim())
      errors["prenom"] = "Le prenom est obligatoire";
    if (!this.isValidOptionalPhone(this.wizardData.telephone))
      errors["telephone"] = "Le telephone doit contenir 10 chiffres et commencer par 0";
    if (this.wizardIsPatient) {
      if (!this.wizardData.dateNaissance)
        errors["dateNaissance"] = "La date de naissance est obligatoire";
      if (!this.wizardData.genre)
        errors["genre"] = "Le genre est obligatoire";
    } else {
      if (!this.wizardData.email.trim())
        errors["email"] = "L'email professionnel est obligatoire";
      if (this.wizardData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.wizardData.email.trim())) {
        errors["email"] = "L'email n'est pas valide";
      }
      if (this.wizardRole === "medecin" && !this.wizardData.specialite.trim()) {
        errors["specialite"] = "La specialite est obligatoire";
      }
    }
    this.wizardErrors = errors;
    return Object.keys(errors).length === 0;
  }
  handleCreateUserError(err) {
    const fieldErrors = err?.error?.fieldErrors;
    if (fieldErrors && typeof fieldErrors === "object") {
      this.wizardErrors = fieldErrors;
      this.showWizardModal = true;
      this.setWizardStep(2);
      return;
    }
    this.showToast(err?.error?.message ?? "Impossible de creer le compte", "error");
  }
  applyRolePermissions(configs) {
    this.roles.forEach((r) => r.permissions = {});
    configs.forEach((c) => {
      const role = this.roles.find((r) => this.toBackendRole(r.id) === c.role.toUpperCase());
      if (role)
        role.permissions = __spreadValues({}, c.permissions);
    });
  }
  mapUtilisateurToAppUser(dto) {
    const role = this.toRoleId(dto.role);
    return {
      id: dto.id,
      login: dto.login,
      username: dto.username,
      role,
      backendRole: dto.role,
      mat: dto.mat,
      nom: dto.nom,
      prenom: dto.prenom,
      email: dto.email,
      mdp: "********",
      dateCreation: this.formatDateTime(dto.dateCreation),
      actif: dto.actif,
      statut: dto.actif ? "actif" : "inactif",
      derniereConnexion: "\u2014",
      specialite: dto.specialite,
      superviseurId: dto.superviseurId,
      telephone: dto.telephone || "",
      service: (dto.service || this.serviceParRole[role]) ?? ""
    };
  }
  mapPatientToAppUser(dto) {
    return {
      id: dto.id,
      login: "",
      username: "",
      role: "patient",
      backendRole: "PATIENT",
      mat: `PAT-${String(dto.id).padStart(4, "0")}`,
      nom: dto.nom,
      prenom: dto.prenom,
      email: "",
      mdp: "",
      dateCreation: dto.dossierPatient?.dateCreation ? this.formatDateTime(dto.dossierPatient.dateCreation) : "\u2014",
      actif: true,
      statut: "actif",
      derniereConnexion: "\u2014",
      telephone: dto.telephone ?? "",
      service: dto.medecinReferent ? `Referent: ${dto.medecinReferent.prenom} ${dto.medecinReferent.nom}` : "",
      dateNaissance: dto.dateNaissance,
      groupeSanguin: dto.groupeSanguin,
      patientStatut: dto.statut,
      cin: dto.cin ?? null
    };
  }
  mapHoraireToRow(dto) {
    return { id: dto.id, utilisateurId: dto.utilisateurId, staffNom: dto.utilisateurNom, staffRole: this.roleLabel(dto.role), jours: dto.jours, heureDebut: this.timeOnly(dto.heureDebut), heureFin: this.timeOnly(dto.heureFin) };
  }
  mapSeanceToRow(dto) {
    const aideSoignant = dto.aideSoignant;
    const aideSoignantNom = aideSoignant ? `${aideSoignant.prenom} ${aideSoignant.nom}` : "\u2014";
    return {
      id: dto.id,
      patientId: dto.patient.id,
      patientNom: `${dto.patient.prenom} ${dto.patient.nom}`,
      responsableId: aideSoignant?.id ?? null,
      aideSoignantNom,
      date: this.isoToDisplayDate(String(dto.date)),
      heureDebut: this.timeOnly(String(dto.heureDebut)),
      heureFin: this.timeOnly(String(dto.heureFin)),
      machine: dto.machine ?? "\u2014",
      statut: this.normalizeSeanceStatut(dto.statut)
    };
  }
  upsertStaffUser(user) {
    const index = this.staffUsers.findIndex((u) => u.id === user.id);
    if (index >= 0)
      this.staffUsers[index] = user;
    else
      this.staffUsers.unshift(user);
    this.users = [...this.staffUsers, ...this.patientUsersData];
  }
  toRoleId(role) {
    const value = String(role ?? "").toUpperCase().replace(/^ROLE_/, "");
    switch (value) {
      case "ADMIN":
        return "admin";
      case "MEDECIN":
        return "medecin";
      case "INFIRMIER_MAJEUR":
        return "infirmier-majeur";
      case "INFIRMIER":
        return "infirmier";
      case "AIDE_SOIGNANT":
        return "aide-soignant";
      default:
        return "patient";
    }
  }
  toBackendRole(role) {
    return role === "admin" ? "ADMIN" : role === "medecin" ? "MEDECIN" : role === "infirmier-majeur" ? "INFIRMIER_MAJEUR" : role === "infirmier" ? "INFIRMIER" : role === "aide-soignant" ? "AIDE_SOIGNANT" : "PATIENT";
  }
  buildCalendarDays(year, month) {
    const first = new Date(year, month, 1).getDay();
    const offset = (first + 6) % 7;
    const total = new Date(year, month + 1, 0).getDate();
    const today = /* @__PURE__ */ new Date();
    const cells = [];
    for (let i = 0; i < offset; i++)
      cells.push(null);
    for (let d = 1; d <= total; d++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({ date, day: d, today: today.getFullYear() === year && today.getMonth() === month && today.getDate() === d });
    }
    return cells;
  }
  toggleDateSelection(target, date) {
    const index = target.indexOf(date);
    if (index === -1) {
      target.push(date);
      target.sort();
    } else
      target.splice(index, 1);
  }
  computeDuration(start, end) {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    return Math.max(1, Math.round((eh * 60 + em - (sh * 60 + sm)) / 60));
  }
  timeOnly(value) {
    return value?.slice(0, 5) || "00:00";
  }
  displayToIsoDate(value) {
    if (!value || !value.includes("/"))
      return value;
    const [d, m, y] = value.split("/");
    return `${y}-${m}-${d}`;
  }
  formatDateTime(value) {
    if (!value)
      return "\u2014";
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return value;
    return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(date);
  }
  normalizeSeanceStatut(statut) {
    const value = String(statut ?? "").toUpperCase().replace("-", "_");
    return value === "EN_COURS" || value === "TERMINEE" || value === "ANNULEE" ? value : "PLANIFIEE";
  }
  syncSelectedAideSoignant() {
    if (!this.newSeance.aideSoignantId)
      return;
    const selectedId = Number(this.newSeance.aideSoignantId);
    if (!this.availableAidesSoignants.some((user) => user.id === selectedId))
      this.newSeance.aideSoignantId = "";
  }
  syncSelectedAideSoignantsByDate() {
    this.newSeance.datesSeances = this.newSeance.datesSeances.map((dateSeance) => {
      const selectedId = dateSeance.aideSoignantId ? Number(dateSeance.aideSoignantId) : null;
      const candidates = this.getAvailableAidesSoignantsForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);
      if (selectedId && candidates.some((user) => user.id === selectedId)) {
        return dateSeance;
      }
      return __spreadProps(__spreadValues({}, dateSeance), {
        aideSoignantId: this.resolveDefaultAideSoignantIdForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin)
      });
    });
  }
  syncSelectedMachinesByDate() {
    this.newSeance.datesSeances = this.newSeance.datesSeances.map((dateSeance) => {
      const selectedMachine = dateSeance.machine ?? "";
      const candidates = this.getAvailableMachineCodesForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);
      if (selectedMachine && candidates.includes(selectedMachine)) {
        return dateSeance;
      }
      return __spreadProps(__spreadValues({}, dateSeance), {
        machine: this.resolveDefaultMachineForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin)
      });
    });
  }
  syncSelectedAideSoignantForEdit() {
    if (!this.editSeance?.responsableId)
      return;
    const selectedId = Number(this.editSeance.responsableId);
    if (!this.availableAidesSoignantsForEdit.some((user) => user.id === selectedId))
      this.editSeance.responsableId = this.availableAidesSoignantsForEdit[0]?.id ?? null;
  }
  resolveAvailableAideSoignantId() {
    const selectedId = this.newSeance.aideSoignantId ? Number(this.newSeance.aideSoignantId) : null;
    if (selectedId && this.availableAidesSoignants.some((user) => user.id === selectedId))
      return selectedId;
    return this.availableAidesSoignants[0]?.id ?? null;
  }
  resolveAvailableAideSoignantIdForDate(dateSeance) {
    const selectedId = dateSeance.aideSoignantId ? Number(dateSeance.aideSoignantId) : null;
    const candidates = this.getAvailableAidesSoignantsForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);
    if (selectedId && candidates.some((user) => user.id === selectedId))
      return selectedId;
    return candidates[0]?.id ?? null;
  }
  resolveDefaultAideSoignantIdForDate(date, start, end) {
    const globalSelectedId = this.newSeance.aideSoignantId ? Number(this.newSeance.aideSoignantId) : null;
    const candidates = this.getAvailableAidesSoignantsForDate(date, start, end);
    if (globalSelectedId && candidates.some((user) => user.id === globalSelectedId))
      return globalSelectedId;
    return candidates[0]?.id ?? null;
  }
  resolveMachineForDate(dateSeance) {
    const selectedMachine = dateSeance.machine ?? "";
    const candidates = this.getAvailableMachineCodesForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);
    if (selectedMachine && candidates.includes(selectedMachine))
      return selectedMachine;
    return candidates[0] ?? null;
  }
  resolveDefaultMachineForDate(date, start, end) {
    const globalSelectedMachine = this.newSeance.machine ?? "";
    const candidates = this.getAvailableMachineCodesForDate(date, start, end);
    if (globalSelectedMachine && candidates.includes(globalSelectedMachine))
      return globalSelectedMachine;
    return candidates[0] ?? "";
  }
  getAvailableMachineCodesForDate(date, start, end) {
    return this.allMachineCodes.filter((code) => !this.seancesAdmin.some((seance) => seance.machine === code && this.displayToIsoDate(seance.date) === date && this.rangesOverlap(start, end, seance.heureDebut, seance.heureFin)));
  }
  getActiveNewSeanceDateEntry() {
    if (!this.newSeance.datesSeances.length)
      return null;
    if (this.newSeanceActiveDate) {
      return this.newSeance.datesSeances.find((d) => d.date === this.newSeanceActiveDate) ?? this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1];
    }
    return this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1];
  }
  resolveAvailableAideSoignantIdForEdit() {
    const selectedId = this.editSeance?.responsableId ? Number(this.editSeance.responsableId) : null;
    if (selectedId && this.availableAidesSoignantsForEdit.some((user) => user.id === selectedId))
      return selectedId;
    return this.availableAidesSoignantsForEdit[0]?.id ?? null;
  }
  isAideSoignantAvailableForSelection(userId) {
    const selectedDate = this.getActiveNewSeanceDateEntry();
    if (!selectedDate)
      return false;
    return this.hasHoraireCoverage(userId, selectedDate.date, selectedDate.heureDebut, selectedDate.heureFin) && !this.hasSeanceConflict(userId, selectedDate.date, selectedDate.heureDebut, selectedDate.heureFin);
  }
  isAideSoignantAvailableForEdit(userId) {
    if (!this.editSeance)
      return false;
    if (!this.editSeance.datesSeances.length)
      return false;
    return this.editSeance.datesSeances.every((ds) => {
      const source = this.editSeance.sourceSeances.find((s) => this.displayToIsoDate(s.date) === ds.date);
      return this.hasHoraireCoverage(userId, ds.date, ds.heureDebut, ds.heureFin) && !this.hasSeanceConflict(userId, ds.date, ds.heureDebut, ds.heureFin, source?.id);
    });
  }
  hasHoraireCoverage(userId, date, start, end) {
    return this.horaires.some((horaire) => horaire.utilisateurId === userId && horaire.jours.includes(date) && horaire.heureDebut <= start && horaire.heureFin >= end);
  }
  hasSeanceConflict(userId, date, start, end, excludeSeanceId) {
    return this.seancesAdmin.some((seance) => seance.id !== excludeSeanceId && seance.responsableId === userId && this.displayToIsoDate(seance.date) === date && this.rangesOverlap(start, end, seance.heureDebut, seance.heureFin));
  }
  rangesOverlap(startA, endA, startB, endB) {
    return startA < endB && startB < endA;
  }
  pageEnd(page, total) {
    return Math.min(page * this.pageSize, total);
  }
  goToPage(pageKey, page, totalPages) {
    const safeTotal = Math.max(1, totalPages);
    this[pageKey] = Math.min(Math.max(1, page), safeTotal);
  }
  getPageNumbers(currentPage, totalPages) {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [1];
    if (currentPage > 3)
      pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++)
      pages.push(i);
    if (currentPage < totalPages - 2)
      pages.push("...");
    pages.push(totalPages);
    return pages;
  }
  paginateArray(items, pageKey) {
    const totalPages = this.getTotalPages(items.length);
    if (this[pageKey] > totalPages)
      this[pageKey] = totalPages;
    const start = (this[pageKey] - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }
  getTotalPages(totalItems) {
    return Math.max(1, Math.ceil(totalItems / this.pageSize));
  }
  normalizeAllPages() {
    this.staffPage = Math.min(this.staffPage, this.totalStaffPages);
    this.patientPage = Math.min(this.patientPage, this.totalPatientPages);
    this.horairePage = Math.min(this.horairePage, this.totalHorairePages);
    this.seancePage = Math.min(this.seancePage, this.totalSeancePages);
  }
  scrollAdminToTop() {
    this.adminMainRef?.nativeElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  confirmDeletion(message) {
    return window.confirm(message);
  }
  refreshAfterMutation() {
    this.refreshAdminCollections(false, true);
  }
  insertHoraires(createdHoraires) {
    this.horaires = this.sortHoraires([
      ...createdHoraires.map((horaire) => this.mapHoraireToRow(horaire)),
      ...this.horaires
    ]);
    this.normalizeAllPages();
  }
  replaceHoraireRows(sourceIds, createdHoraires) {
    this.horaires = this.sortHoraires([
      ...this.horaires.filter((horaire) => !sourceIds.includes(horaire.id)),
      ...createdHoraires.map((horaire) => this.mapHoraireToRow(horaire))
    ]);
    this.normalizeAllPages();
  }
  removeHoraireRows(ids) {
    this.horaires = this.horaires.filter((horaire) => !ids.includes(horaire.id));
    this.normalizeAllPages();
  }
  insertSeances(createdSeances) {
    this.seancesAdmin = this.sortSeances([
      ...createdSeances.map((seance) => this.mapSeanceToRow(seance)),
      ...this.seancesAdmin
    ]);
    this.normalizeAllPages();
  }
  replaceSeanceRows(updatedSeances, createdSeances, deletedIds) {
    const replacedIds = updatedSeances.map((seance) => seance.id);
    this.seancesAdmin = this.sortSeances([
      ...this.seancesAdmin.filter((seance) => !replacedIds.includes(seance.id) && !deletedIds.includes(seance.id)),
      ...updatedSeances.map((seance) => this.mapSeanceToRow(seance)),
      ...createdSeances.map((seance) => this.mapSeanceToRow(seance))
    ]);
    this.normalizeAllPages();
  }
  removeSeanceRows(ids) {
    this.seancesAdmin = this.seancesAdmin.filter((seance) => !ids.includes(seance.id));
    this.normalizeAllPages();
  }
  sortHoraires(horaires) {
    return [...horaires].sort((left, right) => {
      const dateDiff = (right.jours[0] ?? "").localeCompare(left.jours[0] ?? "");
      if (dateDiff !== 0)
        return dateDiff;
      const startDiff = right.heureDebut.localeCompare(left.heureDebut);
      if (startDiff !== 0)
        return startDiff;
      return left.staffNom.localeCompare(right.staffNom, "fr");
    });
  }
  sortSeances(seances) {
    return [...seances].sort((left, right) => {
      const dateDiff = this.displayToIsoDate(right.date).localeCompare(this.displayToIsoDate(left.date));
      if (dateDiff !== 0)
        return dateDiff;
      const startDiff = right.heureDebut.localeCompare(left.heureDebut);
      if (startDiff !== 0)
        return startDiff;
      return left.patientNom.localeCompare(right.patientNom, "fr");
    });
  }
  onNewSeanceAideSoignantChange() {
    if (this.newSeance.aideSoignantId) {
      const id = Number(this.newSeance.aideSoignantId);
      this.newSeance.datesSeances = this.newSeance.datesSeances.map((d) => __spreadProps(__spreadValues({}, d), { aideSoignantId: id }));
    }
    this.onNewSeanceScheduleChange();
  }
  onNewSeanceScheduleChange() {
    this.syncSelectedAideSoignant();
    this.syncSelectedAideSoignantsByDate();
    this.syncSelectedMachinesByDate();
    this.refreshAvailableMachinesForNewSeance();
  }
  onEditSeanceScheduleChange() {
    this.syncSelectedAideSoignantForEdit();
    this.refreshAvailableMachinesForEditSeance();
  }
  loadMachines() {
    this.machineService.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (machines) => {
        const codes = machines.map((machine) => machine.code).sort();
        this.allMachineCodes = codes;
        this.machines = [...codes];
        if (!this.newSeance.machine)
          this.newSeance.machine = codes[0] ?? "";
      },
      error: () => {
        this.allMachineCodes = [];
        this.machines = [];
        this.showToast("Erreur lors du chargement des machines", "error");
      }
    });
  }
  refreshAvailableMachinesForNewSeance() {
    const activeDate = this.getActiveNewSeanceDateEntry();
    if (!activeDate || !activeDate.heureDebut || !activeDate.heureFin) {
      this.machines = [...this.allMachineCodes];
      if (!this.machines.includes(this.newSeance.machine))
        this.newSeance.machine = this.machines[0] ?? "";
      return;
    }
    this.machineService.getAvailable(activeDate.date, activeDate.heureDebut, activeDate.heureFin).pipe(catchError(() => of([])), takeUntil(this.destroy$)).subscribe({
      next: (machineGroup) => {
        this.machines = machineGroup.map((machine) => machine.code).sort();
        if (!this.machines.includes(this.newSeance.machine))
          this.newSeance.machine = this.machines[0] ?? "";
        this.syncSelectedMachinesByDate();
      },
      error: () => {
        this.machines = [...this.allMachineCodes];
      }
    });
  }
  refreshAvailableMachinesForEditSeance() {
    if (!this.editSeance)
      return;
    const datesSeances = this.editSeance.datesSeances;
    if (!datesSeances.length) {
      this.machines = [...this.allMachineCodes];
      return;
    }
    forkJoin(datesSeances.map((ds) => {
      const source = this.editSeance.sourceSeances.find((s) => this.displayToIsoDate(s.date) === ds.date);
      return this.machineService.getAvailable(ds.date, ds.heureDebut, ds.heureFin, source?.id).pipe(catchError(() => of([])));
    })).pipe(takeUntil(this.destroy$)).subscribe({
      next: (machineGroups) => {
        this.machines = this.intersectMachineCodes(machineGroups);
        if (!this.machines.includes(this.editSeance.machine))
          this.editSeance.machine = this.machines[0] ?? "";
      },
      error: () => {
        this.machines = [...this.allMachineCodes];
      }
    });
  }
  intersectMachineCodes(machineGroups) {
    if (!machineGroups.length)
      return [...this.allMachineCodes];
    const [firstGroup, ...restGroups] = machineGroups;
    return firstGroup.map((machine) => machine.code).filter((code) => restGroups.every((group) => group.some((machine) => machine.code === code))).sort();
  }
  resetNewSeanceForm() {
    this.newSeance = { patientId: "", aideSoignantId: "", dates: [], datesSeances: [], heureDebut: "07:30", heureFin: "11:30", machine: this.allMachineCodes[0] ?? "" };
    this.newSeanceActiveDate = null;
    this.machines = [...this.allMachineCodes];
  }
  todayLocalIso() {
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UtilisateurService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(MachineService), \u0275\u0275directiveInject(HoraireTravailService), \u0275\u0275directiveInject(AdminSettingsService), \u0275\u0275directiveInject(RolePermissionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], viewQuery: function AdminComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.adminMainRef = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 25, consts: [["adminMain", ""], [1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "wz-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "light", "click", 4, "ngIf"], [1, "admin-shell"], [1, "sidebar-backdrop", 3, "click"], [1, "sidebar"], [1, "sidebar__logo"], ["width", "28", "height", "28", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "sidebar__nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "material-icons"], [1, "nav-badge"], [1, "sidebar__user"], [1, "user-avatar", 2, "background", "rgba(255,87,87,.12)", "border-color", "rgba(255,87,87,.3)", "color", "var(--c-red)"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "logout-btn", 3, "click"], [1, "admin-main"], [1, "topbar"], [1, "topbar__left"], [1, "topbar__right"], [1, "hamburger-btn", 3, "click"], ["class", "btn-sm-primary", 3, "click", 4, "ngIf"], [1, "icon-btn", 3, "click", "title"], [1, "icon-btn", 3, "click"], ["class", "kpi-row", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "toast-close"], [1, "wz-overlay", 3, "click"], [1, "wz-panel", 3, "click"], [1, "wz-head"], [1, "wz-head__icon"], [1, "wz-head__text"], [1, "wz-head__title"], [1, "wz-head__sub"], [1, "wz-close-btn", 3, "click"], [1, "wz-stepper"], [1, "wz-step"], [1, "wz-step__dot"], ["class", "material-icons", 4, "ngIf"], [1, "wz-step__label"], [1, "wz-step__line"], [1, "wz-body"], ["class", "wz-stage", 4, "ngIf"], [1, "wz-footer"], [1, "wz-footer__left"], ["class", "btn-outline-sm", 3, "click", 4, "ngIf"], [1, "wz-footer__center"], [1, "wz-step-counter"], [1, "wz-footer__right"], [1, "btn-sm-primary", 3, "click", "disabled"], [1, "wz-stage"], [1, "wz-hint"], [1, "wz-role-grid"], ["class", "wz-role-card", 3, "wz-role-card--selected", "click", 4, "ngFor", "ngForOf"], [1, "wz-role-card", 3, "click"], [1, "wz-role-card__accent"], [1, "wz-role-card__ico"], [1, "wz-role-card__body"], [1, "wz-role-card__name"], [1, "wz-role-card__desc"], ["class", "wz-role-card__check", 3, "color", 4, "ngIf"], [1, "wz-role-card__check"], ["class", "wz-role-badge", 3, "background", "border-color", "color", 4, "ngIf"], [1, "wz-role-badge"], [1, "wz-section-title"], [1, "wz-form-row"], [1, "wz-field"], [1, "req"], ["type", "text", "placeholder", "Nom de famille", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["type", "text", "placeholder", "Pr\xE9nom", 3, "ngModelChange", "ngModel"], [1, "wz-section-title", 2, "margin-top", "14px"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "wz-field", "wz-field--black"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Homme"], ["value", "Femme"], ["type", "text", "placeholder", "Ex: AB123456", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "0600000000", "inputmode", "numeric", "maxlength", "10", 3, "ngModelChange", "ngModel"], [1, "field-error"], [1, "wz-field", "wz-field--readonly"], ["type", "text", "disabled", "", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "prenom.nom@dialysys.dz", 3, "ngModelChange", "ngModel"], ["value", "H\xE9modialyse"], ["value", "Permanence"], ["value", "Laboratoire"], ["class", "wz-form-row", 4, "ngIf"], [1, "wz-field", "wz-field--full"], ["value", "N\xE9phrologie"], ["value", "G\xE9n\xE9raliste"], [1, "wz-auth-note"], [1, "wz-recap"], [1, "wz-recap__title"], [1, "wz-recap__grid"], [1, "wz-recap__item"], [1, "wz-recap__key"], [1, "wz-recap__val"], [1, "btn-outline-sm", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", "wizard-panel", "wizard-panel--lg", 3, "click"], [1, "wizard-header"], [1, "wizard-header__icon"], [2, "font-size", "17px", "font-weight", "700"], [1, "wizard-header__text"], [2, "margin-right", "8px"], [1, "modal-close-btn", 3, "click"], [1, "wizard-body", "wizard-body--form"], [1, "wizard-section-label"], [1, "form-grid"], [1, "form-field"], ["type", "text", 3, "ngModelChange", "ngModel"], ["type", "email", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "06 XX XX XX XX", 3, "ngModelChange", "ngModel"], [1, "form-field", "form-field--white"], [1, "wizard-section-label", 2, "margin-top", "16px"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "change", "ngModel"], ["value", "actif"], ["value", "inactif"], ["value", "suspendu"], ["type", "text", "disabled", "", 2, "opacity", ".6", 3, "value"], [1, "toggle-row"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "toggle-track"], [1, "toggle-label"], [1, "wizard-footer"], [1, "wizard-footer__danger"], [1, "btn-delete", 3, "click"], ["class", "btn-outline-sm btn-warn", 3, "click", 4, "ngIf"], [1, "wizard-footer__actions"], [1, "btn-sm-primary", 3, "click"], [3, "value"], [1, "btn-outline-sm", "btn-warn", 3, "click"], [1, "modal-panel", "wizard-panel", 3, "click"], [1, "wizard-header__icon", 2, "background", "rgba(48,209,88,.12)"], [1, "material-icons", 2, "color", "var(--c-green)", "font-size", "20px"], [1, "form-field", "form-field--black"], [1, "wizard-footer__selected"], [1, "material-icons", 2, "color", "var(--c-green)"], [1, "modal-panel", "modal-panel--new-user", 3, "click"], [1, "modal-header", "modal-header--simple"], [1, "material-icons", 2, "color", "var(--c-teal)", "font-size", "22px"], [1, "modal-body"], [1, "form-section-label"], ["type", "text", "placeholder", "Ex : INF-2025-060", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "prenom.nom@dialysys.ma", 3, "ngModelChange", "ngModel"], [1, "form-section-label", 2, "margin-top", "8px"], ["type", "text", "placeholder", "Ex : p.nom", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Auto-g\xE9n\xE9r\xE9 si vide", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "G\xE9n\xE9r\xE9 automatiquement si vide", "minlength", "8", 3, "ngModelChange", "ngModel"], [1, "form-field", "form-field--full"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], [1, "modal-panel", "modal-panel--settings", 3, "click"], [1, "settings-group"], [1, "settings-group-title"], [1, "settings-row"], [1, "settings-row__label"], [1, "form-field", 2, "margin", "0", "min-width", "120px"], [1, "form-field", 2, "margin", "0", "min-width", "130px"], ["value", "fr"], ["value", "ar"], ["value", "en"], ["value", "csv"], ["value", "xlsx"], ["value", "pdf"], [1, "modal-panel", "modal-panel--new-patient", 3, "click"], [1, "material-icons", 2, "color", "var(--c-green)", "font-size", "22px"], ["class", "modal-body", 4, "ngIf"], [1, "modal-panel", "modal-panel--edit-horaire", 3, "click"], [1, "horaire-form-layout"], [1, "horaire-form-left"], ["type", "time", 3, "ngModelChange", "ngModel"], ["class", "cal-selected-summary", 4, "ngIf"], [1, "horaire-form-right"], [1, "cal-inline"], [1, "cal-header"], [1, "cal-nav-btn", 3, "click"], [1, "cal-title"], [1, "cal-grid"], ["class", "cal-day-name", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "cal-selected-summary"], [1, "cal-clear-btn", 3, "click"], [1, "cal-day-name"], ["class", "cal-cell cal-cell--empty", 4, "ngIf"], ["type", "button", "class", "cal-cell", 3, "cal-cell--today", "cal-cell--selected", "click", 4, "ngIf"], [1, "cal-cell", "cal-cell--empty"], ["type", "button", 1, "cal-cell", 3, "click"], [1, "kpi-row"], [1, "kpi-card", "kpi-card--filter", "kpi-card--teal", 3, "click"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-lbl"], ["class", "kpi-filter-dot", 4, "ngIf"], [1, "kpi-card", "kpi-card--filter", "kpi-card--purple", 3, "click"], [1, "kpi-card", "kpi-card--filter", "kpi-card--blue", 3, "click"], [1, "kpi-card", "kpi-card--filter", "kpi-card--amber", 3, "click"], [1, "kpi-card", "kpi-card--filter", "kpi-card--green", 3, "click"], [1, "kpi-card", "kpi-card--filter", "kpi-card--cyan", 3, "click"], [1, "kpi-filter-dot"], [1, "panel", "panel--full"], [1, "panel__head"], ["class", "kpi-active-badge", 4, "ngIf"], [1, "panel__actions"], [1, "filter-select", 3, "ngModelChange", "ngModel"], [1, "panel__footer"], [1, "kpi-active-badge"], [1, "kpi-badge-clear", 3, "click"], [1, "table-search-bar"], ["type", "text", "placeholder", "Rechercher par nom, pr\xE9nom, matricule, email", 3, "ngModelChange", "ngModel"], ["class", "table-search-clear", 3, "click", 4, "ngIf"], [1, "table-scroll"], [1, "data-table"], ["class", "pagination-bar", 4, "ngIf"], [1, "table-search-clear", 3, "click"], [1, "user-cell"], [1, "avatar-role"], [1, "mono"], [1, "row-actions"], ["title", "Modifier", 1, "row-btn", 3, "click"], ["title", "Supprimer", 1, "row-btn", "row-btn--warn", 3, "click"], [1, "row-btn", 3, "click", "ngClass", "title"], ["colspan", "6", 1, "empty-row"], [1, "pagination-bar"], [1, "pg-rows-info"], [1, "pg-nav"], ["title", "Premi\xE8re page", 1, "pg-arrow", 3, "click", "disabled"], ["title", "Pr\xE9c\xE9dent", 1, "pg-arrow", 3, "click", "disabled"], [1, "pg-label"], ["title", "Suivant", 1, "pg-arrow", 3, "click", "disabled"], ["title", "Derni\xE8re page", 1, "pg-arrow", 3, "click", "disabled"], ["type", "text", "placeholder", "Rechercher un patient par nom, pr\xE9nom, ID ou groupe sanguin", 3, "ngModelChange", "ngModel"], [1, "pg-arrow", 3, "click", "disabled"], [1, "action-form-card"], [1, "action-form-title"], [1, "per-day-section-header"], [1, "per-day-hint"], [1, "form-row-inline"], ["class", "per-day-empty", 4, "ngIf"], [1, "action-form-footer"], ["type", "text", "placeholder", "Rechercher par patient, aide-soignant, date, machine\u2026", 3, "ngModelChange", "ngModel"], [2, "text-align", "center"], [1, "per-day-section-header", 2, "margin-top", "14px"], [1, "per-day-badge"], [1, "jour-horaire-list"], [1, "jour-horaire-row"], [1, "jour-horaire-date"], [1, "jour-horaire-times"], ["type", "time", 1, "time-input-sm", 3, "ngModelChange", "ngModel"], [1, "jour-horaire-sep"], [1, "time-input-sm", 2, "min-width", "140px", 3, "ngModelChange", "ngModel"], ["title", "Retirer cette date", 1, "jour-remove-btn", 3, "click"], [1, "per-day-empty"], [1, "horaire-chips-row", 2, "justify-content", "center"], ["class", "horaire-chip seance-chip", 4, "ngFor", "ngForOf"], ["title", "Supprimer tout", 1, "row-btn", "row-btn--warn", 3, "click"], [1, "horaire-chip", "seance-chip"], [1, "horaire-chip__date"], [1, "horaire-chip__time"], ["class", "seance-chip__machine", 4, "ngIf"], [2, "font-size", "10px", "padding", "1px 6px"], [1, "seance-chip__machine"], ["colspan", "4", 1, "empty-row"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AdminComponent_div_1_Template, 8, 5, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, AdminComponent_div_2_Template, 49, 39, "div", 3)(3, AdminComponent_div_3_Template, 115, 30, "div", 4)(4, AdminComponent_div_4_Template, 63, 6, "div", 4)(5, AdminComponent_div_5_Template, 96, 15, "div", 4)(6, AdminComponent_div_6_Template, 113, 13, "div", 4)(7, AdminComponent_div_7_Template, 11, 3, "div", 4)(8, AdminComponent_div_8_Template, 11, 3, "div", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
      \u0275\u0275listener("click", function AdminComponent_Template_div_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sidebarOpen = false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "aside", 7)(12, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 9);
      \u0275\u0275element(14, "path", 10)(15, "path", 11)(16, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "DialySys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "nav", 13)(20, "div", 14);
      \u0275\u0275text(21, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 15);
      \u0275\u0275listener("click", function AdminComponent_Template_a_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("profils"));
      });
      \u0275\u0275elementStart(23, "span", 16);
      \u0275\u0275text(24, "manage_accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Gestion des Profils");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 17);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "a", 15);
      \u0275\u0275listener("click", function AdminComponent_Template_a_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("seances"));
      });
      \u0275\u0275elementStart(30, "span", 16);
      \u0275\u0275text(31, "medical_services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "S\xE9ances Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 17);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 18)(37, "div", 19);
      \u0275\u0275text(38, "AD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 20)(40, "span", 21);
      \u0275\u0275text(41, "Administrateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 22);
      \u0275\u0275text(43, "Acc\xE8s total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "button", 23);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_44_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(45, "span", 16);
      \u0275\u0275text(46, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 24, 0)(49, "header", 25)(50, "div", 26)(51, "h1");
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 27)(54, "button", 28);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_54_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sidebarOpen = !ctx.sidebarOpen);
      });
      \u0275\u0275elementStart(55, "span", 16);
      \u0275\u0275text(56, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(57, AdminComponent_button_57_Template, 4, 1, "button", 29);
      \u0275\u0275elementStart(58, "button", 30);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_58_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleTheme());
      });
      \u0275\u0275elementStart(59, "span", 16);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "button", 31);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showSettingsModal = true);
      });
      \u0275\u0275elementStart(62, "span", 16);
      \u0275\u0275text(63, "settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(64, AdminComponent_div_64_Template, 60, 23, "div", 32)(65, AdminComponent_ng_container_65_Template, 24, 7, "ng-container", 33)(66, AdminComponent_ng_container_66_Template, 87, 20, "ng-container", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showWizardModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showUserModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNewPatientModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNewUserModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSettingsModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditPatientModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditSeanceModal);
      \u0275\u0275advance();
      \u0275\u0275classProp("light", ctx.isLight)("sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.activeTab === "profils");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalUsers);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "seances");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.seancesAdmin.length);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.activeTabTitle);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.activeTab === "profils");
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.isLight ? "Passer en mode sombre" : "Passer en mode clair");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isLight ? "dark_mode" : "light_mode");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeTab === "profils");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "profils");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "seances");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinLengthValidator, MaxLengthValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.admin-shell[_ngcontent-%COMP%] {\n  --c-surface-1: #06090F;\n  --c-surface-2: #0B111E;\n  --c-surface-3: #0F1729;\n  --c-border: rgba(0,217,196,.10);\n  --c-text-1: #E0EAF8;\n  --c-text-2: #7A8EAA;\n  --c-text-3: #3A4E66;\n  --c-teal: #00D9C4;\n  --c-teal-soft: rgba(0,217,196,.12);\n  --c-blue: #4EA8F8;\n  --c-blue-soft: rgba(78,168,248,.12);\n  --c-green: #30D158;\n  --c-amber: #F5A623;\n  --c-amber-soft: rgba(245,166,35,.12);\n  --c-red: #FF5757;\n  --c-purple: #A78BFA;\n  --c-purple-soft:rgba(167,139,250,.12);\n  --font: "Figtree", sans-serif;\n}\n.admin-shell.light[_ngcontent-%COMP%] {\n  --c-surface-1: #F0F4FA;\n  --c-surface-2: #FFFFFF;\n  --c-surface-3: #E8EEF8;\n  --c-border: rgba(0,0,0,.10);\n  --c-text-1: #0D1B2E;\n  --c-text-2: #4A5E78;\n  --c-text-3: #8A9BB0;\n  --c-teal: #009E8E;\n  --c-teal-soft: rgba(0,158,142,.10);\n  --c-blue: #2075CC;\n  --c-blue-soft: rgba(32,117,204,.10);\n  --c-green: #1A9E3F;\n  --c-amber: #C47D00;\n  --c-amber-soft: rgba(196,125,0,.10);\n  --c-red: #D93030;\n  --c-purple: #6D4FC2;\n  --c-purple-soft:rgba(109,79,194,.10);\n  --c-bg: #F0F4FA;\n  --c-surface: #FFFFFF;\n  --c-card: #FFFFFF;\n  --c-card-hi: #F4F6FA;\n  --c-border-hi: rgba(0,0,0,.15);\n  --c-text: #0D1B2E;\n}\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  background: var(--c-surface-1);\n  color: var(--c-text-1);\n  font-family: var(--font);\n  overflow: hidden;\n}\n.admin-shell[_ngcontent-%COMP%]    > .sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  pointer-events: none;\n}\n.admin-shell.sidebar-open[_ngcontent-%COMP%]    > .sidebar-backdrop[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  inset: 0;\n  z-index: 59;\n  background: rgba(0, 0, 0, 0.45);\n  pointer-events: auto;\n}\n.admin-shell[_ngcontent-%COMP%]    > .sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 60;\n}\n.admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n  pointer-events: auto !important;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 0 28px 28px;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 0 16px;\n  border-bottom: 1px solid var(--c-border);\n  margin-bottom: 20px;\n  gap: 16px;\n}\n.topbar__left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.topbar__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--c-text-1);\n}\n.topbar__date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.topbar__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.admin-shell.light[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);\n  padding: 14px 20px;\n}\n.admin-shell.light[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]   .topbar__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #111111 !important;\n  font-weight: 700;\n}\n.admin-shell.light[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]   .topbar__date[_ngcontent-%COMP%] {\n  color: #666666;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-border);\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.kpi-card--filter[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  transition:\n    transform 0.15s,\n    box-shadow 0.2s,\n    border-color 0.2s;\n}\n.kpi-card--filter[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  border-radius: 12px 12px 0 0;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.kpi-card--filter[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.kpi-card--filter[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.kpi-card--filter.kpi-card--active[_ngcontent-%COMP%] {\n  transform: translateY(-2px);\n}\n.kpi-card--filter.kpi-card--active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.kpi-card--filter.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.kpi-card--teal[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #00D9C4,\n      #00f0d8);\n}\n.kpi-card--teal[_ngcontent-%COMP%]:hover, \n.kpi-card--teal.kpi-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(0, 217, 196, 0.5);\n  box-shadow: 0 4px 20px rgba(0, 217, 196, 0.2), 0 0 0 1px rgba(0, 217, 196, 0.2);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 217, 196, 0.1) 0%,\n      var(--c-surface-2) 60%);\n}\n.kpi-card--teal.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #00D9C4;\n}\n.kpi-card--teal[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.12);\n}\n.kpi-card--teal[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00D9C4;\n}\n.kpi-card--teal[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00D9C4;\n}\n.kpi-card--purple[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #A78BFA,\n      #c4b0ff);\n}\n.kpi-card--purple[_ngcontent-%COMP%]:hover, \n.kpi-card--purple.kpi-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(167, 139, 250, 0.5);\n  box-shadow: 0 4px 20px rgba(167, 139, 250, 0.2), 0 0 0 1px rgba(167, 139, 250, 0.2);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(167, 139, 250, 0.1) 0%,\n      var(--c-surface-2) 60%);\n}\n.kpi-card--purple.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.kpi-card--purple[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.12);\n}\n.kpi-card--purple[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.kpi-card--purple[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.kpi-card--blue[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #4EA8F8,\n      #7dc4ff);\n}\n.kpi-card--blue[_ngcontent-%COMP%]:hover, \n.kpi-card--blue.kpi-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(78, 168, 248, 0.5);\n  box-shadow: 0 4px 20px rgba(78, 168, 248, 0.2), 0 0 0 1px rgba(78, 168, 248, 0.2);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(78, 168, 248, 0.1) 0%,\n      var(--c-surface-2) 60%);\n}\n.kpi-card--blue.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #4EA8F8;\n}\n.kpi-card--blue[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(78, 168, 248, 0.12);\n}\n.kpi-card--blue[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #4EA8F8;\n}\n.kpi-card--blue[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #4EA8F8;\n}\n.kpi-card--amber[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #F5A623,\n      #ffc857);\n}\n.kpi-card--amber[_ngcontent-%COMP%]:hover, \n.kpi-card--amber.kpi-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.5);\n  box-shadow: 0 4px 20px rgba(245, 166, 35, 0.2), 0 0 0 1px rgba(245, 166, 35, 0.2);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 166, 35, 0.1) 0%,\n      var(--c-surface-2) 60%);\n}\n.kpi-card--amber.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #F5A623;\n}\n.kpi-card--amber[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 166, 35, 0.12);\n}\n.kpi-card--amber[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #F5A623;\n}\n.kpi-card--amber[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #F5A623;\n}\n.kpi-card--green[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #30D158,\n      #5ee87a);\n}\n.kpi-card--green[_ngcontent-%COMP%]:hover, \n.kpi-card--green.kpi-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(48, 209, 88, 0.5);\n  box-shadow: 0 4px 20px rgba(48, 209, 88, 0.2), 0 0 0 1px rgba(48, 209, 88, 0.2);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(48, 209, 88, 0.1) 0%,\n      var(--c-surface-2) 60%);\n}\n.kpi-card--green.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #30D158;\n}\n.kpi-card--green[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(48, 209, 88, 0.12);\n}\n.kpi-card--green[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #30D158;\n}\n.kpi-card--green[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #30D158;\n}\n.kpi-card--cyan[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #22d3ee,\n      #67e8f9);\n}\n.kpi-card--cyan[_ngcontent-%COMP%]:hover, \n.kpi-card--cyan.kpi-card--active[_ngcontent-%COMP%] {\n  border-color: rgba(34, 211, 238, 0.5);\n  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.2), 0 0 0 1px rgba(34, 211, 238, 0.2);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 211, 238, 0.1) 0%,\n      var(--c-surface-2) 60%);\n}\n.kpi-card--cyan.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {\n  color: #22d3ee;\n}\n.kpi-card--cyan[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(34, 211, 238, 0.12);\n}\n.kpi-card--cyan[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #22d3ee;\n}\n.kpi-card--cyan[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #22d3ee;\n}\n.kpi-filter-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: block;\n}\n.kpi-active-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 10px;\n  padding: 3px 8px 3px 6px;\n  background: rgba(0, 217, 196, 0.08);\n  border: 1px solid rgba(0, 217, 196, 0.25);\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--c-teal);\n  vertical-align: middle;\n}\n.kpi-active-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.kpi-badge-clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--c-teal);\n  cursor: pointer;\n  opacity: 0.7;\n}\n.kpi-badge-clear[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.kpi-badge-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.kpi-trend.up[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n}\n.kpi-trend.down[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.1);\n  color: var(--c-red);\n}\n.tab-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  overflow: visible;\n}\n.panel--full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--c-border);\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.panel__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0;\n}\n.panel__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.panel__footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  font-size: 12px;\n  color: var(--c-text-3);\n  border-top: 1px solid var(--c-border);\n  background: var(--c-surface-1);\n}\n.panel__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  text-decoration: none;\n}\n.panel__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.search-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--c-surface-1);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 0 10px;\n  height: 34px;\n}\n.search-mini[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--c-text-3);\n}\n.search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--c-text-1);\n  font-size: 13px;\n  width: 200px;\n}\n.search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.filter-select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n  background: var(--c-surface-1);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-1);\n  font-size: 13px;\n  cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--c-teal);\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: auto;\n  max-height: 380px;\n  border-radius: 0 0 14px 14px;\n}\n.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--c-surface-1);\n}\n.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--c-border);\n  border-radius: 3px;\n}\n.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--c-teal);\n}\n.table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-scroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--c-surface-1);\n  box-shadow: 0 1px 0 var(--c-border);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--c-border);\n  background: var(--c-surface-1);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--c-border);\n  transition: background 0.15s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: var(--c-text-1);\n  vertical-align: middle;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.user-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.user-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.avatar-role[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.role-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px 3px 6px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.role-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.12);\n  color: var(--c-amber);\n}\n.badge.danger[_ngcontent-%COMP%], \n.badge.crit[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.12);\n  color: var(--c-red);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(41, 182, 246, 0.12);\n  color: var(--c-blue);\n}\n.badge.neutral[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--c-text-3);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.last-seen[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.row-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n  background: transparent;\n  color: var(--c-text-2);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.row-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.row-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-surface-1);\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.row-btn--warn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-amber);\n  color: var(--c-amber);\n}\n.row-btn--ok[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-green);\n  color: var(--c-green);\n}\n.roles-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 16px;\n  height: 100%;\n}\n.role-selector-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--c-surface-2);\n  border: 1.5px solid var(--c-border);\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.role-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.07);\n}\n.role-card.active[_ngcontent-%COMP%] {\n  border-color: var(--c-teal);\n  background: rgba(0, 217, 196, 0.05);\n  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.1);\n}\n.role-card__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.role-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.role-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.role-card__body[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.role-card__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.role-card__perm-count[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n}\n.role-card__perm-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-teal);\n}\n.role-card__perm-count[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n  font-style: normal;\n}\n.unsaved-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--c-amber);\n  animation: _ngcontent-%COMP%_pulse-dot 1.5s infinite;\n}\n.unsaved-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--c-amber);\n}\n.unsaved-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.7);\n  }\n}\n.perm-matrix-col[_ngcontent-%COMP%] {\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.perm-matrix-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--c-border);\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.perm-matrix-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px;\n}\n.perm-matrix-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n  margin: 0;\n}\n.perm-matrix-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.perm-categories[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.perm-category__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.perm-cat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.perm-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.perm-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.perm-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.05);\n  border-color: rgba(0, 217, 196, 0.15);\n}\n.perm-item--on[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.06);\n  border-color: rgba(0, 217, 196, 0.2);\n}\n.perm-item__text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.perm-item__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.perm-item__desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.perm-item__status[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  flex-shrink: 0;\n}\n.perm-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 10px;\n  background: var(--c-border);\n  border: 1.5px solid var(--c-border);\n  position: relative;\n  flex-shrink: 0;\n  transition: background 0.2s, border-color 0.2s;\n}\n.perm-toggle__thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--c-text-3);\n  transition: transform 0.2s, background 0.2s;\n}\n.perm-toggle.on[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.2);\n  border-color: var(--c-teal);\n}\n.perm-toggle.on[_ngcontent-%COMP%]   .perm-toggle__thumb[_ngcontent-%COMP%] {\n  transform: translateX(16px);\n  background: var(--c-teal);\n}\n.activity-timeline[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  display: block;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--c-border);\n  position: relative;\n}\n.activity-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.activity-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.activity-icon--success[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n}\n.activity-icon--warn[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.12);\n  color: var(--c-amber);\n}\n.activity-icon--error[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.12);\n  color: var(--c-red);\n}\n.activity-icon--info[_ngcontent-%COMP%] {\n  background: rgba(41, 182, 246, 0.12);\n  color: var(--c-blue);\n}\n.activity-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.activity-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n}\n.activity-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.activity-meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.pagination-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 10px 16px;\n  border-top: 1px solid var(--c-border);\n}\n.pg-rows-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n  white-space: nowrap;\n}\n.pg-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.pg-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2);\n  white-space: nowrap;\n  padding: 0 6px;\n  min-width: 52px;\n  text-align: center;\n}\n.pg-arrow[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  color: var(--c-text-2);\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.pg-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pg-arrow[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--c-surface-3, rgba(255, 255, 255, 0.07));\n  color: var(--c-text-1);\n}\n.pg-arrow[_ngcontent-%COMP%]:disabled {\n  opacity: 0.25;\n  cursor: default;\n}\n.btn-sm-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 14px;\n  background: var(--c-teal);\n  color: #0a0e14;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-sm-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-sm-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.85;\n}\n.btn-sm-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.btn-outline-sm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 12px;\n  background: transparent;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-2);\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline-sm[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.btn-warn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-red) !important;\n  color: var(--c-red) !important;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 12px;\n  background: rgba(255, 87, 87, 0.1);\n  border: 1px solid rgba(255, 87, 87, 0.3);\n  border-radius: 8px;\n  color: var(--c-red);\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-delete[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 87, 87, 0.2);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--c-text-2);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.role-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  border-radius: 8px;\n  margin: 0 8px;\n  transition: background 0.15s;\n  cursor: default;\n}\n.role-summary[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.05);\n}\n.role-summary__name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.role-summary__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  background: var(--c-surface-1);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 1px 8px;\n  color: var(--c-text-1);\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--c-teal);\n  color: #0a0e14;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 10px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding-top: 8px;\n  border-top: 1px solid var(--c-border);\n  margin-top: 16px;\n}\n.modal-panel--new-user[_ngcontent-%COMP%] {\n  max-width: 640px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--c-surface-1);\n  border-radius: 3px;\n}\n.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--c-border);\n  border-radius: 3px;\n}\n.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--c-teal);\n}\n.modal-panel--new-user[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.modal-panel--new-user[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: auto;\n}\n.modal-panel--new-patient[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.modal-panel--edit-sm[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n  .form-field--white select {\n  background: var(--c-surface, #ffffff) !important;\n  color: var(--c-text-1, #1a1a2e) !important;\n  border: 1px solid var(--c-border, #cbd5e1) !important;\n}\n  .form-field--white select option {\n  background: var(--c-surface, #ffffff) !important;\n  color: var(--c-text-1, #1a1a2e) !important;\n}\n.modal-panel--edit-horaire[_ngcontent-%COMP%] {\n  max-width: 820px;\n  width: 96vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-panel--edit-horaire[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.modal-panel--edit-horaire[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--c-surface-1);\n}\n.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--c-border);\n  border-radius: 3px;\n}\n.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--c-teal);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--c-border);\n}\n.form-section-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 38px;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-2);\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.toggle-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--c-surface);\n  border: 1.5px solid var(--c-border);\n  border-radius: 99px;\n  transition: background 0.2s, border-color 0.2s;\n}\n.toggle-track[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 14px;\n  height: 14px;\n  background: var(--c-text-3);\n  border-radius: 50%;\n  transition: transform 0.2s, background 0.2s;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.15);\n  border-color: var(--c-teal);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]::after {\n  transform: translateX(18px);\n  background: var(--c-teal);\n}\n@media (max-width: 1100px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .kpi-card[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 7px);\n    min-width: 0;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 0 16px 16px;\n  }\n  .roles-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 200px 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .admin-shell[_ngcontent-%COMP%] {\n    overflow: visible;\n    height: auto;\n    min-height: 100vh;\n    min-height: 100dvh;\n    flex-direction: column;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    left: auto;\n    bottom: auto;\n    z-index: 60;\n    transform: none !important;\n    transition: none;\n    width: 100% !important;\n    flex: 0 0 auto !important;\n    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);\n    height: auto;\n    display: grid;\n    grid-template-columns: auto minmax(0, 1fr) auto;\n    align-items: center;\n    gap: 8px;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar__logo[_ngcontent-%COMP%] {\n    padding: 10px 0 10px 12px;\n    border-bottom: 0;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar__logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar__nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    overflow-x: auto;\n    overflow-y: hidden;\n    gap: 8px;\n    padding: 10px 4px;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar__nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    min-height: 40px;\n    white-space: nowrap;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar__user[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px 8px 4px;\n    border-top: 0;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar__user[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%], \n   .admin-shell[_ngcontent-%COMP%]   .sidebar__user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    justify-content: center;\n    color: var(--c-red);\n    background: rgba(255, 87, 87, 0.12);\n    border: 1px solid rgba(255, 87, 87, 0.24);\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar-backdrop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    padding: 0 10px 10px;\n    width: 100%;\n    max-width: 100vw;\n    overflow-x: hidden;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: 12px 0;\n    gap: 8px;\n  }\n  .topbar__right[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .hamburger-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .kpi-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .kpi-card[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 4px);\n    min-width: 0;\n  }\n  .tabs-bar[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    flex-wrap: nowrap;\n    padding-bottom: 2px;\n    scrollbar-width: none;\n  }\n  .tabs-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    flex-shrink: 0;\n    font-size: 12px;\n    padding: 6px 12px;\n  }\n  .panel__head[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .panel__actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n  .table-scroll[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    max-width: 100%;\n  }\n  .roles-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .role-selector-col[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .role-card[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .role-card__desc[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .horaire-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .horaire-form-left[_ngcontent-%COMP%] {\n    min-width: 0 !important;\n  }\n  .cal-grid[_ngcontent-%COMP%] {\n    gap: 2px;\n  }\n  .cal-cell[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .horaire-chips-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .wz-overlay[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .wz-panel[_ngcontent-%COMP%] {\n    border-radius: 20px 20px 0 0;\n    max-height: 92vh;\n    max-height: 92dvh;\n    width: 100% !important;\n    max-width: 100% !important;\n    overflow-y: auto;\n  }\n  .wz-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n  }\n  .wz-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .wz-head[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    gap: 10px;\n  }\n  .wz-stepper[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    gap: 0;\n  }\n  .wz-step__label[_ngcontent-%COMP%] {\n    font-size: 9.5px;\n  }\n  .wz-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .wz-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 430px) {\n  .admin-shell[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .sidebar__logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    gap: 6px;\n  }\n  .admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .kpi-card[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .kpi-row[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .wz-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .role-selector-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--c-red);\n  margin-left: 2px;\n}\n.modal-panel--settings[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--c-surface-1);\n  border-radius: 3px;\n}\n.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--c-border);\n  border-radius: 3px;\n}\n.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--c-teal);\n}\n.modal-panel--settings[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.modal-panel--settings[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.settings-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--c-border);\n}\n.settings-group[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.settings-group-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n}\n.settings-group-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n}\n.settings-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 8px 0;\n}\n.settings-row__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.settings-row__label[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--c-text-1);\n}\n.settings-row__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.table-search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0 20px 14px;\n  padding: 10px 14px;\n  background: var(--c-surface-1);\n  border: 1.5px solid var(--c-teal);\n  border-radius: 10px;\n}\n.table-search-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n}\n.table-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: var(--c-text-1);\n}\n.table-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.horaire-date-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border-left: 1px solid var(--c-border);\n  padding-left: 12px;\n  flex-shrink: 0;\n}\n.horaire-date-filter[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--c-teal);\n}\n.horaire-date-filter[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 12.5px;\n  color: var(--c-text-1);\n  cursor: pointer;\n  font-family: var(--f-body);\n}\n.horaire-date-filter[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(0.6);\n  cursor: pointer;\n}\n.table-search-clear[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  color: var(--c-text-3);\n  border-radius: 50%;\n  transition: color 0.15s, background 0.15s;\n}\n.table-search-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.table-search-clear[_ngcontent-%COMP%]:hover {\n  color: var(--c-red);\n  background: rgba(255, 87, 87, 0.1);\n}\n.profil-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.profil-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--c-border);\n  background: var(--c-surface-2);\n  color: var(--c-text-2);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.profil-tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.profil-tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.profil-tab.active[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.1);\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n  font-weight: 600;\n}\n.profil-tab-count[_ngcontent-%COMP%] {\n  background: var(--c-surface-1);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 1px 7px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin-left: 2px;\n}\n.calendar-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--c-surface-1);\n  border: 1.5px solid var(--c-teal);\n  border-radius: 8px;\n  padding: 0 10px;\n  height: 38px;\n}\n.calendar-input[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n}\n.calendar-input[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 13px;\n  color: var(--c-text-1);\n  cursor: pointer;\n}\n.calendar-input[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(60%) sepia(80%) saturate(400%) hue-rotate(140deg);\n  cursor: pointer;\n}\n.horaire-form-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.horaire-form-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.horaire-form-right[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.cal-selected-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--c-teal);\n  background: rgba(0, 217, 196, 0.08);\n  border: 1px solid rgba(0, 217, 196, 0.2);\n  border-radius: 8px;\n  padding: 6px 10px;\n}\n.cal-selected-summary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.cal-clear-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding: 0;\n}\n.cal-clear-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cal-clear-btn[_ngcontent-%COMP%]:hover {\n  color: var(--c-red);\n}\n.cal-inline[_ngcontent-%COMP%] {\n  background: var(--c-surface-2);\n  border: 1.5px solid var(--c-border);\n  border-radius: 12px;\n  padding: 12px;\n  width: 280px;\n}\n.cal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cal-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.cal-nav-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--c-border);\n  border-radius: 6px;\n  color: var(--c-text-2);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 2px;\n  transition: all 0.15s;\n}\n.cal-nav-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cal-nav-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.cal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 3px;\n}\n.cal-day-name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-align: center;\n  padding: 4px 0;\n  text-transform: uppercase;\n}\n.cal-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  color: var(--c-text-2);\n  transition: all 0.12s;\n  -webkit-user-select: none;\n  user-select: none;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  line-height: 1;\n  padding: 0;\n}\n.cal-cell[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n}\n.cal-cell--empty[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n}\n.cal-cell--today[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--c-teal);\n  border: 1.5px solid rgba(0, 217, 196, 0.4);\n}\n.cal-cell--selected[_ngcontent-%COMP%] {\n  background: var(--c-teal) !important;\n  color: #0a0e14 !important;\n  font-weight: 700;\n}\n.action-form-card[_ngcontent-%COMP%] {\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n}\n.action-form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--c-text-1);\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--c-border);\n}\n.action-form-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.action-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.action-form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n  border-top: 1px solid var(--c-border);\n}\n.wizard-panel[_ngcontent-%COMP%] {\n  max-width: 580px;\n  width: 96vw;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  overflow: hidden;\n  border-radius: 16px;\n}\n.wizard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--c-border);\n  background: var(--c-surface-2);\n}\n.wizard-header__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--c-teal-soft);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wizard-header__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--c-teal);\n}\n.wizard-header__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wizard-header__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin: 0 0 2px;\n}\n.wizard-header__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n  margin: 0;\n}\n.wizard-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  background: var(--c-surface-1);\n}\n.wizard-role-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.wizard-role-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  border: 1.5px solid var(--c-border);\n  background: var(--c-surface-2);\n  cursor: pointer;\n  overflow: hidden;\n  transition:\n    border-color 0.18s,\n    background 0.18s,\n    transform 0.15s;\n}\n.wizard-role-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 217, 196, 0.4);\n  background: var(--c-surface-2);\n  transform: translateY(-1px);\n}\n.wizard-role-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--c-teal);\n  background: color-mix(in srgb, var(--c-teal) 6%, var(--c-surface-2));\n  transform: translateY(-1px);\n}\n.wizard-role-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  border: 1px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wizard-role-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.wizard-role-card__content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.wizard-role-card__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wizard-role-card__desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  line-height: 1.4;\n  display: -webkit-box;\n  line-clamp: 2;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.wizard-role-card__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--c-teal);\n}\n.wizard-role-card__check[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.wizard-role-card__border[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 12px 0 0 12px;\n}\n.wizard-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--c-border);\n  background: var(--c-surface-2);\n}\n.wizard-footer__selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.wizard-footer__selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.wizard-footer__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.wizard-panel--lg[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.wizard-body--form[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  background: var(--c-surface-1);\n  overflow-y: auto;\n  max-height: 60vh;\n}\n.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--c-surface-1);\n}\n.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--c-border);\n  border-radius: 3px;\n}\n.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--c-teal);\n}\n.wizard-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--c-border);\n}\n.wizard-section-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-teal);\n}\n.wizard-footer__danger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.wz-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.wz-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 620px;\n  background: var(--c-surface-1);\n  border: 1px solid var(--c-border);\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n  max-height: 92vh;\n}\n.wz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 22px 24px 18px;\n  border-bottom: 1px solid var(--c-border);\n  background: var(--c-surface-2);\n  flex-shrink: 0;\n}\n.wz-head__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  border: 1.5px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.2s, border-color 0.2s;\n}\n.wz-head__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.wz-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wz-head__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin: 0 0 3px;\n}\n.wz-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n  margin: 0;\n}\n.wz-close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--c-text-3);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.wz-close-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.wz-close-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-red);\n  color: var(--c-red);\n}\n.wz-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 28px;\n  background: var(--c-surface-2);\n  border-bottom: 1px solid var(--c-border);\n  flex-shrink: 0;\n}\n.wz-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n.wz-step__dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid var(--c-border);\n  background: var(--c-surface-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  transition: all 0.25s;\n}\n.wz-step__dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.wz-step__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n  transition: color 0.25s;\n}\n.wz-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: var(--c-border);\n  margin: 0 8px;\n  margin-bottom: 18px;\n  border-radius: 2px;\n  transition: background 0.25s;\n}\n.wz-step__line--done[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n}\n.wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  border-color: var(--c-teal);\n  background: rgba(0, 217, 196, 0.15);\n  color: var(--c-teal);\n}\n.wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  border-color: var(--c-teal);\n  background: var(--c-teal);\n  color: #0a0e14;\n}\n.wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.wz-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 22px 24px;\n  display: block;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--c-surface-1);\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--c-border);\n  border-radius: 3px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--c-teal);\n}\n.wz-stage[_ngcontent-%COMP%] {\n  width: 100%;\n  animation: _ngcontent-%COMP%_wzFadeIn 0.18s ease;\n}\n@keyframes _ngcontent-%COMP%_wzFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.wz-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--c-text-3);\n  background: rgba(0, 217, 196, 0.05);\n  border: 1px solid rgba(0, 217, 196, 0.15);\n  border-radius: 8px;\n  padding: 10px 12px;\n  margin-bottom: 16px;\n}\n.wz-hint[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-role-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.wz-role-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px 14px 20px;\n  border-radius: 12px;\n  border: 1.5px solid var(--c-border);\n  background: var(--c-surface-2);\n  cursor: pointer;\n  overflow: hidden;\n  transition:\n    border-color 0.18s,\n    background 0.18s,\n    transform 0.15s,\n    box-shadow 0.18s;\n}\n.wz-role-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 217, 196, 0.4);\n  background: rgba(0, 217, 196, 0.03);\n  transform: translateX(2px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);\n}\n.wz-role-card--selected[_ngcontent-%COMP%] {\n  border-color: var(--c-teal);\n  background: rgba(0, 217, 196, 0.06);\n  transform: translateX(3px);\n  box-shadow: 0 4px 20px rgba(0, 217, 196, 0.1);\n}\n.wz-role-card__accent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 12px 0 0 12px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.wz-role-card--selected[_ngcontent-%COMP%]   .wz-role-card__accent[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.wz-role-card__ico[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 11px;\n  border: 1.5px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-role-card__ico[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.wz-role-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.wz-role-card__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.wz-role-card__desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  line-height: 1.4;\n}\n.wz-role-card__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.wz-role-card__check[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wz-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  border: 1px solid;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 18px;\n}\n.wz-role-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.wz-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--c-border);\n}\n.wz-section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-teal);\n}\n.wz-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n@media (max-width: 500px) {\n  .wz-form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.wz-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.horaire-chips-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  align-items: center;\n}\n.horaire-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(0, 217, 196, 0.08);\n  border: 1px solid rgba(0, 217, 196, 0.25);\n  border-radius: 20px;\n  padding: 4px 10px;\n  white-space: nowrap;\n}\n.horaire-chip__date[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--c-teal);\n  font-family: monospace;\n}\n.horaire-chip__time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-2);\n  font-family: monospace;\n}\n.seance-chip__machine[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--c-text-3);\n  font-family: monospace;\n}\n.jour-horaire-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: 8px;\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 4px 2px;\n}\n.admin-shell[_ngcontent-%COMP%]:not(.light)   .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.admin-shell[_ngcontent-%COMP%]:not(.light)   .table-scroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.admin-shell.light[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.admin-shell.light[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n.jour-horaire-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(78px, 0.7fr) auto minmax(190px, 1.2fr) minmax(130px, 0.8fr) 30px;\n  align-items: center;\n  gap: 8px;\n  background: var(--c-surface-2, rgba(255, 255, 255, 0.04));\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 12px;\n  min-width: 100%;\n}\n.jour-horaire-date[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  color: var(--c-teal);\n  min-width: 76px;\n  font-weight: 600;\n}\n.jour-horaire-sep[_ngcontent-%COMP%] {\n  color: var(--c-text-3);\n  font-size: 12px;\n}\n.time-input-sm[_ngcontent-%COMP%] {\n  width: 90px;\n  padding: 4px 6px;\n  font-size: 12px;\n  border: 1px solid var(--c-border);\n  border-radius: 6px;\n  background: var(--c-surface);\n  color: var(--c-text);\n}\n.jour-horaire-row[_ngcontent-%COMP%]   select.time-input-sm[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0 !important;\n}\n.jour-horaire-times[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n.form-row-inline[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.wz-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 12px;\n  background: var(--c-surface-1);\n  border: 1.5px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-1);\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n}\n.wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #ffffff !important;\n  background: #000000 !important;\n}\n.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #000000;\n}\n.wz-field--center[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  padding-bottom: 2px;\n}\n.wz-field--error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.wz-field--error[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: var(--c-red) !important;\n  box-shadow: 0 0 0 3px rgba(255, 87, 87, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  color: var(--c-red) !important;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.wz-field--readonly[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.78;\n  cursor: not-allowed;\n}\n.wz-auth-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  border: 1px solid rgba(0, 217, 196, 0.22);\n  background: rgba(0, 217, 196, 0.08);\n  border-radius: 8px;\n  padding: 14px;\n  color: var(--c-text-1);\n  margin-bottom: 16px;\n}\n.wz-auth-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  font-size: 22px;\n}\n.wz-auth-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n.wz-auth-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-text-2);\n  font-size: 12px;\n  line-height: 1.45;\n}\n.wz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 38px;\n}\n.wz-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.wz-recap[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.wz-recap__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--c-border);\n  background: var(--c-surface-1);\n}\n.wz-recap__title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-teal);\n}\n.wz-recap__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n  padding: 4px 0;\n}\n.wz-recap__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.wz-recap__item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  border-bottom: none;\n}\n.wz-recap__key[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.wz-recap__val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--c-text-1);\n}\n.wz-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--c-border);\n  background: var(--c-surface-2);\n  flex-shrink: 0;\n}\n.wz-footer__left[_ngcontent-%COMP%], \n.wz-footer__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.wz-footer__center[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.wz-step-counter[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--c-text-3);\n  background: var(--c-surface-1);\n  border: 1px solid var(--c-border);\n  border-radius: 20px;\n  padding: 3px 12px;\n}\n.admin-shell.light[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  background: rgba(100, 120, 150, 0.45);\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #d6deea !important;\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22) !important;\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], \n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header--simple[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-bottom: 1px solid #d6deea !important;\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header--simple[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header--simple[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #14b8a6;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-top-color: #d6deea !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-panel[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #d6deea !important;\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22) !important;\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-bottom: 1px solid #d6deea !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .wizard-header__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .wizard-header__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-body[_ngcontent-%COMP%], \n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-body--form[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-section-label[_ngcontent-%COMP%] {\n  color: #334155 !important;\n  border-bottom-color: #d6deea !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-footer[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-top: 1px solid #d6deea !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-footer[_ngcontent-%COMP%]   .wizard-footer__selected[_ngcontent-%COMP%] {\n  color: #475569 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-stepper[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-bottom: 1px solid #d6deea !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-step[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #64748b !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-step[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-step[_ngcontent-%COMP%]   .wz-step__line[_ngcontent-%COMP%] {\n  background: #cbd5e1 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  border-color: #14b8a6 !important;\n  background: #ccfbf1 !important;\n  color: #0f766e !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {\n  color: #0f766e !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  background: #14b8a6 !important;\n  border-color: #14b8a6 !important;\n  color: #ffffff !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {\n  color: #0f766e !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-body[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-stage[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wz-section-title[_ngcontent-%COMP%] {\n  color: #334155 !important;\n  border-bottom-color: #d6deea !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #d6deea !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #14b8a6 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card.selected[_ngcontent-%COMP%] {\n  background: #f0fdfa !important;\n  border-color: #14b8a6 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%]   .wizard-role-card__name[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%]   .wizard-role-card__desc[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.modal-overlay.light[_ngcontent-%COMP%]   .settings-row__label[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #334155 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .settings-row__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.modal-overlay.light[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .settings-group[_ngcontent-%COMP%] {\n  border-bottom-color: #e2e8f0 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .settings-group-title[_ngcontent-%COMP%] {\n  color: #475569 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .settings-group-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #14b8a6 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .settings-row[_ngcontent-%COMP%] {\n  border-color: #e2e8f0 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #64748b !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: #fef2f2 !important;\n  border-color: #ef4444 !important;\n  color: #dc2626 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.modal-overlay.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #111827 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.modal-overlay.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #000000 !important;\n  border-color: #cbd5e1 !important;\n  color: #ffffff !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #000000 !important;\n  color: #ffffff !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #14b8a6 !important;\n  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.14);\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #111111 !important;\n  border-color: #cbd5e1 !important;\n  color-scheme: light !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #111111 !important;\n}\n.modal-overlay[_ngcontent-%COMP%]:not(.light)   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #1e2535 !important;\n  color: #e2e8f0 !important;\n  border: 1px solid #2d3748 !important;\n  color-scheme: dark !important;\n}\n.modal-overlay[_ngcontent-%COMP%]:not(.light)   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1e2535 !important;\n  color: #e2e8f0 !important;\n}\n.modal-overlay.light[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #334155 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-overlay[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-overlay[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.28) !important;\n  backdrop-filter: blur(3px);\n}\n.theme-light[_nghost-%COMP%]   .wz-panel[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-panel[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #d6deea !important;\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22) !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-head[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-head[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-stepper[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-stepper[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-footer[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-footer[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #d6deea !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-body[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-body[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-stage[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-stage[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-head__title[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-head__title[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-role-card__name[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card__name[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-recap__val[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__val[_ngcontent-%COMP%] {\n  color: #111827 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-head__sub[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-head__sub[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-role-card__desc[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card__desc[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-step__label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__label[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-recap__key[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__key[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-toggle-label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-toggle-label[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-hint[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-hint[_ngcontent-%COMP%] {\n  background: #ecfeff !important;\n  border-color: #99f6e4 !important;\n  color: #334155 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-recap[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #d6deea !important;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n}\n.theme-light[_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%]:hover, .theme-light   [_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #14b8a6 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-role-card--selected[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card--selected[_ngcontent-%COMP%] {\n  background: #f0fdfa !important;\n  border-color: #14b8a6 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-section-title[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-section-title[_ngcontent-%COMP%] {\n  color: #334155 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #111827 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #14b8a6 !important;\n  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.14);\n}\n.theme-light[_nghost-%COMP%]   .wz-step__dot[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #64748b !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-step__line[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__line[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-step__line--done[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__line--done[_ngcontent-%COMP%] {\n  background: #cbd5e1 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  background: #ccfbf1 !important;\n  border-color: #14b8a6 !important;\n  color: #0f766e !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%], \n.theme-light[_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {\n  color: #0f766e !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {\n  background: #14b8a6 !important;\n  border-color: #14b8a6 !important;\n  color: #ffffff !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-recap__title[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__title[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  border-color: #d6deea !important;\n  color: #475569 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-recap__item[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__item[_ngcontent-%COMP%] {\n  border-color: #e2e8f0 !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #cbd5e1 !important;\n  color: #64748b !important;\n}\n.theme-light[_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%]:hover, .theme-light   [_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%]:hover {\n  background: #fef2f2 !important;\n  border-color: #ef4444 !important;\n  color: #dc2626 !important;\n}\n/*# sourceMappingURL=admin.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "app\\pages\\admin\\admin.component.ts", lineNumber: 107 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-HXFML3Y6.js.map
