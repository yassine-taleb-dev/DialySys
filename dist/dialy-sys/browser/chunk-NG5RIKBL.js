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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-I57MQ5R6.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NP5N7FWI.js";

// src/services/supervision.service.ts
var SupervisionService = class _SupervisionService {
  http;
  api = `${environment.apiUrl}/supervision`;
  constructor(http) {
    this.http = http;
  }
  getInfirmiers() {
    return this.http.get(`${this.api}/infirmiers`);
  }
  getChargeHebdomadaire(date) {
    const params = date ? new HttpParams().set("date", date) : void 0;
    return this.http.get(`${this.api}/infirmiers/charge`, { params });
  }
  getDisponibilites(date, creneau) {
    const params = new HttpParams().set("date", date).set("creneau", creneau);
    return this.http.get(`${this.api}/infirmiers/disponibilites`, { params });
  }
  reaffecterSeances(payload) {
    return this.http.put(`${this.api}/seances/reaffectation`, payload);
  }
  getPlanning(debut, fin, creneau) {
    let params = new HttpParams();
    if (debut)
      params = params.set("debut", debut);
    if (fin)
      params = params.set("fin", fin);
    if (creneau)
      params = params.set("creneau", creneau);
    return this.http.get(`${this.api}/planning`, { params });
  }
  getSeancesSansInfirmier(debut, fin) {
    let params = new HttpParams();
    if (debut)
      params = params.set("debut", debut);
    if (fin)
      params = params.set("fin", fin);
    return this.http.get(`${this.api}/seances/sans-infirmier`, { params });
  }
  demarrerSeance(id, heureFinPrevue, dureeMinutes) {
    const body = {};
    if (heureFinPrevue)
      body["heureFinPrevue"] = heureFinPrevue;
    if (dureeMinutes)
      body["dureeMinutes"] = dureeMinutes;
    return this.http.put(`${this.api}/seances/${id}/demarrer`, body);
  }
  terminerSeance(id) {
    return this.http.put(`${this.api}/seances/${id}/terminer`, {});
  }
  getDashboard() {
    return this.http.get(`${this.api}/dashboard`);
  }
  getTauxCompletion(debut, fin) {
    let params = new HttpParams();
    if (debut)
      params = params.set("debut", debut);
    if (fin)
      params = params.set("fin", fin);
    return this.http.get(`${this.api}/stats/completion`, { params });
  }
  getConstantesManquantes(date) {
    const params = date ? new HttpParams().set("date", date) : void 0;
    return this.http.get(`${this.api}/constantes/manquantes`, { params });
  }
  static \u0275fac = function SupervisionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupervisionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupervisionService, factory: _SupervisionService.\u0275fac, providedIn: "root" });
};

