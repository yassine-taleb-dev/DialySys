import {
  environment
} from "./chunk-ESCATL5T.js";
import {
  HttpClient
} from "./chunk-J3ZCRHTI.js";
import {
  shareReplay,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EEOME3E7.js";

// src/services/patient.service.ts
var PatientService = class _PatientService {
  http;
  apiUrl = `${environment.apiUrl}/patients`;
  cacheAll$ = null;
  constructor(http) {
    this.http = http;
  }
  invalidateCache() {
    this.cacheAll$ = null;
  }
  getAll() {
    if (!this.cacheAll$) {
      this.cacheAll$ = this.http.get(this.apiUrl).pipe(tap({ error: () => {
        this.cacheAll$ = null;
      } }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    return this.cacheAll$;
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(payload) {
    return this.http.post(this.apiUrl, payload).pipe(tap(() => this.invalidateCache()));
  }
  update(id, payload) {
    return this.http.put(`${this.apiUrl}/${id}`, payload).pipe(tap(() => this.invalidateCache()));
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => this.invalidateCache()));
  }
  getEquipe(patientId) {
    return this.http.get(`${this.apiUrl}/${patientId}/equipe`);
  }
  addToEquipe(patientId, utilisateurId) {
    return this.http.post(`${this.apiUrl}/${patientId}/equipe/${utilisateurId}`, {});
  }
  removeFromEquipe(patientId, utilisateurId) {
    return this.http.delete(`${this.apiUrl}/${patientId}/equipe/${utilisateurId}`);
  }
  static \u0275fac = function PatientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PatientService, factory: _PatientService.\u0275fac, providedIn: "root" });
};

export {
  PatientService
};
//# sourceMappingURL=chunk-MMBBGFBA.js.map
