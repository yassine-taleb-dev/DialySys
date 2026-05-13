import {
  environment
} from "./chunk-CJHGJ72Z.js";
import {
  HttpClient
} from "./chunk-UMA4ZBEK.js";
import {
  shareReplay,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SO5DYVYC.js";

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
      this.cacheAll$ = this.http.get(this.api).pipe(tap({ error: () => {
        this.cacheAll$ = null;
      } }), shareReplay({ bufferSize: 1, refCount: true }));
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

// src/services/constantes-vitales.service.ts
var ConstantesVitalesService = class _ConstantesVitalesService {
  http;
  api = `${environment.apiUrl}/constantes-vitales`;
  constructor(http) {
    this.http = http;
  }
  create(payload) {
    return this.http.post(this.api, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.api}/${id}`, payload);
  }
  getMesSaisies() {
    return this.http.get(`${this.api}/mes-saisies`);
  }
  getByPatient(patientId) {
    return this.http.get(`${this.api}/patient/${patientId}`);
  }
  static \u0275fac = function ConstantesVitalesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConstantesVitalesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConstantesVitalesService, factory: _ConstantesVitalesService.\u0275fac, providedIn: "root" });
};

export {
  OrdonnanceService,
  ConstantesVitalesService
};
//# sourceMappingURL=chunk-3LRH6NXZ.js.map