// src/app/pages/infirmier-majeur/infirmier-majeur.component.ts
function InfirmierMajeurComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_button_1_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissToast(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
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
function InfirmierMajeurComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.staffAbsents);
  }
}
function InfirmierMajeurComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.seancesSansInfirmierCount);
  }
}
function InfirmierMajeurComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.alertesActivesCount);
  }
}
function InfirmierMajeurComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.constantesManquantesCount);
  }
}
function InfirmierMajeurComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des donn\xE9es de supervision\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 15);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.apiError, " ");
  }
}
function InfirmierMajeurComponent_ng_container_72_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64);
    \u0275\u0275element(4, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r4.pct * 100, "%");
    \u0275\u0275classProp("im-bar-fill--red", b_r4.pct > 0.85)("im-bar-fill--amber", b_r4.pct > 0.6 && b_r4.pct <= 0.85)("im-bar-fill--teal", b_r4.pct <= 0.6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.count);
  }
}
function InfirmierMajeurComponent_ng_container_72__svg_circle_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 67);
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275attribute("stroke", s_r5.color)("stroke-dasharray", s_r5.dasharray)("transform", "rotate(" + s_r5.rotate + ",50,50)");
  }
}
function InfirmierMajeurComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "span", 15);
    \u0275\u0275text(4, "wb_sunny");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Matin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 36)(11, "span", 15);
    \u0275\u0275text(12, "wb_cloudy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17, "Apr\xE8s-midi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 37)(19, "span", 15);
    \u0275\u0275text(20, "nightlight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "small");
    \u0275\u0275text(25, "Soir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 38)(27, "span", 15);
    \u0275\u0275text(28, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33, "En Cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 39)(35, "span", 15);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "small");
    \u0275\u0275text(41, "Constantes Manquantes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 40)(43, "div", 41)(44, "div", 42)(45, "span", 15);
    \u0275\u0275text(46, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48, "Charge par Infirmier");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 43);
    \u0275\u0275template(50, InfirmierMajeurComponent_ng_container_72_div_50_Template, 7, 10, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 41)(52, "div", 42)(53, "span", 15);
    \u0275\u0275text(54, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56, "Alertes par Niveau");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 46);
    \u0275\u0275element(59, "circle", 47);
    \u0275\u0275template(60, InfirmierMajeurComponent_ng_container_72__svg_circle_60_Template, 1, 3, "circle", 48);
    \u0275\u0275elementStart(61, "text", 49);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "text", 50);
    \u0275\u0275text(64, "alertes");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "div", 51)(66, "div", 52);
    \u0275\u0275element(67, "span", 53);
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69, "Critique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "b");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 52);
    \u0275\u0275element(73, "span", 54);
    \u0275\u0275elementStart(74, "span");
    \u0275\u0275text(75, "\xC9lev\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "b");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 52);
    \u0275\u0275element(79, "span", 55);
    \u0275\u0275elementStart(80, "span");
    \u0275\u0275text(81, "Normale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "b");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(84, "div", 41)(85, "div", 42)(86, "span", 15);
    \u0275\u0275text(87, "speed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "strong");
    \u0275\u0275text(89, "Taux de Compl\xE9tion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(91, "svg", 57);
    \u0275\u0275element(92, "path", 58)(93, "path", 59);
    \u0275\u0275elementStart(94, "text", 60);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(96, "p", 61);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.sessionsMatin);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.sessionsApresMidi);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.sessionsSoir);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.sessionsEnCours);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("im-kpi--amber", ctx_r2.constantesManquantes > 0)("im-kpi--teal", ctx_r2.constantesManquantes === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.constantesManquantes > 0 ? "warning" : "check_circle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.constantesManquantes);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r2.chargeParInfirmier);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.alertesDonut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.totalAlertes);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.alertesCritiquesTotal);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.alertesEleveeTotal);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.alertesNormaleTotal);
    \u0275\u0275advance(10);
    \u0275\u0275attribute("stroke", ctx_r2.gaugeColor)("stroke-dashoffset", 144.5 - ctx_r2.tauxCompletion / 100 * 144.5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.tauxCompletion, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.seancesTerminees, " / ", ctx_r2.seancesActives, " s\xE9ances");
  }
}
function InfirmierMajeurComponent_ng_container_73_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80)(1, "span", 15);
    \u0275\u0275text(2, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.staffAbsents, " absent(s)");
  }
}
function InfirmierMajeurComponent_ng_container_73_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81)(1, "span", 15);
    \u0275\u0275text(2, "beach_access");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.staffConge, " en cong\xE9");
  }
}
function InfirmierMajeurComponent_ng_container_73_div_19_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 15);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inf_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inf_r7.creneaux.join(" \xB7 "));
  }
}
function InfirmierMajeurComponent_ng_container_73_div_19_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "button", 94);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_73_div_19_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const inf_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openReaffect(inf_r7));
    });
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "R\xE9affecter les s\xE9ances ");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierMajeurComponent_ng_container_73_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 85)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 86);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 87)(12, "div", 88)(13, "span");
    \u0275\u0275text(14, "Charge hebdomadaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 89);
    \u0275\u0275element(18, "div", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 91);
    \u0275\u0275template(20, InfirmierMajeurComponent_ng_container_73_div_19_span_20_Template, 4, 1, "span", 26);
    \u0275\u0275elementStart(21, "span")(22, "span", 15);
    \u0275\u0275text(23, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, InfirmierMajeurComponent_ng_container_73_div_19_div_25_Template, 5, 0, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inf_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("im-team-card--inactive", inf_r7.statut !== "en-service");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("im-team-avatar--absent", inf_r7.statut !== "en-service");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inf_r7.init);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inf_r7.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inf_r7.role);
    \u0275\u0275advance();
    \u0275\u0275classProp("pill--ok", inf_r7.statut === "en-service")("pill--crit", inf_r7.statut === "absent")("pill--warning", inf_r7.statut === "conge");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statutLabel(inf_r7.statut), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", inf_r7.seancesSemaine, "/", inf_r7.maxSemaine, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.workloadPct(inf_r7), "%")("background", ctx_r2.workloadColor(inf_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", inf_r7.creneaux.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(inf_r7.telephone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inf_r7.statut !== "en-service");
  }
}
function InfirmierMajeurComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 69)(3, "span", 70)(4, "span", 15);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InfirmierMajeurComponent_ng_container_73_span_7_Template, 4, 1, "span", 71)(8, InfirmierMajeurComponent_ng_container_73_span_8_Template, 4, 1, "span", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_73_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterEquipeStatut, $event) || (ctx_r2.filterEquipeStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 74);
    \u0275\u0275text(11, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 75);
    \u0275\u0275text(13, "En service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 76);
    \u0275\u0275text(15, "Absents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 77);
    \u0275\u0275text(17, "En cong\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 78);
    \u0275\u0275template(19, InfirmierMajeurComponent_ng_container_73_div_19_Template, 26, 23, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.staffEnService, " en service");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.staffAbsents > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.staffConge > 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterEquipeStatut);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.filteredEquipe);
  }
}
function InfirmierMajeurComponent_ng_container_74_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.seancesSansInfirmierCount, " sans infirmier");
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_43_span_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 115);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_43_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, InfirmierMajeurComponent_ng_container_74_tr_43_span_8_span_1_Template, 2, 0, "span", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAbsentInfirmier(s_r10.infirmier));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r10.infirmier, " ");
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_43_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Non assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_43_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_74_tr_43_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const s_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDemarrerModal(s_r10));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "D\xE9marrer ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_43_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_74_tr_43_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const s_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.terminerSeance(s_r10));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "stop");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Terminer ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_43_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118)(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Termin\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 108)(3, "span", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, InfirmierMajeurComponent_ng_container_74_tr_43_span_8_Template, 3, 2, "span", 110)(9, InfirmierMajeurComponent_ng_container_74_tr_43_ng_template_9_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 95);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 86);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, InfirmierMajeurComponent_ng_container_74_tr_43_button_18_Template, 4, 0, "button", 111)(19, InfirmierMajeurComponent_ng_container_74_tr_43_button_19_Template, 4, 0, "button", 112)(20, InfirmierMajeurComponent_ng_container_74_tr_43_span_20_Template, 4, 0, "span", 113);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const noInf_r13 = \u0275\u0275reference(10);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("im-tr-absent", ctx_r2.isAbsentInfirmier(s_r10.infirmier));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r10.patientInit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r10.patient);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r10.infirmier)("ngIfElse", noInf_r13);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.periodeLabel(s_r10.periode));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill--ok", s_r10.statut === "terminee")("pill--stable", s_r10.statut === "en-cours")("pill--neutral", s_r10.statut === "planifiee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.seanceStatutLabel(s_r10.statut), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r10.statut === "planifiee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.statut === "en-cours");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.statut === "terminee");
  }
}
function InfirmierMajeurComponent_ng_container_74_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 119)(2, "span", 15);
    \u0275\u0275text(3, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucune s\xE9ance correspondante ");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierMajeurComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 69)(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 96);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, InfirmierMajeurComponent_ng_container_74_span_9_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 97)(11, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_74_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterPlanningPeriode, $event) || (ctx_r2.filterPlanningPeriode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 74);
    \u0275\u0275text(13, "Tous cr\xE9neaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 98);
    \u0275\u0275text(15, "Matin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 99);
    \u0275\u0275text(17, "Apr\xE8s-midi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 100);
    \u0275\u0275text(19, "Soir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 101)(21, "span", 15);
    \u0275\u0275text(22, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_74_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchPlanning, $event) || (ctx_r2.searchPlanning = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 103)(25, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_74_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.sansInfirmierOnly, $event) || (ctx_r2.sansInfirmierOnly = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Sans infirmier");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 105)(29, "table", 106)(30, "thead")(31, "tr")(32, "th");
    \u0275\u0275text(33, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Infirmier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Cr\xE9neau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275template(43, InfirmierMajeurComponent_ng_container_74_tr_43_Template, 21, 17, "tr", 107)(44, InfirmierMajeurComponent_ng_container_74_tr_44_Template, 5, 0, "tr", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.planningTerminees, " termin\xE9e(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.planningEnCours, " en cours");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.planningPlanifiees, " planifi\xE9e(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.seancesSansInfirmierCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterPlanningPeriode);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchPlanning);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.sansInfirmierOnly);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.filteredSeances);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredSeances.length === 0);
  }
}
function InfirmierMajeurComponent_ng_container_75_div_26_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Critique");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_75_div_26_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "\xC9lev\xE9e");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_75_div_26_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "Normale");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_75_div_26_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, "Trait\xE9e");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_75_div_26_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 138)(1, "span", 15);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "M\xE9decin");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_75_div_26_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_75_div_26_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const a_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.traiterAlerte(a_r16));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Traiter ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_75_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "div", 128);
    \u0275\u0275elementStart(2, "span", 129);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 130)(5, "div", 131)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InfirmierMajeurComponent_ng_container_75_div_26_span_8_Template, 2, 0, "span", 71)(9, InfirmierMajeurComponent_ng_container_75_div_26_span_9_Template, 2, 0, "span", 72)(10, InfirmierMajeurComponent_ng_container_75_div_26_span_10_Template, 2, 0, "span", 132)(11, InfirmierMajeurComponent_ng_container_75_div_26_span_11_Template, 2, 0, "span", 133)(12, InfirmierMajeurComponent_ng_container_75_div_26_span_12_Template, 4, 0, "span", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 135);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 136)(16, "span")(17, "span", 15);
    \u0275\u0275text(18, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "span", 15);
    \u0275\u0275text(22, "precision_manufacturing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span")(25, "span", 15);
    \u0275\u0275text(26, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 137);
    \u0275\u0275template(29, InfirmierMajeurComponent_ng_container_75_div_26_button_29_Template, 4, 0, "button", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("im-alerte-card--traitee", a_r16.statut === "traitee")("im-alerte-card--crit", a_r16.priorite === "critique")("im-alerte-card--warn", a_r16.priorite === "elevee");
    \u0275\u0275advance();
    \u0275\u0275classProp("im-alerte-stripe--crit", a_r16.priorite === "critique")("im-alerte-stripe--warn", a_r16.priorite === "elevee")("im-alerte-stripe--info", a_r16.priorite === "normale");
    \u0275\u0275advance();
    \u0275\u0275classProp("im-alerte-icon--crit", a_r16.priorite === "critique")("im-alerte-icon--warn", a_r16.priorite === "elevee")("im-alerte-icon--info", a_r16.priorite === "normale");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.alertePrioriteIcon(a_r16.priorite), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r16.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r16.priorite === "critique");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r16.priorite === "elevee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r16.priorite === "normale");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r16.statut === "traitee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r16.priorite === "critique");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r16.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r16.patient);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r16.machine);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r16.heure);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", a_r16.statut === "active" && a_r16.priorite !== "critique");
  }
}
function InfirmierMajeurComponent_ng_container_75_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "span", 15);
    \u0275\u0275text(2, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune alerte correspondante ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 69)(3, "span", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 81);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_75_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterAlertePriorite, $event) || (ctx_r2.filterAlertePriorite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 74);
    \u0275\u0275text(11, "Toutes priorit\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 120);
    \u0275\u0275text(13, "Critique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 121);
    \u0275\u0275text(15, "\xC9lev\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 122);
    \u0275\u0275text(17, "Normale");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 123)(19, "span", 15);
    \u0275\u0275text(20, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Les alertes ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "critiques");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " sont r\xE9serv\xE9es au m\xE9decin \u2014 lecture seule pour l'infirmier majeur. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 124);
    \u0275\u0275template(26, InfirmierMajeurComponent_ng_container_75_div_26_Template, 30, 30, "div", 125)(27, InfirmierMajeurComponent_ng_container_75_div_27_Template, 4, 0, "div", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.alertesCritiquesCount, " critique(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.alertesActivesCount, " active(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.alertesTraiteesCount, " trait\xE9e(s)");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterAlertePriorite);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.filteredAlertes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredAlertes.length === 0);
  }
}
function InfirmierMajeurComponent_ng_container_76_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 143);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_76_tr_37_Template_tr_click_0_listener() {
      const p_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPatient(p_r19));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 108)(3, "span", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 86);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 144);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r19.init);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r19.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Gr. ", p_r19.groupeSanguin, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r19.age > 0 ? p_r19.age + " ans" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r19.pathologie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r19.infirmier);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill--stable", p_r19.statutSeance === "en-cours")("pill--ok", p_r19.statutSeance === "terminee")("pill--neutral", p_r19.statutSeance === "planifiee")("pill--warning", p_r19.statutSeance === "aucune");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.patientStatutLabel(p_r19.statutSeance), " ");
  }
}
function InfirmierMajeurComponent_ng_container_76_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145)(2, "span", 15);
    \u0275\u0275text(3, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Aucun patient trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierMajeurComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 69)(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 101)(10, "span", 15);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_76_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchPatients, $event) || (ctx_r2.searchPatients = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 141)(14, "span", 15);
    \u0275\u0275text(15, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Section ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "lecture seule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " \u2014 les modifications sont r\xE9serv\xE9es aux infirmiers assign\xE9s. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 105)(21, "table", 106)(22, "thead")(23, "tr")(24, "th");
    \u0275\u0275text(25, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "\xC2ge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Pathologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Infirmier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "S\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Fiche");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275template(37, InfirmierMajeurComponent_ng_container_76_tr_37_Template, 22, 15, "tr", 142)(38, InfirmierMajeurComponent_ng_container_76_tr_38_Template, 5, 0, "tr", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.patientsEnCours, " en s\xE9ance");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.patientsPlanifies, " planifi\xE9(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.patientsTermines, " termin\xE9(s)");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchPatients);
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r2.filteredPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredPatients.length === 0);
  }
}
function InfirmierMajeurComponent_ng_container_77_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.constantesManquantesCount, " manquante(s)");
  }
}
function InfirmierMajeurComponent_ng_container_77_tr_39_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70)(1, "span", 15);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Saisie");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_77_tr_39_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80)(1, "span", 15);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Manquante");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_77_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 149);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, InfirmierMajeurComponent_ng_container_77_tr_39_span_15_Template, 4, 0, "span", 133)(16, InfirmierMajeurComponent_ng_container_77_tr_39_span_16_Template, 4, 0, "span", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r21.heure);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r21.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r21.infirmier);
    \u0275\u0275advance();
    \u0275\u0275classProp("im-crit-val", !c_r21.saisie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21.pa);
    \u0275\u0275advance();
    \u0275\u0275classProp("im-crit-val", !c_r21.saisie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21.saisie ? c_r21.fc + " bpm" : "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("im-crit-val", !c_r21.saisie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21.saisie ? c_r21.saturation + " %" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r21.saisie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r21.saisie);
  }
}
function InfirmierMajeurComponent_ng_container_77_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145)(2, "span", 15);
    \u0275\u0275text(3, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Aucune constante correspondante ");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierMajeurComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 69)(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InfirmierMajeurComponent_ng_container_77_span_5_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_77_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterConstantesStatut, $event) || (ctx_r2.filterConstantesStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option", 74);
    \u0275\u0275text(8, "Toutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 146);
    \u0275\u0275text(10, "Saisies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 147);
    \u0275\u0275text(12, "Manquantes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 123)(14, "span", 15);
    \u0275\u0275text(15, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Lecture seule \u2014 la saisie des constantes est ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "r\xE9serv\xE9e aux infirmiers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " assign\xE9s. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 105)(21, "table", 106)(22, "thead")(23, "tr")(24, "th");
    \u0275\u0275text(25, "Heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Infirmier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "PA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "FC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "SpO\u2082");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody");
    \u0275\u0275template(39, InfirmierMajeurComponent_ng_container_77_tr_39_Template, 17, 14, "tr", 148)(40, InfirmierMajeurComponent_ng_container_77_tr_40_Template, 5, 0, "tr", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.constantesSaisiesCount, " saisie(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantesManquantesCount > 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterConstantesStatut);
    \u0275\u0275advance(33);
    \u0275\u0275property("ngForOf", ctx_r2.filteredConstantes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredConstantes.length === 0);
  }
}
function InfirmierMajeurComponent_div_78_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.infirmierAbsent.nom, " \u2014 ", ctx_r2.seancesAbsent.length, " s\xE9ance(s)");
  }
}
function InfirmierMajeurComponent_div_78_div_13_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "code", 149);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170)(4, "span", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r23.heure);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r23.patientInit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r23.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.periodeLabel(s_r23.periode));
  }
}
function InfirmierMajeurComponent_div_78_div_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167);
    \u0275\u0275template(1, InfirmierMajeurComponent_div_78_div_13_div_11_div_1_Template, 10, 4, "div", 168);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.seancesAbsent);
  }
}
function InfirmierMajeurComponent_div_78_div_13_div_12_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inf_r25 = ctx.$implicit;
    \u0275\u0275property("ngValue", inf_r25.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", inf_r25.nom, " \u2014 ", inf_r25.seancesSemaine, "/", inf_r25.maxSemaine, " s\xE9ances ");
  }
}
function InfirmierMajeurComponent_div_78_div_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "label");
    \u0275\u0275text(2, "Infirmier(\xE8re) rempla\xE7ant(e) ");
    \u0275\u0275elementStart(3, "span", 172);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 173);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_div_78_div_13_div_12_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.remplacantId, $event) || (ctx_r2.remplacantId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, InfirmierMajeurComponent_div_78_div_13_div_12_option_6_Template, 2, 4, "option", 174);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.remplacantId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.infirmiersDisponibles);
  }
}
function InfirmierMajeurComponent_div_78_div_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune s\xE9ance assign\xE9e \xE0 cet infirmier. ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_div_78_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162)(1, "div", 163)(2, "span", 15);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " est ");
    \u0275\u0275elementStart(8, "span", 164);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, InfirmierMajeurComponent_div_78_div_13_div_11_Template, 2, 1, "div", 165)(12, InfirmierMajeurComponent_div_78_div_13_div_12_Template, 7, 2, "div", 166)(13, InfirmierMajeurComponent_div_78_div_13_div_13_Template, 4, 0, "div", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.infirmierAbsent.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.statutLabel(ctx_r2.infirmierAbsent.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(". ", ctx_r2.seancesAbsent.length, " s\xE9ance(s) lui sont assign\xE9es aujourd'hui.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.seancesAbsent.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.seancesAbsent.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.seancesAbsent.length);
  }
}
function InfirmierMajeurComponent_div_78_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 176);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_78_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmerReaffect());
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Confirmer la r\xE9affectation ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_78_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showReaffectModal = false);
    });
    \u0275\u0275elementStart(1, "div", 151);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_78_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 152)(3, "div", 153)(4, "span", 154);
    \u0275\u0275text(5, "swap_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 155)(7, "h2");
    \u0275\u0275text(8, "R\xE9affecter les S\xE9ances");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, InfirmierMajeurComponent_div_78_p_9_Template, 2, 2, "p", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 156);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_78_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showReaffectModal = false);
    });
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, InfirmierMajeurComponent_div_78_div_13_Template, 14, 6, "div", 157);
    \u0275\u0275elementStart(14, "div", 158)(15, "div", 159)(16, "button", 160);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_78_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showReaffectModal = false);
    });
    \u0275\u0275text(17, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, InfirmierMajeurComponent_div_78_button_18_Template, 4, 0, "button", 161);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.infirmierAbsent);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.infirmierAbsent);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.seancesAbsent.length);
  }
}
function InfirmierMajeurComponent_div_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_79_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 179)(2, "div", 180);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 181)(5, "span", 182);
    \u0275\u0275text(6, "Fiche Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 183);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 184)(10, "span")(11, "span", 15);
    \u0275\u0275text(12, "cake");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "span", 15);
    \u0275\u0275text(16, "biotech");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 86);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 185);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_79_div_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 186)(24, "div", 187)(25, "div", 188)(26, "div", 189)(27, "span", 15);
    \u0275\u0275text(28, "bloodtype");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "span", 190);
    \u0275\u0275text(31, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong", 191);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 188)(35, "div", 192)(36, "span", 15);
    \u0275\u0275text(37, "medical_services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "span", 190);
    \u0275\u0275text(40, "Infirmier assign\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong", 191);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 188)(44, "div", 193)(45, "span", 15);
    \u0275\u0275text(46, "call");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div")(48, "span", 190);
    \u0275\u0275text(49, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "strong", 191);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 194)(53, "span", 15);
    \u0275\u0275text(54, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Fiche en ");
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57, "lecture seule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " \u2014 modifications r\xE9serv\xE9es aux infirmiers assign\xE9s ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 195)(60, "button", 196);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_79_div_1_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(61, "span", 15);
    \u0275\u0275text(62, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "Fermer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.init);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.age > 0 ? ctx_r2.selectedPatient.age + " ans" : "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.pathologie);
    \u0275\u0275advance();
    \u0275\u0275classProp("pill--stable", ctx_r2.selectedPatient.statutSeance === "en-cours")("pill--ok", ctx_r2.selectedPatient.statutSeance === "terminee")("pill--neutral", ctx_r2.selectedPatient.statutSeance === "planifiee")("pill--warning", ctx_r2.selectedPatient.statutSeance === "aucune");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.patientStatutLabel(ctx_r2.selectedPatient.statutSeance), " ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.groupeSanguin || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.infirmier || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.telephone || "\u2014");
  }
}
function InfirmierMajeurComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_79_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275template(1, InfirmierMajeurComponent_div_79_div_1_Template, 64, 16, "div", 177);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient);
  }
}
function InfirmierMajeurComponent_div_80_div_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 210);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_80_div_1_button_33_Template_button_click_0_listener() {
      const opt_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.selectedDureeMin = opt_r32.minutes;
      return \u0275\u0275resetView(ctx_r2.demarrerError = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("im-duree-btn--active", ctx_r2.selectedDureeMin === opt_r32.minutes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r32.label, " ");
  }
}
function InfirmierMajeurComponent_div_80_div_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 211);
    \u0275\u0275text(1, "Veuillez s\xE9lectionner une dur\xE9e.");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_div_80_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 212)(1, "span", 15);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "D\xE9but ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 213);
    \u0275\u0275text(8, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Fin pr\xE9vue ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.seanceADemarrer.heure);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.calcHeureFinPreview(ctx_r2.seanceADemarrer.heure, ctx_r2.selectedDureeMin));
  }
}
function InfirmierMajeurComponent_div_80_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 198);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_80_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 179)(2, "div", 199)(3, "span", 200);
    \u0275\u0275text(4, "play_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 181)(6, "span", 182);
    \u0275\u0275text(7, "D\xE9marrer une s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 183);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 184)(11, "span")(12, "span", 15);
    \u0275\u0275text(13, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 95);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 185);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_80_div_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDemarrerModal());
    });
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 186)(21, "div", 201)(22, "span", 15);
    \u0275\u0275text(23, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Choisissez la ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "dur\xE9e pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " de la s\xE9ance. L'heure de fin sera calcul\xE9e automatiquement. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 202);
    \u0275\u0275text(29, " Dur\xE9e de la s\xE9ance ");
    \u0275\u0275elementStart(30, "span", 172);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 203);
    \u0275\u0275template(33, InfirmierMajeurComponent_div_80_div_1_button_33_Template, 2, 3, "button", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, InfirmierMajeurComponent_div_80_div_1_span_34_Template, 2, 0, "span", 205)(35, InfirmierMajeurComponent_div_80_div_1_div_35_Template, 13, 2, "div", 206);
    \u0275\u0275elementStart(36, "div", 207)(37, "div", 188)(38, "div", 192)(39, "span", 15);
    \u0275\u0275text(40, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "span", 190);
    \u0275\u0275text(43, "Infirmier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong", 191);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 188)(47, "div", 193)(48, "span", 15);
    \u0275\u0275text(49, "wb_sunny");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "span", 190);
    \u0275\u0275text(52, "Cr\xE9neau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong", 191);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 208)(56, "button", 196);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_80_div_1_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDemarrerModal());
    });
    \u0275\u0275elementStart(57, "span", 15);
    \u0275\u0275text(58, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 209);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_80_div_1_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmerDemarrer());
    });
    \u0275\u0275elementStart(61, "span", 15);
    \u0275\u0275text(62, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, "D\xE9marrer la s\xE9ance ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.seanceADemarrer.patient);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("D\xE9but : ", ctx_r2.seanceADemarrer.heure, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.periodeLabel(ctx_r2.seanceADemarrer.periode));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.dureeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.demarrerError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedDureeMin && ctx_r2.seanceADemarrer);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.seanceADemarrer.infirmier || "Non assign\xE9");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.periodeLabel(ctx_r2.seanceADemarrer.periode));
  }
}
function InfirmierMajeurComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDemarrerModal());
    });
    \u0275\u0275template(1, InfirmierMajeurComponent_div_80_div_1_Template, 64, 8, "div", 197);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.seanceADemarrer);
  }
}
var InfirmierMajeurComponent = class _InfirmierMajeurComponent {
  authService;
  supervisionService;
  alerteService;
  patientService;
  constantesVitalesService;
  isLight = false;
  sidebarOpen = false;
  activeSection = "dashboard";
  currentUser = null;
  loading = false;
  apiError = "";
  dashboard = null;
  constructor(authService, supervisionService, alerteService, patientService, constantesVitalesService) {
    this.authService = authService;
    this.supervisionService = supervisionService;
    this.alerteService = alerteService;
    this.patientService = patientService;
    this.constantesVitalesService = constantesVitalesService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUtilisateur();
    this.loadBackendData();
  }
  get userInitials() {
    const u = this.currentUser;
    return `${u?.prenom?.[0] ?? ""}${u?.nom?.[0] ?? ""}`.toUpperCase() || "IM";
  }
  get userName() {
    const u = this.currentUser;
    return u ? `${u.prenom} ${u.nom}`.trim() : "Infirmier Major";
  }
  toggleTheme() {
    this.isLight = !this.isLight;
  }
  logout() {
    this.authService.logout();
  }
  setSection(s) {
    this.activeSection = s;
    this.sidebarOpen = false;
  }
  get sectionTitle() {
    const m = {
      dashboard: "Tableau de Bord",
      equipe: "\xC9quipe Infirmi\xE8re",
      planning: "Planning des S\xE9ances",
      alertes: "Alertes du Centre",
      patients: "Liste des Patients",
      constantes: "Constantes Vitales"
    };
    return m[this.activeSection] ?? "Tableau de Bord";
  }
  loadBackendData() {
    this.loading = true;
    this.apiError = "";
    const today = this.todayIso();
    forkJoin({
      dashboard: this.supervisionService.getDashboard().pipe(catchError(() => of(null))),
      charge: this.supervisionService.getChargeHebdomadaire(today).pipe(catchError(() => of([]))),
      planning: this.supervisionService.getPlanning(today, today).pipe(catchError(() => of([]))),
      alertes: this.alerteService.getAll().pipe(catchError(() => of([]))),
      patients: this.patientService.getAll().pipe(catchError(() => of([]))),
      constantesManquantes: this.supervisionService.getConstantesManquantes(today).pipe(catchError(() => of([])))
    }).subscribe({
      next: (data) => {
        this.dashboard = data.dashboard;
        this.applyInfirmiers(data.charge);
        this.seances = data.planning.map((s) => this.mapSeance(s));
        this.alertes = data.alertes.map((a) => this.mapAlerte(a));
        this.patients = data.patients.map((p) => this.mapPatient(p));
        this.applyConstantes(data.patients, data.constantesManquantes);
        this.syncPatientSeanceStatus();
        this.loading = false;
      },
      error: () => {
        this.apiError = "Impossible de charger les donn\xE9es de supervision.";
        this.loading = false;
      }
    });
  }
  applyInfirmiers(charges) {
    if (!charges.length)
      return;
    this.infirmiers = charges.map((item) => {
      const u = item.infirmier;
      const fullName = this.fullName(u.prenom, u.nom);
      return {
        id: u.id,
        init: this.initials(fullName),
        nom: fullName,
        role: "Infirmier(e)",
        statut: "en-service",
        vacation: u.service || "Service",
        telephone: u.telephone || "-",
        seancesSemaine: item.nombreSeancesCetteSemaine,
        maxSemaine: 10,
        creneaux: []
      };
    });
  }
  applyConstantes(patients, manquantes) {
    const missingRows = manquantes.map((s) => ({
      id: s.id,
      heure: this.heureByCreneau(s.creneau),
      patient: this.fullName(s.patient?.prenom, s.patient?.nom),
      infirmier: s.infirmier ? this.fullName(s.infirmier.prenom, s.infirmier.nom) : "A assigner",
      pa: "-",
      fc: 0,
      saturation: 0,
      saisie: false
    }));
    if (!patients.length) {
      this.constantes = missingRows;
      return;
    }
    forkJoin(patients.map((patient) => this.constantesVitalesService.getByPatient(patient.id).pipe(catchError(() => of([]))))).subscribe((rows) => {
      const saisies = rows.flat().filter((c) => c.date === this.todayIso()).map((c) => ({
        id: c.id,
        heure: this.timeFromIso(c.saisieAt),
        patient: "Patient",
        infirmier: c.saisiePar ? this.fullName(c.saisiePar.prenom, c.saisiePar.nom) : "-",
        pa: `${c.tensionSys}/${c.tensionDia}`,
        fc: c.bpm,
        saturation: 0,
        saisie: true
      }));
      this.constantes = [...saisies, ...missingRows];
    });
  }
  mapSeance(s) {
    const patient = this.fullName(s.patient?.prenom, s.patient?.nom);
    return {
      id: s.id,
      heure: this.heureByCreneau(s.creneau),
      heureEnd: this.heureFinByCreneau(s.creneau),
      patient,
      patientInit: this.initials(patient),
      infirmier: s.infirmier ? this.shortName(s.infirmier.prenom, s.infirmier.nom) : null,
      machine: "-",
      duree: "4h",
      statut: this.mapStatutSeance(s.statut),
      periode: this.mapPeriode(s.creneau)
    };
  }
  mapAlerte(a) {
    const patient = this.fullName(a.patient?.prenom, a.patient?.nom);
    return {
      id: a.id,
      heure: this.timeFromIso(a.dateCreation),
      patient,
      machine: "-",
      type: a.type,
      message: this.cleanAlertMessage(a),
      priorite: this.mapPriorite(a.type),
      statut: a.lue ? "traitee" : "active"
    };
  }
  cleanAlertMessage(a) {
    let msg = a.message ?? "";
    if (/s[eé]ance\s*#?\d+/i.test(msg)) {
      const patientNom = this.fullName(a.patient?.prenom, a.patient?.nom);
      const dateSeance = a.dateCreation ? new Date(a.dateCreation).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }) : "";
      msg = msg.replace(/s[eé]ance\s*#?\d+/gi, `s\xE9ance de ${patientNom}${dateSeance ? " du " + dateSeance : ""}`);
    }
    return msg;
  }
  mapPatient(p) {
    const nom = this.fullName(p.prenom, p.nom);
    return {
      id: p.id,
      init: this.initials(nom),
      nom,
      age: this.ageFromDate(p.dateNaissance),
      pathologie: p.dossierPatient?.pathologie || "-",
      infirmier: "A assigner",
      machine: "-",
      statutSeance: "aucune",
      groupeSanguin: p.groupeSanguin || "-",
      telephone: p.telephone || "-"
    };
  }
  syncPatientSeanceStatus() {
    this.patients = this.patients.map((patient) => {
      const seance = this.seances.find((s) => s.patient === patient.nom);
      return seance ? __spreadProps(__spreadValues({}, patient), { statutSeance: seance.statut, infirmier: seance.infirmier || "A assigner", machine: seance.machine }) : patient;
    });
  }
  todayIso() {
    const d = /* @__PURE__ */ new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  fullName(prenom, nom) {
    return [prenom, nom].filter(Boolean).join(" ").trim() || "-";
  }
  initials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "?";
  }
  shortName(prenom, nom) {
    return `${prenom?.[0] ? prenom[0] + ". " : ""}${nom ?? ""}`.trim() || "-";
  }
  mapPeriode(creneau) {
    const value = String(creneau || "").toUpperCase();
    if (value === "SOIR")
      return "soir";
    if (value === "APRES_MIDI" || value === "APRES-MIDI")
      return "apres-midi";
    return "matin";
  }
  mapStatutSeance(statut) {
    const value = String(statut || "").toUpperCase();
    if (value === "EN_COURS")
      return "en-cours";
    if (value === "TERMINEE")
      return "terminee";
    return "planifiee";
  }
  mapPriorite(type) {
    const value = String(type || "").toUpperCase();
    if (["CRITIQUE", "CRITICAL", "ROUGE"].includes(value))
      return "critique";
    if (["ATTENTION", "ORANGE", "WARNING"].includes(value))
      return "elevee";
    return "normale";
  }
  heureByCreneau(creneau) {
    const p = this.mapPeriode(creneau);
    return p === "soir" ? "18:00" : p === "apres-midi" ? "13:30" : "07:30";
  }
  heureFinByCreneau(creneau) {
    const p = this.mapPeriode(creneau);
    return p === "soir" ? "22:00" : p === "apres-midi" ? "17:30" : "11:30";
  }
  timeFromIso(value) {
    if (!value)
      return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return value.slice(11, 16) || "-";
    return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  }
  ageFromDate(value) {
    if (!value)
      return 0;
    const birth = new Date(value);
    const now = /* @__PURE__ */ new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || m === 0 && now.getDate() < birth.getDate())
      age--;
    return Math.max(age, 0);
  }
  // ── Data ─────────────────────────────────────────────────────────────────
  infirmiers = [
    { id: 1, init: "NT", nom: "Nadia Tazi", role: "Infirmier(e)", statut: "en-service", vacation: "Matin", telephone: "06 12 34 56 78", seancesSemaine: 8, maxSemaine: 10, creneaux: ["Matin"] },
    { id: 2, init: "AH", nom: "Amine Haddad", role: "Infirmier(e)", statut: "absent", vacation: "Matin", telephone: "06 23 45 67 89", seancesSemaine: 0, maxSemaine: 10, creneaux: ["Matin"] },
    { id: 3, init: "LM", nom: "Leila Mansouri", role: "Infirmier(e)", statut: "en-service", vacation: "Matin", telephone: "06 34 56 78 90", seancesSemaine: 6, maxSemaine: 10, creneaux: ["Matin", "Apr\xE8s-midi"] },
    { id: 4, init: "RB", nom: "Rachid Berrada", role: "Infirmier(e)", statut: "en-service", vacation: "Soir", telephone: "06 45 67 89 01", seancesSemaine: 7, maxSemaine: 10, creneaux: ["Apr\xE8s-midi", "Soir"] },
    { id: 5, init: "YK", nom: "Youssef Kettani", role: "Aide-soignant", statut: "en-service", vacation: "Apr\xE8s-midi", telephone: "06 56 78 90 12", seancesSemaine: 5, maxSemaine: 10, creneaux: ["Apr\xE8s-midi"] },
    { id: 6, init: "SO", nom: "Sara Oulmane", role: "Infirmier(e)", statut: "conge", vacation: "Cong\xE9", telephone: "06 67 89 01 23", seancesSemaine: 0, maxSemaine: 10, creneaux: [] }
  ];
  seances = [
    { id: 1, heure: "07:30", heureEnd: "11:30", patient: "Alaoui K.", patientInit: "AK", infirmier: "N. Tazi", machine: "M-03", duree: "4h", statut: "terminee", periode: "matin" },
    { id: 2, heure: "08:00", heureEnd: "12:00", patient: "Saidi B.", patientInit: "SB", infirmier: "L. Mansouri", machine: "M-07", duree: "4h", statut: "terminee", periode: "matin" },
    { id: 3, heure: "09:00", heureEnd: "13:00", patient: "Moussaoui H.", patientInit: "MH", infirmier: "A. Haddad", machine: "M-02", duree: "4h", statut: "planifiee", periode: "matin" },
    { id: 4, heure: "09:30", heureEnd: "13:30", patient: "Ouali B.", patientInit: "OB", infirmier: "N. Tazi", machine: "M-05", duree: "4h", statut: "en-cours", periode: "matin" },
    { id: 5, heure: "10:30", heureEnd: "14:30", patient: "Benali M.", patientInit: "BM", infirmier: "L. Mansouri", machine: "M-08", duree: "4h", statut: "en-cours", periode: "matin" },
    { id: 6, heure: "14:00", heureEnd: "17:30", patient: "Filali Z.", patientInit: "FZ", infirmier: "R. Berrada", machine: "M-09", duree: "3.5h", statut: "planifiee", periode: "apres-midi" },
    { id: 7, heure: "15:30", heureEnd: "19:30", patient: "El Idrissi F.", patientInit: "EI", infirmier: "Y. Kettani", machine: "M-11", duree: "4h", statut: "planifiee", periode: "apres-midi" },
    { id: 8, heure: "16:30", heureEnd: "20:30", patient: "Chraibi A.", patientInit: "CA", infirmier: null, machine: "M-04", duree: "4h", statut: "planifiee", periode: "apres-midi" },
    { id: 9, heure: "18:00", heureEnd: "22:00", patient: "Kettani S.", patientInit: "KS", infirmier: "R. Berrada", machine: "M-06", duree: "4h", statut: "planifiee", periode: "soir" },
    { id: 10, heure: "19:30", heureEnd: "23:30", patient: "Oulmane Y.", patientInit: "OY", infirmier: "N. Tazi", machine: "M-10", duree: "4h", statut: "planifiee", periode: "soir" }
  ];
  patients = [
    { id: 1, init: "AK", nom: "Alaoui Khalid", age: 58, pathologie: "IRC terminale", infirmier: "N. Tazi", machine: "M-03", statutSeance: "terminee", groupeSanguin: "B+", telephone: "06 11 22 33 44" },
    { id: 2, init: "MH", nom: "Moussaoui El Hassan", age: 62, pathologie: "DRC avanc\xE9e", infirmier: "A. Haddad", machine: "M-02", statutSeance: "planifiee", groupeSanguin: "A+", telephone: "06 22 33 44 55" },
    { id: 3, init: "OB", nom: "Ouali Badreddine", age: 45, pathologie: "IRC", infirmier: "N. Tazi", machine: "M-05", statutSeance: "en-cours", groupeSanguin: "O+", telephone: "06 33 44 55 66" },
    { id: 4, init: "SB", nom: "Saidi Bouchra", age: 51, pathologie: "IRC", infirmier: "L. Mansouri", machine: "M-07", statutSeance: "terminee", groupeSanguin: "A+", telephone: "06 44 55 66 77" },
    { id: 5, init: "FZ", nom: "Filali Zineb", age: 67, pathologie: "DRC", infirmier: "R. Berrada", machine: "M-09", statutSeance: "planifiee", groupeSanguin: "AB+", telephone: "06 55 66 77 88" },
    { id: 6, init: "BM", nom: "Benali Mohammed", age: 55, pathologie: "IRC terminale", infirmier: "L. Mansouri", machine: "M-08", statutSeance: "en-cours", groupeSanguin: "O-", telephone: "06 66 77 88 99" },
    { id: 7, init: "EI", nom: "El Idrissi Fatima", age: 49, pathologie: "IRC", infirmier: "Y. Kettani", machine: "M-11", statutSeance: "planifiee", groupeSanguin: "B-", telephone: "06 77 88 99 00" },
    { id: 8, init: "CA", nom: "Chraibi Ahmed", age: 71, pathologie: "DRC", infirmier: "\xC0 assigner", machine: "M-04", statutSeance: "planifiee", groupeSanguin: "A-", telephone: "06 88 99 00 11" }
  ];
  alertes = [
    { id: 1, heure: "09:45", patient: "Moussaoui El Hassan", machine: "M-02", type: "PA critique", message: "Pression art\xE9rielle 180/110 \u2014 d\xE9passe le seuil critique. Intervention m\xE9dicale requise.", priorite: "critique", statut: "active" },
    { id: 2, heure: "11:05", patient: "Ouali Badreddine", machine: "M-05", type: "Alarme pression", message: "Alarme pression veineuse d\xE9clench\xE9e \u2014 d\xE9bit r\xE9duit automatiquement \xE0 200 mL/min.", priorite: "elevee", statut: "active" },
    { id: 3, heure: "08:30", patient: "Benali Mohammed", machine: "M-08", type: "Constantes manquantes", message: "Constantes vitales non saisies depuis le d\xE9but de s\xE9ance (30 min \xE9coul\xE9es).", priorite: "elevee", statut: "active" },
    { id: 4, heure: "10:15", patient: "Saidi Bouchra", machine: "M-07", type: "Rapport incomplet", message: "S\xE9ance termin\xE9e \u2014 rapport de fin non compl\xE9t\xE9. Constantes de fin \xE0 saisir.", priorite: "normale", statut: "active" },
    { id: 5, heure: "07:50", patient: "Alaoui Khalid", machine: "M-03", type: "Poids hors cible", message: "Poids avant s\xE9ance (74.2 kg) d\xE9passe le poids cible de 1.2 kg. Situation surveill\xE9e.", priorite: "normale", statut: "traitee" }
  ];
  constantes = [
    { id: 1, heure: "07:30", patient: "Alaoui Khalid", infirmier: "N. Tazi", pa: "138/88", fc: 72, saturation: 97, saisie: true },
    { id: 2, heure: "08:00", patient: "Saidi Bouchra", infirmier: "L. Mansouri", pa: "128/82", fc: 74, saturation: 98, saisie: true },
    { id: 3, heure: "09:30", patient: "Ouali Badreddine", infirmier: "N. Tazi", pa: "122/76", fc: 68, saturation: 98, saisie: true },
    { id: 4, heure: "10:30", patient: "Benali Mohammed", infirmier: "L. Mansouri", pa: "\u2014", fc: 0, saturation: 0, saisie: false },
    { id: 5, heure: "09:00", patient: "Moussaoui El Hassan", infirmier: "\xC0 assigner", pa: "\u2014", fc: 0, saturation: 0, saisie: false },
    { id: 6, heure: "16:30", patient: "Chraibi Ahmed", infirmier: "\xC0 assigner", pa: "\u2014", fc: 0, saturation: 0, saisie: false }
  ];
  // ── Dashboard ─────────────────────────────────────────────────────────────
  get sessionsMatin() {
    return this.seances.filter((s) => s.periode === "matin").length;
  }
  get sessionsApresMidi() {
    return this.seances.filter((s) => s.periode === "apres-midi").length;
  }
  get sessionsSoir() {
    return this.seances.filter((s) => s.periode === "soir").length;
  }
  get sessionsEnCours() {
    return this.seances.filter((s) => s.statut === "en-cours").length;
  }
  get constantesManquantes() {
    return this.constantes.filter((c) => !c.saisie).length;
  }
  get seancesTerminees() {
    return this.seances.filter((s) => s.statut === "terminee").length;
  }
  get seancesActives() {
    return this.seances.filter((s) => s.statut !== "planifiee").length;
  }
  get tauxCompletion() {
    return this.seancesActives ? Math.round(this.seancesTerminees / this.seancesActives * 100) : 0;
  }
  get chargeParInfirmier() {
    const map = /* @__PURE__ */ new Map();
    this.seances.forEach((s) => {
      const k = s.infirmier ?? "Non assign\xE9";
      map.set(k, (map.get(k) ?? 0) + 1);
    });
    const items = Array.from(map.entries()).map(([label, count]) => ({ label, count, pct: 0 }));
    const max = Math.max(...items.map((i) => i.count), 1);
    return items.sort((a, b) => b.count - a.count).map((i) => __spreadProps(__spreadValues({}, i), { pct: i.count / max }));
  }
  CIRC = 282.74;
  get alertesDonut() {
    const raw = [
      { label: "Critique", count: this.alertes.filter((a) => a.priorite === "critique").length, color: "#ef4444" },
      { label: "\xC9lev\xE9e", count: this.alertes.filter((a) => a.priorite === "elevee").length, color: "#f59e0b" },
      { label: "Normale", count: this.alertes.filter((a) => a.priorite === "normale").length, color: "#4EA8F8" }
    ].filter((d) => d.count > 0);
    const total = raw.reduce((s, d) => s + d.count, 0) || 1;
    let rot = -90;
    return raw.map((d) => {
      const pct = d.count / total;
      const seg = __spreadProps(__spreadValues({}, d), { dasharray: `${Math.max(0, pct * this.CIRC - 1).toFixed(1)} ${this.CIRC}`, rotate: rot });
      rot += pct * 360;
      return seg;
    });
  }
  get totalAlertes() {
    return this.alertes.length;
  }
  get gaugeDash() {
    return `${(this.tauxCompletion / 100 * 251.3).toFixed(1)} 251.3`;
  }
  get gaugeColor() {
    return this.tauxCompletion >= 80 ? "var(--c-teal)" : this.tauxCompletion >= 50 ? "var(--c-amber)" : "var(--c-red)";
  }
  // ── Équipe ────────────────────────────────────────────────────────────────
  filterEquipeStatut = "";
  get filteredEquipe() {
    return this.infirmiers.filter((i) => !this.filterEquipeStatut || i.statut === this.filterEquipeStatut);
  }
  get staffEnService() {
    return this.infirmiers.filter((i) => i.statut === "en-service").length;
  }
  get staffAbsents() {
    return this.infirmiers.filter((i) => i.statut === "absent").length;
  }
  get staffConge() {
    return this.infirmiers.filter((i) => i.statut === "conge").length;
  }
  statutClass(s) {
    return s === "en-service" ? "ok" : s === "absent" ? "crit" : "warn";
  }
  statutLabel(s) {
    return { "en-service": "En service", absent: "Absent", conge: "Cong\xE9" }[s] ?? s;
  }
  workloadPct(inf) {
    return Math.min(100, Math.round(inf.seancesSemaine / inf.maxSemaine * 100));
  }
  workloadColor(inf) {
    const p = this.workloadPct(inf);
    return p >= 90 ? "var(--c-red)" : p >= 70 ? "var(--c-amber)" : "var(--c-teal)";
  }
  showReaffectModal = false;
  infirmierAbsent = null;
  remplacantId = 0;
  toInitials(nom) {
    const p = nom.split(" ");
    return `${p[0][0]}. ${p.slice(1).join(" ")}`;
  }
  get seancesAbsent() {
    if (!this.infirmierAbsent)
      return [];
    return this.seances.filter((s) => s.infirmier === this.toInitials(this.infirmierAbsent.nom));
  }
  get infirmiersDisponibles() {
    return this.infirmiers.filter((i) => i.statut === "en-service");
  }
  openReaffect(inf) {
    this.infirmierAbsent = inf;
    this.remplacantId = this.infirmiersDisponibles[0]?.id ?? 0;
    this.showReaffectModal = true;
  }
  confirmerReaffect() {
    if (!this.infirmierAbsent || !this.remplacantId)
      return;
    const remplacant = this.infirmiers.find((i) => i.id === +this.remplacantId);
    if (!remplacant)
      return;
    this.supervisionService.reaffecterSeances({
      infirmierAbsentId: this.infirmierAbsent.id,
      infirmierRemplacantId: +this.remplacantId,
      debut: this.todayIso(),
      fin: this.todayIso()
    }).subscribe({
      next: (response) => {
        this.showToast(response.nombreSeancesReaffectees > 0 ? `${response.nombreSeancesReaffectees} s\xE9ance(s) r\xE9affect\xE9e(s) \xE0 ${remplacant.nom}` : "Aucune s\xE9ance \xE0 r\xE9affecter", response.nombreSeancesReaffectees > 0 ? "success" : "info");
        this.showReaffectModal = false;
        this.infirmierAbsent = null;
        this.loadBackendData();
      },
      error: () => this.showToast("R\xE9affectation impossible: v\xE9rifiez la disponibilit\xE9 du rempla\xE7ant", "error")
    });
  }
  isAbsentInfirmier(name) {
    if (!name)
      return false;
    return this.infirmiers.some((i) => this.toInitials(i.nom) === name && i.statut !== "en-service");
  }
  // ── Planning ──────────────────────────────────────────────────────────────
  filterPlanningPeriode = "";
  sansInfirmierOnly = false;
  searchPlanning = "";
  get filteredSeances() {
    const q = this.searchPlanning.trim().toLowerCase();
    return this.seances.filter((s) => {
      if (this.filterPlanningPeriode && s.periode !== this.filterPlanningPeriode)
        return false;
      if (this.sansInfirmierOnly && s.infirmier !== null)
        return false;
      if (q && !s.patient.toLowerCase().includes(q) && !(s.infirmier ?? "").toLowerCase().includes(q))
        return false;
      return true;
    });
  }
  get seancesSansInfirmierCount() {
    return this.seances.filter((s) => s.infirmier === null).length;
  }
  get planningTerminees() {
    return this.seances.filter((s) => s.statut === "terminee").length;
  }
  get planningEnCours() {
    return this.seances.filter((s) => s.statut === "en-cours").length;
  }
  get planningPlanifiees() {
    return this.seances.filter((s) => s.statut === "planifiee").length;
  }
  dureeOptions = [
    { label: "30 min", minutes: 30 },
    { label: "1h", minutes: 60 },
    { label: "1h 30", minutes: 90 },
    { label: "2h", minutes: 120 },
    { label: "2h 30", minutes: 150 },
    { label: "3h", minutes: 180 },
    { label: "3h 30", minutes: 210 },
    { label: "4h", minutes: 240 },
    { label: "4h 30", minutes: 270 },
    { label: "5h", minutes: 300 }
  ];
  showDemarrerModal = false;
  seanceADemarrer = null;
  selectedDureeMin = 240;
  demarrerError = false;
  openDemarrerModal(s) {
    this.seanceADemarrer = s;
    this.selectedDureeMin = 240;
    this.demarrerError = false;
    this.showDemarrerModal = true;
  }
  closeDemarrerModal() {
    this.showDemarrerModal = false;
    this.seanceADemarrer = null;
    this.demarrerError = false;
  }
  confirmerDemarrer() {
    if (!this.selectedDureeMin) {
      this.demarrerError = true;
      return;
    }
    const s = this.seanceADemarrer;
    const fin = this.addMinutesToTime(s.heure, this.selectedDureeMin);
    s.heureEnd = fin;
    this.closeDemarrerModal();
    this.demarrerSeance(s, fin);
  }
  calcHeureFinPreview(heureDebut, dureeMin) {
    return this.addMinutesToTime(heureDebut, dureeMin);
  }
  addMinutesToTime(hhmm, minutes) {
    const [h, m] = (hhmm || "07:30").split(":").map(Number);
    const total = h * 60 + m + minutes;
    return `${String(Math.floor(total / 60) % 24).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
  }
  demarrerSeance(s, heureFinPrevue) {
    this.supervisionService.demarrerSeance(s.id, heureFinPrevue, this.selectedDureeMin).subscribe({
      next: (updated) => {
        Object.assign(s, this.mapSeance(updated));
        if (heureFinPrevue)
          s.heureEnd = heureFinPrevue;
        this.syncPatientSeanceStatus();
        this.showToast(`S\xE9ance ${s.patient} d\xE9marr\xE9e \u2014 fin pr\xE9vue \xE0 ${s.heureEnd}`, "success");
      },
      error: () => this.showToast("Impossible de d\xE9marrer la s\xE9ance", "error")
    });
  }
  terminerSeance(s) {
    this.supervisionService.terminerSeance(s.id).subscribe({
      next: (updated) => {
        Object.assign(s, this.mapSeance(updated));
        this.syncPatientSeanceStatus();
        this.showToast(`S\xE9ance ${s.patient} termin\xE9e`, "success");
      },
      error: () => this.showToast("Impossible de terminer la s\xE9ance", "error")
    });
  }
  periodeLabel(p) {
    return { matin: "Matin", "apres-midi": "Apr\xE8s-midi", soir: "Soir" }[p] ?? p;
  }
  seanceStatutClass(s) {
    return s === "terminee" ? "ok" : s === "en-cours" ? "info" : "purple";
  }
  seanceStatutLabel(s) {
    return { terminee: "Termin\xE9e", "en-cours": "En cours", planifiee: "Planifi\xE9e" }[s] ?? s;
  }
  // ── Alertes ───────────────────────────────────────────────────────────────
  filterAlertePriorite = "";
  get filteredAlertes() {
    return this.alertes.filter((a) => !this.filterAlertePriorite || a.priorite === this.filterAlertePriorite);
  }
  get alertesActivesCount() {
    return this.alertes.filter((a) => a.statut === "active").length;
  }
  get alertesCritiquesCount() {
    return this.alertes.filter((a) => a.priorite === "critique" && a.statut === "active").length;
  }
  get alertesTraiteesCount() {
    return this.alertes.filter((a) => a.statut === "traitee").length;
  }
  get alertesCritiquesTotal() {
    return this.alertes.filter((a) => a.priorite === "critique").length;
  }
  get alertesEleveeTotal() {
    return this.alertes.filter((a) => a.priorite === "elevee").length;
  }
  get alertesNormaleTotal() {
    return this.alertes.filter((a) => a.priorite === "normale").length;
  }
  traiterAlerte(a) {
    if (a.priorite === "critique") {
      this.showToast("Alertes critiques \u2014 traitement r\xE9serv\xE9 au m\xE9decin", "warning");
      return;
    }
    this.alerteService.marquerLue(a.id).subscribe({
      next: () => {
        a.statut = "traitee";
        this.showToast(`"${a.type}" marqu\xE9e comme trait\xE9e`, "success");
      },
      error: () => this.showToast("Impossible de traiter cette alerte", "error")
    });
  }
  alertePrioriteClass(p) {
    return p === "critique" ? "crit" : p === "elevee" ? "warn" : "info";
  }
  alertePrioriteIcon(p) {
    return p === "critique" ? "crisis_alert" : p === "elevee" ? "warning" : "info";
  }
  // ── Patients ──────────────────────────────────────────────────────────────
  searchPatients = "";
  selectedPatient = null;
  showPatientModal = false;
  get filteredPatients() {
    const q = this.searchPatients.trim().toLowerCase();
    return this.patients.filter((p) => !q || p.nom.toLowerCase().includes(q) || p.pathologie.toLowerCase().includes(q));
  }
  openPatient(p) {
    this.selectedPatient = p;
    this.showPatientModal = true;
  }
  closePatient() {
    this.showPatientModal = false;
    this.selectedPatient = null;
  }
  patientStatutClass(s) {
    return s === "en-cours" ? "info" : s === "terminee" ? "ok" : s === "planifiee" ? "purple" : "";
  }
  patientStatutLabel(s) {
    return { "en-cours": "En cours", terminee: "Termin\xE9e", planifiee: "Planifi\xE9e", aucune: "Aucune" }[s] ?? s;
  }
  // ── Constantes ────────────────────────────────────────────────────────────
  filterConstantesStatut = "";
  get filteredConstantes() {
    return this.constantes.filter((c) => {
      if (this.filterConstantesStatut === "saisie")
        return c.saisie;
      if (this.filterConstantesStatut === "manquante")
        return !c.saisie;
      return true;
    });
  }
  get constantesSaisiesCount() {
    return this.constantes.filter((c) => c.saisie).length;
  }
  get constantesManquantesCount() {
    return this.constantes.filter((c) => !c.saisie).length;
  }
  // ── Patient counts ────────────────────────────────────────────────────────
  get patientsEnCours() {
    return this.patients.filter((p) => p.statutSeance === "en-cours").length;
  }
  get patientsPlanifies() {
    return this.patients.filter((p) => p.statutSeance === "planifiee").length;
  }
  get patientsTermines() {
    return this.patients.filter((p) => p.statutSeance === "terminee").length;
  }
  // ── Toast ─────────────────────────────────────────────────────────────────
  toastId = 0;
  toasts = [];
  showToast(message, type = "info") {
    const id = ++this.toastId;
    this.toasts.push({ id, message, type });
    setTimeout(() => this.toasts = this.toasts.filter((t) => t.id !== id), 3500);
  }
  dismissToast(id) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
  toastIcon(t) {
    return { success: "check_circle", warning: "warning", error: "error", info: "info" }[t] ?? "info";
  }
  static \u0275fac = function InfirmierMajeurComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfirmierMajeurComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SupervisionService), \u0275\u0275directiveInject(AlerteService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(ConstantesVitalesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfirmierMajeurComponent, selectors: [["app-infirmier-majeur"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 81, vars: 34, consts: [["noInf", ""], [1, "toast-stack"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "im-shell"], [1, "im-topbar"], [1, "brand"], [1, "brand__mark"], ["width", "28", "height", "28", "viewBox", "0 0 52 52", "fill", "none"], ["cx", "26", "cy", "26", "r", "24", "fill", "rgba(0,217,196,0.15)", "stroke", "rgba(0,217,196,0.5)", "stroke-width", "1.5"], ["d", "M26 13v10M21 18h10", "stroke", "#00D9C4", "stroke-width", "2.8", "stroke-linecap", "round"], ["d", "M14 33c0 0 3-9 6-9s4 6 6 6 3-9 6-9 6 9 6 9", "stroke", "#00D9C4", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "im-profile"], [1, "im-profile__avatar"], [1, "im-profile__text"], ["type", "button", 1, "icon-button", 3, "click", "title"], [1, "material-icons"], ["type", "button", "title", "D\xE9connexion", 1, "icon-button", "icon-button--danger", 3, "click"], [1, "im-layout"], [1, "im-sidebar"], [1, "im-sidebar__group-label"], [1, "im-sidebar__item", 3, "click"], ["class", "im-sidebar__badge im-sidebar__badge--warn", 4, "ngIf"], ["class", "im-sidebar__badge im-sidebar__badge--crit", 4, "ngIf"], [1, "im-workspace"], ["class", "state-box", 4, "ngIf"], ["class", "state-box state-box--error", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "im-sidebar__badge", "im-sidebar__badge--warn"], [1, "im-sidebar__badge", "im-sidebar__badge--crit"], [1, "state-box"], [1, "material-icons", "spin"], [1, "state-box", "state-box--error"], [1, "im-kpi-row"], [1, "im-kpi", "im-kpi--teal"], [1, "im-kpi", "im-kpi--blue"], [1, "im-kpi", "im-kpi--purple"], [1, "im-kpi", "im-kpi--green"], [1, "im-kpi"], [1, "im-charts-row"], [1, "im-card"], [1, "im-card__head"], [1, "im-bar-chart"], ["class", "im-bar-row", 4, "ngFor", "ngForOf"], [1, "im-donut-wrap"], ["viewBox", "0 0 100 100", 1, "im-donut-svg"], ["cx", "50", "cy", "50", "r", "45", "fill", "none", "stroke", "rgba(255,255,255,.07)", "stroke-width", "11"], ["cx", "50", "cy", "50", "r", "45", "fill", "none", "stroke-width", "11", 4, "ngFor", "ngForOf"], ["x", "50", "y", "47", "text-anchor", "middle", 1, "im-donut-val"], ["x", "50", "y", "59", "text-anchor", "middle", 1, "im-donut-sub"], [1, "im-donut-legend"], [1, "im-legend-row"], [1, "im-legend-dot", 2, "background", "#ef4444"], [1, "im-legend-dot", 2, "background", "#f59e0b"], [1, "im-legend-dot", 2, "background", "#4EA8F8"], [1, "im-gauge-wrap"], ["viewBox", "0 0 120 72", 1, "im-gauge-svg"], ["d", "M12,66 A46,46 0 0,1 108,66", "fill", "none", "stroke", "rgba(255,255,255,.07)", "stroke-width", "10", "stroke-linecap", "round"], ["d", "M12,66 A46,46 0 0,1 108,66", "fill", "none", "stroke-width", "10", "stroke-linecap", "round", "stroke-dasharray", "144.5 144.5"], ["x", "60", "y", "60", "text-anchor", "middle", 1, "im-gauge-val"], [1, "im-gauge-sub"], [1, "im-bar-row"], [1, "im-bar-label"], [1, "im-bar-track"], [1, "im-bar-fill"], [1, "im-bar-count"], ["cx", "50", "cy", "50", "r", "45", "fill", "none", "stroke-width", "11"], [1, "im-section-header"], [1, "im-section-header__stats"], [1, "pill", "pill--ok"], ["class", "pill pill--crit", 4, "ngIf"], ["class", "pill pill--warning", 4, "ngIf"], [1, "im-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "en-service"], ["value", "absent"], ["value", "conge"], [1, "im-team-grid"], ["class", "im-team-card", 3, "im-team-card--inactive", 4, "ngFor", "ngForOf"], [1, "pill", "pill--crit"], [1, "pill", "pill--warning"], [1, "im-team-card"], [1, "im-team-card__top"], [1, "im-team-avatar"], [1, "im-team-info"], [1, "pill"], [1, "im-team-workload"], [1, "im-team-workload__label"], [1, "im-wl-track"], [1, "im-wl-bar"], [1, "im-team-meta"], ["class", "im-team-card__footer", 4, "ngIf"], [1, "im-team-card__footer"], ["type", "button", 1, "quick-btn", "quick-btn--sm", 3, "click"], [1, "pill", "pill--stable"], [1, "pill", "pill--neutral"], [1, "im-section-header__filters"], ["value", "matin"], ["value", "apres-midi"], ["value", "soir"], [1, "im-search-mini"], ["type", "text", "placeholder", "Patient, infirmier\u2026", 3, "ngModelChange", "ngModel"], [1, "im-toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "patients-table-wrap"], [1, "patients-table"], [3, "im-tr-absent", 4, "ngFor", "ngForOf"], [1, "patients-table__name"], [1, "patient-row__avatar"], [4, "ngIf", "ngIfElse"], ["class", "quick-btn quick-btn--xs", "type", "button", 3, "click", 4, "ngIf"], ["class", "quick-btn quick-btn--xs quick-btn--primary", "type", "button", 3, "click", 4, "ngIf"], ["class", "im-done-label", 4, "ngIf"], ["class", "material-icons im-warn-icon", 4, "ngIf"], [1, "material-icons", "im-warn-icon"], ["type", "button", 1, "quick-btn", "quick-btn--xs", 3, "click"], ["type", "button", 1, "quick-btn", "quick-btn--xs", "quick-btn--primary", 3, "click"], [1, "im-done-label"], ["colspan", "5", 1, "im-empty-row"], ["value", "critique"], ["value", "elevee"], ["value", "normale"], [1, "im-info-banner"], [1, "im-alerte-list"], ["class", "im-alerte-card", 3, "im-alerte-card--traitee", "im-alerte-card--crit", "im-alerte-card--warn", 4, "ngFor", "ngForOf"], ["class", "im-empty-row", 4, "ngIf"], [1, "im-alerte-card"], [1, "im-alerte-stripe"], [1, "material-icons", "im-alerte-icon"], [1, "im-alerte-body"], [1, "im-alerte-top"], ["class", "pill pill--neutral", 4, "ngIf"], ["class", "pill pill--ok", 4, "ngIf"], ["class", "im-lock-badge", 4, "ngIf"], [1, "im-alerte-msg"], [1, "im-alerte-meta"], [1, "im-alerte-action"], [1, "im-lock-badge"], [1, "im-empty-row"], ["type", "text", "placeholder", "Nom, pathologie\u2026", 3, "ngModelChange", "ngModel"], [1, "im-info-banner", "im-info-banner--blue"], ["class", "patients-table__row", 3, "click", 4, "ngFor", "ngForOf"], [1, "patients-table__row", 3, "click"], [1, "material-icons", 2, "color", "var(--c-teal)", "font-size", "18px"], ["colspan", "7", 1, "im-empty-row"], ["value", "saisie"], ["value", "manquante"], [4, "ngFor", "ngForOf"], [1, "im-time-main"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", 3, "click"], [1, "wizard-header"], [1, "wizard-header__icon", 2, "background", "rgba(245,166,35,.15)"], [1, "material-icons", 2, "color", "#f59e0b"], [1, "wizard-header__text"], [1, "modal-close-btn", 3, "click"], ["class", "wizard-body wizard-body--form", 4, "ngIf"], [1, "wizard-footer"], [1, "wizard-footer__actions"], [1, "btn-outline-sm", 3, "click"], ["class", "btn-sm-primary", 3, "click", 4, "ngIf"], [1, "wizard-body", "wizard-body--form"], [1, "modal-note"], [1, "pill", "pill--crit", 2, "display", "inline-flex"], ["class", "im-reaffect-list", 4, "ngIf"], ["class", "wz-field", "style", "margin-top:16px", 4, "ngIf"], [1, "im-reaffect-list"], ["class", "im-reaffect-row", 4, "ngFor", "ngForOf"], [1, "im-reaffect-row"], [1, "patients-table__name", 2, "flex", "1"], [1, "wz-field", 2, "margin-top", "16px"], [1, "req"], [3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "btn-sm-primary", 3, "click"], ["class", "im-fiche-panel", 3, "click", 4, "ngIf"], [1, "im-fiche-panel", 3, "click"], [1, "im-fiche-hero"], [1, "im-fiche-avatar"], [1, "im-fiche-hero__info"], [1, "im-fiche-eyebrow"], [1, "im-fiche-name"], [1, "im-fiche-meta"], [1, "im-fiche-close", 3, "click"], [1, "im-fiche-body"], [1, "im-fiche-grid"], [1, "im-fiche-item"], [1, "im-fiche-item__icon", "im-fiche-item__icon--red"], [1, "im-fiche-item__label"], [1, "im-fiche-item__val"], [1, "im-fiche-item__icon", "im-fiche-item__icon--teal"], [1, "im-fiche-item__icon", "im-fiche-item__icon--purple"], [1, "im-fiche-readonly"], [1, "im-fiche-footer"], [1, "quick-btn", 3, "click"], ["class", "im-fiche-panel im-demarrer-panel", 3, "click", 4, "ngIf"], [1, "im-fiche-panel", "im-demarrer-panel", 3, "click"], [1, "im-fiche-avatar", 2, "background", "linear-gradient(135deg,#00D9C4,#4EA8F8)"], [1, "material-icons", 2, "font-size", "24px", "color", "#fff"], [1, "im-demarrer-note"], [2, "font-size", "10.5px", "font-weight", "700", "color", "var(--c-text-3)", "text-transform", "uppercase", "letter-spacing", ".06em", "display", "block", "margin-bottom", "8px"], [1, "im-duree-grid"], ["class", "im-duree-btn", 3, "im-duree-btn--active", "click", 4, "ngFor", "ngForOf"], ["class", "im-field-error", 4, "ngIf"], ["class", "im-duree-preview", 4, "ngIf"], [1, "im-fiche-grid", 2, "margin-top", "4px"], [1, "im-fiche-footer", 2, "gap", "10px"], [1, "quick-btn", "quick-btn--primary", 3, "click"], [1, "im-duree-btn", 3, "click"], [1, "im-field-error"], [1, "im-duree-preview"], [1, "material-icons", 2, "font-size", "15px"]], template: function InfirmierMajeurComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, InfirmierMajeurComponent_button_1_Template, 5, 5, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "header", 4)(4, "div", 5)(5, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 7);
      \u0275\u0275element(7, "circle", 8)(8, "path", 9)(9, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div")(11, "strong");
      \u0275\u0275text(12, "DialySys");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Espace Infirmier Majeur");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "strong");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "Infirmier Majeur");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_23_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 16);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_26_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(27, "span", 15);
      \u0275\u0275text(28, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 17)(30, "aside", 18)(31, "div", 19);
      \u0275\u0275text(32, "Supervision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 20);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_33_listener() {
        return ctx.setSection("dashboard");
      });
      \u0275\u0275elementStart(34, "span", 15);
      \u0275\u0275text(35, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Tableau de Bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 20);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_38_listener() {
        return ctx.setSection("equipe");
      });
      \u0275\u0275elementStart(39, "span", 15);
      \u0275\u0275text(40, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "\xC9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, InfirmierMajeurComponent_span_43_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 20);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_44_listener() {
        return ctx.setSection("planning");
      });
      \u0275\u0275elementStart(45, "span", 15);
      \u0275\u0275text(46, "calendar_month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Planning");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, InfirmierMajeurComponent_span_49_Template, 2, 1, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 19);
      \u0275\u0275text(51, "Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 20);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_52_listener() {
        return ctx.setSection("alertes");
      });
      \u0275\u0275elementStart(53, "span", 15);
      \u0275\u0275text(54, "notifications_active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "Alertes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, InfirmierMajeurComponent_span_57_Template, 2, 1, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 20);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_58_listener() {
        return ctx.setSection("patients");
      });
      \u0275\u0275elementStart(59, "span", 15);
      \u0275\u0275text(60, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "Patients");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "button", 20);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_63_listener() {
        return ctx.setSection("constantes");
      });
      \u0275\u0275elementStart(64, "span", 15);
      \u0275\u0275text(65, "monitor_heart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "Constantes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(68, InfirmierMajeurComponent_span_68_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "main", 23);
      \u0275\u0275template(70, InfirmierMajeurComponent_div_70_Template, 4, 0, "div", 24)(71, InfirmierMajeurComponent_div_71_Template, 4, 1, "div", 25)(72, InfirmierMajeurComponent_ng_container_72_Template, 98, 21, "ng-container", 26)(73, InfirmierMajeurComponent_ng_container_73_Template, 20, 5, "ng-container", 26)(74, InfirmierMajeurComponent_ng_container_74_Template, 45, 9, "ng-container", 26)(75, InfirmierMajeurComponent_ng_container_75_Template, 28, 6, "ng-container", 26)(76, InfirmierMajeurComponent_ng_container_76_Template, 39, 6, "ng-container", 26)(77, InfirmierMajeurComponent_ng_container_77_Template, 41, 5, "ng-container", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(78, InfirmierMajeurComponent_div_78_Template, 19, 3, "div", 27)(79, InfirmierMajeurComponent_div_79_Template, 2, 1, "div", 27)(80, InfirmierMajeurComponent_div_80_Template, 2, 1, "div", 27);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275classProp("light", ctx.isLight);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.userInitials);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName);
      \u0275\u0275advance(3);
      \u0275\u0275property("title", ctx.isLight ? "Mode sombre" : "Mode clair");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isLight ? "dark_mode" : "light_mode");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("im-sidebar__item--active", ctx.activeSection === "dashboard");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("im-sidebar__item--active", ctx.activeSection === "equipe");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.staffAbsents > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("im-sidebar__item--active", ctx.activeSection === "planning");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.seancesSansInfirmierCount > 0);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("im-sidebar__item--active", ctx.activeSection === "alertes");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.alertesActivesCount > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("im-sidebar__item--active", ctx.activeSection === "patients");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("im-sidebar__item--active", ctx.activeSection === "constantes");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.constantesManquantesCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.apiError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeSection === "dashboard");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeSection === "equipe");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeSection === "planning");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeSection === "alertes");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeSection === "patients");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeSection === "constantes");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showReaffectModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPatientModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDemarrerModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  height: 100dvh;\n}\n.im-shell[_ngcontent-%COMP%] {\n  --c-bg: #06090F;\n  --c-surface: #0B111E;\n  --c-card: #0B111E;\n  --c-card-hi: #111928;\n  --c-border: rgba(255,255,255,.07);\n  --c-border-hi: rgba(0,217,196,.3);\n  --c-text-1: #F1F5F9;\n  --c-text-2: #94A3B8;\n  --c-text-3: #475569;\n  --c-topbar-bg: rgba(6,9,15,.72);\n  --c-sidebar-bg: rgba(11,17,30,.96);\n  --c-teal: #00D9C4;\n  --c-teal-soft: rgba(0,217,196,.12);\n  --c-teal-glow: 0 0 32px rgba(0,217,196,.22);\n  --c-blue: #4EA8F8;\n  --c-blue-soft: rgba(78,168,248,.12);\n  --c-green: #4ADE80;\n  --c-green-soft: rgba(74,222,128,.12);\n  --c-amber: #F5A623;\n  --c-amber-soft: rgba(245,166,35,.12);\n  --c-red: #FF5757;\n  --c-red-soft: rgba(255,87,87,.12);\n  --c-purple: #A78BFA;\n  --c-purple-soft: rgba(167,139,250,.12);\n  --radius: 12px;\n  --f-head: "Syne", sans-serif;\n  --f-body: "Figtree", sans-serif;\n  --f-mono: "DM Mono", monospace;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 217, 196, 0.06) 0%,\n      transparent 40%),\n    linear-gradient(\n      225deg,\n      rgba(59, 130, 246, 0.05) 0%,\n      transparent 40%),\n    var(--c-bg);\n  color: var(--c-text-1);\n  font-family: var(--f-body);\n  overflow: hidden;\n}\n.im-shell.light[_ngcontent-%COMP%] {\n  --c-bg: #EEF2F8;\n  --c-surface: #FFFFFF;\n  --c-card: #FFFFFF;\n  --c-card-hi: #F4F6FB;\n  --c-border: rgba(0,0,0,.09);\n  --c-border-hi: rgba(0,158,142,.35);\n  --c-text-1: #0F172A;\n  --c-text-2: #475569;\n  --c-text-3: #94A3B8;\n  --c-topbar-bg: rgba(238,242,248,.82);\n  --c-sidebar-bg: rgba(255,255,255,.97);\n  --c-teal: #009E8E;\n  --c-teal-soft: rgba(0,158,142,.1);\n  --c-teal-glow: 0 0 24px rgba(0,158,142,.18);\n  --c-blue: #2563EB;\n  --c-blue-soft: rgba(37,99,235,.1);\n  --c-green: #16A34A;\n  --c-green-soft: rgba(22,163,74,.1);\n  --c-amber: #D97706;\n  --c-amber-soft: rgba(217,119,6,.1);\n  --c-red: #DC2626;\n  --c-red-soft: rgba(220,38,38,.1);\n  --c-purple: #7C3AED;\n  --c-purple-soft: rgba(124,58,237,.1);\n}\n.im-topbar[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  background: var(--c-topbar-bg);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-bottom: 1px solid var(--c-border);\n  flex-shrink: 0;\n  position: relative;\n  z-index: 10;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--c-teal-soft);\n  border: 1px solid var(--c-border-hi);\n  flex-shrink: 0;\n}\n.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--f-head);\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--c-text-1);\n  line-height: 1;\n}\n.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10.5px;\n  font-weight: 500;\n  color: var(--c-teal);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 2px;\n}\n.im-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.im-profile__avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-teal) 0%,\n      var(--c-blue) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--f-head);\n  font-size: 13px;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.im-profile__text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  line-height: 1;\n}\n.im-profile__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10.5px;\n  color: var(--c-teal);\n  margin-top: 2px;\n}\n.icon-button[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card-hi);\n  color: var(--c-text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.icon-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n  color: var(--c-text-1);\n}\n.icon-button--danger[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 87, 87, 0.4);\n  color: var(--c-red);\n  background: var(--c-red-soft);\n}\n.im-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.im-sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  background: var(--c-sidebar-bg);\n  border-right: 1px solid var(--c-border);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 16px 10px;\n  overflow-y: auto;\n}\n.im-sidebar__group-label[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 800;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  padding: 10px 8px 4px;\n}\n.im-sidebar__group-label[_ngcontent-%COMP%]:first-child {\n  padding-top: 2px;\n}\n.im-sidebar__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 9px 10px;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  color: var(--c-text-2);\n  font-family: var(--f-body);\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.im-sidebar__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-text-3);\n  transition: color 0.15s;\n}\n.im-sidebar__item[_ngcontent-%COMP%]:hover {\n  background: var(--c-card-hi);\n  color: var(--c-text-1);\n}\n.im-sidebar__item[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.im-sidebar__item--active[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n  font-weight: 700;\n}\n.im-sidebar__item--active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.im-sidebar__item--active[_ngcontent-%COMP%]:hover {\n  background: var(--c-teal-soft);\n}\n.im-sidebar__badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  padding: 0 5px;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.im-sidebar__badge--warn[_ngcontent-%COMP%] {\n  background: var(--c-amber-soft);\n  color: var(--c-amber);\n}\n.im-sidebar__badge--crit[_ngcontent-%COMP%] {\n  background: var(--c-red-soft);\n  color: var(--c-red);\n}\n.im-workspace[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  min-height: 0;\n}\n.state-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 24px;\n  border-radius: var(--radius);\n  border: 1px dashed var(--c-border);\n  background: var(--c-card-hi);\n  font-size: 13px;\n  color: var(--c-text-2);\n}\n.state-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--c-text-3);\n}\n.state-box--error[_ngcontent-%COMP%] {\n  color: var(--c-red);\n  border-color: rgba(255, 87, 87, 0.25);\n  background: var(--c-red-soft);\n}\n.state-box--error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_imSpin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_imSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.im-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  flex-shrink: 0;\n}\n.im-kpi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 16px;\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n}\n.im-kpi[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.im-kpi[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--f-head);\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n}\n.im-kpi[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--c-text-2);\n  margin-top: 3px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.im-kpi--teal[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-teal);\n}\n.im-kpi--teal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.im-kpi--blue[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-blue);\n}\n.im-kpi--blue[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n}\n.im-kpi--green[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-green);\n}\n.im-kpi--green[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-green);\n}\n.im-kpi--amber[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-amber);\n}\n.im-kpi--amber[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-amber);\n}\n.im-kpi--purple[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-purple);\n}\n.im-kpi--purple[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-purple);\n}\n.im-kpi--red[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-red);\n}\n.im-kpi--red[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.im-charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 0.8fr;\n  gap: 16px;\n  align-items: start;\n}\n.im-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.im-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--c-border);\n}\n.im-card__head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.im-card__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.im-bar-chart[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.im-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.im-bar-label[_ngcontent-%COMP%] {\n  width: 110px;\n  flex-shrink: 0;\n  font-size: 12px;\n  color: var(--c-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.im-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n  background: var(--c-card-hi);\n  overflow: hidden;\n}\n.im-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.im-bar-fill--teal[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n}\n.im-bar-fill--amber[_ngcontent-%COMP%] {\n  background: var(--c-amber);\n}\n.im-bar-fill--red[_ngcontent-%COMP%] {\n  background: var(--c-red);\n}\n.im-bar-count[_ngcontent-%COMP%] {\n  width: 24px;\n  text-align: right;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--c-text-2);\n}\n.im-donut-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 18px;\n}\n.im-donut-svg[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  flex-shrink: 0;\n  transform: rotate(-90deg);\n  overflow: visible;\n}\n.im-donut-val[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 20px;\n  font-weight: 800;\n  fill: var(--c-text-1);\n  transform: rotate(90deg);\n  transform-origin: 50px 50px;\n}\n.im-donut-sub[_ngcontent-%COMP%] {\n  font-size: 8px;\n  fill: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  transform: rotate(90deg);\n  transform-origin: 50px 50px;\n}\n.im-donut-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.im-legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12.5px;\n  color: var(--c-text-2);\n}\n.im-legend-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.im-legend-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.im-gauge-wrap[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.im-gauge-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 160px;\n  overflow: visible;\n}\n.im-gauge-val[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 22px;\n  font-weight: 800;\n  fill: var(--c-text-1);\n}\n.im-gauge-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n  text-align: center;\n  margin-top: 6px;\n}\n.im-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.im-section-header__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.im-section-header__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.im-select[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: var(--c-card);\n  color: var(--c-text-1);\n  font-family: var(--f-body);\n  font-size: 12.5px;\n  outline: none;\n  cursor: pointer;\n}\n.im-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-border-hi);\n}\n.im-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--c-card);\n}\n.im-search-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: var(--c-card);\n}\n.im-search-mini[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--c-border-hi);\n}\n.im-search-mini[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--c-text-3);\n}\n.im-search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--f-body);\n  font-size: 12.5px;\n  color: var(--c-text-1);\n  width: 160px;\n}\n.im-search-mini[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.im-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--c-text-2);\n  cursor: pointer;\n}\n.im-toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: var(--c-teal);\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.pill[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.pill--ok[_ngcontent-%COMP%] {\n  color: #00897B;\n  background: rgba(0, 137, 123, 0.12);\n}\n.pill--stable[_ngcontent-%COMP%] {\n  color: #2563EB;\n  background: rgba(37, 99, 235, 0.12);\n}\n.pill--warning[_ngcontent-%COMP%], \n.pill--warn[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: rgba(245, 166, 35, 0.14);\n}\n.pill--crit[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: rgba(220, 38, 38, 0.12);\n}\n.pill--neutral[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  background: rgba(148, 163, 184, 0.15);\n}\n.im-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: var(--c-amber-soft);\n  border: 1px solid rgba(245, 166, 35, 0.25);\n  border-left: 3px solid var(--c-amber);\n  font-size: 13px;\n  color: var(--c-text-2);\n  flex-shrink: 0;\n}\n.im-info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-amber);\n  flex-shrink: 0;\n}\n.im-info-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--c-text-1);\n}\n.im-info-banner--blue[_ngcontent-%COMP%] {\n  background: var(--c-blue-soft);\n  border-color: rgba(78, 168, 248, 0.25);\n  border-left-color: var(--c-blue);\n}\n.im-info-banner--blue[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n}\n.im-team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.im-team-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: border-color 0.15s;\n}\n.im-team-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n}\n.im-team-card--inactive[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.im-team-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.im-team-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-teal) 0%,\n      var(--c-blue) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--f-head);\n  font-size: 15px;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.im-team-avatar--absent[_ngcontent-%COMP%] {\n  background: var(--c-red-soft);\n  color: var(--c-red);\n  border: 1px dashed var(--c-red);\n}\n.im-team-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.im-team-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.im-team-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11.5px;\n  color: var(--c-text-3);\n  margin-top: 2px;\n}\n.im-team-workload[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.im-team-workload__label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.im-wl-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--c-card-hi);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.im-wl-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.4s ease;\n}\n.im-team-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.im-team-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.im-team-meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-3);\n}\n.im-team-card__footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--c-border);\n  padding-top: 12px;\n  margin-top: -2px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card-hi);\n  color: var(--c-text-2);\n  font-family: var(--f-body);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.quick-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n  color: var(--c-text-1);\n}\n.quick-btn--primary[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n  border-color: var(--c-border-hi);\n}\n.quick-btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--c-teal);\n  color: #fff;\n}\n.quick-btn--sm[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  font-size: 12.5px;\n}\n.quick-btn--sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.quick-btn--xs[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 11.5px;\n  border-radius: 6px;\n}\n.quick-btn--xs[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.patients-table-wrap[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.patients-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.patients-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--c-card-hi);\n  border-bottom: 1px solid var(--c-border);\n}\n.patients-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--c-text-3);\n  white-space: nowrap;\n}\n.patients-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 13px;\n  color: var(--c-text-1);\n  border-bottom: 1px solid var(--c-border);\n  vertical-align: middle;\n}\n.patients-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.patients-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.12s;\n}\n.patients-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--c-card-hi);\n  cursor: pointer;\n}\n.patients-table__name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.patients-table__name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.patients-table__name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10.5px;\n  color: var(--c-text-3);\n  margin-top: 1px;\n}\n.patient-row__avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n  font-family: var(--f-head);\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid var(--c-border-hi);\n}\n.im-time-main[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.im-time-end[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.im-machine[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 11.5px;\n  background: var(--c-card-hi);\n  color: var(--c-blue);\n  padding: 2px 7px;\n  border-radius: 5px;\n  border: 1px solid var(--c-border);\n}\n.im-warn-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--c-amber);\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.im-tr-absent[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--c-amber-soft);\n}\n.im-done-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--c-green);\n}\n.im-done-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.im-alerte-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.im-alerte-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 18px;\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  transition: border-color 0.15s;\n}\n.im-alerte-card--traitee[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.im-alerte-card--crit[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-red);\n}\n.im-alerte-card--warn[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-amber);\n}\n.im-alerte-stripe[_ngcontent-%COMP%] {\n  display: none;\n}\n.im-alerte-icon[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.im-alerte-icon--crit[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.im-alerte-icon--warn[_ngcontent-%COMP%] {\n  color: var(--c-amber);\n}\n.im-alerte-icon--info[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n}\n.im-alerte-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.im-alerte-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.im-alerte-top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  flex: 1;\n  min-width: 120px;\n}\n.im-alerte-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-2);\n  line-height: 1.5;\n  margin: 0;\n}\n.im-alerte-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.im-alerte-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.im-alerte-meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.im-alerte-action[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.im-lock-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 10.5px;\n  font-weight: 700;\n  background: var(--c-card-hi);\n  color: var(--c-text-3);\n  border: 1px solid var(--c-border);\n}\n.im-lock-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.im-crit-val[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  color: var(--c-red);\n  font-weight: 600;\n}\n.im-empty-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 28px;\n  font-size: 13px;\n  color: var(--c-text-3);\n  text-align: center;\n}\n.im-empty-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.im-fiche-panel[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 500px;\n  overflow: hidden;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);\n  display: flex;\n  flex-direction: column;\n}\n.im-fiche-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 24px 24px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 217, 196, 0.08) 0%,\n      rgba(78, 168, 248, 0.06) 100%);\n  border-bottom: 1px solid var(--c-border);\n  position: relative;\n}\n.im-fiche-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--c-teal) 0%,\n      var(--c-blue) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--f-head);\n  font-size: 18px;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 4px 16px rgba(0, 217, 196, 0.25);\n}\n.im-fiche-hero__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding-right: 32px;\n}\n.im-fiche-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--c-teal);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 4px;\n}\n.im-fiche-name[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--c-text-1);\n  margin: 0 0 8px;\n  line-height: 1.15;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.im-fiche-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.im-fiche-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.pill) {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12.5px;\n  color: var(--c-text-2);\n}\n.im-fiche-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.pill)   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-3);\n}\n.im-fiche-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card-hi);\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.im-fiche-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.im-fiche-close[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n  color: var(--c-text-1);\n}\n.im-fiche-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.im-fiche-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.im-fiche-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: var(--c-card-hi);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  transition: border-color 0.15s;\n}\n.im-fiche-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n}\n.im-fiche-item__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.im-fiche-item__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.im-fiche-item__icon--teal[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n}\n.im-fiche-item__icon--teal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.im-fiche-item__icon--blue[_ngcontent-%COMP%] {\n  background: var(--c-blue-soft);\n}\n.im-fiche-item__icon--blue[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n}\n.im-fiche-item__icon--red[_ngcontent-%COMP%] {\n  background: var(--c-red-soft);\n}\n.im-fiche-item__icon--red[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.im-fiche-item__icon--purple[_ngcontent-%COMP%] {\n  background: var(--c-purple-soft);\n}\n.im-fiche-item__icon--purple[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-purple);\n}\n.im-fiche-item__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 3px;\n}\n.im-fiche-item__val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  line-height: 1.2;\n}\n.im-fiche-readonly[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: var(--c-blue-soft);\n  border: 1px solid rgba(78, 168, 248, 0.2);\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.im-fiche-readonly[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-blue);\n  flex-shrink: 0;\n}\n.im-fiche-readonly[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--c-text-1);\n}\n.im-fiche-footer[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  border-top: 1px solid var(--c-border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  background: var(--c-card-hi);\n}\n.im-demarrer-panel[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.im-duree-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.im-duree-btn[_ngcontent-%COMP%] {\n  padding: 10px 4px;\n  border-radius: 8px;\n  border: 1.5px solid var(--c-border);\n  background: var(--c-card-hi);\n  color: var(--c-text-2);\n  font-family: var(--f-body);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: center;\n}\n.im-duree-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.im-duree-btn--active[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.im-duree-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  background: var(--c-teal-soft);\n  border: 1px solid rgba(0, 217, 196, 0.2);\n  font-size: 13px;\n  color: var(--c-text-2);\n  margin-top: 6px;\n}\n.im-duree-preview[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--c-teal);\n}\n.im-duree-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.im-demarrer-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  background: var(--c-blue-soft);\n  border: 1px solid rgba(78, 168, 248, 0.2);\n  font-size: 13px;\n  color: var(--c-text-2);\n  line-height: 1.5;\n}\n.im-demarrer-note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--c-blue);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.im-demarrer-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.im-demarrer-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--c-red);\n  margin-left: 2px;\n}\n.im-time-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border: 1.5px solid var(--c-border);\n  border-radius: 10px;\n  background: var(--c-card-hi);\n  transition: border-color 0.15s;\n}\n.im-time-input[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--c-teal);\n}\n.im-time-input--error[_ngcontent-%COMP%] {\n  border-color: var(--c-red);\n}\n.im-time-input[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n}\n.im-time-input[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--f-mono);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  letter-spacing: 0.05em;\n}\n.im-time-input[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(0.5);\n  cursor: pointer;\n}\n.im-field-error[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--c-red);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.im-reaffect-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.im-reaffect-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: var(--c-card-hi);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n}\n.modal-panel--sm[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 9000;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-family: var(--f-body);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  animation: _ngcontent-%COMP%_toastIn 0.2s ease;\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.toast--success[_ngcontent-%COMP%] {\n  background: rgba(0, 137, 123, 0.92);\n  color: #fff;\n}\n.toast--warning[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.92);\n  color: #fff;\n}\n.toast--error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.92);\n  color: #fff;\n}\n.toast--info[_ngcontent-%COMP%] {\n  background: rgba(78, 168, 248, 0.92);\n  color: #fff;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@media (max-width: 1280px) {\n  .im-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .im-charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .im-charts-row[_ngcontent-%COMP%]    > .im-card[_ngcontent-%COMP%]:last-child {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 1024px) {\n  .im-sidebar[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n  .im-team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .im-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .im-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .im-charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .im-workspace[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .im-team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .im-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .im-profile__text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=infirmier-majeur.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfirmierMajeurComponent, { className: "InfirmierMajeurComponent", filePath: "app\\pages\\infirmier-majeur\\infirmier-majeur.component.ts", lineNumber: 54 });
})();
export {
  InfirmierMajeurComponent
};
//# sourceMappingURL=chunk-NG5RIKBL.js.map
