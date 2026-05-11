import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-C2IOWBAM.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  Router
} from "./chunk-T6UPCRXA.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MOKET3XK.js";

// src/app/pages/infirmier/infirmier.component.ts
function InfirmierComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function InfirmierComponent_div_1_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41)(6, "span", 16);
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
function InfirmierComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function InfirmierComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNotifPanel = false);
    });
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 53)(2, "div", 54)(3, "span", 55);
    \u0275\u0275text(4, "Pression Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54)(8, "span", 55);
    \u0275\u0275text(9, "Fr\xE9quence Cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 54)(13, "span", 55);
    \u0275\u0275text(14, "D\xE9bit Sang");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 56);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 54)(18, "span", 55);
    \u0275\u0275text(19, "Poids Perdu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 56);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 54)(23, "span", 55);
    \u0275\u0275text(24, "Temps restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 56);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 54)(28, "span", 55);
    \u0275\u0275text(29, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 56);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 57)(33, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_div_16_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startEditVitals(ctx_r2.selectedPatient));
    });
    \u0275\u0275elementStart(34, "span", 16);
    \u0275\u0275text(35, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Mettre \xE0 jour les constantes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_div_16_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alerterMedecin(ctx_r2.selectedPatient));
    });
    \u0275\u0275elementStart(38, "span", 16);
    \u0275\u0275text(39, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Alerter m\xE9decin ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_div_16_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.showToast("Note ajout\xE9e au dossier", "info");
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(42, "span", 16);
    \u0275\u0275text(43, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Ajouter note ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classMapInterpolate1("modal-stat-val mono ", ctx_r2.selectedPatient.paClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPatient.pa, " mmHg");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPatient.fc, " bpm");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPatient.debit, " mL/min");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPatient.poidsPerdu, " kg");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.timeLeft);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPatient.progress, "%");
  }
}
function InfirmierComponent_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "div", 62)(5, "label");
    \u0275\u0275text(6, "Pression Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_div_3_div_17_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editedPa, $event) || (ctx_r2.editedPa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 62)(9, "label");
    \u0275\u0275text(10, "Fr\xE9quence Cardiaque (bpm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_div_3_div_17_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editedFc, $event) || (ctx_r2.editedFc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62)(13, "label");
    \u0275\u0275text(14, "D\xE9bit Sang (mL/min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_div_3_div_17_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editedDebit, $event) || (ctx_r2.editedDebit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 62)(17, "label");
    \u0275\u0275text(18, "Poids perdu (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_div_3_div_17_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editedPoids, $event) || (ctx_r2.editedPoids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 57)(21, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_div_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveVitals(ctx_r2.selectedPatient));
    });
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Enregistrer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_div_17_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showVitalsEdit = false);
    });
    \u0275\u0275text(26, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Saisie des nouvelles constantes pour ", ctx_r2.selectedPatient.name, "");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editedPa);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editedFc);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editedDebit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editedPoids);
  }
}
function InfirmierComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 47)(6, "h2", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 51);
    \u0275\u0275listener("click", function InfirmierComponent_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 52);
    \u0275\u0275template(16, InfirmierComponent_div_3_div_16_Template, 45, 9, "div", 39)(17, InfirmierComponent_div_3_div_17_Template, 27, 5, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Machine ", ctx_r2.selectedPatient.machine, " \xB7 ", ctx_r2.selectedPatient.time, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.selectedPatient.status === "warn" ? "warn" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedPatient.status === "warn" ? "PA \xC9lev\xE9e" : ctx_r2.selectedPatient.timeLeft + " restantes", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r2.showVitalsEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showVitalsEdit);
  }
}
function InfirmierComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function InfirmierComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddTaskModal = false);
    });
    \u0275\u0275elementStart(1, "div", 67);
    \u0275\u0275listener("click", function InfirmierComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 68)(3, "h2");
    \u0275\u0275text(4, "Nouvelle T\xE2che");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 51);
    \u0275\u0275listener("click", function InfirmierComponent_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddTaskModal = false);
    });
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 52)(9, "div", 61)(10, "div", 69)(11, "label");
    \u0275\u0275text(12, "Description ");
    \u0275\u0275elementStart(13, "span", 70);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_div_4_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTask.title, $event) || (ctx_r2.newTask.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 62)(17, "label");
    \u0275\u0275text(18, "Patient concern\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_div_4_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTask.patient, $event) || (ctx_r2.newTask.patient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 62)(21, "label");
    \u0275\u0275text(22, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_div_4_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTask.priority, $event) || (ctx_r2.newTask.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 74);
    \u0275\u0275text(25, "Standard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 75);
    \u0275\u0275text(27, "Urgent");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 57)(29, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_div_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ajouterTask());
    });
    \u0275\u0275elementStart(30, "span", 16);
    \u0275\u0275text(31, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Ajouter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_div_4_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddTaskModal = false);
    });
    \u0275\u0275text(34, "Annuler");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTask.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTask.patient);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTask.priority);
  }
}
function InfirmierComponent_div_5_div_96_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", s_r10, " ");
  }
}
function InfirmierComponent_div_5_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, InfirmierComponent_div_5_div_96_div_1_Template, 4, 1, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedRapport.soinsRealises);
  }
}
function InfirmierComponent_div_5_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, " Aucun soin enregistr\xE9 pour cette s\xE9ance. ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function InfirmierComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showRapportModal = false);
    });
    \u0275\u0275elementStart(1, "div", 76);
    \u0275\u0275listener("click", function InfirmierComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 77)(6, "h2");
    \u0275\u0275text(7, "Rapport de S\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 51);
    \u0275\u0275listener("click", function InfirmierComponent_div_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showRapportModal = false);
    });
    \u0275\u0275elementStart(11, "span", 16);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 52)(14, "div", 78)(15, "div", 79)(16, "span");
    \u0275\u0275text(17, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "b");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 79)(21, "span");
    \u0275\u0275text(22, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "b", 80);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 79)(26, "span");
    \u0275\u0275text(27, "Heure d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "b", 80);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 79)(31, "span");
    \u0275\u0275text(32, "Heure fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "b", 80);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 79)(36, "span");
    \u0275\u0275text(37, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "b");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 79)(41, "span");
    \u0275\u0275text(42, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "b");
    \u0275\u0275text(44, "03/04/2026");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 81)(46, "span", 16);
    \u0275\u0275text(47, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Constantes Vitales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 82)(50, "div", 83)(51, "span", 84);
    \u0275\u0275text(52, "Pression Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 85);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 83)(56, "span", 84);
    \u0275\u0275text(57, "Fr\xE9quence Cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 85);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 83)(61, "span", 84);
    \u0275\u0275text(62, "Poids d\xE9but s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 85);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 83)(66, "span", 84);
    \u0275\u0275text(67, "Poids fin s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 85);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 83)(71, "span", 84);
    \u0275\u0275text(72, "D\xE9bit sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 85);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 83)(76, "span", 84);
    \u0275\u0275text(77, "UF r\xE9alis\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 85);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 81)(81, "span", 16);
    \u0275\u0275text(82, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, " Observations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 86);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 81)(87, "span", 16);
    \u0275\u0275text(88, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " Incidents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 86);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 81)(93, "span", 16);
    \u0275\u0275text(94, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, " Soins R\xE9alis\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, InfirmierComponent_div_5_div_96_Template, 2, 1, "div", 87)(97, InfirmierComponent_div_5_div_97_Template, 2, 0, "div", 88);
    \u0275\u0275elementStart(98, "div", 57)(99, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_div_5_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.imprimerRapport());
    });
    \u0275\u0275elementStart(100, "span", 16);
    \u0275\u0275text(101, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " Imprimer le rapport ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_div_5_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showToast("Rapport export\xE9 en PDF", "info"));
    });
    \u0275\u0275elementStart(104, "span", 16);
    \u0275\u0275text(105, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, " Exporter PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_div_5_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showRapportModal = false);
    });
    \u0275\u0275text(108, "Fermer");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.patientInit);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedRapport.patient, " \xB7 Machine ", ctx_r2.selectedRapport.machine, "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.infirmier);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.machine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.heure);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.heureEnd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.duree);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.pa);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRapport.fc, " bpm");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRapport.poidsDebut, " kg");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRapport.poidsFin, " kg");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRapport.debit, " mL/min");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (ctx_r2.selectedRapport.poidsDebut - ctx_r2.selectedRapport.poidsFin).toFixed(1), " L");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedRapport.observations);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("rapport-text-block--warn", ctx_r2.selectedRapport.incidents !== "Aucun incident signal\xE9.");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedRapport.incidents, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.selectedRapport.soinsRealises.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedRapport.soinsRealises.length === 0);
  }
}
function InfirmierComponent_div_6_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 98)(2, "div", 99)(3, "span")(4, "span", 16);
    \u0275\u0275text(5, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span")(8, "span", 16);
    \u0275\u0275text(9, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 100);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 101)(14, "span", 102)(15, "span", 16);
    \u0275\u0275text(16, "medication");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " M\xE9dicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 103);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 101)(21, "span", 102)(22, "span", 16);
    \u0275\u0275text(23, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 103);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 101)(28, "span", 102)(29, "span", 16);
    \u0275\u0275text(30, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 104);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" \xC9mise le ", ctx_r2.selectedPatientFiche.ordonnance.dateEmission, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Expire le ", ctx_r2.selectedPatientFiche.ordonnance.dateExpiration, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.ordonnance.statut);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.ordonnance.medicaments);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.ordonnance.posologie);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.ordonnance.instructions);
  }
}
function InfirmierComponent_div_6_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, "Aucune ordonnance active pour ce patient.");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_6_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 106);
    \u0275\u0275listener("click", function InfirmierComponent_div_6_div_73_Template_button_click_5_listener() {
      const s_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.marquerSoinFait(s_r13));
    });
    \u0275\u0275text(6, "Fait");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", s_r13.priorite === "urgent" ? "var(--c-red)" : "var(--c-blue)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r13.priorite === "urgent" ? "priority_high" : "radio_button_unchecked", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r13.heure, " \u2014 ", s_r13.type, "");
  }
}
function InfirmierComponent_div_6_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, " Aucun soin en attente pour ce patient. ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_6_button_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_div_6_button_76_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alerterPatientFiche(ctx_r2.selectedPatientFiche));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Alerter m\xE9decin ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function InfirmierComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showPatientFicheModal = false);
    });
    \u0275\u0275elementStart(1, "div", 93);
    \u0275\u0275listener("click", function InfirmierComponent_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 77)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 94);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "span", 50);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 51);
    \u0275\u0275listener("click", function InfirmierComponent_div_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showPatientFicheModal = false);
    });
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 52)(19, "div", 78)(20, "div", 79)(21, "span");
    \u0275\u0275text(22, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "b", 95);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 79)(26, "span");
    \u0275\u0275text(27, "Machine assign\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "b", 80);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 79)(31, "span");
    \u0275\u0275text(32, "Prochaine s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "b", 80);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 79)(36, "span");
    \u0275\u0275text(37, "Poids habituel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "b");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 81)(41, "span", 16);
    \u0275\u0275text(42, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Derni\xE8res Constantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 82)(45, "div", 83)(46, "span", 84);
    \u0275\u0275text(47, "Pression Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 85);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 83)(51, "span", 84);
    \u0275\u0275text(52, "Fr\xE9quence Cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 85);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 81)(56, "span", 16);
    \u0275\u0275text(57, "history_edu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Ant\xE9c\xE9dents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 86);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 81)(62, "span", 16);
    \u0275\u0275text(63, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Ordonnance Active");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, InfirmierComponent_div_6_ng_container_65_Template, 34, 6, "ng-container", 96)(66, InfirmierComponent_div_6_ng_template_66_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(68, "div", 81)(69, "span", 16);
    \u0275\u0275text(70, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Soins en Attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 89);
    \u0275\u0275template(73, InfirmierComponent_div_6_div_73_Template, 7, 5, "div", 97)(74, InfirmierComponent_div_6_div_74_Template, 2, 0, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 57);
    \u0275\u0275template(76, InfirmierComponent_div_6_button_76_Template, 4, 0, "button", 33);
    \u0275\u0275elementStart(77, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_div_6_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showPatientFicheModal = false);
    });
    \u0275\u0275text(78, "Fermer");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const noOrd_r15 = \u0275\u0275reference(67);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.selectedPatientFiche.statut === "crit" ? "rgba(255,87,87,.15)" : "var(--c-teal-soft)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.selectedPatientFiche.statut === "crit" ? "var(--c-red)" : "var(--c-teal)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPatientFiche.age, " ans \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.pathologie);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.selectedPatientFiche.statut);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.statutLabel);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.groupeSanguin);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.machine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.prochainSeance);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.poids);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("rapport-vital--warn", ctx_r2.selectedPatientFiche.statut !== "ok");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.pa);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPatientFiche.fc, " bpm");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatientFiche.antecedents);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.selectedPatientFiche.ordonnance)("ngIfElse", noOrd_r15);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.soinsPendingPour(ctx_r2.selectedPatientFiche.nom));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.soinsPendingPour(ctx_r2.selectedPatientFiche.nom).length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedPatientFiche.statut !== "ok");
  }
}
function InfirmierComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_button_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_button_90_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddTaskModal = true);
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouvelle t\xE2che ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 107);
  }
}
function InfirmierComponent_div_96_div_7_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 116);
  }
}
function InfirmierComponent_div_96_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275listener("click", function InfirmierComponent_div_96_div_7_Template_div_click_0_listener() {
      const n_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markRead(n_r19));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 114)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InfirmierComponent_div_96_div_7_span_8_Template, 1, 0, "span", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r19 = ctx.$implicit;
    \u0275\u0275classProp("notif-item--unread", !n_r19.read);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("material-icons notif-icon notif-icon--", n_r19.type, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r19.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r19.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r19.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r19.read);
  }
}
function InfirmierComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 110);
    \u0275\u0275listener("click", function InfirmierComponent_div_96_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAllRead());
    });
    \u0275\u0275text(5, "Tout marquer lu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 111);
    \u0275\u0275template(7, InfirmierComponent_div_96_div_7_Template, 9, 9, "div", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.notifications);
  }
}
function InfirmierComponent_ng_container_100_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.urgentPending.length, " urgentes");
  }
}
function InfirmierComponent_ng_container_100_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_div_56_Template_div_click_0_listener() {
      const p_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPatient(p_r22));
    });
    \u0275\u0275elementStart(1, "div", 151)(2, "div", 152)(3, "div", 153);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 154)(13, "div", 155)(14, "span", 156);
    \u0275\u0275text(15, "PA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 157);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 158);
    \u0275\u0275text(19, "mmHg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 155)(21, "span", 156);
    \u0275\u0275text(22, "FC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 159);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 158);
    \u0275\u0275text(26, "bpm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 155)(28, "span", 156);
    \u0275\u0275text(29, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 159);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 158);
    \u0275\u0275text(33, "kg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 155)(35, "span", 156);
    \u0275\u0275text(36, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 159);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 158);
    \u0275\u0275text(40, "mL/min");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 160)(42, "div", 161);
    \u0275\u0275element(43, "div", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    \u0275\u0275classProp("warn-card", p_r22.status === "warn");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r22.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Machine ", p_r22.machine, " \xB7 ", p_r22.time, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r22.status === "warn" ? "warn" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r22.status === "warn" ? "PA \xC9lev\xE9e" : p_r22.timeLeft + " rest.", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", p_r22.paClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r22.pa);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r22.fc);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r22.poidsPerdu);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r22.debit);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", p_r22.progress, "%");
    \u0275\u0275classProp("warn", p_r22.status === "warn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r22.progress, "% termin\xE9");
  }
}
function InfirmierComponent_ng_container_100_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163)(1, "span", 164)(2, "span", 16);
    \u0275\u0275text(3, "priority_high");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 165)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 166);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_div_66_Template_button_click_9_listener() {
      const t_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markDone(t_r24));
    });
    \u0275\u0275text(10, "Fait");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r24 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r24.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r24.patient, " \xB7 Urgent");
  }
}
function InfirmierComponent_ng_container_100_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163)(1, "span", 167)(2, "span", 16);
    \u0275\u0275text(3, "radio_button_unchecked");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 165)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 166);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_div_67_Template_button_click_9_listener() {
      const t_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markDone(t_r26));
    });
    \u0275\u0275text(10, "Fait");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r26 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r26.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r26.patient);
  }
}
function InfirmierComponent_ng_container_100_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "span", 169)(2, "span", 16);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 165)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r27 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r27.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r27.patient);
  }
}
function InfirmierComponent_ng_container_100_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_div_79_Template_div_click_0_listener() {
      const m_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.machineClick(m_r29));
    });
    \u0275\u0275elementStart(1, "span", 171);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 172);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r29 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r29.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r29.model);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", m_r29.statusClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r29.label);
  }
}
function InfirmierComponent_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 117)(2, "div", 118);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("seances"));
    });
    \u0275\u0275elementStart(3, "div", 119)(4, "span", 120);
    \u0275\u0275text(5, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 121)(7, "span", 122);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 123);
    \u0275\u0275text(10, "S\xE9ances aujourd'hui");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 118);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("monitoring"));
    });
    \u0275\u0275elementStart(12, "div", 124)(13, "span", 125);
    \u0275\u0275text(14, "monitor_heart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 121)(16, "span", 122);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 123);
    \u0275\u0275text(19, "En dialyse actuellement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 126);
    \u0275\u0275text(21, "Live");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 118);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_Template_div_click_22_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("taches"));
    });
    \u0275\u0275elementStart(23, "div", 127)(24, "span", 128);
    \u0275\u0275text(25, "task_alt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 121)(27, "span", 122);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 123);
    \u0275\u0275text(30, "T\xE2ches en attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, InfirmierComponent_ng_container_100_span_31_Template, 2, 1, "span", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 130)(33, "div", 131)(34, "span", 132);
    \u0275\u0275text(35, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 121)(37, "span", 122);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 123);
    \u0275\u0275text(40, "S\xE9ances termin\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span", 133);
    \u0275\u0275text(42, "aujourd'hui");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 134)(44, "div", 135)(45, "div", 136)(46, "h2");
    \u0275\u0275text(47, "Patients en Dialyse \u2014 Temps R\xE9el");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 137)(49, "span", 138);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("monitoring"));
    });
    \u0275\u0275elementStart(52, "span", 16);
    \u0275\u0275text(53, "open_in_full");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Plein \xE9cran ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 139);
    \u0275\u0275template(56, InfirmierComponent_ng_container_100_div_56_Template, 46, 18, "div", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 141)(58, "div", 135)(59, "div", 136)(60, "h2");
    \u0275\u0275text(61, "T\xE2ches du Jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddTaskModal = true);
    });
    \u0275\u0275elementStart(63, "span", 16);
    \u0275\u0275text(64, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 142);
    \u0275\u0275template(66, InfirmierComponent_ng_container_100_div_66_Template, 11, 2, "div", 143)(67, InfirmierComponent_ng_container_100_div_67_Template, 11, 2, "div", 143)(68, InfirmierComponent_ng_container_100_div_68_Template, 9, 2, "div", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 145)(70, "a", 146);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_Template_a_click_70_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("taches"));
    });
    \u0275\u0275text(71, "G\xE9rer toutes les t\xE2ches \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 135)(73, "div", 136)(74, "h2");
    \u0275\u0275text(75, "\xC9tat des Machines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 100);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 147);
    \u0275\u0275template(79, InfirmierComponent_ng_container_100_div_79_Template, 7, 6, "div", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 145)(81, "a", 146);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_100_Template_a_click_81_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSection("machines"));
    });
    \u0275\u0275text(82, "Voir toutes les machines \u2192");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.mesSeances.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.patients.length);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.urgentPending.length + ctx_r2.standardPending.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.urgentPending.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.seancesTerminees.length);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r2.patients.length, " actifs");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.patients);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.urgentPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.standardPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.doneTasks);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r2.availableMachinesCount, "/", ctx_r2.machines.length, " libres");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.machines);
  }
}
function InfirmierComponent_ng_container_101_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "span", 16);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.warnPatientsCount, " patient(s) n\xE9cessitent une attention imm\xE9diate");
  }
}
function InfirmierComponent_ng_container_101_div_3_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_101_div_3_button_57_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const p_r31 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alerterMedecin(p_r31));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Alerter m\xE9decin ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_101_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 177);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_101_div_3_Template_div_click_0_listener() {
      const p_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPatient(p_r31));
    });
    \u0275\u0275elementStart(1, "div", 151)(2, "div", 152)(3, "div", 178);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "b", 179);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 180);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 181)(13, "div", 182)(14, "span", 156);
    \u0275\u0275text(15, "Pression Art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 183);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 158);
    \u0275\u0275text(19, "mmHg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 182)(21, "span", 156);
    \u0275\u0275text(22, "Fr\xE9quence Cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 184);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 158);
    \u0275\u0275text(26, "bpm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 182)(28, "span", 156);
    \u0275\u0275text(29, "Poids Perdu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 184);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 158);
    \u0275\u0275text(33, "kg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 182)(35, "span", 156);
    \u0275\u0275text(36, "D\xE9bit Sang");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 184);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 158);
    \u0275\u0275text(40, "mL/min");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 182)(42, "span", 156);
    \u0275\u0275text(43, "Temps Restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 184);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "span", 158);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 185)(48, "div", 186);
    \u0275\u0275element(49, "div", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 187);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_101_div_3_Template_div_click_52_listener($event) {
      \u0275\u0275restoreView(_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(53, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_101_div_3_Template_button_click_53_listener() {
      const p_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPatient(p_r31));
    });
    \u0275\u0275elementStart(54, "span", 16);
    \u0275\u0275text(55, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Constantes ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, InfirmierComponent_ng_container_101_div_3_button_57_Template, 4, 0, "button", 188);
    \u0275\u0275elementStart(58, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_101_div_3_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showToast("Note ajout\xE9e", "info"));
    });
    \u0275\u0275elementStart(59, "span", 16);
    \u0275\u0275text(60, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Note ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r31 = ctx.$implicit;
    \u0275\u0275classProp("warn-card", p_r31.status === "warn");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r31.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r31.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Machine ", p_r31.machine, " \xB7 ", p_r31.time, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r31.status === "warn" ? "warn" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r31.status === "warn" ? "Alerte PA" : p_r31.timeLeft + " restantes", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", p_r31.paClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r31.pa);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r31.fc);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r31.poidsPerdu);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r31.debit);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r31.timeLeft);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", p_r31.progress, "%");
    \u0275\u0275classProp("warn", p_r31.status === "warn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r31.progress, "% termin\xE9");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", p_r31.status === "warn");
  }
}
function InfirmierComponent_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InfirmierComponent_ng_container_101_div_1_Template, 5, 1, "div", 173);
    \u0275\u0275elementStart(2, "div", 174);
    \u0275\u0275template(3, InfirmierComponent_ng_container_101_div_3_Template, 62, 20, "div", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.warnPatientsCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.patients);
  }
}
function InfirmierComponent_ng_container_102_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 152)(6, "div", 153);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 80);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 80);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "div", 195)(25, "button", 196);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_102_tr_53_Template_button_click_25_listener() {
      const s_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.ouvrirRapport(s_r34));
    });
    \u0275\u0275elementStart(26, "span", 16);
    \u0275\u0275text(27, "summarize");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r34 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r34.heure);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r34.patientInit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r34.patient);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r34.machine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r34.duree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r34.infirmier);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r34.heureEnd);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", s_r34.statutClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statutSeanceLabel(s_r34.statut));
  }
}
function InfirmierComponent_ng_container_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 189)(2, "div", 130)(3, "div", 131)(4, "span", 132);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 121)(7, "span", 122);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 123);
    \u0275\u0275text(10, "Termin\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 130)(12, "div", 124)(13, "span", 125);
    \u0275\u0275text(14, "water_drop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 121)(16, "span", 122);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 123);
    \u0275\u0275text(19, "En cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 130)(21, "div", 190)(22, "span", 191);
    \u0275\u0275text(23, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 121)(25, "span", 122);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 123);
    \u0275\u0275text(28, "Planifi\xE9es");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 192)(30, "div", 136)(31, "h2");
    \u0275\u0275text(32, "Planning des S\xE9ances \u2014 3 Avril 2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "table", 193)(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Infirmier(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Fin pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "tbody");
    \u0275\u0275template(53, InfirmierComponent_ng_container_102_tr_53_Template, 28, 11, "tr", 194);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 145);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.seancesTerminees.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.seancesEnCours.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.seancesPlanifiees.length);
    \u0275\u0275advance(27);
    \u0275\u0275property("ngForOf", ctx_r2.mesSeances);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.mesSeances.length, " s\xE9ances programm\xE9es pour vous aujourd'hui");
  }
}
function InfirmierComponent_ng_container_103_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 208)(1, "span", 16);
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Urgentes (", ctx_r2.urgentPending.length, ") ");
  }
}
function InfirmierComponent_ng_container_103_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209)(1, "span", 164)(2, "span", 16);
    \u0275\u0275text(3, "priority_high");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 165)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 210)(10, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_103_div_17_Template_button_click_10_listener() {
      const t_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markDone(t_r37));
    });
    \u0275\u0275elementStart(11, "span", 16);
    \u0275\u0275text(12, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Fait ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 211);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_103_div_17_Template_button_click_14_listener() {
      const t_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteTask(t_r37));
    });
    \u0275\u0275elementStart(15, "span", 16);
    \u0275\u0275text(16, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r37 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r37.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r37.patient, " \xB7 Priorit\xE9 urgente");
  }
}
function InfirmierComponent_ng_container_103_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 212)(1, "span", 16);
    \u0275\u0275text(2, "radio_button_unchecked");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Standard (", ctx_r2.standardPending.length, ") ");
  }
}
function InfirmierComponent_ng_container_103_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209)(1, "span", 167)(2, "span", 16);
    \u0275\u0275text(3, "radio_button_unchecked");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 165)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 210)(10, "button", 166);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_103_div_19_Template_button_click_10_listener() {
      const t_r39 = \u0275\u0275restoreView(_r38).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markDone(t_r39));
    });
    \u0275\u0275text(11, "Fait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 211);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_103_div_19_Template_button_click_12_listener() {
      const t_r39 = \u0275\u0275restoreView(_r38).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteTask(t_r39));
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r39 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r39.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r39.patient);
  }
}
function InfirmierComponent_ng_container_103_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Effectu\xE9es (", ctx_r2.doneTasks.length, ") ");
  }
}
function InfirmierComponent_ng_container_103_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 214)(1, "span", 169)(2, "span", 16);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 165)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r40 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r40.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r40.patient);
  }
}
function InfirmierComponent_ng_container_103_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215)(1, "span", 16);
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune t\xE2che pour aujourd'hui ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 197)(2, "div", 198)(3, "select", 199);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_103_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterTaskPriority, $event) || (ctx_r2.filterTaskPriority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 200);
    \u0275\u0275text(5, "Toutes les priorit\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 75);
    \u0275\u0275text(7, "Urgent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 74);
    \u0275\u0275text(9, "Standard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_103_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddTaskModal = true);
    });
    \u0275\u0275elementStart(11, "span", 16);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Nouvelle t\xE2che ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 192)(15, "div", 201);
    \u0275\u0275template(16, InfirmierComponent_ng_container_103_div_16_Template, 4, 1, "div", 202)(17, InfirmierComponent_ng_container_103_div_17_Template, 17, 2, "div", 203)(18, InfirmierComponent_ng_container_103_div_18_Template, 4, 1, "div", 204)(19, InfirmierComponent_ng_container_103_div_19_Template, 15, 2, "div", 203)(20, InfirmierComponent_ng_container_103_div_20_Template, 4, 1, "div", 205)(21, InfirmierComponent_ng_container_103_div_21_Template, 9, 2, "div", 206)(22, InfirmierComponent_ng_container_103_div_22_Template, 4, 0, "div", 207);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 145);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterTaskPriority);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r2.urgentPending.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.urgentPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.standardPending.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.standardPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.doneTasks.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.doneTasks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tasks.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.tasks.length, " t\xE2ches au total \xB7 ", ctx_r2.doneTasks.length, " effectu\xE9es");
  }
}
function InfirmierComponent_ng_container_104_tr_31_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 166);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_104_tr_31_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const s_r43 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.marquerSoinFait(s_r43));
    });
    \u0275\u0275elementStart(1, "span", 223);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Fait ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_104_tr_31_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 224);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_104_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 152)(6, "div", 153);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 219);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 220);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 50);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, InfirmierComponent_ng_container_104_tr_31_button_22_Template, 4, 0, "button", 221)(23, InfirmierComponent_ng_container_104_tr_31_span_23_Template, 2, 0, "span", 222);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r43 = ctx.$implicit;
    \u0275\u0275classProp("row-done", s_r43.fait);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r43.heure);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r43.patientInit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r43.patient);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r43.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r43.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", s_r43.priorite === "urgent" ? "crit" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r43.priorite === "urgent" ? "Urgent" : "Normal", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", s_r43.fait ? "ok" : "warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r43.fait ? "Effectu\xE9" : "En attente");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !s_r43.fait);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r43.fait);
  }
}
function InfirmierComponent_ng_container_104_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 225)(2, "span", 16);
    \u0275\u0275text(3, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun soin en attente ");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 197)(2, "div", 198)(3, "select", 199);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_104_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterSoinPriorite, $event) || (ctx_r2.filterSoinPriorite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 200);
    \u0275\u0275text(5, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 75);
    \u0275\u0275text(7, "Urgents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 216);
    \u0275\u0275text(9, "Normaux");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 217);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 192)(13, "table", 193)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "Heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Type de soin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, InfirmierComponent_ng_container_104_tr_31_Template, 24, 13, "tr", 218)(32, InfirmierComponent_ng_container_104_tr_32_Template, 5, 0, "tr", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 145);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterSoinPriorite);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r2.soinsUrgents.length, " soins urgents \xB7 ", ctx_r2.soinsNormaux.length, " en attente");
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.filteredSoins);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredSoins.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.soinsFaits.length, " soins effectu\xE9s \xB7 ", ctx_r2.soinsUrgents.length + ctx_r2.soinsNormaux.length, " en attente");
  }
}
function InfirmierComponent_ng_container_105_div_10_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 241)(1, "span", 16);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 242)(4, "span", 243);
    \u0275\u0275text(5, "Ordonnance active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 244);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 245);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r46.ordonnance.medicaments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r46.ordonnance.statut);
  }
}
function InfirmierComponent_ng_container_105_div_10_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 246)(1, "span", 16);
    \u0275\u0275text(2, "medical_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 247);
    \u0275\u0275text(6, "!");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r46 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.soinsPendingPour(p_r46.nom).length, " soin(s) en attente");
  }
}
function InfirmierComponent_ng_container_105_div_10_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_105_div_10_button_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const p_r46 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alerterPatientFiche(p_r46));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Alerter ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_105_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 231)(1, "div", 232)(2, "div", 233);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 234)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 235)(12, "div", 236)(13, "span", 16);
    \u0275\u0275text(14, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "span");
    \u0275\u0275text(17, "Tension art\xE9rielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "b");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 236)(21, "span", 16);
    \u0275\u0275text(22, "speed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "span");
    \u0275\u0275text(25, "Fr\xE9quence cardiaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "b");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 236)(29, "span", 16);
    \u0275\u0275text(30, "precision_manufacturing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "span");
    \u0275\u0275text(33, "Machine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "b", 80);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 236)(37, "span", 16);
    \u0275\u0275text(38, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div")(40, "span");
    \u0275\u0275text(41, "Prochaine s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "b", 80);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 237)(45, "span", 16);
    \u0275\u0275text(46, "history_edu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, InfirmierComponent_ng_container_105_div_10_div_49_Template, 10, 2, "div", 238)(50, InfirmierComponent_ng_container_105_div_10_div_50_Template, 7, 1, "div", 239);
    \u0275\u0275elementStart(51, "div", 240)(52, "button", 58);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_105_div_10_Template_button_click_52_listener() {
      const p_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPatientFiche(p_r46));
    });
    \u0275\u0275elementStart(53, "span", 16);
    \u0275\u0275text(54, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Consulter ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, InfirmierComponent_ng_container_105_div_10_button_56_Template, 4, 0, "button", 188);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r46 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("patient-fiche-card--warn", p_r46.statut === "warn")("patient-fiche-card--crit", p_r46.statut === "crit");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pfc-avatar--crit", p_r46.statut === "crit");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r46.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r46.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r46.age, " ans \xB7 ", p_r46.pathologie, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r46.statut);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r46.statutLabel);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("warn-val", p_r46.statut !== "ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r46.pa);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", p_r46.fc, " bpm");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(p_r46.machine);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(p_r46.prochainSeance);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r46.antecedents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r46.ordonnance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.soinsPendingPour(p_r46.nom).length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", p_r46.statut !== "ok");
  }
}
function InfirmierComponent_ng_container_105_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248)(1, "span", 16);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun patient trouv\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 197)(2, "div", 198)(3, "div", 226)(4, "span", 16);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 227);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_105_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchPatients, $event) || (ctx_r2.searchPatients = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "span", 217);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 228);
    \u0275\u0275template(10, InfirmierComponent_ng_container_105_div_10_Template, 57, 22, "div", 229)(11, InfirmierComponent_ng_container_105_div_11_Template, 4, 0, "div", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchPatients);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.mesPatients.length, " patient(s) assign\xE9(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredMesPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredMesPatients.length === 0);
  }
}
function InfirmierComponent_ng_container_106_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262)(1, "span", 16);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 263)(5, "span", 16);
    \u0275\u0275text(6, "water_drop");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r49 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", m_r49.patient, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", m_r49.debit, " mL/min");
  }
}
function InfirmierComponent_ng_container_106_div_30_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 264)(1, "span", 16);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pr\xEAte \xE0 l'emploi ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_106_div_30_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 265)(1, "span", 16);
    \u0275\u0275text(2, "build");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Maintenance en cours ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_106_div_30_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_106_div_30_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r50);
      const m_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.machineClick(m_r49));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9tail ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_106_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 253)(1, "div", 254)(2, "div", 255);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 256);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InfirmierComponent_ng_container_106_div_30_div_8_Template, 8, 2, "div", 257)(9, InfirmierComponent_ng_container_106_div_30_div_9_Template, 4, 0, "div", 258)(10, InfirmierComponent_ng_container_106_div_30_div_10_Template, 4, 0, "div", 259);
    \u0275\u0275elementStart(11, "div", 260);
    \u0275\u0275template(12, InfirmierComponent_ng_container_106_div_30_button_12_Template, 4, 0, "button", 188);
    \u0275\u0275elementStart(13, "button", 261);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_106_div_30_Template_button_click_13_listener() {
      const m_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.signalerPanne(m_r49));
    });
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15, "report_problem");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Signaler ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r49 = ctx.$implicit;
    \u0275\u0275classProp("machine-card--warn", m_r49.statusClass === "crit")("machine-card--ok", m_r49.statusClass === "ok")("machine-card--busy", m_r49.statusClass === "info");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r49.id);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", m_r49.statusClass, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r49.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r49.model);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r49.statusClass === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r49.statusClass === "ok");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r49.statusClass === "crit");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", m_r49.statusClass !== "crit");
  }
}
function InfirmierComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 189)(2, "div", 130)(3, "div", 124)(4, "span", 125);
    \u0275\u0275text(5, "water_drop");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 121)(7, "span", 122);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 123);
    \u0275\u0275text(10, "En utilisation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 130)(12, "div", 131)(13, "span", 132);
    \u0275\u0275text(14, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 121)(16, "span", 122);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 123);
    \u0275\u0275text(19, "Disponibles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 130)(21, "div", 249)(22, "span", 250);
    \u0275\u0275text(23, "build");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 121)(25, "span", 122);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 123);
    \u0275\u0275text(28, "En maintenance");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 251);
    \u0275\u0275template(30, InfirmierComponent_ng_container_106_div_30_Template, 17, 16, "div", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.machinesEnCours);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.availableMachinesCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.machinesEnMaintenance);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.machines);
  }
}
var InfirmierComponent = class _InfirmierComponent {
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
      dashboard: "Tableau de Bord",
      monitoring: "Monitoring en Temps R\xE9el",
      seances: "Mes S\xE9ances du Jour",
      taches: "Mes T\xE2ches",
      soins: "Soins Infirmiers",
      machines: "\xC9tat des Machines",
      patients: "Mes Patients",
      rapport: "Rapport de S\xE9ance"
    };
    return map[this.activeSection] ?? "Tableau de Bord";
  }
  setSection(s) {
    this.activeSection = s;
    this.showNotifPanel = false;
  }
  // ── Monitoring Patients ──
  patients = [
    { initials: "SB", name: "Saidi Bouchra", machine: "M-07", time: "10:30 \u2192 14:30", timeLeft: "2h15", pa: "128/82", paClass: "ok", fc: 74, poidsPerdu: 1.2, debit: 350, progress: 44, status: "ok" },
    { initials: "ME", name: "Moussaoui El Hassan", machine: "M-02", time: "09:00 \u2192 13:00", timeLeft: "1h30", pa: "172/98", paClass: "warn-val", fc: 88, poidsPerdu: 2.1, debit: 300, progress: 72, status: "warn" },
    { initials: "OB", name: "Ouali Badreddine", machine: "M-05", time: "09:30 \u2192 13:30", timeLeft: "2h00", pa: "122/76", paClass: "ok", fc: 68, poidsPerdu: 0.8, debit: 380, progress: 58, status: "ok" }
  ];
  selectedPatient = null;
  showPatientModal = false;
  openPatient(p) {
    this.selectedPatient = p;
    this.showVitalsEdit = false;
    this.showPatientModal = true;
    this.showNotifPanel = false;
  }
  closePatient() {
    this.showPatientModal = false;
    this.selectedPatient = null;
  }
  alerterMedecin(p) {
    this.showToast(`Dr. Benali alert\xE9 pour ${p.name} \u2014 PA ${p.pa}`, "warning");
    this.closePatient();
  }
  // ── Update vitals inline ──
  showVitalsEdit = false;
  editedPa = "";
  editedFc = 0;
  editedDebit = 0;
  editedPoids = 0;
  startEditVitals(p) {
    this.editedPa = p.pa;
    this.editedFc = p.fc;
    this.editedDebit = p.debit;
    this.editedPoids = p.poidsPerdu;
    this.showVitalsEdit = true;
  }
  saveVitals(p) {
    p.pa = this.editedPa;
    p.fc = this.editedFc;
    p.debit = this.editedDebit;
    p.poidsPerdu = this.editedPoids;
    p.paClass = this.editedFc > 100 || parseInt(this.editedPa) > 160 ? "warn-val" : "ok";
    p.status = p.paClass === "warn-val" ? "warn" : "ok";
    this.showVitalsEdit = false;
    this.showPatientModal = false;
    this.showToast(`Constantes de ${p.name} enregistr\xE9es`, "success");
  }
  // ── Infirmier connecté ──
  currentInfirmier = "Inf. N. Tazi";
  // ── Séances du jour ──
  seancesJour = [
    { heure: "08:00", heureEnd: "12:00", patient: "Alaoui Khalid", patientInit: "AK", machine: "M-03", duree: "4h", infirmier: "Inf. N. Tazi", statut: "terminee", statutClass: "ok" },
    { heure: "09:00", heureEnd: "13:00", patient: "Moussaoui El Hassan", patientInit: "ME", machine: "M-02", duree: "4h", infirmier: "Inf. A. Haddad", statut: "en-cours", statutClass: "info" },
    { heure: "09:30", heureEnd: "13:30", patient: "Ouali Badreddine", patientInit: "OB", machine: "M-05", duree: "4h", infirmier: "Inf. N. Tazi", statut: "en-cours", statutClass: "info" },
    { heure: "10:30", heureEnd: "14:30", patient: "Saidi Bouchra", patientInit: "SB", machine: "M-07", duree: "4h", infirmier: "Inf. L. Mansouri", statut: "en-cours", statutClass: "info" },
    { heure: "14:00", heureEnd: "17:30", patient: "Filali Zineb", patientInit: "FZ", machine: "M-09", duree: "3.5h", infirmier: "Inf. N. Tazi", statut: "planifiee", statutClass: "purple" },
    { heure: "16:30", heureEnd: "20:30", patient: "Ouali Badreddine", patientInit: "OB", machine: "M-05", duree: "4h", infirmier: "Inf. N. Tazi", statut: "planifiee", statutClass: "purple" }
  ];
  get mesSeances() {
    return this.seancesJour.filter((s) => s.infirmier === this.currentInfirmier);
  }
  get seancesTerminees() {
    return this.mesSeances.filter((s) => s.statut === "terminee");
  }
  get seancesEnCours() {
    return this.mesSeances.filter((s) => s.statut === "en-cours");
  }
  get seancesPlanifiees() {
    return this.mesSeances.filter((s) => s.statut === "planifiee");
  }
  statutSeanceLabel(s) {
    return { terminee: "Termin\xE9e", "en-cours": "En cours", planifiee: "Planifi\xE9e" }[s] ?? s;
  }
  // ── Soins (care tasks) ──
  soins = [
    { id: 1, heure: "09:15", patient: "Moussaoui El Hassan", patientInit: "ME", type: "Pression art\xE9rielle", description: "Contr\xF4le PA \u2014 R\xE9sultat 172/98 mmHg. M\xE9decin inform\xE9.", priorite: "urgent", fait: false },
    { id: 2, heure: "09:30", patient: "Saidi Bouchra", patientInit: "SB", type: "Injection", description: "Administration fer IV 200 mg selon ordonnance.", priorite: "normal", fait: false },
    { id: 3, heure: "10:00", patient: "Ouali Badreddine", patientInit: "OB", type: "Pes\xE9e", description: "Pes\xE9e pr\xE9-s\xE9ance \u2014 Poids : 80 kg.", priorite: "normal", fait: true },
    { id: 4, heure: "10:30", patient: "Alaoui Khalid", patientInit: "AK", type: "Injection EPO", description: "EPO 4000 UI sous-cutan\xE9 selon ordonnance Dr. Benali.", priorite: "normal", fait: true },
    { id: 5, heure: "11:00", patient: "Saidi Bouchra", patientInit: "SB", type: "Constantes", description: "Rel\xE8ve des constantes \u2014 PA 130/82, FC 74.", priorite: "normal", fait: false },
    { id: 6, heure: "12:00", patient: "Moussaoui El Hassan", patientInit: "ME", type: "Surveillance", description: "Surveillance renforc\xE9e \u2014 bilan PA toutes les 30 min.", priorite: "urgent", fait: false },
    { id: 7, heure: "13:30", patient: "Ouali Badreddine", patientInit: "OB", type: "Fin s\xE9ance", description: "D\xE9branchement et pes\xE9e post-s\xE9ance.", priorite: "normal", fait: false },
    { id: 8, heure: "14:00", patient: "Filali Zineb", patientInit: "FZ", type: "Pr\xE9paration", description: "Pr\xE9parer machine M-09 pour s\xE9ance 14h.", priorite: "normal", fait: false }
  ];
  filterSoinPriorite = "";
  get filteredSoins() {
    return this.soins.filter((s) => !this.filterSoinPriorite || s.priorite === this.filterSoinPriorite);
  }
  get soinsUrgents() {
    return this.soins.filter((s) => s.priorite === "urgent" && !s.fait);
  }
  get soinsNormaux() {
    return this.soins.filter((s) => s.priorite === "normal" && !s.fait);
  }
  get soinsFaits() {
    return this.soins.filter((s) => s.fait);
  }
  marquerSoinFait(s) {
    s.fait = true;
    this.showToast(`"${s.type}" pour ${s.patient} \u2014 effectu\xE9`, "success");
  }
  // ── Tasks ──
  tasks = [
    { id: 1, title: "Contr\xF4ler PA \u2014 Moussaoui H.", patient: "Moussaoui El Hassan", priority: "urgent", done: false },
    { id: 2, title: "Pr\xE9parer Machine M-09", patient: "Filali Zineb (14h)", priority: "standard", done: false },
    { id: 3, title: "Injecter EPO 4000 UI", patient: "Alaoui K.", priority: "standard", done: false },
    { id: 4, title: "Pes\xE9e post-s\xE9ance", patient: "Saidi Bouchra", priority: "standard", done: true }
  ];
  filterTaskPriority = "";
  get filteredTasks() {
    return this.tasks.filter((t) => !this.filterTaskPriority || t.priority === this.filterTaskPriority);
  }
  get urgentPending() {
    return this.tasks.filter((t) => t.priority === "urgent" && !t.done);
  }
  get standardPending() {
    return this.tasks.filter((t) => t.priority === "standard" && !t.done);
  }
  get doneTasks() {
    return this.tasks.filter((t) => t.done);
  }
  get availableMachinesCount() {
    return this.machines.filter((m) => m.statusClass === "ok").length;
  }
  get warnPatientsCount() {
    return this.patients.filter((p) => p.status === "warn").length;
  }
  get machinesEnCours() {
    return this.machines.filter((m) => m.statusClass === "info").length;
  }
  get machinesEnMaintenance() {
    return this.machines.filter((m) => m.statusClass === "crit").length;
  }
  markDone(task) {
    task.done = true;
    this.showToast(`"${task.title}" \u2014 marqu\xE9e comme faite`, "success");
  }
  showAddTaskModal = false;
  newTask = { title: "", patient: "", priority: "standard" };
  ajouterTask() {
    if (!this.newTask.title.trim()) {
      this.showToast("Veuillez saisir un titre", "warning");
      return;
    }
    this.tasks.unshift({ id: Date.now(), title: this.newTask.title, patient: this.newTask.patient, priority: this.newTask.priority, done: false });
    this.newTask = { title: "", patient: "", priority: "standard" };
    this.showAddTaskModal = false;
    this.showToast("T\xE2che ajout\xE9e avec succ\xE8s", "success");
  }
  deleteTask(t) {
    this.tasks = this.tasks.filter((x) => x.id !== t.id);
    this.showToast("T\xE2che supprim\xE9e", "info");
  }
  // ── Machines ──
  machines = [
    { id: "M-02", model: "Fresenius 5008S", statusClass: "info", label: "En cours", patient: "Moussaoui El Hassan", debit: 300 },
    { id: "M-05", model: "B.Braun Dialog+", statusClass: "info", label: "En cours", patient: "Ouali Badreddine", debit: 380 },
    { id: "M-07", model: "Fresenius 5008S", statusClass: "info", label: "En cours", patient: "Saidi Bouchra", debit: 350 },
    { id: "M-09", model: "B.Braun Dialog+", statusClass: "ok", label: "Disponible", patient: "\u2014", debit: 0 },
    { id: "M-11", model: "Gambro AK 200S", statusClass: "crit", label: "Maintenance", patient: "\u2014", debit: 0 },
    { id: "M-03", model: "Fresenius 5008S", statusClass: "ok", label: "Disponible", patient: "\u2014", debit: 0 }
  ];
  machineClick(m) {
    if (m.statusClass === "crit")
      this.showToast(`Machine ${m.id} \u2014 Rapport de maintenance envoy\xE9`, "warning");
    else if (m.statusClass === "ok")
      this.showToast(`Machine ${m.id} disponible \u2014 Pr\xEAte \xE0 l'emploi`, "info");
    else {
      const p = this.patients.find((pt) => pt.machine === m.id);
      if (p)
        this.openPatient(p);
    }
  }
  signalerPanne(m) {
    this.showToast(`Panne signal\xE9e pour ${m.id} \u2014 Technicien alert\xE9`, "warning");
  }
  // ── Mes Patients ──
  mesPatients = [
    {
      initials: "AK",
      nom: "Alaoui Khalid",
      age: 58,
      pathologie: "DRC",
      groupeSanguin: "B+",
      machine: "M-03",
      prochainSeance: "03/04 \xB7 08:00",
      statut: "crit",
      statutLabel: "Critique",
      pa: "145/92 mmHg",
      fc: 92,
      poids: "72 kg",
      antecedents: "IRC stade 5, HTA, Diab\xE8te type 2, Allergie P\xE9nicilline",
      ordonnance: {
        medicaments: "Amlodipine 5 mg, Furos\xE9mide 40 mg, \xC9rythropo\xEF\xE9tine 4000 UI",
        posologie: "Amlodipine : 1 cp/j le matin \u2014 Furos\xE9mide : 1 cp/j le matin \u2014 EPO : 1 inj. 3\xD7/sem apr\xE8s s\xE9ance",
        instructions: "Surveillance PA avant/apr\xE8s s\xE9ance. Ne pas administrer Furos\xE9mide si PA < 100/60.",
        dateEmission: "20/03/2026",
        dateExpiration: "20/06/2026",
        statut: "active"
      }
    },
    {
      initials: "SB",
      nom: "Saidi Bouchra",
      age: 45,
      pathologie: "IRC",
      groupeSanguin: "A+",
      machine: "M-07",
      prochainSeance: "03/04 \xB7 10:30",
      statut: "ok",
      statutLabel: "Stable",
      pa: "130/82 mmHg",
      fc: 76,
      poids: "58 kg",
      antecedents: "IRC stade 4, Aucune allergie",
      ordonnance: {
        medicaments: "Bicarbonate de sodium 1 g, Fer IV 100 mg",
        posologie: "Bicarbonate : 2 cp/j \u2014 Fer IV : perfusion 1\xD7/sem en fin de s\xE9ance",
        instructions: "Administrer le fer IV lentement sur 15 min. Surveiller signes allergiques.",
        dateEmission: "15/03/2026",
        dateExpiration: "15/06/2026",
        statut: "active"
      }
    },
    {
      initials: "FZ",
      nom: "Filali Zineb",
      age: 52,
      pathologie: "IRC",
      groupeSanguin: "AB+",
      machine: "M-09",
      prochainSeance: "03/04 \xB7 14:00",
      statut: "ok",
      statutLabel: "Stable",
      pa: "125/78 mmHg",
      fc: 72,
      poids: "62 kg",
      antecedents: "IRC stade 4, Allergie Aspirine, Hypothyro\xEFdie",
      ordonnance: {
        medicaments: "L\xE9vothyroxine 50 \xB5g, Calcium carbonate 500 mg",
        posologie: "L\xE9vothyroxine : 1 cp/j \xE0 jeun \u2014 Calcium : 1 cp 3\xD7/j aux repas",
        instructions: "Ne pas administrer Calcium en m\xEAme temps que L\xE9vothyroxine (intervalle \u2265 2h). \xC9viter Aspirine.",
        dateEmission: "10/03/2026",
        dateExpiration: "10/06/2026",
        statut: "active"
      }
    }
  ];
  searchPatients = "";
  selectedPatientFiche = null;
  showPatientFicheModal = false;
  get filteredMesPatients() {
    const q = this.searchPatients.trim().toLowerCase();
    return this.mesPatients.filter((p) => !q || p.nom.toLowerCase().includes(q) || p.pathologie.toLowerCase().includes(q));
  }
  openPatientFiche(p) {
    this.selectedPatientFiche = p;
    this.showPatientFicheModal = true;
    this.showNotifPanel = false;
  }
  soinsPendingPour(nom) {
    return this.soins.filter((s) => s.patient === nom && !s.fait);
  }
  // ── Rapport de Séance ──
  showRapportModal = false;
  selectedRapport = null;
  ouvrirRapport(s) {
    const live = this.patients.find((p) => p.name.toLowerCase().includes(s.patient.split(" ")[0].toLowerCase()));
    this.selectedRapport = {
      patient: s.patient,
      patientInit: s.patientInit,
      machine: s.machine,
      heure: s.heure,
      heureEnd: s.heureEnd,
      duree: s.duree,
      infirmier: s.infirmier,
      pa: live?.pa ?? "\u2014",
      fc: live?.fc ?? 0,
      poidsDebut: live ? +(live.poidsPerdu + 72).toFixed(1) : 72,
      poidsFin: live ? +(72 - live.poidsPerdu).toFixed(1) : 72,
      debit: live?.debit ?? 0,
      observations: s.statut === "terminee" ? "S\xE9ance termin\xE9e sans incident. Param\xE8tres dans les normes en fin de s\xE9ance." : s.statut === "en-cours" ? "S\xE9ance en cours. Surveillance continue. Param\xE8tres stables." : "S\xE9ance planifi\xE9e \u2014 rapport disponible apr\xE8s r\xE9alisation.",
      incidents: live?.status === "warn" ? "PA \xE9lev\xE9e signal\xE9e \u2014 M\xE9decin alert\xE9." : "Aucun incident signal\xE9.",
      soinsRealises: this.soins.filter((so) => so.patient === s.patient && so.fait).map((so) => `${so.heure} \u2014 ${so.type} : ${so.description}`)
    };
    this.showRapportModal = true;
    this.showNotifPanel = false;
  }
  imprimerRapport() {
    this.showToast("Impression du rapport de s\xE9ance en cours\u2026", "info");
  }
  alerterPatientFiche(p) {
    this.showToast(`Dr. Benali alert\xE9 pour ${p.nom} \u2014 PA ${p.pa}`, "warning");
    this.showPatientFicheModal = false;
  }
  // ── Notifications ──
  showNotifPanel = false;
  notifications = [
    { icon: "warning_amber", text: "Moussaoui H. \u2014 PA \xE9lev\xE9e 172/98 mmHg", time: "il y a 15min", type: "warn", read: false },
    { icon: "task_alt", text: "4 t\xE2ches en attente aujourd'hui", time: "il y a 1h", type: "info", read: false },
    { icon: "check_circle", text: "S\xE9ance Alaoui K. termin\xE9e avec succ\xE8s", time: "il y a 2h", type: "ok", read: true }
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
  openSettings() {
    this.showToast("Param\xE8tres \u2014 bient\xF4t disponible", "info");
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
  static \u0275fac = function InfirmierComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfirmierComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfirmierComponent, selectors: [["app-infirmier"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 107, vars: 39, consts: [["noOrd", ""], [1, "toast-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "notif-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "dashboard"], [1, "sidebar-backdrop", 3, "click"], [1, "sidebar"], [1, "sidebar__logo"], ["width", "28", "height", "28", "viewBox", "0 0 44 44", "fill", "none"], ["d", "M22 4C12.06 4 4 12.06 4 22s8.06 18 18 18 18-8.06 18-18S31.94 4 22 4Z", "fill", "rgba(0,217,196,0.1)", "stroke", "var(--c-teal)", "stroke-width", "1.5"], ["d", "M22 12v8M18 16h8", "stroke", "var(--c-teal)", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M14 26c0 0 2-6 4-6s3 4 4 4 2-6 4-6 4 6 4 6", "stroke", "var(--c-teal)", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "sidebar__nav"], [1, "nav-section-label"], [1, "nav-item", 3, "click"], [1, "material-icons"], [1, "nav-badge"], [1, "nav-badge", "warn"], ["class", "nav-badge warn", 4, "ngIf"], [1, "nav-badge", "ok"], [1, "sidebar__user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "logout-btn", 3, "click"], [1, "main"], [1, "topbar"], [1, "topbar__left"], [1, "topbar__date"], [1, "topbar__right"], [1, "hamburger-btn", 3, "click"], ["class", "btn-sm-primary", 3, "click", 4, "ngIf"], [1, "notif-wrapper"], [1, "icon-btn", "notif-btn", 3, "click"], ["class", "notif-dot", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], [1, "icon-btn", 3, "click"], [4, "ngIf"], [3, "click"], [1, "toast-close"], [1, "notif-backdrop", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", "modal-panel--monitor", 3, "click"], [1, "modal-header"], [1, "avatar-lg"], [2, "flex", "1"], [2, "margin-bottom", "2px"], [2, "font-size", "12px", "color", "var(--c-text-3)"], [1, "badge", 3, "ngClass"], [1, "modal-close-btn", 3, "click"], [1, "modal-body"], [1, "modal-stat-row", "modal-stat-row--3"], [1, "modal-stat"], [1, "modal-stat-lbl"], [1, "modal-stat-val", "mono"], [1, "modal-actions"], [1, "btn-sm-primary", 3, "click"], [1, "btn-outline-sm", 3, "click"], [2, "font-size", "12px", "color", "var(--c-text-3)", "margin-bottom", "14px"], [1, "form-grid"], [1, "form-field"], ["type", "text", "placeholder", "Ex: 128/82", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "30", "max", "200", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "100", "max", "500", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "10", "step", "0.1", 3, "ngModelChange", "ngModel"], [1, "modal-panel", "modal-panel--sm", 3, "click"], [1, "modal-header", "modal-header--simple"], [1, "form-field", "form-field--full"], [1, "req"], ["type", "text", "placeholder", "Ex: Contr\xF4ler PA \u2014 Patient X", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom du patient", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "standard"], ["value", "urgent"], [1, "modal-panel", "modal-panel--rapport", 3, "click"], [1, "modal-patient-info"], [1, "rapport-header-grid"], [1, "rapport-info-item"], [1, "mono"], [1, "rapport-section-label"], [1, "rapport-vitals-grid"], [1, "rapport-vital"], [1, "rv-lbl"], [1, "rv-val", "mono"], [1, "rapport-text-block"], ["class", "rapport-soins-list", 4, "ngIf"], ["class", "rapport-text-block", "style", "color:var(--c-text-3)", 4, "ngIf"], [1, "rapport-soins-list"], ["class", "rapport-soin-item", 4, "ngFor", "ngForOf"], [1, "rapport-soin-item"], [1, "rapport-text-block", 2, "color", "var(--c-text-3)"], [1, "modal-panel", "modal-panel--fiche", 3, "click"], [1, "patho-tag"], [2, "color", "var(--c-red)"], [4, "ngIf", "ngIfElse"], ["class", "rapport-soin-item rapport-soin-item--pending", 4, "ngFor", "ngForOf"], [1, "ord-fiche-card"], [1, "ord-fiche-dates"], [1, "badge", "ok"], [1, "ord-fiche-row"], [1, "ord-fiche-lbl"], [1, "ord-fiche-val"], [1, "ord-fiche-val", "ord-fiche-val--warn"], [1, "rapport-soin-item", "rapport-soin-item--pending"], [1, "btn-teal-xs", 2, "margin-left", "auto", 3, "click"], [1, "notif-dot"], [1, "notif-panel"], [1, "notif-panel__head"], [1, "notif-read-all", 3, "click"], [1, "notif-list"], ["class", "notif-item", 3, "notif-item--unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-content"], ["class", "notif-unread-dot", 4, "ngIf"], [1, "notif-unread-dot"], [1, "kpi-row"], [1, "kpi-card", 2, "cursor", "pointer", 3, "click"], [1, "kpi-icon", 2, "background", "var(--c-teal-soft)"], [1, "material-icons", 2, "color", "var(--c-teal)"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-lbl"], [1, "kpi-icon", 2, "background", "var(--c-blue-soft)"], [1, "material-icons", 2, "color", "var(--c-blue)"], [1, "kpi-trend", 2, "color", "var(--c-blue)"], [1, "kpi-icon", 2, "background", "var(--c-amber-soft)"], [1, "material-icons", 2, "color", "var(--c-amber)"], ["class", "kpi-trend warn", 4, "ngIf"], [1, "kpi-card"], [1, "kpi-icon", 2, "background", "var(--c-green-soft)"], [1, "material-icons", 2, "color", "var(--c-green)"], [1, "kpi-trend", "up"], [1, "content-grid"], [1, "panel"], [1, "panel__head"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "badge", "info"], [1, "monitoring-grid"], ["class", "monitor-card", "style", "cursor:pointer", 3, "warn-card", "click", 4, "ngFor", "ngForOf"], [1, "right-col"], [1, "task-list"], ["class", "task-item", 4, "ngFor", "ngForOf"], ["class", "task-item done", 4, "ngFor", "ngForOf"], [1, "panel__footer"], [2, "cursor", "pointer", 3, "click"], [1, "machine-list"], ["class", "machine-row", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "kpi-trend", "warn"], [1, "monitor-card", 2, "cursor", "pointer", 3, "click"], [1, "monitor-card__header"], [1, "patient-cell"], [1, "avatar-sm"], [1, "vitals-row"], [1, "vital"], [1, "vital-lbl"], [1, "vital-val", 3, "ngClass"], [1, "vital-unit"], [1, "vital-val"], [1, "session-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "task-item"], [1, "task-check", "urgent"], [1, "task-body"], [1, "btn-teal-xs", 3, "click"], [1, "task-check"], [1, "task-item", "done"], [1, "task-check", "done"], [1, "machine-row", 2, "cursor", "pointer", 3, "click"], [1, "machine-id"], [1, "machine-name"], ["class", "alert-banner", 4, "ngIf"], [1, "monitor-fullgrid"], ["class", "monitor-card monitor-card--full", "style", "cursor:pointer", 3, "warn-card", "click", 4, "ngFor", "ngForOf"], [1, "alert-banner"], [1, "monitor-card", "monitor-card--full", 2, "cursor", "pointer", 3, "click"], [1, "avatar-sm", 2, "width", "40px", "height", "40px", "font-size", "14px"], [2, "font-size", "15px"], [1, "badge", "badge--lg", 3, "ngClass"], [1, "vitals-row", "vitals-row--lg"], [1, "vital", "vital--lg"], [1, "vital-val", "vital-val--lg", 3, "ngClass"], [1, "vital-val", "vital-val--lg"], [1, "session-progress", 2, "margin-top", "12px"], [1, "progress-bar", 2, "height", "8px"], [1, "monitor-card__actions", 3, "click"], ["class", "btn-outline-sm", 3, "click", 4, "ngIf"], [1, "kpi-row", 2, "margin-bottom", "16px"], [1, "kpi-icon", 2, "background", "var(--c-purple-soft, rgba(167,139,250,.1))"], [1, "material-icons", 2, "color", "var(--c-purple)"], [1, "panel", "panel--full"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "row-actions-mini"], ["title", "Voir le rapport", 1, "row-btn", "row-btn--rapport", 3, "click"], [1, "section-bar"], [1, "section-bar__filters"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "task-list", "task-list--full"], ["class", "task-group-label task-group-label--urgent", 4, "ngIf"], ["class", "task-item task-item--full", 4, "ngFor", "ngForOf"], ["class", "task-group-label", 4, "ngIf"], ["class", "task-group-label task-group-label--done", 4, "ngIf"], ["class", "task-item task-item--full done", 4, "ngFor", "ngForOf"], ["class", "empty-row", 4, "ngIf"], [1, "task-group-label", "task-group-label--urgent"], [1, "task-item", "task-item--full"], [2, "display", "flex", "gap", "6px"], ["title", "Supprimer", 1, "row-btn", 3, "click"], [1, "task-group-label"], [1, "task-group-label", "task-group-label--done"], [1, "task-item", "task-item--full", "done"], [1, "empty-row"], ["value", "normal"], [2, "font-size", "13px", "color", "var(--c-text-3)"], [3, "row-done", 4, "ngFor", "ngForOf"], [1, "soin-type-tag"], [2, "font-size", "12px", "color", "var(--c-text-2)", "max-width", "280px"], ["class", "btn-teal-xs", 3, "click", 4, "ngIf"], ["style", "font-size:11px;color:var(--c-green)", 4, "ngIf"], [1, "material-icons", 2, "font-size", "14px"], [2, "font-size", "11px", "color", "var(--c-green)"], ["colspan", "7", 1, "empty-row"], [1, "search-mini"], ["type", "text", "placeholder", "Rechercher un patient\u2026", 3, "ngModelChange", "ngModel"], [1, "mes-patients-grid"], ["class", "patient-fiche-card", 3, "patient-fiche-card--warn", "patient-fiche-card--crit", 4, "ngFor", "ngForOf"], ["class", "empty-row panel panel--full", 4, "ngIf"], [1, "patient-fiche-card"], [1, "pfc-header"], [1, "pfc-avatar"], [1, "pfc-identity"], [1, "pfc-vitals"], [1, "pfc-vital"], [1, "pfc-antecedents"], ["class", "pfc-ordonnance", 4, "ngIf"], ["class", "pfc-soins-count", 4, "ngIf"], [1, "pfc-actions"], [1, "pfc-ordonnance"], [1, "pfc-ord-content"], [1, "pfc-ord-label"], [1, "pfc-ord-meds"], [1, "badge", "ok", 2, "margin-left", "auto"], [1, "pfc-soins-count"], [1, "badge", "warn", 2, "margin-left", "auto"], [1, "empty-row", "panel", "panel--full"], [1, "kpi-icon", 2, "background", "var(--c-red-soft)"], [1, "material-icons", 2, "color", "var(--c-red)"], [1, "machines-grid"], ["class", "machine-card", 3, "machine-card--warn", "machine-card--ok", "machine-card--busy", 4, "ngFor", "ngForOf"], [1, "machine-card"], [1, "machine-card__head"], [1, "machine-card__id"], [1, "machine-card__model"], ["class", "machine-card__info", 4, "ngIf"], ["class", "machine-card__info", "style", "color:var(--c-green)", 4, "ngIf"], ["class", "machine-card__info", "style", "color:var(--c-red)", 4, "ngIf"], [1, "machine-card__actions"], [1, "btn-outline-sm", "btn-warn", 3, "click"], [1, "machine-card__info"], [2, "margin-left", "8px"], [1, "machine-card__info", 2, "color", "var(--c-green)"], [1, "machine-card__info", 2, "color", "var(--c-red)"]], template: function InfirmierComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, InfirmierComponent_div_1_Template, 8, 5, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, InfirmierComponent_div_2_Template, 1, 0, "div", 3)(3, InfirmierComponent_div_3_Template, 18, 8, "div", 4)(4, InfirmierComponent_div_4_Template, 35, 3, "div", 4)(5, InfirmierComponent_div_5_Template, 109, 20, "div", 4)(6, InfirmierComponent_div_6_Template, 79, 24, "div", 4);
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
      \u0275\u0275listener("click", function InfirmierComponent_Template_div_click_8_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "aside", 7)(10, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10)(13, "path", 11)(14, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "DialySys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "nav", 13)(18, "div", 14);
      \u0275\u0275text(19, "Mon Espace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 15);
      \u0275\u0275listener("click", function InfirmierComponent_Template_a_click_20_listener() {
        return ctx.setSection("dashboard");
      });
      \u0275\u0275elementStart(21, "span", 16);
      \u0275\u0275text(22, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "a", 15);
      \u0275\u0275listener("click", function InfirmierComponent_Template_a_click_25_listener() {
        return ctx.setSection("seances");
      });
      \u0275\u0275elementStart(26, "span", 16);
      \u0275\u0275text(27, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Mes S\xE9ances");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 17);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "a", 15);
      \u0275\u0275listener("click", function InfirmierComponent_Template_a_click_32_listener() {
        return ctx.setSection("taches");
      });
      \u0275\u0275elementStart(33, "span", 16);
      \u0275\u0275text(34, "task_alt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Mes T\xE2ches");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 18);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "a", 15);
      \u0275\u0275listener("click", function InfirmierComponent_Template_a_click_39_listener() {
        return ctx.setSection("patients");
      });
      \u0275\u0275elementStart(40, "span", 16);
      \u0275\u0275text(41, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Mes Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 17);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 14);
      \u0275\u0275text(47, "Soins");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 15);
      \u0275\u0275listener("click", function InfirmierComponent_Template_a_click_48_listener() {
        return ctx.setSection("monitoring");
      });
      \u0275\u0275elementStart(49, "span", 16);
      \u0275\u0275text(50, "monitor_heart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Monitoring");
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, InfirmierComponent_span_53_Template, 2, 0, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 15);
      \u0275\u0275listener("click", function InfirmierComponent_Template_a_click_54_listener() {
        return ctx.setSection("soins");
      });
      \u0275\u0275elementStart(55, "span", 16);
      \u0275\u0275text(56, "medical_services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Soins Infirmiers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 17);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "a", 15);
      \u0275\u0275listener("click", function InfirmierComponent_Template_a_click_61_listener() {
        return ctx.setSection("machines");
      });
      \u0275\u0275elementStart(62, "span", 16);
      \u0275\u0275text(63, "precision_manufacturing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Machines");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 20);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 21)(69, "div", 22);
      \u0275\u0275text(70, "IN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 23)(72, "span", 24);
      \u0275\u0275text(73, "Inf. N. Tazi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 25);
      \u0275\u0275text(75, "Infirmier\xB7\xE8re");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 26);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_76_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(77, "span", 16);
      \u0275\u0275text(78, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 27)(80, "header", 28)(81, "div", 29)(82, "h1");
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 30);
      \u0275\u0275text(85, "Jeudi, 3 Avril 2026 \u2014 Vacation Matin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 31)(87, "button", 32);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_87_listener() {
        return ctx.sidebarOpen = !ctx.sidebarOpen;
      });
      \u0275\u0275elementStart(88, "span", 16);
      \u0275\u0275text(89, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(90, InfirmierComponent_button_90_Template, 4, 0, "button", 33);
      \u0275\u0275elementStart(91, "div", 34)(92, "button", 35);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_92_listener() {
        return ctx.toggleNotifPanel();
      });
      \u0275\u0275elementStart(93, "span", 16);
      \u0275\u0275text(94, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275template(95, InfirmierComponent_span_95_Template, 1, 0, "span", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275template(96, InfirmierComponent_div_96_Template, 8, 1, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "button", 38);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_97_listener() {
        return ctx.openSettings();
      });
      \u0275\u0275elementStart(98, "span", 16);
      \u0275\u0275text(99, "settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(100, InfirmierComponent_ng_container_100_Template, 83, 13, "ng-container", 39)(101, InfirmierComponent_ng_container_101_Template, 4, 2, "ng-container", 39)(102, InfirmierComponent_ng_container_102_Template, 56, 5, "ng-container", 39)(103, InfirmierComponent_ng_container_103_Template, 25, 10, "ng-container", 39)(104, InfirmierComponent_ng_container_104_Template, 35, 7, "ng-container", 39)(105, InfirmierComponent_ng_container_105_Template, 12, 4, "ng-container", 39)(106, InfirmierComponent_ng_container_106_Template, 31, 4, "ng-container", 39);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPatientModal && ctx.selectedPatient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddTaskModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRapportModal && ctx.selectedRapport);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPatientFicheModal && ctx.selectedPatientFiche);
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.activeSection === "dashboard");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeSection === "seances");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.mesSeances.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "taches");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.urgentPending.length + ctx.standardPending.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "patients");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.mesPatients.length);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeSection === "monitoring");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.warnPatientsCount > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "soins");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.soinsUrgents.length + ctx.soinsNormaux.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeSection === "machines");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.availableMachinesCount);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.sectionTitle);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.activeSection === "taches");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifPanel);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeSection === "dashboard");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "monitoring");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "seances");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "taches");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "soins");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "patients");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeSection === "machines");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  height: 100dvh;\n}\n.monitoring-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n  padding: 16px;\n}\n.monitor-card[_ngcontent-%COMP%] {\n  background: var(--c-card-hi);\n  border: 1px solid var(--c-border);\n  border-radius: var(--radius);\n  padding: 16px;\n  transition: border-color 0.2s;\n}\n.monitor-card.warn-card[_ngcontent-%COMP%] {\n  border-color: rgba(245, 166, 35, 0.3);\n}\n.monitor-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n}\n.monitor-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  gap: 8px;\n}\n.vitals-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.vital[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 2px;\n  background: var(--c-surface);\n  border-radius: 8px;\n  padding: 8px 4px;\n}\n.vital[_ngcontent-%COMP%]   .vital-lbl[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  color: var(--c-text-3);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.vital[_ngcontent-%COMP%]   .vital-val[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--c-text-1);\n  line-height: 1.1;\n}\n.vital[_ngcontent-%COMP%]   .vital-val.ok[_ngcontent-%COMP%] {\n  color: var(--c-green);\n}\n.vital[_ngcontent-%COMP%]   .vital-val.warn-val[_ngcontent-%COMP%] {\n  color: var(--c-amber);\n}\n.vital[_ngcontent-%COMP%]   .vital-unit[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: var(--c-text-3);\n}\n.session-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.session-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n  white-space: nowrap;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: var(--c-surface);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--c-teal);\n  border-radius: 99px;\n  transition: width 0.3s ease;\n}\n.progress-fill.warn[_ngcontent-%COMP%] {\n  background: var(--c-amber);\n}\n.task-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.task-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.task-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.task-item.done[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.task-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.task-check[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-text-3);\n}\n.task-check.urgent[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.task-check.done[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-green);\n}\n.task-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.task-body[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.task-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.machine-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.machine-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.machine-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.machine-id[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--c-teal);\n  width: 36px;\n  flex-shrink: 0;\n}\n.machine-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12.5px;\n  color: var(--c-text-2);\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 193, 7, 0.1);\n  border: 1px solid rgba(255, 193, 7, 0.3);\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: var(--c-amber);\n}\n.alert-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.monitor-fullgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 16px;\n}\n.monitor-card--full[_ngcontent-%COMP%]   .monitor-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--c-border);\n}\n.vitals-row--lg[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(5, 1fr);\n}\n.vital--lg[_ngcontent-%COMP%] {\n  padding: 12px 6px;\n}\n.vital--lg[_ngcontent-%COMP%]   .vital-val--lg[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n.section-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.section-bar__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  color: var(--c-text-1);\n  font-size: 13px;\n  cursor: pointer;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--c-teal);\n}\n.row-actions-mini[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.task-list--full[_ngcontent-%COMP%] {\n  padding: 0 4px;\n}\n.task-item--full[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  gap: 12px;\n}\n.task-group-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 16px 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.task-group-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.task-group-label--urgent[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.task-group-label--done[_ngcontent-%COMP%] {\n  color: var(--c-green);\n}\n.soin-type-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background: rgba(0, 217, 196, 0.1);\n  color: var(--c-teal);\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.row-done[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.machines-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 14px;\n}\n.machine-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1.5px solid var(--c-border);\n  border-radius: 12px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color 0.2s;\n}\n.machine-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-border-hi);\n}\n.machine-card--ok[_ngcontent-%COMP%] {\n  border-color: rgba(0, 217, 196, 0.25);\n  background: rgba(0, 217, 196, 0.03);\n}\n.machine-card--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.25);\n  background: rgba(255, 87, 87, 0.03);\n}\n.machine-card--busy[_ngcontent-%COMP%] {\n  border-color: rgba(41, 182, 246, 0.2);\n}\n.machine-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.machine-card__id[_ngcontent-%COMP%] {\n  font-family: var(--f-mono);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--c-teal);\n}\n.machine-card__model[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-2);\n}\n.machine-card__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.machine-card__info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.machine-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--c-border);\n}\n.btn-warn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-red) !important;\n  color: var(--c-red) !important;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--c-text-3);\n  padding: 32px 16px !important;\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.badge--lg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 12px;\n}\n.modal-panel--monitor[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.modal-stat-row--3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.panel__footer[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 12px;\n  color: var(--c-text-3);\n  border-top: 1px solid var(--c-border);\n}\n.panel__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  cursor: pointer;\n  text-decoration: none;\n}\n.panel__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.modal-header--simple[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.modal-header--simple[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--c-red);\n}\n.modal-panel--rapport[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n.modal-panel--fiche[_ngcontent-%COMP%] {\n  max-width: 680px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-panel--fiche[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  min-height: 0;\n}\n.rapport-header-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.rapport-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 10px 14px;\n  border-right: 1px solid var(--c-border);\n  border-bottom: 1px solid var(--c-border);\n}\n.rapport-info-item[_ngcontent-%COMP%]:nth-child(3n) {\n  border-right: none;\n}\n.rapport-info-item[_ngcontent-%COMP%]:nth-last-child(-n+3) {\n  border-bottom: none;\n}\n.rapport-info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.rapport-info-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n  font-weight: 600;\n}\n.rapport-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n  margin-top: 4px;\n}\n.rapport-section-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n}\n.rapport-vitals-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.rapport-vital[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.rapport-vital--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.4);\n  background: rgba(255, 193, 7, 0.04);\n}\n.rv-lbl[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n}\n.rv-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.rapport-text-block[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--c-text-2);\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.rapport-text-block--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.4);\n  background: rgba(255, 193, 7, 0.04);\n  color: var(--c-amber);\n}\n.rapport-soins-list[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rapport-soin-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--c-text-1);\n  padding: 8px 12px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 7px;\n}\n.rapport-soin-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-green);\n  flex-shrink: 0;\n}\n.rapport-soin-item--pending[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-blue);\n}\n.mes-patients-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 16px;\n}\n.patient-fiche-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1.5px solid var(--c-border);\n  border-radius: 14px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.patient-fiche-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.07);\n}\n.patient-fiche-card--warn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 193, 7, 0.4);\n}\n.patient-fiche-card--crit[_ngcontent-%COMP%] {\n  border-color: rgba(255, 87, 87, 0.4);\n}\n.pfc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.pfc-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background: var(--c-teal-soft);\n  border: 2px solid var(--c-teal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--c-teal);\n  flex-shrink: 0;\n}\n.pfc-avatar--crit[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.1);\n  border-color: var(--c-red);\n  color: var(--c-red);\n}\n.pfc-identity[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pfc-identity[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--c-text-1);\n  margin-bottom: 2px;\n}\n.pfc-identity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.pfc-vitals[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.pfc-vital[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 12px;\n}\n.pfc-vital[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.pfc-vital[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.pfc-vital[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--c-text-3);\n  font-weight: 600;\n}\n.pfc-vital[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-1);\n}\n.pfc-antecedents[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--c-text-2);\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 10px 12px;\n  line-height: 1.5;\n}\n.pfc-antecedents[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-3);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.pfc-soins-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--c-amber);\n  font-weight: 600;\n}\n.pfc-soins-count[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.pfc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.row-btn--rapport[_ngcontent-%COMP%] {\n  color: var(--c-teal) !important;\n  border-color: rgba(0, 217, 196, 0.3) !important;\n}\n.row-btn--rapport[_ngcontent-%COMP%]:hover {\n  background: var(--c-teal-soft) !important;\n}\n.ord-fiche-card[_ngcontent-%COMP%] {\n  background: var(--c-surface);\n  border: 1px solid var(--c-border);\n  border-left: 3px solid var(--c-teal);\n  border-radius: 8px;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ord-fiche-dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 11.5px;\n  color: var(--c-text-2);\n}\n.ord-fiche-dates[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ord-fiche-dates[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-teal);\n}\n.ord-fiche-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ord-fiche-lbl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--c-text-3);\n}\n.ord-fiche-lbl[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ord-fiche-val[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--c-text-1);\n  line-height: 1.5;\n  padding-left: 2px;\n}\n.ord-fiche-val--warn[_ngcontent-%COMP%] {\n  color: var(--c-amber);\n  font-style: italic;\n}\n.pfc-ordonnance[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: rgba(0, 217, 196, 0.05);\n  border: 1px solid rgba(0, 217, 196, 0.2);\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.pfc-ordonnance[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--c-teal);\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.pfc-ord-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.pfc-ord-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--c-teal);\n}\n.pfc-ord-meds[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--c-text-2);\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 1100px) {\n  .content-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .right-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .main-scroll[_ngcontent-%COMP%] {\n    padding: 0 12px 12px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .tabs-row[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .grid-2col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=infirmier.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfirmierComponent, { className: "InfirmierComponent", filePath: "app\\pages\\infirmier\\infirmier.component.ts", lineNumber: 93 });
})();
export {
  InfirmierComponent
};
//# sourceMappingURL=chunk-TQUOSBE4.js.map
