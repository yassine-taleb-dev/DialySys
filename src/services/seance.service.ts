import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeanceService {
  private API = 'http://localhost:8085/api/seances';

  constructor(private http: HttpClient) {}

  getByPeriode(debut: string, fin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/periode?debut=${debut}&fin=${fin}`);
  }

  getToday(): Observable<any[]> {
    const today = new Date().toISOString().split('T')[0];
    return this.http.get<any[]>(`${this.API}/date/${today}`);
  }
}