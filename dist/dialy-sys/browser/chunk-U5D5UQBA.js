import {
  environment
} from "./chunk-LFASSBRV.js";
import {
  HttpClient
} from "./chunk-EH4I5CFZ.js";
import {
  shareReplay,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NP5N7FWI.js";

// src/services/seance.service.ts
function todayLocalIso() {
  const d = /* @__PURE__ */ new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const j = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${j}`;
}
var SeanceService = class _SeanceService {
  http;
  api = `${environment.apiUrl}/seances`;
  cacheTodayKey = "";
  cacheToday$ = null;
  constructor(http) {
    this.http = http;
  }
  invalidateCache() {
    this.cacheToday$ = null;
    this.cacheTodayKey = "";
  }
  getAll() {
    return this.http.get(this.api);
  }
  getToday() {
    const today = todayLocalIso();
    if (this.cacheTodayKey !== today || !this.cacheToday$) {
      this.cacheTodayKey = today;
      this.cacheToday$ = this.http.get(`${this.api}/date/${today}`).pipe(shareReplay(1));
    }
    return this.cacheToday$;
  }
  getByPeriode(debut, fin) {
    return this.http.get(`${this.api}/periode?debut=${debut}&fin=${fin}`);
  }
  getByPatient(patientId) {
    return this.http.get(`${this.api}/patient/${patientId}`);
  }
  getMesSeances() {
    return this.http.get(`${this.api}/mes-seances`);
  }
  getById(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  create(payload) {
    return this.http.post(this.api, payload).pipe(tap(() => this.invalidateCache()));
  }
  planifier(payload) {
    return this.http.post(`${this.api}/planification`, payload).pipe(tap(() => this.invalidateCache()));
  }
  update(id, payload) {
    return this.http.put(`${this.api}/${id}`, payload).pipe(tap(() => this.invalidateCache()));
  }
  delete(id) {
    return this.http.delete(`${this.api}/${id}`).pipe(tap(() => this.invalidateCache()));
  }
  demarrer(id, dureeMinutes) {
    return this.http.put(`${this.api}/${id}/demarrer`, { dureeMinutes }).pipe(tap(() => this.invalidateCache()));
  }
  terminer(id) {
    return this.http.put(`${this.api}/${id}/terminer`, {}).pipe(tap(() => this.invalidateCache()));
  }
  updateHeureFin(id, payload) {
    return this.http.put(`${this.api}/${id}/heure-fin`, payload).pipe(tap(() => this.invalidateCache()));
  }
  static \u0275fac = function SeanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeanceService, factory: _SeanceService.\u0275fac, providedIn: "root" });
};

export {
  SeanceService
};
//# sourceMappingURL=chunk-U5D5UQBA.js.map
