import {
  AuthService,
  environment
} from "./chunk-CJHGJ72Z.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-UXOLEOXG.js";
import {
  CommonModule,
  HttpClient,
  NgIf,
  Router
} from "./chunk-UMA4ZBEK.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SO5DYVYC.js";

// src/app/pages/login/login.component.ts
function LoginComponent_div_0_ng_container_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
function LoginComponent_div_0_ng_container_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 20);
    \u0275\u0275text(2, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Envoyer le lien ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_0_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 20);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.forgotError, " ");
  }
}
function LoginComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3, "lock_reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "R\xE9initialisation du mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Saisissez votre login ou votre e-mail. Un mot de passe temporaire sera envoy\xE9 si le compte existe.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "div", 27)(10, "span", 28);
    \u0275\u0275text(11, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_0_ng_container_2_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.forgotId, $event) || (ctx_r1.forgotId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 30);
    \u0275\u0275listener("click", function LoginComponent_div_0_ng_container_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.envoyerReset());
    });
    \u0275\u0275template(14, LoginComponent_div_0_ng_container_2_span_14_Template, 1, 0, "span", 31)(15, LoginComponent_div_0_ng_container_2_span_15_Template, 4, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, LoginComponent_div_0_ng_container_2_div_16_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(17, "button", 33);
    \u0275\u0275listener("click", function LoginComponent_div_0_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeForgot());
    });
    \u0275\u0275text(18, "Annuler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.forgotId);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.forgotLoading || !ctx_r1.forgotId.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.forgotLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotError);
  }
}
function LoginComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Demande envoy\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Si un compte existe pour ");
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ", un e-mail de r\xE9initialisation a \xE9t\xE9 envoy\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 38);
    \u0275\u0275listener("click", function LoginComponent_div_0_ng_container_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeForgot());
    });
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Fermer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.forgotId);
  }
}
function LoginComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function LoginComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForgot());
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function LoginComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, LoginComponent_div_0_ng_container_2_Template, 19, 5, "ng-container", 23)(3, LoginComponent_div_0_ng_container_3_Template, 15, 1, "ng-container", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.forgotSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotSent);
  }
}
function LoginComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Bienvenue, ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
  }
}
function LoginComponent_form_25_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "label");
    \u0275\u0275text(2, "Code de v\xE9rification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "span", 28);
    \u0275\u0275text(5, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_25_div_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.twoFactorCode, $event) || (ctx_r1.twoFactorCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("field--error", ctx_r1.errorMessage && !ctx_r1.twoFactorCode.trim());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.twoFactorCode);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function LoginComponent_form_25_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 20);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_form_25_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
