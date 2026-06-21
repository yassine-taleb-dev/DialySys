import {
  AuthService
} from "./chunk-LFASSBRV.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors
} from "./chunk-EH4I5CFZ.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-NP5N7FWI.js";

// src/guards/auth.guard.ts
var authGuard = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    router.navigate(["/login"]);
    return false;
  }
  const allowedRoles = route.data?.["roles"] ?? [];
  if (allowedRoles.length > 0) {
    const userRole = auth.getRole();
    const allowed = allowedRoles.map((role) => role.toUpperCase().replace(/^ROLE_/, ""));
    if (!allowed.includes(userRole)) {
      router.navigate(["/unauthorized"]);
      return false;
    }
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-NINDXMY5.js").then((m) => m.LoginComponent)
  },
  {
    path: "medecin",
    loadComponent: () => import("./chunk-JL52PF62.js").then((m) => m.MedecinComponent),
    canActivate: [authGuard],
    data: { roles: ["MEDECIN"] }
  },
  {
    path: "infirmier-majeur",
    loadComponent: () => import("./chunk-NG5RIKBL.js").then((m) => m.InfirmierMajeurComponent),
    canActivate: [authGuard],
    data: { roles: ["INFIRMIER_MAJEUR"] }
  },
  {
    path: "infirmier",
    loadComponent: () => import("./chunk-W3XML73G.js").then((m) => m.InfirmierComponent),
    canActivate: [authGuard],
    data: { roles: ["INFIRMIER"] }
  },
  {
    path: "patient",
    loadComponent: () => import("./chunk-TNBEMKN5.js").then((m) => m.PatientComponent),
    canActivate: [authGuard],
    data: { roles: ["PATIENT"] }
  },
  {
    path: "planning",
    loadComponent: () => import("./chunk-WH6BXHS4.js").then((m) => m.PlanningComponent),
    canActivate: [authGuard],
    data: { roles: ["MEDECIN", "INFIRMIER_MAJEUR", "INFIRMIER"] }
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-4CRVWXXH.js").then((m) => m.AdminComponent),
    canActivate: [authGuard],
    data: { roles: ["ADMIN"] }
  },
  {
    path: "unauthorized",
    loadComponent: () => import("./chunk-B2TRF3KN.js").then((m) => m.UnauthorizedComponent)
  },
  { path: "**", redirectTo: "/login" }
];

// src/interceptors/jwt.interceptor.ts
var PUBLIC_URLS = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
  "/api/auth/refresh"
];
var jwtInterceptor = (req, next) => {
  const isPublic = PUBLIC_URLS.some((url) => req.url.includes(url));
  if (isPublic) {
    return next(req);
  }
  const token = inject(AuthService).getToken();
  if (!token) {
    return next(req);
  }
  return next(req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "DialySys";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
