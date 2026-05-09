import {
  PatientService
} from "./chunk-O7CSYSXH.js";
import {
  SeanceService
} from "./chunk-O7WTSBFZ.js";
import {
  AuthService
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
  NgClass,
  NgForOf,
  NgIf,
  Router
} from "./chunk-CGTKSDI3.js";
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
} from "./chunk-KZPRPR6G.js";

// src/app/pages/planning/planning.component.ts
function PlanningComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function PlanningComponent_div_1_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 51)(6, "span", 13);
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
function PlanningComponent_div_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 13);
    \u0275\u0275text(2, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedSeance.notes);
  }
}
function PlanningComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function PlanningComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function PlanningComponent_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 56)(6, "h2", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 59);
    \u0275\u0275listener("click", function PlanningComponent_div_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 60)(16, "div", 61)(17, "div", 62)(18, "span", 63);
    \u0275\u0275text(19, "Heure de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 64);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 62)(23, "span", 63);
    \u0275\u0275text(24, "Heure de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 64);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 62)(28, "span", 63);
    \u0275\u0275text(29, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 64);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 62)(33, "span", 63);
    \u0275\u0275text(34, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 64);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 62)(38, "span", 63);
    \u0275\u0275text(39, "M\xE9decin responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 65);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 62)(43, "span", 63);
    \u0275\u0275text(44, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 65);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, PlanningComponent_div_2_div_47_Template, 5, 1, "div", 66);
    \u0275\u0275elementStart(48, "div", 67)(49, "button", 68);
    \u0275\u0275listener("click", function PlanningComponent_div_2_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Rapport de s\xE9ance \u2014 bient\xF4t disponible", "info");
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(50, "span", 13);
    \u0275\u0275text(51, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Rapport ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 69);
    \u0275\u0275listener("click", function PlanningComponent_div_2_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(54, "span", 13);
    \u0275\u0275text(55, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Fermer ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.patientInit(ctx_r2.selectedSeance));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.patientNom(ctx_r2.selectedSeance));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r2.formatTime(ctx_r2.selectedSeance), " \u2192 ", ctx_r2.formatTimeFin(ctx_r2.selectedSeance), " \xB7 Machine ", ctx_r2.selectedSeance.machine, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.statutClass(ctx_r2.selectedSeance.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statutLabel(ctx_r2.selectedSeance.statut));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(ctx_r2.selectedSeance));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatTimeFin(ctx_r2.selectedSeance));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedSeance.dureeHeures, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedSeance.machine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.utilisateurNom(ctx_r2.selectedSeance));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.statutLabel(ctx_r2.selectedSeance.statut));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedSeance.notes);
  }
}
function PlanningComponent_div_3_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275property("value", p_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r6.nom, " ", p_r6.prenom, " ");
  }
}
function PlanningComponent_div_3_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", i_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.dayLabels[i_r8], " ", ctx_r2.formatDate(d_r7), " ");
  }
}
function PlanningComponent_div_3_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", h_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatHour(h_r9));
  }
}
function PlanningComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function PlanningComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewModal = false);
    });
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275listener("click", function PlanningComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 54)(3, "h2");
    \u0275\u0275text(4, "Planifier une S\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 59);
    \u0275\u0275listener("click", function PlanningComponent_div_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewModal = false);
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 60)(9, "div", 72)(10, "div", 73)(11, "label");
    \u0275\u0275text(12, "Patient ");
    \u0275\u0275elementStart(13, "span", 74);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_div_3_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.patientId, $event) || (ctx_r2.newSeance.patientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 75);
    \u0275\u0275text(17, "\u2014 S\xE9lectionner un patient \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, PlanningComponent_div_3_option_18_Template, 2, 3, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 76)(20, "label");
    \u0275\u0275text(21, "Jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_div_3_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.dayOffset, $event) || (ctx_r2.newSeance.dayOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(23, PlanningComponent_div_3_option_23_Template, 2, 3, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 76)(25, "label");
    \u0275\u0275text(26, "Heure de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_div_3_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.hour, $event) || (ctx_r2.newSeance.hour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(28, PlanningComponent_div_3_option_28_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 76)(30, "label");
    \u0275\u0275text(31, "Minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_div_3_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.minute, $event) || (ctx_r2.newSeance.minute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 75);
    \u0275\u0275text(34, ":00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 75);
    \u0275\u0275text(36, ":30");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 76)(38, "label");
    \u0275\u0275text(39, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_div_3_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.dureeHeures, $event) || (ctx_r2.newSeance.dureeHeures = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(41, "option", 75);
    \u0275\u0275text(42, "3 heures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 75);
    \u0275\u0275text(44, "3h30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 75);
    \u0275\u0275text(46, "4 heures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 75);
    \u0275\u0275text(48, "4h30");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 76)(50, "label");
    \u0275\u0275text(51, "Machine ");
    \u0275\u0275elementStart(52, "span", 74);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_div_3_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.machine, $event) || (ctx_r2.newSeance.machine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 73)(56, "label");
    \u0275\u0275text(57, "Notes (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "textarea", 78);
    \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_div_3_Template_textarea_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.notes, $event) || (ctx_r2.newSeance.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 67)(60, "button", 46);
    \u0275\u0275listener("click", function PlanningComponent_div_3_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNewSession());
    });
    \u0275\u0275elementStart(61, "span", 13);
    \u0275\u0275text(62, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Planifier la s\xE9ance ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 68);
    \u0275\u0275listener("click", function PlanningComponent_div_3_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewModal = false);
    });
    \u0275\u0275text(65, "Annuler");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.patientId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.patients);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.dayOffset);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.hour);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.hours);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.minute);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.dureeHeures);
    \u0275\u0275advance();
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3.5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4.5);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.machine);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.notes);
  }
}
function PlanningComponent_option_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    \u0275\u0275property("value", m_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r10);
  }
}
function PlanningComponent_button_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function PlanningComponent_button_91_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Effacer les filtres ");
    \u0275\u0275elementEnd();
  }
}
function PlanningComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "span", 13);
    \u0275\u0275text(2, "filter_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Filtres actifs ");
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function PlanningComponent_div_132_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(5, "Effacer ");
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
}
function PlanningComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 82);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PlanningComponent_div_134_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r14 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.getSeancesForDay(i_r14).length, " s\xE9ance", ctx_r2.getSeancesForDay(i_r14).length > 1 ? "s" : "", " ");
  }
}
function PlanningComponent_div_134_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "span", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PlanningComponent_div_134_div_3_span_5_Template, 2, 2, "span", 95);
    \u0275\u0275elementStart(6, "button", 96);
    \u0275\u0275listener("click", function PlanningComponent_div_134_div_3_Template_button_click_6_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNewModal(i_r14));
    });
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const day_r15 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r15))("past", ctx_r2.isPast(day_r15) && !ctx_r2.isToday(day_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dayLabels[i_r14]);
    \u0275\u0275advance();
    \u0275\u0275classProp("day-num--today", ctx_r2.isToday(day_r15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r15.getDate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getSeancesForDay(i_r14).length > 0);
  }
}
function PlanningComponent_div_134_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", ctx_r2.pxPerHour, "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatHour(h_r16), " ");
  }
}
function PlanningComponent_div_134_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 104);
  }
  if (rf & 2) {
    const h_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", (h_r17 - 8) * ctx_r2.pxPerHour, "px");
  }
}
function PlanningComponent_div_134_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 105);
  }
  if (rf & 2) {
    const h_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", (h_r18 - 8) * ctx_r2.pxPerHour + ctx_r2.pxPerHour / 2, "px");
  }
}
function PlanningComponent_div_134_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function PlanningComponent_div_134_div_7_div_3_Template_div_click_0_listener() {
      const s_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openSession(s_r20));
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 108)(6, "span", 13);
    \u0275\u0275text(7, "precision_manufacturing");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 109);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMapInterpolate1("session-card session-card--", ctx_r2.statutClass(s_r20.statut), "");
    \u0275\u0275styleProp("top", ctx_r2.sessionTop(s_r20), "px")("height", ctx_r2.sessionHeight(s_r20), "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(s_r20));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.patientNom(s_r20));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", s_r20.machine, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r20.dureeHeures, "h");
  }
}
function PlanningComponent_div_134_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 110);
  }
}
function PlanningComponent_div_134_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275template(1, PlanningComponent_div_134_div_7_div_1_Template, 1, 2, "div", 100)(2, PlanningComponent_div_134_div_7_div_2_Template, 1, 2, "div", 101)(3, PlanningComponent_div_134_div_7_div_3_Template, 11, 11, "div", 102)(4, PlanningComponent_div_134_div_7_div_4_Template, 1, 0, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", ctx_r2.hours.length * ctx_r2.pxPerHour, "px");
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r21))("past", ctx_r2.isPast(day_r21) && !ctx_r2.isToday(day_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.hours);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.hours);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getSeancesForDay(i_r22));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isToday(day_r21));
  }
}
function PlanningComponent_div_134_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "span", 13);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune s\xE9ance cette semaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function PlanningComponent_div_134_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNewModal());
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Planifier une s\xE9ance ");
    \u0275\u0275elementEnd()();
  }
}
function PlanningComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275element(2, "div", 85);
    \u0275\u0275template(3, PlanningComponent_div_134_div_3_Template, 9, 9, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 87)(5, "div", 88);
    \u0275\u0275template(6, PlanningComponent_div_134_div_6_Template, 2, 3, "div", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PlanningComponent_div_134_div_7_Template, 5, 10, "div", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PlanningComponent_div_134_div_8_Template, 9, 0, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.hours);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.seances.length === 0 && !ctx_r2.isLoading);
  }
}
function PlanningComponent_div_135_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1, "Aujourd'hui");
    \u0275\u0275elementEnd();
  }
}
function PlanningComponent_div_135_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1, "Pass\xE9");
    \u0275\u0275elementEnd();
  }
}
function PlanningComponent_div_135_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "\xC0 venir");
    \u0275\u0275elementEnd();
  }
}
function PlanningComponent_div_135_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 13);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune s\xE9ance ce jour ");
    \u0275\u0275elementEnd();
  }
}
function PlanningComponent_div_135_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function PlanningComponent_div_135_div_1_div_14_Template_div_click_0_listener() {
      const s_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openSession(s_r27));
    });
    \u0275\u0275elementStart(1, "div", 129)(2, "span", 130);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 131);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 132);
    \u0275\u0275elementStart(7, "div", 133)(8, "div", 134);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 135);
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(s_r27));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r27.dureeHeures, "h");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bar--" + ctx_r2.statutClass(s_r27.statut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.patientInit(s_r27));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.patientNom(s_r27));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.utilisateurNom(s_r27), " \xB7 ", s_r27.machine, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.statutClass(s_r27.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statutLabel(s_r27.statut));
  }
}
function PlanningComponent_div_135_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "span", 116);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PlanningComponent_div_135_div_1_span_4_Template, 2, 0, "span", 117)(5, PlanningComponent_div_135_div_1_span_5_Template, 2, 0, "span", 118)(6, PlanningComponent_div_135_div_1_span_6_Template, 2, 0, "span", 119);
    \u0275\u0275elementStart(7, "span", 120);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 121);
    \u0275\u0275listener("click", function PlanningComponent_div_135_div_1_Template_button_click_9_listener() {
      const i_r25 = \u0275\u0275restoreView(_r24).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNewModal(i_r25));
    });
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, PlanningComponent_div_135_div_1_div_13_Template, 4, 0, "div", 122)(14, PlanningComponent_div_135_div_1_div_14_Template, 19, 11, "div", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r28 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r28));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.dayLabels[i_r25], " ", day_r28.getDate(), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isToday(day_r28));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isPast(day_r28) && !ctx_r2.isToday(day_r28));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isPast(day_r28) && !ctx_r2.isToday(day_r28));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.getSeancesForDay(i_r25).length, " s\xE9ance(s)");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.getSeancesForDay(i_r25).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getSeancesForDay(i_r25));
  }
}
function PlanningComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275template(1, PlanningComponent_div_135_div_1_Template, 15, 10, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
  }
}
var PX_PER_HOUR = 80;
var GRID_START = 8;
var GRID_END = 18;
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
  // ── Grille ──────────────────────────────────────────────────────────────
  hours = Array.from({ length: GRID_END - GRID_START }, (_, i) => GRID_START + i);
  pxPerHour = PX_PER_HOUR;
  dayLabels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  // ── Navigation semaine ───────────────────────────────────────────────────
  currentWeekOffset = 0;
  weekStartBase;
  // Lundi de la semaine courante réelle
  // ── Données ──────────────────────────────────────────────────────────────
  // ✅ CHANGEMENT: Utiliser SeanceDto[] et PatientDto[]
  seances = [];
  patients = [];
  isLoading = false;
  // ── Filtres ──────────────────────────────────────────────────────────────
  filterMachine = "";
  filterStatut = "";
  viewMode = "semaine";
  // ── Modals ───────────────────────────────────────────────────────────────
  selectedSeance = null;
  showDetailModal = false;
  showNewModal = false;
  newSeance = {
    patientId: 0,
    dayOffset: 0,
    hour: 8,
    minute: 0,
    dureeHeures: 4,
    machine: "",
    notes: ""
  };
  // ────────────────────────────────────────────────────────────────────────
  ngOnInit() {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const dow = today.getDay();
    const diff = dow === 0 ? -6 : 1 - dow;
    this.weekStartBase = new Date(today);
    this.weekStartBase.setDate(today.getDate() + diff);
    this.loadWeek();
    this.patientSvc.getAll().subscribe({
      next: (p) => this.patients = p
    });
  }
  // ── Calcul du lundi affiché ──────────────────────────────────────────────
  get displayedWeekStart() {
    const d = new Date(this.weekStartBase);
    d.setDate(d.getDate() + this.currentWeekOffset * 7);
    return d;
  }
  // ── Les 6 jours (lun-sam) de la semaine affichée ──────────────────────────
  get weekDays() {
    const start = this.displayedWeekStart;
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }
  // ── Label "13 avril — 18 avril 2026" ────────────────────────────────────
  get weekRangeLabel() {
    const days = this.weekDays;
    const opts = { day: "numeric", month: "long" };
    const start = days[0].toLocaleDateString("fr-FR", opts);
    const end = days[5].toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    return `${start} \u2014 ${end}`;
  }
  // ── Chargement des séances de la semaine depuis le backend ───────────────
  loadWeek() {
    this.isLoading = true;
    const days = this.weekDays;
    const debut = toLocalIso(days[0]);
    const fin = toLocalIso(days[days.length - 1]);
    this.seanceSvc.getByPeriode(debut, fin).subscribe({
      next: (s) => {
        this.seances = s;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.showToast("Erreur chargement s\xE9ances", "error");
      }
    });
  }
  // ── Navigation ────────────────────────────────────────────────────────────
  prevWeek() {
    this.currentWeekOffset--;
    this.loadWeek();
  }
  nextWeek() {
    this.currentWeekOffset++;
    this.loadWeek();
  }
  goToday() {
    this.currentWeekOffset = 0;
    this.loadWeek();
  }
  // ── Filtrage par jour ─────────────────────────────────────────────────────
  getSeancesForDay(dayIndex) {
    const dayIso = toLocalIso(this.weekDays[dayIndex]);
    return this.seances.filter((s) => {
      const match = s.date?.substring(0, 10) === dayIso;
      const mMachine = !this.filterMachine || s.machine === this.filterMachine;
      const mStatut = !this.filterStatut || s.statut === this.filterStatut;
      return match && mMachine && mStatut;
    });
  }
  // ── Positionnement CSS des cartes ─────────────────────────────────────────
  sessionTop(s) {
    const [hh, mm] = (s.heureDebut ?? "08:00").split(":").map(Number);
    return (hh - GRID_START) * PX_PER_HOUR + mm / 60 * PX_PER_HOUR;
  }
  sessionHeight(s) {
    return Math.max(s.dureeHeures * PX_PER_HOUR, 40);
  }
  // ── Helpers affichage ────────────────────────────────────────────────────
  patientNom(s) {
    return s.patient ? `${s.patient.nom} ${s.patient.prenom}` : "\u2014";
  }
  patientInit(s) {
    return `${s.patient?.nom?.[0] ?? ""}${s.patient?.prenom?.[0] ?? ""}`.toUpperCase();
  }
  utilisateurNom(s) {
    return s.utilisateur ? `${s.utilisateur.nom} ${s.utilisateur.prenom}` : "\u2014";
  }
  statutClass(statut) {
    return { TERMINEE: "ok", EN_COURS: "info", PLANIFIEE: "purple", ANNULEE: "danger" }[statut] ?? "purple";
  }
  statutLabel(statut) {
    return { TERMINEE: "Termin\xE9e", EN_COURS: "En cours", PLANIFIEE: "Planifi\xE9e", ANNULEE: "Annul\xE9e" }[statut] ?? statut;
  }
  isToday(date) {
    const t = /* @__PURE__ */ new Date();
    return date.getDate() === t.getDate() && date.getMonth() === t.getMonth() && date.getFullYear() === t.getFullYear();
  }
  isPast(date) {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0);
    return date < t;
  }
  formatHour(h) {
    return `${String(h).padStart(2, "0")}:00`;
  }
  formatTime(s) {
    return s.heureDebut?.substring(0, 5) ?? "\u2014";
  }
  formatTimeFin(s) {
    return s.heureFin?.substring(0, 5) ?? "\u2014";
  }
  formatDate(date) {
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  }
  dayName(index) {
    return ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][index] ?? "";
  }
  // ── Stats semaine ────────────────────────────────────────────────────────
  get weekSessionCount() {
    return this.seances.length;
  }
  get completedCount() {
    return this.seances.filter((s) => s.statut === "TERMINEE").length;
  }
  get ongoingCount() {
    return this.seances.filter((s) => s.statut === "EN_COURS").length;
  }
  get plannedCount() {
    return this.seances.filter((s) => s.statut === "PLANIFIEE").length;
  }
  get machinesUsed() {
    return new Set(this.seances.map((s) => s.machine).filter(Boolean)).size;
  }
  get allMachines() {
    return [...new Set(this.seances.map((s) => s.machine).filter((m) => !!m))].sort();
  }
  get hasActiveFilters() {
    return !!(this.filterMachine || this.filterStatut);
  }
  clearFilters() {
    this.filterMachine = "";
    this.filterStatut = "";
  }
  // ── Détail séance ─────────────────────────────────────────────────────────
  openSession(s) {
    this.selectedSeance = s;
    this.showDetailModal = true;
  }
  closeDetail() {
    this.showDetailModal = false;
    this.selectedSeance = null;
  }
  // ── Nouvelle séance ───────────────────────────────────────────────────────
  openNewModal(dayIndex) {
    this.newSeance = {
      patientId: 0,
      dayOffset: dayIndex ?? 0,
      hour: 8,
      minute: 0,
      dureeHeures: 4,
      machine: "",
      notes: ""
    };
    this.showNewModal = true;
  }
  saveNewSession() {
    if (!this.newSeance.patientId || !this.newSeance.machine.trim()) {
      this.showToast("Patient et machine sont obligatoires", "warning");
      return;
    }
    const utilisateurId = this.authSvc.utilisateurId;
    if (!utilisateurId) {
      this.showToast("Utilisateur non authentifi\xE9", "error");
      return;
    }
    const day = this.weekDays[this.newSeance.dayOffset];
    const dateStr = toLocalIso(day);
    const heureDebut = `${String(this.newSeance.hour).padStart(2, "0")}:${String(this.newSeance.minute).padStart(2, "0")}:00`;
    const totalMin = this.newSeance.hour * 60 + this.newSeance.minute + this.newSeance.dureeHeures * 60;
    const heureFin = `${String(Math.floor(totalMin / 60)).padStart(2, "0")}:${String(totalMin % 60).padStart(2, "0")}:00`;
    const payload = {
      date: dateStr,
      heureDebut,
      heureFin,
      machine: this.newSeance.machine.trim().toUpperCase(),
      notes: this.newSeance.notes,
      dureeHeures: this.newSeance.dureeHeures,
      patientId: this.newSeance.patientId,
      utilisateurId
    };
    this.seanceSvc.create(payload).subscribe({
      next: (created) => {
        this.seances.push(created);
        this.showNewModal = false;
        this.showToast("S\xE9ance planifi\xE9e avec succ\xE8s", "success");
        this.seanceSvc.invalidateCache();
        this.loadWeek();
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Erreur lors de la cr\xE9ation";
        this.showToast(msg, "error");
      }
    });
  }
  // ── Toast ─────────────────────────────────────────────────────────────────
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
  logout() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function PlanningComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanningComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanningComponent, selectors: [["app-planning"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 136, vars: 23, consts: [[1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "planning-shell"], [1, "sidebar"], [1, "sidebar__logo"], ["width", "28", "height", "28", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "sidebar__nav"], [1, "nav-section-label"], [1, "nav-item", "active"], [1, "material-icons"], [1, "nav-item", 3, "click"], [1, "sidebar-stat"], [1, "material-icons", 2, "color", "var(--c-teal)"], [1, "material-icons", 2, "color", "var(--c-green)"], [1, "material-icons", 2, "color", "var(--c-blue)"], [1, "material-icons", 2, "color", "var(--c-purple)"], [1, "material-icons", 2, "color", "var(--c-amber)"], [1, "nav-section-label", 2, "margin-top", "8px"], [1, "sidebar-filter"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "TERMINEE"], ["value", "EN_COURS"], ["value", "PLANIFIEE"], ["value", "ANNULEE"], ["class", "clear-filters-btn", 3, "click", 4, "ngIf"], [1, "sidebar__user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["title", "Se d\xE9connecter", 1, "logout-btn", 3, "click"], [1, "planning-main"], [1, "planning-topbar"], [1, "planning-topbar__nav"], [1, "nav-arrow", 3, "click"], [1, "week-label"], [1, "today-btn", 3, "click"], [1, "planning-topbar__actions"], [1, "view-toggle"], [3, "click"], [1, "btn-sm-primary", 3, "click"], ["class", "filter-bar", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "calendar-wrap", 4, "ngIf"], ["class", "list-view", 4, "ngIf"], [1, "toast-close"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", 3, "click"], [1, "modal-header"], [1, "avatar-lg"], [2, "flex", "1"], [2, "margin-bottom", "3px"], [2, "font-size", "12px", "color", "var(--c-text-3)"], [1, "modal-close-btn", 3, "click"], [1, "modal-body"], [1, "modal-stat-row"], [1, "modal-stat"], [1, "modal-stat-lbl"], [1, "modal-stat-val", "mono"], [1, "modal-stat-val"], ["class", "modal-note", 4, "ngIf"], [1, "modal-actions"], [1, "btn-outline-sm", 3, "click"], [1, "btn-delete", 3, "click"], [1, "modal-note"], [1, "modal-panel", "modal-panel--form", 3, "click"], [1, "form-grid"], [1, "form-field", "form-field--full"], [1, "req"], [3, "value"], [1, "form-field"], ["type", "text", "placeholder", "Ex: M-09", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Observations, pr\xE9cautions\u2026", 3, "ngModelChange", "ngModel"], [1, "clear-filters-btn", 3, "click"], [1, "filter-bar"], [1, "loading-overlay"], [1, "material-icons", "spin"], [1, "calendar-wrap"], [1, "cal-header"], [1, "cal-time-gutter"], ["class", "cal-day-header", 3, "today", "past", 4, "ngFor", "ngForOf"], [1, "cal-body"], [1, "cal-time-gutter", "cal-time-gutter--body"], ["class", "time-label", 3, "height", 4, "ngFor", "ngForOf"], ["class", "cal-day-col", 3, "today", "past", "height", 4, "ngFor", "ngForOf"], ["class", "empty-week", 4, "ngIf"], [1, "cal-day-header"], [1, "day-abbr"], [1, "day-num"], ["class", "day-count", 4, "ngIf"], ["title", "Ajouter une s\xE9ance", 1, "add-day-btn", 3, "click"], [1, "day-count"], [1, "time-label"], [1, "cal-day-col"], ["class", "grid-line", 3, "top", 4, "ngFor", "ngForOf"], ["class", "grid-line grid-line--half", 3, "top", 4, "ngFor", "ngForOf"], [3, "class", "top", "height", "click", 4, "ngFor", "ngForOf"], ["class", "now-line", 4, "ngIf"], [1, "grid-line"], [1, "grid-line", "grid-line--half"], [1, "session-card__time"], [1, "session-card__patient"], [1, "session-card__meta"], [1, "session-card__duration"], [1, "now-line"], [1, "empty-week"], [1, "list-view"], ["class", "list-day-group", 4, "ngFor", "ngForOf"], [1, "list-day-group"], [1, "list-day-header"], [1, "list-day-name"], ["class", "badge info", 4, "ngIf"], ["class", "badge ok", 4, "ngIf"], ["class", "badge purple", 4, "ngIf"], [1, "list-day-count"], [1, "btn-teal-xs", 3, "click"], ["class", "list-empty", 4, "ngIf"], ["class", "list-session-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "badge", "info"], [1, "badge", "ok"], [1, "badge", "purple"], [1, "list-empty"], [1, "list-session-row", 3, "click"], [1, "list-session-time"], [1, "mono"], [1, "list-dur"], [1, "list-session-bar", 3, "ngClass"], [1, "list-session-patient"], [1, "avatar-sm"], [1, "material-icons", "list-chevron"]], template: function PlanningComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PlanningComponent_div_1_Template, 8, 5, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, PlanningComponent_div_2_Template, 57, 16, "div", 2)(3, PlanningComponent_div_3_Template, 66, 17, "div", 2);
      \u0275\u0275elementStart(4, "div", 3)(5, "aside", 4)(6, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 6);
      \u0275\u0275element(8, "path", 7)(9, "path", 8)(10, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "DialySys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "nav", 10)(14, "div", 11);
      \u0275\u0275text(15, "Planning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 12)(17, "span", 13);
      \u0275\u0275text(18, "calendar_month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Planning S\xE9ances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "a", 14);
      \u0275\u0275listener("click", function PlanningComponent_Template_a_click_21_listener() {
        return ctx.backToDashboard();
      });
      \u0275\u0275elementStart(22, "span", 13);
      \u0275\u0275text(23, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275text(27, "Statistiques semaine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15)(29, "span", 16);
      \u0275\u0275text(30, "event_available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div")(32, "b");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "S\xE9ances au total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 15)(37, "span", 17);
      \u0275\u0275text(38, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div")(40, "b");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Termin\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 15)(45, "span", 18);
      \u0275\u0275text(46, "monitor_heart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div")(48, "b");
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "En cours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 15)(53, "span", 19);
      \u0275\u0275text(54, "pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div")(56, "b");
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "Planifi\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 15)(61, "span", 20);
      \u0275\u0275text(62, "precision_manufacturing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div")(64, "b");
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "Machines actives");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 21);
      \u0275\u0275text(69, "Filtres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 22)(71, "label");
      \u0275\u0275text(72, "Machine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_Template_select_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterMachine, $event) || (ctx.filterMachine = $event);
        return $event;
      });
      \u0275\u0275elementStart(74, "option", 24);
      \u0275\u0275text(75, "Toutes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, PlanningComponent_option_76_Template, 2, 2, "option", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 22)(78, "label");
      \u0275\u0275text(79, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PlanningComponent_Template_select_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatut, $event) || (ctx.filterStatut = $event);
        return $event;
      });
      \u0275\u0275elementStart(81, "option", 24);
      \u0275\u0275text(82, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "option", 26);
      \u0275\u0275text(84, "Termin\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "option", 27);
      \u0275\u0275text(86, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "option", 28);
      \u0275\u0275text(88, "Planifi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 29);
      \u0275\u0275text(90, "Annul\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(91, PlanningComponent_button_91_Template, 4, 0, "button", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 31)(93, "div", 32);
      \u0275\u0275text(94, "DR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 33)(96, "span", 34);
      \u0275\u0275text(97, "Dr. M\xE9decin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 35);
      \u0275\u0275text(99, "N\xE9phrologue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "button", 36);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_100_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(101, "span", 13);
      \u0275\u0275text(102, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 37)(104, "header", 38)(105, "div", 39)(106, "button", 40);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_106_listener() {
        return ctx.prevWeek();
      });
      \u0275\u0275elementStart(107, "span", 13);
      \u0275\u0275text(108, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 41)(110, "span", 13);
      \u0275\u0275text(111, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275text(112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 40);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_113_listener() {
        return ctx.nextWeek();
      });
      \u0275\u0275elementStart(114, "span", 13);
      \u0275\u0275text(115, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 42);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_116_listener() {
        return ctx.goToday();
      });
      \u0275\u0275text(117, " Aujourd'hui ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 43)(119, "div", 44)(120, "button", 45);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_120_listener() {
        return ctx.viewMode = "semaine";
      });
      \u0275\u0275elementStart(121, "span", 13);
      \u0275\u0275text(122, "view_week");
      \u0275\u0275elementEnd();
      \u0275\u0275text(123, " Semaine ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "button", 45);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_124_listener() {
        return ctx.viewMode = "liste";
      });
      \u0275\u0275elementStart(125, "span", 13);
      \u0275\u0275text(126, "list");
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, " Liste ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "button", 46);
      \u0275\u0275listener("click", function PlanningComponent_Template_button_click_128_listener() {
        return ctx.openNewModal();
      });
      \u0275\u0275elementStart(129, "span", 13);
      \u0275\u0275text(130, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(131, " Nouvelle S\xE9ance ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(132, PlanningComponent_div_132_Template, 8, 0, "div", 47)(133, PlanningComponent_div_133_Template, 5, 0, "div", 48)(134, PlanningComponent_div_134_Template, 9, 4, "div", 49)(135, PlanningComponent_div_135_Template, 2, 1, "div", 50);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal && ctx.selectedSeance);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNewModal);
      \u0275\u0275advance(30);
      \u0275\u0275textInterpolate(ctx.weekSessionCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.completedCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.ongoingCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.plannedCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.machinesUsed);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterMachine);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.allMachines);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatut);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.hasActiveFilters);
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate1(" ", ctx.weekRangeLabel, " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.currentWeekOffset === 0);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.viewMode === "semaine");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.viewMode === "liste");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.hasActiveFilters);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "semaine" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "liste" && !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n.planning-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--c-bg);\n}\n.sidebar-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.sidebar-stat[_ngcontent-%COMP%]:hover {\n  background: var(--c-card);\n}\n.sidebar-stat[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.sidebar-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.sidebar-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.sidebar-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--c-text-3);\n}\n.sidebar-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 4px 12px;\n}\n.sidebar-filter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 600;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.sidebar-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 6px;\n  color: var(--c-text-1);\n  font-family: var(--f-body);\n  font-size: 12px;\n  padding: 6px 8px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.sidebar-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-border-hi);\n}\n.sidebar-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--c-card);\n}\n.clear-filters-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin: 6px 12px 0;\n  background: var(--c-red-soft);\n  border: 1px solid rgba(255, 87, 87, 0.25);\n  border-radius: 6px;\n  color: var(--c-red);\n  font-size: 11.5px;\n  font-family: var(--f-body);\n  font-weight: 600;\n  padding: 6px 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.clear-filters-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.clear-filters-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-red);\n  color: #fff;\n}\n.planning-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.planning-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  height: 60px;\n  background: var(--c-surface);\n  border-bottom: 1px solid var(--c-border);\n  flex-shrink: 0;\n  gap: 16px;\n}\n.planning-topbar__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.planning-topbar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.week-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--f-head);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  padding: 0 8px;\n  white-space: nowrap;\n}\n.week-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--c-teal);\n}\n.nav-arrow[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n  color: var(--c-text-2);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.nav-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.nav-arrow[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n  color: var(--c-text-1);\n  background: var(--c-card);\n}\n.today-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  background: none;\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n  font-family: var(--f-body);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--c-text-2);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.today-btn[_ngcontent-%COMP%]:hover, \n.today-btn.active[_ngcontent-%COMP%] {\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  background: none;\n  border: none;\n  font-family: var(--f-body);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--c-text-3);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.active):hover {\n  color: var(--c-text-1);\n  background: var(--c-card);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 24px;\n  background: rgba(245, 166, 35, 0.06);\n  border-bottom: 1px solid rgba(245, 166, 35, 0.2);\n  font-size: 12.5px;\n  color: var(--c-amber);\n  flex-shrink: 0;\n}\n.filter-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  color: var(--c-amber);\n  font-size: 12px;\n  font-family: var(--f-body);\n  cursor: pointer;\n  font-weight: 600;\n}\n.filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.filter-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.calendar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n.cal-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px repeat(6, 1fr);\n  border-bottom: 1px solid var(--c-border);\n  background: var(--c-surface);\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.cal-time-gutter[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--c-border);\n  background: var(--c-surface);\n}\n.cal-day-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 6px 8px;\n  border-right: 1px solid var(--c-border);\n  gap: 2px;\n  position: relative;\n}\n.cal-day-header[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.cal-day-header.today[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n}\n.cal-day-header.today[_ngcontent-%COMP%]   .day-num[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n  color: #050A14;\n}\n.cal-day-header.today[_ngcontent-%COMP%]   .day-abbr[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.cal-day-header.past[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.cal-day-header[_ngcontent-%COMP%]   .day-abbr[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--c-text-3);\n}\n.cal-day-header[_ngcontent-%COMP%]   .day-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--f-head);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.cal-day-header[_ngcontent-%COMP%]   .day-count[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  color: var(--c-text-3);\n  font-weight: 500;\n}\n.cal-day-header[_ngcontent-%COMP%]   .add-day-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 6px;\n  width: 20px;\n  height: 20px;\n  background: none;\n  border: none;\n  color: var(--c-text-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.15s;\n}\n.cal-day-header[_ngcontent-%COMP%]   .add-day-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cal-day-header[_ngcontent-%COMP%]:hover   .add-day-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.cal-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px repeat(6, 1fr);\n  flex: 1;\n}\n.cal-time-gutter--body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid var(--c-border);\n  background: var(--c-surface);\n}\n.time-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 4px;\n  font-family: var(--f-mono);\n  font-size: 9.5px;\n  color: var(--c-text-3);\n  flex-shrink: 0;\n  border-top: 1px solid var(--c-border);\n}\n.cal-day-col[_ngcontent-%COMP%] {\n  position: relative;\n  border-right: 1px solid var(--c-border);\n}\n.cal-day-col[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.cal-day-col.past[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.012);\n}\n.cal-day-col.today[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.025);\n}\n.grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-top: 1px solid var(--c-border);\n  pointer-events: none;\n}\n.grid-line--half[_ngcontent-%COMP%] {\n  border-top-style: dashed;\n  opacity: 0.5;\n}\n.now-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--c-red);\n  z-index: 5;\n  pointer-events: none;\n  top: 40%;\n}\n.now-line[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--c-red);\n}\n.session-card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 3px;\n  right: 3px;\n  border-radius: 7px;\n  padding: 6px 8px;\n  cursor: pointer;\n  overflow: hidden;\n  transition:\n    filter 0.15s,\n    transform 0.1s,\n    box-shadow 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  z-index: 2;\n}\n.session-card[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.12);\n  transform: scaleX(1.015);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n  z-index: 3;\n}\n.session-card__time[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 9.5px;\n  opacity: 0.85;\n  flex-shrink: 0;\n}\n.session-card__patient[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1.2;\n  flex-shrink: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.session-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 9.5px;\n  opacity: 0.8;\n}\n.session-card__meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.session-card__duration[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 0.65;\n  margin-top: auto;\n}\n.session-card--ok[_ngcontent-%COMP%] {\n  background: rgba(48, 209, 88, 0.18);\n  border-left: 3px solid var(--c-green);\n  color: #b5f5cb;\n}\n.session-card--info[_ngcontent-%COMP%] {\n  background: rgba(78, 168, 248, 0.2);\n  border-left: 3px solid var(--c-blue);\n  color: #b8daff;\n  animation: _ngcontent-%COMP%_pulse-card 2.5s ease-in-out infinite;\n}\n.session-card--purple[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.18);\n  border-left: 3px solid var(--c-purple);\n  color: #d4c9ff;\n}\n.session-card--warn[_ngcontent-%COMP%] {\n  background: rgba(245, 166, 35, 0.2);\n  border-left: 3px solid var(--c-amber);\n  color: #fde6b0;\n}\n.session-card--crit[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.2);\n  border-left: 3px solid var(--c-red);\n  color: #ffbdbd;\n}\n@keyframes _ngcontent-%COMP%_pulse-card {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(78, 168, 248, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 4px rgba(78, 168, 248, 0);\n  }\n}\n.list-view[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.list-day-group[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.list-day-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  background: var(--c-card-hi);\n  border-bottom: 1px solid var(--c-border);\n}\n.list-day-header.today[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n  border-bottom-color: var(--c-border-hi);\n}\n.list-day-header[_ngcontent-%COMP%]   .list-day-name[_ngcontent-%COMP%] {\n  font-family: var(--f-head);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  min-width: 72px;\n}\n.list-day-header[_ngcontent-%COMP%]   .list-day-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11.5px;\n  color: var(--c-text-3);\n}\n.list-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 18px;\n  color: var(--c-text-3);\n  font-size: 13px;\n}\n.list-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.list-session-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--c-border);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.list-session-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.list-session-row[_ngcontent-%COMP%]:hover {\n  background: var(--c-card-hi);\n}\n.list-session-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-shrink: 0;\n  width: 52px;\n}\n.list-session-time[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n}\n.list-session-time[_ngcontent-%COMP%]   .list-dur[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n}\n.list-session-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  align-self: stretch;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n.list-session-bar--ok[_ngcontent-%COMP%] {\n  background: var(--c-green);\n}\n.list-session-bar--info[_ngcontent-%COMP%] {\n  background: var(--c-blue);\n}\n.list-session-bar--purple[_ngcontent-%COMP%] {\n  background: var(--c-purple);\n}\n.list-session-bar--warn[_ngcontent-%COMP%] {\n  background: var(--c-amber);\n}\n.list-session-bar--crit[_ngcontent-%COMP%] {\n  background: var(--c-red);\n}\n.list-session-patient[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.list-session-patient[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.list-session-patient[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n  margin-top: 1px;\n}\n.list-chevron[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: var(--c-text-3);\n}\n.btn-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 11px;\n  background: transparent;\n  border: 1px solid rgba(255, 87, 87, 0.4);\n  border-radius: 6px;\n  color: var(--c-red);\n  font-size: 11.5px;\n  font-weight: 600;\n  font-family: var(--f-body);\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.btn-delete[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--c-red-soft);\n  border-color: var(--c-red);\n}\n/*# sourceMappingURL=planning.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanningComponent, { className: "PlanningComponent", filePath: "app\\pages\\planning\\planning.component.ts", lineNumber: 41 });
})();
export {
  PlanningComponent
};
//# sourceMappingURL=chunk-4WINTFE7.js.map
