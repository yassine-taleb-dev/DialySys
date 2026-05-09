import {
  AuthService
} from "./chunk-XKHRPCVX.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors
} from "./chunk-CGTKSDI3.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-KZPRPR6G.js";

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
    loadComponent: () => import("./chunk-3XRLHNG2.js").then((m) => m.LoginComponent)
  },
  {
    path: "medecin",
    loadComponent: () => import("./chunk-JBNBX3SM.js").then((m) => m.MedecinComponent),
    canActivate: [authGuard],
    data: { roles: ["MEDECIN"] }
  },
  {
    path: "infirmier",
    loadComponent: () => import("./chunk-A3ALAT5A.js").then((m) => m.InfirmierComponent),
    canActivate: [authGuard],
    data: { roles: ["INFIRMIER"] }
  },
  {
    path: "infirmier-majeur",
    loadComponent: () => import("./chunk-L7KBOREB.js").then((m) => m.InfirmierMajeurComponent),
    canActivate: [authGuard],
    data: { roles: ["INFIRMIER_MAJEUR"] }
  },
  {
    path: "aide-soignant",
    loadComponent: () => import("./chunk-H2PAYWXX.js").then((m) => m.AideSoignantComponent),
    canActivate: [authGuard],
    data: { roles: ["AIDE_SOIGNANT"] }
  },
  {
    path: "patient",
    loadComponent: () => import("./chunk-HUHT4GKI.js").then((m) => m.PatientComponent),
    canActivate: [authGuard],
    data: { roles: ["PATIENT"] }
  },
  {
    path: "planning",
    loadComponent: () => import("./chunk-XIUCABZH.js").then((m) => m.PlanningComponent),
    canActivate: [authGuard],
    data: { roles: ["MEDECIN", "INFIRMIER", "INFIRMIER_MAJEUR", "AIDE_SOIGNANT"] }
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-4GDQQCCP.js").then((m) => m.AdminComponent),
    canActivate: [authGuard],
    data: { roles: ["ADMIN"] }
  },
  {
    path: "unauthorized",
    loadComponent: () => import("./chunk-MX4XYEEO.js").then((m) => m.UnauthorizedComponent)
  },
  { path: "**", redirectTo: "/login" }
];

// src/interceptors/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (!token || req.url.includes("/api/auth/")) {
    return next(req);
  }
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(authReq);
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
