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
  Router,
  SlicePipe,
  TitleCasePipe
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KZPRPR6G.js";

// src/app/pages/infirmier-majeur/infirmier-majeur.component.ts
function InfirmierMajeurComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_1_Template_div_click_0_listener() {
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
    \u0275\u0275elementStart(5, "button", 38)(6, "span", 15);
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
function InfirmierMajeurComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNotifPanel = false);
    });
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSession());
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 46);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSession());
    });
    \u0275\u0275elementStart(13, "span", 15);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 47)(16, "div", 48)(17, "div", 49)(18, "span", 50);
    \u0275\u0275text(19, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 51);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 49)(23, "span", 50);
    \u0275\u0275text(24, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 52);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 49)(28, "span", 50);
    \u0275\u0275text(29, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 52);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 53)(33, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_3_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("S\xE9ance mise \xE0 jour", "success");
      return \u0275\u0275resetView(ctx_r2.closeSession());
    });
    \u0275\u0275elementStart(34, "span", 15);
    \u0275\u0275text(35, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_3_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Rapport g\xE9n\xE9r\xE9", "info");
      return \u0275\u0275resetView(ctx_r2.closeSession());
    });
    \u0275\u0275elementStart(38, "span", 15);
    \u0275\u0275text(39, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Rapport ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_3_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Infirmier(e) r\xE9assign\xE9(e)", "info");
      return \u0275\u0275resetView(ctx_r2.closeSession());
    });
    \u0275\u0275elementStart(42, "span", 15);
    \u0275\u0275text(43, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " R\xE9assigner ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedSession.patientInit);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedSession.patientNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r2.selectedSession.heure, " \xB7 ", ctx_r2.selectedSession.duree, " \xB7 Machine ", ctx_r2.selectedSession.machine, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.selectedSession.statusClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedSession.statusLabel);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.selectedSession.infirmier);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedSession.machine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedSession.duree);
  }
}
function InfirmierMajeurComponent_div_4_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7.nom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.nom);
  }
}
function InfirmierMajeurComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNouvelleSeanceModal = false);
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 56)(3, "h2");
    \u0275\u0275text(4, "Nouvelle S\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNouvelleSeanceModal = false);
    });
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 47)(9, "div", 57)(10, "div", 58)(11, "label");
    \u0275\u0275text(12, "Patient ");
    \u0275\u0275elementStart(13, "span", 59);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_div_4_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.patient, $event) || (ctx_r2.newSeance.patient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 61)(17, "label");
    \u0275\u0275text(18, "Heure ");
    \u0275\u0275elementStart(19, "span", 59);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_div_4_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.heure, $event) || (ctx_r2.newSeance.heure = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 61)(23, "label");
    \u0275\u0275text(24, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_div_4_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.duree, $event) || (ctx_r2.newSeance.duree = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 64);
    \u0275\u0275text(27, "3 heures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 65);
    \u0275\u0275text(29, "3h30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 66);
    \u0275\u0275text(31, "4 heures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 67);
    \u0275\u0275text(33, "4h30");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 61)(35, "label");
    \u0275\u0275text(36, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_div_4_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.infirmier, $event) || (ctx_r2.newSeance.infirmier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "option", 68);
    \u0275\u0275text(39, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, InfirmierMajeurComponent_div_4_option_40_Template, 2, 2, "option", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 61)(42, "label");
    \u0275\u0275text(43, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_div_4_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSeance.machine, $event) || (ctx_r2.newSeance.machine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 53)(46, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_4_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ajouterSeance());
    });
    \u0275\u0275elementStart(47, "span", 15);
    \u0275\u0275text(48, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " Cr\xE9er la s\xE9ance ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_4_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNouvelleSeanceModal = false);
    });
    \u0275\u0275text(51, "Annuler");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.patient);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.heure);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.duree);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.infirmier);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.staff);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSeance.machine);
  }
}
function InfirmierMajeurComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeStaff());
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 46);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeStaff());
    });
    \u0275\u0275elementStart(13, "span", 15);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 47)(16, "div", 48)(17, "div", 49)(18, "span", 50);
    \u0275\u0275text(19, "Patients assign\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 52);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 49)(23, "span", 50);
    \u0275\u0275text(24, "Vacation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 72);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 49)(28, "span", 50);
    \u0275\u0275text(29, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 73);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 53)(33, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_5_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Message envoy\xE9 \xE0 " + ctx_r2.selectedStaff.nom, "info");
      return \u0275\u0275resetView(ctx_r2.closeStaff());
    });
    \u0275\u0275elementStart(34, "span", 15);
    \u0275\u0275text(35, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Contacter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_5_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Planning de " + ctx_r2.selectedStaff.nom + " ouvert", "info");
      return \u0275\u0275resetView(ctx_r2.closeStaff());
    });
    \u0275\u0275elementStart(38, "span", 15);
    \u0275\u0275text(39, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Planning ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_5_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("T\xE2che assign\xE9e", "success");
      return \u0275\u0275resetView(ctx_r2.closeStaff());
    });
    \u0275\u0275elementStart(42, "span", 15);
    \u0275\u0275text(43, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Assigner t\xE2che ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedStaff.init);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedStaff.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedStaff.role, " \xB7 ", ctx_r2.selectedStaff.vacation, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.selectedStaff.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedStaff.statut);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.selectedStaff.patients);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedStaff.vacation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedStaff.telephone);
  }
}
function InfirmierMajeurComponent_div_6_ng_container_54_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2, "Fr\xE9q. Cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPlanning.fc, " bpm");
  }
}
function InfirmierMajeurComponent_div_6_ng_container_54_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2, "SpO\u2082");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPlanning.saturation, "%");
  }
}
function InfirmierMajeurComponent_div_6_ng_container_54_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2, "D\xE9bit dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPlanning.debit, " mL/min");
  }
}
function InfirmierMajeurComponent_div_6_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 76)(2, "span", 15);
    \u0275\u0275text(3, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Constantes Vitales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 85)(6, "div", 86)(7, "span", 87);
    \u0275\u0275text(8, "Pression Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, InfirmierMajeurComponent_div_6_ng_container_54_div_11_Template, 5, 1, "div", 89)(12, InfirmierMajeurComponent_div_6_ng_container_54_div_12_Template, 5, 1, "div", 89)(13, InfirmierMajeurComponent_div_6_ng_container_54_div_13_Template, 5, 1, "div", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("pld-vital--warn", ctx_r2.selectedPlanning.statut === "en-cours" && ctx_r2.selectedPlanning.pa !== "\u2014" && ctx_r2.selectedPlanning.pa.startsWith("17"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.pa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPlanning.fc > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPlanning.saturation > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPlanning.debit > 0);
  }
}
function InfirmierMajeurComponent_div_6_button_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_6_button_71_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.showToast("Infirmier(e) alert\xE9(e) \u2014 " + ctx_r2.selectedPlanning.infirmier, "warning");
      return \u0275\u0275resetView(ctx_r2.closePlanningDetail());
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Alerter infirmier ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePlanningDetail());
    });
    \u0275\u0275elementStart(1, "div", 74);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 46);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePlanningDetail());
    });
    \u0275\u0275elementStart(16, "span", 15);
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 47)(19, "div", 76)(20, "span", 15);
    \u0275\u0275text(21, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Informations S\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 77)(24, "div", 78)(25, "span", 79);
    \u0275\u0275text(26, "Heure d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 80);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 78)(30, "span", 79);
    \u0275\u0275text(31, "Heure fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 80);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 78)(35, "span", 79);
    \u0275\u0275text(36, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 80);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 78)(40, "span", 79);
    \u0275\u0275text(41, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 80);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 78)(45, "span", 79);
    \u0275\u0275text(46, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 81);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 78)(50, "span", 79);
    \u0275\u0275text(51, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 81);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(54, InfirmierMajeurComponent_div_6_ng_container_54_Template, 14, 6, "ng-container", 36);
    \u0275\u0275elementStart(55, "div", 76)(56, "span", 15);
    \u0275\u0275text(57, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Ordonnance Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 82)(60, "span", 15);
    \u0275\u0275text(61, "medication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 76)(65, "span", 15);
    \u0275\u0275text(66, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Observations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 83);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 53);
    \u0275\u0275template(71, InfirmierMajeurComponent_div_6_button_71_Template, 4, 0, "button", 84);
    \u0275\u0275elementStart(72, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_6_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showToast("Rapport de " + ctx_r2.selectedPlanning.patient + " g\xE9n\xE9r\xE9", "info");
      return \u0275\u0275resetView(ctx_r2.closePlanningDetail());
    });
    \u0275\u0275elementStart(73, "span", 15);
    \u0275\u0275text(74, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, " Rapport ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_6_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePlanningDetail());
    });
    \u0275\u0275text(77, "Fermer");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.selectedPlanning.statut === "en-cours" ? "var(--c-blue-soft)" : ctx_r2.selectedPlanning.statut === "terminee" ? "var(--c-teal-soft)" : "rgba(167,139,250,.1)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.selectedPlanning.statut === "en-cours" ? "var(--c-blue)" : ctx_r2.selectedPlanning.statut === "terminee" ? "var(--c-teal)" : "var(--c-purple)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.patientInit);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPlanning.pathologie, " \xB7 Groupe ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.groupeSanguin);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.planningStatutClass(ctx_r2.selectedPlanning.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.planningStatutLabel(ctx_r2.selectedPlanning.statut), " ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.heure);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.heureEnd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.duree);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.machine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.infirmier);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.poids);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPlanning.statut !== "planifiee");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.ordonnance);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedPlanning.observations);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedPlanning.statut === "en-cours");
  }
}
function InfirmierMajeurComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.monitorsEnAlerte);
  }
}
function InfirmierMajeurComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.incidentsOuverts.length);
  }
}
function InfirmierMajeurComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.criticalStocksCount);
  }
}
function InfirmierMajeurComponent_span_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function InfirmierMajeurComponent_div_107_div_7_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 101);
  }
}
function InfirmierMajeurComponent_div_107_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_107_div_7_Template_div_click_0_listener() {
      const n_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markRead(n_r13));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 99)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InfirmierMajeurComponent_div_107_div_7_span_8_Template, 1, 0, "span", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r13 = ctx.$implicit;
    \u0275\u0275classProp("notif-item--unread", !n_r13.read);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("material-icons notif-icon notif-icon--", n_r13.type, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r13.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r13.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r13.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r13.read);
  }
}
function InfirmierMajeurComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 95);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_div_107_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAllRead());
    });
    \u0275\u0275text(5, "Tout marquer lu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 96);
    \u0275\u0275template(7, InfirmierMajeurComponent_div_107_div_7_Template, 9, 9, "div", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.notifications);
  }
}
function InfirmierMajeurComponent_ng_container_108_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275text(1, "\xC0 traiter");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_108_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "Tout r\xE9solu");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_108_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 144);
    \u0275\u0275text(1, "Commande urgente");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_108_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 145);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 146)(6, "div", 147);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 145);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "button", 148);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_tr_81_Template_button_click_21_listener() {
      const s_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openSession(s_r16));
    });
    \u0275\u0275elementStart(22, "span", 15);
    \u0275\u0275text(23, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r16.heure);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r16.patientInit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r16.patientNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r16.infirmier);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r16.machine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r16.duree);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", s_r16.statusClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r16.statusLabel);
  }
}
function InfirmierMajeurComponent_ng_container_108_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 149)(2, "span", 15);
    \u0275\u0275text(3, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Aucune s\xE9ance trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierMajeurComponent_ng_container_108_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_div_93_Template_div_click_0_listener() {
      const s_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openStaff(s_r18));
    });
    \u0275\u0275elementStart(1, "div", 147);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 151)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r18.init);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r18.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r18.role, " \xB7 ", s_r18.patients, " patient(s)");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", s_r18.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r18.statut);
  }
}
function InfirmierMajeurComponent_ng_container_108_div_104_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 155);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_div_104_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const item_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.commanderStock(item_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("btn-done-rx", item_r20.ordered);
    \u0275\u0275property("disabled", item_r20.ordered);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r20.ordered ? "Command\xE9 \u2713" : "Commander", " ");
  }
}
function InfirmierMajeurComponent_ng_container_108_div_104_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_108_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InfirmierMajeurComponent_ng_container_108_div_104_button_8_Template, 2, 4, "button", 153)(9, InfirmierMajeurComponent_ng_container_108_div_104_span_9_Template, 2, 0, "span", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275classProp("ok-item", item_r20.statusClass === "ok");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", item_r20.statusClass === "ok" ? "var(--c-green)" : "var(--c-amber)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r20.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r20.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r20.quantite, " / ", item_r20.seuil * 2, " unit\xE9s");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r20.statusClass !== "ok");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r20.statusClass === "ok");
  }
}
function InfirmierMajeurComponent_ng_container_108_div_116_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 158);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_div_116_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const i_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prendreEnCharge(i_r22));
    });
    \u0275\u0275text(1, "Traiter");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_108_div_116_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1, "R\xE9solu");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_108_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, InfirmierMajeurComponent_ng_container_108_div_116_button_9_Template, 2, 0, "button", 157)(10, InfirmierMajeurComponent_ng_container_108_div_116_span_10_Template, 2, 0, "span", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r22 = ctx.$implicit;
    \u0275\u0275classProp("alert-item--crit", i_r22.priorite === "critique")("alert-item--warn", i_r22.priorite === "elevee");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r22.statut === "resolu" ? "check_circle" : "report_problem");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", i_r22.type, " \u2014 ", i_r22.machine, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(8, 10, i_r22.description, 0, 60), "\u2026");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r22.statut === "ouvert");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r22.statut === "resolu");
  }
}
function InfirmierMajeurComponent_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 102)(2, "div", 103);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("dashboard"));
    });
    \u0275\u0275elementStart(3, "div", 104)(4, "span", 105);
    \u0275\u0275text(5, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "S\xE9ances programm\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 109);
    \u0275\u0275text(12, "aujourd'hui");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 110)(14, "div", 111)(15, "span", 112);
    \u0275\u0275text(16, "water_drop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 106)(18, "span", 107);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 108);
    \u0275\u0275text(21, "En dialyse (live)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 113);
    \u0275\u0275text(23, "Live");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 103);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_Template_div_click_24_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("equipe"));
    });
    \u0275\u0275elementStart(25, "div", 114)(26, "span", 115);
    \u0275\u0275text(27, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 106)(29, "span", 107);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 108);
    \u0275\u0275text(32, "Infirmiers en service");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 103);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("incidents"));
    });
    \u0275\u0275elementStart(34, "div", 116)(35, "span", 117);
    \u0275\u0275text(36, "report_problem");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 106)(38, "span", 107);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 108);
    \u0275\u0275text(41, "Incidents ouverts");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, InfirmierMajeurComponent_ng_container_108_span_42_Template, 2, 0, "span", 118)(43, InfirmierMajeurComponent_ng_container_108_span_43_Template, 2, 0, "span", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 103);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_Template_div_click_44_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("stocks"));
    });
    \u0275\u0275elementStart(45, "div", 120)(46, "span", 121);
    \u0275\u0275text(47, "inventory_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 106)(49, "span", 107);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 108);
    \u0275\u0275text(52, "Stocks critiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, InfirmierMajeurComponent_ng_container_108_span_53_Template, 2, 0, "span", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 123)(55, "div", 124)(56, "div", 125)(57, "h2");
    \u0275\u0275text(58, "Planning des S\xE9ances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 126)(60, "div", 127)(61, "span", 15);
    \u0275\u0275text(62, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_108_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "table", 129)(65, "thead")(66, "tr")(67, "th");
    \u0275\u0275text(68, "Heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th");
    \u0275\u0275text(70, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "tbody");
    \u0275\u0275template(81, InfirmierMajeurComponent_ng_container_108_tr_81_Template, 24, 10, "tr", 130)(82, InfirmierMajeurComponent_ng_container_108_tr_82_Template, 5, 0, "tr", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 131);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 132)(86, "div", 124)(87, "div", 125)(88, "h2");
    \u0275\u0275text(89, "\xC9quipe en Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 133);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 134);
    \u0275\u0275template(93, InfirmierMajeurComponent_ng_container_108_div_93_Template, 10, 8, "div", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 131)(95, "a", 136);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_Template_a_click_95_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("equipe"));
    });
    \u0275\u0275text(96, "G\xE9rer l'\xE9quipe \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 124)(98, "div", 125)(99, "h2");
    \u0275\u0275text(100, "Stocks Critiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 137);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 138);
    \u0275\u0275template(104, InfirmierMajeurComponent_ng_container_108_div_104_Template, 10, 10, "div", 139);
    \u0275\u0275pipe(105, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 131)(107, "a", 136);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_Template_a_click_107_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("stocks"));
    });
    \u0275\u0275text(108, "G\xE9rer les stocks \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 124)(110, "div", 125)(111, "h2");
    \u0275\u0275text(112, "Incidents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span", 140);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 141);
    \u0275\u0275template(116, InfirmierMajeurComponent_ng_container_108_div_116_Template, 11, 14, "div", 142);
    \u0275\u0275pipe(117, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 131)(119, "a", 136);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_108_Template_a_click_119_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("incidents"));
    });
    \u0275\u0275text(120, "Voir tous les incidents \u2192");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.sessions.length);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.sessionsEnCours);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.staffEnService);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.incidentsOuverts.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.incidentsOuverts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incidentsOuverts.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.criticalStocksCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.criticalStocksCount > 0);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.filteredSessions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredSessions.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.filteredSessions.length, " sur ", ctx_r2.sessions.length, " s\xE9ances");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.staffEnService, " pr\xE9sents");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.staff);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r2.criticalStocksCount, " alertes");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(105, 20, ctx_r2.stocks, 0, 4));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", ctx_r2.incidentsOuverts.length > 0 ? "crit" : "ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.incidentsOuverts.length > 0 ? ctx_r2.incidentsOuverts.length + " ouverts" : "Tout r\xE9solu", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(117, 24, ctx_r2.incidents, 0, 2));
  }
}
function InfirmierMajeurComponent_ng_container_109_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_109_div_30_Template_div_click_0_listener() {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openStaff(s_r24));
    });
    \u0275\u0275elementStart(1, "div", 163)(2, "div", 164);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 165);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 166);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 167)(11, "div")(12, "span", 15);
    \u0275\u0275text(13, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "span", 15);
    \u0275\u0275text(17, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "span", 15);
    \u0275\u0275text(21, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 168);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_109_div_30_Template_div_click_23_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(24, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_109_div_30_Template_button_click_24_listener() {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("Message envoy\xE9 \xE0 " + s_r24.nom, "info"));
    });
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Contacter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_109_div_30_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("Planning ouvert", "info"));
    });
    \u0275\u0275elementStart(29, "span", 15);
    \u0275\u0275text(30, "calendar_month");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r24 = ctx.$implicit;
    \u0275\u0275classProp("staff-card--warn", s_r24.statut === "Absent")("staff-card--alert", s_r24.statut === "Alerte");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r24.init);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", s_r24.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r24.statut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r24.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r24.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", s_r24.patients, " patient(s)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", s_r24.vacation, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", s_r24.telephone, "");
  }
}
function InfirmierMajeurComponent_ng_container_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 159)(2, "div", 110)(3, "div", 114)(4, "span", 115);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "En service");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 110)(12, "div", 116)(13, "span", 117);
    \u0275\u0275text(14, "person_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 106)(16, "span", 107);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 108);
    \u0275\u0275text(19, "Absents");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 110)(21, "div", 104)(22, "span", 105);
    \u0275\u0275text(23, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 106)(25, "span", 107);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 108);
    \u0275\u0275text(28, "Total \xE9quipe");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 160);
    \u0275\u0275template(30, InfirmierMajeurComponent_ng_container_109_div_30_Template, 31, 14, "div", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.staffEnService);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.staffAbsents);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.staff.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.staff);
  }
}
function InfirmierMajeurComponent_ng_container_110_tr_27_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r26.fc, " bpm");
  }
}
function InfirmierMajeurComponent_ng_container_110_tr_27_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_110_tr_27_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 177);
    \u0275\u0275element(2, "div", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r26.progress, "%");
    \u0275\u0275classProp("warn", p_r26.statutClass === "warn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r26.progress, "%");
  }
}
function InfirmierMajeurComponent_ng_container_110_tr_27_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 179);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_110_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 146)(3, "div", 147);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 172);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 145);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, InfirmierMajeurComponent_ng_container_110_tr_27_span_19_Template, 2, 1, "span", 173)(20, InfirmierMajeurComponent_ng_container_110_tr_27_span_20_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, InfirmierMajeurComponent_ng_container_110_tr_27_div_22_Template, 5, 5, "div", 174)(23, InfirmierMajeurComponent_ng_container_110_tr_27_span_23_Template, 2, 0, "span", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r26 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r26.init);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r26.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r26.pathologie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r26.infirmier);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r26.machine);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("mono ", p_r26.paClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r26.pa);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r26.fc > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.fc === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r26.progress > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.progress === 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", p_r26.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r26.statut);
  }
}
function InfirmierMajeurComponent_ng_container_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 169)(2, "div", 127)(3, "span", 15);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 170);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_110_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchPatients, $event) || (ctx_r2.searchPatients = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 171)(7, "table", 129)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Pathologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "PA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "FC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275template(27, InfirmierMajeurComponent_ng_container_110_tr_27_Template, 27, 17, "tr", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 131);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchPatients);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.filteredPatients);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.filteredPatients.length, " patient(s)");
  }
}
function InfirmierMajeurComponent_ng_container_111_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_111_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.commanderTout());
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Commander tout (", ctx_r2.criticalStocksCount, ") ");
  }
}
function InfirmierMajeurComponent_ng_container_111_div_12_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 201);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_111_div_12_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const item_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.commanderStock(item_r30));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Commander ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_111_div_12_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202)(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Commande envoy\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_111_div_12_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203)(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Stock suffisant ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_111_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186)(1, "div", 187)(2, "span", 188);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 140);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 189);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 190);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 191)(11, "div", 192)(12, "span", 193);
    \u0275\u0275text(13, "Stock actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 194);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 192)(17, "span", 193);
    \u0275\u0275text(18, "Seuil minimum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 194);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 195)(22, "div", 196);
    \u0275\u0275element(23, "div", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, InfirmierMajeurComponent_ng_container_111_div_12_button_26_Template, 4, 0, "button", 198)(27, InfirmierMajeurComponent_ng_container_111_div_12_div_27_Template, 4, 0, "div", 199)(28, InfirmierMajeurComponent_ng_container_111_div_12_div_28_Template, 4, 0, "div", 200);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("stock-card--crit", item_r30.statusClass === "warn");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", item_r30.statusClass === "ok" ? "var(--c-green)" : "var(--c-amber)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r30.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r30.statusClass === "ok" ? "ok" : "warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r30.statusClass === "ok" ? "Suffisant" : "Critique", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r30.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r30.detail);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", item_r30.statusClass === "ok" ? "var(--c-green)" : "var(--c-amber)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r30.quantite);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r30.seuil);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.stockPct(item_r30), "%");
    \u0275\u0275classProp("ok", item_r30.statusClass === "ok");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.stockPct(item_r30), "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r30.statusClass === "warn" && !item_r30.ordered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r30.ordered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r30.statusClass === "ok" && !item_r30.ordered);
  }
}
function InfirmierMajeurComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 169)(2, "div", 180)(3, "select", 181);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_111_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterStockStatus, $event) || (ctx_r2.filterStockStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 68);
    \u0275\u0275text(5, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 182);
    \u0275\u0275text(7, "Critiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 183);
    \u0275\u0275text(9, "OK");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, InfirmierMajeurComponent_ng_container_111_button_10_Template, 4, 1, "button", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 184);
    \u0275\u0275template(12, InfirmierMajeurComponent_ng_container_111_div_12_Template, 29, 21, "div", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterStockStatus);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.criticalStocksCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredStocks);
  }
}
function InfirmierMajeurComponent_ng_container_112_div_21_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_112_div_21_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const i_r33 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prendreEnCharge(i_r33));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Prendre en charge ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_112_div_21_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_112_div_21_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const i_r33 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resoudreIncident(i_r33));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Marquer r\xE9solu ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_112_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 206)(1, "div", 207)(2, "div", 208)(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 209);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 210)(8, "div", 211)(9, "div")(10, "span", 212);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "b", 213);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 214)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "p", 215);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 216)(23, "span", 15);
    \u0275\u0275text(24, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 217);
    \u0275\u0275template(27, InfirmierMajeurComponent_ng_container_112_div_21_button_27_Template, 4, 0, "button", 84)(28, InfirmierMajeurComponent_ng_container_112_div_21_button_28_Template, 4, 0, "button", 84);
    \u0275\u0275elementStart(29, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_112_div_21_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("Rapport incident g\xE9n\xE9r\xE9", "info"));
    });
    \u0275\u0275elementStart(30, "span", 15);
    \u0275\u0275text(31, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Rapport ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_112_div_21_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("Technicien alert\xE9", "warning"));
    });
    \u0275\u0275elementStart(34, "span", 15);
    \u0275\u0275text(35, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Alerter technicien ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r33 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("incident-card--crit", i_r33.priorite === "critique" && i_r33.statut !== "resolu")("incident-card--warn", i_r33.priorite === "elevee" && i_r33.statut !== "resolu")("incident-card--done", i_r33.statut === "resolu");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "incident-icon--" + ctx_r2.incidentPrioriteClass(i_r33.priorite));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r33.statut === "resolu" ? "check_circle" : "report_problem");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r33.heure);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(i_r33.machine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r33.type);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.incidentPrioriteClass(i_r33.priorite), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 23, i_r33.priorite));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.incidentStatutClass(i_r33.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.incidentStatutLabel(i_r33.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r33.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Signal\xE9 par ", i_r33.signalePar, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r33.statut === "ouvert");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r33.statut === "en-cours");
  }
}
function InfirmierMajeurComponent_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 159)(2, "div", 110)(3, "div", 116)(4, "span", 117);
    \u0275\u0275text(5, "report_problem");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "Incidents ouverts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 110)(12, "div", 114)(13, "span", 115);
    \u0275\u0275text(14, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 106)(16, "span", 107);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 108);
    \u0275\u0275text(19, "R\xE9solus aujourd'hui");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 204);
    \u0275\u0275template(21, InfirmierMajeurComponent_ng_container_112_div_21_Template, 37, 25, "div", 205);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.incidentsOuverts.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.incidentsResolus.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.incidents);
  }
}
function InfirmierMajeurComponent_ng_container_113_div_30_div_24_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 209);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r37.fc, " bpm");
  }
}
function InfirmierMajeurComponent_ng_container_113_div_30_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 232)(1, "div", 146)(2, "div", 147);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 209);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 233)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, InfirmierMajeurComponent_ng_container_113_div_30_div_24_div_1_span_12_Template, 2, 1, "span", 234);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r37 = ctx.$implicit;
    \u0275\u0275classProp("sup-patient-row--warn", p_r37.statutClass === "warn");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r37.init);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r37.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r37.machine);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("mono ", p_r37.paClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r37.pa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r37.fc > 0);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", p_r37.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r37.statut);
  }
}
function InfirmierMajeurComponent_ng_container_113_div_30_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275template(1, InfirmierMajeurComponent_ng_container_113_div_30_div_24_div_1_Template, 15, 14, "div", 231);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sup_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", sup_r36.patients);
  }
}
function InfirmierMajeurComponent_ng_container_113_div_30_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "span", 15);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun patient en cours ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_113_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 220)(1, "div", 221)(2, "div", 222);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 223)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 224)(12, "span", 15);
    \u0275\u0275text(13, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 225);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_113_div_30_Template_button_click_16_listener() {
      const sup_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("Message envoy\xE9 \xE0 " + sup_r36.membre.nom, "info"));
    });
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Contacter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 226)(21, "span", 15);
    \u0275\u0275text(22, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, InfirmierMajeurComponent_ng_container_113_div_30_div_24_Template, 2, 1, "div", 227)(25, InfirmierMajeurComponent_ng_container_113_div_30_div_25_Template, 4, 0, "div", 228);
    \u0275\u0275elementStart(26, "div", 229)(27, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_113_div_30_Template_button_click_27_listener() {
      const sup_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("Planning de " + sup_r36.membre.nom + " ouvert", "info"));
    });
    \u0275\u0275elementStart(28, "span", 15);
    \u0275\u0275text(29, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Planning ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_113_div_30_Template_button_click_31_listener() {
      const sup_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("T\xE2che assign\xE9e \xE0 " + sup_r36.membre.nom, "success"));
    });
    \u0275\u0275elementStart(32, "span", 15);
    \u0275\u0275text(33, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Assigner ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sup_r36 = ctx.$implicit;
    \u0275\u0275classProp("supervision-card--alert", sup_r36.membre.statut === "Alerte")("supervision-card--absent", sup_r36.membre.statut === "Absent");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sup_r36.membre.init);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sup_r36.membre.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sup_r36.membre.vacation);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", sup_r36.membre.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sup_r36.membre.statut);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(sup_r36.membre.telephone);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", sup_r36.patients.length, " patient(s) assign\xE9(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sup_r36.patients.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sup_r36.patients.length === 0);
  }
}
function InfirmierMajeurComponent_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 159)(2, "div", 110)(3, "div", 114)(4, "span", 115);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "En service");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 110)(12, "div", 120)(13, "span", 121);
    \u0275\u0275text(14, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 106)(16, "span", 107);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 108);
    \u0275\u0275text(19, "Patients en alerte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 110)(21, "div", 111)(22, "span", 112);
    \u0275\u0275text(23, "water_drop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 106)(25, "span", 107);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 108);
    \u0275\u0275text(28, "S\xE9ances en cours");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 218);
    \u0275\u0275template(30, InfirmierMajeurComponent_ng_container_113_div_30_Template, 35, 15, "div", 219);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.staffEnService);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.monitorsEnAlerte);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.sessionsEnCours);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.supervisionInfirmiers);
  }
}
function InfirmierMajeurComponent_ng_container_114_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 144);
    \u0275\u0275text(1, "V\xE9rifier");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_114_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "Tout stable");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_114_div_34_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 249);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_114_div_34_button_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const m_r39 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alerterInfirmier(m_r39));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Alerter infirmier ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_114_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 238)(1, "div", 239)(2, "div", 43)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 240)(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 145);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 140);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 241)(15, "div", 242)(16, "span", 243);
    \u0275\u0275text(17, "Pression Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 242)(21, "span", 243);
    \u0275\u0275text(22, "Fr\xE9q. Cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 244);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 242)(26, "span", 243);
    \u0275\u0275text(27, "SpO\u2082");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 244);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 242)(31, "span", 243);
    \u0275\u0275text(32, "D\xE9bit dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 244);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 245)(36, "span", 246);
    \u0275\u0275text(37, "timer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 247);
    \u0275\u0275text(39, " Dur\xE9e restante : ");
    \u0275\u0275elementStart(40, "b");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, InfirmierMajeurComponent_ng_container_114_div_34_button_42_Template, 4, 0, "button", 248);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r39 = ctx.$implicit;
    \u0275\u0275classProp("monitor-global-card--warn", m_r39.statut === "warn")("monitor-global-card--crit", m_r39.statut === "crit");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", m_r39.statut !== "ok" ? "rgba(245,166,35,.12)" : "var(--c-teal-soft)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", m_r39.statut !== "ok" ? "var(--c-amber)" : "var(--c-teal)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r39.init);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r39.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", m_r39.infirmier, " \xB7 Machine ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r39.machine);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", m_r39.statut === "warn" ? "warn" : m_r39.statut === "crit" ? "crit" : "ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r39.statutLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mgc-vital--alert", m_r39.statut !== "ok");
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("mgc-val mono ", m_r39.paClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r39.pa);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", m_r39.fc, " bpm");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", m_r39.saturation, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", m_r39.debit, " mL/min");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(m_r39.dureeRestante);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r39.statut !== "ok");
  }
}
function InfirmierMajeurComponent_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 159)(2, "div", 110)(3, "div", 111)(4, "span", 112);
    \u0275\u0275text(5, "water_drop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "Patients en dialyse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 113);
    \u0275\u0275text(12, "Live");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 110)(14, "div", 120)(15, "span", 121);
    \u0275\u0275text(16, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 106)(18, "span", 107);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 108);
    \u0275\u0275text(21, "Alertes actives");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, InfirmierMajeurComponent_ng_container_114_span_22_Template, 2, 0, "span", 122)(23, InfirmierMajeurComponent_ng_container_114_span_23_Template, 2, 0, "span", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 110)(25, "div", 114)(26, "span", 115);
    \u0275\u0275text(27, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 106)(29, "span", 107);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 108);
    \u0275\u0275text(32, "Stables");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 236);
    \u0275\u0275template(34, InfirmierMajeurComponent_ng_container_114_div_34_Template, 43, 25, "div", 237);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.monitorCards.length);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.monitorsEnAlerte);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.monitorsEnAlerte > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.monitorsEnAlerte === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.monitorCards.length - ctx_r2.monitorsEnAlerte);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.monitorCards);
  }
}
function InfirmierMajeurComponent_ng_container_115_tr_62_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r42.fc, " bpm");
  }
}
function InfirmierMajeurComponent_ng_container_115_tr_62_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InfirmierMajeurComponent_ng_container_115_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 145);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 145);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 145);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 145);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, InfirmierMajeurComponent_ng_container_115_tr_62_td_14_Template, 2, 1, "td", 173)(15, InfirmierMajeurComponent_ng_container_115_tr_62_td_15_Template, 2, 0, "td", 36);
    \u0275\u0275elementStart(16, "td", 251);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 140);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 252)(23, "button", 148);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_115_tr_62_Template_button_click_23_listener() {
      const r_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.voirRapport(r_r42));
    });
    \u0275\u0275elementStart(24, "span", 15);
    \u0275\u0275text(25, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 148);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_115_tr_62_Template_button_click_26_listener() {
      const r_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exporterRapport(r_r42));
    });
    \u0275\u0275elementStart(27, "span", 15);
    \u0275\u0275text(28, "download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r42 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r42.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r42.patient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r42.infirmier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r42.machine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r42.duree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r42.pa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r42.fc > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r42.fc === 0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", r_r42.incidents !== "Aucun" ? "var(--c-amber)" : "var(--c-text-3)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r42.incidents);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", r_r42.statut === "complet" ? "ok" : "warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r42.statut);
  }
}
function InfirmierMajeurComponent_ng_container_115_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 253)(2, "span", 15);
    \u0275\u0275text(3, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun rapport trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierMajeurComponent_ng_container_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 159)(2, "div", 110)(3, "div", 104)(4, "span", 105);
    \u0275\u0275text(5, "summarize");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "S\xE9ances enregistr\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 110)(12, "div", 114)(13, "span", 115);
    \u0275\u0275text(14, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 106)(16, "span", 107);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 108);
    \u0275\u0275text(19, "Rapports complets");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 110)(21, "div", 120)(22, "span", 121);
    \u0275\u0275text(23, "pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 106)(25, "span", 107);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 108);
    \u0275\u0275text(28, "Incomplets");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 169)(30, "div", 127)(31, "span", 15);
    \u0275\u0275text(32, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 250);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_115_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchRapports, $event) || (ctx_r2.searchRapports = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 54);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_115_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showToast("Export global en cours\u2026", "info"));
    });
    \u0275\u0275elementStart(35, "span", 15);
    \u0275\u0275text(36, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Exporter tout ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 171)(39, "table", 129)(40, "thead")(41, "tr")(42, "th");
    \u0275\u0275text(43, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "PA fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "FC fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Incidents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "tbody");
    \u0275\u0275template(62, InfirmierMajeurComponent_ng_container_115_tr_62_Template, 29, 13, "tr", 130)(63, InfirmierMajeurComponent_ng_container_115_tr_63_Template, 5, 0, "tr", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 131);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.seancesTotal);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.seancesCompletes);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.seancesTotal - ctx_r2.seancesCompletes);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchRapports);
    \u0275\u0275advance(29);
    \u0275\u0275property("ngForOf", ctx_r2.filteredRapports);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredRapports.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.filteredRapports.length, " rapport(s) \u2014 2 derniers jours");
  }
}
function InfirmierMajeurComponent_ng_container_116_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 145);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 146)(6, "div", 147);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 145);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 145);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "button", 148);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_116_tr_63_Template_button_click_24_listener() {
      const s_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPlanningDetail(s_r45));
    });
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r45 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r45.heure);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r45.patientInit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r45.patient);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r45.heureEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r45.infirmier);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r45.machine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r45.duree);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r2.planningStatutClass(s_r45.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.planningStatutLabel(s_r45.statut));
  }
}
function InfirmierMajeurComponent_ng_container_116_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 259)(2, "span", 15);
    \u0275\u0275text(3, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucune s\xE9ance");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierMajeurComponent_ng_container_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 159)(2, "div", 110)(3, "div", 114)(4, "span", 115);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "Termin\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 110)(12, "div", 111)(13, "span", 112);
    \u0275\u0275text(14, "water_drop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 106)(16, "span", 107);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 108);
    \u0275\u0275text(19, "En cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 110)(21, "div", 254)(22, "span", 255);
    \u0275\u0275text(23, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 106)(25, "span", 107);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 108);
    \u0275\u0275text(28, "Planifi\xE9es");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 169)(30, "select", 181);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierMajeurComponent_ng_container_116_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterPlanningStatut, $event) || (ctx_r2.filterPlanningStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(31, "option", 68);
    \u0275\u0275text(32, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 256);
    \u0275\u0275text(34, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 257);
    \u0275\u0275text(36, "Planifi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 258);
    \u0275\u0275text(38, "Termin\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 31);
    \u0275\u0275listener("click", function InfirmierMajeurComponent_ng_container_116_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNouvelleSeanceModal = true);
    });
    \u0275\u0275elementStart(40, "span", 15);
    \u0275\u0275text(41, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Nouvelle S\xE9ance ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 171)(44, "table", 129)(45, "thead")(46, "tr")(47, "th");
    \u0275\u0275text(48, "Heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "tbody");
    \u0275\u0275template(63, InfirmierMajeurComponent_ng_container_116_tr_63_Template, 27, 11, "tr", 130)(64, InfirmierMajeurComponent_ng_container_116_tr_64_Template, 5, 0, "tr", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 131);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.planningTerminees);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.planningEnCours);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.planningPlanifiees);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterPlanningStatut);
    \u0275\u0275advance(33);
    \u0275\u0275property("ngForOf", ctx_r2.filteredPlanning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredPlanning.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.filteredPlanning.length, " s\xE9ance(s) \u2014 12 Avril 2026");
  }
}
var InfirmierMajeurComponent = class _InfirmierMajeurComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  // ── Sidebar mobile ──
  sidebarOpen = false;
  // ── Navigation ──
  activeSection = "dashboard";
  get sectionTitle() {
    const map = {
      dashboard: "Supervision G\xE9n\xE9rale",
      planning: "Planning Global des S\xE9ances",
      equipe: "\xC9quipe Aide-Soignante",
      supervision: "Supervision des Infirmiers",
      patients: "Tous les Patients",
      monitoring: "Monitoring Global en Temps R\xE9el",
      rapports: "Rapports & Statistiques",
      stocks: "Stocks & Consommables",
      incidents: "Incidents Signal\xE9s"
    };
    return map[this.activeSection] ?? "Tableau de Bord";
  }
  setSection(s) {
    this.activeSection = s;
    this.showNotifPanel = false;
  }
  // ── Sessions ──
  searchQuery = "";
  filterStatut = "";
  sessions = [
    { heure: "08:00", patientInit: "AK", patientNom: "Alaoui Khalid", infirmier: "Inf. N. Tazi", machine: "M-03", duree: "4h", statusClass: "ok", statusLabel: "Termin\xE9" },
    { heure: "09:00", patientInit: "ME", patientNom: "Moussaoui El Hassan", infirmier: "Inf. A. Haddad", machine: "M-02", duree: "4h", statusClass: "warn", statusLabel: "Alerte PA" },
    { heure: "09:30", patientInit: "OB", patientNom: "Ouali Badreddine", infirmier: "Inf. N. Tazi", machine: "M-05", duree: "4h", statusClass: "info", statusLabel: "En cours" },
    { heure: "10:30", patientInit: "SB", patientNom: "Saidi Bouchra", infirmier: "Inf. L. Mansouri", machine: "M-07", duree: "4h", statusClass: "info", statusLabel: "En cours" },
    { heure: "14:00", patientInit: "FZ", patientNom: "Filali Zineb", infirmier: "Inf. R. Berrada", machine: "M-09", duree: "3.5h", statusClass: "purple", statusLabel: "Planifi\xE9e" },
    { heure: "16:30", patientInit: "OB", patientNom: "Ouali Badreddine", infirmier: "Inf. N. Tazi", machine: "M-05", duree: "4h", statusClass: "purple", statusLabel: "Planifi\xE9e" }
  ];
  get filteredSessions() {
    const q = this.searchQuery.trim().toLowerCase();
    return this.sessions.filter((s) => (!this.filterStatut || s.statusLabel === this.filterStatut) && (!q || s.patientNom.toLowerCase().includes(q) || s.infirmier.toLowerCase().includes(q) || s.machine.toLowerCase().includes(q)));
  }
  get sessionsEnCours() {
    return this.sessions.filter((s) => s.statusClass === "info").length;
  }
  get sessionsTerminees() {
    return this.sessions.filter((s) => s.statusClass === "ok").length;
  }
  get sessionsPlanifiees() {
    return this.sessions.filter((s) => s.statusClass === "purple").length;
  }
  selectedSession = null;
  showSessionModal = false;
  openSession(s) {
    this.selectedSession = s;
    this.showSessionModal = true;
    this.showNotifPanel = false;
  }
  closeSession() {
    this.showSessionModal = false;
    this.selectedSession = null;
  }
  // ── Nouvelle Séance modal ──
  showNouvelleSeanceModal = false;
  newSeance = { patient: "", infirmier: "", machine: "", heure: "", duree: "4h" };
  ajouterSeance() {
    if (!this.newSeance.patient.trim() || !this.newSeance.heure) {
      this.showToast("Patient et heure sont obligatoires", "warning");
      return;
    }
    this.sessions.push({
      heure: this.newSeance.heure,
      patientInit: this.newSeance.patient.slice(0, 2).toUpperCase(),
      patientNom: this.newSeance.patient,
      infirmier: this.newSeance.infirmier || "\xC0 assigner",
      machine: this.newSeance.machine || "\xC0 assigner",
      duree: this.newSeance.duree,
      statusClass: "purple",
      statusLabel: "Planifi\xE9e"
    });
    this.sessions.sort((a, b) => a.heure.localeCompare(b.heure));
    this.newSeance = { patient: "", infirmier: "", machine: "", heure: "", duree: "4h" };
    this.showNouvelleSeanceModal = false;
    this.showToast("S\xE9ance ajout\xE9e au planning", "success");
  }
  // ── Staff ──
  staff = [
    { init: "NT", nom: "Inf. Nadia Tazi", role: "Infirmier(e)", patients: 2, statut: "En service", statutClass: "ok", vacation: "Matin 07:00\u201315:00", telephone: "06 12 34 56 78" },
    { init: "AH", nom: "Inf. Amine Haddad", role: "Infirmier(e)", patients: 1, statut: "Alerte", statutClass: "warn", vacation: "Matin 07:00\u201315:00", telephone: "06 23 45 67 89" },
    { init: "LM", nom: "Inf. Leila Mansouri", role: "Infirmier(e)", patients: 1, statut: "En service", statutClass: "ok", vacation: "Matin 07:00\u201315:00", telephone: "06 34 56 78 90" },
    { init: "RB", nom: "Inf. Rachid Berrada", role: "Infirmier(e)", patients: 1, statut: "Pr\xE9paration", statutClass: "purple", vacation: "Soir 15:00\u201323:00", telephone: "06 45 67 89 01" },
    { init: "YK", nom: "Aid. Youssef Kettani", role: "Aide-Soignant", patients: 0, statut: "En service", statutClass: "ok", vacation: "Matin 07:00\u201315:00", telephone: "06 56 78 90 12" },
    { init: "SO", nom: "Aid. Sara Oulmane", role: "Aide-Soignant", patients: 0, statut: "Absent", statutClass: "danger", vacation: "Cong\xE9", telephone: "06 67 89 01 23" }
  ];
  selectedStaff = null;
  showStaffModal = false;
  openStaff(s) {
    this.selectedStaff = s;
    this.showStaffModal = true;
  }
  closeStaff() {
    this.showStaffModal = false;
    this.selectedStaff = null;
  }
  staffAction(nom) {
    this.showToast(`Fiche de ${nom} ouverte`, "info");
  }
  get staffEnService() {
    return this.staff.filter((s) => s.statut === "En service").length;
  }
  get staffAbsents() {
    return this.staff.filter((s) => s.statut === "Absent").length;
  }
  // ── Patients ──
  allPatients = [
    { init: "AK", nom: "Alaoui Khalid", pathologie: "DRC", infirmier: "Inf. N. Tazi", machine: "M-03", statut: "Termin\xE9", statutClass: "ok", pa: "138/88", paClass: "ok", fc: 72, progress: 100 },
    { init: "ME", nom: "Moussaoui El Hassan", pathologie: "DRC", infirmier: "Inf. A. Haddad", machine: "M-02", statut: "Alerte PA", statutClass: "warn", pa: "172/98", paClass: "warn-val", fc: 88, progress: 72 },
    { init: "OB", nom: "Ouali Badreddine", pathologie: "IRC", infirmier: "Inf. N. Tazi", machine: "M-05", statut: "En cours", statutClass: "info", pa: "122/76", paClass: "ok", fc: 68, progress: 58 },
    { init: "SB", nom: "Saidi Bouchra", pathologie: "IRC", infirmier: "Inf. L. Mansouri", machine: "M-07", statut: "En cours", statutClass: "info", pa: "128/82", paClass: "ok", fc: 74, progress: 44 },
    { init: "FZ", nom: "Filali Zineb", pathologie: "IRC", infirmier: "Inf. R. Berrada", machine: "M-09", statut: "Planifi\xE9e", statutClass: "purple", pa: "\u2014", paClass: "", fc: 0, progress: 0 }
  ];
  searchPatients = "";
  get filteredPatients() {
    const q = this.searchPatients.trim().toLowerCase();
    return this.allPatients.filter((p) => !q || p.nom.toLowerCase().includes(q) || p.infirmier.toLowerCase().includes(q) || p.machine.toLowerCase().includes(q));
  }
  // ── Stocks ──
  stocks = [
    { icon: "inventory_2", nom: "Bicarbonate 8.4% \u2014 500mL", detail: "Lot BIC-2024-112", quantite: 12, seuil: 20, statusClass: "warn", ordered: false },
    { icon: "inventory_2", nom: "Dialyseurs FX80", detail: "Lot DIA-2024-088", quantite: 8, seuil: 15, statusClass: "warn", ordered: false },
    { icon: "inventory_2", nom: "Lignes art\xE9rielles", detail: "Lot LIG-2024-200", quantite: 45, seuil: 30, statusClass: "ok", ordered: false },
    { icon: "inventory_2", nom: "Poches NaCl 0.9% \u2014 500mL", detail: "Lot NAC-2024-055", quantite: 30, seuil: 40, statusClass: "warn", ordered: false },
    { icon: "inventory_2", nom: "\xC9pin\xE9phrine 1mg/mL", detail: "Urgence \u2014 Lot EPI-2024", quantite: 5, seuil: 10, statusClass: "warn", ordered: false },
    { icon: "inventory_2", nom: "Gants nitrile \u2014 L", detail: "Bo\xEEtes de 100", quantite: 22, seuil: 15, statusClass: "ok", ordered: false }
  ];
  filterStockStatus = "";
  get filteredStocks() {
    return this.stocks.filter((s) => !this.filterStockStatus || s.statusClass === this.filterStockStatus);
  }
  get criticalStocksCount() {
    return this.stocks.filter((s) => s.statusClass === "warn").length;
  }
  commanderStock(item) {
    if (item.ordered) {
      this.showToast(`Commande de "${item.nom}" d\xE9j\xE0 envoy\xE9e`, "info");
      return;
    }
    item.ordered = true;
    this.showToast(`Commande de "${item.nom}" envoy\xE9e au fournisseur`, "success");
  }
  commanderTout() {
    const nonCommandes = this.stocks.filter((s) => s.statusClass === "warn" && !s.ordered);
    nonCommandes.forEach((s) => s.ordered = true);
    this.showToast(`${nonCommandes.length} commande(s) urgentes envoy\xE9es`, "success");
  }
  stockPct(item) {
    return Math.min(100, Math.round(item.quantite / (item.seuil * 2) * 100));
  }
  // ── Incidents ──
  incidents = [
    { id: 1, heure: "11:05", machine: "M-02", type: "Alarme pression", description: "Alarme pression veineuse \u2014 seuil d\xE9pass\xE9 pendant s\xE9ance Moussaoui H. Technicien contact\xE9.", signalePar: "Inf. A. Haddad", priorite: "critique", statut: "en-cours" },
    { id: 2, heure: "09:40", machine: "M-11", type: "Panne m\xE9canique", description: "Machine M-11 hors service \u2014 pompe d\xE9fectueuse. Maintenance pr\xE9ventive programm\xE9e demain matin.", signalePar: "Inf. N. Tazi", priorite: "elevee", statut: "ouvert" },
    { id: 3, heure: "08:15", machine: "M-03", type: "Fuite circuit", description: "Petite fuite d\xE9tect\xE9e sur le circuit de retour. S\xE9ance Alaoui K. termin\xE9e normalement. Machine OK.", signalePar: "Inf. N. Tazi", priorite: "normale", statut: "resolu" }
  ];
  get incidentsOuverts() {
    return this.incidents.filter((i) => i.statut !== "resolu");
  }
  get incidentsResolus() {
    return this.incidents.filter((i) => i.statut === "resolu");
  }
  resoudreIncident(i) {
    i.statut = "resolu";
    this.showToast(`Incident ${i.machine} \u2014 marqu\xE9 comme r\xE9solu`, "success");
  }
  prendreEnCharge(i) {
    i.statut = "en-cours";
    this.showToast(`Incident ${i.machine} \u2014 pris en charge`, "info");
  }
  incidentPrioriteClass(p) {
    return p === "critique" ? "crit" : p === "elevee" ? "warn" : "info";
  }
  incidentStatutClass(s) {
    return s === "resolu" ? "ok" : s === "en-cours" ? "warn" : "crit";
  }
  incidentStatutLabel(s) {
    return { ouvert: "Ouvert", "en-cours": "En charge", resolu: "R\xE9solu" }[s] ?? s;
  }
  // ── Monitoring Global ──
  monitorCards = [
    { init: "ME", nom: "Moussaoui El Hassan", machine: "M-02", infirmier: "Inf. A. Haddad", pa: "172/98", paClass: "warn-val", fc: 88, saturation: 95, poids: "68 kg", debit: 250, dureeRestante: "1h 10min", statut: "warn", statutLabel: "Alerte PA" },
    { init: "OB", nom: "Ouali Badreddine", machine: "M-05", infirmier: "Inf. N. Tazi", pa: "122/76", paClass: "ok", fc: 68, saturation: 98, poids: "74 kg", debit: 300, dureeRestante: "1h 42min", statut: "ok", statutLabel: "En cours" },
    { init: "SB", nom: "Saidi Bouchra", machine: "M-07", infirmier: "Inf. L. Mansouri", pa: "128/82", paClass: "ok", fc: 74, saturation: 97, poids: "57 kg", debit: 280, dureeRestante: "2h 16min", statut: "ok", statutLabel: "En cours" }
  ];
  get monitorsEnAlerte() {
    return this.monitorCards.filter((m) => m.statut !== "ok").length;
  }
  alerterInfirmier(m) {
    this.showToast(`${m.infirmier} alert\xE9(e) pour ${m.nom} \u2014 PA ${m.pa}`, "warning");
  }
  // ── Rapports ──
  rapports = [
    { id: 1, date: "12/04/2026", infirmier: "Inf. N. Tazi", patient: "Alaoui Khalid", machine: "M-03", duree: "4h", pa: "138/88", fc: 72, incidents: "Aucun", statut: "complet" },
    { id: 2, date: "12/04/2026", infirmier: "Inf. A. Haddad", patient: "Moussaoui El Hassan", machine: "M-02", duree: "4h", pa: "172/98", fc: 88, incidents: "Alarme pression veineuse", statut: "complet" },
    { id: 3, date: "12/04/2026", infirmier: "Inf. L. Mansouri", patient: "Saidi Bouchra", machine: "M-07", duree: "4h", pa: "128/82", fc: 74, incidents: "Aucun", statut: "complet" },
    { id: 4, date: "11/04/2026", infirmier: "Inf. N. Tazi", patient: "Ouali Badreddine", machine: "M-05", duree: "4h", pa: "120/74", fc: 70, incidents: "Aucun", statut: "complet" },
    { id: 5, date: "11/04/2026", infirmier: "Inf. R. Berrada", patient: "Filali Zineb", machine: "M-09", duree: "3.5h", pa: "126/80", fc: 72, incidents: "Aucun", statut: "incomplet" }
  ];
  searchRapports = "";
  filterRapportDate = "";
  get filteredRapports() {
    const q = this.searchRapports.trim().toLowerCase();
    return this.rapports.filter((r) => (!q || r.patient.toLowerCase().includes(q) || r.infirmier.toLowerCase().includes(q)) && (!this.filterRapportDate || r.date === this.filterRapportDate));
  }
  get seancesTotal() {
    return this.rapports.length;
  }
  get seancesCompletes() {
    return this.rapports.filter((r) => r.statut === "complet").length;
  }
  voirRapport(r) {
    this.showToast(`Rapport de ${r.patient} \u2014 ${r.date} ouvert`, "info");
  }
  exporterRapport(r) {
    this.showToast(`Rapport export\xE9 en PDF \u2014 ${r.patient}`, "success");
  }
  // ── Planning Global (interne) ──
  planningSeances = [
    {
      heure: "08:00",
      heureEnd: "12:00",
      patient: "Alaoui Khalid",
      patientInit: "AK",
      machine: "M-03",
      duree: "4h",
      infirmier: "Inf. N. Tazi",
      statut: "terminee",
      pathologie: "DRC",
      groupeSanguin: "B+",
      pa: "138/88",
      fc: 72,
      poids: "72 kg",
      saturation: 97,
      debit: 300,
      observations: "S\xE9ance bien tol\xE9r\xE9e. Pas de complication. PA stable tout au long de la s\xE9ance.",
      ordonnance: "Amlodipine 5 mg, Furos\xE9mide 40 mg, EPO 4000 UI"
    },
    {
      heure: "09:00",
      heureEnd: "13:00",
      patient: "Moussaoui El Hassan",
      patientInit: "ME",
      machine: "M-02",
      duree: "4h",
      infirmier: "Inf. A. Haddad",
      statut: "en-cours",
      pathologie: "DRC",
      groupeSanguin: "A+",
      pa: "172/98",
      fc: 88,
      poids: "68 kg",
      saturation: 95,
      debit: 250,
      observations: "Alarme pression veineuse d\xE9clench\xE9e \xE0 11h05. D\xE9bit r\xE9duit. M\xE9decin inform\xE9.",
      ordonnance: "Amlodipine 10 mg, Bisoprolol 5 mg"
    },
    {
      heure: "09:30",
      heureEnd: "13:30",
      patient: "Ouali Badreddine",
      patientInit: "OB",
      machine: "M-05",
      duree: "4h",
      infirmier: "Inf. N. Tazi",
      statut: "en-cours",
      pathologie: "IRC",
      groupeSanguin: "O+",
      pa: "122/76",
      fc: 68,
      poids: "74 kg",
      saturation: 98,
      debit: 300,
      observations: "S\xE9ance en cours, constantes stables.",
      ordonnance: "Bicarbonate de sodium 1 g, Fer IV 100 mg"
    },
    {
      heure: "10:30",
      heureEnd: "14:30",
      patient: "Saidi Bouchra",
      patientInit: "SB",
      machine: "M-07",
      duree: "4h",
      infirmier: "Inf. L. Mansouri",
      statut: "en-cours",
      pathologie: "IRC",
      groupeSanguin: "A+",
      pa: "128/82",
      fc: 74,
      poids: "57 kg",
      saturation: 97,
      debit: 280,
      observations: "S\xE9ance en cours, aucun incident signal\xE9.",
      ordonnance: "Bicarbonate de sodium 1 g, Fer IV 100 mg"
    },
    {
      heure: "14:00",
      heureEnd: "17:30",
      patient: "Filali Zineb",
      patientInit: "FZ",
      machine: "M-09",
      duree: "3.5h",
      infirmier: "Inf. R. Berrada",
      statut: "planifiee",
      pathologie: "IRC",
      groupeSanguin: "AB+",
      pa: "\u2014",
      fc: 0,
      poids: "62 kg",
      saturation: 0,
      debit: 0,
      observations: "S\xE9ance planifi\xE9e \u2014 patient attendu \xE0 13h45.",
      ordonnance: "L\xE9vothyroxine 50 \xB5g, Calcium carbonate 500 mg"
    },
    {
      heure: "16:30",
      heureEnd: "20:30",
      patient: "Ouali Badreddine",
      patientInit: "OB",
      machine: "M-05",
      duree: "4h",
      infirmier: "Inf. N. Tazi",
      statut: "planifiee",
      pathologie: "IRC",
      groupeSanguin: "O+",
      pa: "\u2014",
      fc: 0,
      poids: "74 kg",
      saturation: 0,
      debit: 0,
      observations: "Deuxi\xE8me s\xE9ance de la journ\xE9e \u2014 surveillance renforc\xE9e recommand\xE9e.",
      ordonnance: "Bicarbonate de sodium 1 g, Fer IV 100 mg"
    }
  ];
  filterPlanningStatut = "";
  selectedPlanning = null;
  showPlanningDetailModal = false;
  get filteredPlanning() {
    return this.planningSeances.filter((s) => !this.filterPlanningStatut || s.statut === this.filterPlanningStatut);
  }
  openPlanningDetail(s) {
    this.selectedPlanning = s;
    this.showPlanningDetailModal = true;
  }
  closePlanningDetail() {
    this.showPlanningDetailModal = false;
    this.selectedPlanning = null;
  }
  planningStatutClass(s) {
    return s === "terminee" ? "ok" : s === "en-cours" ? "info" : "purple";
  }
  planningStatutLabel(s) {
    return { terminee: "Termin\xE9e", "en-cours": "En cours", planifiee: "Planifi\xE9e" }[s] ?? s;
  }
  get planningTerminees() {
    return this.planningSeances.filter((s) => s.statut === "terminee").length;
  }
  get planningEnCours() {
    return this.planningSeances.filter((s) => s.statut === "en-cours").length;
  }
  get planningPlanifiees() {
    return this.planningSeances.filter((s) => s.statut === "planifiee").length;
  }
  // ── Supervision des infirmiers ──
  get supervisionInfirmiers() {
    return this.staff.filter((s) => s.role === "Infirmier(e)").map((s) => ({
      membre: s,
      patients: this.allPatients.filter((p) => p.infirmier === s.nom)
    }));
  }
  // ── Notifications ──
  showNotifPanel = false;
  notifications = [
    { icon: "report_problem", text: "Alarme pression veineuse \u2014 M-02", time: "il y a 15min", type: "warn", read: false },
    { icon: "inventory_2", text: "Bicarbonate \u2014 stock critique (12 flacons)", time: "il y a 1h", type: "warn", read: false },
    { icon: "event", text: "6 s\xE9ances programm\xE9es aujourd'hui", time: "il y a 3h", type: "info", read: true }
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
  static \u0275fac = function InfirmierMajeurComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfirmierMajeurComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfirmierMajeurComponent, selectors: [["app-infirmier-majeur"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 117, vars: 44, consts: [[1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "notif-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "dashboard"], [1, "sidebar-backdrop", 3, "click"], [1, "sidebar"], [1, "sidebar__logo"], ["width", "28", "height", "28", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "sidebar__nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "material-icons"], [1, "nav-badge"], ["class", "nav-badge warn", 4, "ngIf"], ["class", "nav-badge crit", 4, "ngIf"], [1, "sidebar__user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "logout-btn", 3, "click"], [1, "main"], [1, "topbar"], [1, "topbar__left"], [1, "topbar__date"], [1, "topbar__right"], [1, "hamburger-btn", 3, "click"], [1, "btn-sm-primary", 3, "click"], [1, "notif-wrapper"], [1, "icon-btn", "notif-btn", 3, "click"], ["class", "notif-dot", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "toast-close"], [1, "notif-backdrop", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", 3, "click"], [1, "modal-header"], [1, "avatar-lg"], [2, "flex", "1"], [2, "font-size", "12px", "color", "var(--c-text-3)"], [1, "modal-close-btn", 3, "click"], [1, "modal-body"], [1, "modal-stat-row"], [1, "modal-stat"], [1, "modal-stat-lbl"], [1, "modal-stat-val"], [1, "modal-stat-val", "mono"], [1, "modal-actions"], [1, "btn-outline-sm", 3, "click"], [1, "modal-panel", "modal-panel--form", 3, "click"], [1, "modal-header", "modal-header--simple"], [1, "form-grid"], [1, "form-field", "form-field--full"], [1, "req"], ["type", "text", "placeholder", "Nom du patient", 3, "ngModelChange", "ngModel"], [1, "form-field"], ["type", "time", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "3h"], ["value", "3.5h"], ["value", "4h"], ["value", "4.5h"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ex: M-09", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "modal-stat-val", 2, "font-size", "12px"], [1, "modal-stat-val", "mono", 2, "font-size", "12px"], [1, "modal-panel", "modal-panel--planning-detail", 3, "click"], [1, "modal-patient-info"], [1, "pld-section-label"], [1, "pld-info-grid"], [1, "pld-info-item"], [1, "pld-lbl"], [1, "pld-val", "mono"], [1, "pld-val"], [1, "pld-text-block", "pld-text-block--ord"], [1, "pld-text-block"], ["class", "btn-sm-primary", 3, "click", 4, "ngIf"], [1, "pld-vitals-grid"], [1, "pld-vital"], [1, "pld-v-lbl"], [1, "pld-v-val", "mono"], ["class", "pld-vital", 4, "ngIf"], [1, "nav-badge", "warn"], [1, "nav-badge", "crit"], [1, "notif-dot"], [1, "notif-panel"], [1, "notif-panel__head"], [1, "notif-read-all", 3, "click"], [1, "notif-list"], ["class", "notif-item", 3, "notif-item--unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-content"], ["class", "notif-unread-dot", 4, "ngIf"], [1, "notif-unread-dot"], [1, "kpi-row"], [1, "kpi-card", 2, "cursor", "pointer", 3, "click"], [1, "kpi-icon", 2, "background", "var(--c-teal-soft)"], [1, "material-icons", 2, "color", "var(--c-teal)"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-lbl"], [1, "kpi-trend", "up"], [1, "kpi-card"], [1, "kpi-icon", 2, "background", "var(--c-blue-soft)"], [1, "material-icons", 2, "color", "var(--c-blue)"], [1, "kpi-trend", 2, "color", "var(--c-blue)"], [1, "kpi-icon", 2, "background", "var(--c-green-soft)"], [1, "material-icons", 2, "color", "var(--c-green)"], [1, "kpi-icon", 2, "background", "var(--c-red-soft)"], [1, "material-icons", 2, "color", "var(--c-red)"], ["class", "kpi-trend crit", 4, "ngIf"], ["class", "kpi-trend up", 4, "ngIf"], [1, "kpi-icon", 2, "background", "var(--c-amber-soft)"], [1, "material-icons", 2, "color", "var(--c-amber)"], ["class", "kpi-trend warn", 4, "ngIf"], [1, "content-grid"], [1, "panel"], [1, "panel__head"], [1, "panel__actions"], [1, "search-mini"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "panel__footer"], [1, "right-col"], [1, "badge", "ok"], [1, "staff-list"], ["class", "staff-row", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], [1, "badge", "warn"], [1, "stock-list"], ["class", "stock-item", 3, "ok-item", 4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "alerts-list"], ["class", "alert-item", 3, "alert-item--crit", "alert-item--warn", 4, "ngFor", "ngForOf"], [1, "kpi-trend", "crit"], [1, "kpi-trend", "warn"], [1, "mono"], [1, "patient-cell"], [1, "avatar-sm"], [1, "row-btn", 3, "click"], ["colspan", "7", 1, "empty-row"], [1, "staff-row", 2, "cursor", "pointer", 3, "click"], [1, "staff-info"], [1, "stock-item"], ["class", "btn-outline-sm", 3, "disabled", "btn-done-rx", "click", 4, "ngIf"], ["class", "badge ok", 4, "ngIf"], [1, "btn-outline-sm", 3, "click", "disabled"], [1, "alert-item"], ["class", "btn-teal-xs", 3, "click", 4, "ngIf"], [1, "btn-teal-xs", 3, "click"], [1, "kpi-row", 2, "margin-bottom", "16px"], [1, "staff-cards-grid"], ["class", "staff-card", "style", "cursor:pointer", 3, "staff-card--warn", "staff-card--alert", "click", 4, "ngFor", "ngForOf"], [1, "staff-card", 2, "cursor", "pointer", 3, "click"], [1, "staff-card__head"], [1, "staff-avatar"], [1, "staff-card__name"], [1, "staff-card__role"], [1, "staff-card__meta"], [1, "staff-card__actions", 3, "click"], [1, "section-bar"], ["type", "text", "placeholder", "Nom, infirmier, machine\u2026", 3, "ngModelChange", "ngModel"], [1, "panel", "panel--full"], [1, "patho-tag"], ["class", "mono", 4, "ngIf"], ["class", "progress-mini", 4, "ngIf"], ["style", "color:var(--c-text-3);font-size:12px", 4, "ngIf"], [1, "progress-mini"], [1, "progress-mini__bar"], [1, "progress-mini__fill"], [2, "color", "var(--c-text-3)", "font-size", "12px"], [1, "section-bar__filters"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "warn"], ["value", "ok"], [1, "stocks-grid"], ["class", "stock-card", 3, "stock-card--crit", 4, "ngFor", "ngForOf"], [1, "stock-card"], [1, "stock-card__head"], [1, "material-icons", "stock-icon"], [1, "stock-card__nom"], [1, "stock-card__detail"], [1, "stock-card__quantities"], [1, "stock-qty"], [1, "stock-qty__lbl"], [1, "stock-qty__val"], [1, "stock-card__bar"], [1, "stock-bar"], [1, "stock-bar__fill"], ["class", "btn-sm-primary stock-btn", 3, "click", 4, "ngIf"], ["class", "stock-ordered", 4, "ngIf"], ["class", "stock-ok-msg", 4, "ngIf"], [1, "btn-sm-primary", "stock-btn", 3, "click"], [1, "stock-ordered"], [1, "stock-ok-msg"], [1, "incidents-list"], ["class", "incident-card", 3, "incident-card--crit", "incident-card--warn", "incident-card--done", 4, "ngFor", "ngForOf"], [1, "incident-card"], [1, "incident-card__side"], [1, "incident-icon", 3, "ngClass"], [1, "mono", 2, "font-size", "11px", "color", "var(--c-text-3)"], [1, "incident-card__body"], [1, "incident-card__head"], [1, "incident-machine"], [1, "incident-type"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "incident-desc"], [1, "incident-meta"], [1, "incident-card__actions"], [1, "supervision-grid"], ["class", "supervision-card", 3, "supervision-card--alert", "supervision-card--absent", 4, "ngFor", "ngForOf"], [1, "supervision-card"], [1, "sup-header"], [1, "sup-avatar"], [1, "sup-identity"], [1, "sup-contact"], [1, "btn-teal-xs", 2, "margin-left", "auto", 3, "click"], [1, "sup-patients-label"], ["class", "sup-patients-list", 4, "ngIf"], ["class", "sup-empty", 4, "ngIf"], [1, "sup-actions"], [1, "sup-patients-list"], ["class", "sup-patient-row", 3, "sup-patient-row--warn", 4, "ngFor", "ngForOf"], [1, "sup-patient-row"], [1, "sup-patient-vitals"], ["class", "mono", "style", "font-size:11px;color:var(--c-text-3)", 4, "ngIf"], [1, "sup-empty"], [1, "monitor-global-grid"], ["class", "monitor-global-card", 3, "monitor-global-card--warn", "monitor-global-card--crit", 4, "ngFor", "ngForOf"], [1, "monitor-global-card"], [1, "mgc-header"], [1, "mgc-identity"], [1, "mgc-vitals"], [1, "mgc-vital"], [1, "mgc-lbl"], [1, "mgc-val", "mono"], [1, "mgc-footer"], [1, "material-icons", 2, "font-size", "14px", "color", "var(--c-text-3)"], [2, "font-size", "12px", "color", "var(--c-text-2)"], ["class", "btn-outline-sm", "style", "margin-left:auto", 3, "click", 4, "ngIf"], [1, "btn-outline-sm", 2, "margin-left", "auto", 3, "click"], ["type", "text", "placeholder", "Patient, infirmier\u2026", 3, "ngModelChange", "ngModel"], [2, "font-size", "12px"], [2, "display", "flex", "gap", "4px"], ["colspan", "10", 1, "empty-row"], [1, "kpi-icon", 2, "background", "rgba(167,139,250,.1)"], [1, "material-icons", 2, "color", "var(--c-purple)"], ["value", "en-cours"], ["value", "planifiee"], ["value", "terminee"], ["colspan", "8", 1, "empty-row"]], template: function InfirmierMajeurComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, InfirmierMajeurComponent_div_1_Template, 8, 5, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, InfirmierMajeurComponent_div_2_Template, 1, 0, "div", 2)(3, InfirmierMajeurComponent_div_3_Template, 45, 12, "div", 3)(4, InfirmierMajeurComponent_div_4_Template, 52, 6, "div", 3)(5, InfirmierMajeurComponent_div_5_Template, 45, 11, "div", 3)(6, InfirmierMajeurComponent_div_6_Template, 78, 22, "div", 3);
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_div_click_8_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "aside", 6)(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9)(13, "path", 10)(14, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "DialySys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "nav", 12)(18, "div", 13);
      \u0275\u0275text(19, "Gestion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_20_listener() {
        return ctx.setSection("dashboard");
      });
      \u0275\u0275elementStart(21, "span", 15);
      \u0275\u0275text(22, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_25_listener() {
        return ctx.setSection("planning");
      });
      \u0275\u0275elementStart(26, "span", 15);
      \u0275\u0275text(27, "calendar_month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Planning Global");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 16);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_32_listener() {
        return ctx.setSection("equipe");
      });
      \u0275\u0275elementStart(33, "span", 15);
      \u0275\u0275text(34, "supervisor_account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "\xC9quipe Aide-Soignante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 16);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_39_listener() {
        return ctx.setSection("patients");
      });
      \u0275\u0275elementStart(40, "span", 15);
      \u0275\u0275text(41, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Tous les Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 16);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_46_listener() {
        return ctx.setSection("supervision");
      });
      \u0275\u0275elementStart(47, "span", 15);
      \u0275\u0275text(48, "manage_accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, "Supervision Infirmiers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 13);
      \u0275\u0275text(52, "Supervision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_53_listener() {
        return ctx.setSection("monitoring");
      });
      \u0275\u0275elementStart(54, "span", 15);
      \u0275\u0275text(55, "monitor_heart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "Monitoring Global");
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, InfirmierMajeurComponent_span_58_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_59_listener() {
        return ctx.setSection("rapports");
      });
      \u0275\u0275elementStart(60, "span", 15);
      \u0275\u0275text(61, "assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "Rapports & Stats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_64_listener() {
        return ctx.setSection("incidents");
      });
      \u0275\u0275elementStart(65, "span", 15);
      \u0275\u0275text(66, "report_problem");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Incidents");
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, InfirmierMajeurComponent_span_69_Template, 2, 1, "span", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "a", 14);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_a_click_70_listener() {
        return ctx.setSection("stocks");
      });
      \u0275\u0275elementStart(71, "span", 15);
      \u0275\u0275text(72, "inventory_2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74, "Stocks & Consommables");
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, InfirmierMajeurComponent_span_75_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 19)(77, "div", 20);
      \u0275\u0275text(78, "IM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 21)(80, "span", 22);
      \u0275\u0275text(81, "Inf. Maj. F. Chraibi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 23);
      \u0275\u0275text(83, "Infirmier\xB7\xE8re Major");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "button", 24);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_84_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(85, "span", 15);
      \u0275\u0275text(86, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "div", 25)(88, "header", 26)(89, "div", 27)(90, "h1");
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 28);
      \u0275\u0275text(93, "Service H\xE9modialyse \u2014 3 Avril 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 29)(95, "button", 30);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_95_listener() {
        return ctx.sidebarOpen = !ctx.sidebarOpen;
      });
      \u0275\u0275elementStart(96, "span", 15);
      \u0275\u0275text(97, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "button", 31);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_98_listener() {
        return ctx.showNouvelleSeanceModal = true;
      });
      \u0275\u0275elementStart(99, "span", 15);
      \u0275\u0275text(100, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, " Nouvelle S\xE9ance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 32)(103, "button", 33);
      \u0275\u0275listener("click", function InfirmierMajeurComponent_Template_button_click_103_listener() {
        return ctx.toggleNotifPanel();
      });
      \u0275\u0275elementStart(104, "span", 15);
      \u0275\u0275text(105, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275template(106, InfirmierMajeurComponent_span_106_Template, 1, 0, "span", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(107, InfirmierMajeurComponent_div_107_Template, 8, 1, "div", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(108, InfirmierMajeurComponent_ng_container_108_Template, 121, 28, "ng-container", 36)(109, InfirmierMajeurComponent_ng_container_109_Template, 31, 4, "ng-container", 36)(110, InfirmierMajeurComponent_ng_container_110_Template, 30, 3, "ng-container", 36)(111, InfirmierMajeurComponent_ng_container_111_Template, 13, 3, "ng-container", 36)(112, InfirmierMajeurComponent_ng_container_112_Template, 22, 3, "ng-container", 36)(113, InfirmierMajeurComponent_ng_container_113_Template, 31, 4, "ng-container", 36)(114, InfirmierMajeurComponent_ng_container_114_Template, 35, 6, "ng-container", 36)(115, InfirmierMajeurComponent_ng_container_115_Template, 66, 7, "ng-container", 36)(116, InfirmierMajeurComponent_ng_container_116_Template, 67, 7, "ng-container", 36);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSessionModal && ctx.selectedSession);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNouvelleSeanceModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStaffModal && ctx.selectedStaff);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPlanningDetailModal && ctx.selectedPlanning);
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.activeSection === "dashboard");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeSection === "planning");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.planningSeances.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "equipe");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.staff.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "patients");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.allPatients.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "supervision");
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.activeSection === "monitoring");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.monitorsEnAlerte > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "rapports");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeSection === "incidents");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.incidentsOuverts.length > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "stocks");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.criticalStocksCount > 0);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.sectionTitle);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "dashboard");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "equipe");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "patients");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "stocks");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "incidents");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "supervision");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "monitoring");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "rapports");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "planning");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, TitleCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  height: 100dvh;\n}\n.staff-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.staff-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.staff-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.staff-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.staff-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.staff-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.stock-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stock-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.stock-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.stock-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  flex-shrink: 0;\n}\n.stock-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.stock-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.stock-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stock-item.ok-item[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.section-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.section-bar__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-1);\n  font-size: 13px;\n  cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--c-teal);\n}\n.staff-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 14px;\n}\n.staff-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1.5px solid var(--c-border);\n  border-radius: 12px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.staff-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.07);\n}\n.staff-card--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.3);\n  background: rgba(255, 87, 87, 0.03);\n}\n.staff-card--alert[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.3);\n  background: rgba(255, 193, 7, 0.03);\n}\n.staff-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.staff-card__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.staff-card__role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  margin-top: -6px;\n}\n.staff-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.staff-card__meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.staff-card__meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.staff-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--c-border);\n}\n.staff-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: var(--c-teal-soft);\n  border: 2px solid var(--c-teal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--c-teal);\n}\n.stocks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 14px;\n}\n.stock-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1.5px solid var(--c-border);\n  border-radius: 12px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.2s;\n}\n.stock-card--crit[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.3);\n  background: rgba(255, 193, 7, 0.03);\n}\n.stock-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.stock-card__nom[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  line-height: 1.3;\n}\n.stock-card__detail[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  margin-top: -4px;\n}\n.stock-card__quantities[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.stock-card__bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.stock-icon[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.stock-qty[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  align-items: center;\n}\n.stock-qty__lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n}\n.stock-qty__val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.stock-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--c-surface);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.stock-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--c-amber);\n  border-radius: 99px;\n}\n.stock-bar__fill.ok[_ngcontent-%COMP%] {\n  background: var(--c-green);\n}\n.stock-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.stock-ordered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--c-green);\n  font-weight: 600;\n  padding: 6px 0;\n}\n.stock-ordered[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.stock-ok-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.stock-ok-msg[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-green);\n}\n.incidents-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.incident-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  background: var(--c-card);\n  border: 1.5px solid var(--c-border);\n  border-radius: 12px;\n  padding: 18px;\n  transition: border-color 0.2s;\n}\n.incident-card--crit[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.35);\n  background: rgba(255, 87, 87, 0.04);\n}\n.incident-card--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.35);\n  background: rgba(255, 193, 7, 0.04);\n}\n.incident-card--done[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.incident-card__side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.incident-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.incident-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.incident-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding-top: 4px;\n}\n.incident-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.incident-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.incident-icon--crit[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.12);\n  color: var(--c-red);\n}\n.incident-icon--warn[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.12);\n  color: var(--c-amber);\n}\n.incident-icon--info[_ngcontent-%COMP%] {\n  background: rgba(41, 182, 246, 0.12);\n  color: var(--c-blue);\n}\n.incident-machine[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: var(--f-mono);\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-teal);\n  background: rgba(0, 217, 196, 0.1);\n  padding: 2px 8px;\n  border-radius: 4px;\n  margin-right: 8px;\n}\n.incident-type[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.incident-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-2);\n  line-height: 1.5;\n  margin: 0;\n}\n.incident-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.incident-meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.progress-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.progress-mini__bar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 5px;\n  background: var(--c-surface);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.progress-mini__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--c-teal);\n  border-radius: 99px;\n}\n.progress-mini__fill.warn[_ngcontent-%COMP%] {\n  background: var(--c-amber);\n}\n.patho-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background: rgba(41, 182, 246, 0.1);\n  color: var(--c-blue);\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.btn-warn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-red) !important;\n  color: var(--c-red) !important;\n}\n.btn-done-rx[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.1) !important;\n  color: var(--c-teal) !important;\n  border-color: rgba(0, 217, 196, 0.3) !important;\n  cursor: default !important;\n}\n.warn-val[_ngcontent-%COMP%] {\n  color: var(--c-amber) !important;\n}\n.row-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n  background: transparent;\n  color: var(--c-text-2);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.row-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.row-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-surface);\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--c-text-3);\n  padding: 32px 16px !important;\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.modal-header--simple[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.modal-header--simple[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.supervision-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n  padding: 16px;\n}\n.supervision-card[_ngcontent-%COMP%] {\n  background: var(--c-card-hi);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: border-color 0.2s;\n}\n.supervision-card--alert[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.35);\n}\n.supervision-card--absent[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.25);\n  opacity: 0.85;\n}\n.supervision-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n}\n.sup-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sup-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n  font-size: 14px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sup-identity[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sup-identity[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.sup-identity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.sup-contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11.5px;\n  color: var(--c-text-2);\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 7px 10px;\n}\n.sup-contact[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-3);\n}\n.sup-patients-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--c-text-3);\n}\n.sup-patients-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sup-patients-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sup-patient-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  font-size: 12px;\n}\n.sup-patient-row--warn[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.3);\n  background: rgba(245, 166, 35, 0.04);\n}\n.sup-patient-row[_ngcontent-%COMP%]   .patient-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sup-patient-row[_ngcontent-%COMP%]   .patient-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.sup-patient-row[_ngcontent-%COMP%]   .patient-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-1);\n}\n.sup-patient-vitals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.sup-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--c-text-3);\n  padding: 8px 4px;\n}\n.sup-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding-top: 4px;\n  border-top: 1px solid var(--c-border);\n}\n.monitor-global-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  padding: 16px;\n}\n.monitor-global-card[_ngcontent-%COMP%] {\n  background: var(--c-card-hi);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.monitor-global-card--warn[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.4);\n}\n.monitor-global-card--crit[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.4);\n}\n.mgc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.mgc-identity[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mgc-identity[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.mgc-identity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.mgc-vitals[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.mgc-vital[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 8px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.mgc-vital--alert[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.4);\n  background: rgba(245, 166, 35, 0.05);\n}\n.mgc-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--c-text-3);\n}\n.mgc-val[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.mgc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-top: 8px;\n  border-top: 1px solid var(--c-border);\n}\n.modal-panel--planning-detail[_ngcontent-%COMP%] {\n  max-width: 660px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-panel--planning-detail[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  min-height: 0;\n}\n.pld-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--c-text-3);\n  margin: 14px 0 8px;\n}\n.pld-section-label[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.pld-section-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-teal);\n}\n.pld-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.pld-info-item[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 9px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.pld-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--c-text-3);\n}\n.pld-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.pld-vitals-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.pld-vital[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 9px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.pld-vital--warn[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.4);\n  background: rgba(245, 166, 35, 0.05);\n}\n.pld-v-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--c-text-3);\n}\n.pld-v-val[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.pld-text-block[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 12.5px;\n  color: var(--c-text-2);\n  line-height: 1.55;\n}\n.pld-text-block--ord[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  border-left: 3px solid var(--c-teal);\n  color: var(--c-text-1);\n}\n.pld-text-block--ord[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n@media (max-width: 1100px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n@media (max-width: 768px) {\n  .main-scroll[_ngcontent-%COMP%] {\n    padding: 0 12px 12px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .tabs-row[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .planning-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .equipe-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n  }\n}\n@media (max-width: 480px) {\n  .equipe-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=infirmier-majeur.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfirmierMajeurComponent, { className: "InfirmierMajeurComponent", filePath: "app\\pages\\infirmier-majeur\\infirmier-majeur.component.ts", lineNumber: 73 });
})();
export {
  InfirmierMajeurComponent
};
//# sourceMappingURL=chunk-L7KBOREB.js.map
