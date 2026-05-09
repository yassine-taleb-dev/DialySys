import {
  environment
} from "./chunk-XKHRPCVX.js";
import {
  HttpClient
} from "./chunk-CGTKSDI3.js";
import {
  shareReplay,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KZPRPR6G.js";

// src/services/ordonnance.service.ts
var OrdonnanceService = class _OrdonnanceService {
  http;
  cacheAll$ = null;
  api = `${environment.apiUrl}/ordonnances`;
  constructor(http) {
    this.http = http;
  }
  invalidateCache() {
    this.cacheAll$ = null;
  }
  getAll() {
    if (!this.cacheAll$) {
      this.cacheAll$ = this.http.get(this.api).pipe(shareReplay(1));
    }
    return this.cacheAll$;
  }
  getByPatient(patientId) {
    return this.http.get(`${this.api}/patient/${patientId}`);
  }
  getByMedecin(utilisateurId) {
    return this.http.get(`${this.api}/medecin/${utilisateurId}`);
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  create(payload) {
    return this.http.post(this.api, payload).pipe(tap(() => this.invalidateCache()));
  }
  update(id, payload) {
    return this.http.put(`${this.api}/${id}`, payload).pipe(tap(() => this.invalidateCache()));
  }
  updateStatut(id, statut) {
    return this.http.put(`${this.api}/${id}/statut`, { statut }).pipe(tap(() => this.invalidateCache()));
  }
  annuler(id) {
    return this.http.put(`${this.api}/${id}/annuler`, {}).pipe(tap(() => this.invalidateCache()));
  }
  valider(id) {
    return this.http.put(`${this.api}/${id}/valider`, {}).pipe(tap(() => this.invalidateCache()));
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`).pipe(tap(() => this.invalidateCache()));
  }
  static \u0275fac = function OrdonnanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdonnanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrdonnanceService, factory: _OrdonnanceService.\u0275fac, providedIn: "root" });
};

export {
  OrdonnanceService
};
//# sourceMappingURL=chunk-ADRQN3WJ.js.map
