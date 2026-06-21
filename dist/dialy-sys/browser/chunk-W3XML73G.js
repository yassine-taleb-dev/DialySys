import {
  OrdonnanceService,
  PatientInstructionsService
} from "./chunk-PNJLX44P.js";
import {
  AlerteService,
  ConstantesVitalesService
} from "./chunk-SU363RGH.js";
import {
  SeanceService
} from "./chunk-U5D5UQBA.js";
import {
  PatientService
} from "./chunk-XXOLSQYR.js";
import {
  AuthService
} from "./chunk-LFASSBRV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-I57MQ5R6.js";
import {
  CommonModule,
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

// src/app/pages/infirmier/infirmier.component.ts
function InfirmierComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function InfirmierComponent_button_1_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(t_r2.id));
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
function InfirmierComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.unreadCount > 99 ? "99+" : ctx_r2.unreadCount);
  }
}
function InfirmierComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function InfirmierComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.notifOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_35_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.unreadCount, " non lue", ctx_r2.unreadCount > 1 ? "s" : "", "");
  }
}
function InfirmierComponent_div_35_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Tout lu");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_35_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_div_35_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune alerte ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_35_div_10_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function InfirmierComponent_div_35_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function InfirmierComponent_div_35_div_10_div_1_Template_div_click_0_listener() {
      const a_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPatientFromNotif(a_r7));
    });
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, InfirmierComponent_div_35_div_10_div_1_span_10_Template, 1, 0, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMapInterpolate1("notif-card ", ctx_r2.alerteTypeClass(a_r7.type), "");
    \u0275\u0275classProp("notif-card--read", a_r7.lue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alerteTypeIcon(a_r7.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", a_r7.patient == null ? null : a_r7.patient.prenom, " ", a_r7.patient == null ? null : a_r7.patient.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alerteTimeLabel(a_r7.dateCreation));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r7.lue);
  }
}
function InfirmierComponent_div_35_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, InfirmierComponent_div_35_div_10_div_1_Template, 11, 11, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.allAlertes);
  }
}
function InfirmierComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function InfirmierComponent_div_35_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "span", 15);
    \u0275\u0275text(3, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Alertes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InfirmierComponent_div_35_span_6_Template, 2, 2, "span", 32)(7, InfirmierComponent_div_35_span_7_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InfirmierComponent_div_35_div_8_Template, 3, 0, "div", 34)(9, InfirmierComponent_div_35_div_9_Template, 4, 0, "div", 35)(10, InfirmierComponent_div_35_div_10_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.unreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.unreadCount === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingNotif);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingNotif && ctx_r2.allAlertes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingNotif && ctx_r2.allAlertes.length > 0);
  }
}
function InfirmierComponent_ng_container_49_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du planning\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_49_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 15);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.planningError, " ");
  }
}
function InfirmierComponent_ng_container_49_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 15);
    \u0275\u0275text(2, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune s\xE9ance planifi\xE9e pour aujourd'hui.");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " \u2192 ");
    \u0275\u0275elementStart(2, "button", 74);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_4_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const s_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.startEditFin(s_r10));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 75);
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", s_r10.heureFinPrevue, " ");
  }
}
function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " \u2192 ");
    \u0275\u0275elementStart(2, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_5_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r12);
      const s_r10 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(s_r10.editFinValue, $event) || (s_r10.editFinValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_5_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r12);
      const s_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveEditFin(s_r10));
    })("keyup.enter", function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_5_Template_input_keyup_enter_2_listener() {
      \u0275\u0275restoreView(_r12);
      const s_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveEditFin(s_r10));
    })("click", function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_5_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r10.editFinValue);
  }
}
function InfirmierComponent_ng_container_49_div_17_tr_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 15);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_4_Template, 6, 1, "ng-container", 25)(5, InfirmierComponent_ng_container_49_div_17_tr_13_div_8_ng_container_5_Template, 3, 1, "ng-container", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" D\xE9but ", s_r10.heureDebut, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.heureFinPrevue && !s_r10.editingFin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.editingFin);
  }
}
function InfirmierComponent_ng_container_49_div_17_tr_13_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_49_div_17_tr_13_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const s_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDemarrerModal(s_r10));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9marrer ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_49_div_17_tr_13_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 78)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_49_div_17_tr_13_ng_container_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const s_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.terminerSeance(s_r10));
    });
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Terminer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("planning-timer--overdue", ctx_r2.isOverdue(s_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isOverdue(s_r10) ? "alarm_off" : "timer");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.remainingLabel(s_r10), " ");
  }
}
function InfirmierComponent_ng_container_49_div_17_tr_13_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80)(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Termin\xE9e", s_r10.heureFin ? " \xE0 " + s_r10.heureFin : "", " ");
  }
}
function InfirmierComponent_ng_container_49_div_17_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 65);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_49_div_17_tr_13_Template_div_click_2_listener() {
      const s_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectPatientById(s_r10.patientId));
    });
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InfirmierComponent_ng_container_49_div_17_tr_13_div_8_Template, 6, 3, "div", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "span", 68);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 69);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 70);
    \u0275\u0275template(16, InfirmierComponent_ng_container_49_div_17_tr_13_button_16_Template, 4, 0, "button", 71)(17, InfirmierComponent_ng_container_49_div_17_tr_13_ng_container_17_Template, 9, 4, "ng-container", 25)(18, InfirmierComponent_ng_container_49_div_17_tr_13_span_18_Template, 4, 1, "span", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("planning-row--encours", s_r10.statut === "EN_COURS")("planning-row--done", s_r10.statut === "TERMINEE");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r10.patientInit);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r10.patientNom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.heureDebut);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.creneauLabel(s_r10.creneau));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill--warn", s_r10.statut === "PLANIFIEE")("pill--ok", s_r10.statut === "EN_COURS")("pill--stable", s_r10.statut === "TERMINEE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statutLabel(s_r10.statut), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r10.statut === "PLANIFIEE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.statut === "EN_COURS");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r10.statut === "TERMINEE");
  }
}
function InfirmierComponent_ng_container_49_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "table", 63)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cr\xE9neau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Action / Temps restant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, InfirmierComponent_ng_container_49_div_17_tr_13_Template, 19, 18, "tr", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r2.seances);
  }
}
function InfirmierComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53)(3, "span", 15);
    \u0275\u0275text(4, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7, "Planning du jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 54);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_49_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadPlanning());
    });
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Actualiser ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, InfirmierComponent_ng_container_49_div_14_Template, 4, 0, "div", 55)(15, InfirmierComponent_ng_container_49_div_15_Template, 4, 1, "div", 56)(16, InfirmierComponent_ng_container_49_div_16_Template, 5, 0, "div", 57)(17, InfirmierComponent_ng_container_49_div_17_Template, 14, 1, "div", 58);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.todayLabel());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingPlanning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPlanning && ctx_r2.planningError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPlanning && !ctx_r2.planningError && ctx_r2.seances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPlanning && !ctx_r2.planningError && ctx_r2.seances.length > 0);
  }
}
function InfirmierComponent_ng_container_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des patients... ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 15);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadError, " ");
  }
}
function InfirmierComponent_ng_container_50_div_3_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 85);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_50_div_3_tr_16_Template_tr_click_0_listener() {
      const p_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectPatient(p_r16));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 86)(3, "span", 66);
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
    \u0275\u0275elementStart(15, "td")(16, "span", 87);
    \u0275\u0275text(17, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r16.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r16.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r16.age > 0 ? p_r16.age + " ans" : "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r16.cin || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r16.groupeSanguin || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r16.genre || "-");
  }
}
function InfirmierComponent_ng_container_50_div_3_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 88)(2, "span", 89);
    \u0275\u0275text(3, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Aucun patient trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_ng_container_50_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "table", 83)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275text(13, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, InfirmierComponent_ng_container_50_div_3_tr_16_Template, 18, 6, "tr", 84)(17, InfirmierComponent_ng_container_50_div_3_tr_17_Template, 5, 0, "tr", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.filteredPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredPatients.length === 0);
  }
}
function InfirmierComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InfirmierComponent_ng_container_50_div_1_Template, 4, 0, "div", 55)(2, InfirmierComponent_ng_container_50_div_2_Template, 4, 1, "div", 56)(3, InfirmierComponent_ng_container_50_div_3_Template, 18, 2, "div", 81);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingPatients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPatients && ctx_r2.loadError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPatients && !ctx_r2.loadError);
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_strong_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const seance_r18 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S\xE9ance pr\xE9vue \u2014 ", ctx_r2.creneauLabel(seance_r18.creneau), "");
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_strong_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const seance_r18 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S\xE9ance en cours \u2014 ", ctx_r2.creneauLabel(seance_r18.creneau), "");
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_strong_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const seance_r18 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S\xE9ance termin\xE9e \u2014 ", ctx_r2.creneauLabel(seance_r18.creneau), "");
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const seance_r18 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Fin pr\xE9vue ", seance_r18.heureFinPrevue, " \xB7 ");
    \u0275\u0275advance();
    \u0275\u0275classProp("seance-banner__timer--overdue", ctx_r2.isOverdue(seance_r18));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.remainingLabel(seance_r18));
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const seance_r18 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Termin\xE9e \xE0 ", seance_r18.heureFin, " ");
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_ng_container_14_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const seance_r18 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDemarrerModal(seance_r18));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9marrer ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_ng_container_14_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const seance_r18 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.terminerSeance(seance_r18));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Terminer ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_51_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 98)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 99);
    \u0275\u0275template(5, InfirmierComponent_ng_container_51_ng_container_14_strong_5_Template, 2, 1, "strong", 25)(6, InfirmierComponent_ng_container_51_ng_container_14_strong_6_Template, 2, 1, "strong", 25)(7, InfirmierComponent_ng_container_51_ng_container_14_strong_7_Template, 2, 1, "strong", 25)(8, InfirmierComponent_ng_container_51_ng_container_14_span_8_Template, 4, 4, "span", 25)(9, InfirmierComponent_ng_container_51_ng_container_14_span_9_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, InfirmierComponent_ng_container_51_ng_container_14_button_10_Template, 4, 0, "button", 100)(11, InfirmierComponent_ng_container_51_ng_container_14_button_11_Template, 4, 0, "button", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const seance_r18 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275classProp("seance-banner--planifiee", seance_r18.statut === "PLANIFIEE")("seance-banner--encours", seance_r18.statut === "EN_COURS")("seance-banner--terminee", seance_r18.statut === "TERMINEE");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", seance_r18.statut === "TERMINEE" ? "check_circle" : seance_r18.statut === "EN_COURS" ? "radio_button_checked" : "event", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", seance_r18.statut === "PLANIFIEE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", seance_r18.statut === "EN_COURS");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", seance_r18.statut === "TERMINEE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", seance_r18.statut === "EN_COURS" && seance_r18.heureFinPrevue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", seance_r18.statut === "TERMINEE" && seance_r18.heureFin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", seance_r18.statut === "PLANIFIEE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", seance_r18.statut === "EN_COURS");
  }
}
function InfirmierComponent_ng_container_51_div_15_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.patientUnreadCount);
  }
}
function InfirmierComponent_ng_container_51_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "button", 105);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("constantes"));
    });
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Constantes vitales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 105);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_div_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("ordonnances"));
    });
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Ordonnances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 105);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("instructions"));
    });
    \u0275\u0275elementStart(16, "span", 15);
    \u0275\u0275text(17, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Instructions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 106);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_div_15_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("alertes"));
    });
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22, "notifications_active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Alertes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, InfirmierComponent_ng_container_51_div_15_small_25_Template, 2, 1, "small", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "constantes");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.constantes.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "ordonnances");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.ordonnances.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "instructions");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("quick-btn--active", ctx_r2.activeTab === "alertes");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.patientUnreadCount > 0);
  }
}
function InfirmierComponent_ng_container_51_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "span", 40);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du dossier\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_51_section_17_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131)(1, "span", 15);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" S\xE9ance #", ctx_r2.activeSeanceId, " ");
  }
}
function InfirmierComponent_ng_container_51_section_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "span", 15);
    \u0275\u0275text(3, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Nouvelle saisie de constantes ");
    \u0275\u0275template(5, InfirmierComponent_ng_container_51_section_17_div_5_span_5_Template, 4, 1, "span", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 117)(7, "div", 118)(8, "label");
    \u0275\u0275text(9, "Tension Sys. ");
    \u0275\u0275elementStart(10, "span", 119);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 120)(13, "input", 121);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_51_section_17_div_5_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.cvForm.tensionSys, $event) || (ctx_r2.cvForm.tensionSys = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 122);
    \u0275\u0275text(15, "mmHg");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 118)(17, "label");
    \u0275\u0275text(18, "Tension Dia. ");
    \u0275\u0275elementStart(19, "span", 119);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 120)(22, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_51_section_17_div_5_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.cvForm.tensionDia, $event) || (ctx_r2.cvForm.tensionDia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 122);
    \u0275\u0275text(24, "mmHg");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 118)(26, "label");
    \u0275\u0275text(27, "Poids ");
    \u0275\u0275elementStart(28, "span", 119);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 120)(31, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_51_section_17_div_5_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.cvForm.poids, $event) || (ctx_r2.cvForm.poids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 122);
    \u0275\u0275text(33, "kg");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 118)(35, "label");
    \u0275\u0275text(36, "BPM ");
    \u0275\u0275elementStart(37, "span", 119);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 120)(40, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_51_section_17_div_5_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.cvForm.bpm, $event) || (ctx_r2.cvForm.bpm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 122);
    \u0275\u0275text(42, "bpm");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 126)(44, "label");
    \u0275\u0275text(45, "Notes (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "textarea", 127);
    \u0275\u0275twoWayListener("ngModelChange", function InfirmierComponent_ng_container_51_section_17_div_5_Template_textarea_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.cvForm.notes, $event) || (ctx_r2.cvForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 128)(48, "button", 129);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_section_17_div_5_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleForm());
    });
    \u0275\u0275text(49, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 130);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_section_17_div_5_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveConstantes());
    });
    \u0275\u0275elementStart(51, "span", 15);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.activeSeanceId);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cvForm.tensionSys);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cvForm.tensionDia);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cvForm.poids);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cvForm.bpm);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cvForm.notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isSaving ? "autorenew" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSaving ? "Enregistrement\u2026" : "Enregistrer", " ");
  }
}
function InfirmierComponent_ng_container_51_section_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 15);
    \u0275\u0275text(2, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune constante enregistr\xE9e pour ce patient.");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_ng_container_51_section_17_div_7_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142)(1, "span", 15);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", c_r24.saisiePar.prenom, " ", c_r24.saisiePar.nom, " ");
  }
}
function InfirmierComponent_ng_container_51_section_17_div_7_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "span", 15);
    \u0275\u0275text(2, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r24.notes, " ");
  }
}
function InfirmierComponent_ng_container_51_section_17_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span", 15);
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InfirmierComponent_ng_container_51_section_17_div_7_div_1_span_8_Template, 4, 2, "span", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 137)(10, "div", 138)(11, "span", 15);
    \u0275\u0275text(12, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "span", 139);
    \u0275\u0275text(15, "Tension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 140);
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19, "mmHg");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 138)(21, "span", 15);
    \u0275\u0275text(22, "monitor_weight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "span", 139);
    \u0275\u0275text(25, "Poids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 140);
    \u0275\u0275text(27);
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "kg");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 138)(31, "span", 15);
    \u0275\u0275text(32, "speed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "span", 139);
    \u0275\u0275text(35, "BPM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 140);
    \u0275\u0275text(37);
    \u0275\u0275elementStart(38, "small");
    \u0275\u0275text(39, "bpm");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(40, InfirmierComponent_ng_container_51_section_17_div_7_div_1_div_40_Template, 4, 1, "div", 141);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(c_r24.date));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("pill pill--", ctx_r2.tensionStatus(c_r24.tensionSys, c_r24.tensionDia), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.tensionLabel(c_r24.tensionSys, c_r24.tensionDia), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r24.saisiePar);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", c_r24.tensionSys, " / ", c_r24.tensionDia, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", c_r24.poids, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", c_r24.bpm, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", c_r24.notes);
  }
}
function InfirmierComponent_ng_container_51_section_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275template(1, InfirmierComponent_ng_container_51_section_17_div_7_div_1_Template, 41, 11, "div", 133);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.constantes);
  }
}
function InfirmierComponent_ng_container_51_section_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 110)(1, "button", 111);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_section_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleForm());
    });
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InfirmierComponent_ng_container_51_section_17_div_5_Template, 54, 9, "div", 112)(6, InfirmierComponent_ng_container_51_section_17_div_6_Template, 5, 0, "div", 57)(7, InfirmierComponent_ng_container_51_section_17_div_7_Template, 2, 1, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.showForm ? "close" : "add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.showForm ? "Annuler" : "Saisir des constantes", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantes.length === 0 && !ctx_r2.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantes.length > 0);
  }
}
function InfirmierComponent_ng_container_51_section_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 15);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune ordonnance pour ce patient.");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 153);
    \u0275\u0275text(2, "M\xE9dicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r25.medicaments);
  }
}
function InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 153);
    \u0275\u0275text(2, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r25.posologie);
  }
}
function InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 153);
    \u0275\u0275text(2, "Expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(o_r25.dateExpiration));
  }
}
function InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 153);
    \u0275\u0275text(2, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r25.instructions);
  }
}
function InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 153);
    \u0275\u0275text(2, "M\xE9decin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", o_r25.utilisateur.prenom, " ", o_r25.utilisateur.nom, "");
  }
}
function InfirmierComponent_ng_container_51_section_18_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148)(2, "span", 15);
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 149);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 150);
    \u0275\u0275template(11, InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_11_Template, 5, 1, "div", 151)(12, InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_12_Template, 5, 1, "div", 151)(13, InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_13_Template, 5, 1, "div", 151)(14, InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_14_Template, 5, 1, "div", 151)(15, InfirmierComponent_ng_container_51_section_18_div_2_div_1_div_15_Template, 5, 2, "div", 151);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r25 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ordonnance #", o_r25.id, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("pill pill--", ctx_r2.ordonnanceStatusTone(o_r25.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ordonnanceStatusLabel(o_r25.statut), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(o_r25.dateEmission));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", o_r25.medicaments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r25.posologie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r25.dateExpiration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r25.instructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r25.utilisateur);
  }
}
function InfirmierComponent_ng_container_51_section_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275template(1, InfirmierComponent_ng_container_51_section_18_div_2_div_1_Template, 16, 11, "div", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.ordonnances);
  }
}
function InfirmierComponent_ng_container_51_section_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 110);
    \u0275\u0275template(1, InfirmierComponent_ng_container_51_section_18_div_1_Template, 5, 0, "div", 57)(2, InfirmierComponent_ng_container_51_section_18_div_2_Template, 2, 1, "div", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ordonnances.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ordonnances.length > 0);
  }
}
function InfirmierComponent_ng_container_51_section_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 15);
    \u0275\u0275text(2, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune alerte pour ce patient.");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_ng_container_51_section_19_div_2_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 164);
    \u0275\u0275text(1, "Non lue");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_ng_container_51_section_19_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 158)(4, "div", 159)(5, "span", 160);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 161);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, InfirmierComponent_ng_container_51_section_19_div_2_div_1_span_9_Template, 2, 0, "span", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 163);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r26 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMapInterpolate1("alerte-card ", ctx_r2.alerteTypeClass(a_r26.type), "");
    \u0275\u0275classProp("alerte-card--read", a_r26.lue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alerteTypeIcon(a_r26.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r26.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.alerteTimeLabel(a_r26.dateCreation));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r26.lue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r26.message);
  }
}
function InfirmierComponent_ng_container_51_section_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275template(1, InfirmierComponent_ng_container_51_section_19_div_2_div_1_Template, 12, 10, "div", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.patientAlertes);
  }
}
function InfirmierComponent_ng_container_51_section_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 110);
    \u0275\u0275template(1, InfirmierComponent_ng_container_51_section_19_div_1_Template, 5, 0, "div", 57)(2, InfirmierComponent_ng_container_51_section_19_div_2_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.patientAlertes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.patientAlertes.length > 0);
  }
}
function InfirmierComponent_ng_container_51_section_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 15);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune instruction d\xE9finie pour ce patient.");
    \u0275\u0275elementEnd()();
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Poids sec");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.poidsSec, " kg");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Taille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.taille, " cm");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 172);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.instructions.groupeSanguin);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Abord vasculaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.instructions.abordVasculaire);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.instructions.localisationAbord);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Aiguilles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.instructions.aiguilles);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "TA Systolique cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.taSystoliqueCible, " mmHg");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "TA Diastolique cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.taDiastoliqueCible, " mmHg");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 166)(2, "span", 15);
    \u0275\u0275text(3, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Tensions de r\xE9f\xE9rence");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 167);
    \u0275\u0275template(7, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_14_div_7_Template, 5, 1, "div", 168)(8, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_14_div_8_Template, 5, 1, "div", 168);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.instructions.taSystoliqueCible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.taDiastoliqueCible);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Eprex");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.eprexDose || "-", " UI");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Recormon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.recormonDose || "-", " UI");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Fr\xE9quence EPO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.epoFrequence, "x / semaine");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 170)(2, "span", 171);
    \u0275\u0275text(3, "EPO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 173);
    \u0275\u0275text(5, "Actif");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_div_6_Template, 5, 1, "div", 168)(7, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_div_7_Template, 5, 1, "div", 168)(8, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_div_8_Template, 5, 1, "div", 168);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.instructions.eprex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.recormon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.epoFrequence);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Venofer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.venoferDose, " mg");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "span", 171);
    \u0275\u0275text(2, "Fr\xE9quence FER IV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.instructions.ferIvFrequence, "x / semaine");
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 170)(2, "span", 171);
    \u0275\u0275text(3, "FER IV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 173);
    \u0275\u0275text(5, "Actif");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_8_div_6_Template, 5, 1, "div", 168)(7, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_8_div_7_Template, 5, 1, "div", 168);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.instructions.venoferDose);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.ferIvFrequence);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 166)(2, "span", 15);
    \u0275\u0275text(3, "biotech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Traitement an\xE9mie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 167);
    \u0275\u0275template(7, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_7_Template, 9, 3, "ng-container", 25)(8, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_ng_container_8_Template, 8, 2, "ng-container", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.instructions.epoActif);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.ferIvActif);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 166)(2, "span", 15);
    \u0275\u0275text(3, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Allergies / Remarques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 167)(7, "p", 174);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.instructions.allergies);
  }
}
function InfirmierComponent_ng_container_51_section_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 165)(2, "div", 166)(3, "span", 15);
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Param\xE8tres dialyse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 167);
    \u0275\u0275template(8, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_8_Template, 5, 1, "div", 168)(9, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_9_Template, 5, 1, "div", 168)(10, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_10_Template, 5, 1, "div", 168)(11, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_11_Template, 5, 1, "div", 168)(12, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_12_Template, 5, 1, "div", 168)(13, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_13_Template, 5, 1, "div", 168);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_14_Template, 9, 2, "div", 169)(15, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_15_Template, 9, 2, "div", 169)(16, InfirmierComponent_ng_container_51_section_20_ng_container_2_div_16_Template, 9, 1, "div", 169);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.instructions.poidsSec);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.taille);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.groupeSanguin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.abordVasculaire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.localisationAbord);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.aiguilles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.taSystoliqueCible || ctx_r2.instructions.taDiastoliqueCible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.epoActif || ctx_r2.instructions.ferIvActif);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions.allergies);
  }
}
function InfirmierComponent_ng_container_51_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 110);
    \u0275\u0275template(1, InfirmierComponent_ng_container_51_section_20_div_1_Template, 5, 0, "div", 57)(2, InfirmierComponent_ng_container_51_section_20_ng_container_2_Template, 17, 9, "ng-container", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.instructions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.instructions);
  }
}
function InfirmierComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 90)(2, "div", 91);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 92)(5, "div", 93);
    \u0275\u0275text(6, "Dossier patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 94);
    \u0275\u0275listener("click", function InfirmierComponent_ng_container_51_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePatient());
    });
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, InfirmierComponent_ng_container_51_ng_container_14_Template, 12, 14, "ng-container", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, InfirmierComponent_ng_container_51_div_15_Template, 26, 11, "div", 95)(16, InfirmierComponent_ng_container_51_div_16_Template, 4, 0, "div", 96)(17, InfirmierComponent_ng_container_51_section_17_Template, 8, 5, "section", 97)(18, InfirmierComponent_ng_container_51_section_18_Template, 3, 2, "section", 97)(19, InfirmierComponent_ng_container_51_section_19_Template, 3, 2, "section", 97)(20, InfirmierComponent_ng_container_51_section_20_Template, 3, 2, "section", 97);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.initials);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.nomComplet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r2.selectedPatient.age, " ans \xB7 CIN ", ctx_r2.selectedPatient.cin || "-", " \xB7 N\xE9(e) le ", ctx_r2.fmtDate(ctx_r2.selectedPatient.dateNaissance), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.getSeanceToday(ctx_r2.selectedPatient.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "constantes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "ordonnances");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "alertes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.activeTab === "instructions");
  }
}
function InfirmierComponent_div_52_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 186);
    \u0275\u0275listener("click", function InfirmierComponent_div_52_button_13_Template_button_click_0_listener() {
      const opt_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedDureeMin = opt_r29.minutes);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inf-duree-btn--active", ctx_r2.selectedDureeMin === opt_r29.minutes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r29.label, " ");
  }
}
function InfirmierComponent_div_52_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187)(1, "span", 15);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Erreur lors du d\xE9marrage. Veuillez r\xE9essayer. ");
    \u0275\u0275elementEnd();
  }
}
function InfirmierComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 175);
    \u0275\u0275listener("click", function InfirmierComponent_div_52_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDemarrerModal());
    });
    \u0275\u0275elementStart(1, "div", 176);
    \u0275\u0275listener("click", function InfirmierComponent_div_52_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 177)(3, "span", 15);
    \u0275\u0275text(4, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7, "D\xE9marrer la s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 178);
    \u0275\u0275text(11, "Dur\xE9e de la s\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 179);
    \u0275\u0275template(13, InfirmierComponent_div_52_button_13_Template, 2, 3, "button", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 181)(15, "span", 15);
    \u0275\u0275text(16, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Fin pr\xE9vue \xE0 ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 182);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, InfirmierComponent_div_52_div_22_Template, 4, 0, "div", 183);
    \u0275\u0275elementStart(23, "div", 184)(24, "button", 54);
    \u0275\u0275listener("click", function InfirmierComponent_div_52_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDemarrerModal());
    });
    \u0275\u0275text(25, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 185);
    \u0275\u0275listener("click", function InfirmierComponent_div_52_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmerDemarrer());
    });
    \u0275\u0275elementStart(27, "span", 15);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.seanceADemarrer == null ? null : ctx_r2.seanceADemarrer.patientNom);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.dureeOptions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.heureFinPreview());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedDureeMin, " min");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.demarrerError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.isDemarrant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isDemarrant ? "autorenew" : "play_arrow");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isDemarrant ? "D\xE9marrage\u2026" : "Confirmer", " ");
  }
}
var InfirmierComponent = class _InfirmierComponent {
  authService;
  patientService;
  ordonnanceService;
  constantesService;
  instructionsService;
  seanceService;
  alerteService;
  isLight = false;
  isLoadingPatients = true;
  isLoadingPlanning = true;
  isLoadingDetails = false;
  loadError = "";
  planningError = "";
  currentUser = null;
  patients = [];
  searchQuery = "";
  activePage = "planning";
  selectedPatient = null;
  activeTab = "constantes";
  seances = [];
  now = /* @__PURE__ */ new Date();
  tickInterval = null;
  notifOpen = false;
  allAlertes = [];
  patientAlertes = [];
  isLoadingNotif = false;
  alertInterval = null;
  constantes = [];
  ordonnances = [];
  instructions = null;
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
  isDemarrant = false;
  showForm = false;
  isSaving = false;
  cvForm = { tensionSys: "", tensionDia: "", poids: "", bpm: "", notes: "" };
  tid = 0;
  toasts = [];
  constructor(authService, patientService, ordonnanceService, constantesService, instructionsService, seanceService, alerteService) {
    this.authService = authService;
    this.patientService = patientService;
    this.ordonnanceService = ordonnanceService;
    this.constantesService = constantesService;
    this.instructionsService = instructionsService;
    this.seanceService = seanceService;
    this.alerteService = alerteService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUtilisateur();
    this.loadPatients();
    this.loadPlanning();
    this.loadAllAlertes();
    this.tickInterval = setInterval(() => {
      this.now = /* @__PURE__ */ new Date();
      this.checkOverdueSessions();
    }, 3e4);
    this.alertInterval = setInterval(() => this.loadAllAlertes(), 6e4);
  }
  ngOnDestroy() {
    if (this.tickInterval)
      clearInterval(this.tickInterval);
    if (this.alertInterval)
      clearInterval(this.alertInterval);
  }
  // ── Planning ──────────────────────────────────────────────────────────────
  loadPlanning() {
    this.isLoadingPlanning = true;
    this.planningError = "";
    this.seanceService.getToday().subscribe({
      next: (list) => {
        this.seances = list.map((s) => this.toSeanceVM(s));
        this.isLoadingPlanning = false;
      },
      error: () => {
        this.isLoadingPlanning = false;
        this.planningError = "Impossible de charger le planning.";
      }
    });
  }
  toSeanceVM(s) {
    const prenom = s.patient?.prenom ?? "";
    const nom = s.patient?.nom ?? "";
    return {
      id: s.id,
      patientId: s.patient?.id ?? 0,
      patientNom: `${prenom} ${nom}`.trim(),
      patientInit: `${prenom[0] ?? ""}${nom[0] ?? ""}`.toUpperCase(),
      creneau: s.creneau ?? "-",
      statut: s.statut ?? "PLANIFIEE",
      heureDebut: this.timeFromIso(s.heureDebutEffective),
      heureFin: s.statut === "TERMINEE" ? this.timeFromIso(s.heureFinEffective) : null,
      heureFinPrevue: this.timeFromIso(s.heureFinEffective),
      dureeMinutes: s.dureeMinutes ?? null,
      date: s.date,
      editingFin: false,
      editFinValue: this.timeFromIso(s.heureFinEffective) ?? ""
    };
  }
  creneauLabel(c) {
    return { MATIN: "Matin", APRES_MIDI: "Apr\xE8s-midi", SOIR: "Soir" }[c] ?? c;
  }
  statutLabel(s) {
    return { PLANIFIEE: "Planifi\xE9e", EN_COURS: "En cours", TERMINEE: "Termin\xE9e" }[s] ?? s;
  }
  todayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  // ── Duration picker ───────────────────────────────────────────────────────
  openDemarrerModal(s) {
    this.seanceADemarrer = s;
    this.selectedDureeMin = 240;
    this.demarrerError = false;
    this.showDemarrerModal = true;
  }
  closeDemarrerModal() {
    this.showDemarrerModal = false;
    this.seanceADemarrer = null;
  }
  confirmerDemarrer() {
    if (!this.seanceADemarrer || this.isDemarrant)
      return;
    const n = /* @__PURE__ */ new Date();
    const heureDebut = `${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}`;
    const heureFinPrevue = this.addMinutesToTime(heureDebut, this.selectedDureeMin);
    this.isDemarrant = true;
    this.demarrerError = false;
    const seance = this.seanceADemarrer;
    this.seanceService.demarrer(seance.id, this.selectedDureeMin).subscribe({
      next: (dto) => {
        const vm = this.seances.find((x) => x.id === dto.id);
        if (vm) {
          const updated = this.toSeanceVM(dto);
          Object.assign(vm, updated);
          vm.statut = dto.statut ?? "EN_COURS";
          vm.heureDebut = updated.heureDebut ?? heureDebut;
          vm.heureFinPrevue = updated.heureFinPrevue ?? heureFinPrevue;
          vm.dureeMinutes = dto.dureeMinutes ?? this.selectedDureeMin;
          vm.editFinValue = vm.heureFinPrevue ?? "";
        }
        this.isDemarrant = false;
        this.closeDemarrerModal();
        this.showToast(`S\xE9ance d\xE9marr\xE9e \u2014 fin pr\xE9vue \xE0 ${heureFinPrevue}`, "success");
      },
      error: () => {
        this.isDemarrant = false;
        this.demarrerError = true;
      }
    });
  }
  addMinutesToTime(hhmm, minutes) {
    const parts = hhmm.split(":");
    const total = +parts[0] * 60 + +parts[1] + minutes;
    return `${String(Math.floor(total / 60) % 24).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
  }
  heureFinPreview() {
    const n = /* @__PURE__ */ new Date();
    const hhmm = `${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}`;
    return this.addMinutesToTime(hhmm, this.selectedDureeMin);
  }
  // ── Timer / auto-terminate ────────────────────────────────────────────────
  remainingLabel(s) {
    if (!s.heureFinPrevue || s.statut !== "EN_COURS")
      return "";
    const [fh, fm] = s.heureFinPrevue.split(":").map(Number);
    const finMs = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), fh, fm).getTime();
    const diffMin = Math.round((finMs - this.now.getTime()) / 6e4);
    if (diffMin <= 0)
      return "Heure de fin atteinte";
    if (diffMin < 60)
      return `Reste ${diffMin} min`;
    const h = Math.floor(diffMin / 60);
    const m = diffMin % 60;
    return m > 0 ? `Reste ${h}h ${m}min` : `Reste ${h}h`;
  }
  isOverdue(s) {
    if (!s.heureFinPrevue || s.statut !== "EN_COURS")
      return false;
    const [fh, fm] = s.heureFinPrevue.split(":").map(Number);
    const finMs = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), fh, fm).getTime();
    return this.now.getTime() >= finMs;
  }
  checkOverdueSessions() {
    this.seances.forEach((s) => {
      if (s.statut === "EN_COURS" && this.isOverdue(s)) {
        s.statut = "TERMINEE";
        this.seanceService.terminer(s.id).subscribe({
          next: (dto) => {
            s.statut = dto.statut ?? "TERMINEE";
            s.heureFin = this.timeFromIso(dto.heureFinEffective);
            this.showToast(`S\xE9ance de ${s.patientNom} termin\xE9e automatiquement.`, "info");
          },
          error: () => {
            s.statut = "EN_COURS";
          }
        });
      }
    });
  }
  // ── Terminate ─────────────────────────────────────────────────────────────
  terminerSeance(s) {
    this.seanceService.terminer(s.id).subscribe({
      next: (dto) => {
        s.statut = dto.statut ?? "TERMINEE";
        s.heureFin = this.timeFromIso(dto.heureFinEffective);
        this.showToast(`S\xE9ance de ${s.patientNom} termin\xE9e avec succ\xE8s.`, "success");
      },
      error: () => {
        this.showToast("Erreur lors de la terminaison de la s\xE9ance.", "error");
      }
    });
  }
  // ── Edit end time (client-side correction) ────────────────────────────────
  startEditFin(s) {
    s.editingFin = true;
    s.editFinValue = s.heureFinPrevue ?? "";
  }
  saveEditFin(s) {
    s.editingFin = false;
    if (s.editFinValue && s.editFinValue !== s.heureFinPrevue) {
      this.seanceService.updateHeureFin(s.id, { heureFinEffective: this.isoTodayAt(s.editFinValue) }).subscribe({
        next: (dto) => {
          Object.assign(s, this.toSeanceVM(dto));
          this.showToast("Heure de fin corrig\xE9e.", "info");
        },
        error: () => this.showToast("Impossible de corriger l'heure de fin.", "error")
      });
    }
  }
  // ── Patient seance today ──────────────────────────────────────────────────
  getSeanceToday(patientId) {
    for (const s of this.seances) {
      if (s.patientId === patientId)
        return s;
    }
    return null;
  }
  hasSeanceEnCours(patientId) {
    return this.seances.some((s) => s.patientId === patientId && s.statut === "EN_COURS");
  }
  get activeSeanceId() {
    if (!this.selectedPatient)
      return null;
    for (const s of this.seances) {
      if (s.patientId === this.selectedPatient.id && s.statut === "EN_COURS")
        return s.id;
    }
    return null;
  }
  selectPatientById(patientId) {
    const p = this.patients.find((x) => x.id === patientId);
    if (p) {
      this.activePage = "patients";
      this.selectPatient(p);
    } else {
      this.showToast("Dossier patient non disponible.", "warning");
    }
  }
  // ── Patient list ──────────────────────────────────────────────────────────
  loadPatients() {
    this.isLoadingPatients = true;
    this.loadError = "";
    this.patientService.invalidateCache();
    this.patientService.getAll().subscribe({
      next: (patients) => {
        this.patients = patients.map((p) => this.toVM(p));
        this.isLoadingPatients = false;
        if (patients.length === 0) {
          this.loadError = "Aucun patient enregistr\xE9 dans le syst\xE8me.";
        }
      },
      error: (err) => {
        this.isLoadingPatients = false;
        if (err?.status === 401 || err?.status === 403) {
          this.loadError = "Session expir\xE9e. Veuillez vous reconnecter.";
        } else if (err?.status === 0) {
          this.loadError = "Serveur inaccessible.";
        } else {
          this.loadError = "Impossible de charger la liste des patients.";
        }
      }
    });
  }
  get filteredPatients() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q)
      return this.patients;
    return this.patients.filter((p) => p.nomComplet.toLowerCase().includes(q) || (p.cin ?? "").toLowerCase().includes(q));
  }
  setTab(tab) {
    this.activeTab = tab;
    if (tab === "alertes")
      this.markPatientAlertesAsRead();
  }
  selectPatient(p) {
    this.selectedPatient = p;
    this.activeTab = "constantes";
    this.constantes = [];
    this.ordonnances = [];
    this.instructions = null;
    this.patientAlertes = [];
    this.isLoadingDetails = true;
    forkJoin({
      constantes: this.constantesService.getByPatient(p.id).pipe(catchError(() => of([]))),
      ordonnances: this.ordonnanceService.getByPatient(p.id).pipe(catchError(() => of([]))),
      instructions: this.instructionsService.getByPatient(p.id).pipe(catchError(() => of(null)))
    }).subscribe({
      next: ({ constantes, ordonnances, instructions }) => {
        this.constantes = constantes.sort((a, b) => b.date.localeCompare(a.date));
        this.ordonnances = ordonnances.sort((a, b) => b.dateEmission.localeCompare(a.dateEmission));
        this.instructions = instructions;
        this.isLoadingDetails = false;
      },
      error: () => {
        this.isLoadingDetails = false;
      }
    });
    this.loadPatientAlertes(p.id);
  }
  closePatient() {
    this.selectedPatient = null;
    this.showForm = false;
  }
  toggleForm() {
    this.showForm = !this.showForm;
    this.cvForm = { tensionSys: "", tensionDia: "", poids: "", bpm: "", notes: "" };
  }
  saveConstantes() {
    if (!this.selectedPatient || this.isSaving)
      return;
    if (!this.activeSeanceId) {
      this.showToast("D\xE9marrez la s\xE9ance avant de saisir les constantes.", "warning");
      return;
    }
    const sys = +this.cvForm.tensionSys;
    const dia = +this.cvForm.tensionDia;
    const poids = +this.cvForm.poids;
    const bpm = +this.cvForm.bpm;
    if (!sys || !dia || !poids || !bpm) {
      this.showToast("Veuillez remplir tous les champs obligatoires.", "warning");
      return;
    }
    this.isSaving = true;
    const payload = {
      tensionSys: sys,
      tensionDia: dia,
      poids,
      bpm,
      notes: this.cvForm.notes.trim(),
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      patientId: this.selectedPatient.id,
      seanceId: this.activeSeanceId
    };
    this.constantesService.create(payload).subscribe({
      next: (c) => {
        this.constantes = [c, ...this.constantes];
        this.isSaving = false;
        this.showForm = false;
        this.cvForm = { tensionSys: "", tensionDia: "", poids: "", bpm: "", notes: "" };
        this.showToast("Constantes enregistr\xE9es avec succ\xE8s.", "success");
        this.loadPlanning();
      },
      error: (err) => {
        this.isSaving = false;
        this.showToast(`Erreur lors de l'enregistrement (${err?.status ?? ""}).`, "error");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  get currentUserInitials() {
    const u = this.currentUser;
    return `${u?.prenom?.[0] ?? ""}${u?.nom?.[0] ?? ""}`.toUpperCase() || "IN";
  }
  get currentUserName() {
    const u = this.currentUser;
    return u ? `${u.prenom} ${u.nom}`.trim() : "Infirmier";
  }
  toVM(p) {
    return __spreadProps(__spreadValues({}, p), {
      age: this.calcAge(p.dateNaissance),
      initials: `${p.prenom?.[0] ?? ""}${p.nom?.[0] ?? ""}`.toUpperCase(),
      nomComplet: `${p.prenom ?? ""} ${p.nom ?? ""}`.trim()
    });
  }
  calcAge(dob) {
    if (!dob)
      return 0;
    const today = /* @__PURE__ */ new Date(), birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() || today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
      age--;
    return age;
  }
  timeFromIso(value) {
    if (!value)
      return null;
    if (/^\d{2}:\d{2}/.test(value))
      return value.slice(0, 5);
    const d = new Date(value);
    if (Number.isNaN(d.getTime()))
      return value.slice(11, 16) || null;
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  isoTodayAt(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    const d = /* @__PURE__ */ new Date();
    d.setHours(h || 0, m || 0, 0, 0);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}T${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:00`;
  }
  fmtDate(iso) {
    if (!iso)
      return "-";
    const d = iso.slice(0, 10).split("-");
    return d.length === 3 ? `${d[2]}/${d[1]}/${d[0]}` : iso;
  }
  tensionStatus(sys, dia) {
    if (sys >= 140 || dia >= 90)
      return "crit";
    if (sys < 90 || dia < 60)
      return "warn";
    return "ok";
  }
  tensionLabel(sys, dia) {
    if (sys >= 180 || dia >= 120)
      return "Crise hypertensive";
    if (sys >= 140 || dia >= 90)
      return "Hypertension";
    if (sys < 90 || dia < 60)
      return "Hypotension";
    return "Normale";
  }
  ordonnanceStatusLabel(s) {
    return {
      ACTIVE: "Active",
      EXPIREE: "Expir\xE9e",
      ANNULEE: "Annul\xE9e",
      EN_ATTENTE: "En attente",
      VALIDEE: "Valid\xE9e"
    }[s] ?? s;
  }
  ordonnanceStatusTone(s) {
    return {
      ACTIVE: "ok",
      VALIDEE: "ok",
      EN_ATTENTE: "warn",
      EXPIREE: "warn",
      ANNULEE: "crit"
    }[s] ?? "neutral";
  }
  // ── Alertes / Notifications ───────────────────────────────────────────────
  loadAllAlertes() {
    const username = this.currentUser?.login ?? "";
    if (!username)
      return;
    this.isLoadingNotif = true;
    this.alerteService.getMesAlertes(username).subscribe({
      next: (list) => {
        this.allAlertes = list;
        this.isLoadingNotif = false;
      },
      error: () => {
        this.isLoadingNotif = false;
      }
    });
  }
  loadPatientAlertes(patientId) {
    this.alerteService.getByPatient(patientId).subscribe({
      next: (list) => {
        this.patientAlertes = list;
      },
      error: () => {
      }
    });
  }
  openPatientFromNotif(alerte) {
    this.notifOpen = false;
    const p = this.patients.find((x) => x.id === alerte.patient?.id);
    if (p) {
      this.activePage = "patients";
      this.selectPatient(p);
      this.activeTab = "alertes";
    } else {
      this.showToast("Dossier patient non disponible.", "warning");
    }
  }
  markPatientAlertesAsRead() {
    this.patientAlertes.filter((a) => !a.lue).forEach((a) => {
      this.alerteService.marquerLue(a.id).subscribe({
        next: (updated) => {
          const idx = this.patientAlertes.findIndex((x) => x.id === updated.id);
          if (idx !== -1)
            this.patientAlertes[idx] = updated;
          const globalIdx = this.allAlertes.findIndex((x) => x.id === updated.id);
          if (globalIdx !== -1)
            this.allAlertes[globalIdx] = updated;
        },
        error: () => {
        }
      });
    });
  }
  get unreadCount() {
    return this.allAlertes.filter((a) => !a.lue).length;
  }
  get patientUnreadCount() {
    return this.patientAlertes.filter((a) => !a.lue).length;
  }
  alerteTypeClass(type) {
    return {
      CRITIQUE: "alerte--critique",
      IMPORTANT: "alerte--important",
      TENDANCE: "alerte--tendance",
      SEANCE: "alerte--seance",
      ATTENTION: "alerte--important",
      INFO: "alerte--info"
    }[type] ?? "alerte--info";
  }
  alerteTypeIcon(type) {
    return {
      CRITIQUE: "emergency",
      IMPORTANT: "warning",
      TENDANCE: "trending_up",
      SEANCE: "schedule",
      ATTENTION: "info",
      INFO: "info"
    }[type] ?? "info";
  }
  alerteTimeLabel(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    const now = /* @__PURE__ */ new Date();
    const diffMin = Math.round((now.getTime() - d.getTime()) / 6e4);
    if (diffMin < 1)
      return "\xC0 l'instant";
    if (diffMin < 60)
      return `Il y a ${diffMin} min`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24)
      return `Il y a ${diffH}h`;
    const diffD = Math.floor(diffH / 24);
    return `Il y a ${diffD}j`;
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
    return { success: "check_circle", warning: "warning", error: "error", info: "info" }[type] ?? "info";
  }
  toggleTheme() {
    this.isLight = !this.isLight;
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function InfirmierComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfirmierComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(OrdonnanceService), \u0275\u0275directiveInject(ConstantesVitalesService), \u0275\u0275directiveInject(PatientInstructionsService), \u0275\u0275directiveInject(SeanceService), \u0275\u0275directiveInject(AlerteService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfirmierComponent, selectors: [["app-infirmier"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 19, consts: [[1, "toast-stack"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "inf-shell"], [1, "inf-topbar"], [1, "brand"], [1, "brand__mark"], ["width", "28", "height", "28", "viewBox", "0 0 52 52", "fill", "none"], ["cx", "26", "cy", "26", "r", "24", "fill", "rgba(0,217,196,0.15)", "stroke", "rgba(0,217,196,0.5)", "stroke-width", "1.5"], ["d", "M26 13v10M21 18h10", "stroke", "#00D9C4", "stroke-width", "2.8", "stroke-linecap", "round"], ["d", "M14 33c0 0 3-9 6-9s4 6 6 6 3-9 6-9 6 9 6 9", "stroke", "#00D9C4", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "inf-profile"], [1, "inf-profile__avatar"], [1, "inf-profile__text"], [1, "notif-wrapper"], ["type", "button", "title", "Alertes", 1, "notif-btn", 3, "click"], [1, "material-icons"], ["class", "notif-badge", 4, "ngIf"], ["type", "button", 1, "icon-button", 3, "click", "title"], ["type", "button", "title", "D\xE9connexion", 1, "icon-button", "icon-button--danger", 3, "click"], ["class", "notif-backdrop", 3, "click", 4, "ngIf"], ["class", "notif-panel", 3, "click", 4, "ngIf"], [1, "inf-layout"], [1, "inf-sidebar"], [1, "inf-sidebar__item", 3, "click"], [1, "patient-workspace"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "notif-badge"], [1, "notif-backdrop", 3, "click"], [1, "notif-panel", 3, "click"], [1, "notif-panel__head"], ["class", "notif-badge-count", 4, "ngIf"], ["class", "notif-empty-label", 4, "ngIf"], ["class", "notif-loading", 4, "ngIf"], ["class", "notif-empty", 4, "ngIf"], ["class", "notif-list", 4, "ngIf"], [1, "notif-badge-count"], [1, "notif-empty-label"], [1, "notif-loading"], [1, "material-icons", "spin"], [1, "notif-empty"], [1, "notif-list"], [3, "class", "notif-card--read", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "notif-card__icon", "material-icons"], [1, "notif-card__body"], [1, "notif-card__patient"], [1, "notif-card__msg"], [1, "notif-card__time"], ["class", "notif-card__dot", 4, "ngIf"], [1, "notif-card__dot"], [1, "planning-header"], [1, "planning-title"], ["type", "button", 1, "ghost-button", 3, "click"], ["class", "state-box", 4, "ngIf"], ["class", "state-box state-box--error", 4, "ngIf"], ["class", "empty-tab", 4, "ngIf"], ["class", "planning-table-wrap", 4, "ngIf"], [1, "state-box"], [1, "state-box", "state-box--error"], [1, "empty-tab"], [1, "planning-table-wrap"], [1, "planning-table"], [3, "planning-row--encours", "planning-row--done", 4, "ngFor", "ngForOf"], [1, "planning-patient-cell", 3, "click"], [1, "patient-row__avatar"], ["class", "planning-times", 4, "ngIf"], [1, "pill", "pill--neutral"], [1, "pill"], [1, "planning-action-cell"], ["class", "primary-button", "type", "button", 3, "click", 4, "ngIf"], ["class", "planning-done", 4, "ngIf"], [1, "planning-times"], ["type", "button", "title", "Corriger l'heure de fin", 1, "planning-fin-edit-btn", 3, "click"], [1, "material-icons", 2, "font-size", "11px"], ["type", "time", 1, "planning-fin-input", 3, "ngModelChange", "blur", "keyup.enter", "click", "ngModel"], ["type", "button", 1, "primary-button", 3, "click"], [1, "planning-timer"], ["type", "button", 1, "success-button", 3, "click"], [1, "planning-done"], ["class", "patients-table-wrap", 4, "ngIf"], [1, "patients-table-wrap"], [1, "patients-table"], ["class", "patients-table__row", 3, "click", 4, "ngFor", "ngForOf"], [1, "patients-table__row", 3, "click"], [1, "patients-table__name"], [1, "material-icons", 2, "color", "var(--c-teal)", "font-size", "18px"], ["colspan", "6", 2, "text-align", "center", "padding", "32px", "color", "var(--c-text-3)"], [1, "material-icons", 2, "display", "block", "font-size", "36px", "margin-bottom", "8px"], [1, "patient-hero"], [1, "hero-avatar"], [1, "hero-copy"], [1, "eyebrow"], ["type", "button", "title", "Fermer", 1, "icon-button", 3, "click"], ["class", "quick-actions", 4, "ngIf"], ["class", "detail-loading", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "seance-banner"], [1, "seance-banner__info"], ["class", "primary-button", "type", "button", "style", "flex-shrink:0", 3, "click", 4, "ngIf"], ["class", "success-button", "type", "button", "style", "flex-shrink:0", 3, "click", 4, "ngIf"], ["type", "button", 1, "primary-button", 2, "flex-shrink", "0", 3, "click"], ["type", "button", 1, "success-button", 2, "flex-shrink", "0", 3, "click"], [1, "quick-actions"], ["type", "button", 1, "quick-btn", 3, "click"], ["type", "button", 1, "quick-btn", "quick-btn--alert", 3, "click"], ["class", "alert-badge-count", 4, "ngIf"], [1, "alert-badge-count"], [1, "detail-loading"], [1, "tab-content"], ["type", "button", 1, "cv-add-btn", 3, "click"], ["class", "cv-form-card", 4, "ngIf"], ["class", "cv-list", 4, "ngIf"], [1, "cv-form-card"], [1, "cv-form-title"], ["class", "cv-seance-badge", 4, "ngIf"], [1, "cv-form-grid"], [1, "cv-form-group"], [1, "req"], [1, "cv-input-wrap"], ["type", "number", "placeholder", "120", "min", "50", "max", "250", 3, "ngModelChange", "ngModel"], [1, "cv-unit"], ["type", "number", "placeholder", "80", "min", "30", "max", "150", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "70", "min", "20", "max", "300", "step", "0.1", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "75", "min", "30", "max", "220", 3, "ngModelChange", "ngModel"], [1, "cv-form-group", "cv-form-group--full"], ["rows", "2", "placeholder", "Observations particuli\xE8res\u2026", 3, "ngModelChange", "ngModel"], [1, "cv-form-footer"], ["type", "button", 1, "cv-btn-cancel", 3, "click"], ["type", "button", 1, "cv-btn-save", 3, "click", "disabled"], [1, "cv-seance-badge"], [1, "cv-list"], ["class", "cv-card", 4, "ngFor", "ngForOf"], [1, "cv-card"], [1, "cv-card__head"], ["class", "cv-author", 4, "ngIf"], [1, "cv-metrics"], [1, "cv-metric"], [1, "cv-metric__label"], [1, "cv-metric__val"], ["class", "cv-notes", 4, "ngIf"], [1, "cv-author"], [1, "cv-notes"], ["class", "ord-list", 4, "ngIf"], [1, "ord-list"], ["class", "ord-card", 4, "ngFor", "ngForOf"], [1, "ord-card"], [1, "ord-card__head"], [1, "ord-date"], [1, "ord-body"], ["class", "ord-row", 4, "ngIf"], [1, "ord-row"], [1, "ord-label"], ["class", "alerte-list", 4, "ngIf"], [1, "alerte-list"], [3, "class", "alerte-card--read", 4, "ngFor", "ngForOf"], [1, "alerte-card__icon", "material-icons"], [1, "alerte-card__body"], [1, "alerte-card__header"], [1, "alerte-card__type"], [1, "alerte-card__time"], ["class", "alerte-card__unread", 4, "ngIf"], [1, "alerte-card__msg"], [1, "alerte-card__unread"], [1, "instr-card"], [1, "instr-card__head"], [1, "instr-card__body"], ["class", "instr-row", 4, "ngIf"], ["class", "instr-card", 4, "ngIf"], [1, "instr-row"], [1, "instr-label"], [1, "pill", "pill--stable"], [1, "pill", "pill--ok"], [1, "instr-allergies"], [1, "modal-overlay", 3, "click"], [1, "modal-panel", 3, "click"], [1, "modal-panel__head"], [1, "modal-panel__label"], [1, "inf-duree-grid"], ["class", "inf-duree-btn", "type", "button", 3, "inf-duree-btn--active", "click", 4, "ngFor", "ngForOf"], [1, "inf-duree-preview"], [1, "inf-duree-preview__dur"], ["class", "modal-error", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "primary-button", 3, "click", "disabled"], ["type", "button", 1, "inf-duree-btn", 3, "click"], [1, "modal-error"]], template: function InfirmierComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, InfirmierComponent_button_1_Template, 5, 5, "button", 1);
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
      \u0275\u0275text(14, "Espace Infirmier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "strong");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 13)(24, "button", 14);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_24_listener($event) {
        ctx.notifOpen = !ctx.notifOpen;
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, InfirmierComponent_span_27_Template, 2, 1, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 17);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_28_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "button", 18);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_31_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(32, "span", 15);
      \u0275\u0275text(33, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(34, InfirmierComponent_div_34_Template, 1, 0, "div", 19)(35, InfirmierComponent_div_35_Template, 11, 5, "div", 20);
      \u0275\u0275elementStart(36, "div", 21)(37, "aside", 22)(38, "button", 23);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_38_listener() {
        ctx.activePage = "planning";
        ctx.selectedPatient = null;
        return ctx.showForm = false;
      });
      \u0275\u0275elementStart(39, "span", 15);
      \u0275\u0275text(40, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Planning du jour");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "button", 23);
      \u0275\u0275listener("click", function InfirmierComponent_Template_button_click_43_listener() {
        ctx.activePage = "patients";
        ctx.selectedPatient = null;
        return ctx.showForm = false;
      });
      \u0275\u0275elementStart(44, "span", 15);
      \u0275\u0275text(45, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "Mes patients");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "main", 24);
      \u0275\u0275template(49, InfirmierComponent_ng_container_49_Template, 18, 5, "ng-container", 25)(50, InfirmierComponent_ng_container_50_Template, 4, 3, "ng-container", 25)(51, InfirmierComponent_ng_container_51_Template, 21, 12, "ng-container", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(52, InfirmierComponent_div_52_Template, 30, 8, "div", 26);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275classProp("light", ctx.isLight);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.currentUserInitials);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentUserName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.login);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.isLight ? "Mode sombre" : "Mode clair");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isLight ? "dark_mode" : "light_mode");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.notifOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notifOpen);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("inf-sidebar__item--active", ctx.activePage === "planning" && !ctx.selectedPatient);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("inf-sidebar__item--active", ctx.activePage === "patients" && !ctx.selectedPatient);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.activePage === "planning" && !ctx.selectedPatient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activePage === "patients" && !ctx.selectedPatient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPatient);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDemarrerModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n.inf-shell[_ngcontent-%COMP%] {\n  --c-bg: #06090F;\n  --c-surface-1: #06090F;\n  --c-surface-2: #0B111E;\n  --c-surface-3: #0F1729;\n  --c-card: #0B111E;\n  --c-border: rgba(0,217,196,.10);\n  --c-text-1: #ffffff;\n  --c-text-2: #ffffff;\n  --c-text-3: rgba(255,255,255,.6);\n  --c-teal: #00D9C4;\n  --c-teal-soft: rgba(0,217,196,.12);\n  --c-topbar-bg: rgba(11,17,30,.88);\n}\n.inf-shell.light[_ngcontent-%COMP%] {\n  --c-bg: #f0f4f8;\n  --c-surface-1: #f0f4f8;\n  --c-surface-2: #ffffff;\n  --c-surface-3: #f8fafc;\n  --c-card: #ffffff;\n  --c-border: rgba(148,163,184,.28);\n  --c-text-1: #0f172a;\n  --c-text-2: #334155;\n  --c-text-3: #64748b;\n  --c-teal: #147c75;\n  --c-teal-soft: rgba(20,124,117,.12);\n  --c-topbar-bg: rgba(255,255,255,.88);\n}\n.inf-shell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: var(--c-text-1);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 217, 196, 0.06) 0%,\n      transparent 40%),\n    linear-gradient(\n      225deg,\n      rgba(59, 130, 246, 0.05) 0%,\n      transparent 40%),\n    var(--c-bg);\n}\n.inf-shell[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  background: var(--c-bg);\n}\n.inf-topbar[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--c-topbar-bg);\n  border-bottom: 1px solid var(--c-border);\n  backdrop-filter: blur(14px);\n  color: var(--c-text-1);\n}\n.inf-topbar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.inf-topbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.inf-topbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.inf-topbar[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.inf-topbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.brand[_ngcontent-%COMP%], \n.inf-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.brand[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: rgba(0, 217, 196, 0.1);\n  border: 1px solid rgba(0, 217, 196, 0.3);\n}\n.brand[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) {\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.inf-profile[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.inf-profile__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  font-weight: 800;\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n  flex: 0 0 auto;\n}\n.inf-profile__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.inf-profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.inf-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2);\n}\n.inf-layout[_ngcontent-%COMP%] {\n  min-height: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  background: var(--c-bg);\n}\n.inf-sidebar[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border-right: 1px solid var(--c-border);\n  display: flex;\n  flex-direction: column;\n  padding: 16px 12px;\n  gap: 4px;\n  min-width: 220px;\n  width: 220px;\n  overflow: visible;\n}\n.inf-sidebar__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 11px 14px;\n  border: none;\n  border-radius: 10px;\n  background: rgba(0, 217, 196, 0.06);\n  color: var(--c-text-2);\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: left;\n  white-space: nowrap;\n  transition: background 0.15s, color 0.15s;\n}\n.inf-sidebar__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.inf-sidebar__item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.14);\n  color: var(--c-teal);\n}\n.inf-sidebar__item--active[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.18);\n  color: var(--c-teal);\n  font-weight: 600;\n}\n.patient-workspace[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  padding: 28px;\n  background: var(--c-bg);\n  color: var(--c-text-1);\n}\n.empty-detail[_ngcontent-%COMP%], \n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: var(--c-text-2);\n}\n.empty-detail[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 128px);\n  flex-direction: column;\n  text-align: center;\n}\n.empty-detail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--c-text-3);\n}\n.empty-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n}\n.empty-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0;\n  line-height: 1.6;\n}\n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px dashed var(--c-border);\n  border-radius: 8px;\n  background: var(--c-surface-2);\n}\n.state-box--error[_ngcontent-%COMP%] {\n  color: #ff5757;\n  border-color: rgba(255, 87, 87, 0.25);\n  background: rgba(255, 87, 87, 0.08);\n}\n.patient-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  border-radius: 8px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card);\n  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.18);\n}\n.hero-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 30px;\n  letter-spacing: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--c-text-2);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-teal);\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin: 18px 0 4px;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 56px;\n  padding: 0 18px;\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  background: var(--c-card);\n  color: var(--c-text-2);\n  font: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.18s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.quick-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--c-teal);\n}\n.quick-btn[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  min-width: 22px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 900;\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  box-shadow: 0 6px 20px var(--c-teal-soft);\n  color: var(--c-text-1);\n}\n.quick-btn--active[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n  border-color: var(--c-teal);\n  color: var(--c-card);\n  box-shadow: 0 8px 24px var(--c-teal-soft);\n}\n.quick-btn--active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-card);\n}\n.quick-btn--active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n  color: var(--c-card);\n}\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  background: transparent;\n  color: var(--c-text-1);\n}\n.detail-loading[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px 20px;\n  color: var(--c-text-3);\n  text-align: center;\n}\n.empty-tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.4;\n}\n.empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.icon-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%], \n.toast[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 8px;\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n}\n.icon-button[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  color: var(--c-text-2);\n  background: var(--c-card);\n}\n.icon-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  color: var(--c-teal);\n  border-color: rgba(20, 124, 117, 0.3);\n}\n.icon-button--danger[_ngcontent-%COMP%]:hover {\n  color: #b42318;\n  border-color: rgba(180, 35, 24, 0.3);\n}\n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 16px;\n}\n.primary-button[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--c-card);\n  background: var(--c-teal);\n}\n.primary-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.ghost-button[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  color: var(--c-text-2);\n  background: var(--c-card);\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n.pill--stable[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.pill--warning[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.pill--critical[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.pill--neutral[_ngcontent-%COMP%] {\n  color: var(--c-text-2);\n  background: #e2e8f0;\n}\n.pill--ok[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.pill--warn[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.pill--crit[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.patients-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 14px;\n  border: 1px solid var(--c-border);\n  background: var(--c-card);\n}\n.patients-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.patients-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--c-surface-3);\n  border-bottom: 1px solid var(--c-border);\n}\n.patients-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--c-text-2);\n  white-space: nowrap;\n}\n.patients-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  color: var(--c-text-1);\n  border-bottom: 1px solid var(--c-border);\n}\n.patients-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.patients-table__row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.patients-table__row[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.05);\n}\n.patients-table__name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.patients-table__name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.patient-row__avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 800;\n  font-size: 13px;\n  flex-shrink: 0;\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 50;\n  display: grid;\n  gap: 10px;\n}\n.toast[_ngcontent-%COMP%] {\n  max-width: 360px;\n  justify-content: flex-start;\n  padding: 12px 14px;\n  border: 1px solid rgba(148, 163, 184, 0.32);\n  color: var(--c-text-1);\n  background: var(--c-card);\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.14);\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.toast--success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.toast--warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d99000;\n}\n.toast--error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d92d20;\n}\n.toast--info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2f6fed;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cv-add-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n  border: 1px solid rgba(0, 217, 196, 0.25);\n  cursor: pointer;\n  transition: all 0.15s;\n  align-self: flex-start;\n}\n.cv-add-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cv-add-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 217, 196, 0.2);\n}\n.cv-form-card[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cv-form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--c-text-1);\n}\n.cv-form-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.cv-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n.cv-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cv-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--c-text-2);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.cv-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 9px 12px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  font: inherit;\n  font-size: 13px;\n  color: var(--c-text-1);\n  background: var(--c-surface-2);\n  resize: vertical;\n  outline: none;\n}\n.cv-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--c-teal);\n  background: var(--c-card);\n  box-shadow: 0 0 0 3px var(--c-teal-soft);\n}\n.cv-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n}\n.cv-form-group--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.req[_ngcontent-%COMP%] {\n  color: #ff5757;\n}\n.cv-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: var(--c-surface-2);\n  overflow: hidden;\n}\n.cv-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--c-teal);\n}\n.cv-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 9px 12px;\n  font: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.cv-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--c-text-3);\n  font-weight: 400;\n}\n.cv-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.cv-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  opacity: 0.4;\n}\n.cv-unit[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  background: var(--c-teal-soft);\n  border-left: 1px solid var(--c-border);\n  white-space: nowrap;\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n}\n.cv-form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 4px;\n}\n.cv-btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-border);\n  color: var(--c-text-2);\n  cursor: pointer;\n}\n.cv-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--c-surface-3);\n}\n.cv-btn-save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  background: var(--c-teal);\n  border: none;\n  color: var(--c-card);\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cv-btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.cv-btn-save[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.cv-btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.cv-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cv-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  background: var(--c-card);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n}\n.cv-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.cv-card__head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-1);\n}\n.cv-card__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--c-text-3);\n}\n.cv-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.cv-author[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cv-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  padding: 16px;\n}\n.cv-metric[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  padding: 12px;\n}\n.cv-metric[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n  margin-top: 2px;\n}\n.cv-metric[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cv-metric__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.cv-metric__val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--c-text-1);\n}\n.cv-metric__val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--c-text-3);\n  font-weight: 400;\n  margin-left: 2px;\n}\n.cv-notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 10px 16px;\n  border-top: 1px solid var(--c-border);\n  font-size: 13px;\n  color: var(--c-text-3);\n  line-height: 1.5;\n  background: var(--c-surface-2);\n}\n.cv-notes[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ord-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ord-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  background: var(--c-card);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n}\n.ord-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.ord-card__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.ord-card__head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-1);\n}\n.ord-date[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.ord-body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ord-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 13px;\n  color: var(--c-text-1);\n  align-items: baseline;\n}\n.ord-label[_ngcontent-%COMP%] {\n  width: 110px;\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.instr-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 10px;\n  background: var(--c-card);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n}\n.instr-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--c-border);\n}\n.instr-card__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--c-teal);\n}\n.instr-card__head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--c-text-1);\n}\n.instr-card__body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.instr-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13px;\n  color: var(--c-text-1);\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--c-border);\n}\n.instr-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.instr-label[_ngcontent-%COMP%] {\n  width: 160px;\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--c-text-3);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.instr-allergies[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--c-text-1);\n  line-height: 1.6;\n  background: rgba(245, 166, 35, 0.08);\n  border-radius: 6px;\n  padding: 10px 12px;\n  border-left: 3px solid #f5a623;\n}\n.planning-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 22px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.planning-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.planning-title[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--c-teal);\n}\n.planning-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--c-text-1);\n}\n.planning-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--c-text-3);\n  text-transform: capitalize;\n}\n.planning-table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid var(--c-border);\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--c-card);\n}\n.planning-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.planning-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--c-teal);\n  background: rgba(0, 217, 196, 0.05);\n  border-bottom: 1px solid var(--c-border);\n  white-space: nowrap;\n}\n.planning-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--c-border);\n  color: var(--c-text-1);\n  vertical-align: middle;\n}\n.planning-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.planning-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.03);\n}\n.planning-row--encours[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(0, 217, 196, 0.04);\n}\n.planning-row--done[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.72;\n}\n.planning-patient-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.planning-patient-cell[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.planning-patient-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  display: block;\n}\n.planning-times[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--c-text-3);\n}\n.planning-times[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.planning-fin-edit-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  background: none;\n  border: none;\n  border-bottom: 1px dashed var(--c-teal);\n  cursor: pointer;\n  color: var(--c-teal);\n  font-size: 12px;\n  padding: 0 3px;\n  transition: background 0.12s;\n}\n.planning-fin-edit-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.planning-fin-edit-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-teal-soft);\n  border-radius: 3px;\n}\n.planning-fin-input[_ngcontent-%COMP%] {\n  width: 90px;\n  background: var(--c-surface-2);\n  border: 1px solid var(--c-teal);\n  border-radius: 4px;\n  color: var(--c-text-1);\n  font-size: 12px;\n  padding: 2px 6px;\n  outline: none;\n  font-family: inherit;\n}\n.planning-fin-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px var(--c-teal-soft);\n}\n.planning-action-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  white-space: nowrap;\n}\n.planning-timer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  background: rgba(0, 217, 196, 0.12);\n  color: var(--c-teal);\n  font-size: 12px;\n  font-weight: 700;\n}\n.planning-timer[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.planning-timer--overdue[_ngcontent-%COMP%] {\n  background: rgba(255, 87, 87, 0.15);\n  color: #ff5757;\n  animation: _ngcontent-%COMP%_blink-overdue 1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_blink-overdue {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n}\n.planning-done[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: #22c55e;\n  font-size: 13px;\n  font-weight: 600;\n}\n.planning-done[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.success-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 38px;\n  padding: 0 14px;\n  border: none;\n  border-radius: 8px;\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.success-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.success-button[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.25);\n}\n.seance-banner[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 8px;\n}\n.seance-banner[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.seance-banner--planifiee[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.1);\n  border: 1px solid rgba(250, 204, 21, 0.28);\n  color: #d97706;\n}\n.seance-banner--encours[_ngcontent-%COMP%] {\n  background: var(--c-teal-soft);\n  border: 1px solid rgba(0, 217, 196, 0.28);\n  color: var(--c-teal);\n}\n.seance-banner--terminee[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  border: 1px solid rgba(34, 197, 94, 0.28);\n  color: #22c55e;\n}\n.seance-banner__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.seance-banner__info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n}\n.seance-banner__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.85;\n}\n.seance-banner__timer--overdue[_ngcontent-%COMP%] {\n  color: #ff5757;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_blink-overdue 1s ease-in-out infinite;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 200;\n  padding: 20px;\n}\n.modal-panel[_ngcontent-%COMP%] {\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 16px;\n  padding: 28px;\n  width: 100%;\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.modal-panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-panel__head[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--c-teal);\n}\n.modal-panel__head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--c-text-1);\n}\n.modal-panel__head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--c-teal);\n  font-weight: 600;\n}\n.modal-panel__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--c-text-3);\n  margin-bottom: -10px;\n}\n.inf-duree-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n}\n.inf-duree-btn[_ngcontent-%COMP%] {\n  padding: 10px 4px;\n  border: 1px solid var(--c-border);\n  border-radius: 8px;\n  background: var(--c-surface-2);\n  color: var(--c-text-2);\n  font: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: all 0.15s;\n}\n.inf-duree-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--c-teal);\n  color: var(--c-teal);\n  background: var(--c-teal-soft);\n}\n.inf-duree-btn--active[_ngcontent-%COMP%] {\n  background: var(--c-teal);\n  border-color: var(--c-teal);\n  color: #000;\n  font-weight: 800;\n}\n.inf-duree-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  background: var(--c-teal-soft);\n  border: 1px solid rgba(0, 217, 196, 0.22);\n  color: var(--c-teal);\n  font-size: 14px;\n}\n.inf-duree-preview[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.inf-duree-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.inf-duree-preview__dur[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 12px;\n  opacity: 0.7;\n  font-weight: 600;\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: rgba(255, 87, 87, 0.12);\n  color: #ff5757;\n  font-size: 13px;\n}\n.modal-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.cv-seance-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n  font-size: 12px;\n  font-weight: 700;\n}\n.cv-seance-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.notif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--c-text-2);\n  transition: background 0.18s;\n}\n.notif-btn[_ngcontent-%COMP%]:hover {\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n}\n.notif-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 3px;\n  border-radius: 8px;\n  background: #ef4444;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.notif-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 98;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 64px;\n  right: 16px;\n  width: 360px;\n  max-height: 480px;\n  z-index: 99;\n  background: var(--c-card);\n  border: 1px solid var(--c-border);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.28);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.notif-panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--c-border);\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--c-text-1);\n}\n.notif-panel__head[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n  font-size: 20px;\n}\n.notif-badge-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.notif-empty-label[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--c-text-3);\n}\n.notif-loading[_ngcontent-%COMP%], \n.notif-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  color: var(--c-text-3);\n  font-size: 13px;\n}\n.notif-loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.notif-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.notif-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n}\n.notif-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--c-border);\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.notif-card[_ngcontent-%COMP%]:hover {\n  background: var(--c-teal-soft);\n}\n.notif-card--read[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.notif-card__icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.notif-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.notif-card__patient[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--c-text-1);\n}\n.notif-card__msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--c-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notif-card__time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.notif-card__dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 12px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #ef4444;\n}\n.alerte--critique[_ngcontent-%COMP%] {\n  border-left: 3px solid #ef4444;\n}\n.alerte--critique[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--critique[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.alerte--important[_ngcontent-%COMP%] {\n  border-left: 3px solid #f97316;\n}\n.alerte--important[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--important[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.alerte--tendance[_ngcontent-%COMP%] {\n  border-left: 3px solid #6366f1;\n}\n.alerte--tendance[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--tendance[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.alerte--seance[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--c-teal);\n}\n.alerte--seance[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--seance[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  color: var(--c-teal);\n}\n.alerte--info[_ngcontent-%COMP%] {\n  border-left: 3px solid #60a5fa;\n}\n.alerte--info[_ngcontent-%COMP%]   .notif-card__icon[_ngcontent-%COMP%], \n.alerte--info[_ngcontent-%COMP%]   .alerte-card__icon[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.quick-btn--alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.quick-btn--alert.quick-btn--active[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.alert-badge-count[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  border-radius: 8px;\n  padding: 0 5px;\n  font-size: 10px;\n  font-weight: 700;\n  min-width: 16px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.alerte-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.alerte-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--c-card);\n  border-radius: 10px;\n  border: 1px solid var(--c-border);\n  border-left-width: 4px;\n}\n.alerte-card--read[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.alerte-card__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.alerte-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.alerte-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.alerte-card__type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 2px 7px;\n  border-radius: 5px;\n  background: var(--c-teal-soft);\n  color: var(--c-teal);\n}\n.alerte-card__time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--c-text-3);\n}\n.alerte-card__unread[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 10px;\n  font-weight: 700;\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.12);\n  padding: 2px 7px;\n  border-radius: 5px;\n}\n.alerte-card__msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--c-text-2);\n  line-height: 1.5;\n}\n@media (max-width: 1080px) {\n  .cv-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 780px) {\n  .inf-topbar[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 72px;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 16px;\n  }\n  .inf-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .inf-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n    flex-direction: row;\n    border-right: none;\n    border-bottom: 1px solid var(--c-border);\n    padding: 8px 12px;\n  }\n  .patient-workspace[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .patient-hero[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .cv-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 520px) {\n  .cv-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cv-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=infirmier.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfirmierComponent, { className: "InfirmierComponent", filePath: "app\\pages\\infirmier\\infirmier.component.ts", lineNumber: 52 });
})();
export {
  InfirmierComponent
};
//# sourceMappingURL=chunk-W3XML73G.js.map
