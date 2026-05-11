import {
  ConstantesVitalesService,
  OrdonnanceService
} from "./chunk-UKAM7Y4F.js";
import {
  SeanceService
} from "./chunk-27BDLWNO.js";
import {
  AuthService
} from "./chunk-KGRZ3KR2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-C2IOWBAM.js";
import {
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-T6UPCRXA.js";
import {
  __spreadProps,
  __spreadValues,
  catchError,
  of,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
} from "./chunk-MOKET3XK.js";

// src/models/utilisateur.ts
function getInitials(user) {
  return `${user?.nom?.[0] ?? ""}${user?.prenom?.[0] ?? ""}`.toUpperCase();
}
function getFullName(user) {
  return `${user?.nom ?? ""} ${user?.prenom ?? ""}`.trim();
}

// src/app/pages/aide-soignant/aide-soignant.component.ts
function AideSoignantComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function AideSoignantComponent_div_1_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48)(6, "span", 14);
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
function AideSoignantComponent_div_2_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 14);
    \u0275\u0275text(2, "description_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune ordonnance enregistree");
    \u0275\u0275elementEnd()();
  }
}
function AideSoignantComponent_div_2_div_24_div_2_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Posologie :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", o_r6.posologie, "");
  }
}
function AideSoignantComponent_div_2_div_24_div_2_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Date d'expiration :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(o_r6.dateExpiration), "");
  }
}
function AideSoignantComponent_div_2_div_24_div_2_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "Instructions :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", o_r6.instructions, "");
  }
}
function AideSoignantComponent_div_2_div_24_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "span", 14);
    \u0275\u0275text(3, "medication");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 69)(5, "div", 70)(6, "span", 71);
    \u0275\u0275text(7, "Medicaments :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AideSoignantComponent_div_2_div_24_div_2_div_1_div_9_Template, 4, 1, "div", 72)(10, AideSoignantComponent_div_2_div_24_div_2_div_1_div_10_Template, 4, 1, "div", 72)(11, AideSoignantComponent_div_2_div_24_div_2_div_1_div_11_Template, 4, 1, "div", 72);
    \u0275\u0275elementStart(12, "div", 73)(13, "span", 14);
    \u0275\u0275text(14, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "span", 74);
    \u0275\u0275text(17, " \xB7 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275text(19, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", o_r6.medicament, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r6.posologie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r6.dateExpiration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r6.instructions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", o_r6.medecin, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(o_r6.date), " ");
  }
}
function AideSoignantComponent_div_2_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275template(1, AideSoignantComponent_div_2_div_24_div_2_div_1_Template, 21, 6, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedPatient.ordonnances);
  }
}
function AideSoignantComponent_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, AideSoignantComponent_div_2_div_24_div_1_Template, 5, 0, "div", 60)(2, AideSoignantComponent_div_2_div_24_div_2_Template, 2, 1, "div", 61);
    \u0275\u0275elementStart(3, "div", 62)(4, "button", 63);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_div_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("constantes"));
    });
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Saisir les constantes vitales ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient.ordonnances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPatient.ordonnances.length > 0);
  }
}
function AideSoignantComponent_div_2_div_25_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 14);
    \u0275\u0275text(2, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.tensionColor);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.tensionColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.constantesForm.tensionSys, "/", ctx_r2.constantesForm.tensionDia, " mmHg ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.tensionBadge);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.tensionLabel);
  }
}
function AideSoignantComponent_div_2_div_25_div_65_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 106);
    \u0275\u0275text(2, "monitor_weight");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.constantesForm.poids, " kg ");
  }
}
function AideSoignantComponent_div_2_div_25_div_65_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 14);
    \u0275\u0275text(2, " favorite ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("border-color", ctx_r2.constantesForm.bpm > 100 ? "var(--c-red)" : ctx_r2.constantesForm.bpm < 60 ? "var(--c-amber)" : "var(--c-green)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.constantesForm.bpm > 100 ? "var(--c-red)" : ctx_r2.constantesForm.bpm < 60 ? "var(--c-amber)" : "var(--c-green)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.constantesForm.bpm, " bpm ");
  }
}
function AideSoignantComponent_div_2_div_25_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, AideSoignantComponent_div_2_div_25_div_65_div_1_Template, 4, 1, "div", 103)(2, AideSoignantComponent_div_2_div_25_div_65_div_2_Template, 4, 5, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantesForm.poids);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantesForm.bpm);
  }
}
function AideSoignantComponent_div_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 75)(2, "div", 76)(3, "span", 77);
    \u0275\u0275text(4, "bloodtype");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Tension arterielle ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 79)(8, "label");
    \u0275\u0275text(9, "Systolique ");
    \u0275\u0275elementStart(10, "span", 80);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 81)(13, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AideSoignantComponent_div_2_div_25_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.constantesForm.tensionSys, $event) || (ctx_r2.constantesForm.tensionSys = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 83);
    \u0275\u0275text(15, "mmHg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17, "Normale : 100 - 140");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 84)(19, "span");
    \u0275\u0275text(20, "/");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 79)(22, "label");
    \u0275\u0275text(23, "Diastolique ");
    \u0275\u0275elementStart(24, "span", 80);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 81)(27, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function AideSoignantComponent_div_2_div_25_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.constantesForm.tensionDia, $event) || (ctx_r2.constantesForm.tensionDia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 83);
    \u0275\u0275text(29, "mmHg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "small");
    \u0275\u0275text(31, "Normale : 60 - 90");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, AideSoignantComponent_div_2_div_25_div_32_Template, 7, 8, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 75)(34, "div", 76)(35, "span", 87);
    \u0275\u0275text(36, "vital_signs");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Mesures physiques ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 78)(39, "div", 88)(40, "label")(41, "span", 89);
    \u0275\u0275text(42, "monitor_weight");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Poids ");
    \u0275\u0275elementStart(44, "span", 80);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 81)(47, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AideSoignantComponent_div_2_div_25_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.constantesForm.poids, $event) || (ctx_r2.constantesForm.poids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 83);
    \u0275\u0275text(49, "kg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "small");
    \u0275\u0275text(51, "Avant seance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 88)(53, "label")(54, "span", 91);
    \u0275\u0275text(55, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Frequence cardiaque ");
    \u0275\u0275elementStart(57, "span", 80);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 81)(60, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function AideSoignantComponent_div_2_div_25_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.constantesForm.bpm, $event) || (ctx_r2.constantesForm.bpm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 83);
    \u0275\u0275text(62, "bpm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "small");
    \u0275\u0275text(64, "Normale : 60 - 100 bpm");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(65, AideSoignantComponent_div_2_div_25_div_65_Template, 3, 2, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 75)(67, "div", 76)(68, "span", 94);
    \u0275\u0275text(69, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, " Observations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "textarea", 95);
    \u0275\u0275twoWayListener("ngModelChange", function AideSoignantComponent_div_2_div_25_Template_textarea_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.constantesForm.notes, $event) || (ctx_r2.constantesForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 96)(73, "button", 97);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_div_25_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275text(74, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 98);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_div_25_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveConstantes());
    });
    \u0275\u0275elementStart(76, "span", 14);
    \u0275\u0275text(77, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.constantesForm.tensionSys);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.constantesForm.tensionDia);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.constantesForm.tensionSys && ctx_r2.constantesForm.tensionDia);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.constantesForm.poids);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.constantesForm.bpm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.constantesForm.poids || ctx_r2.constantesForm.bpm);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.constantesForm.notes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedPatient.currentConstantesId ? "Modifier" : "Enregistrer", " ");
  }
}
function AideSoignantComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 51)(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 55);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 56)(16, "button", 57);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab("ordonnances"));
    });
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275text(18, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Ordonnances ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 57);
    \u0275\u0275listener("click", function AideSoignantComponent_div_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab("constantes"));
    });
    \u0275\u0275elementStart(21, "span", 14);
    \u0275\u0275text(22, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Constantes vitales ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, AideSoignantComponent_div_2_div_24_Template, 8, 2, "div", 58)(25, AideSoignantComponent_div_2_div_25_Template, 79, 8, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Machine ", ctx_r2.selectedPatient.machine, " \xA0 ", ctx_r2.selectedPatient.heureDebut, " - ", ctx_r2.selectedPatient.heureFin, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.patientBadgeClass(ctx_r2.selectedPatient.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.patientBadgeLabel(ctx_r2.selectedPatient.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("pd-tab--active", ctx_r2.activeTab === "ordonnances");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("pd-tab--active", ctx_r2.activeTab === "constantes");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "ordonnances");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "constantes");
  }
}
function AideSoignantComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r8);
  }
}
function AideSoignantComponent_ng_container_83_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 110);
  }
}
function AideSoignantComponent_ng_container_83_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 114);
  }
}
function AideSoignantComponent_ng_container_83_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function AideSoignantComponent_ng_container_83_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const cell_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectDay(cell_r10));
    });
    \u0275\u0275elementStart(1, "span", 112);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AideSoignantComponent_ng_container_83_div_2_span_3_Template, 1, 0, "span", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("as-cal-cell--today", cell_r10.today)("as-cal-cell--scheduled", cell_r10.scheduled)("as-cal-cell--selected", cell_r10.date === ctx_r2.selectedCalDate)("as-cal-cell--disabled", !cell_r10.scheduled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r10.day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r10.scheduled && cell_r10.date !== ctx_r2.selectedCalDate);
  }
}
function AideSoignantComponent_ng_container_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AideSoignantComponent_ng_container_83_div_1_Template, 1, 0, "div", 108)(2, AideSoignantComponent_ng_container_83_div_2_Template, 4, 10, "div", 109);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r10 === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r10 !== null);
  }
}
function AideSoignantComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "span", 14);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Chargement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Recuperation de vos seances et ordonnances depuis le backend.");
    \u0275\u0275elementEnd()();
  }
}
function AideSoignantComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "span", 14);
    \u0275\u0275text(2, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Selectionnez un jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Cliquez sur un jour programme dans le calendrier pour voir les patients qui vous sont assignes.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 116)(8, "span", 14);
    \u0275\u0275text(9, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r2.totalJoursMois, " jour(s) programme(s) ce mois ");
  }
}
function AideSoignantComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "span", 14);
    \u0275\u0275text(2, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Aucun patient assigne le ", ctx_r2.formatDate(ctx_r2.selectedCalDate), ".");
  }
}
function AideSoignantComponent_ng_container_98_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function AideSoignantComponent_ng_container_98_div_10_Template_div_click_0_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPatient(p_r12));
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 125);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 126)(6, "div", 127);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 128)(9, "span", 14);
    \u0275\u0275text(10, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 14);
    \u0275\u0275text(13, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 129)(16, "span", 14);
    \u0275\u0275text(17, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 130)(20, "span", 101);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 131)(23, "span", 14);
    \u0275\u0275text(24, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r13 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r12.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Machine ", p_r12.machine, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r12.ordonnances.length, " ordonnance(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", p_r12.heureDebut, " - ", p_r12.heureFin, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.patientBadgeClass(p_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.patientBadgeLabel(p_r12.status), " ");
  }
}
function AideSoignantComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 117)(2, "div", 118)(3, "span", 14);
    \u0275\u0275text(4, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 119);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 120);
    \u0275\u0275template(10, AideSoignantComponent_ng_container_98_div_10_Template, 25, 9, "div", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 122)(12, "span", 14);
    \u0275\u0275text(13, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Cliquez sur un patient pour voir ses ordonnances et saisir ses constantes vitales ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.selectedCalDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedDayPatients.length, " patient(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.selectedDayPatients);
  }
}
var AideSoignantComponent = class _AideSoignantComponent {
  authService;
  seanceService;
  ordonnanceService;
  constantesVitalesService;
  moisLabels = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
  dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  loading = true;
  currentUser = null;
  currentUserName = "Aide-soignant";
  currentUserInitials = "AS";
  get todayDisplay() {
    const d = /* @__PURE__ */ new Date();
    const j = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return `${j[d.getDay()]}, ${d.getDate()} ${this.moisLabels[d.getMonth()]} ${d.getFullYear()}`;
  }
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
  calYear = (/* @__PURE__ */ new Date()).getFullYear();
  calMonth = (/* @__PURE__ */ new Date()).getMonth();
  selectedCalDate = "";
  scheduledDays = [];
  ordonnancesByPatient = /* @__PURE__ */ new Map();
  constantesBySeance = /* @__PURE__ */ new Map();
  iso(y, m, d) {
    return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }
  calPrev() {
    if (this.calMonth === 0) {
      this.calMonth = 11;
      this.calYear--;
    } else
      this.calMonth--;
    this.selectedCalDate = "";
    this.selectedPatient = null;
  }
  calNext() {
    if (this.calMonth === 11) {
      this.calMonth = 0;
      this.calYear++;
    } else
      this.calMonth++;
    this.selectedCalDate = "";
    this.selectedPatient = null;
  }
  get calDays() {
    const first = new Date(this.calYear, this.calMonth, 1).getDay();
    const offset = (first + 6) % 7;
    const total = new Date(this.calYear, this.calMonth + 1, 0).getDate();
    const today = /* @__PURE__ */ new Date();
    const cells = [];
    for (let i = 0; i < offset; i++)
      cells.push(null);
    for (let d = 1; d <= total; d++) {
      const date = this.iso(this.calYear, this.calMonth, d);
      const sd = this.scheduledDays.find((s) => s.date === date);
      cells.push({ date, day: d, today: today.getFullYear() === this.calYear && today.getMonth() === this.calMonth && today.getDate() === d, scheduled: !!sd, patientCount: sd ? sd.patients.length : 0 });
    }
    return cells;
  }
  selectDay(cell) {
    if (!cell.scheduled)
      return;
    this.selectedCalDate = cell.date;
    this.selectedPatient = null;
  }
  get selectedDayPatients() {
    return this.selectedCalDate ? this.scheduledDays.find((s) => s.date === this.selectedCalDate)?.patients ?? [] : [];
  }
  formatDate(iso) {
    if (!iso || !iso.includes("-"))
      return iso;
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }
  get totalJoursMois() {
    const prefix = `${this.calYear}-${String(this.calMonth + 1).padStart(2, "0")}`;
    return this.scheduledDays.filter((s) => s.date.startsWith(prefix)).length;
  }
  get totalPatientsMois() {
    const prefix = `${this.calYear}-${String(this.calMonth + 1).padStart(2, "0")}`;
    const ids = /* @__PURE__ */ new Set();
    this.scheduledDays.filter((s) => s.date.startsWith(prefix)).forEach((s) => s.patients.forEach((p) => ids.add(p.id)));
    return ids.size;
  }
  get seancesAVenir() {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return this.scheduledDays.filter((s) => s.date >= today).reduce((acc, s) => acc + s.patients.length, 0);
  }
  selectedPatient = null;
  activeTab = "ordonnances";
  constantesForm = { tensionSys: null, tensionDia: null, poids: null, bpm: null, notes: "" };
  constructor(authService, seanceService, ordonnanceService, constantesVitalesService) {
    this.authService = authService;
    this.seanceService = seanceService;
    this.ordonnanceService = ordonnanceService;
    this.constantesVitalesService = constantesVitalesService;
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.loadDashboardData();
  }
  loadCurrentUser() {
    this.currentUser = this.authService.getUtilisateur();
    this.currentUserName = getFullName(this.currentUser) || "Aide-soignant";
    this.currentUserInitials = getInitials(this.currentUser) || "AS";
  }
  loadDashboardData() {
    this.loading = true;
    this.seanceService.getMesSeances().pipe(catchError(() => of([]))).subscribe({
      next: (seances) => {
        this.ordonnancesByPatient.clear();
        this.constantesBySeance.clear();
        this.scheduledDays = this.mapSeancesToScheduledDays(seances);
        this.loading = false;
      },
      error: () => {
        this.showToast("Impossible de charger vos seances", "error");
        this.loading = false;
      }
    });
  }
  mapSeancesToScheduledDays(seances) {
    const grouped = /* @__PURE__ */ new Map();
    seances.forEach((seance) => {
      const date = String(seance.date).slice(0, 10);
      const patient = {
        id: seance.patient.id,
        seanceId: seance.id,
        currentConstantesId: null,
        initials: `${seance.patient.prenom?.[0] ?? ""}${seance.patient.nom?.[0] ?? ""}`.toUpperCase(),
        name: `${seance.patient.prenom} ${seance.patient.nom}`,
        machine: seance.machine ?? "-",
        status: this.mapSeanceStatus(seance.statut),
        heureDebut: String(seance.heureDebut).slice(0, 5),
        heureFin: String(seance.heureFin).slice(0, 5),
        ordonnances: []
      };
      const list = grouped.get(date) ?? [];
      list.push(patient);
      grouped.set(date, list);
    });
    return [...grouped.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([date, patients]) => ({ date, patients }));
  }
  mapOrdonnances(ordonnances) {
    return ordonnances.map((o) => ({
      id: o.id,
      date: String(o.dateEmission).slice(0, 10),
      medicament: o.medicaments,
      posologie: o.posologie,
      instructions: o.instructions ?? null,
      dateExpiration: o.dateExpiration ?? null,
      medecin: `${o.utilisateur?.prenom ?? ""} ${o.utilisateur?.nom ?? ""}`.trim() || "-",
      statut: o.statut
    }));
  }
  mapSeanceStatus(statut) {
    const value = String(statut ?? "").toUpperCase();
    if (value === "TERMINEE")
      return "post";
    if (value === "EN_COURS")
      return "active";
    return "waiting";
  }
  openPatient(p) {
    const cachedOrdonnances = this.ordonnancesByPatient.get(p.id) ?? p.ordonnances ?? [];
    const cachedConstantes = this.constantesBySeance.get(p.seanceId);
    this.selectedPatient = __spreadProps(__spreadValues({}, p), {
      ordonnances: cachedOrdonnances,
      currentConstantesId: cachedConstantes?.id ?? p.currentConstantesId
    });
    this.activeTab = "ordonnances";
    this.resetConstantesForm();
    if (cachedConstantes) {
      this.applyConstantesToForm(cachedConstantes, p.seanceId);
    } else {
      this.loadConstantesForPatient(p);
    }
    if (this.ordonnancesByPatient.has(p.id)) {
      return;
    }
    this.ordonnanceService.getByPatient(p.id).pipe(catchError(() => of([]))).subscribe((ordonnances) => {
      const mapped = this.mapOrdonnances(ordonnances);
      this.ordonnancesByPatient.set(p.id, mapped);
      this.scheduledDays = this.scheduledDays.map((day) => __spreadProps(__spreadValues({}, day), {
        patients: day.patients.map((pt) => pt.id === p.id ? __spreadProps(__spreadValues({}, pt), { ordonnances: mapped }) : pt)
      }));
      if (!this.selectedPatient || this.selectedPatient.id !== p.id)
        return;
      this.selectedPatient = __spreadProps(__spreadValues({}, this.selectedPatient), { ordonnances: mapped });
    });
  }
  closePatient() {
    this.selectedPatient = null;
  }
  setTab(t) {
    this.activeTab = t;
  }
  saveConstantes() {
    const f = this.constantesForm;
    if (!f.tensionSys || !f.tensionDia || !f.poids || !f.bpm || !this.selectedPatient) {
      this.showToast("Veuillez remplir tous les champs obligatoires", "warning");
      return;
    }
    const payload = {
      tensionSys: f.tensionSys,
      tensionDia: f.tensionDia,
      poids: f.poids,
      bpm: f.bpm,
      notes: f.notes,
      date: this.selectedCalDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      patientId: this.selectedPatient.id,
      seanceId: this.selectedPatient.seanceId
    };
    const isEditing = !!this.selectedPatient.currentConstantesId;
    const request$ = isEditing ? this.constantesVitalesService.update(this.selectedPatient.currentConstantesId, payload) : this.constantesVitalesService.create(payload);
    request$.subscribe({
      next: (saved) => {
        this.constantesBySeance.set(saved.seanceId ?? this.selectedPatient.seanceId, saved);
        if (this.selectedPatient) {
          this.selectedPatient = __spreadProps(__spreadValues({}, this.selectedPatient), { currentConstantesId: saved.id });
        }
        this.showToast(isEditing ? `Constantes de ${this.selectedPatient?.name} modifiees` : `Constantes de ${this.selectedPatient?.name} enregistrees`, "success");
        this.closePatient();
      },
      error: () => this.showToast("Erreur lors de l enregistrement des constantes", "error")
    });
  }
  loadConstantesForPatient(patient) {
    this.constantesVitalesService.getByPatient(patient.id).pipe(catchError(() => of([]))).subscribe((constantes) => {
      const existing = this.findConstantesForSelectedSeance(constantes, patient);
      this.constantesBySeance.set(patient.seanceId, existing ?? null);
      if (existing) {
        this.applyConstantesToForm(existing, patient.seanceId);
      }
    });
  }
  applyConstantesToForm(constantes, seanceId) {
    if (!this.selectedPatient || this.selectedPatient.seanceId !== seanceId) {
      return;
    }
    this.selectedPatient = __spreadProps(__spreadValues({}, this.selectedPatient), { currentConstantesId: constantes.id });
    this.constantesForm = {
      tensionSys: constantes.tensionSys,
      tensionDia: constantes.tensionDia,
      poids: constantes.poids,
      bpm: constantes.bpm,
      notes: constantes.notes ?? ""
    };
  }
  findConstantesForSelectedSeance(constantes, patient) {
    const bySeance = constantes.find((item) => item.seanceId === patient.seanceId);
    if (bySeance)
      return bySeance;
    const selectedDate = this.selectedCalDate || "";
    const byDate = constantes.find((item) => String(item.date).slice(0, 10) === selectedDate);
    return byDate ?? null;
  }
  resetConstantesForm() {
    this.constantesForm = { tensionSys: null, tensionDia: null, poids: null, bpm: null, notes: "" };
  }
  get tensionColor() {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d)
      return "var(--c-text-3)";
    if (s >= 140 || d >= 90)
      return "var(--c-red)";
    if (s < 90 || d < 60)
      return "var(--c-amber)";
    return "var(--c-green)";
  }
  get tensionBadge() {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d)
      return "neutral";
    if (s >= 140 || d >= 90)
      return "crit";
    if (s < 90 || d < 60)
      return "warn";
    return "ok";
  }
  get tensionLabel() {
    const { tensionSys: s, tensionDia: d } = this.constantesForm;
    if (!s || !d)
      return "-";
    if (s >= 180 || d >= 120)
      return "Crise hypertensive";
    if (s >= 140 || d >= 90)
      return "Hypertension";
    if (s < 90 || d < 60)
      return "Hypotension";
    return "Normale";
  }
  patientBadgeClass(s) {
    return s === "post" ? "ok" : s === "active" ? "info" : "purple";
  }
  patientBadgeLabel(s) {
    return s === "post" ? "Post-seance" : s === "active" ? "En dialyse" : "En attente";
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function AideSoignantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AideSoignantComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(OrdonnanceService), \u0275\u0275directiveInject(ConstantesVitalesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AideSoignantComponent, selectors: [["app-aide-soignant"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 99, vars: 17, consts: [[1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "pd-overlay", 3, "click", 4, "ngIf"], [1, "as-page"], [1, "as-topbar"], [1, "as-topbar__brand"], ["width", "24", "height", "24", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "as-topbar__name"], [1, "as-topbar__sep"], [1, "as-topbar__role"], [1, "as-topbar__center"], [1, "material-icons"], [1, "as-topbar__right"], [1, "as-user-chip"], [1, "as-user-chip__avatar"], ["title", "Deconnexion", 1, "as-logout", 3, "click"], [1, "as-content"], [1, "as-stats-row"], [1, "as-stat-card", "as-stat-card--teal"], [1, "as-stat-card__icon"], [1, "as-stat-card__body"], [1, "as-stat-card__val"], [1, "as-stat-card__lbl"], [1, "as-stat-card", "as-stat-card--blue"], [1, "as-stat-card", "as-stat-card--purple"], [1, "as-stat-card", "as-stat-card--amber"], [1, "as-main-grid"], [1, "as-cal-card"], [1, "as-cal-header"], [1, "as-cal-nav", 3, "click"], [1, "as-cal-title"], [1, "as-cal-month"], [1, "as-cal-year"], [1, "as-cal-grid"], ["class", "as-cal-dayname", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "as-cal-legend"], [1, "as-cal-legend-item"], [1, "as-cal-ld", "as-cal-ld--today"], [1, "as-cal-ld", "as-cal-ld--scheduled"], [1, "as-cal-ld", "as-cal-ld--selected"], [1, "as-patients-panel"], ["class", "as-panel-empty", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "toast-close"], [1, "pd-overlay", 3, "click"], [1, "pd-panel", 3, "click"], [1, "pd-head"], [1, "pd-head__avatar"], [1, "pd-head__info"], [1, "badge", "pd-head__badge", 3, "ngClass"], [1, "pd-close", 3, "click"], [1, "pd-tabs"], [1, "pd-tab", 3, "click"], ["class", "pd-body", 4, "ngIf"], [1, "pd-body"], ["class", "pd-empty", 4, "ngIf"], ["class", "ord-list", 4, "ngIf"], [1, "pd-cta"], [1, "pd-cta-btn", 3, "click"], [1, "pd-empty"], [1, "ord-list"], ["class", "ord-card", 4, "ngFor", "ngForOf"], [1, "ord-card"], [1, "ord-card__icon"], [1, "ord-card__body"], [1, "ord-card__row"], [1, "ord-label"], ["class", "ord-card__row", 4, "ngIf"], [1, "ord-card__meta"], [1, "ord-sep"], [1, "cv-section"], [1, "cv-section__title"], [1, "material-icons", 2, "color", "var(--c-red)"], [1, "cv-row"], [1, "cv-field"], [1, "req"], [1, "cv-input-box"], ["type", "number", "placeholder", "120", "min", "60", "max", "250", 3, "ngModelChange", "ngModel"], [1, "cv-unit"], [1, "cv-field__sep"], ["type", "number", "placeholder", "80", "min", "30", "max", "150", 3, "ngModelChange", "ngModel"], ["class", "cv-tension-result", 4, "ngIf"], [1, "material-icons", 2, "color", "var(--c-teal)"], [1, "cv-field", "cv-field--big"], [1, "material-icons", 2, "color", "var(--c-amber)", "font-size", "15px"], ["type", "number", "placeholder", "70.0", "min", "20", "max", "300", "step", "0.1", 3, "ngModelChange", "ngModel"], [1, "material-icons", 2, "color", "var(--c-green)", "font-size", "15px"], ["type", "number", "placeholder", "75", "min", "30", "max", "220", 3, "ngModelChange", "ngModel"], ["class", "cv-vitals-chips", 4, "ngIf"], [1, "material-icons", 2, "color", "var(--c-text-3)"], ["rows", "3", "placeholder", "Observations, comportement, alertes...", 1, "cv-textarea", 3, "ngModelChange", "ngModel"], [1, "cv-footer"], [1, "cv-btn-cancel", 3, "click"], [1, "cv-btn-save", 3, "click"], [1, "cv-tension-result"], [1, "cv-tension-val"], [1, "badge", 3, "ngClass"], [1, "cv-vitals-chips"], ["class", "cv-chip", 4, "ngIf"], ["class", "cv-chip", 3, "border-color", 4, "ngIf"], [1, "cv-chip"], [1, "material-icons", 2, "color", "var(--c-amber)"], [1, "as-cal-dayname"], ["class", "as-cal-cell as-cal-cell--empty", 4, "ngIf"], ["class", "as-cal-cell", 3, "as-cal-cell--today", "as-cal-cell--scheduled", "as-cal-cell--selected", "as-cal-cell--disabled", "click", 4, "ngIf"], [1, "as-cal-cell", "as-cal-cell--empty"], [1, "as-cal-cell", 3, "click"], [1, "as-cal-cell__num"], ["class", "as-cal-cell__dot", 4, "ngIf"], [1, "as-cal-cell__dot"], [1, "as-panel-empty"], [1, "as-panel-hint"], [1, "as-panel-head"], [1, "as-panel-head__left"], [1, "badge", "info"], [1, "as-patient-list"], ["class", "as-patient-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "as-panel-hint-bottom"], [1, "as-patient-card", 3, "click"], [1, "as-patient-card__index"], [1, "as-patient-card__avatar"], [1, "as-patient-card__body"], [1, "as-patient-card__name"], [1, "as-patient-card__sub"], [1, "as-patient-card__time"], [1, "as-patient-card__right"], [1, "as-patient-card__action"]], template: function AideSoignantComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AideSoignantComponent_div_1_Template, 8, 5, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, AideSoignantComponent_div_2_Template, 26, 13, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "header", 4)(5, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7)(8, "path", 8)(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275text(11, "DialySys");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275text(13, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 12);
      \u0275\u0275text(15, "Aide-soignant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 13)(17, "span", 14);
      \u0275\u0275text(18, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "div", 17);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 18);
      \u0275\u0275listener("click", function AideSoignantComponent_Template_button_click_26_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(27, "span", 14);
      \u0275\u0275text(28, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "span", 14);
      \u0275\u0275text(34, "event_available");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 25);
      \u0275\u0275text(39, "Jours programmes ce mois");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 26)(41, "div", 22)(42, "span", 14);
      \u0275\u0275text(43, "people");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 23)(45, "div", 24);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 25);
      \u0275\u0275text(48, "Patients suivis ce mois");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 27)(50, "div", 22)(51, "span", 14);
      \u0275\u0275text(52, "upcoming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 23)(54, "div", 24);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 25);
      \u0275\u0275text(57, "Seances a venir");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 28)(59, "div", 22)(60, "span", 14);
      \u0275\u0275text(61, "monitor_heart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 23)(63, "div", 24);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 25);
      \u0275\u0275text(66, "Patients jour selectionne");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 29)(68, "div", 30)(69, "div", 31)(70, "button", 32);
      \u0275\u0275listener("click", function AideSoignantComponent_Template_button_click_70_listener() {
        return ctx.calPrev();
      });
      \u0275\u0275elementStart(71, "span", 14);
      \u0275\u0275text(72, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 33)(74, "span", 34);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 35);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "button", 32);
      \u0275\u0275listener("click", function AideSoignantComponent_Template_button_click_78_listener() {
        return ctx.calNext();
      });
      \u0275\u0275elementStart(79, "span", 14);
      \u0275\u0275text(80, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 36);
      \u0275\u0275template(82, AideSoignantComponent_div_82_Template, 2, 1, "div", 37)(83, AideSoignantComponent_ng_container_83_Template, 3, 2, "ng-container", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 39)(85, "div", 40);
      \u0275\u0275element(86, "span", 41);
      \u0275\u0275text(87, " Aujourd'hui ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 40);
      \u0275\u0275element(89, "span", 42);
      \u0275\u0275text(90, " Programm\xE9 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 40);
      \u0275\u0275element(92, "span", 43);
      \u0275\u0275text(93, " S\xE9lectionn\xE9 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 44);
      \u0275\u0275template(95, AideSoignantComponent_div_95_Template, 7, 0, "div", 45)(96, AideSoignantComponent_div_96_Template, 11, 1, "div", 45)(97, AideSoignantComponent_div_97_Template, 7, 1, "div", 45)(98, AideSoignantComponent_ng_container_98_Template, 15, 3, "ng-container", 46);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPatient);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate1(" ", ctx.todayDisplay, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentUserInitials);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUserName);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.totalJoursMois);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalPatientsMois);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.seancesAVenir);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.selectedDayPatients.length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.moisLabels[ctx.calMonth]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.calYear);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.dayNames);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.calDays);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.selectedCalDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.selectedCalDate && ctx.selectedDayPatients.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.selectedCalDate && ctx.selectedDayPatients.length > 0);
    }
  }, dependencies: [NgForOf, NgClass, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  --c-teal: #00d9c4;\n  --c-blue: #4f8ef7;\n  --c-purple: #a78bfa;\n  --c-amber: #f59e0b;\n  --c-red: #ef4444;\n  --c-green: #22c55e;\n  --c-surface: #0f1117;\n  --c-card: #181c27;\n  --c-border: rgba(255,255,255,.07);\n  --c-text-1: #f0f2f8;\n  --c-text-2: #9aa5c0;\n  --c-text-3: #5a6484;\n}\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  font-size: 13px;\n  min-width: 260px;\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease;\n}\n.toast--success[_ngcontent-%COMP%] {\n  background: #166534;\n  border-left: 3px solid var(--c-green);\n}\n.toast--warning[_ngcontent-%COMP%] {\n  background: #78350f;\n  border-left: 3px solid var(--c-amber);\n}\n.toast--error[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n  border-left: 3px solid var(--c-red);\n}\n.toast--info[_ngcontent-%COMP%] {\n  background: #1e3a5f;\n  border-left: 3px solid var(--c-blue);\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.toast[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  margin-left: auto;\n  padding: 0;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(40px);\n    opacity: 0;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: var(--c-green);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(79, 142, 247, 0.12);\n  color: var(--c-blue);\n}\n.badge.purple[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.12);\n  color: var(--c-purple);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: var(--c-amber);\n}\n.badge.crit[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--c-red);\n}\n.badge.neutral[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--c-text-2);\n}\n.pd-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 800;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pd-panel[_ngcontent-%COMP%] {\n  width: min(640px, 95vw);\n  max-height: 90vh;\n  background: var(--c-card);\n  border-radius: 16px;\n  border: 1px solid var(--c-border);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_popIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: scale(0.95) translateY(16px);\n    opacity: 0;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n.pd-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 20px 16px;\n  border-bottom: 1px solid var(--c-border);\n  flex-shrink: 0;\n}\n.pd-head__avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 217, 196, 0.25);\n}\n.pd-head__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pd-head__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.pd-head__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.pd-head__badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.pd-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--c-text-3);\n  padding: 4px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.pd-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: var(--c-text-1);\n}\n.pd-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pd-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--c-border);\n  flex-shrink: 0;\n}\n.pd-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 13px;\n  font-size: 13px;\n  font-weight: 600;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--c-text-3);\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n}\n.pd-tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.pd-tab[_ngcontent-%COMP%]:hover {\n  color: var(--c-text-1);\n}\n.pd-tab--active[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  border-bottom-color: var(--c-teal);\n}\n.pd-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.pd-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-align: center;\n  color: var(--c-text-3);\n}\n.pd-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.4;\n}\n.pd-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.ord-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ord-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 14px;\n}\n.ord-card__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: rgba(0, 217, 196, 0.1);\n  color: var(--c-teal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ord-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.ord-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.ord-card__row[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n  line-height: 1.5;\n}\n.ord-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: var(--c-text-3);\n  margin-top: 4px;\n}\n.ord-card__meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ord-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--c-text-2);\n  font-size: 12px;\n}\n.ord-sep[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.pd-cta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 8px;\n}\n.pd-cta-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px;\n  border: 1px dashed rgba(0, 217, 196, 0.3);\n  border-radius: 10px;\n  background: rgba(0, 217, 196, 0.05);\n  color: var(--c-teal);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pd-cta-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pd-cta-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.1);\n}\n.cv-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 14px;\n}\n.cv-section__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--c-text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 12px;\n}\n.cv-section__title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cv-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.cv-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cv-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--c-text-2);\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.cv-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n  margin-top: 4px;\n  display: block;\n}\n.cv-field--big[_ngcontent-%COMP%] {\n  flex: 1.3;\n}\n.cv-field[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.cv-input-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cv-input-box[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--c-teal);\n}\n.cv-input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: var(--c-text-1);\n  font-size: 15px;\n  font-weight: 600;\n  padding: 8px 10px;\n}\n.cv-input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n  font-weight: 400;\n}\n.cv-unit[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  font-size: 11px;\n  color: var(--c-text-3);\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 1px solid var(--c-border);\n  font-weight: 600;\n}\n.cv-field__sep[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 28px;\n}\n.cv-field__sep[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--c-text-3);\n}\n.cv-tension-result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 10px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n}\n.cv-tension-result[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cv-tension-val[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  flex: 1;\n}\n.cv-vitals-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cv-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  border: 1px solid var(--c-border);\n  background: rgba(255, 255, 255, 0.03);\n  color: var(--c-text-1);\n}\n.cv-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.cv-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-1);\n  font-size: 13px;\n  padding: 10px 12px;\n  resize: vertical;\n  outline: none;\n}\n.cv-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n}\n.cv-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.cv-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 4px;\n  margin-top: auto;\n}\n.cv-btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.07);\n  border: none;\n  color: var(--c-text-2);\n  cursor: pointer;\n}\n.cv-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.11);\n}\n.cv-btn-save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  background: var(--c-teal);\n  border: none;\n  color: #000;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cv-btn-save[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.cv-btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.as-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: var(--c-surface);\n  color: var(--c-text-1);\n  font-family: var(--f-body, system-ui, sans-serif);\n}\n.as-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 28px;\n  height: 56px;\n  flex-shrink: 0;\n  background: var(--c-card);\n  border-bottom: 1px solid var(--c-border);\n}\n.as-topbar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 15px;\n  font-weight: 700;\n}\n.as-topbar__sep[_ngcontent-%COMP%] {\n  color: var(--c-border);\n  font-size: 18px;\n}\n.as-topbar__role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--c-teal);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.as-topbar__center[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  font-size: 13px;\n  color: var(--c-text-2);\n}\n.as-topbar__center[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--c-text-3);\n}\n.as-topbar__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.as-user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-2);\n}\n.as-user-chip__avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.as-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--c-text-3);\n  padding: 6px;\n  border-radius: 7px;\n  transition: all 0.15s;\n}\n.as-logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.as-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--c-red);\n}\n.as-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  overflow-y: auto;\n}\n.as-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.as-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  padding: 18px 20px;\n  border-left: 3px solid transparent;\n}\n.as-stat-card--teal[_ngcontent-%COMP%] {\n  border-left-color: var(--c-teal);\n}\n.as-stat-card--teal[_ngcontent-%COMP%]   .as-stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.1);\n  color: var(--c-teal);\n}\n.as-stat-card--blue[_ngcontent-%COMP%] {\n  border-left-color: var(--c-blue);\n}\n.as-stat-card--blue[_ngcontent-%COMP%]   .as-stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(79, 142, 247, 0.1);\n  color: var(--c-blue);\n}\n.as-stat-card--purple[_ngcontent-%COMP%] {\n  border-left-color: var(--c-purple);\n}\n.as-stat-card--purple[_ngcontent-%COMP%]   .as-stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.1);\n  color: var(--c-purple);\n}\n.as-stat-card--amber[_ngcontent-%COMP%] {\n  border-left-color: var(--c-amber);\n}\n.as-stat-card--amber[_ngcontent-%COMP%]   .as-stat-card__icon[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: var(--c-amber);\n}\n.as-stat-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.as-stat-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.as-stat-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.as-stat-card__val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--c-text-1);\n  line-height: 1;\n}\n.as-stat-card__lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2);\n  margin-top: 4px;\n}\n.as-main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 20px;\n  flex: 1;\n}\n.as-cal-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 16px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-self: start;\n}\n.as-cal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2px;\n}\n.as-cal-nav[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid var(--c-border);\n  cursor: pointer;\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  color: var(--c-text-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.as-cal-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.11);\n  color: var(--c-text-1);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.as-cal-nav[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.as-cal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n}\n.as-cal-month[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  letter-spacing: -0.01em;\n}\n.as-cal-year[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.as-cal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.as-cal-dayname[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 6px 0 8px;\n}\n.as-cal-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  position: relative;\n  cursor: default;\n  transition: all 0.15s;\n}\n.as-cal-cell--empty[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.as-cal-cell--disabled[_ngcontent-%COMP%] {\n  color: var(--c-text-3);\n  cursor: pointer;\n}\n.as-cal-cell--disabled[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--c-text-2);\n}\n.as-cal-cell[_ngcontent-%COMP%]   .as-cal-cell--clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.as-cal-cell--scheduled[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--c-teal);\n  background: rgba(0, 217, 196, 0.07);\n  border: 1px solid rgba(0, 217, 196, 0.12);\n}\n.as-cal-cell--scheduled[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.14);\n  border-color: rgba(0, 217, 196, 0.25);\n  transform: scale(1.05);\n}\n.as-cal-cell--today[_ngcontent-%COMP%]:not(.as-cal-cell--scheduled) {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--c-text-1);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.as-cal-cell--today[_ngcontent-%COMP%]   .as-cal-cell__num[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: var(--c-teal);\n}\n.as-cal-cell--selected[_ngcontent-%COMP%] {\n  background: var(--c-teal) !important;\n  color: #0a1628 !important;\n  font-weight: 800;\n  border: none !important;\n  transform: scale(1.08);\n  box-shadow: 0 4px 14px rgba(0, 217, 196, 0.3);\n}\n.as-cal-cell--selected[_ngcontent-%COMP%]   .as-cal-cell__dot[_ngcontent-%COMP%] {\n  display: none;\n}\n.as-cal-cell__num[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1;\n  position: relative;\n}\n.as-cal-cell__dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: var(--c-teal);\n  opacity: 0.8;\n  flex-shrink: 0;\n}\n.as-cal-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  border-top: 1px solid var(--c-border);\n  padding-top: 14px;\n  margin-top: 2px;\n}\n.as-cal-legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 10px;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.as-cal-ld[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.as-cal-ld--today[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(0, 217, 196, 0.5);\n}\n.as-cal-ld--scheduled[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.15);\n  border: 1px solid rgba(0, 217, 196, 0.3);\n}\n.as-cal-ld--selected[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n}\n.as-patients-panel[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-height: 0;\n}\n.as-panel-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--c-text-3);\n}\n.as-panel-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.as-panel-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-2);\n}\n.as-panel-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  max-width: 280px;\n  line-height: 1.5;\n}\n.as-panel-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  background: rgba(0, 217, 196, 0.05);\n  border: 1px solid rgba(0, 217, 196, 0.15);\n  color: var(--c-teal);\n  font-size: 12px;\n}\n.as-panel-hint[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.as-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--c-border);\n}\n.as-panel-head__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.as-panel-head__left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.as-patient-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.as-patient-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--c-border);\n  border-radius: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.as-patient-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(0, 217, 196, 0.25);\n  transform: translateY(-1px);\n}\n.as-patient-card__index[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--c-text-3);\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.as-patient-card__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: rgba(0, 217, 196, 0.1);\n  color: var(--c-teal);\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 217, 196, 0.2);\n}\n.as-patient-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.as-patient-card__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.as-patient-card__sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.as-patient-card__sub[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.as-patient-card__sub[_ngcontent-%COMP%]   .ord-sep[_ngcontent-%COMP%] {\n  margin: 0 2px;\n}\n.as-patient-card__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--c-text-2);\n}\n.as-patient-card__time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.as-patient-card__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n}\n.as-patient-card__action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 7px;\n  background: rgba(0, 217, 196, 0.1);\n  color: var(--c-teal);\n}\n.as-patient-card__action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.as-panel-hint-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  color: var(--c-text-3);\n  border-top: 1px solid var(--c-border);\n  padding-top: 10px;\n  margin-top: auto;\n}\n.as-panel-hint-bottom[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (max-width: 900px) {\n  .as-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .as-main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .as-topbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 10px 14px;\n    gap: 8px;\n  }\n  .as-topbar__center[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .as-topbar__brand[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .as-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .as-tab[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .as-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .as-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pd-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .pd-tab[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .cv-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .cv-field[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n}\n@media (max-width: 560px) {\n  .as-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .as-content[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=aide-soignant.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AideSoignantComponent, { className: "AideSoignantComponent", filePath: "app\\pages\\aide-soignant\\aide-soignant.component.ts", lineNumber: 51 });
})();
export {
  AideSoignantComponent
};
//# sourceMappingURL=chunk-HOBBSXPF.js.map
