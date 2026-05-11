import {
  ConstantesVitalesService,
  OrdonnanceService
} from "./chunk-UKAM7Y4F.js";
import {
  PatientService
} from "./chunk-RX2EHWO5.js";
import {
  AuthService
} from "./chunk-KGRZ3KR2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-C2IOWBAM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-T6UPCRXA.js";
import {
  __spreadProps,
  __spreadValues,
  forkJoin,
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
} from "./chunk-MOKET3XK.js";

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
    \u0275\u0275elementStart(1, "span", 11);
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
function MedecinComponent_div_12_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function MedecinComponent_div_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTheme());
    });
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275listener("click", function MedecinComponent_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(12, "span", 11);
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
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des patients ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 11);
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
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function MedecinComponent_div_30_button_1_Template_button_click_0_listener() {
      const patient_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPatient(patient_r6));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33)(4, "strong");
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
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 11);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun patient trouve ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, MedecinComponent_div_30_button_1_Template, 9, 12, "button", 31)(2, MedecinComponent_div_30_div_2_Template, 4, 0, "div", 14);
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
    \u0275\u0275elementStart(0, "section", 34)(1, "span", 11);
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
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 28);
    \u0275\u0275text(2, "progress_activity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du dossier... ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 11);
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
function MedecinComponent_ng_container_33_nav_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 44)(1, "button", 45);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_nav_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("resume"));
    });
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Resume ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_nav_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("constantes"));
    });
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Constantes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_nav_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("ordonnances"));
    });
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Ordonnances ");
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 45);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_nav_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("rediger"));
    });
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Rediger ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("tabs__item--active", ctx_r2.activeTab === "resume");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("tabs__item--active", ctx_r2.activeTab === "constantes");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("tabs__item--active", ctx_r2.activeTab === "ordonnances");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.ordonnances.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("tabs__item--active", ctx_r2.activeTab === "rediger");
  }
}
function MedecinComponent_ng_container_33_section_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 46)(1, "div", 47)(2, "article", 48)(3, "span");
    \u0275\u0275text(4, "Pathologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "article", 48)(8, "span");
    \u0275\u0275text(9, "Debut dialyse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "article", 48)(13, "span");
    \u0275\u0275text(14, "Poids dossier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "article", 48)(18, "span");
    \u0275\u0275text(19, "Tension dossier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 49)(23, "article", 50)(24, "header")(25, "span", 11);
    \u0275\u0275text(26, "science");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Bilan biologique ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dl")(29, "div")(30, "dt");
    \u0275\u0275text(31, "Creatinine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "dt");
    \u0275\u0275text(36, "Uree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "dt");
    \u0275\u0275text(41, "Hemoglobine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "dd");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "article", 50)(45, "header")(46, "span", 11);
    \u0275\u0275text(47, "history_edu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Antecedents ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.pathologie);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.debutDialyse);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.poidsDossier);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.tensionDossier);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.creatinine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.uree);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.hemoglobine);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedPatient.antecedents);
  }
}
function MedecinComponent_ng_container_33_section_17_article_1_strong_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.latestConstantes.aideSoignant.prenom, " ", ctx_r2.latestConstantes.aideSoignant.nom, " ");
  }
}
function MedecinComponent_ng_container_33_section_17_article_1_strong_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_17_article_1_p_24_Template(rf, ctx) {
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
function MedecinComponent_ng_container_33_section_17_article_1_Template(rf, ctx) {
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
    \u0275\u0275template(9, MedecinComponent_ng_container_33_section_17_article_1_strong_9_Template, 2, 2, "strong", 19)(10, MedecinComponent_ng_container_33_section_17_article_1_strong_10_Template, 2, 0, "strong", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 54)(12, "span")(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " mmHg");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span")(17, "b");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " bpm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "b");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " kg");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, MedecinComponent_ng_container_33_section_17_article_1_p_24_Template, 2, 1, "p", 19);
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
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.latestConstantes.bpm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.latestConstantes.poids);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.latestConstantes.notes);
  }
}
function MedecinComponent_ng_container_33_section_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 11);
    \u0275\u0275text(2, "sensors_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune constante vitale saisie pour ce patient. ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_17_div_3_tr_17_span_4_Template(rf, ctx) {
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
function MedecinComponent_ng_container_33_section_17_div_3_tr_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_17_div_3_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, MedecinComponent_ng_container_33_section_17_div_3_tr_17_span_4_Template, 2, 2, "span", 19)(5, MedecinComponent_ng_container_33_section_17_div_3_tr_17_span_5_Template, 2, 0, "span", 19);
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
function MedecinComponent_ng_container_33_section_17_div_3_Template(rf, ctx) {
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
    \u0275\u0275template(17, MedecinComponent_ng_container_33_section_17_div_3_tr_17_Template, 14, 8, "tr", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.constantes);
  }
}
function MedecinComponent_ng_container_33_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 46);
    \u0275\u0275template(1, MedecinComponent_ng_container_33_section_17_article_1_Template, 25, 8, "article", 51)(2, MedecinComponent_ng_container_33_section_17_div_2_Template, 4, 0, "div", 14)(3, MedecinComponent_ng_container_33_section_17_div_3_Template, 18, 1, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.latestConstantes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.latestConstantes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.constantes.length);
  }
}
function MedecinComponent_ng_container_33_section_18_div_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_18_div_8_button_1_Template_button_click_0_listener() {
      const ordonnance_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openOrdonnance(ordonnance_r11));
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63)(4, "strong");
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
    const ordonnance_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ordonnance #", ordonnance_r11.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.fmtDate(ordonnance_r11.dateEmission), " - ", ordonnance_r11.medicaments, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("pill pill--", ctx_r2.ordonnanceStatusTone(ordonnance_r11.statut), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ordonnanceStatusLabel(ordonnance_r11.statut), " ");
  }
}
function MedecinComponent_ng_container_33_section_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, MedecinComponent_ng_container_33_section_18_div_8_button_1_Template, 10, 7, "button", 61);
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
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 11);
    \u0275\u0275text(2, "description_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune ordonnance pour ce patient. ");
    \u0275\u0275elementEnd();
  }
}
function MedecinComponent_ng_container_33_section_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 46)(1, "div", 57)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 58);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setTab("rediger"));
    });
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Nouvelle ordonnance ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MedecinComponent_ng_container_33_section_18_div_8_Template, 2, 1, "div", 59)(9, MedecinComponent_ng_container_33_section_18_div_9_Template, 4, 0, "div", 14);
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
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 46)(1, "form", 64);
    \u0275\u0275listener("ngSubmit", function MedecinComponent_ng_container_33_section_19_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitOrdonnance());
    });
    \u0275\u0275elementStart(2, "header")(3, "span", 11);
    \u0275\u0275text(4, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7, "Rediger une ordonnance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "label", 65)(11, "span");
    \u0275\u0275text(12, "Medicaments *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.medicaments, $event) || (ctx_r2.ordonnanceForm.medicaments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 67)(15, "span");
    \u0275\u0275text(16, "Posologie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.posologie, $event) || (ctx_r2.ordonnanceForm.posologie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 67)(19, "span");
    \u0275\u0275text(20, "Date d'expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.dateExpiration, $event) || (ctx_r2.ordonnanceForm.dateExpiration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 65)(23, "span");
    \u0275\u0275text(24, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 70);
    \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_ng_container_33_section_19_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.ordonnanceForm.instructions, $event) || (ctx_r2.ordonnanceForm.instructions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "footer")(27, "button", 71)(28, "span", 11);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 72);
    \u0275\u0275listener("click", function MedecinComponent_ng_container_33_section_19_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetOrdonnanceForm());
    });
    \u0275\u0275elementStart(32, "span", 11);
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
    \u0275\u0275elementStart(1, "section", 35)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "div", 37);
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
    \u0275\u0275template(13, MedecinComponent_ng_container_33_div_13_Template, 4, 0, "div", 38)(14, MedecinComponent_ng_container_33_div_14_Template, 4, 1, "div", 39)(15, MedecinComponent_ng_container_33_nav_15_Template, 19, 9, "nav", 40)(16, MedecinComponent_ng_container_33_section_16_Template, 51, 8, "section", 41)(17, MedecinComponent_ng_container_33_section_17_Template, 4, 3, "section", 41)(18, MedecinComponent_ng_container_33_section_18_Template, 10, 3, "section", 41)(19, MedecinComponent_ng_container_33_section_19_Template, 35, 8, "section", 41);
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
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.detailError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails);
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
function MedecinComponent_div_34_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "label");
    \u0275\u0275text(2, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedOrdonnance.instructions);
  }
}
function MedecinComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275listener("click", function MedecinComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrdonnance());
    });
    \u0275\u0275elementStart(1, "article", 74);
    \u0275\u0275listener("click", function MedecinComponent_div_34_Template_article_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header")(3, "div")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 75);
    \u0275\u0275listener("click", function MedecinComponent_div_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrdonnance());
    });
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "section")(12, "label");
    \u0275\u0275text(13, "Medicaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, MedecinComponent_div_34_section_16_Template, 5, 1, "section", 19)(17, MedecinComponent_div_34_section_17_Template, 5, 1, "section", 19);
    \u0275\u0275elementStart(18, "footer")(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedOrdonnance.instructions);
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
  ordonnanceForm = this.emptyOrdonnanceForm();
  toasts = [];
  toastId = 0;
  constructor(patientService, ordonnanceService, constantesService, authService) {
    this.patientService = patientService;
    this.ordonnanceService = ordonnanceService;
    this.constantesService = constantesService;
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
    this.isLoadingDetails = true;
    forkJoin({
      ordonnances: this.ordonnanceService.getByPatient(patient.id),
      constantes: this.constantesService.getByPatient(patient.id)
    }).subscribe({
      next: ({ ordonnances, constantes }) => {
        this.ordonnances = this.sortOrdonnances(ordonnances);
        this.constantes = this.sortConstantes(constantes);
        this.isLoadingDetails = false;
      },
      error: () => {
        this.detailError = "Impossible de charger les ordonnances et constantes de ce patient.";
        this.isLoadingDetails = false;
      }
    });
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  openOrdonnance(ordonnance) {
    this.selectedOrdonnance = ordonnance;
  }
  closeOrdonnance() {
    this.selectedOrdonnance = null;
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
    return {
      medicaments: "",
      posologie: "",
      instructions: "",
      dateExpiration: ""
    };
  }
  showToast(message, type) {
    const id = ++this.toastId;
    this.toasts = [...this.toasts, { id, message, type }];
    setTimeout(() => this.removeToast(id), 3500);
  }
  static \u0275fac = function MedecinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MedecinComponent)(\u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(OrdonnanceService), \u0275\u0275directiveInject(ConstantesVitalesService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MedecinComponent, selectors: [["app-medecin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 10, consts: [[1, "toast-stack"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "doctor-shell"], [1, "doctor-topbar"], [1, "brand"], [1, "material-icons", "brand__mark"], ["class", "doctor-profile", 4, "ngIf"], [1, "doctor-layout"], [1, "patients-panel"], [1, "panel-heading"], ["type", "button", "title", "Actualiser", 1, "icon-button", 3, "click"], [1, "material-icons"], [1, "search-box"], ["type", "search", "placeholder", "Nom, CIN, statut...", 3, "ngModelChange", "ngModel"], ["class", "state-box", 4, "ngIf"], ["class", "state-box state-box--error", 4, "ngIf"], ["class", "patient-list", 4, "ngIf"], [1, "patient-workspace"], ["class", "empty-detail", 4, "ngIf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "doctor-profile"], [1, "doctor-profile__avatar"], [1, "doctor-profile__text"], ["type", "button", 1, "icon-button", 3, "click", "title"], ["type", "button", "title", "Deconnexion", 1, "icon-button", "icon-button--danger", 3, "click"], [1, "state-box"], [1, "material-icons", "spin"], [1, "state-box", "state-box--error"], [1, "patient-list"], ["class", "patient-row", "type", "button", 3, "patient-row--active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "patient-row", 3, "click"], [1, "patient-row__body"], [1, "empty-detail"], [1, "patient-hero"], [1, "hero-copy"], [1, "eyebrow"], ["class", "detail-loading", 4, "ngIf"], ["class", "detail-error", 4, "ngIf"], ["class", "tabs", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "detail-loading"], [1, "detail-error"], [1, "tabs"], ["type", "button", 1, "tabs__item", 3, "click"], [1, "tab-content"], [1, "metric-grid"], [1, "metric-card"], [1, "split-grid"], [1, "info-panel"], ["class", "latest-vitals", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "latest-vitals"], [1, "vital-strip"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "ordonnance-toolbar"], ["type", "button", 1, "primary-button", 3, "click"], ["class", "ordonnance-list", 4, "ngIf"], [1, "ordonnance-list"], ["class", "ordonnance-card", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "ordonnance-card", 3, "click"], [1, "ordonnance-card__body"], [1, "prescription-form", 3, "ngSubmit"], [1, "field", "field--wide"], ["name", "medicaments", "rows", "5", "placeholder", "Ex: Epoetine alfa 4000 UI...", 3, "ngModelChange", "ngModel"], [1, "field"], ["name", "posologie", "type", "text", "placeholder", "Ex: 1 injection / semaine", 3, "ngModelChange", "ngModel"], ["name", "dateExpiration", "type", "date", 3, "ngModelChange", "ngModel"], ["name", "instructions", "rows", "3", "placeholder", "Surveillance, remarques ou consignes...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-button", 3, "disabled"], ["type", "button", 1, "ghost-button", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "ordonnance-modal", 3, "click"], ["type", "button", "title", "Fermer", 1, "icon-button", 3, "click"]], template: function MedecinComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, MedecinComponent_button_1_Template, 5, 5, "button", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "header", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "health_and_safety");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "strong");
      \u0275\u0275text(9, "DialySys");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "Espace medecin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, MedecinComponent_div_12_Template, 14, 6, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "aside", 8)(15, "div", 9)(16, "div")(17, "span");
      \u0275\u0275text(18, "Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "strong");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 10);
      \u0275\u0275listener("click", function MedecinComponent_Template_button_click_21_listener() {
        return ctx.loadPatients();
      });
      \u0275\u0275elementStart(22, "span", 11);
      \u0275\u0275text(23, "refresh");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "label", 12)(25, "span", 11);
      \u0275\u0275text(26, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function MedecinComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, MedecinComponent_div_28_Template, 4, 0, "div", 14)(29, MedecinComponent_div_29_Template, 4, 1, "div", 15)(30, MedecinComponent_div_30_Template, 3, 2, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "main", 17);
      \u0275\u0275template(32, MedecinComponent_section_32_Template, 7, 0, "section", 18)(33, MedecinComponent_ng_container_33_Template, 20, 19, "ng-container", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, MedecinComponent_div_34_Template, 23, 10, "div", 20);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.currentUser);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.filteredPatients.length);
      \u0275\u0275advance(7);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  color: #18212f !important;\n  background: #f0f4f8 !important;\n  --c-bg: #f0f4f8;\n  --c-card: #ffffff;\n  --c-surface: #f8fafc;\n  --c-border: rgba(148,163,184,.28);\n  --c-text-1: #0f172a;\n  --c-text-2: #334155;\n  --c-text-3: #64748b;\n}\n.doctor-shell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: #18212f !important;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 124, 117, 0.08) 0%,\n      transparent 40%),\n    linear-gradient(\n      225deg,\n      rgba(59, 130, 246, 0.06) 0%,\n      transparent 40%),\n    #f0f4f8 !important;\n}\n.doctor-shell[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  background: #f0f4f8;\n}\n.doctor-topbar[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid rgba(148, 163, 184, 0.28);\n  backdrop-filter: blur(14px);\n}\n.brand[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%], \n.panel-heading[_ngcontent-%COMP%], \n.tabs[_ngcontent-%COMP%], \n.ordonnance-toolbar[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.brand[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  color: #ffffff;\n  background: #147c75;\n  box-shadow: 0 10px 24px rgba(20, 124, 117, 0.22);\n}\n.brand[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) {\n  font-size: 12px;\n  color: #64748b;\n}\n.doctor-profile[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.doctor-profile__avatar[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%]   .hero-avatar[_ngcontent-%COMP%], \n.doctor-profile[_ngcontent-%COMP%]   .patient-row__avatar[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.doctor-profile__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  font-weight: 800;\n  color: #147c75;\n  background: #d9f2ee;\n}\n.doctor-profile__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.doctor-profile[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.doctor-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.doctor-layout[_ngcontent-%COMP%] {\n  min-height: 0;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 340px minmax(0, 1fr);\n  background: #f0f4f8 !important;\n}\n.patients-panel[_ngcontent-%COMP%] {\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.82);\n  border-right: 1px solid rgba(148, 163, 184, 0.3);\n}\n.panel-heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 22px 20px 14px;\n}\n.panel-heading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.panel-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n.panel-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 28px;\n  text-align: center;\n  padding: 3px 8px;\n  border-radius: 999px;\n  color: #147c75;\n  background: #d9f2ee;\n}\n.search-box[_ngcontent-%COMP%] {\n  margin: 0 20px 16px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  border: 1px solid rgba(148, 163, 184, 0.34);\n  border-radius: 8px;\n  background: #ffffff;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #94a3b8;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  color: #18212f;\n  font: inherit;\n  background: transparent;\n}\n.patient-list[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow-y: auto;\n  padding: 0 12px 16px;\n}\n.patient-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  text-align: left;\n  color: inherit;\n  background: transparent;\n  cursor: pointer;\n}\n.patient-row[_ngcontent-%COMP%]:hover, \n.patient-row--active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: rgba(20, 124, 117, 0.24);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07);\n}\n.patient-row__avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 800;\n}\n.patient-row__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.patient-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.patient-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.patient-row__avatar--stable[_ngcontent-%COMP%], \n.hero-avatar--stable[_ngcontent-%COMP%] {\n  color: #147c75;\n  background: #d9f2ee;\n}\n.patient-row__avatar--warning[_ngcontent-%COMP%], \n.hero-avatar--warning[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.patient-row__avatar--critical[_ngcontent-%COMP%], \n.hero-avatar--critical[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #147c75;\n}\n.status-dot--warning[_ngcontent-%COMP%] {\n  background: #d99000;\n}\n.status-dot--critical[_ngcontent-%COMP%] {\n  background: #d92d20;\n}\n.patient-workspace[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-y: auto;\n  padding: 28px;\n  background: #f0f4f8 !important;\n  color: #18212f !important;\n}\n.empty-detail[_ngcontent-%COMP%], \n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: #64748b;\n}\n.empty-detail[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 128px);\n  flex-direction: column;\n  text-align: center;\n}\n.empty-detail[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #94a3b8;\n}\n.empty-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n}\n.empty-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0;\n  line-height: 1.6;\n}\n.state-box[_ngcontent-%COMP%], \n.detail-loading[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px dashed rgba(148, 163, 184, 0.45);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.58);\n}\n.state-box--error[_ngcontent-%COMP%], \n.detail-error[_ngcontent-%COMP%] {\n  color: #b42318;\n  border-color: rgba(217, 45, 32, 0.25);\n  background: rgba(255, 224, 223, 0.58);\n}\n.patient-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  background: #ffffff;\n  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);\n}\n.hero-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 900;\n}\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 30px;\n  letter-spacing: 0;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #147c75;\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.tabs[_ngcontent-%COMP%] {\n  gap: 6px;\n  margin: 20px 0;\n  padding: 6px;\n  border-radius: 8px;\n  border: 1px solid rgba(148, 163, 184, 0.28);\n  background: rgba(255, 255, 255, 0.72);\n}\n.tabs__item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 0;\n  border-radius: 6px;\n  color: #475569;\n  background: transparent;\n  font-weight: 800;\n  cursor: pointer;\n}\n.tabs__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.tabs__item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  min-width: 22px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: rgba(20, 124, 117, 0.12);\n}\n.tabs__item--active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #147c75;\n  box-shadow: 0 10px 20px rgba(20, 124, 117, 0.18);\n}\n.tabs__item--active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.22);\n}\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  background: transparent;\n  color: #18212f !important;\n}\n.metric-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.metric-card[_ngcontent-%COMP%], \n.info-panel[_ngcontent-%COMP%], \n.latest-vitals[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 8px;\n  background: #ffffff !important;\n  color: #18212f !important;\n  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);\n}\n.metric-card[_ngcontent-%COMP%] {\n  min-height: 104px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #ffffff !important;\n}\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #0f172a !important;\n}\n.split-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 18px;\n}\n.info-panel[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.info-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  font-weight: 900;\n}\n.info-panel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n}\n.info-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.info-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eef2f6;\n}\n.info-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.info-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n}\n.info-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  font-weight: 500;\n}\n.latest-vitals[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: minmax(190px, auto) minmax(0, 1fr);\n  gap: 16px;\n}\n.latest-vitals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.latest-vitals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 18px;\n}\n.latest-vitals[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: 0;\n  padding: 12px;\n  border-radius: 8px;\n  background: #eef7ff;\n}\n.vital-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.vital-strip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 8px;\n  color: #475569;\n  background: #f8fafc;\n  text-align: center;\n}\n.vital-strip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #18212f;\n  font-size: 20px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 8px;\n  background: #ffffff !important;\n  color: #18212f !important;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: #ffffff !important;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  border-bottom: 1px solid #e8edf2;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-size: 12px;\n  text-transform: uppercase;\n  background: #f8fafc !important;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0f172a !important;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.ordonnance-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 16px;\n}\n.ordonnance-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.ordonnance-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 8px;\n  color: #18212f !important;\n  background: #ffffff !important;\n  cursor: pointer;\n}\n.ordonnance-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(20, 124, 117, 0.38);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n}\n.ordonnance-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n}\n.ordonnance-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  text-align: left;\n}\n.ordonnance-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.prescription-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  padding: 20px;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%], \n.prescription-form[_ngcontent-%COMP%]   .field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #eef2f6;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n  font-size: 30px;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.prescription-form[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.prescription-form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 4px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 13px;\n  font-weight: 800;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  border-radius: 8px;\n  padding: 11px 12px;\n  resize: vertical;\n  color: #18212f;\n  background: #f8fafc;\n  font: inherit;\n  outline: none;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #147c75;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(20, 124, 117, 0.12);\n}\n.icon-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%], \n.toast[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 8px;\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n}\n.icon-button[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  color: #475569;\n  background: #ffffff;\n}\n.icon-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  color: #147c75;\n  border-color: rgba(20, 124, 117, 0.3);\n}\n.icon-button--danger[_ngcontent-%COMP%]:hover {\n  color: #b42318;\n  border-color: rgba(180, 35, 24, 0.3);\n}\n.primary-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 16px;\n}\n.primary-button[_ngcontent-%COMP%] {\n  border: 0;\n  color: #ffffff;\n  background: #147c75;\n}\n.primary-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.ghost-button[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.36);\n  color: #475569;\n  background: #ffffff;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n.pill--stable[_ngcontent-%COMP%] {\n  color: #147c75;\n  background: #d9f2ee;\n}\n.pill--warning[_ngcontent-%COMP%] {\n  color: #9a5b00;\n  background: #fff2cc;\n}\n.pill--critical[_ngcontent-%COMP%] {\n  color: #b42318;\n  background: #ffe0df;\n}\n.pill--neutral[_ngcontent-%COMP%] {\n  color: #475569;\n  background: #e2e8f0;\n}\n.toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 50;\n  display: grid;\n  gap: 10px;\n}\n.toast[_ngcontent-%COMP%] {\n  max-width: 360px;\n  justify-content: flex-start;\n  padding: 12px 14px;\n  border: 1px solid rgba(148, 163, 184, 0.32);\n  color: #18212f;\n  background: #ffffff;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.14);\n}\n.toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.toast--success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #147c75;\n}\n.toast--warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d99000;\n}\n.toast--error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d92d20;\n}\n.toast--info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2f6fed;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  background: rgba(15, 23, 42, 0.48);\n  backdrop-filter: blur(8px);\n}\n.ordonnance-modal[_ngcontent-%COMP%] {\n  width: min(620px, 100%);\n  max-height: calc(100vh - 48px);\n  overflow-y: auto;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.28);\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   section[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  border-bottom: 1px solid #eef2f6;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.ordonnance-modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eef2f6;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.ordonnance-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.7;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%]::before, body.theme-dark   [_nghost-%COMP%]   .doctor-shell[_ngcontent-%COMP%]::before {\n  background: #0b111e !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-layout[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-layout[_ngcontent-%COMP%] {\n  background: #0b111e !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .doctor-topbar[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .doctor-topbar[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.92) !important;\n  border-bottom-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patients-panel[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patients-panel[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.82) !important;\n  border-right-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-workspace[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-workspace[_ngcontent-%COMP%] {\n  background: #0b111e !important;\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]:hover, body.theme-dark   [_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]:hover, \nbody.theme-dark[_nghost-%COMP%]   .patient-row--active[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-row--active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .search-box[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .tabs__item[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .tabs__item[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .tabs__item--active[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .tabs__item--active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  background: #147c75 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .latest-vitals[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .latest-vitals[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .prescription-form[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .patient-hero[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n  color: #e0eaf8 !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .info-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .table-wrap[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n  border-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%] {\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ordonnance-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .icon-button[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .icon-button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .ghost-button[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .ghost-button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: #94a3b8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n  border-color: rgba(255, 255, 255, 0.12) !important;\n  color: #e0eaf8 !important;\n}\nbody.theme-dark[_nghost-%COMP%]   .state-box[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .state-box[_ngcontent-%COMP%], \nbody.theme-dark[_nghost-%COMP%]   .detail-loading[_ngcontent-%COMP%], body.theme-dark   [_nghost-%COMP%]   .detail-loading[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\n@media (max-width: 1080px) {\n  .doctor-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 300px minmax(0, 1fr);\n  }\n  .metric-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .split-grid[_ngcontent-%COMP%], \n   .latest-vitals[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 780px) {\n  .doctor-topbar[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 72px;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 16px;\n  }\n  .doctor-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .patients-panel[_ngcontent-%COMP%] {\n    max-height: 360px;\n    border-right: 0;\n    border-bottom: 1px solid rgba(148, 163, 184, 0.3);\n  }\n  .patient-workspace[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .patient-hero[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .patient-hero[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-self: flex-start;\n  }\n  .tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .tabs__item[_ngcontent-%COMP%] {\n    min-width: 138px;\n  }\n  .prescription-form[_ngcontent-%COMP%], \n   .metric-grid[_ngcontent-%COMP%], \n   .vital-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=medecin.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MedecinComponent, { className: "MedecinComponent", filePath: "app\\pages\\medecin\\medecin.component.ts", lineNumber: 59 });
})();
export {
  MedecinComponent
};
//# sourceMappingURL=chunk-G6ZDQO5P.js.map