function LoginComponent_form_25_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Se connecter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_form_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 41);
    \u0275\u0275listener("ngSubmit", function LoginComponent_form_25_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "label");
    \u0275\u0275text(3, "Login ou Gmail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "span", 28);
    \u0275\u0275text(6, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_25_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.identifiant, $event) || (ctx_r1.identifiant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 42)(9, "label");
    \u0275\u0275text(10, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 43)(12, "span", 28);
    \u0275\u0275text(13, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_25_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.motDePasse, $event) || (ctx_r1.motDePasse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 46);
    \u0275\u0275listener("click", function LoginComponent_form_25_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(18, LoginComponent_form_25_div_18_Template, 7, 4, "div", 47)(19, LoginComponent_form_25_div_19_Template, 4, 1, "div", 48);
    \u0275\u0275elementStart(20, "div", 49)(21, "label", 50)(22, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_25_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rememberMe, $event) || (ctx_r1.rememberMe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Se souvenir de moi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 52);
    \u0275\u0275listener("click", function LoginComponent_form_25_Template_a_click_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForgot($event));
    });
    \u0275\u0275text(26, " Mot de passe oubli\xE9 ? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 53);
    \u0275\u0275template(28, LoginComponent_form_25_span_28_Template, 1, 0, "span", 31)(29, LoginComponent_form_25_ng_container_29_Template, 5, 0, "ng-container", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("field--error", ctx_r1.errorMessage && !ctx_r1.identifiant.trim());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.identifiant);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275classProp("field--error", ctx_r1.errorMessage && !ctx_r1.motDePasse.trim());
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.motDePasse);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPassword ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requiresTwoFactor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rememberMe);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
  }
}
var LoginComponent = class _LoginComponent {
  router;
  authService;
  http;
  identifiant = "";
  motDePasse = "";
  showPassword = false;
  isLoading = false;
  errorMessage = "";
  loginSuccess = false;
  roleLabel = "";
  requiresTwoFactor = false;
  twoFactorCode = "";
  // ── Se souvenir de moi ──
  rememberMe = false;
  // ── Mot de passe oublié ──
  showForgotModal = false;
  forgotId = "";
  forgotSent = false;
  forgotLoading = false;
  forgotError = "";
  // ── Stats dynamiques ──
  statPatients = 0;
  statEfficacite = 0;
  statsLoading = true;
  roleRoutes = {
    MEDECIN: "/medecin",
    INFIRMIER: "/infirmier",
    INFIRMIER_MAJEUR: "/infirmier-majeur",
    AIDE_SOIGNANT: "/infirmier",
    PATIENT: "/patient",
    ADMIN: "/admin"
  };
  roleLabels = {
    MEDECIN: "M\xE9decin",
    INFIRMIER: "Infirmier",
    INFIRMIER_MAJEUR: "Infirmier Majeur",
    AIDE_SOIGNANT: "Infirmier",
    PATIENT: "Patient",
    ADMIN: "Administrateur"
  };
  constructor(router, authService, http) {
    this.router = router;
    this.authService = authService;
    this.http = http;
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getRole();
      const route = this.roleRoutes[role];
      if (route)
        this.router.navigate([route]);
    }
    this.rememberMe = true;
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/patients`).subscribe({
      next: (patients) => {
        const actifs = patients.filter((p) => ["STABLE", "ACTIF", "EN_COURS"].includes(p.statut?.toUpperCase?.() ?? p.statut)).length;
        const total = patients.length || 1;
        const efficacite = Math.round(actifs / total * 1e3) / 10;
        this.statsLoading = false;
        this.animateCount("statPatients", 0, actifs, 1200);
        this.animateCount("statEfficacite", 0, efficacite, 1400);
      },
      error: () => {
        this.statsLoading = false;
        this.animateCount("statPatients", 0, 0, 800);
        this.animateCount("statEfficacite", 0, 0, 1e3);
      }
    });
  }
  animateCount(key, from, to, duration) {
    const steps = 40;
    const interval = duration / steps;
    const increment = (to - from) / steps;
    let current = from;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      this[key] = Math.round(current * 10) / 10;
      if (step >= steps) {
        this[key] = to;
        clearInterval(timer);
      }
    }, interval);
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  login() {
    this.errorMessage = "";
    if (!this.identifiant.trim()) {
      this.errorMessage = "Veuillez saisir votre identifiant.";
      return;
    }
    if (!this.motDePasse.trim()) {
      this.errorMessage = "Veuillez saisir votre mot de passe.";
      return;
    }
    if (this.requiresTwoFactor && !this.twoFactorCode.trim()) {
      this.errorMessage = "Veuillez saisir le code de verification recu par email.";
      return;
    }
    this.isLoading = true;
    this.authService.login(this.identifiant.trim(), this.motDePasse.trim(), this.rememberMe, this.requiresTwoFactor ? this.twoFactorCode.trim() : void 0).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.requiresTwoFactor && !response.token) {
          this.requiresTwoFactor = true;
          this.twoFactorCode = "";
          this.errorMessage = response.message ?? "Code de verification envoye par email.";
          return;
        }
        const role = this.authService.getRole();
        const route = this.roleRoutes[role];
        if (!route) {
          this.errorMessage = `R\xF4le non reconnu : ${role || "vide"}. Contactez l'administrateur.`;
          return;
        }
        this.roleLabel = this.roleLabels[role] ?? role;
        this.loginSuccess = true;
        setTimeout(() => this.router.navigate([route]), 700);
      },
      error: (err) => {
        this.isLoading = false;
        this.loginSuccess = false;
        if (err.status === 0) {
          this.errorMessage = "Impossible de joindre le serveur. V\xE9rifiez votre connexion.";
        } else if (err.status === 403) {
          this.errorMessage = "Compte d\xE9sactiv\xE9. Contactez votre administrateur.";
        } else {
          this.errorMessage = err?.error?.message ?? "Identifiants incorrects. Veuillez r\xE9essayer.";
        }
      }
    });
  }
  // ── Mot de passe oublié ──────────────────────────────────────────────────
  openForgot(event) {
    event.preventDefault();
    this.forgotId = this.identifiant;
    this.forgotSent = false;
    this.forgotError = "";
    this.forgotLoading = false;
    this.showForgotModal = true;
  }
  closeForgot() {
    this.showForgotModal = false;
    this.forgotSent = false;
    this.forgotError = "";
    this.forgotLoading = false;
  }
  envoyerReset() {
    if (!this.forgotId.trim())
      return;
    this.forgotLoading = true;
    this.forgotError = "";
    this.authService.resetPassword(this.forgotId.trim()).subscribe({
      next: () => {
        this.forgotLoading = false;
        this.forgotSent = true;
      },
      error: (err) => {
        this.forgotLoading = false;
        if (err.status === 404) {
          this.forgotError = "Aucun compte trouv\xE9 pour cet identifiant.";
        } else if (err.status === 0) {
          this.forgotError = "Impossible de joindre le serveur.";
        } else {
          this.forgotError = err?.error?.message ?? "Une erreur est survenue. R\xE9essayez.";
        }
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 5, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "shell"], [1, "brand"], [1, "hex-bg"], [1, "brand__inner"], [1, "brand__emblem"], ["width", "52", "height", "52", "viewBox", "0 0 52 52", "fill", "none"], ["cx", "26", "cy", "26", "r", "24", "fill", "rgba(0,217,196,0.08)", "stroke", "rgba(0,217,196,0.3)", "stroke-width", "1.5"], ["d", "M26 13v10M21 18h10", "stroke", "#00D9C4", "stroke-width", "2.8", "stroke-linecap", "round"], ["d", "M14 33c0 0 3-9 6-9s4 6 6 6 3-9 6-9 6 9 6 9", "stroke", "#00D9C4", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "brand__title"], [1, "ecg-strip"], ["viewBox", "0 0 600 60", "preserveAspectRatio", "none", 1, "ecg-svg"], ["points", "0,30 30,30 35,30 38,28 40,8 43,52 46,30 50,30 55,30\n                  95,30 100,30 103,28 105,8 108,52 111,30 115,30 120,30\n                  160,30 165,30 168,28 170,8 173,52 176,30 180,30 185,30\n                  225,30 230,30 233,28 235,8 238,52 241,30 245,30 250,30\n                  290,30 295,30 298,28 300,8 303,52 306,30 310,30 315,30\n                  355,30 360,30 363,28 365,8 368,52 371,30 375,30 380,30\n                  420,30 425,30 428,28 430,8 433,52 436,30 440,30 445,30\n                  485,30 490,30 493,28 495,8 498,52 501,30 505,30 600,30", 1, "ecg-line"], [1, "form-area"], [1, "form-card"], [1, "form-card__head"], ["class", "success-overlay", 4, "ngIf"], ["class", "login-form", 3, "ngSubmit", 4, "ngIf"], [1, "ssl-badge"], [1, "material-icons"], [1, "modal-overlay", 3, "click"], [1, "forgot-modal", 3, "click"], [4, "ngIf"], [1, "forgot-modal__head"], [1, "material-icons", "forgot-icon"], [1, "forgot-modal__body"], [1, "input-wrap", 2, "margin-bottom", "16px"], [1, "material-icons", "prefix-icon"], ["type", "text", "placeholder", "Login ou adresse e-mail", 3, "ngModelChange", "ngModel"], [1, "btn-submit", "btn-submit--sm", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "forgot-error", 4, "ngIf"], [1, "forgot-cancel", 3, "click"], [1, "spinner"], [1, "forgot-error"], [1, "forgot-success"], [1, "material-icons", "forgot-check"], [1, "btn-submit", "btn-submit--sm", 3, "click"], [1, "success-overlay"], [1, "material-icons", "success-check"], [1, "login-form", 3, "ngSubmit"], [1, "field"], [1, "input-wrap"], ["type", "text", "placeholder", "Ex: medecin ou prenom.nom@gmail.com", "autocomplete", "username", "name", "identifiant", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", "name", "motDePasse", 3, "ngModelChange", "type", "ngModel", "disabled"], ["type", "button", 1, "vis-btn", 3, "click"], ["class", "field", 3, "field--error", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "form-row"], [1, "remember-me"], ["type", "checkbox", "name", "rememberMe", 3, "ngModelChange", "ngModel"], ["href", "#", 1, "forgot-link", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["type", "text", "placeholder", "Code \xE0 6 chiffres", "autocomplete", "one-time-code", "inputmode", "numeric", "maxlength", "6", "name", "twoFactorCode", 3, "ngModelChange", "ngModel", "disabled"], [1, "error-msg"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoginComponent_div_0_Template, 4, 2, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "aside", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "circle", 7)(8, "path", 8)(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "h1", 10);
      \u0275\u0275text(11, "Dialy");
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Sys");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 12);
      \u0275\u0275element(16, "polyline", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "main", 14)(18, "div", 15)(19, "div", 16)(20, "h2");
      \u0275\u0275text(21, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Bienvenue \u2014 acc\xE9dez \xE0 votre espace m\xE9dical");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, LoginComponent_div_24_Template, 7, 1, "div", 17)(25, LoginComponent_form_25_Template, 30, 16, "form", 18);
      \u0275\u0275elementStart(26, "div", 19)(27, "span", 20);
      \u0275\u0275text(28, "verified_user");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Connexion chiffr\xE9e SSL \xB7 Conforme RGPD");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showForgotModal);
      \u0275\u0275advance(18);
      \u0275\u0275classProp("card--success", ctx.loginSuccess);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loginSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loginSuccess);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm], styles: [`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
  min-height: 100vh;
  min-height: 100dvh;
}
.shell[_ngcontent-%COMP%] {
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
}
.brand[_ngcontent-%COMP%] {
  position: relative;
  flex: 0 0 42%;
  background:
    linear-gradient(
      160deg,
      #050A16 0%,
      #080F1E 60%,
      #050B17 100%);
  border-right: 1px solid var(--c-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.brand[_ngcontent-%COMP%]   .hex-bg[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,47 30,62 2,47 2,17' fill='none' stroke='%2300D9C408' stroke-width='1'/%3E%3Cpolygon points='30,54 58,69 58,99 30,114 2,99 2,69' fill='none' stroke='%2300D9C408' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 60px 104px;
  opacity: 0.8;
}
.brand[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  background:
    radial-gradient(
      ellipse,
      rgba(0, 217, 196, 0.07) 0%,
      transparent 70%);
  pointer-events: none;
}
.brand__inner[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 40px;
  gap: 0;
}
.brand__emblem[_ngcontent-%COMP%] {
  width: 88px;
  height: 88px;
  border-radius: 24px;
  background: rgba(0, 217, 196, 0.07);
  border: 1.5px solid rgba(0, 217, 196, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 48px rgba(0, 217, 196, 0.14);
  margin-bottom: 24px;
}
.brand__title[_ngcontent-%COMP%] {
  font-family: var(--f-head);
  font-size: 44px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -2px;
  line-height: 1;
  margin: 0 0 10px;
}
.brand__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--c-teal);
}
.brand__subtitle[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 28px;
}
.brand__divider[_ngcontent-%COMP%] {
  width: 40px;
  height: 2px;
  background:
    linear-gradient(
      90deg,
      transparent,
      var(--c-teal),
      transparent);
  border-radius: 2px;
  margin-bottom: 28px;
}
.brand__desc[_ngcontent-%COMP%] {
  font-size: 13.5px;
  line-height: 1.8;
  color: var(--c-text-2);
  max-width: 300px;
  margin: 0 0 32px;
}
.brand__tags[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.brand__tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 13px;
  border-radius: 20px;
  background: rgba(0, 217, 196, 0.07);
  border: 1px solid rgba(0, 217, 196, 0.18);
  font-size: 11px;
  font-weight: 600;
  color: var(--c-teal);
  letter-spacing: 0.04em;
}
.brand__tag[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 12px;
}
.ecg-strip[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  padding: 0 0 20px;
  overflow: hidden;
}
.ecg-svg[_ngcontent-%COMP%] {
  width: 100%;
  height: 60px;
  display: block;
}
.ecg-line[_ngcontent-%COMP%] {
  fill: none;
  stroke: var(--c-teal);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: _ngcontent-%COMP%_ecg-draw 4s linear infinite;
  filter: drop-shadow(0 0 3px var(--c-teal));
}
@keyframes _ngcontent-%COMP%_ecg-draw {
  0% {
    stroke-dashoffset: 1500;
    opacity: 0;
  }
  5% {
    opacity: 0.7;
  }
  70% {
    stroke-dashoffset: 0;
    opacity: 0.7;
  }
  85% {
    stroke-dashoffset: 0;
    opacity: 0.2;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}
.form-area[_ngcontent-%COMP%] {
  flex: 1;
  background: var(--c-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-width: 0;
}
.form-card[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 420px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  padding: 40px;
}
.form-card__head[_ngcontent-%COMP%] {
  margin-bottom: 28px;
}
.form-card__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-family: var(--f-head);
  font-size: 26px;
  font-weight: 700;
  color: var(--c-text-1);
  margin: 0 0 6px;
}
.form-card__head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #ffffff;
  margin: 0;
}
.role-tabs[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 28px;
}
.role-tab[_ngcontent-%COMP%] {
  padding: 7px 2px;
  background: transparent;
  border: none;
  border-radius: 6px;
  font-size: 10.5px;
  font-weight: 600;
  color: var(--c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.role-tab.active[_ngcontent-%COMP%] {
  background: var(--c-teal);
  color: #050A14;
  box-shadow: 0 2px 10px rgba(0, 217, 196, 0.35);
}
.role-tab[_ngcontent-%COMP%]:not(.active):hover {
  color: var(--c-text-1);
  background: var(--c-card-hi);
}
.role-tab--admin.active[_ngcontent-%COMP%] {
  background: var(--c-red);
  color: #fff;
  box-shadow: 0 2px 10px rgba(255, 87, 87, 0.35);
}
.login-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.input-wrap[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.input-wrap[_ngcontent-%COMP%]   .prefix-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 13px;
  font-size: 17px;
  color: var(--c-text-3);
  pointer-events: none;
  transition: color 0.2s;
}
.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 11px 44px 11px 42px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  color: var(--c-text-1);
  font-family: var(--f-body);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: var(--c-text-3);
}
.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  border-color: var(--c-teal);
  box-shadow: 0 0 0 3px rgba(0, 217, 196, 0.08);
}
.input-wrap[_ngcontent-%COMP%]:focus-within   .prefix-icon[_ngcontent-%COMP%] {
  color: var(--c-teal);
}
.vis-btn[_ngcontent-%COMP%] {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  color: var(--c-text-3);
  display: flex;
  align-items: center;
}
.vis-btn[_ngcontent-%COMP%]:hover {
  color: var(--c-text-2);
}
.vis-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 17px;
}
.form-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -4px;
  gap: 12px;
  flex-wrap: wrap;
}
.remember-me[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: #ffffff;
  cursor: pointer;
}
.remember-me[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  accent-color: var(--c-teal);
}
.forgot-link[_ngcontent-%COMP%] {
  font-size: 12.5px;
  color: var(--c-teal);
  opacity: 0.75;
  text-decoration: none;
}
.forgot-link[_ngcontent-%COMP%]:hover {
  opacity: 1;
}
.btn-submit[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 13px;
  background: var(--c-teal);
  border: none;
  border-radius: 8px;
  color: #050A14;
  font-family: var(--f-head);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
  margin-top: 4px;
  cursor: pointer;
  transition:
    filter 0.2s,
    transform 0.1s,
    box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(0, 217, 196, 0.3);
}
.btn-submit[_ngcontent-%COMP%]:hover {
  filter: brightness(1.08);
  box-shadow: 0 6px 24px rgba(0, 217, 196, 0.45);
}
.btn-submit[_ngcontent-%COMP%]:active {
  transform: translateY(1px);
}
.btn-submit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.ssl-badge[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 24px;
  font-size: 11.5px;
  color: var(--c-text-3);
}
.ssl-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--c-green);
}
.error-msg[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  background: var(--c-red-soft);
  border: 1px solid rgba(255, 87, 87, 0.3);
  border-radius: 8px;
  font-size: 12.5px;
  color: var(--c-red);
  animation: toastIn 0.2s ease;
}
.error-msg[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
  flex-shrink: 0;
}
.field--error[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  border-color: var(--c-red) !important;
  box-shadow: 0 0 0 3px rgba(255, 87, 87, 0.08);
}
.spinner[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(5, 10, 20, 0.3);
  border-top-color: #050A14;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.card--success[_ngcontent-%COMP%] {
  border-color: rgba(48, 209, 88, 0.4);
  box-shadow: 0 0 0 3px rgba(48, 209, 88, 0.08);
}
.success-overlay[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 40px 20px;
  animation: toastIn 0.3s ease;
  text-align: center;
}
.success-overlay[_ngcontent-%COMP%]   .success-check[_ngcontent-%COMP%] {
  font-size: 52px;
  color: var(--c-green);
  animation: _ngcontent-%COMP%_successPop 0.4s cubic-bezier(0.2, 1.2, 0.4, 1) both;
}
.success-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {
  font-size: 14px;
  color: var(--c-text-2);
}
.success-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child   b[_ngcontent-%COMP%] {
  color: var(--c-text-1);
}
@keyframes _ngcontent-%COMP%_successPop {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.demo-hint[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--c-text-3);
  margin-top: -4px;
}
.demo-hint[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--c-blue);
  flex-shrink: 0;
}
.btn-submit--sm[_ngcontent-%COMP%] {
  padding: 10px;
  font-size: 13px;
  margin-top: 0;
}
.forgot-modal[_ngcontent-%COMP%] {
  background: var(--c-card);
  border: 1px solid var(--c-border-hi);
  border-radius: var(--radius-lg);
  padding: 32px;
  width: 100%;
  max-width: 380px;
  animation: modalIn 0.22s ease;
}
.forgot-modal__head[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 24px;
}
.forgot-modal__head[_ngcontent-%COMP%]   .forgot-icon[_ngcontent-%COMP%] {
  display: block;
  font-size: 40px;
  color: var(--c-teal);
  margin: 0 auto 14px;
}
.forgot-modal__head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-family: var(--f-head);
  font-size: 17px;
  font-weight: 700;
  color: var(--c-text-1);
  margin: 0 0 8px;
}
.forgot-modal__head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--c-text-2);
  margin: 0;
  line-height: 1.5;
}
.forgot-success[_ngcontent-%COMP%] {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.forgot-success[_ngcontent-%COMP%]   .forgot-check[_ngcontent-%COMP%] {
  font-size: 48px;
  color: var(--c-green);
  animation: _ngcontent-%COMP%_successPop 0.4s cubic-bezier(0.2, 1.2, 0.4, 1) both;
}
.forgot-success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-family: var(--f-head);
  font-size: 18px;
  font-weight: 700;
  color: var(--c-text-1);
  margin: 0;
}
.forgot-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--c-text-2);
  line-height: 1.55;
  margin: 0;
}
.forgot-success[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  margin-top: 8px;
  width: 100%;
}
.forgot-error[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  color: var(--c-red, #f87171);
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  padding: 8px 12px;
  margin-top: 8px;
}
.forgot-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
  flex-shrink: 0;
}
.forgot-cancel[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  margin-top: 10px;
  background: none;
  border: none;
  color: var(--c-text-3);
  font-size: 13px;
  font-family: var(--f-body);
  cursor: pointer;
  padding: 6px;
}
.forgot-cancel[_ngcontent-%COMP%]:hover {
  color: var(--c-text-2);
}
@media (max-width: 900px) {
  .brand[_ngcontent-%COMP%] {
    flex: 0 0 36%;
  }
  .brand__title[_ngcontent-%COMP%] {
    font-size: 36px;
  }
  .brand__desc[_ngcontent-%COMP%] {
    font-size: 12.5px;
  }
}
@media (max-width: 768px) {
  .shell[_ngcontent-%COMP%] {
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .brand[_ngcontent-%COMP%] {
    flex: 0 0 auto;
    min-height: 0;
  }
  .brand[_ngcontent-%COMP%]   .brand__inner[_ngcontent-%COMP%] {
    padding: 16px 20px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
    text-align: left;
  }
  .brand[_ngcontent-%COMP%]   .brand__emblem[_ngcontent-%COMP%] {
    width: 46px;
    height: 46px;
    margin-bottom: 0;
    margin-right: 0;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .brand[_ngcontent-%COMP%]   .brand__title[_ngcontent-%COMP%] {
    font-size: 24px;
    margin: 0;
    letter-spacing: -1px;
  }
  .brand[_ngcontent-%COMP%]   .brand__subtitle[_ngcontent-%COMP%] {
    font-size: 9.5px;
    margin: 0;
  }
  .brand[_ngcontent-%COMP%]   .brand__divider[_ngcontent-%COMP%] {
    display: none;
  }
  .brand[_ngcontent-%COMP%]   .brand__desc[_ngcontent-%COMP%] {
    display: none;
  }
  .brand[_ngcontent-%COMP%]   .brand__tags[_ngcontent-%COMP%] {
    display: none;
  }
  .brand[_ngcontent-%COMP%]   .brand__title[_ngcontent-%COMP%], 
   .brand[_ngcontent-%COMP%]   .brand__subtitle[_ngcontent-%COMP%] {
    flex: 1;
  }
  .ecg-strip[_ngcontent-%COMP%] {
    display: none;
  }
  .form-area[_ngcontent-%COMP%] {
    flex: 1;
    padding: 16px;
    align-items: flex-start;
    overflow-y: auto;
  }
  .form-card[_ngcontent-%COMP%] {
    padding: 22px 18px;
    max-width: 100%;
    border-radius: 14px;
  }
  .role-tabs[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 430px) {
  .brand[_ngcontent-%COMP%]   .brand__inner[_ngcontent-%COMP%] {
    padding: 12px 14px;
    gap: 10px;
  }
  .brand__emblem[_ngcontent-%COMP%] {
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }
  .brand__title[_ngcontent-%COMP%] {
    font-size: 20px;
  }
  .brand__subtitle[_ngcontent-%COMP%] {
    font-size: 9px;
  }
  .form-area[_ngcontent-%COMP%] {
    padding: 12px;
  }
  .form-card[_ngcontent-%COMP%] {
    padding: 18px 14px;
  }
  .form-card__head[_ngcontent-%COMP%] {
    margin-bottom: 18px;
  }
  .form-card__head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 20px;
  }
  .login-form[_ngcontent-%COMP%] {
    gap: 14px;
  }
  .form-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .role-tabs[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
  .role-tab[_ngcontent-%COMP%] {
    font-size: 9.5px;
    padding: 6px 2px;
  }
}
.stat-pulse[_ngcontent-%COMP%] {
  display: inline-block;
  animation: _ngcontent-%COMP%_statBlink 1s ease-in-out infinite;
  color: var(--c-teal);
}
@keyframes _ngcontent-%COMP%_statBlink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
/*# sourceMappingURL=login.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\pages\\login\\login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-FGXAGKNM.js.map
