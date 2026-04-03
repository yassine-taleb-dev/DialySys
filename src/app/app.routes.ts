import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login',           loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'patient',         loadComponent: () => import('./pages/patient/patient.component').then(m => m.PatientComponent) },
  { path: 'medecin',         loadComponent: () => import('./pages/medecin/medecin.component').then(m => m.MedecinComponent) },
  { path: 'planning',        loadComponent: () => import('./pages/planning/planning.component').then(m => m.PlanningComponent) },
  { path: 'infirmier',       loadComponent: () => import('./pages/infirmier/infirmier.component').then(m => m.InfirmierComponent) },
  { path: 'infirmier-majeur',loadComponent: () => import('./pages/infirmier-majeur/infirmier-majeur.component').then(m => m.InfirmierMajeurComponent) },
  { path: 'aide-soignant',   loadComponent: () => import('./pages/aide-soignant/aide-soignant.component').then(m => m.AideSoignantComponent) },

  { path: '**', redirectTo: '/login' }
];
