import {
  HttpClient,
  HttpHeaders,
  Router
} from "./chunk-EH4I5CFZ.js";
import {
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NP5N7FWI.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:8085/api"
};

// src/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = environment.apiUrl;
  keepAliveTimer = null;
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.startKeepAlive();
  }
  startKeepAlive() {
    const base = this.apiUrl.replace(/\/api$/, "");
    this.keepAliveTimer = setInterval(() => {
      this.http.get(`${base}/health`).subscribe({ error: () => {
      } });
    }, 10 * 60 * 1e3);
  }
  login(login, motDePasse, rememberMe = false, twoFactorCode) {
    const body = { login, motDePasse, twoFactorCode, rememberMe };
    return this.http.post(`${this.apiUrl}/auth/login`, body).pipe(tap((response) => {
      if (response?.token && response?.utilisateur) {
        this.clearSession();
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("token", response.token);
        storage.setItem("utilisateur", JSON.stringify(response.utilisateur));
      }
    }));
  }
  logout() {
    const token = this.getToken();
    this.clearSession();
    this.router.navigate(["/login"]);
    if (token) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      this.http.post(`${this.apiUrl}/auth/logout`, {}, { headers }).subscribe({ error: () => {
      } });
    }
  }
  verifyToken() {
    return this.http.get(`${this.apiUrl}/auth/verify`);
  }
  refreshToken() {
    return this.http.post(`${this.apiUrl}/auth/refresh`, {});
  }
  resetPassword(loginOuEmail) {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, { email: loginOuEmail });
  }
  getToken() {
    return localStorage.getItem("token") ?? sessionStorage.getItem("token");
  }
  getUtilisateur() {
    const raw = localStorage.getItem("utilisateur") ?? sessionStorage.getItem("utilisateur");
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      this.clearSession();
      return null;
    }
  }
  getRole() {
    const role = this.getUtilisateur()?.role ?? "";
    return String(role).toUpperCase().replace(/^ROLE_/, "");
  }
  get utilisateurId() {
    return this.getUtilisateur()?.id ?? 0;
  }
  getCurrentUserId() {
    return this.utilisateurId;
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  clearSession() {
    ["token", "utilisateur"].forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  environment,
  AuthService
};
//# sourceMappingURL=chunk-LFASSBRV.js.map
