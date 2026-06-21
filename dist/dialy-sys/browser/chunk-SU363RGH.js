import {
  environment
} from "./chunk-LFASSBRV.js";
import {
  HttpClient
} from "./chunk-EH4I5CFZ.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NP5N7FWI.js";

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

// src/services/alerte.service.ts
var AlerteService = class _AlerteService {
  http;
  api = `${environment.apiUrl}/alertes`;
  constructor(http) {
    this.http = http;
  }
  // ── GET /api/alertes → toutes les alertes non lues ──────────────
  getAll() {
    return this.http.get(this.api);
  }
  // ── GET /api/alertes/mes-alertes/{username} ──────────────────────
  getMesAlertes(username) {
    return this.http.get(`${this.api}/mes-alertes/${username}`);
  }
  // ── GET /api/alertes/patient/{patientId} ────────────────────────
  getByPatient(patientId) {
    return this.http.get(`${this.api}/patient/${patientId}`);
  }
  // ── POST /api/alertes → création manuelle (admin) ───────────────
  create(payload) {
    return this.http.post(this.api, payload);
  }
  // ── PUT /api/alertes/{id}/lue ────────────────────────────────────
  marquerLue(id) {
    return this.http.put(`${this.api}/${id}/lue`, {});
  }
  // ── PUT /api/alertes/lue-tout ────────────────────────────────────
  marquerToutesLues() {
    return this.http.put(`${this.api}/lue-tout`, {});
  }
  // ── PUT /api/alertes/{id}/traiter ─────────────────────────────────
  traiter(id) {
    return this.http.put(`${this.api}/${id}/traiter`, {});
  }
  static \u0275fac = function AlerteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlerteService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlerteService, factory: _AlerteService.\u0275fac, providedIn: "root" });
};

export {
  ConstantesVitalesService,
  AlerteService
};
//# sourceMappingURL=chunk-SU363RGH.js.map
