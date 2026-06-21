import {
  SeanceService
} from "./chunk-U5D5UQBA.js";
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
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-I57MQ5R6.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  Router
} from "./chunk-EH4I5CFZ.js";
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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
} from "./chunk-NP5N7FWI.js";

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
    return this.http.post(`${this.api}/utilisateurs`, payload);
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

// src/services/audit.service.ts
var AuditService = class _AuditService {
  KEY = "dsys_audit";
  seq = Date.now();
  log(utilisateur, role, action, entite, details, statut = "success") {
    const entries = this.getAll();
    entries.unshift({
      id: ++this.seq,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      utilisateur,
      role,
      action,
      entite,
      details,
      statut
    });
    try {
      localStorage.setItem(this.KEY, JSON.stringify(entries.slice(0, 500)));
    } catch {
    }
  }
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) ?? "[]");
    } catch {
      return [];
    }
  }
  clear() {
    localStorage.removeItem(this.KEY);
  }
  static \u0275fac = function AuditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
};

// src/app/pages/admin/admin.component.ts
var _c0 = ["adminMain"];
var _c1 = () => [1, 2, 3, 4, 5, 6, 0];
function AdminComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
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
    \u0275\u0275elementStart(5, "button", 37)(6, "span", 16);
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
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "span");
    \u0275\u0275text(5, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 50);
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
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 16);
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
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function AdminComponent_div_2_section_35_div_6_Template_div_click_0_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.wizardRole = role_r7.id;
      return \u0275\u0275resetView(ctx_r3.onWizardRoleChange());
    });
    \u0275\u0275element(1, "div", 66);
    \u0275\u0275elementStart(2, "div", 67)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 68)(6, "span", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 70);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminComponent_div_2_section_35_div_6_div_10_Template, 3, 2, "div", 71);
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
    \u0275\u0275elementStart(0, "section", 61)(1, "p", 62)(2, "span", 16);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " S\xE9lectionnez le type de profil \xE0 cr\xE9er. Ce choix d\xE9finira les permissions et les informations demand\xE9es. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275template(6, AdminComponent_div_2_section_35_div_6_Template, 11, 14, "div", 64);
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
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 16);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(1, "div", 75)(2, "span", 16);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 76)(6, "div", 77)(7, "label");
    \u0275\u0275text(8, "Nom ");
    \u0275\u0275elementStart(9, "span", 78);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 79);
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
    \u0275\u0275template(12, AdminComponent_div_2_section_36_ng_container_2_small_12_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 77)(14, "label");
    \u0275\u0275text(15, "Pr\xE9nom ");
    \u0275\u0275elementStart(16, "span", 78);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 81);
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
    \u0275\u0275template(19, AdminComponent_div_2_section_36_ng_container_2_small_19_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 82)(21, "span", 16);
    \u0275\u0275text(22, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Donn\xE9es m\xE9dicales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 76)(25, "div", 77)(26, "label");
    \u0275\u0275text(27, "Date de naissance ");
    \u0275\u0275elementStart(28, "span", 78);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 83);
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
    \u0275\u0275template(31, AdminComponent_div_2_section_36_ng_container_2_small_31_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 84)(33, "label");
    \u0275\u0275text(34, "Genre ");
    \u0275\u0275elementStart(35, "span", 78);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "select", 85);
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
    \u0275\u0275elementStart(38, "option", 86);
    \u0275\u0275text(39, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 87);
    \u0275\u0275text(41, "Homme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 88);
    \u0275\u0275text(43, "Femme");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, AdminComponent_div_2_section_36_ng_container_2_small_44_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 76)(46, "div", 77)(47, "label");
    \u0275\u0275text(48, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 89);
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
    \u0275\u0275template(50, AdminComponent_div_2_section_36_ng_container_2_small_50_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 77)(52, "label");
    \u0275\u0275text(53, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 90);
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
    \u0275\u0275template(55, AdminComponent_div_2_section_36_ng_container_2_small_55_Template, 2, 1, "small", 80);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "small", 91);
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
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 99)(2, "label");
    \u0275\u0275text(3, "Sp\xE9cialit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 85);
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
    \u0275\u0275elementStart(5, "option", 100);
    \u0275\u0275text(6, "N\xE9phrologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 101);
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
    \u0275\u0275elementStart(1, "div", 75)(2, "span", 16);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 76)(6, "div", 77)(7, "label");
    \u0275\u0275text(8, "Nom ");
    \u0275\u0275elementStart(9, "span", 78);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 79);
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
    \u0275\u0275template(12, AdminComponent_div_2_section_36_ng_container_3_small_12_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 77)(14, "label");
    \u0275\u0275text(15, "Pr\xE9nom ");
    \u0275\u0275elementStart(16, "span", 78);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 81);
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
    \u0275\u0275template(19, AdminComponent_div_2_section_36_ng_container_3_small_19_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 76)(21, "div", 92)(22, "label");
    \u0275\u0275text(23, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.mat, $event) || (ctx_r3.wizardData.mat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 77)(26, "label");
    \u0275\u0275text(27, "Email professionnel ");
    \u0275\u0275elementStart(28, "span", 78);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 94);
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
    \u0275\u0275template(31, AdminComponent_div_2_section_36_ng_container_3_small_31_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 82)(33, "span", 16);
    \u0275\u0275text(34, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Poste & Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 76)(37, "div", 77)(38, "label");
    \u0275\u0275text(39, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 90);
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
    \u0275\u0275template(41, AdminComponent_div_2_section_36_ng_container_3_small_41_Template, 2, 1, "small", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 77)(43, "label");
    \u0275\u0275text(44, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_2_section_36_ng_container_3_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.wizardData.service, $event) || (ctx_r3.wizardData.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(46, "option", 95);
    \u0275\u0275text(47, "H\xE9modialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 96);
    \u0275\u0275text(49, "Permanence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 97);
    \u0275\u0275text(51, "Laboratoire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(52, AdminComponent_div_2_section_36_ng_container_3_div_52_Template, 9, 1, "div", 98);
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
    \u0275\u0275elementStart(0, "section", 61);
    \u0275\u0275template(1, AdminComponent_div_2_section_36_div_1_Template, 4, 8, "div", 73)(2, AdminComponent_div_2_section_36_ng_container_2_Template, 56, 24, "ng-container", 35)(3, AdminComponent_div_2_section_36_ng_container_3_Template, 53, 19, "ng-container", 35);
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
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 16);
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
    \u0275\u0275elementStart(0, "section", 61);
    \u0275\u0275template(1, AdminComponent_div_2_section_37_div_1_Template, 4, 10, "div", 73);
    \u0275\u0275elementStart(2, "div", 75)(3, "span", 16);
    \u0275\u0275text(4, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Identifiants de connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 102)(7, "span", 16);
    \u0275\u0275text(8, "mark_email_read");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "strong");
    \u0275\u0275text(11, "Le login et le mot de passe temporaire seront g\xE9n\xE9r\xE9s automatiquement.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 103)(13, "div", 104)(14, "span", 16);
    \u0275\u0275text(15, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " R\xE9capitulatif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 105)(18, "div", 106)(19, "span", 107);
    \u0275\u0275text(20, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 108);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 106)(24, "span", 107);
    \u0275\u0275text(25, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 108);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 106)(29, "span", 107);
    \u0275\u0275text(30, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 108);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 106)(34, "span", 107);
    \u0275\u0275text(35, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 108);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 106)(39, "span", 107);
    \u0275\u0275text(40, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 108);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 106)(44, "span", 107);
    \u0275\u0275text(45, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 108);
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
    \u0275\u0275elementStart(0, "button", 109);
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
    \u0275\u0275elementStart(0, "button", 109);
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
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.wizardCancel());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "div", 41)(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "h2", 43);
    \u0275\u0275template(8, AdminComponent_div_2_ng_container_8_Template, 2, 0, "ng-container", 35)(9, AdminComponent_div_2_ng_container_9_Template, 2, 0, "ng-container", 35)(10, AdminComponent_div_2_ng_container_10_Template, 2, 0, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 44);
    \u0275\u0275template(12, AdminComponent_div_2_ng_container_12_Template, 2, 0, "ng-container", 35)(13, AdminComponent_div_2_ng_container_13_Template, 2, 0, "ng-container", 35)(14, AdminComponent_div_2_ng_container_14_Template, 2, 1, "ng-container", 35)(15, AdminComponent_div_2_ng_container_15_Template, 2, 0, "ng-container", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 45);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.wizardCancel());
    });
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 46)(20, "div", 47)(21, "div", 48);
    \u0275\u0275template(22, AdminComponent_div_2_span_22_Template, 2, 0, "span", 49)(23, AdminComponent_div_2_span_23_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 50);
    \u0275\u0275text(25, "R\xF4le");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "div", 51);
    \u0275\u0275elementStart(27, "div", 47)(28, "div", 48);
    \u0275\u0275template(29, AdminComponent_div_2_span_29_Template, 2, 0, "span", 49)(30, AdminComponent_div_2_span_30_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 50);
    \u0275\u0275text(32, "Informations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, AdminComponent_div_2_ng_container_33_Template, 8, 4, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 52);
    \u0275\u0275template(35, AdminComponent_div_2_section_35_Template, 7, 1, "section", 53)(36, AdminComponent_div_2_section_36_Template, 4, 3, "section", 53)(37, AdminComponent_div_2_section_37_Template, 48, 7, "section", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 54)(39, "div", 55);
    \u0275\u0275template(40, AdminComponent_div_2_button_40_Template, 2, 0, "button", 56)(41, AdminComponent_div_2_button_41_Template, 4, 0, "button", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 57)(43, "span", 58);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 59)(46, "button", 60);
    \u0275\u0275listener("click", function AdminComponent_div_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.wizardNext());
    });
    \u0275\u0275template(47, AdminComponent_div_2_ng_container_47_Template, 4, 0, "ng-container", 35)(48, AdminComponent_div_2_ng_container_48_Template, 4, 1, "ng-container", 35);
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
function AdminComponent_div_3_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 99)(2, "label");
    \u0275\u0275text(3, "Sp\xE9cialit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_div_64_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.specialite, $event) || (ctx_r3.selectedUser.specialite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 100);
    \u0275\u0275text(6, "N\xE9phrologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 101);
    \u0275\u0275text(8, "G\xE9n\xE9raliste");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.specialite);
  }
}
function AdminComponent_div_3_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    \u0275\u0275property("value", r_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r15.label);
  }
}
function AdminComponent_div_3_button_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 137);
    \u0275\u0275listener("click", function AdminComponent_div_3_button_101_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
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
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeUserModal());
    });
    \u0275\u0275elementStart(1, "div", 111);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 112)(3, "div", 113)(4, "span", 114);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 116);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 117);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeUserModal());
    });
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 118)(17, "div", 75)(18, "span", 16);
    \u0275\u0275text(19, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 76)(22, "div", 77)(23, "label");
    \u0275\u0275text(24, "Nom ");
    \u0275\u0275elementStart(25, "span", 78);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.nom, $event) || (ctx_r3.selectedUser.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 77)(29, "label");
    \u0275\u0275text(30, "Pr\xE9nom ");
    \u0275\u0275elementStart(31, "span", 78);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.prenom, $event) || (ctx_r3.selectedUser.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 76)(35, "div", 92)(36, "label");
    \u0275\u0275text(37, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.mat, $event) || (ctx_r3.selectedUser.mat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 77)(40, "label");
    \u0275\u0275text(41, "Email professionnel ");
    \u0275\u0275elementStart(42, "span", 78);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.email, $event) || (ctx_r3.selectedUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 82)(46, "span", 16);
    \u0275\u0275text(47, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Poste & Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 76)(50, "div", 77)(51, "label");
    \u0275\u0275text(52, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.telephone, $event) || (ctx_r3.selectedUser.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 77)(55, "label");
    \u0275\u0275text(56, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_select_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.service, $event) || (ctx_r3.selectedUser.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(58, "option", 95);
    \u0275\u0275text(59, "H\xE9modialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 96);
    \u0275\u0275text(61, "Permanence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 97);
    \u0275\u0275text(63, "Laboratoire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(64, AdminComponent_div_3_div_64_Template, 9, 1, "div", 98);
    \u0275\u0275elementStart(65, "div", 76)(66, "div", 77)(67, "label");
    \u0275\u0275text(68, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_select_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.role, $event) || (ctx_r3.selectedUser.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(70, AdminComponent_div_3_option_70_Template, 2, 2, "option", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 77)(72, "label");
    \u0275\u0275text(73, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "select", 120);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_select_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.statut, $event) || (ctx_r3.selectedUser.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminComponent_div_3_Template_select_change_74_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedUser.actif = ctx_r3.selectedUser.statut === "actif");
    });
    \u0275\u0275elementStart(75, "option", 121);
    \u0275\u0275text(76, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "option", 122);
    \u0275\u0275text(78, "Inactif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "option", 123);
    \u0275\u0275text(80, "Suspendu");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "div", 76)(82, "div", 92)(83, "label");
    \u0275\u0275text(84, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 77)(87, "label");
    \u0275\u0275text(88, "Compte actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 125)(90, "label", 126)(91, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_3_Template_input_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedUser.actif, $event) || (ctx_r3.selectedUser.actif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminComponent_div_3_Template_input_change_91_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedUser.statut = ctx_r3.selectedUser.actif ? "actif" : "inactif");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "span", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 129);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(95, "div", 130)(96, "div", 131)(97, "button", 132);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteUser(ctx_r3.selectedUser));
    });
    \u0275\u0275elementStart(98, "span", 16);
    \u0275\u0275text(99, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, " Supprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275template(101, AdminComponent_div_3_button_101_Template, 4, 0, "button", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 134)(103, "button", 109);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.resetPassword(ctx_r3.selectedUser));
    });
    \u0275\u0275elementStart(104, "span", 16);
    \u0275\u0275text(105, "lock_reset");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, " R\xE9initialiser MDP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "button", 109);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeUserModal());
    });
    \u0275\u0275text(108, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_div_3_Template_button_click_109_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveUser());
    });
    \u0275\u0275elementStart(110, "span", 16);
    \u0275\u0275text(111, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, " Enregistrer");
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
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.mat);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.email);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.telephone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.service);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.selectedUser.role === "medecin");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.role);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.staffRoleOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedUser.statut);
    \u0275\u0275advance(11);
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
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewPatientModal = false);
    });
    \u0275\u0275elementStart(1, "div", 138);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 112)(3, "div", 139)(4, "span", 140);
    \u0275\u0275text(5, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115)(7, "h2");
    \u0275\u0275text(8, "Nouveau patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Renseignez les informations du patient");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 117);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewPatientModal = false);
    });
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 118)(15, "div", 141)(16, "span", 16);
    \u0275\u0275text(17, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Identit\xE9 du patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 142)(20, "div", 143)(21, "label");
    \u0275\u0275text(22, "Nom ");
    \u0275\u0275elementStart(23, "span", 78);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.nom, $event) || (ctx_r3.newPatient.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 143)(27, "label");
    \u0275\u0275text(28, "Pr\xE9nom ");
    \u0275\u0275elementStart(29, "span", 78);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.prenom, $event) || (ctx_r3.newPatient.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 143)(33, "label");
    \u0275\u0275text(34, "Date de naissance ");
    \u0275\u0275elementStart(35, "span", 78);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.dateNaissance, $event) || (ctx_r3.newPatient.dateNaissance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 144)(39, "label");
    \u0275\u0275text(40, "Genre ");
    \u0275\u0275elementStart(41, "span", 78);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_4_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newPatient.genre, $event) || (ctx_r3.newPatient.genre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(44, "option", 86);
    \u0275\u0275text(45, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 87);
    \u0275\u0275text(47, "Homme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 88);
    \u0275\u0275text(49, "Femme");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 130)(51, "div", 145)(52, "span", 146);
    \u0275\u0275text(53, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Patient");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 134)(57, "button", 109);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewPatientModal = false);
    });
    \u0275\u0275text(58, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_div_4_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r17);
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
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r19 = ctx.$implicit;
    \u0275\u0275property("value", r_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r19.label);
  }
}
function AdminComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewUserModal = false);
    });
    \u0275\u0275elementStart(1, "div", 147);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 148)(3, "span", 149);
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Cr\xE9er un Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 117);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNewUserModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 150)(11, "div", 151)(12, "span", 16);
    \u0275\u0275text(13, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 142)(16, "div", 143)(17, "label");
    \u0275\u0275text(18, "Nom ");
    \u0275\u0275elementStart(19, "span", 78);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.nom, $event) || (ctx_r3.newUser.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 143)(23, "label");
    \u0275\u0275text(24, "Pr\xE9nom ");
    \u0275\u0275elementStart(25, "span", 78);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.prenom, $event) || (ctx_r3.newUser.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 143)(29, "label");
    \u0275\u0275text(30, "Matricule (Mat) ");
    \u0275\u0275elementStart(31, "span", 78);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.mat, $event) || (ctx_r3.newUser.mat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 143)(35, "label");
    \u0275\u0275text(36, "Email ");
    \u0275\u0275elementStart(37, "span", 78);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.email, $event) || (ctx_r3.newUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 143)(41, "label");
    \u0275\u0275text(42, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.telephone, $event) || (ctx_r3.newUser.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 143)(45, "label");
    \u0275\u0275text(46, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.service, $event) || (ctx_r3.newUser.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(48, "option", 95);
    \u0275\u0275text(49, "H\xE9modialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 96);
    \u0275\u0275text(51, "Permanence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 97);
    \u0275\u0275text(53, "Laboratoire");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 154)(55, "span", 16);
    \u0275\u0275text(56, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " Acc\xE8s & Connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 142)(59, "div", 143)(60, "label");
    \u0275\u0275text(61, "Login ");
    \u0275\u0275elementStart(62, "span", 78);
    \u0275\u0275text(63, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.login, $event) || (ctx_r3.newUser.login = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 143)(66, "label");
    \u0275\u0275text(67, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.username, $event) || (ctx_r3.newUser.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 143)(70, "label");
    \u0275\u0275text(71, "Mot de passe (MdP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.mdp, $event) || (ctx_r3.newUser.mdp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 143)(74, "label");
    \u0275\u0275text(75, "R\xF4le ");
    \u0275\u0275elementStart(76, "span", 78);
    \u0275\u0275text(77, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_select_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.role, $event) || (ctx_r3.newUser.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(79, AdminComponent_div_5_option_79_Template, 2, 2, "option", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 158)(81, "label");
    \u0275\u0275text(82, "Compte actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 125)(84, "label", 126)(85, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_5_Template_input_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newUser.actif, $event) || (ctx_r3.newUser.actif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "span", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 129);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(89, "div", 160)(90, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveNewUser());
    });
    \u0275\u0275elementStart(91, "span", 16);
    \u0275\u0275text(92, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " Cr\xE9er le compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 109);
    \u0275\u0275listener("click", function AdminComponent_div_5_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r18);
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
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showSettingsModal = false);
    });
    \u0275\u0275elementStart(1, "div", 161);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 148)(3, "span", 149);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Param\xE8tres syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 117);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showSettingsModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 150)(11, "div", 162)(12, "div", 163)(13, "span", 16);
    \u0275\u0275text(14, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 164)(17, "div", 165)(18, "b");
    \u0275\u0275text(19, "Notifications par email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Recevoir les alertes critiques par email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 126)(23, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.notificationsEmail, $event) || (ctx_r3.settings.notificationsEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 164)(26, "div", 165)(27, "b");
    \u0275\u0275text(28, "Notifications syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Alertes en temps r\xE9el dans l'interface");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 126)(32, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.notificationsSystem, $event) || (ctx_r3.settings.notificationsSystem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "span", 128);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 162)(35, "div", 163)(36, "span", 16);
    \u0275\u0275text(37, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " S\xE9curit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 164)(40, "div", 165)(41, "b");
    \u0275\u0275text(42, "Double authentification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "V\xE9rification en deux \xE9tapes \xE0 la connexion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "label", 126)(46, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.doubleAuth, $event) || (ctx_r3.settings.doubleAuth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 164)(49, "div", 165)(50, "b");
    \u0275\u0275text(51, "Journal d'audit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Enregistrer toutes les actions administratives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "label", 126)(55, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.auditLog, $event) || (ctx_r3.settings.auditLog = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "span", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 164)(58, "div", 165)(59, "b");
    \u0275\u0275text(60, "Expiration de session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "D\xE9connexion automatique apr\xE8s inactivit\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 166)(64, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.sessionTimeout, $event) || (ctx_r3.settings.sessionTimeout = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(65, "option", 136);
    \u0275\u0275text(66, "15 min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 136);
    \u0275\u0275text(68, "30 min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 136);
    \u0275\u0275text(70, "1 heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 136);
    \u0275\u0275text(72, "2 heures");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(73, "div", 162)(74, "div", 163)(75, "span", 16);
    \u0275\u0275text(76, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " Pr\xE9f\xE9rences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 164)(79, "div", 165)(80, "b");
    \u0275\u0275text(81, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83, "Langue de l'interface");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 167)(85, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_select_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.langue, $event) || (ctx_r3.settings.langue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(86, "option", 168);
    \u0275\u0275text(87, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "option", 169);
    \u0275\u0275text(89, "???????");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "option", 170);
    \u0275\u0275text(91, "English");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 164)(93, "div", 165)(94, "b");
    \u0275\u0275text(95, "Format d'export");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97, "Format par d\xE9faut pour les exports");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 167)(99, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_6_Template_select_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.settings.exportFormat, $event) || (ctx_r3.settings.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(100, "option", 171);
    \u0275\u0275text(101, "CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "option", 172);
    \u0275\u0275text(103, "Excel (XLSX)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "option", 173);
    \u0275\u0275text(105, "PDF");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(106, "div", 160)(107, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveSettings());
    });
    \u0275\u0275elementStart(108, "span", 16);
    \u0275\u0275text(109, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, " Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "button", 109);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r20);
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
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "div", 151)(2, "span", 16);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Identit\xE9 du patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 142)(6, "div", 143)(7, "label");
    \u0275\u0275text(8, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 143)(11, "label");
    \u0275\u0275text(12, "Nom ");
    \u0275\u0275elementStart(13, "span", 78);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.nom, $event) || (ctx_r3.editPatient.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 143)(17, "label");
    \u0275\u0275text(18, "Pr\xE9nom ");
    \u0275\u0275elementStart(19, "span", 78);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.prenom, $event) || (ctx_r3.editPatient.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 143)(23, "label");
    \u0275\u0275text(24, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.dateNaissance, $event) || (ctx_r3.editPatient.dateNaissance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 178)(27, "label");
    \u0275\u0275text(28, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.genre, $event) || (ctx_r3.editPatient.genre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 86);
    \u0275\u0275text(31, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 87);
    \u0275\u0275text(33, "Homme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 88);
    \u0275\u0275text(35, "Femme");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 143)(37, "label");
    \u0275\u0275text(38, "CIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_7_div_10_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editPatient.cin, $event) || (ctx_r3.editPatient.cin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 160)(41, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_div_7_div_10_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveEditPatient());
    });
    \u0275\u0275elementStart(42, "span", 16);
    \u0275\u0275text(43, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 109);
    \u0275\u0275listener("click", function AdminComponent_div_7_div_10_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r22);
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
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditPatientModal = false);
    });
    \u0275\u0275elementStart(1, "div", 174);
    \u0275\u0275listener("click", function AdminComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 148)(3, "span", 175);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Modifier le Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 117);
    \u0275\u0275listener("click", function AdminComponent_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditPatientModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AdminComponent_div_7_div_10_Template, 47, 6, "div", 176);
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
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r25 = ctx.$implicit;
    \u0275\u0275property("value", p_r25.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r25.prenom, " ", p_r25.nom, "");
  }
}
function AdminComponent_div_8_div_10_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 190);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_button_30_Template_button_click_0_listener() {
      const j_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleEditSeanceJour(j_r27));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r27 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("day-chip--active", ctx_r3.isEditSeanceJourSelected(j_r27));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.joursLabels[j_r27], " ");
  }
}
function AdminComponent_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "div", 180)(2, "div", 181)(3, "div", 178)(4, "label");
    \u0275\u0275text(5, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_8_div_10_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.editSeance.patientId, $event) || (ctx_r3.editSeance.patientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(7, AdminComponent_div_8_div_10_option_7_Template, 2, 3, "option", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 182)(9, "div", 183)(10, "span", 16);
    \u0275\u0275text(11, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Cr\xE9neau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 184)(14, "div", 185)(15, "label", 186)(16, "input", 187);
    \u0275\u0275listener("change", function AdminComponent_div_8_div_10_Template_input_change_16_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setEditSeanceCreneau("MATIN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Matin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 185)(20, "label", 186)(21, "input", 187);
    \u0275\u0275listener("change", function AdminComponent_div_8_div_10_Template_input_change_21_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setEditSeanceCreneau("APRES_MIDI"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Apr\xE8s-midi");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "div", 182)(25, "div", 183)(26, "span", 16);
    \u0275\u0275text(27, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Jours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 188);
    \u0275\u0275template(30, AdminComponent_div_8_div_10_button_30_Template, 2, 3, "button", 189);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 160)(32, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveEditSeance());
    });
    \u0275\u0275elementStart(33, "span", 16);
    \u0275\u0275text(34, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 109);
    \u0275\u0275listener("click", function AdminComponent_div_8_div_10_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showEditSeanceModal = false);
    });
    \u0275\u0275text(37, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editSeance.patientId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.patientsUsers);
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r3.editSeance.heureDebut < "12:00");
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r3.editSeance.heureDebut >= "12:00");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c1));
  }
}
function AdminComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditSeanceModal = false);
    });
    \u0275\u0275elementStart(1, "div", 179);
    \u0275\u0275listener("click", function AdminComponent_div_8_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 148)(3, "span", 149);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Modifier la s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 117);
    \u0275\u0275listener("click", function AdminComponent_div_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditSeanceModal = false);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AdminComponent_div_8_div_10_Template, 38, 6, "div", 176);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("light", ctx_r3.isLight);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r3.editSeance);
  }
}
function AdminComponent_button_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_button_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
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
function AdminComponent_button_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 191);
    \u0275\u0275listener("click", function AdminComponent_button_70_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportStatsPdf());
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Exporter PDF ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_button_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 191);
    \u0275\u0275listener("click", function AdminComponent_button_71_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportAuditPdf());
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Exporter PDF ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_78_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 203)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_78_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 203)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_78_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 203)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_78_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 203)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 192)(1, "div", 193);
    \u0275\u0275listener("click", function AdminComponent_div_78_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("medecin"));
    });
    \u0275\u0275elementStart(2, "div", 194)(3, "span", 16);
    \u0275\u0275text(4, "medical_services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 195)(6, "span", 196);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 197);
    \u0275\u0275text(9, "M\xE9decins");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminComponent_div_78_span_10_Template, 3, 0, "span", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 199);
    \u0275\u0275listener("click", function AdminComponent_div_78_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("infirmier-majeur"));
    });
    \u0275\u0275elementStart(12, "div", 194)(13, "span", 16);
    \u0275\u0275text(14, "supervisor_account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 195)(16, "span", 196);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 197);
    \u0275\u0275text(19, "Inf. Majeurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AdminComponent_div_78_span_20_Template, 3, 0, "span", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 200);
    \u0275\u0275listener("click", function AdminComponent_div_78_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("infirmier"));
    });
    \u0275\u0275elementStart(22, "div", 194)(23, "span", 16);
    \u0275\u0275text(24, "local_hospital");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 195)(26, "span", 196);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 197);
    \u0275\u0275text(29, "Infirmiers");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, AdminComponent_div_78_span_30_Template, 3, 0, "span", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 201);
    \u0275\u0275listener("click", function AdminComponent_div_78_Template_div_click_31_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("patient"));
    });
    \u0275\u0275elementStart(32, "div", 194)(33, "span", 16);
    \u0275\u0275text(34, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 195)(36, "span", 196);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 197);
    \u0275\u0275text(39, "Patients");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, AdminComponent_div_78_span_40_Template, 3, 0, "span", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 202);
    \u0275\u0275listener("click", function AdminComponent_div_78_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectKpi("seances"));
    });
    \u0275\u0275elementStart(42, "div", 194)(43, "span", 16);
    \u0275\u0275text(44, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 195)(46, "span", 196);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 197);
    \u0275\u0275text(49, "S\xE9ances planifi\xE9es");
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
function AdminComponent_ng_container_79_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 210)(1, "span", 16);
    \u0275\u0275text(2, "filter_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 211);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_span_5_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r3.activeKpi === "medecin" ? "M\xE9decins" : ctx_r3.activeKpi === "infirmier-majeur" ? "Inf. Majeurs" : ctx_r3.activeKpi === "infirmier" ? "Infirmiers" : "Patients", " ");
  }
}
function AdminComponent_ng_container_79_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
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
function AdminComponent_ng_container_79_div_20_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 219);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.searchQuery = "");
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_79_div_20_ng_container_23_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 220)(3, "div", 221)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 222);
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
    \u0275\u0275elementStart(21, "td")(22, "div", 223)(23, "button", 224);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_ng_container_23_tr_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r37);
      const u_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openUser(u_r38));
    });
    \u0275\u0275elementStart(24, "span", 16);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 225);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_ng_container_23_tr_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r37);
      const u_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteUser(u_r38));
    });
    \u0275\u0275elementStart(27, "span", 16);
    \u0275\u0275text(28, "delete_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 226);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_ng_container_23_tr_1_Template_button_click_29_listener() {
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
function AdminComponent_ng_container_79_div_20_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminComponent_ng_container_79_div_20_ng_container_23_tr_1_Template, 32, 18, "tr", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const u_r38 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r38.role !== "patient");
  }
}
function AdminComponent_ng_container_79_div_20_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 227)(2, "span", 16);
    \u0275\u0275text(3, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun profil trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_79_div_20_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 228)(1, "span", 229);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 230)(4, "button", 231);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("staffPage", 1, ctx_r3.totalStaffPages));
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 232);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("staffPage", ctx_r3.staffPage - 1, ctx_r3.totalStaffPages));
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 233);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 234);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_div_25_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("staffPage", ctx_r3.staffPage + 1, ctx_r3.totalStaffPages));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 235);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_20_div_25_Template_button_click_15_listener() {
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
function AdminComponent_ng_container_79_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 212)(2, "span", 16);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 213);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_79_div_20_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchQuery, $event) || (ctx_r3.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminComponent_ng_container_79_div_20_button_5_Template, 3, 0, "button", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 215)(7, "table", 216)(8, "thead")(9, "tr")(10, "th");
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
    \u0275\u0275template(23, AdminComponent_ng_container_79_div_20_ng_container_23_Template, 2, 1, "ng-container", 217)(24, AdminComponent_ng_container_79_div_20_tr_24_Template, 5, 0, "tr", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, AdminComponent_ng_container_79_div_20_div_25_Template, 18, 9, "div", 218);
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
function AdminComponent_ng_container_79_div_21_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 219);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_21_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.searchPatient = "");
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_79_div_21_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td")(3, "span", 222);
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
    \u0275\u0275elementStart(14, "td")(15, "div", 223)(16, "button", 224);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_21_ng_container_23_Template_button_click_16_listener() {
      const u_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openEditPatient(u_r43));
    });
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 225);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_21_ng_container_23_Template_button_click_19_listener() {
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
function AdminComponent_ng_container_79_div_21_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 227)(2, "span", 16);
    \u0275\u0275text(3, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun patient enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_79_div_21_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 228)(1, "span", 229);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 230)(4, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_21_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("patientPage", 1, ctx_r3.totalPatientPages));
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_21_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("patientPage", ctx_r3.patientPage - 1, ctx_r3.totalPatientPages));
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 233);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_21_div_25_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToPage("patientPage", ctx_r3.patientPage + 1, ctx_r3.totalPatientPages));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_79_div_21_div_25_Template_button_click_15_listener() {
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
function AdminComponent_ng_container_79_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 212)(2, "span", 16);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 236);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_79_div_21_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchPatient, $event) || (ctx_r3.searchPatient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminComponent_ng_container_79_div_21_button_5_Template, 3, 0, "button", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 215)(7, "table", 216)(8, "thead")(9, "tr")(10, "th");
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
    \u0275\u0275template(23, AdminComponent_ng_container_79_div_21_ng_container_23_Template, 22, 5, "ng-container", 217)(24, AdminComponent_ng_container_79_div_21_tr_24_Template, 5, 0, "tr", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, AdminComponent_ng_container_79_div_21_div_25_Template, 18, 9, "div", 218);
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
function AdminComponent_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 204)(2, "div", 205)(3, "h2");
    \u0275\u0275text(4, " Liste des Profils ");
    \u0275\u0275template(5, AdminComponent_ng_container_79_span_5_Template, 7, 1, "span", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 207)(7, "select", 208);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_79_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filterRole, $event) || (ctx_r3.filterRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminComponent_ng_container_79_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.activeKpi = $event || "";
      return \u0275\u0275resetView(ctx_r3.staffPage = 1);
    });
    \u0275\u0275elementStart(8, "option", 86);
    \u0275\u0275text(9, "Tous les r\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminComponent_ng_container_79_option_10_Template, 2, 2, "option", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 208);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_79_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filterStatus, $event) || (ctx_r3.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 86);
    \u0275\u0275text(13, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 121);
    \u0275\u0275text(15, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 122);
    \u0275\u0275text(17, "Inactif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 123);
    \u0275\u0275text(19, "Suspendu");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, AdminComponent_ng_container_79_div_20_Template, 26, 5, "div", 35)(21, AdminComponent_ng_container_79_div_21_Template, 26, 5, "div", 35);
    \u0275\u0275elementStart(22, "div", 209);
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
    \u0275\u0275property("ngIf", ctx_r3.activeKpi !== "medecin" && ctx_r3.activeKpi !== "infirmier-majeur" && ctx_r3.activeKpi !== "infirmier");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.totalUsers, " profil(s) enregistr\xE9(s)");
  }
}
function AdminComponent_ng_container_80_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
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
function AdminComponent_ng_container_80_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 190);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_button_22_Template_button_click_0_listener() {
      const j_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleSeanceJour(j_r49));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r49 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("day-chip--active", ctx_r3.isSeanceJourSelected(j_r49));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.joursLabels[j_r49], " ");
  }
}
function AdminComponent_ng_container_80_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 219);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_button_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.searchSeance = "");
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_80_tr_64_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248)(1, "span", 249);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 250);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r52 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.seanceJourLabel(e_r52));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.seanceCreneauLabel(e_r52));
  }
}
function AdminComponent_ng_container_80_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 244)(5, "div", 245);
    \u0275\u0275template(6, AdminComponent_ng_container_80_tr_64_div_6_Template, 5, 2, "div", 246);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 223)(9, "button", 224);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_tr_64_Template_button_click_9_listener() {
      const p_r53 = \u0275\u0275restoreView(_r51).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditPersonSeance(p_r53));
    });
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 247);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_tr_64_Template_button_click_12_listener() {
      const p_r53 = \u0275\u0275restoreView(_r51).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.supprimerPersonSeances(p_r53));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "delete_outline");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r53 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r53.patientNom);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", p_r53.entries);
  }
}
function AdminComponent_ng_container_80_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 251)(2, "span", 16);
    \u0275\u0275text(3, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucune s\xE9ance planifi\xE9e ");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_80_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 228)(1, "span", 229);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 230)(4, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_div_66_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage("seancePage", 1, ctx_r3.totalPersonSeancePages));
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_div_66_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage("seancePage", ctx_r3.seancePage - 1, ctx_r3.totalPersonSeancePages));
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 233);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_div_66_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage("seancePage", ctx_r3.seancePage + 1, ctx_r3.totalPersonSeancePages));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_div_66_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r54);
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
function AdminComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 238)(2, "div", 239)(3, "span", 16);
    \u0275\u0275text(4, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Planifier une s\xE9ance de dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 240)(7, "div", 143)(8, "label");
    \u0275\u0275text(9, "Patient ");
    \u0275\u0275elementStart(10, "span", 78);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_80_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newSeance.patientId, $event) || (ctx_r3.newSeance.patientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 86);
    \u0275\u0275text(14, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AdminComponent_ng_container_80_option_15_Template, 2, 3, "option", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 182)(17, "div", 183)(18, "span", 16);
    \u0275\u0275text(19, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Jours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 188);
    \u0275\u0275template(22, AdminComponent_ng_container_80_button_22_Template, 2, 3, "button", 189);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 182)(24, "div", 183)(25, "span", 16);
    \u0275\u0275text(26, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Cr\xE9neaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 184)(29, "div", 185)(30, "label", 186)(31, "input", 241);
    \u0275\u0275listener("change", function AdminComponent_ng_container_80_Template_input_change_31_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setNewSeanceCreneau("MATIN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Matin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 185)(35, "label", 186)(36, "input", 241);
    \u0275\u0275listener("change", function AdminComponent_ng_container_80_Template_input_change_36_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setNewSeanceCreneau("APRES_MIDI"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Apr\xE8s-midi");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(39, "div", 242)(40, "button", 135);
    \u0275\u0275listener("click", function AdminComponent_ng_container_80_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.ajouterSeance());
    });
    \u0275\u0275elementStart(41, "span", 16);
    \u0275\u0275text(42, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Planifier la s\xE9ance ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 204)(45, "div", 205)(46, "h2");
    \u0275\u0275text(47, "S\xE9ances planifi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 212)(49, "span", 16);
    \u0275\u0275text(50, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 243);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_80_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.searchSeance, $event) || (ctx_r3.searchSeance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, AdminComponent_ng_container_80_button_52_Template, 3, 0, "button", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 215)(54, "table", 216)(55, "thead")(56, "tr")(57, "th");
    \u0275\u0275text(58, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th", 244);
    \u0275\u0275text(60, "S\xE9ances planifi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275template(64, AdminComponent_ng_container_80_tr_64_Template, 15, 2, "tr", 217)(65, AdminComponent_ng_container_80_tr_65_Template, 5, 0, "tr", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(66, AdminComponent_ng_container_80_div_66_Template, 18, 9, "div", 218);
    \u0275\u0275elementStart(67, "div", 209);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newSeance.patientId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.patientsUsers);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(12, _c1));
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r3.newSeance.shiftMatin);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r3.newSeance.shiftApresMidi);
    \u0275\u0275advance(15);
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
    \u0275\u0275textInterpolate2("", ctx_r3.filteredPersonSeances.length, " patient(s) \xB7 ", ctx_r3.seancesAdmin.length, " cr\xE9neau(x) au total");
  }
}
function AdminComponent_ng_container_81__svg_g_47__svg_text_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r54 = \u0275\u0275nextContext();
    const bar_r56 = ctx_r54.$implicit;
    const i_r57 = ctx_r54.index;
    \u0275\u0275attribute("x", i_r57 * 46 + 30)("y", 104 - bar_r56.pct * 80);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bar_r56.count);
  }
}
function AdminComponent_ng_container_81__svg_g_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 279);
    \u0275\u0275elementStart(2, "text", 280);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminComponent_ng_container_81__svg_g_47__svg_text_4_Template, 2, 3, "text", 281);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r56 = ctx.$implicit;
    const i_r57 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275attribute("x", i_r57 * 46 + 14)("y", 110 - bar_r56.pct * 80)("width", 32)("height", bar_r56.pct * 80 + 0.01);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", i_r57 * 46 + 30)("y", 127);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bar_r56.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bar_r56.count > 0);
  }
}
function AdminComponent_ng_container_81__svg_circle_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 283);
  }
  if (rf & 2) {
    const seg_r58 = ctx.$implicit;
    \u0275\u0275attribute("stroke", seg_r58.color)("stroke-dasharray", seg_r58.dasharray)("transform", "rotate(" + seg_r58.rotate + " 60 60)");
  }
}
function AdminComponent_ng_container_81_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 284);
    \u0275\u0275element(1, "span", 285);
    \u0275\u0275elementStart(2, "span", 286);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 287);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const seg_r59 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", seg_r59.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(seg_r59.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(seg_r59.count);
  }
}
function AdminComponent_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 192)(2, "div", 252)(3, "div", 194)(4, "span", 16);
    \u0275\u0275text(5, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 195)(7, "span", 196);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 197);
    \u0275\u0275text(10, "Patients actifs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 253)(12, "div", 194)(13, "span", 16);
    \u0275\u0275text(14, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 195)(16, "span", 196);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 197);
    \u0275\u0275text(19, "S\xE9ances cette semaine");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 254)(21, "div", 194)(22, "span", 16);
    \u0275\u0275text(23, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 195)(25, "span", 196);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 197);
    \u0275\u0275text(28, "Nouveaux patients ce mois");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 255)(30, "div", 194)(31, "span", 16);
    \u0275\u0275text(32, "block");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 195)(34, "span", 196);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 197);
    \u0275\u0275text(37, "Comptes suspendus");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 256)(39, "div", 257)(40, "div", 205)(41, "h2")(42, "span", 16);
    \u0275\u0275text(43, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "S\xE9ances \u2014 7 derniers jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 258);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 259);
    \u0275\u0275template(47, AdminComponent_ng_container_81__svg_g_47_Template, 5, 8, "g", 217);
    \u0275\u0275element(48, "line", 260);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "div", 257)(50, "div", 205)(51, "h2")(52, "span", 16);
    \u0275\u0275text(53, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "Utilisateurs par r\xF4le");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 261);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 262);
    \u0275\u0275element(57, "circle", 263);
    \u0275\u0275template(58, AdminComponent_ng_container_81__svg_circle_58_Template, 1, 3, "circle", 264);
    \u0275\u0275elementStart(59, "text", 265);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "text", 266);
    \u0275\u0275text(62, "utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "div", 267);
    \u0275\u0275template(64, AdminComponent_ng_container_81_div_64_Template, 6, 4, "div", 268);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 257)(66, "div", 205)(67, "h2")(68, "span", 16);
    \u0275\u0275text(69, "speed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "Taux d'occupation cr\xE9neaux");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 269);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(72, "svg", 270);
    \u0275\u0275element(73, "path", 271)(74, "path", 272);
    \u0275\u0275elementStart(75, "text", 273);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "text", 274);
    \u0275\u0275text(78, "Taux occupation semaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "text", 275);
    \u0275\u0275text(80, "0%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "text", 276);
    \u0275\u0275text(82, "100%");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(83, "div", 277)(84, "div", 278)(85, "span");
    \u0275\u0275text(86, "S\xE9ances cette semaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 278)(90, "span");
    \u0275\u0275text(91, "Infirmiers actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "strong");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 278)(95, "span");
    \u0275\u0275text(96, "Patients total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "strong");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.patientCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.seancesThisWeek);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.newPatientsThisMonth);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.suspendedCount);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r3.seancesBarChart);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r3.userRoleDonut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.totalUsers);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.userRoleDonut);
    \u0275\u0275advance(10);
    \u0275\u0275attribute("stroke-dasharray", (ctx_r3.tauxOccupation / 100 * 251.3).toFixed(1) + " 251.3")("stroke-dashoffset", 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.tauxOccupation, "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r3.seancesThisWeek);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.infirmierCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.patientCount);
  }
}
function AdminComponent_ng_container_82_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 300)(1, "span", 16);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune activit\xE9 enregistr\xE9e \u2014 les actions effectu\xE9es dans cette session appara\xEEtront ici. ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_ng_container_82_div_30_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 302);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 303);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 304);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 305);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 306)(18, "span", 16);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r61 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.fmtAuditDate(entry_r61.timestamp));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r61.utilisateur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r61.role);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.auditActionClass(entry_r61.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.auditActionLabel(entry_r61.action));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r61.entite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r61.details);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-dot--ok", entry_r61.statut === "success")("status-dot--crit", entry_r61.statut === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r61.statut === "success" ? "check_circle" : "error");
  }
}
function AdminComponent_ng_container_82_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 301)(1, "table", 216)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Horodatage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Entit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "D\xE9tails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, AdminComponent_ng_container_82_div_30_tr_19_Template, 20, 13, "tr", 217);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r3.paginatedAuditEntries);
  }
}
function AdminComponent_ng_container_82_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 228)(1, "span", 229);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 230)(4, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_82_div_31_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.auditPage = 1);
    });
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "first_page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_82_div_31_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.auditPage = ctx_r3.auditPage - 1);
    });
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 233);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_82_div_31_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.auditPage = ctx_r3.auditPage + 1);
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 237);
    \u0275\u0275listener("click", function AdminComponent_ng_container_82_div_31_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.auditPage = ctx_r3.totalAuditPages);
    });
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17, "last_page");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", (ctx_r3.auditPage - 1) * ctx_r3.auditPageSize + 1, "\u2013", ctx_r3.pageEnd(ctx_r3.auditPage, ctx_r3.filteredAuditEntries.length), " sur ", ctx_r3.filteredAuditEntries.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.auditPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.auditPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r3.auditPage, " / ", ctx_r3.totalAuditPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.auditPage === ctx_r3.totalAuditPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.auditPage === ctx_r3.totalAuditPages);
  }
}
function AdminComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 204)(2, "div", 205)(3, "h2")(4, "span", 16);
    \u0275\u0275text(5, "policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "Journal des Activit\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 288)(8, "input", 289);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_82_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.auditFilterUser, $event) || (ctx_r3.auditFilterUser = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 208);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_82_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.auditFilterAction, $event) || (ctx_r3.auditFilterAction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 86);
    \u0275\u0275text(11, "Toutes les actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 290);
    \u0275\u0275text(13, "Connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 291);
    \u0275\u0275text(15, "Cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 292);
    \u0275\u0275text(17, "Modification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 293);
    \u0275\u0275text(19, "Suppression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 294);
    \u0275\u0275text(21, "Export");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 295);
    \u0275\u0275text(23, "D\xE9connexion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 296);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_82_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.auditFilterDate, $event) || (ctx_r3.auditFilterDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 297);
    \u0275\u0275listener("click", function AdminComponent_ng_container_82_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearAuditLog());
    });
    \u0275\u0275elementStart(26, "span", 16);
    \u0275\u0275text(27, "delete_sweep");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "Effacer ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, AdminComponent_ng_container_82_div_29_Template, 4, 0, "div", 298)(30, AdminComponent_ng_container_82_div_30_Template, 20, 1, "div", 299)(31, AdminComponent_ng_container_82_div_31_Template, 18, 9, "div", 218);
    \u0275\u0275elementStart(32, "div", 209);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.auditFilterUser);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.auditFilterAction);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.auditFilterDate);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.auditEntries.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.auditEntries.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredAuditEntries.length > ctx_r3.auditPageSize);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.filteredAuditEntries.length, " entr\xE9e(s) \u2014 actions de la session courante stock\xE9es localement");
  }
}
var AdminComponent = class _AdminComponent {
  router;
  authService;
  utilisateurService;
  patientService;
  seanceService;
  adminSettingsService;
  rolePermissionService;
  auditService;
  adminMainRef;
  constructor(router, authService, utilisateurService, patientService, seanceService, adminSettingsService, rolePermissionService, auditService) {
    this.router = router;
    this.authService = authService;
    this.utilisateurService = utilisateurService;
    this.patientService = patientService;
    this.seanceService = seanceService;
    this.adminSettingsService = adminSettingsService;
    this.rolePermissionService = rolePermissionService;
    this.auditService = auditService;
  }
  // -- Sidebar mobile --
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
  activeTab = ["profils", "seances", "statistiques", "audit"].includes(localStorage.getItem("admin_activeTab") ?? "") ? localStorage.getItem("admin_activeTab") : "profils";
  activeProfilRole = "medecin";
  loading = false;
  isLight = true;
  profilsLoaded = false;
  seancesLoaded = false;
  // -- Wizard nouveau profil --
  showWizardModal = false;
  wizardStep = 1;
  wizardRole = "medecin";
  wizardRoleOptions = [
    { id: "medecin", label: "M\xE9decin", icon: "medical_services", color: "var(--c-teal)", desc: "N\xE9phrologue, prescriptions, dossiers" },
    { id: "infirmier-majeur", label: "Infirmier Majeur", icon: "supervisor_account", color: "var(--c-purple)", desc: "Coordinateur, planification, \xE9quipes" },
    { id: "infirmier", label: "Infirmier(e)", icon: "local_hospital", color: "var(--c-blue)", desc: "Soins, monitoring, constantes vitales" },
    { id: "patient", label: "Patient", icon: "person", color: "var(--c-green)", desc: "Patient du centre de dialyse" }
  ];
  serviceParRole = {
    "medecin": "H\xE9modialyse",
    "infirmier-majeur": "H\xE9modialyse",
    "infirmier": "H\xE9modialyse",
    "patient": "",
    "admin": "H\xE9modialyse"
  };
  specialiteParRole = {
    "medecin": "N\xE9phrologie",
    "infirmier-majeur": "H\xE9modialyse",
    "infirmier": "H\xE9modialyse",
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
  showEditSeanceModal = false;
  searchQuery = "";
  filterRole = "";
  filterStatus = "";
  activeKpi = "";
  // tracks which KPI card is highlighted
  searchPatient = "";
  searchSeance = "";
  filterSeanceDate = "";
  pageSize = 4;
  staffPage = 1;
  patientPage = 1;
  seancePage = 1;
  groupesSanguins = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  joursTitles = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  moisLabels = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
  roleIds = ["admin", "medecin", "infirmier-majeur", "infirmier", "patient"];
  newPatient = { nom: "", prenom: "", dateNaissance: "", cin: "", telephone: "", adresse: "", genre: "" };
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
  // --- SÉANCES -----------------------------------------------------------------
  seancesAdmin = [];
  /** Formulaire de planification de séance avec heures individuelles par date */
  newSeance = {
    patientId: "",
    infirmierId: "",
    dates: [],
    datesSeances: [],
    heureDebut: "07:30",
    heureFin: "11:30",
    // jours sélectionnés (0=Dim,1=Lun,...,6=Sam)
    jours: [],
    // abord vasculaire
    abordFAV: false,
    abordCatheter: false,
    // shift
    shiftMatin: false,
    shiftApresMidi: false
  };
  joursLabels = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  toggleSeanceJour(j) {
    const idx = this.newSeance.jours.indexOf(j);
    if (idx >= 0)
      this.newSeance.jours.splice(idx, 1);
    else
      this.newSeance.jours.push(j);
  }
  setNewSeanceCreneau(creneau) {
    this.newSeance.shiftMatin = creneau === "MATIN";
    this.newSeance.shiftApresMidi = creneau === "APRES_MIDI";
  }
  isSeanceJourSelected(j) {
    return this.newSeance.jours.includes(j);
  }
  newSeanceActiveDate = null;
  editSeance = null;
  editSeanceDates = [];
  editSeanceJours = [];
  seanceCalYear = (/* @__PURE__ */ new Date()).getFullYear();
  seanceCalMonth = (/* @__PURE__ */ new Date()).getMonth();
  editSeanceCalYear = (/* @__PURE__ */ new Date()).getFullYear();
  editSeanceCalMonth = (/* @__PURE__ */ new Date()).getMonth();
  tid = 0;
  toasts = [];
  pollingInterval = null;
  POLLING_INTERVAL_MS = 3e4;
  // ------------------------------------------------------------------------------
  //  LIFECYCLE
  // ------------------------------------------------------------------------------
  ngOnInit() {
    if (this.isLight)
      document.body.classList.add("theme-light");
    this.loadSharedAdminData();
    this.refreshAdminCollections();
    this.startPolling();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    localStorage.setItem("admin_activeTab", tab);
    this.scrollAdminToTop();
    if (tab === "audit") {
      this.loadAuditEntries();
    } else {
      this.refreshAdminCollections(false, false);
    }
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
      seances: this.seanceService.getAll().pipe(catchError(() => of([])))
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ users, patients, seances }) => {
        this.staffUsers = users.map((u) => this.mapUtilisateurToAppUser(u));
        this.patientUsersData = patients.map((p) => this.mapPatientToAppUser(p));
        this.users = [...this.staffUsers, ...this.patientUsersData];
        this.seancesAdmin = seances.map((s) => this.mapSeanceToRow(s));
        this.profilsLoaded = true;
        this.seancesLoaded = true;
        this.normalizeAllPages();
        this.syncSelectedInfirmier();
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
  // ------------------------------------------------------------------------------
  //  WIZARD — création profil multi-étapes
  // ------------------------------------------------------------------------------
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
        genre: this.wizardData.genre
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
  // ------------------------------------------------------------------------------
  //  PERMISSIONS
  // ------------------------------------------------------------------------------
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
  // ------------------------------------------------------------------------------
  //  FILTRES — Profils
  // ------------------------------------------------------------------------------
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
  // ------------------------------------------------------------------------------
  //  MODAL UTILISATEUR (édition)
  // ------------------------------------------------------------------------------
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
        this.logAction("MODIFICATION", "Utilisateur", `Profil modifi\xE9: ${this.selectedUser?.prenom} ${this.selectedUser?.nom}`);
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
        this.logAction("SUPPRESSION", user.role === "patient" ? "Patient" : "Utilisateur", `Suppression: ${user.prenom} ${user.nom}`);
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
  // ------------------------------------------------------------------------------
  //  PATIENT — création & édition
  // ------------------------------------------------------------------------------
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
      cin: this.newPatient.cin || null,
      telephone: normalizedPhone || null,
      adresse: this.newPatient.adresse || null,
      genre: this.newPatient.genre || null
    };
    this.patientService.create(payload).subscribe({
      next: () => {
        this.patientService.invalidateCache();
        this.showNewPatientModal = false;
        this.logAction("CREATION", "Patient", `Nouveau patient: ${payload.prenom} ${payload.nom}`);
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
  // ------------------------------------------------------------------------------
  //  UTILISATEUR — création
  // ------------------------------------------------------------------------------
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
        this.logAction("CREATION", "Utilisateur", `Nouveau compte: ${payload.prenom} ${payload.nom} (${payload.role})`);
        this.showToast(`Compte de ${payload.prenom} ${payload.nom} cree. Le mot de passe a ete envoye par email.`, "success");
        this.refreshAfterMutation();
      },
      error: (err) => this.handleCreateUserError(err)
    });
  }
  get superviseurs() {
    return this.users.filter((u) => u.role === "infirmier-majeur");
  }
  // ------------------------------------------------------------------------------
  //  CALENDRIER — séances  (avec heures individuelles par date)
  // ------------------------------------------------------------------------------
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
        infirmierId: this.newSeance.infirmierId ? Number(this.newSeance.infirmierId) : this.resolveDefaultInfirmierIdForDate(date, this.newSeance.heureDebut, this.newSeance.heureFin)
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
  // ------------------------------------------------------------------------------
  //  SÉANCES — filtre, recherche, regroupement
  // ------------------------------------------------------------------------------
  groupSeances(seances) {
    const map = /* @__PURE__ */ new Map();
    for (const s of seances) {
      const key = `${s.patientId}|${s.responsableId}|${s.heureDebut}|${s.heureFin}|${s.statut}`;
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
          infirmierNom: s.infirmierNom,
          dates: [s.date],
          heureDebut: s.heureDebut,
          heureFin: s.heureFin,
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
      result = result.filter((s) => s.patientNom.toLowerCase().includes(q) || s.infirmierNom.toLowerCase().includes(q) || this.seanceJourLabel(s).toLowerCase().includes(q) || this.seanceCreneauLabel(s).toLowerCase().includes(q) || s.statut.toLowerCase().includes(q));
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
        person = { patientId: s.patientId, patientNom: s.patientNom, infirmierNom: s.infirmierNom, entries: [] };
        map.set(s.patientId, person);
      }
      const jourPlanifie = s.jourPlanifie ?? this.uiDayFromDisplayDate(s.date);
      const existing = person.entries.find((entry) => (entry.jourPlanifie ?? this.uiDayFromDisplayDate(entry.date)) === jourPlanifie);
      if (existing) {
        existing.seanceIds = [...existing.seanceIds ?? [existing.seanceId], s.id];
        existing.seanceId = s.id;
        existing.date = s.date;
        existing.heureDebut = s.heureDebut;
        existing.heureFin = s.heureFin;
        existing.statut = s.statut;
        existing.jourPlanifie = jourPlanifie;
        existing.creneau = s.creneau;
        continue;
      }
      person.entries.push({
        date: s.date,
        heureDebut: s.heureDebut,
        heureFin: s.heureFin,
        statut: s.statut,
        jourPlanifie,
        creneau: s.creneau,
        seanceId: s.id,
        seanceIds: [s.id]
      });
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
    const ids = [...new Set(person.entries.flatMap((e) => e.seanceIds ?? [e.seanceId]))];
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
    const ids = [...new Set(person.entries.flatMap((e) => e.seanceIds ?? [e.seanceId]))];
    const rows = ids.map((id) => this.seancesAdmin.find((s) => s.id === id)).filter((r) => !!r).sort((a, b) => this.displayToIsoDate(a.date).localeCompare(this.displayToIsoDate(b.date)));
    if (!rows.length)
      return;
    const first = rows[0];
    const datesSeances = Array.from(new Map(rows.map((s) => [
      this.displayToIsoDate(s.date),
      { date: this.displayToIsoDate(s.date), heureDebut: s.heureDebut, heureFin: s.heureFin }
    ])).values());
    this.editSeance = __spreadProps(__spreadValues({}, first), { datesSeances, sourceSeances: rows });
    this.editSeanceDates = datesSeances.map((d) => d.date);
    this.editSeanceJours = [...new Set(rows.map((row) => row.jourPlanifie ?? this.uiDayFromDisplayDate(row.date)))].sort((a, b) => a - b);
    this.showEditSeanceModal = true;
    this.syncSelectedInfirmierForEdit();
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
  get availableInfirmiers() {
    const activeDate = this.getActiveNewSeanceDateEntry();
    if (!activeDate)
      return [];
    const candidates = this.infirmiers.filter((user) => this.isInfirmierAvailableForSelection(user.id));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getInfirmierLoadForSelection(left.id) - this.getInfirmierLoadForSelection(right.id);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, "fr");
    });
  }
  get availableInfirmiersForEdit() {
    const candidates = this.infirmiers.filter((user) => this.isInfirmierAvailableForEdit(user.id));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getInfirmierLoadForEdit(left.id) - this.getInfirmierLoadForEdit(right.id);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, "fr");
    });
  }
  get patientsUsers() {
    return this.users.filter((u) => u.role === "patient");
  }
  getInfirmierLoadForSelection(userId) {
    const activeDate = this.getActiveNewSeanceDateEntry();
    const dates = activeDate ? [activeDate.date] : [];
    if (!dates.length)
      return 0;
    return this.seancesAdmin.filter((seance) => seance.responsableId === userId && dates.includes(this.displayToIsoDate(seance.date))).length;
  }
  getAvailableInfirmiersForDate(date, start, end) {
    const candidates = this.infirmiers.filter((user) => !this.hasSeanceConflict(user.id, date, start, end));
    return [...candidates].sort((left, right) => {
      const loadDiff = this.getInfirmierLoadForDate(left.id, date) - this.getInfirmierLoadForDate(right.id, date);
      return loadDiff !== 0 ? loadDiff : `${left.prenom} ${left.nom}`.localeCompare(`${right.prenom} ${right.nom}`, "fr");
    });
  }
  getInfirmierLoadForDate(userId, date) {
    return this.seancesAdmin.filter((seance) => seance.responsableId === userId && this.displayToIsoDate(seance.date) === date).length;
  }
  getInfirmierLoadForEdit(userId) {
    const dates = this.editSeanceDates.length ? this.editSeanceDates : this.editSeance ? [this.displayToIsoDate(this.editSeance.date)] : [this.todayLocalIso()];
    return this.seancesAdmin.filter((seance) => seance.id !== this.editSeance?.id && seance.responsableId === userId && dates.includes(this.displayToIsoDate(seance.date))).length;
  }
  /**
   * Planifie les séances : UNE requête par date avec ses heures propres.
   * Valide que chaque date a des heures cohérentes avant d'envoyer.
   */
  ajouterSeance() {
    const creneaux = this.resolveSelectedCreneaux();
    if (!this.newSeance.patientId || !this.newSeance.jours.length || !creneaux.length) {
      this.showToast("Veuillez choisir un patient, au moins un jour et un cr\xE9neau", "warning");
      return;
    }
    const payload = {
      patientId: Number(this.newSeance.patientId),
      jours: [...new Set(this.newSeance.jours)],
      creneaux,
      nombreSemaines: 1,
      utilisateurId: this.authService.utilisateurId || null
    };
    this.seanceService.planifier(payload).subscribe({
      next: (createdSeances) => {
        this.insertSeances(createdSeances);
        this.resetNewSeanceForm();
        this.logAction("CREATION", "S\xE9ance", `${createdSeances.length} s\xE9ance(s) planifi\xE9e(s)`);
        this.showToast(`${createdSeances.length} s\xE9ance(s) planifi\xE9e(s) avec succ\xE8s`, "success");
      },
      error: (err) => {
        const msg = err?.error?.message || err?.error?.detail || err?.error?.error || "Impossible de planifier la s\xE9ance";
        this.showToast(msg, "error");
      }
    });
  }
  resolveSelectedCreneaux() {
    const creneaux = [];
    if (this.newSeance.shiftMatin)
      creneaux.push("MATIN");
    if (this.newSeance.shiftApresMidi)
      creneaux.push("APRES_MIDI");
    return creneaux;
  }
  resolveNewSeanceDates() {
    if (this.newSeance.datesSeances.length) {
      return this.newSeance.datesSeances;
    }
    const shifts = [];
    if (this.newSeance.shiftMatin)
      shifts.push({ heureDebut: "07:30", heureFin: "11:30" });
    if (this.newSeance.shiftApresMidi)
      shifts.push({ heureDebut: "13:30", heureFin: "17:30" });
    if (!this.newSeance.jours.length || !shifts.length) {
      return [];
    }
    const today = /* @__PURE__ */ new Date();
    return this.newSeance.jours.flatMap((day) => {
      const date = this.nextDateForWeekday(today, day);
      return shifts.map((shift) => ({
        date,
        heureDebut: shift.heureDebut,
        heureFin: shift.heureFin,
        infirmierId: this.resolveDefaultInfirmierIdForDate(date, shift.heureDebut, shift.heureFin)
      }));
    }).sort((left, right) => `${left.date} ${left.heureDebut}`.localeCompare(`${right.date} ${right.heureDebut}`));
  }
  nextDateForWeekday(from, targetDay) {
    const date = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const diff = (targetDay - date.getDay() + 7) % 7;
    date.setDate(date.getDate() + diff);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
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
    this.syncSelectedInfirmierForEdit();
  }
  isEditSeanceDaySelected(date) {
    return this.editSeanceDates.includes(date);
  }
  isEditSeanceJourSelected(jour) {
    return this.editSeanceJours.includes(jour);
  }
  toggleEditSeanceJour(jour) {
    const index = this.editSeanceJours.indexOf(jour);
    if (index >= 0) {
      this.editSeanceJours.splice(index, 1);
    } else {
      this.editSeanceJours.push(jour);
      this.editSeanceJours.sort((a, b) => a - b);
    }
    this.syncEditSeanceDatesFromJours();
  }
  setEditSeanceCreneau(creneau) {
    if (!this.editSeance)
      return;
    const slot = creneau === "MATIN" ? { heureDebut: "07:30", heureFin: "11:30" } : { heureDebut: "13:30", heureFin: "17:30" };
    this.editSeance.heureDebut = slot.heureDebut;
    this.editSeance.heureFin = slot.heureFin;
    this.editSeance.datesSeances = this.editSeance.datesSeances.map((dateSeance) => __spreadValues(__spreadValues({}, dateSeance), slot));
    if (this.editSeanceJours.length)
      this.syncEditSeanceDatesFromJours();
    this.onEditSeanceScheduleChange();
  }
  syncEditSeanceDatesFromJours() {
    if (!this.editSeance)
      return;
    const baseDate = /* @__PURE__ */ new Date();
    this.editSeance.datesSeances = this.editSeanceJours.map((jour) => ({
      date: this.nextDateForWeekday(baseDate, jour),
      heureDebut: this.editSeance.heureDebut,
      heureFin: this.editSeance.heureFin
    })).sort((left, right) => left.date.localeCompare(right.date));
    this.editSeanceDates = this.editSeance.datesSeances.map((dateSeance) => dateSeance.date);
    this.syncSelectedInfirmierForEdit();
  }
  openEditSeance(groupOrRow) {
    const group = "seances" in groupOrRow ? groupOrRow : {
      patientId: groupOrRow.patientId,
      patientNom: groupOrRow.patientNom,
      responsableId: groupOrRow.responsableId,
      infirmierNom: groupOrRow.infirmierNom,
      dates: [groupOrRow.date],
      heureDebut: groupOrRow.heureDebut,
      heureFin: groupOrRow.heureFin,
      statut: groupOrRow.statut,
      seances: [groupOrRow]
    };
    const sourceSeances = [...group.seances].sort((a, b) => this.displayToIsoDate(a.date).localeCompare(this.displayToIsoDate(b.date)));
    const first = sourceSeances[0];
    this.editSeance = __spreadProps(__spreadValues({}, first), {
      datesSeances: Array.from(new Map(sourceSeances.map((s) => [
        this.displayToIsoDate(s.date),
        { date: this.displayToIsoDate(s.date), heureDebut: s.heureDebut, heureFin: s.heureFin }
      ])).values()),
      sourceSeances
    });
    this.editSeanceDates = this.editSeance.datesSeances.map((d) => d.date);
    this.editSeanceJours = [...new Set(sourceSeances.map((row) => row.jourPlanifie ?? this.uiDayFromDisplayDate(row.date)))].sort((a, b) => a - b);
    this.showEditSeanceModal = true;
    this.syncSelectedInfirmierForEdit();
  }
  saveEditSeance() {
    if (!this.editSeance)
      return;
    if (!this.editSeance.datesSeances.length) {
      this.showToast("Veuillez choisir au moins un jour", "warning");
      return;
    }
    const invalid = this.editSeance.datesSeances.find((d) => !d.heureDebut || !d.heureFin || d.heureDebut >= d.heureFin);
    if (invalid) {
      this.showToast(`Horaire invalide pour le ${this.isoToDisplayDate(invalid.date)} : l'heure de fin doit ?tre apr?s l'heure de d?but`, "warning");
      return;
    }
    const sourceByDate = /* @__PURE__ */ new Map();
    const duplicateSources = [];
    for (const source of this.editSeance.sourceSeances) {
      const sourceDate = this.displayToIsoDate(source.date);
      if (sourceByDate.has(sourceDate)) {
        duplicateSources.push(source);
      } else {
        sourceByDate.set(sourceDate, source);
      }
    }
    const currentDates = new Set(this.editSeance.datesSeances.map((d) => d.date));
    const updates = this.editSeance.datesSeances.filter((d) => sourceByDate.has(d.date)).map((d) => {
      const source = sourceByDate.get(d.date);
      const payload = {
        date: d.date,
        heureDebut: d.heureDebut,
        heureFin: d.heureFin,
        infirmierId: this.editSeance.responsableId
      };
      return this.seanceService.update(source.id, payload);
    });
    const creations = this.editSeance.datesSeances.filter((d) => !sourceByDate.has(d.date)).map((d) => this.seanceService.create({
      date: d.date,
      heureDebut: d.heureDebut,
      heureFin: d.heureFin,
      patientId: this.editSeance.patientId,
      utilisateurId: this.authService.utilisateurId,
      infirmierId: this.editSeance.responsableId
    }));
    const deletions = this.editSeance.sourceSeances.filter((s) => !currentDates.has(this.displayToIsoDate(s.date)) || duplicateSources.some((duplicate) => duplicate.id === s.id)).map((s) => this.seanceService.delete(s.id));
    forkJoin([...updates, ...creations, ...deletions]).subscribe({
      next: (results) => {
        const updatedSeances = results.slice(0, updates.length);
        const createdSeances = results.slice(updates.length, updates.length + creations.length);
        const deletedIds = this.editSeance?.sourceSeances.filter((s) => !currentDates.has(this.displayToIsoDate(s.date)) || duplicateSources.some((duplicate) => duplicate.id === s.id)).map((s) => s.id) ?? [];
        this.replaceSeanceRows(updatedSeances, createdSeances, deletedIds);
        this.showEditSeanceModal = false;
        this.editSeance = null;
        this.editSeanceDates = [];
        this.editSeanceJours = [];
        this.showToast("Seances modifiees avec succes", "success");
      },
      error: (err) => this.showToast(err?.error?.message ?? "Impossible de modifier les seances", "error")
    });
  }
  seanceJourLabel(entry) {
    const jour = entry.jourPlanifie ?? this.uiDayFromDisplayDate(entry.date);
    return this.joursLabels[jour] ?? "-";
  }
  seanceCreneauLabel(entry) {
    const creneau = String(entry.creneau ?? "").toUpperCase();
    if (creneau === "MATIN")
      return "Matin";
    if (creneau === "APRES_MIDI" || creneau === "APRES-MIDI")
      return "Apres-midi";
    return entry.heureDebut < "12:00" ? "Matin" : "Apres-midi";
  }
  seanceStatutClass(statut) {
    const v = this.normalizeSeanceStatut(statut);
    return v === "TERMINEE" ? "ok" : v === "EN_COURS" ? "info" : "neutral";
  }
  seanceStatutLabel(statut) {
    const v = this.normalizeSeanceStatut(statut);
    return v === "TERMINEE" ? "Terminee" : v === "EN_COURS" ? "En cours" : v === "ANNULEE" ? "Annulee" : "Planifiee";
  }
  // ------------------------------------------------------------------------------
  //  STATISTIQUES — charts data
  // ------------------------------------------------------------------------------
  get seancesBarChart() {
    const today = /* @__PURE__ */ new Date();
    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const display = this.isoToDisplayDate(iso);
      return {
        label: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"][d.getDay()],
        count: this.seancesAdmin.filter((s) => s.date === display).length,
        pct: 0
      };
    });
    const max = Math.max(...days.map((d) => d.count), 1);
    return days.map((d) => __spreadProps(__spreadValues({}, d), { pct: d.count / max }));
  }
  get userRoleDonut() {
    const total = this.users.length || 1;
    const c = 282.74;
    const roleData = [
      { label: "M\xE9decins", count: this.medecinCount, color: "#00D9C4" },
      { label: "Inf. Maj.", count: this.infMajeurCount, color: "#A78BFA" },
      { label: "Infirmiers", count: this.infirmierCount, color: "#4EA8F8" },
      { label: "Patients", count: this.patientCount, color: "#22c55e" },
      { label: "Admins", count: this.users.filter((u) => u.role === "admin").length, color: "#ff5757" }
    ].filter((r) => r.count > 0);
    let rot = -90;
    return roleData.map((r) => {
      const pct = r.count / total;
      const seg = __spreadProps(__spreadValues({}, r), { dasharray: `${Math.max(0, pct * c - 1).toFixed(1)} ${c}`, rotate: rot });
      rot += pct * 360;
      return seg;
    });
  }
  get tauxOccupation() {
    const today = /* @__PURE__ */ new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (today.getDay() + 6) % 7);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const mondayIso = monday.toISOString().slice(0, 10);
    const sundayIso = sunday.toISOString().slice(0, 10);
    const weekSeances = this.seancesAdmin.filter((s) => {
      const d = this.displayToIsoDate(s.date);
      return d >= mondayIso && d <= sundayIso;
    }).length;
    const capacity = Math.max(1, this.infirmierCount * 2 * 5 * 3);
    return Math.min(100, Math.round(weekSeances / capacity * 100));
  }
  get seancesThisWeek() {
    const today = /* @__PURE__ */ new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (today.getDay() + 6) % 7);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const mondayIso = monday.toISOString().slice(0, 10);
    const sundayIso = sunday.toISOString().slice(0, 10);
    return this.seancesAdmin.filter((s) => {
      const d = this.displayToIsoDate(s.date);
      return d >= mondayIso && d <= sundayIso;
    }).length;
  }
  get newPatientsThisMonth() {
    const now = /* @__PURE__ */ new Date();
    const monthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    return this.users.filter((u) => u.role === "patient" && (u.dateCreation ?? "").startsWith(monthStr.split("-").reverse().join("/"))).length;
  }
  exportStatsPdf() {
    const html = this.buildStatsPdfHtml();
    const w = window.open("", "_blank", "width=900,height=700,toolbar=0,menubar=0");
    if (!w) {
      this.showToast("Autorisez les popups pour exporter en PDF.", "warning");
      return;
    }
    w.document.open();
    w.document.write(html);
    w.document.close();
    setTimeout(() => {
      w.focus();
      w.print();
    }, 600);
    this.logAction("EXPORT", "Statistiques", "Export PDF statistiques");
  }
  buildStatsPdfHtml() {
    const now = (/* @__PURE__ */ new Date()).toLocaleString("fr-FR");
    const roleRows = this.userRoleDonut.map((s) => `<tr><td>${s.label}</td><td>${s.count}</td><td>${(s.count / (this.users.length || 1) * 100).toFixed(1)}%</td></tr>`).join("");
    const barRows = this.seancesBarChart.map((b) => `<tr><td>${b.label}</td><td>${b.count}</td></tr>`).join("");
    return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Statistiques DialySys</title>
<style>
@page{margin:15mm 20mm;size:A4}*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
body{color:#1a1a2e;font-size:12px}
h1{font-size:20px;color:#00857a;border-bottom:2px solid #00857a;padding-bottom:8px;margin-bottom:16px}
h2{font-size:14px;color:#334155;margin:16px 0 8px;border-left:3px solid #00D9C4;padding-left:8px}
table{width:100%;border-collapse:collapse;margin-bottom:16px}
th{background:#f0fafa;text-align:left;padding:6px 10px;font-size:11px;border-bottom:2px solid #00D9C4}
td{padding:5px 10px;border-bottom:1px solid #e2e8f0;font-size:11px}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}
.kpi{background:#f8fafc;border-radius:8px;padding:12px;text-align:center;border:1px solid #e2e8f0}
.kpi-val{font-size:24px;font-weight:bold;color:#00857a}
.kpi-label{font-size:10px;color:#64748b;margin-top:2px}
.footer{text-align:right;font-size:10px;color:#94a3b8;margin-top:20px}
</style></head><body>
<h1>Tableau de Bord \u2014 Statistiques DialySys</h1>
<div class="kpi-grid">
<div class="kpi"><div class="kpi-val">${this.totalUsers}</div><div class="kpi-label">Utilisateurs total</div></div>
<div class="kpi"><div class="kpi-val">${this.activeUsers}</div><div class="kpi-label">Utilisateurs actifs</div></div>
<div class="kpi"><div class="kpi-val">${this.seancesThisWeek}</div><div class="kpi-label">S\xE9ances cette semaine</div></div>
<div class="kpi"><div class="kpi-val">${this.tauxOccupation}%</div><div class="kpi-label">Taux occupation</div></div>
</div>
<h2>R\xE9partition par r\xF4le</h2>
<table><thead><tr><th>R\xF4le</th><th>Nombre</th><th>%</th></tr></thead><tbody>${roleRows}</tbody></table>
<h2>S\xE9ances \u2014 7 derniers jours</h2>
<table><thead><tr><th>Jour</th><th>S\xE9ances</th></tr></thead><tbody>${barRows}</tbody></table>
<div class="footer">Export\xE9 le ${now} \u2014 DialySys Admin</div>
</body></html>`;
  }
  // ------------------------------------------------------------------------------
  //  AUDIT LOG
  // ------------------------------------------------------------------------------
  auditEntries = [];
  auditFilterUser = "";
  auditFilterAction = "";
  auditFilterDate = "";
  auditPage = 1;
  auditPageSize = 15;
  loadAuditEntries() {
    this.auditEntries = this.auditService.getAll();
  }
  get filteredAuditEntries() {
    const q = this.auditFilterUser.toLowerCase().trim();
    return this.auditEntries.filter((e) => (!q || e.utilisateur.toLowerCase().includes(q) || e.details.toLowerCase().includes(q) || e.entite.toLowerCase().includes(q)) && (!this.auditFilterAction || e.action === this.auditFilterAction) && (!this.auditFilterDate || e.timestamp.startsWith(this.auditFilterDate)));
  }
  get paginatedAuditEntries() {
    const items = this.filteredAuditEntries;
    const total = Math.max(1, Math.ceil(items.length / this.auditPageSize));
    if (this.auditPage > total)
      this.auditPage = total;
    const start = (this.auditPage - 1) * this.auditPageSize;
    return items.slice(start, start + this.auditPageSize);
  }
  get totalAuditPages() {
    return Math.max(1, Math.ceil(this.filteredAuditEntries.length / this.auditPageSize));
  }
  clearAuditLog() {
    if (!this.confirmDeletion("Effacer tout l'historique des actions ?"))
      return;
    this.auditService.clear();
    this.auditEntries = [];
    this.showToast("Historique effac\xE9", "info");
  }
  exportAuditPdf() {
    const entries = this.filteredAuditEntries.slice(0, 200);
    const rows = entries.map((e) => `<tr>
        <td>${new Date(e.timestamp).toLocaleString("fr-FR")}</td>
        <td>${e.utilisateur}</td>
        <td>${e.role}</td>
        <td class="action action-${e.action.toLowerCase()}">${e.action}</td>
        <td>${e.entite}</td>
        <td>${e.details}</td>
        <td class="${e.statut}">${e.statut === "success" ? "OK" : "Erreur"}</td>
      </tr>`).join("");
    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Journal des Activit\xE9s</title>
<style>
@page{margin:10mm 15mm;size:A4 landscape}*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif;font-size:10px}
body{color:#1a1a2e}
h1{font-size:16px;color:#00857a;border-bottom:2px solid #00857a;padding-bottom:6px;margin-bottom:12px}
table{width:100%;border-collapse:collapse}
th{background:#f0fafa;text-align:left;padding:5px 8px;font-size:9px;border-bottom:2px solid #00D9C4;white-space:nowrap}
td{padding:4px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top}
tr:nth-child(even) td{background:#f8fafc}
.action{font-weight:bold}
.action-creation{color:#22c55e}.action-modification{color:#f59e0b}.action-suppression{color:#ef4444}
.action-connexion{color:#4EA8F8}.action-deconnexion{color:#94a3b8}.action-export{color:#A78BFA}
.success{color:#22c55e}.error{color:#ef4444}
.footer{text-align:right;font-size:9px;color:#94a3b8;margin-top:12px}
</style></head><body>
<h1>Journal des Activit\xE9s \u2014 DialySys</h1>
<table>
<thead><tr><th>Horodatage</th><th>Utilisateur</th><th>R\xF4le</th><th>Action</th><th>Entit\xE9</th><th>D\xE9tails</th><th>Statut</th></tr></thead>
<tbody>${rows}</tbody>
</table>
<div class="footer">Export\xE9 le ${(/* @__PURE__ */ new Date()).toLocaleString("fr-FR")} \u2014 ${entries.length} entr\xE9e(s)</div>
</body></html>`;
    const w = window.open("", "_blank", "width=1100,height=700,toolbar=0,menubar=0");
    if (!w) {
      this.showToast("Autorisez les popups pour exporter.", "warning");
      return;
    }
    w.document.open();
    w.document.write(html);
    w.document.close();
    setTimeout(() => {
      w.focus();
      w.print();
    }, 600);
    this.logAction("EXPORT", "Audit", `Export PDF journal (${entries.length} entr\xE9es)`);
  }
  auditActionLabel(action) {
    const labels = {
      CONNEXION: "Connexion",
      CREATION: "Cr\xE9ation",
      MODIFICATION: "Modification",
      SUPPRESSION: "Suppression",
      EXPORT: "Export",
      DECONNEXION: "D\xE9connexion"
    };
    return labels[action] ?? action;
  }
  auditActionClass(action) {
    const classes = {
      CONNEXION: "audit-action--connexion",
      CREATION: "audit-action--creation",
      MODIFICATION: "audit-action--modification",
      SUPPRESSION: "audit-action--suppression",
      EXPORT: "audit-action--export",
      DECONNEXION: "audit-action--deconnexion"
    };
    return classes[action] ?? "";
  }
  fmtAuditDate(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime()))
      return iso;
    return d.toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }
  logAction(action, entite, details, statut = "success") {
    const user = this.authService.getUtilisateur?.() ?? null;
    const username = user ? `${user.prenom} ${user.nom}` : "Admin";
    this.auditService.log(username, "ADMIN", action, entite, details, statut);
  }
  // ------------------------------------------------------------------------------
  //  KPI
  // ------------------------------------------------------------------------------
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
  get patientCount() {
    return this.users.filter((u) => u.role === "patient").length;
  }
  get suspendedCount() {
    return this.users.filter((u) => u.statut === "suspendu").length;
  }
  // ------------------------------------------------------------------------------
  //  HELPERS UI
  // ------------------------------------------------------------------------------
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
    return { admin: "Admins", medecin: "Medecins", "infirmier-majeur": "Inf. Majeurs", infirmier: "Infirmiers", patient: "Patients" }[role];
  }
  get activeTabTitle() {
    return { profils: "Gestion des Profils", seances: "Planification des S\xE9ances", statistiques: "Statistiques & Indicateurs", audit: "Journal des Activit\xE9s" }[this.activeTab];
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
  // ------------------------------------------------------------------------------
  //  PRIVATE HELPERS
  // ------------------------------------------------------------------------------
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
      cin: dto.cin ?? null
    };
  }
  mapSeanceToRow(dto) {
    const infirmier = dto.infirmier;
    const infirmierNom = infirmier ? `${infirmier.prenom} ${infirmier.nom}` : "\u2014";
    const creneau = dto.creneau ?? "MATIN";
    const heureDebut = creneau === "APRES_MIDI" ? "13:30" : "07:30";
    const heureFin = creneau === "APRES_MIDI" ? "17:30" : "11:30";
    return {
      id: dto.id,
      patientId: dto.patient.id,
      patientNom: `${dto.patient.prenom} ${dto.patient.nom}`,
      responsableId: infirmier?.id ?? null,
      infirmierNom,
      date: this.isoToDisplayDate(String(dto.date)),
      heureDebut,
      heureFin,
      statut: "PLANIFIEE",
      jourPlanifie: dto.jourPlanifie ?? this.uiDayFromIsoDate(String(dto.date)),
      creneau
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
      default:
        return "patient";
    }
  }
  toBackendRole(role) {
    return role === "admin" ? "ADMIN" : role === "medecin" ? "MEDECIN" : role === "infirmier-majeur" ? "INFIRMIER_MAJEUR" : role === "infirmier" ? "INFIRMIER" : "PATIENT";
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
  uiDayFromDisplayDate(value) {
    return this.uiDayFromIsoDate(this.displayToIsoDate(value));
  }
  uiDayFromIsoDate(value) {
    const date = /* @__PURE__ */ new Date(`${value.slice(0, 10)}T00:00:00`);
    return Number.isNaN(date.getTime()) ? 0 : date.getDay();
  }
  creneauFromTime(heureDebut, heureFin) {
    if (heureDebut === "07:30" && heureFin === "11:30")
      return "MATIN";
    if (heureDebut === "13:30" && heureFin === "17:30")
      return "APRES_MIDI";
    return heureDebut < "12:00" ? "MATIN" : "APRES_MIDI";
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
  syncSelectedInfirmier() {
    if (!this.newSeance.infirmierId)
      return;
    const selectedId = Number(this.newSeance.infirmierId);
    if (!this.availableInfirmiers.some((user) => user.id === selectedId))
      this.newSeance.infirmierId = "";
  }
  syncSelectedInfirmiersByDate() {
    this.newSeance.datesSeances = this.newSeance.datesSeances.map((dateSeance) => {
      const selectedId = dateSeance.infirmierId ? Number(dateSeance.infirmierId) : null;
      const candidates = this.getAvailableInfirmiersForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);
      if (selectedId && candidates.some((user) => user.id === selectedId)) {
        return dateSeance;
      }
      return __spreadProps(__spreadValues({}, dateSeance), {
        infirmierId: this.resolveDefaultInfirmierIdForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin)
      });
    });
  }
  syncSelectedInfirmierForEdit() {
    if (!this.editSeance?.responsableId)
      return;
    const selectedId = Number(this.editSeance.responsableId);
    if (!this.availableInfirmiersForEdit.some((user) => user.id === selectedId))
      this.editSeance.responsableId = this.availableInfirmiersForEdit[0]?.id ?? null;
  }
  resolveAvailableInfirmierId() {
    const selectedId = this.newSeance.infirmierId ? Number(this.newSeance.infirmierId) : null;
    if (selectedId && this.availableInfirmiers.some((user) => user.id === selectedId))
      return selectedId;
    return this.availableInfirmiers[0]?.id ?? null;
  }
  resolveAvailableInfirmierIdForDate(dateSeance) {
    const selectedId = dateSeance.infirmierId ? Number(dateSeance.infirmierId) : null;
    const candidates = this.getAvailableInfirmiersForDate(dateSeance.date, dateSeance.heureDebut, dateSeance.heureFin);
    if (selectedId && candidates.some((user) => user.id === selectedId))
      return selectedId;
    return candidates[0]?.id ?? null;
  }
  resolveDefaultInfirmierIdForDate(date, start, end) {
    const globalSelectedId = this.newSeance.infirmierId ? Number(this.newSeance.infirmierId) : null;
    const candidates = this.getAvailableInfirmiersForDate(date, start, end);
    if (globalSelectedId && candidates.some((user) => user.id === globalSelectedId))
      return globalSelectedId;
    return candidates[0]?.id ?? null;
  }
  getActiveNewSeanceDateEntry() {
    if (!this.newSeance.datesSeances.length)
      return null;
    if (this.newSeanceActiveDate) {
      return this.newSeance.datesSeances.find((d) => d.date === this.newSeanceActiveDate) ?? this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1];
    }
    return this.newSeance.datesSeances[this.newSeance.datesSeances.length - 1];
  }
  resolveAvailableInfirmierIdForEdit() {
    const selectedId = this.editSeance?.responsableId ? Number(this.editSeance.responsableId) : null;
    if (selectedId && this.availableInfirmiersForEdit.some((user) => user.id === selectedId))
      return selectedId;
    return this.availableInfirmiersForEdit[0]?.id ?? null;
  }
  isInfirmierAvailableForSelection(userId) {
    const selectedDate = this.getActiveNewSeanceDateEntry();
    if (!selectedDate)
      return false;
    return !this.hasSeanceConflict(userId, selectedDate.date, selectedDate.heureDebut, selectedDate.heureFin);
  }
  isInfirmierAvailableForEdit(userId) {
    if (!this.editSeance)
      return false;
    if (!this.editSeance.datesSeances.length)
      return false;
    return this.editSeance.datesSeances.every((ds) => {
      const source = this.editSeance.sourceSeances.find((s) => this.displayToIsoDate(s.date) === ds.date);
      return !this.hasSeanceConflict(userId, ds.date, ds.heureDebut, ds.heureFin, source?.id);
    });
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
  onNewSeanceInfirmierChange() {
    if (this.newSeance.infirmierId) {
      const id = Number(this.newSeance.infirmierId);
      this.newSeance.datesSeances = this.newSeance.datesSeances.map((d) => __spreadProps(__spreadValues({}, d), { infirmierId: id }));
    }
    this.onNewSeanceScheduleChange();
  }
  onNewSeanceScheduleChange() {
    this.syncSelectedInfirmier();
    this.syncSelectedInfirmiersByDate();
  }
  onEditSeanceScheduleChange() {
    this.syncSelectedInfirmierForEdit();
  }
  resetNewSeanceForm() {
    this.newSeance = { patientId: "", infirmierId: "", dates: [], datesSeances: [], heureDebut: "07:30", heureFin: "11:30", jours: [], abordFAV: false, abordCatheter: false, shiftMatin: false, shiftApresMidi: false };
    this.newSeanceActiveDate = null;
  }
  todayLocalIso() {
    const now = /* @__PURE__ */ new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UtilisateurService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(AdminSettingsService), \u0275\u0275directiveInject(RolePermissionService), \u0275\u0275directiveInject(AuditService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], viewQuery: function AdminComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.adminMainRef = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 83, vars: 33, consts: [["adminMain", ""], [1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "wz-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "light", "click", 4, "ngIf"], [1, "admin-shell"], [1, "sidebar-backdrop", 3, "click"], [1, "sidebar"], [1, "sidebar__logo"], ["width", "28", "height", "28", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "sidebar__nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "material-icons"], [1, "nav-badge"], [1, "nav-section-label", 2, "margin-top", "12px"], [1, "sidebar__user"], [1, "user-avatar", 2, "background", "rgba(255,87,87,.12)", "border-color", "rgba(255,87,87,.3)", "color", "var(--c-red)"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "logout-btn", 3, "click"], [1, "admin-main"], [1, "topbar"], [1, "topbar__left"], [1, "topbar__right"], [1, "hamburger-btn", 3, "click"], ["class", "btn-sm-primary", 3, "click", 4, "ngIf"], ["class", "btn-sm-primary", "style", "background:var(--c-purple)", 3, "click", 4, "ngIf"], [1, "icon-btn", 3, "click", "title"], [1, "icon-btn", 3, "click"], ["class", "kpi-row", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "toast-close"], [1, "wz-overlay", 3, "click"], [1, "wz-panel", 3, "click"], [1, "wz-head"], [1, "wz-head__icon"], [1, "wz-head__text"], [1, "wz-head__title"], [1, "wz-head__sub"], [1, "wz-close-btn", 3, "click"], [1, "wz-stepper"], [1, "wz-step"], [1, "wz-step__dot"], ["class", "material-icons", 4, "ngIf"], [1, "wz-step__label"], [1, "wz-step__line"], [1, "wz-body"], ["class", "wz-stage", 4, "ngIf"], [1, "wz-footer"], [1, "wz-footer__left"], ["class", "btn-outline-sm", 3, "click", 4, "ngIf"], [1, "wz-footer__center"], [1, "wz-step-counter"], [1, "wz-footer__right"], [1, "btn-sm-primary", 3, "click", "disabled"], [1, "wz-stage"], [1, "wz-hint"], [1, "wz-role-grid"], ["class", "wz-role-card", 3, "wz-role-card--selected", "click", 4, "ngFor", "ngForOf"], [1, "wz-role-card", 3, "click"], [1, "wz-role-card__accent"], [1, "wz-role-card__ico"], [1, "wz-role-card__body"], [1, "wz-role-card__name"], [1, "wz-role-card__desc"], ["class", "wz-role-card__check", 3, "color", 4, "ngIf"], [1, "wz-role-card__check"], ["class", "wz-role-badge", 3, "background", "border-color", "color", 4, "ngIf"], [1, "wz-role-badge"], [1, "wz-section-title"], [1, "wz-form-row"], [1, "wz-field"], [1, "req"], ["type", "text", "placeholder", "Nom de famille", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["type", "text", "placeholder", "Pr\xE9nom", 3, "ngModelChange", "ngModel"], [1, "wz-section-title", 2, "margin-top", "14px"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "wz-field", "wz-field--black"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Homme"], ["value", "Femme"], ["type", "text", "placeholder", "Ex: AB123456", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "0600000000", "inputmode", "numeric", "maxlength", "10", 3, "ngModelChange", "ngModel"], [1, "field-error"], [1, "wz-field", "wz-field--readonly"], ["type", "text", "disabled", "", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "prenom.nom@dialysys.dz", 3, "ngModelChange", "ngModel"], ["value", "H\xE9modialyse"], ["value", "Permanence"], ["value", "Laboratoire"], ["class", "wz-form-row", 4, "ngIf"], [1, "wz-field", "wz-field--full"], ["value", "N\xE9phrologie"], ["value", "G\xE9n\xE9raliste"], [1, "wz-auth-note"], [1, "wz-recap"], [1, "wz-recap__title"], [1, "wz-recap__grid"], [1, "wz-recap__item"], [1, "wz-recap__key"], [1, "wz-recap__val"], [1, "btn-outline-sm", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", "wizard-panel", "wizard-panel--lg", 3, "click"], [1, "wizard-header"], [1, "wizard-header__icon"], [2, "font-size", "17px", "font-weight", "700"], [1, "wizard-header__text"], [2, "margin-right", "8px"], [1, "modal-close-btn", 3, "click"], [1, "wizard-body", "wizard-body--form"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "change", "ngModel"], ["value", "actif"], ["value", "inactif"], ["value", "suspendu"], ["type", "text", "disabled", "", 3, "value"], [1, "toggle-row"], [1, "toggle-switch"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "toggle-track"], [1, "toggle-label"], [1, "wizard-footer"], [1, "wizard-footer__danger"], [1, "btn-delete", 3, "click"], ["class", "btn-outline-sm btn-warn", 3, "click", 4, "ngIf"], [1, "wizard-footer__actions"], [1, "btn-sm-primary", 3, "click"], [3, "value"], [1, "btn-outline-sm", "btn-warn", 3, "click"], [1, "modal-panel", "wizard-panel", 3, "click"], [1, "wizard-header__icon", 2, "background", "rgba(48,209,88,.12)"], [1, "material-icons", 2, "color", "var(--c-green)", "font-size", "20px"], [1, "wizard-section-label"], [1, "form-grid"], [1, "form-field"], [1, "form-field", "form-field--black"], [1, "wizard-footer__selected"], [1, "material-icons", 2, "color", "var(--c-green)"], [1, "modal-panel", "modal-panel--new-user", 3, "click"], [1, "modal-header", "modal-header--simple"], [1, "material-icons", 2, "color", "var(--c-teal)", "font-size", "22px"], [1, "modal-body"], [1, "form-section-label"], ["type", "text", "placeholder", "Ex : INF-2025-060", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "prenom.nom@dialysys.ma", 3, "ngModelChange", "ngModel"], [1, "form-section-label", 2, "margin-top", "8px"], ["type", "text", "placeholder", "Ex : p.nom", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Auto-g\xE9n\xE9r\xE9 si vide", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "G\xE9n\xE9r\xE9 automatiquement si vide", "minlength", "8", 3, "ngModelChange", "ngModel"], [1, "form-field", "form-field--full"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], [1, "modal-panel", "modal-panel--settings", 3, "click"], [1, "settings-group"], [1, "settings-group-title"], [1, "settings-row"], [1, "settings-row__label"], [1, "form-field", 2, "margin", "0", "min-width", "120px"], [1, "form-field", 2, "margin", "0", "min-width", "130px"], ["value", "fr"], ["value", "ar"], ["value", "en"], ["value", "csv"], ["value", "xlsx"], ["value", "pdf"], [1, "modal-panel", "modal-panel--new-patient", 3, "click"], [1, "material-icons", 2, "color", "var(--c-green)", "font-size", "22px"], ["class", "modal-body", 4, "ngIf"], ["type", "text", "disabled", "", 2, "opacity", ".6", 3, "value"], [1, "form-field", "form-field--white"], [1, "modal-panel", "modal-panel--edit-horaire", 3, "click"], [1, "horaire-form-layout"], [1, "horaire-form-left"], [1, "seance-block"], [1, "seance-block__title"], [1, "seance-options-grid"], [1, "seance-option-col"], [1, "seance-check"], ["type", "radio", "name", "editSeanceCreneau", 3, "change", "checked"], [1, "seance-days-row"], ["type", "button", "class", "day-chip", 3, "day-chip--active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "day-chip", 3, "click"], [1, "btn-sm-primary", 2, "background", "var(--c-purple)", 3, "click"], [1, "kpi-row"], [1, "kpi-card", "kpi-card--filter", "kpi-card--teal", 3, "click"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-lbl"], ["class", "kpi-filter-dot", 4, "ngIf"], [1, "kpi-card", "kpi-card--filter", "kpi-card--purple", 3, "click"], [1, "kpi-card", "kpi-card--filter", "kpi-card--blue", 3, "click"], [1, "kpi-card", "kpi-card--filter", "kpi-card--green", 3, "click"], [1, "kpi-card", "kpi-card--filter", "kpi-card--cyan", 3, "click"], [1, "kpi-filter-dot"], [1, "panel", "panel--full"], [1, "panel__head"], ["class", "kpi-active-badge", 4, "ngIf"], [1, "panel__actions"], [1, "filter-select", 3, "ngModelChange", "ngModel"], [1, "panel__footer"], [1, "kpi-active-badge"], [1, "kpi-badge-clear", 3, "click"], [1, "table-search-bar"], ["type", "text", "placeholder", "Rechercher par nom, pr\xE9nom, matricule, email", 3, "ngModelChange", "ngModel"], ["class", "table-search-clear", 3, "click", 4, "ngIf"], [1, "table-scroll"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "pagination-bar", 4, "ngIf"], [1, "table-search-clear", 3, "click"], [1, "user-cell"], [1, "avatar-role"], [1, "mono"], [1, "row-actions"], ["title", "Modifier", 1, "row-btn", 3, "click"], ["title", "Supprimer", 1, "row-btn", "row-btn--warn", 3, "click"], [1, "row-btn", 3, "click", "ngClass", "title"], ["colspan", "6", 1, "empty-row"], [1, "pagination-bar"], [1, "pg-rows-info"], [1, "pg-nav"], ["title", "Premi\xE8re page", 1, "pg-arrow", 3, "click", "disabled"], ["title", "Pr\xE9c\xE9dent", 1, "pg-arrow", 3, "click", "disabled"], [1, "pg-label"], ["title", "Suivant", 1, "pg-arrow", 3, "click", "disabled"], ["title", "Derni\xE8re page", 1, "pg-arrow", 3, "click", "disabled"], ["type", "text", "placeholder", "Rechercher un patient par nom, pr\xE9nom, ID ou groupe sanguin", 3, "ngModelChange", "ngModel"], [1, "pg-arrow", 3, "click", "disabled"], [1, "action-form-card"], [1, "action-form-title"], [1, "seance-form-grid"], ["type", "radio", "name", "newSeanceCreneau", 3, "change", "checked"], [1, "action-form-footer"], ["type", "text", "placeholder", "Rechercher par patient, jour ou cr\xE9neau\u2026", 3, "ngModelChange", "ngModel"], [2, "text-align", "center"], [1, "horaire-chips-row", 2, "justify-content", "center"], ["class", "horaire-chip seance-chip", 4, "ngFor", "ngForOf"], ["title", "Supprimer tout", 1, "row-btn", "row-btn--warn", 3, "click"], [1, "horaire-chip", "seance-chip"], [1, "horaire-chip__date"], [1, "horaire-chip__time"], ["colspan", "4", 1, "empty-row"], [1, "kpi-card", "kpi-card--teal"], [1, "kpi-card", "kpi-card--blue"], [1, "kpi-card", "kpi-card--green"], [1, "kpi-card", "kpi-card--purple"], [1, "stats-grid"], [1, "panel", "stat-panel"], [1, "chart-area"], ["viewBox", "0 0 350 140", "preserveAspectRatio", "xMidYMid meet", 1, "bar-chart-svg"], ["x1", "10", "y1", "110", "x2", "340", "y2", "110", "stroke", "var(--c-border)", "stroke-width", "1"], [1, "chart-area", "chart-area--donut"], ["viewBox", "0 0 120 120", 1, "donut-svg"], ["cx", "60", "cy", "60", "r", "45", "fill", "none", "stroke", "var(--c-border)", "stroke-width", "20"], ["cx", "60", "cy", "60", "r", "45", "fill", "none", "stroke-width", "20", 4, "ngFor", "ngForOf"], ["x", "60", "y", "55", "text-anchor", "middle", "font-size", "18", "font-weight", "bold", "fill", "var(--c-text-1)"], ["x", "60", "y", "68", "text-anchor", "middle", "font-size", "8", "fill", "var(--c-text-3)"], [1, "donut-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "chart-area", "chart-area--gauge"], ["viewBox", "0 0 200 110", 1, "gauge-svg"], ["d", "M 20 100 A 80 80 0 0 1 180 100", "fill", "none", "stroke", "var(--c-border)", "stroke-width", "18", "stroke-linecap", "round"], ["d", "M 20 100 A 80 80 0 0 1 180 100", "fill", "none", "stroke", "var(--c-teal)", "stroke-width", "18", "stroke-linecap", "round", 2, "transform-origin", "100px 100px"], ["x", "100", "y", "88", "text-anchor", "middle", "font-size", "28", "font-weight", "bold", "fill", "var(--c-teal)"], ["x", "100", "y", "105", "text-anchor", "middle", "font-size", "9", "fill", "var(--c-text-3)"], ["x", "22", "y", "115", "font-size", "8", "fill", "var(--c-text-3)"], ["x", "172", "y", "115", "font-size", "8", "fill", "var(--c-text-3)"], [1, "gauge-info"], [1, "gauge-row"], ["rx", "4", "fill", "var(--c-teal)", "opacity", "0.85"], ["text-anchor", "middle", "font-size", "9", "fill", "var(--c-text-3)"], ["text-anchor", "middle", "font-size", "9", "fill", "var(--c-text-2)", 4, "ngIf"], ["text-anchor", "middle", "font-size", "9", "fill", "var(--c-text-2)"], ["cx", "60", "cy", "60", "r", "45", "fill", "none", "stroke-width", "20"], [1, "legend-item"], [1, "legend-dot"], [1, "legend-label"], [1, "legend-val"], [1, "panel-actions"], ["type", "text", "placeholder", "Rechercher utilisateur / d\xE9tail...", 1, "search-box", 2, "width", "220px", 3, "ngModelChange", "ngModel"], ["value", "CONNEXION"], ["value", "CREATION"], ["value", "MODIFICATION"], ["value", "SUPPRESSION"], ["value", "EXPORT"], ["value", "DECONNEXION"], ["type", "date", "title", "Filtrer par date", 1, "filter-date", 3, "ngModelChange", "ngModel"], [1, "btn-outline-sm", 2, "color", "var(--c-red)", "border-color", "var(--c-red)", 3, "click"], ["class", "state-box", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [1, "state-box"], [1, "table-container"], [1, "audit-ts"], [1, "role-badge"], [1, "audit-action"], [1, "audit-details"], [1, "status-dot"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AdminComponent_div_1_Template, 8, 5, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, AdminComponent_div_2_Template, 49, 39, "div", 3)(3, AdminComponent_div_3_Template, 113, 29, "div", 4)(4, AdminComponent_div_4_Template, 63, 6, "div", 4)(5, AdminComponent_div_5_Template, 96, 15, "div", 4)(6, AdminComponent_div_6_Template, 113, 13, "div", 4)(7, AdminComponent_div_7_Template, 11, 3, "div", 4)(8, AdminComponent_div_8_Template, 11, 3, "div", 4);
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
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 18);
      \u0275\u0275text(37, "Analytique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 15);
      \u0275\u0275listener("click", function AdminComponent_Template_a_click_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("statistiques"));
      });
      \u0275\u0275elementStart(39, "span", 16);
      \u0275\u0275text(40, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Statistiques");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 15);
      \u0275\u0275listener("click", function AdminComponent_Template_a_click_43_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setActiveTab("audit"));
      });
      \u0275\u0275elementStart(44, "span", 16);
      \u0275\u0275text(45, "policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "Journal des Activit\xE9s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 19)(49, "div", 20);
      \u0275\u0275text(50, "AD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 21)(52, "span", 22);
      \u0275\u0275text(53, "Administrateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 23);
      \u0275\u0275text(55, "Acc\xE8s total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "button", 24);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_56_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(57, "span", 16);
      \u0275\u0275text(58, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div", 25, 0)(61, "header", 26)(62, "div", 27)(63, "h1");
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 28)(66, "button", 29);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sidebarOpen = !ctx.sidebarOpen);
      });
      \u0275\u0275elementStart(67, "span", 16);
      \u0275\u0275text(68, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(69, AdminComponent_button_69_Template, 4, 1, "button", 30)(70, AdminComponent_button_70_Template, 4, 0, "button", 31)(71, AdminComponent_button_71_Template, 4, 0, "button", 31);
      \u0275\u0275elementStart(72, "button", 32);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_72_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleTheme());
      });
      \u0275\u0275elementStart(73, "span", 16);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "button", 33);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_75_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showSettingsModal = true);
      });
      \u0275\u0275elementStart(76, "span", 16);
      \u0275\u0275text(77, "settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(78, AdminComponent_div_78_Template, 50, 19, "div", 34)(79, AdminComponent_ng_container_79_Template, 24, 7, "ng-container", 35)(80, AdminComponent_ng_container_80_Template, 69, 13, "ng-container", 35)(81, AdminComponent_ng_container_81_Template, 99, 14, "ng-container", 35)(82, AdminComponent_ng_container_82_Template, 34, 7, "ng-container", 35);
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
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "statistiques");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab === "audit");
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate(ctx.activeTabTitle);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.activeTab === "profils");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "statistiques");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "audit");
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
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "statistiques");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "audit");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinLengthValidator, MaxLengthValidator, NgModel], styles: [`@charset "UTF-8";



.admin-shell[_ngcontent-%COMP%] {
  --c-surface-1: #06090F;
  --c-surface-2: #0B111E;
  --c-surface-3: #0F1729;
  --c-border: rgba(0,217,196,.10);
  --c-text-1: #E0EAF8;
  --c-text-2: #7A8EAA;
  --c-text-3: #3A4E66;
  --c-teal: #00D9C4;
  --c-teal-soft: rgba(0,217,196,.12);
  --c-blue: #4EA8F8;
  --c-blue-soft: rgba(78,168,248,.12);
  --c-green: #30D158;
  --c-amber: #F5A623;
  --c-amber-soft: rgba(245,166,35,.12);
  --c-red: #FF5757;
  --c-purple: #A78BFA;
  --c-purple-soft:rgba(167,139,250,.12);
  --font: "Figtree", sans-serif;
}
.admin-shell.light[_ngcontent-%COMP%] {
  --c-surface-1: #F0F4FA;
  --c-surface-2: #FFFFFF;
  --c-surface-3: #E8EEF8;
  --c-border: rgba(0,0,0,.10);
  --c-text-1: #0D1B2E;
  --c-text-2: #4A5E78;
  --c-text-3: #8A9BB0;
  --c-teal: #009E8E;
  --c-teal-soft: rgba(0,158,142,.10);
  --c-blue: #2075CC;
  --c-blue-soft: rgba(32,117,204,.10);
  --c-green: #1A9E3F;
  --c-amber: #C47D00;
  --c-amber-soft: rgba(196,125,0,.10);
  --c-red: #D93030;
  --c-purple: #6D4FC2;
  --c-purple-soft:rgba(109,79,194,.10);
  --c-bg: #F0F4FA;
  --c-surface: #FFFFFF;
  --c-card: #FFFFFF;
  --c-card-hi: #F4F6FA;
  --c-border-hi: rgba(0,0,0,.15);
  --c-text: #0D1B2E;
}
.admin-shell[_ngcontent-%COMP%] {
  display: flex;
  height: 100vh;
  background: var(--c-surface-1);
  color: var(--c-text-1);
  font-family: var(--font);
  overflow: hidden;
}
.admin-shell[_ngcontent-%COMP%]    > .sidebar-backdrop[_ngcontent-%COMP%] {
  display: none;
  pointer-events: none;
}
.admin-shell.sidebar-open[_ngcontent-%COMP%]    > .sidebar-backdrop[_ngcontent-%COMP%] {
  display: block;
  position: fixed;
  inset: 0;
  z-index: 59;
  background: rgba(0, 0, 0, 0.45);
  pointer-events: auto;
}
.admin-shell[_ngcontent-%COMP%]    > .sidebar[_ngcontent-%COMP%] {
  position: relative;
  z-index: 60;
}
.admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {
  cursor: pointer !important;
  pointer-events: auto !important;
}
.admin-main[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 28px 28px;
}
.topbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 16px;
  border-bottom: 1px solid var(--c-border);
  margin-bottom: 20px;
  gap: 16px;
}
.topbar__left[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.topbar__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: var(--c-text-1);
}
.topbar__date[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--c-text-3);
}
.topbar__right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
.admin-shell.light[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%] {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  padding: 14px 20px;
}
.admin-shell.light[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]   .topbar__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  color: #111111 !important;
  font-weight: 700;
}
.admin-shell.light[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]   .topbar__date[_ngcontent-%COMP%] {
  color: #666666;
}
.kpi-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
}
.kpi-card[_ngcontent-%COMP%] {
  flex: 1;
  background: var(--c-surface-2);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.kpi-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(255, 255, 255, 0.15);
}
.kpi-card--filter[_ngcontent-%COMP%] {
  cursor: pointer;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  overflow: hidden;
  transition:
    transform 0.15s,
    box-shadow 0.2s,
    border-color 0.2s;
}
.kpi-card--filter[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 12px 12px 0 0;
  opacity: 0;
  transition: opacity 0.2s;
}
.kpi-card--filter[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
}
.kpi-card--filter[_ngcontent-%COMP%]:hover::before {
  opacity: 1;
}
.kpi-card--filter.kpi-card--active[_ngcontent-%COMP%] {
  transform: translateY(-2px);
}
.kpi-card--filter.kpi-card--active[_ngcontent-%COMP%]::before {
  opacity: 1;
}
.kpi-card--filter.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {
  font-size: 24px;
}
.kpi-card--teal[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      #00D9C4,
      #00f0d8);
}
.kpi-card--teal[_ngcontent-%COMP%]:hover, 
.kpi-card--teal.kpi-card--active[_ngcontent-%COMP%] {
  border-color: rgba(0, 217, 196, 0.5);
  box-shadow: 0 4px 20px rgba(0, 217, 196, 0.2), 0 0 0 1px rgba(0, 217, 196, 0.2);
  background:
    linear-gradient(
      135deg,
      rgba(0, 217, 196, 0.1) 0%,
      var(--c-surface-2) 60%);
}
.kpi-card--teal.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {
  color: #00D9C4;
}
.kpi-card--teal[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.12);
}
.kpi-card--teal[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #00D9C4;
}
.kpi-card--teal[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #00D9C4;
}
.kpi-card--purple[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      #A78BFA,
      #c4b0ff);
}
.kpi-card--purple[_ngcontent-%COMP%]:hover, 
.kpi-card--purple.kpi-card--active[_ngcontent-%COMP%] {
  border-color: rgba(167, 139, 250, 0.5);
  box-shadow: 0 4px 20px rgba(167, 139, 250, 0.2), 0 0 0 1px rgba(167, 139, 250, 0.2);
  background:
    linear-gradient(
      135deg,
      rgba(167, 139, 250, 0.1) 0%,
      var(--c-surface-2) 60%);
}
.kpi-card--purple.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {
  color: #A78BFA;
}
.kpi-card--purple[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background: rgba(167, 139, 250, 0.12);
}
.kpi-card--purple[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #A78BFA;
}
.kpi-card--purple[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #A78BFA;
}
.kpi-card--blue[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      #4EA8F8,
      #7dc4ff);
}
.kpi-card--blue[_ngcontent-%COMP%]:hover, 
.kpi-card--blue.kpi-card--active[_ngcontent-%COMP%] {
  border-color: rgba(78, 168, 248, 0.5);
  box-shadow: 0 4px 20px rgba(78, 168, 248, 0.2), 0 0 0 1px rgba(78, 168, 248, 0.2);
  background:
    linear-gradient(
      135deg,
      rgba(78, 168, 248, 0.1) 0%,
      var(--c-surface-2) 60%);
}
.kpi-card--blue.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {
  color: #4EA8F8;
}
.kpi-card--blue[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background: rgba(78, 168, 248, 0.12);
}
.kpi-card--blue[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #4EA8F8;
}
.kpi-card--blue[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #4EA8F8;
}
.kpi-card--amber[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      #F5A623,
      #ffc857);
}
.kpi-card--amber[_ngcontent-%COMP%]:hover, 
.kpi-card--amber.kpi-card--active[_ngcontent-%COMP%] {
  border-color: rgba(245, 166, 35, 0.5);
  box-shadow: 0 4px 20px rgba(245, 166, 35, 0.2), 0 0 0 1px rgba(245, 166, 35, 0.2);
  background:
    linear-gradient(
      135deg,
      rgba(245, 166, 35, 0.1) 0%,
      var(--c-surface-2) 60%);
}
.kpi-card--amber.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {
  color: #F5A623;
}
.kpi-card--amber[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background: rgba(245, 166, 35, 0.12);
}
.kpi-card--amber[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #F5A623;
}
.kpi-card--amber[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #F5A623;
}
.kpi-card--green[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      #30D158,
      #5ee87a);
}
.kpi-card--green[_ngcontent-%COMP%]:hover, 
.kpi-card--green.kpi-card--active[_ngcontent-%COMP%] {
  border-color: rgba(48, 209, 88, 0.5);
  box-shadow: 0 4px 20px rgba(48, 209, 88, 0.2), 0 0 0 1px rgba(48, 209, 88, 0.2);
  background:
    linear-gradient(
      135deg,
      rgba(48, 209, 88, 0.1) 0%,
      var(--c-surface-2) 60%);
}
.kpi-card--green.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {
  color: #30D158;
}
.kpi-card--green[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background: rgba(48, 209, 88, 0.12);
}
.kpi-card--green[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #30D158;
}
.kpi-card--green[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #30D158;
}
.kpi-card--cyan[_ngcontent-%COMP%]::before {
  background:
    linear-gradient(
      90deg,
      #22d3ee,
      #67e8f9);
}
.kpi-card--cyan[_ngcontent-%COMP%]:hover, 
.kpi-card--cyan.kpi-card--active[_ngcontent-%COMP%] {
  border-color: rgba(34, 211, 238, 0.5);
  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.2), 0 0 0 1px rgba(34, 211, 238, 0.2);
  background:
    linear-gradient(
      135deg,
      rgba(34, 211, 238, 0.1) 0%,
      var(--c-surface-2) 60%);
}
.kpi-card--cyan.kpi-card--active[_ngcontent-%COMP%]   .kpi-val[_ngcontent-%COMP%] {
  color: #22d3ee;
}
.kpi-card--cyan[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background: rgba(34, 211, 238, 0.12);
}
.kpi-card--cyan[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #22d3ee;
}
.kpi-card--cyan[_ngcontent-%COMP%]   .kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #22d3ee;
}
.kpi-filter-dot[_ngcontent-%COMP%] {
  position: absolute;
  top: 8px;
  right: 8px;
}
.kpi-filter-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
  display: block;
}
.kpi-active-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 10px;
  padding: 3px 8px 3px 6px;
  background: rgba(0, 217, 196, 0.08);
  border: 1px solid rgba(0, 217, 196, 0.25);
  border-radius: 20px;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--c-teal);
  vertical-align: middle;
}
.kpi-active-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 13px;
}
.kpi-badge-clear[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  color: var(--c-teal);
  cursor: pointer;
  opacity: 0.7;
}
.kpi-badge-clear[_ngcontent-%COMP%]:hover {
  opacity: 1;
}
.kpi-badge-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 13px;
}
.kpi-icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.kpi-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 22px;
}
.kpi-body[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.kpi-val[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
}
.kpi-lbl[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
}
.kpi-trend[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
}
.kpi-trend.up[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.12);
  color: var(--c-teal);
}
.kpi-trend.down[_ngcontent-%COMP%] {
  background: rgba(255, 87, 87, 0.1);
  color: var(--c-red);
}
.tab-content[_ngcontent-%COMP%] {
  flex: 1;
}
.panel[_ngcontent-%COMP%] {
  background: var(--c-surface-2);
  border: 1px solid var(--c-border);
  border-radius: 14px;
  overflow: visible;
}
.panel--full[_ngcontent-%COMP%] {
  width: 100%;
}
.panel__head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--c-border);
  gap: 12px;
  flex-wrap: wrap;
}
.panel__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
}
.panel__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.panel__footer[_ngcontent-%COMP%] {
  padding: 12px 20px;
  font-size: 12px;
  color: var(--c-text-3);
  border-top: 1px solid var(--c-border);
  background: var(--c-surface-1);
}
.panel__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--c-teal);
  text-decoration: none;
}
.panel__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.search-mini[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--c-surface-1);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 0 10px;
  height: 34px;
}
.search-mini[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
  color: var(--c-text-3);
}
.search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  border: none;
  outline: none;
  background: transparent;
  color: var(--c-text-1);
  font-size: 13px;
  width: 200px;
}
.search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: var(--c-text-3);
}
.filter-select[_ngcontent-%COMP%] {
  height: 34px;
  padding: 0 10px;
  background: var(--c-surface-1);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  color: var(--c-text-1);
  font-size: 13px;
  cursor: pointer;
}
.filter-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--c-teal);
}
.table-scroll[_ngcontent-%COMP%] {
  overflow-y: auto;
  overflow-x: auto;
  max-height: 380px;
  border-radius: 0 0 14px 14px;
}
.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--c-surface-1);
}
.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--c-border);
  border-radius: 3px;
}
.table-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--c-teal);
}
.table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {
  width: 100%;
}
.table-scroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--c-surface-1);
  box-shadow: 0 1px 0 var(--c-border);
}
.data-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--c-border);
  background: var(--c-surface-1);
}
.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 10px 16px;
  font-size: 11px;
  font-weight: 600;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: left;
  white-space: nowrap;
}
.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--c-border);
  transition: background 0.15s;
}
.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: rgba(0, 217, 196, 0.04);
}
.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 12px 16px;
  color: var(--c-text-1);
  vertical-align: middle;
}
.user-cell[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.user-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  font-weight: 600;
}
.user-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
}
.avatar-role[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}
.role-chip[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px 3px 6px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}
.role-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 13px;
}
.badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}
.badge.ok[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.12);
  color: var(--c-teal);
}
.badge.warn[_ngcontent-%COMP%] {
  background: rgba(255, 193, 7, 0.12);
  color: var(--c-amber);
}
.badge.danger[_ngcontent-%COMP%], 
.badge.crit[_ngcontent-%COMP%] {
  background: rgba(255, 87, 87, 0.12);
  color: var(--c-red);
}
.badge.info[_ngcontent-%COMP%] {
  background: rgba(41, 182, 246, 0.12);
  color: var(--c-blue);
}
.badge.neutral[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.06);
  color: var(--c-text-3);
}
.mono[_ngcontent-%COMP%] {
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  color: var(--c-text-2);
}
.last-seen[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--c-text-3);
}
.row-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
}
.row-btn[_ngcontent-%COMP%] {
  width: 30px;
  height: 30px;
  border: 1px solid var(--c-border);
  border-radius: 7px;
  background: transparent;
  color: var(--c-text-2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}
.row-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.row-btn[_ngcontent-%COMP%]:hover {
  background: var(--c-surface-1);
  border-color: var(--c-teal);
  color: var(--c-teal);
}
.row-btn--warn[_ngcontent-%COMP%]:hover {
  border-color: var(--c-amber);
  color: var(--c-amber);
}
.row-btn--ok[_ngcontent-%COMP%]:hover {
  border-color: var(--c-green);
  color: var(--c-green);
}
.roles-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 16px;
  height: 100%;
}
.role-selector-col[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.role-card[_ngcontent-%COMP%] {
  background: var(--c-surface-2);
  border: 1.5px solid var(--c-border);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.role-card[_ngcontent-%COMP%]:hover {
  border-color: var(--c-teal);
  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.07);
}
.role-card.active[_ngcontent-%COMP%] {
  border-color: var(--c-teal);
  background: rgba(0, 217, 196, 0.05);
  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.1);
}
.role-card__icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.role-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
}
.role-card__body[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.role-card__body[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
}
.role-card__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
}
.role-card__perm-count[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
}
.role-card__perm-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 700;
  color: var(--c-teal);
}
.role-card__perm-count[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {
  font-size: 10px;
  color: var(--c-text-3);
  font-style: normal;
}
.unsaved-dot[_ngcontent-%COMP%] {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--c-amber);
  animation: _ngcontent-%COMP%_pulse-dot 1.5s infinite;
}
.unsaved-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--c-amber);
}
.unsaved-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 14px;
}
@keyframes _ngcontent-%COMP%_pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.7);
  }
}
.perm-matrix-col[_ngcontent-%COMP%] {
  background: var(--c-surface-2);
  border: 1px solid var(--c-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.perm-matrix-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid var(--c-border);
  gap: 16px;
  flex-wrap: wrap;
}
.perm-matrix-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px;
}
.perm-matrix-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--c-text-3);
  margin: 0;
}
.perm-matrix-header__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.perm-categories[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.perm-category__label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}
.perm-cat-icon[_ngcontent-%COMP%] {
  font-size: 14px !important;
}
.perm-items[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.perm-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s;
}
.perm-item[_ngcontent-%COMP%]:hover {
  background: rgba(0, 217, 196, 0.05);
  border-color: rgba(0, 217, 196, 0.15);
}
.perm-item--on[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.06);
  border-color: rgba(0, 217, 196, 0.2);
}
.perm-item__text[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.perm-item__label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
}
.perm-item__desc[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
}
.perm-item__status[_ngcontent-%COMP%] {
  font-size: 18px !important;
  flex-shrink: 0;
}
.perm-toggle[_ngcontent-%COMP%] {
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: var(--c-border);
  border: 1.5px solid var(--c-border);
  position: relative;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
}
.perm-toggle__thumb[_ngcontent-%COMP%] {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--c-text-3);
  transition: transform 0.2s, background 0.2s;
}
.perm-toggle.on[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.2);
  border-color: var(--c-teal);
}
.perm-toggle.on[_ngcontent-%COMP%]   .perm-toggle__thumb[_ngcontent-%COMP%] {
  transform: translateX(16px);
  background: var(--c-teal);
}
.activity-timeline[_ngcontent-%COMP%] {
  padding: 8px 20px;
  display: block;
}
.activity-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--c-border);
  position: relative;
}
.activity-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.activity-icon[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.activity-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.activity-icon--success[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.12);
  color: var(--c-teal);
}
.activity-icon--warn[_ngcontent-%COMP%] {
  background: rgba(255, 193, 7, 0.12);
  color: var(--c-amber);
}
.activity-icon--error[_ngcontent-%COMP%] {
  background: rgba(255, 87, 87, 0.12);
  color: var(--c-red);
}
.activity-icon--info[_ngcontent-%COMP%] {
  background: rgba(41, 182, 246, 0.12);
  color: var(--c-blue);
}
.activity-body[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.activity-text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--c-text-1);
}
.activity-meta[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--c-text-3);
}
.activity-meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 12px;
}
.pagination-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 10px 16px;
  border-top: 1px solid var(--c-border);
}
.pg-rows-info[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--c-text-3);
  white-space: nowrap;
}
.pg-nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 2px;
}
.pg-label[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--c-text-2);
  white-space: nowrap;
  padding: 0 6px;
  min-width: 52px;
  text-align: center;
}
.pg-arrow[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: var(--c-text-2);
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
}
.pg-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.pg-arrow[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--c-surface-3, rgba(255, 255, 255, 0.07));
  color: var(--c-text-1);
}
.pg-arrow[_ngcontent-%COMP%]:disabled {
  opacity: 0.25;
  cursor: default;
}
.btn-sm-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  background: var(--c-teal);
  color: #0a0e14;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
}
.btn-sm-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.btn-sm-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  opacity: 0.85;
}
.btn-sm-primary[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: default;
}
.btn-outline-sm[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  background: transparent;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  color: var(--c-text-2);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-outline-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.btn-outline-sm[_ngcontent-%COMP%]:hover {
  border-color: var(--c-teal);
  color: var(--c-teal);
}
.btn-warn[_ngcontent-%COMP%]:hover {
  border-color: var(--c-red) !important;
  color: var(--c-red) !important;
}
.btn-delete[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  background: rgba(255, 87, 87, 0.1);
  border: 1px solid rgba(255, 87, 87, 0.3);
  border-radius: 8px;
  color: var(--c-red);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-delete[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.btn-delete[_ngcontent-%COMP%]:hover {
  background: rgba(255, 87, 87, 0.2);
}
.icon-btn[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  background: transparent;
  color: var(--c-text-2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}
.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.icon-btn[_ngcontent-%COMP%]:hover {
  border-color: var(--c-teal);
  color: var(--c-teal);
}
.role-summary[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  margin: 0 8px;
  transition: background 0.15s;
  cursor: default;
}
.role-summary[_ngcontent-%COMP%]:hover {
  background: rgba(0, 217, 196, 0.05);
}
.role-summary__name[_ngcontent-%COMP%] {
  flex: 1;
  font-size: 12px;
  color: var(--c-text-2);
}
.role-summary__count[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  background: var(--c-surface-1);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  padding: 1px 8px;
  color: var(--c-text-1);
}
.role-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.nav-badge[_ngcontent-%COMP%] {
  margin-left: auto;
  background: var(--c-teal);
  color: #0a0e14;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 10px;
}
.modal-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-top: 8px;
  border-top: 1px solid var(--c-border);
  margin-top: 16px;
}
.modal-panel--new-user[_ngcontent-%COMP%] {
  max-width: 640px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--c-surface-1);
  border-radius: 3px;
}
.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--c-border);
  border-radius: 3px;
}
.modal-panel--new-user[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--c-teal);
}
.modal-panel--new-user[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.modal-panel--new-user[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {
  flex-shrink: 0;
  margin-top: auto;
}
.modal-panel--new-patient[_ngcontent-%COMP%] {
  max-width: 480px;
}
.modal-panel--edit-sm[_ngcontent-%COMP%] {
  max-width: 520px;
}
  .form-field--white select {
  background: var(--c-surface, #ffffff) !important;
  color: var(--c-text-1, #1a1a2e) !important;
  border: 1px solid var(--c-border, #cbd5e1) !important;
}
  .form-field--white select option {
  background: var(--c-surface, #ffffff) !important;
  color: var(--c-text-1, #1a1a2e) !important;
}
.modal-panel--edit-horaire[_ngcontent-%COMP%] {
  max-width: 820px;
  width: 96vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.modal-panel--edit-horaire[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.modal-panel--edit-horaire[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
}
.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 5px;
}
.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--c-surface-1);
}
.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--c-border);
  border-radius: 3px;
}
.modal-panel--edit-horaire[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--c-teal);
}
.modal-actions[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.form-section-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--c-border);
}
.form-section-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--c-teal);
}
.toggle-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 38px;
}
.toggle-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--c-text-2);
}
.toggle-switch[_ngcontent-%COMP%] {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  cursor: pointer;
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}
.toggle-track[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: var(--c-surface);
  border: 1.5px solid var(--c-border);
  border-radius: 99px;
  transition: background 0.2s, border-color 0.2s;
}
.toggle-track[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  background: var(--c-text-3);
  border-radius: 50%;
  transition: transform 0.2s, background 0.2s;
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.15);
  border-color: var(--c-teal);
}
.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]::after {
  transform: translateX(18px);
  background: var(--c-teal);
}
@media (max-width: 1100px) {
  .kpi-row[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
  .kpi-card[_ngcontent-%COMP%] {
    flex: 1 1 calc(50% - 7px);
    min-width: 0;
  }
  .admin-main[_ngcontent-%COMP%] {
    padding: 0 16px 16px;
  }
  .roles-layout[_ngcontent-%COMP%] {
    grid-template-columns: 200px 1fr;
  }
}
@media (max-width: 768px) {
  .admin-shell[_ngcontent-%COMP%] {
    overflow: visible;
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
    flex-direction: column;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {
    position: sticky;
    top: 0;
    left: auto;
    bottom: auto;
    z-index: 60;
    transform: none !important;
    transition: none;
    width: 100% !important;
    flex: 0 0 auto !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
    height: auto;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 8px;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar__logo[_ngcontent-%COMP%] {
    padding: 10px 0 10px 12px;
    border-bottom: 0;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar__logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    font-size: 15px;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar__nav[_ngcontent-%COMP%] {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 8px;
    padding: 10px 4px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar__nav[_ngcontent-%COMP%]::-webkit-scrollbar {
    display: none;
  }
  .admin-shell[_ngcontent-%COMP%]   .nav-section-label[_ngcontent-%COMP%] {
    display: none !important;
  }
  .admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {
    flex: 0 0 auto;
    min-height: 40px;
    white-space: nowrap;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar__user[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px 8px 4px;
    border-top: 0;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar__user[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%], 
   .admin-shell[_ngcontent-%COMP%]   .sidebar__user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {
    display: none;
  }
  .admin-shell[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
    justify-content: center;
    color: var(--c-red);
    background: rgba(255, 87, 87, 0.12);
    border: 1px solid rgba(255, 87, 87, 0.24);
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar-backdrop[_ngcontent-%COMP%] {
    display: none !important;
  }
  .admin-main[_ngcontent-%COMP%] {
    padding: 0 10px 10px;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  .topbar[_ngcontent-%COMP%] {
    padding: 12px 0;
    gap: 8px;
  }
  .topbar__right[_ngcontent-%COMP%] {
    gap: 4px;
  }
  .hamburger-btn[_ngcontent-%COMP%] {
    display: none !important;
  }
  .kpi-row[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    gap: 8px;
  }
  .kpi-card[_ngcontent-%COMP%] {
    flex: 1 1 calc(50% - 4px);
    min-width: 0;
  }
  .tabs-bar[_ngcontent-%COMP%] {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    flex-wrap: nowrap;
    padding-bottom: 2px;
    scrollbar-width: none;
  }
  .tabs-bar[_ngcontent-%COMP%]::-webkit-scrollbar {
    display: none;
  }
  .tab-btn[_ngcontent-%COMP%] {
    white-space: nowrap;
    flex-shrink: 0;
    font-size: 12px;
    padding: 6px 12px;
  }
  .panel__head[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    gap: 8px;
  }
  .panel__actions[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    gap: 6px;
  }
  .search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
    width: 110px;
  }
  .table-scroll[_ngcontent-%COMP%] {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    max-width: 100%;
  }
  .roles-layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr !important;
  }
  .role-selector-col[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .role-card[_ngcontent-%COMP%] {
    padding: 10px 12px;
  }
  .role-card__desc[_ngcontent-%COMP%] {
    display: none;
  }
  .horaire-form[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .horaire-form-left[_ngcontent-%COMP%] {
    min-width: 0 !important;
  }
  .cal-grid[_ngcontent-%COMP%] {
    gap: 2px;
  }
  .cal-cell[_ngcontent-%COMP%] {
    font-size: 11px;
  }
  .horaire-chips-row[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    gap: 6px;
  }
  .wz-overlay[_ngcontent-%COMP%] {
    padding: 0;
    align-items: flex-end;
  }
  .wz-panel[_ngcontent-%COMP%] {
    border-radius: 20px 20px 0 0;
    max-height: 92vh;
    max-height: 92dvh;
    width: 100% !important;
    max-width: 100% !important;
    overflow-y: auto;
  }
  .wz-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr !important;
  }
  .wz-form-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr !important;
  }
  .wz-head[_ngcontent-%COMP%] {
    padding: 14px 16px;
    gap: 10px;
  }
  .wz-stepper[_ngcontent-%COMP%] {
    padding: 10px 16px;
    gap: 0;
  }
  .wz-step__label[_ngcontent-%COMP%] {
    font-size: 9.5px;
  }
  .wz-body[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .wz-footer[_ngcontent-%COMP%] {
    padding: 12px 16px;
  }
}
@media (max-width: 430px) {
  .admin-shell[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) auto;
  }
  .admin-shell[_ngcontent-%COMP%]   .sidebar__logo[_ngcontent-%COMP%] {
    display: none;
  }
  .admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {
    padding: 8px 10px;
    gap: 6px;
  }
  .admin-shell[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
    font-size: 17px;
  }
  .kpi-card[_ngcontent-%COMP%] {
    flex: 1 1 100%;
  }
  .kpi-row[_ngcontent-%COMP%] {
    gap: 6px;
  }
  .wz-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr !important;
  }
  .role-selector-col[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .tab-btn[_ngcontent-%COMP%] {
    font-size: 11px;
    padding: 5px 10px;
  }
}
.req[_ngcontent-%COMP%] {
  color: var(--c-red);
  margin-left: 2px;
}
.modal-panel--settings[_ngcontent-%COMP%] {
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}
.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
}
.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--c-surface-1);
  border-radius: 3px;
}
.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--c-border);
  border-radius: 3px;
}
.modal-panel--settings[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--c-teal);
}
.modal-panel--settings[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.modal-panel--settings[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.settings-group[_ngcontent-%COMP%] {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--c-border);
}
.settings-group[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.settings-group-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 14px;
}
.settings-group-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--c-teal);
}
.settings-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 0;
}
.settings-row__label[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.settings-row__label[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-1);
}
.settings-row__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
}
.table-search-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px 14px;
  padding: 10px 14px;
  background: var(--c-surface-1);
  border: 1.5px solid var(--c-teal);
  border-radius: 10px;
}
.table-search-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
  color: var(--c-teal);
  flex-shrink: 0;
}
.table-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 13px;
  color: var(--c-text-1);
}
.table-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: var(--c-text-3);
}
.horaire-date-filter[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  border-left: 1px solid var(--c-border);
  padding-left: 12px;
  flex-shrink: 0;
}
.horaire-date-filter[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 17px;
  color: var(--c-teal);
}
.horaire-date-filter[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {
  background: transparent;
  border: none;
  outline: none;
  font-size: 12.5px;
  color: var(--c-text-1);
  cursor: pointer;
  font-family: var(--f-body);
}
.horaire-date-filter[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {
  filter: invert(0.6);
  cursor: pointer;
}
.table-search-clear[_ngcontent-%COMP%] {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  color: var(--c-text-3);
  border-radius: 50%;
  transition: color 0.15s, background 0.15s;
}
.table-search-clear[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.table-search-clear[_ngcontent-%COMP%]:hover {
  color: var(--c-red);
  background: rgba(255, 87, 87, 0.1);
}
.profil-tabs[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.profil-tab[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--c-border);
  background: var(--c-surface-2);
  color: var(--c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}
.profil-tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.profil-tab[_ngcontent-%COMP%]:hover {
  border-color: var(--c-teal);
  color: var(--c-teal);
}
.profil-tab.active[_ngcontent-%COMP%] {
  background: rgba(0, 217, 196, 0.1);
  border-color: var(--c-teal);
  color: var(--c-teal);
  font-weight: 600;
}
.profil-tab-count[_ngcontent-%COMP%] {
  background: var(--c-surface-1);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  padding: 1px 7px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text-1);
  margin-left: 2px;
}
.calendar-input[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--c-surface-1);
  border: 1.5px solid var(--c-teal);
  border-radius: 8px;
  padding: 0 10px;
  height: 38px;
}
.calendar-input[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
  color: var(--c-teal);
  flex-shrink: 0;
}
.calendar-input[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  color: var(--c-text-1);
  cursor: pointer;
}
.calendar-input[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {
  filter: invert(60%) sepia(80%) saturate(400%) hue-rotate(140deg);
  cursor: pointer;
}
.horaire-form-layout[_ngcontent-%COMP%] {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.horaire-form-left[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  min-width: 220px;
}
.horaire-form-right[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.cal-selected-summary[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--c-teal);
  background: rgba(0, 217, 196, 0.08);
  border: 1px solid rgba(0, 217, 196, 0.2);
  border-radius: 8px;
  padding: 6px 10px;
}
.cal-selected-summary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
}
.cal-clear-btn[_ngcontent-%COMP%] {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--c-text-3);
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 0;
}
.cal-clear-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 14px;
}
.cal-clear-btn[_ngcontent-%COMP%]:hover {
  color: var(--c-red);
}
.cal-inline[_ngcontent-%COMP%] {
  background: var(--c-surface-2);
  border: 1.5px solid var(--c-border);
  border-radius: 12px;
  padding: 12px;
  width: 280px;
}
.cal-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.cal-title[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text-1);
}
.cal-nav-btn[_ngcontent-%COMP%] {
  background: transparent;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  color: var(--c-text-2);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: all 0.15s;
}
.cal-nav-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.cal-nav-btn[_ngcontent-%COMP%]:hover {
  border-color: var(--c-teal);
  color: var(--c-teal);
}
.cal-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
}
.cal-day-name[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 700;
  color: var(--c-text-3);
  text-align: center;
  padding: 4px 0;
  text-transform: uppercase;
}
.cal-cell[_ngcontent-%COMP%] {
  aspect-ratio: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--c-text-2);
  transition: all 0.12s;
  -webkit-user-select: none;
  user-select: none;
  border: 0;
  background: transparent;
  font: inherit;
  line-height: 1;
  padding: 0;
}
.cal-cell[_ngcontent-%COMP%]:hover {
  background: rgba(0, 217, 196, 0.12);
  color: var(--c-teal);
}
.cal-cell--empty[_ngcontent-%COMP%] {
  cursor: default;
  pointer-events: none;
}
.cal-cell--today[_ngcontent-%COMP%] {
  font-weight: 700;
  color: var(--c-teal);
  border: 1.5px solid rgba(0, 217, 196, 0.4);
}
.cal-cell--selected[_ngcontent-%COMP%] {
  background: var(--c-teal) !important;
  color: #0a0e14 !important;
  font-weight: 700;
}
.action-form-card[_ngcontent-%COMP%] {
  background: var(--c-surface-2);
  border: 1px solid var(--c-border);
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 20px;
}
.action-form-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text-1);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--c-border);
}
.action-form-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
  color: var(--c-teal);
}
.action-form-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}
.action-form-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
  border-top: 1px solid var(--c-border);
}
.seance-form-grid[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.seance-block[_ngcontent-%COMP%] {
  border: 1px solid var(--c-border);
  border-radius: 10px;
  overflow: hidden;
}
.seance-block__title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--c-teal-soft);
  border-bottom: 1px solid var(--c-border);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--c-teal);
}
.seance-block__title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.seance-days-row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 14px 16px;
}
.day-chip[_ngcontent-%COMP%] {
  min-width: 44px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid var(--c-border);
  background: transparent;
  color: var(--c-text-2);
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.day-chip[_ngcontent-%COMP%]:hover {
  border-color: var(--c-teal);
  color: var(--c-teal);
}
.day-chip--active[_ngcontent-%COMP%] {
  background: var(--c-teal);
  border-color: var(--c-teal);
  color: #fff;
}
.seance-options-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  padding: 14px 16px;
}
.seance-option-col[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px 0 0;
}
.seance-option-col[_ngcontent-%COMP%]:last-child {
  padding: 0 0 0 16px;
  border-left: 1px solid var(--c-border);
}
.seance-check[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text-1);
}
.seance-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid var(--c-border);
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: all 0.15s;
}
.seance-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked {
  background: var(--c-teal);
  border-color: var(--c-teal);
}
.seance-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 10'%3E%3Cpath d='M1 5l3.5 3.5L11 1' stroke='%23fff' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/11px no-repeat;
}
.seance-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover:not(:checked) {
  border-color: var(--c-teal);
}
.seance-check--sub[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-2);
  padding-left: 4px;
}
.seance-shift-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 12px;
  margin-top: 2px;
  background: var(--c-teal-soft);
  border-radius: 8px;
}
.wizard-panel[_ngcontent-%COMP%] {
  max-width: 580px;
  width: 96vw;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  border-radius: 16px;
}
.wizard-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--c-border);
  background: var(--c-surface-2);
}
.wizard-header__icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--c-teal-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.wizard-header__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
  color: var(--c-teal);
}
.wizard-header__text[_ngcontent-%COMP%] {
  flex: 1;
}
.wizard-header__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text-1);
  margin: 0 0 2px;
}
.wizard-header__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--c-text-3);
  margin: 0;
}
.wizard-body[_ngcontent-%COMP%] {
  padding: 20px 24px;
  background: var(--c-surface-1);
}
.wizard-role-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.wizard-role-card[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1.5px solid var(--c-border);
  background: var(--c-surface-2);
  cursor: pointer;
  overflow: hidden;
  transition:
    border-color 0.18s,
    background 0.18s,
    transform 0.15s;
}
.wizard-role-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(0, 217, 196, 0.4);
  background: var(--c-surface-2);
  transform: translateY(-1px);
}
.wizard-role-card.selected[_ngcontent-%COMP%] {
  border-color: var(--c-teal);
  background: color-mix(in srgb, var(--c-teal) 6%, var(--c-surface-2));
  transform: translateY(-1px);
}
.wizard-role-card__icon[_ngcontent-%COMP%] {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.wizard-role-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 22px;
}
.wizard-role-card__content[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.wizard-role-card__name[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: var(--c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wizard-role-card__desc[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
  line-height: 1.4;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.wizard-role-card__check[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--c-teal);
}
.wizard-role-card__check[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.wizard-role-card__border[_ngcontent-%COMP%] {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 12px 0 0 12px;
}
.wizard-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid var(--c-border);
  background: var(--c-surface-2);
}
.wizard-footer__selected[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  color: var(--c-text-2);
}
.wizard-footer__selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.wizard-footer__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}
.wizard-panel--lg[_ngcontent-%COMP%] {
  max-width: 700px;
}
.wizard-body--form[_ngcontent-%COMP%] {
  padding: 20px 24px;
  background: var(--c-surface-1);
  overflow-y: auto;
  max-height: 60vh;
}
.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 5px;
}
.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--c-surface-1);
}
.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--c-border);
  border-radius: 3px;
}
.wizard-body--form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--c-teal);
}
.wizard-section-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--c-border);
}
.wizard-section-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--c-teal);
}
.wizard-footer__danger[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.wz-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.wz-panel[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 620px;
  background: var(--c-surface-1);
  border: 1px solid var(--c-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  max-height: 92vh;
}
.wz-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 22px 24px 18px;
  border-bottom: 1px solid var(--c-border);
  background: var(--c-surface-2);
  flex-shrink: 0;
}
.wz-head__icon[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1.5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
}
.wz-head__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 22px;
}
.wz-head__text[_ngcontent-%COMP%] {
  flex: 1;
}
.wz-head__title[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 700;
  color: var(--c-text-1);
  margin: 0 0 3px;
}
.wz-head__sub[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--c-text-3);
  margin: 0;
}
.wz-close-btn[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  background: transparent;
  color: var(--c-text-3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  flex-shrink: 0;
}
.wz-close-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.wz-close-btn[_ngcontent-%COMP%]:hover {
  border-color: var(--c-red);
  color: var(--c-red);
}
.wz-stepper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 16px 28px;
  background: var(--c-surface-2);
  border-bottom: 1px solid var(--c-border);
  flex-shrink: 0;
}
.wz-step[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.wz-step__dot[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--c-border);
  background: var(--c-surface-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text-3);
  transition: all 0.25s;
}
.wz-step__dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
}
.wz-step__label[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 600;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  transition: color 0.25s;
}
.wz-step__line[_ngcontent-%COMP%] {
  flex: 1;
  height: 2px;
  background: var(--c-border);
  margin: 0 8px;
  margin-bottom: 18px;
  border-radius: 2px;
  transition: background 0.25s;
}
.wz-step__line--done[_ngcontent-%COMP%] {
  background: var(--c-teal);
}
.wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  border-color: var(--c-teal);
  background: rgba(0, 217, 196, 0.15);
  color: var(--c-teal);
}
.wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {
  color: var(--c-teal);
}
.wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  border-color: var(--c-teal);
  background: var(--c-teal);
  color: #0a0e14;
}
.wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {
  color: var(--c-teal);
}
.wz-body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 22px 24px;
  display: block;
}
.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 5px;
}
.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--c-surface-1);
}
.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--c-border);
  border-radius: 3px;
}
.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--c-teal);
}
.wz-stage[_ngcontent-%COMP%] {
  width: 100%;
  animation: _ngcontent-%COMP%_wzFadeIn 0.18s ease;
}
@keyframes _ngcontent-%COMP%_wzFadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.wz-hint[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  color: var(--c-text-3);
  background: rgba(0, 217, 196, 0.05);
  border: 1px solid rgba(0, 217, 196, 0.15);
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 16px;
}
.wz-hint[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--c-teal);
  flex-shrink: 0;
  margin-top: 1px;
}
.wz-role-grid[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.wz-role-card[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px 14px 20px;
  border-radius: 12px;
  border: 1.5px solid var(--c-border);
  background: var(--c-surface-2);
  cursor: pointer;
  overflow: hidden;
  transition:
    border-color 0.18s,
    background 0.18s,
    transform 0.15s,
    box-shadow 0.18s;
}
.wz-role-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(0, 217, 196, 0.4);
  background: rgba(0, 217, 196, 0.03);
  transform: translateX(2px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}
.wz-role-card--selected[_ngcontent-%COMP%] {
  border-color: var(--c-teal);
  background: rgba(0, 217, 196, 0.06);
  transform: translateX(3px);
  box-shadow: 0 4px 20px rgba(0, 217, 196, 0.1);
}
.wz-role-card__accent[_ngcontent-%COMP%] {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 12px 0 0 12px;
  opacity: 0;
  transition: opacity 0.2s;
}
.wz-role-card--selected[_ngcontent-%COMP%]   .wz-role-card__accent[_ngcontent-%COMP%] {
  opacity: 1;
}
.wz-role-card__ico[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 11px;
  border: 1.5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.wz-role-card__ico[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 22px;
}
.wz-role-card__body[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.wz-role-card__name[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: var(--c-text-1);
}
.wz-role-card__desc[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
  line-height: 1.4;
}
.wz-role-card__check[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.wz-role-card__check[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
}
.wz-role-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 18px;
}
.wz-role-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
}
.wz-section-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--c-border);
}
.wz-section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--c-teal);
}
.wz-form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}
@media (max-width: 500px) {
  .wz-form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.wz-field--full[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.horaire-chips-row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.horaire-chip[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(0, 217, 196, 0.08);
  border: 1px solid rgba(0, 217, 196, 0.25);
  border-radius: 20px;
  padding: 4px 10px;
  white-space: nowrap;
}
.horaire-chip__date[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--c-teal);
  font-family: monospace;
}
.horaire-chip__time[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-2);
  font-family: monospace;
}
.seance-chip__machine[_ngcontent-%COMP%] {
  font-size: 10.5px;
  color: var(--c-text-3);
  font-family: monospace;
}
.jour-horaire-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
  padding: 4px 2px;
}
.admin-shell[_ngcontent-%COMP%]:not(.light)   .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
.admin-shell[_ngcontent-%COMP%]:not(.light)   .table-scroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  color: #ffffff !important;
}
.admin-shell.light[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
.admin-shell.light[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  color: #000000 !important;
}
.jour-horaire-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(78px, 0.7fr) auto minmax(190px, 1.2fr) minmax(130px, 0.8fr) 30px;
  align-items: center;
  gap: 8px;
  background: var(--c-surface-2, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px;
  min-width: 100%;
}
.jour-horaire-date[_ngcontent-%COMP%] {
  font-family: monospace;
  font-size: 12px;
  color: var(--c-teal);
  min-width: 76px;
  font-weight: 600;
}
.jour-horaire-sep[_ngcontent-%COMP%] {
  color: var(--c-text-3);
  font-size: 12px;
}
.time-input-sm[_ngcontent-%COMP%] {
  width: 90px;
  padding: 4px 6px;
  font-size: 12px;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  background: var(--c-surface);
  color: var(--c-text);
}
.jour-horaire-row[_ngcontent-%COMP%]   select.time-input-sm[_ngcontent-%COMP%] {
  width: 100%;
  min-width: 0 !important;
}
.jour-horaire-times[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}
.form-row-inline[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.wz-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  color: #ffffff;
}
.wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
}
.wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  height: 38px;
  padding: 0 12px;
  background: var(--c-surface-1);
  border: 1.5px solid var(--c-border);
  border-radius: 8px;
  color: var(--c-text-1);
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s;
}
.wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  border-color: var(--c-teal);
}
.wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {
  color: var(--c-text-3);
}
.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  cursor: pointer;
  color: #ffffff !important;
  background: #000000 !important;
}
.wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  color: #ffffff;
  background: #000000;
}
.wz-field--center[_ngcontent-%COMP%] {
  justify-content: flex-end;
  padding-bottom: 2px;
}
.wz-field--error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.wz-field--error[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  border-color: var(--c-red) !important;
  box-shadow: 0 0 0 3px rgba(255, 87, 87, 0.12);
}
.field-error[_ngcontent-%COMP%] {
  color: var(--c-red) !important;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.35;
}
.wz-field--readonly[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {
  opacity: 0.78;
  cursor: not-allowed;
}
.wz-auth-note[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  border: 1px solid rgba(0, 217, 196, 0.22);
  background: rgba(0, 217, 196, 0.08);
  border-radius: 8px;
  padding: 14px;
  color: var(--c-text-1);
  margin-bottom: 16px;
}
.wz-auth-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: var(--c-teal);
  font-size: 22px;
}
.wz-auth-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  display: block;
  font-size: 13px;
  margin-bottom: 4px;
}
.wz-auth-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--c-text-2);
  font-size: 12px;
  line-height: 1.45;
}
.wz-toggle-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 38px;
}
.wz-toggle-label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s;
}
.wz-recap[_ngcontent-%COMP%] {
  margin-top: 20px;
  background: var(--c-surface-2);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  overflow: hidden;
}
.wz-recap__title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 12px 16px;
  border-bottom: 1px solid var(--c-border);
  background: var(--c-surface-1);
}
.wz-recap__title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--c-teal);
}
.wz-recap__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  padding: 4px 0;
}
.wz-recap__item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--c-border);
}
.wz-recap__item[_ngcontent-%COMP%]:nth-last-child(-n+2) {
  border-bottom: none;
}
.wz-recap__key[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 700;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.wz-recap__val[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-1);
}
.wz-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid var(--c-border);
  background: var(--c-surface-2);
  flex-shrink: 0;
}
.wz-footer__left[_ngcontent-%COMP%], 
.wz-footer__right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.wz-footer__center[_ngcontent-%COMP%] {
  flex: 1;
  text-align: center;
}
.wz-step-counter[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--c-text-3);
  background: var(--c-surface-1);
  border: 1px solid var(--c-border);
  border-radius: 20px;
  padding: 3px 12px;
}
.admin-shell.light[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {
  background: rgba(100, 120, 150, 0.45);
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid #d6deea !important;
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22) !important;
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], 
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header--simple[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  border-bottom: 1px solid #d6deea !important;
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header--simple[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], 
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-header--simple[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #14b8a6;
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
  background: #ffffff !important;
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  border-top-color: #d6deea !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-panel[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid #d6deea !important;
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22) !important;
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  border-bottom: 1px solid #d6deea !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .wizard-header__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .wizard-header__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-body[_ngcontent-%COMP%], 
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-body--form[_ngcontent-%COMP%] {
  background: #ffffff !important;
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-section-label[_ngcontent-%COMP%] {
  color: #334155 !important;
  border-bottom-color: #d6deea !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-footer[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  border-top: 1px solid #d6deea !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-footer[_ngcontent-%COMP%]   .wizard-footer__selected[_ngcontent-%COMP%] {
  color: #475569 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-stepper[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  border-bottom: 1px solid #d6deea !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-step[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #64748b !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-step[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {
  color: #64748b !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-step[_ngcontent-%COMP%]   .wz-step__line[_ngcontent-%COMP%] {
  background: #cbd5e1 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  border-color: #14b8a6 !important;
  background: #ccfbf1 !important;
  color: #0f766e !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {
  color: #0f766e !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  background: #14b8a6 !important;
  border-color: #14b8a6 !important;
  color: #ffffff !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {
  color: #0f766e !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-body[_ngcontent-%COMP%] {
  background: #ffffff !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-stage[_ngcontent-%COMP%] {
  background: #ffffff !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wz-section-title[_ngcontent-%COMP%] {
  color: #334155 !important;
  border-bottom-color: #d6deea !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #d6deea !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%]:hover {
  background: #f8fafc !important;
  border-color: #14b8a6 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card.selected[_ngcontent-%COMP%] {
  background: #f0fdfa !important;
  border-color: #14b8a6 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%]   .wizard-role-card__name[_ngcontent-%COMP%] {
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .wizard-role-card[_ngcontent-%COMP%]   .wizard-role-card__desc[_ngcontent-%COMP%] {
  color: #64748b !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
.modal-overlay.light[_ngcontent-%COMP%]   .settings-row__label[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {
  color: #334155 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .settings-row__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.modal-overlay.light[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #64748b !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .settings-group[_ngcontent-%COMP%] {
  border-bottom-color: #e2e8f0 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .settings-group-title[_ngcontent-%COMP%] {
  color: #475569 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .settings-group-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #14b8a6 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .settings-row[_ngcontent-%COMP%] {
  border-color: #e2e8f0 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #64748b !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #dc2626 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.modal-overlay.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #111827 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.modal-overlay.light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  background: #000000 !important;
  border-color: #cbd5e1 !important;
  color: #ffffff !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #000000 !important;
  color: #ffffff !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  border-color: #14b8a6 !important;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.14);
}
.modal-overlay.light[_ngcontent-%COMP%]   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  background: #ffffff !important;
  color: #111111 !important;
  border-color: #cbd5e1 !important;
  color-scheme: light !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #ffffff !important;
  color: #111111 !important;
}
.modal-overlay[_ngcontent-%COMP%]:not(.light)   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  background: #1e2535 !important;
  color: #e2e8f0 !important;
  border: 1px solid #2d3748 !important;
  color-scheme: dark !important;
}
.modal-overlay[_ngcontent-%COMP%]:not(.light)   .form-field--white[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #1e2535 !important;
  color: #e2e8f0 !important;
}
.modal-overlay.light[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  color: #334155 !important;
}
.theme-light[_nghost-%COMP%]   .wz-overlay[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-overlay[_ngcontent-%COMP%] {
  background: rgba(15, 23, 42, 0.28) !important;
  backdrop-filter: blur(3px);
}
.theme-light[_nghost-%COMP%]   .wz-panel[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-panel[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border: 1px solid #d6deea !important;
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22) !important;
}
.theme-light[_nghost-%COMP%]   .wz-head[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-head[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-stepper[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-stepper[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-footer[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-footer[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  border-color: #d6deea !important;
}
.theme-light[_nghost-%COMP%]   .wz-body[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-body[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-stage[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-stage[_ngcontent-%COMP%] {
  background: #ffffff !important;
}
.theme-light[_nghost-%COMP%]   .wz-head__title[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-head__title[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-role-card__name[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card__name[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-recap__val[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__val[_ngcontent-%COMP%] {
  color: #111827 !important;
}
.theme-light[_nghost-%COMP%]   .wz-head__sub[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-head__sub[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-role-card__desc[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card__desc[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-step__label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__label[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-recap__key[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__key[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-toggle-label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-toggle-label[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #64748b !important;
}
.theme-light[_nghost-%COMP%]   .wz-hint[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-hint[_ngcontent-%COMP%] {
  background: #ecfeff !important;
  border-color: #99f6e4 !important;
  color: #334155 !important;
}
.theme-light[_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-recap[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #d6deea !important;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
}
.theme-light[_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%]:hover, .theme-light   [_nghost-%COMP%]   .wz-role-card[_ngcontent-%COMP%]:hover {
  background: #f8fafc !important;
  border-color: #14b8a6 !important;
}
.theme-light[_nghost-%COMP%]   .wz-role-card--selected[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-role-card--selected[_ngcontent-%COMP%] {
  background: #f0fdfa !important;
  border-color: #14b8a6 !important;
}
.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-section-title[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-section-title[_ngcontent-%COMP%] {
  color: #334155 !important;
}
.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #111827 !important;
}
.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8 !important;
}
.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.theme-light[_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .theme-light   [_nghost-%COMP%]   .wz-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  border-color: #14b8a6 !important;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.14);
}
.theme-light[_nghost-%COMP%]   .wz-step__dot[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #64748b !important;
}
.theme-light[_nghost-%COMP%]   .wz-step__line[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__line[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-step__line--done[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step__line--done[_ngcontent-%COMP%] {
  background: #cbd5e1 !important;
}
.theme-light[_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  background: #ccfbf1 !important;
  border-color: #14b8a6 !important;
  color: #0f766e !important;
}
.theme-light[_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--active[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%], 
.theme-light[_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__label[_ngcontent-%COMP%] {
  color: #0f766e !important;
}
.theme-light[_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-step--done[_ngcontent-%COMP%]   .wz-step__dot[_ngcontent-%COMP%] {
  background: #14b8a6 !important;
  border-color: #14b8a6 !important;
  color: #ffffff !important;
}
.theme-light[_nghost-%COMP%]   .wz-recap__title[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__title[_ngcontent-%COMP%] {
  background: #f8fafc !important;
  border-color: #d6deea !important;
  color: #475569 !important;
}
.theme-light[_nghost-%COMP%]   .wz-recap__item[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-recap__item[_ngcontent-%COMP%] {
  border-color: #e2e8f0 !important;
}
.theme-light[_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%] {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #64748b !important;
}
.theme-light[_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%]:hover, .theme-light   [_nghost-%COMP%]   .wz-close-btn[_ngcontent-%COMP%]:hover {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #dc2626 !important;
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 24px 24px;
}
@media (max-width: 1100px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 700px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.stat-panel[_ngcontent-%COMP%]   .panel__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}
.stat-panel[_ngcontent-%COMP%]   .panel__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
  color: var(--c-teal);
}
.chart-area[_ngcontent-%COMP%] {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bar-chart-svg[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 360px;
  height: 140px;
}
.chart-area--donut[_ngcontent-%COMP%] {
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: center;
}
.donut-svg[_ngcontent-%COMP%] {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}
.donut-legend[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.legend-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--c-text-2);
}
.legend-dot[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.legend-val[_ngcontent-%COMP%] {
  margin-left: auto;
  font-weight: 600;
  color: var(--c-text-1);
  min-width: 24px;
  text-align: right;
}
.chart-area--gauge[_ngcontent-%COMP%] {
  flex-direction: column;
  gap: 12px;
}
.gauge-svg[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 240px;
  height: 120px;
}
.gauge-info[_ngcontent-%COMP%] {
  width: 100%;
}
.gauge-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--c-text-2);
  padding: 4px 0;
  border-bottom: 1px solid var(--c-border);
}
.gauge-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--c-text-1);
  font-size: 13px;
}
.table-container[_ngcontent-%COMP%] {
  overflow-x: auto;
}
.data-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}
.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  text-align: left;
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--c-text-2);
  border-bottom: 2px solid var(--c-border);
  white-space: nowrap;
}
.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 9px 12px;
  border-bottom: 1px solid var(--c-border);
  color: var(--c-text-2);
  vertical-align: middle;
}
.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: var(--c-teal-soft);
}
.audit-ts[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--c-text-3);
  white-space: nowrap;
}
.audit-details[_ngcontent-%COMP%] {
  max-width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.role-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: var(--c-teal-soft);
  color: var(--c-teal);
}
.audit-action[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
}
.audit-action--creation[_ngcontent-%COMP%] {
  color: #22c55e;
  background: rgba(34, 197, 94, 0.12);
}
.audit-action--modification[_ngcontent-%COMP%] {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.12);
}
.audit-action--suppression[_ngcontent-%COMP%] {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.12);
}
.audit-action--connexion[_ngcontent-%COMP%] {
  color: #4EA8F8;
  background: rgba(78, 168, 248, 0.12);
}
.audit-action--deconnexion[_ngcontent-%COMP%] {
  color: var(--c-text-3);
  background: var(--c-border);
}
.audit-action--export[_ngcontent-%COMP%] {
  color: #A78BFA;
  background: rgba(167, 139, 250, 0.12);
}
.status-dot[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
}
.status-dot[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.status-dot--ok[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #22c55e;
}
.status-dot--crit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #ef4444;
}
.filter-date[_ngcontent-%COMP%] {
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid var(--c-border);
  background: var(--c-surface-2);
  color: var(--c-text-1);
  font-size: 12px;
  cursor: pointer;
}
.filter-date[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--c-teal);
}
/*# sourceMappingURL=admin.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "app\\pages\\admin\\admin.component.ts", lineNumber: 72 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-4CRVWXXH.js.map
