import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'medecin',
    loadComponent: () => import('./pages/medecin/medecin.component').then(m => m.MedecinComponent),
    canActivate: [authGuard],
    data: { roles: ['MEDECIN'] }
  },
  {
    path: 'infirmier-majeur',
    loadComponent: () => import('./pages/infirmier-majeur/infirmier-majeur.component').then(m => m.InfirmierMajeurComponent),
    canActivate: [authGuard],
    data: { roles: ['INFIRMIER_MAJEUR'] }
  },
  {
    path: 'infirmier',
    loadComponent: () => import('./pages/infirmier/infirmier.component').then(m => m.InfirmierComponent),
    canActivate: [authGuard],
    data: { roles: ['INFIRMIER'] }
  },
  {
    path: 'patient',
    loadComponent: () => import('./pages/patient/patient.component').then(m => m.PatientComponent),
    canActivate: [authGuard],
    data: { roles: ['PATIENT'] }
  },
  {
    path: 'planning',
    loadComponent: () => import('./pages/planning/planning.component').then(m => m.PlanningComponent),
    canActivate: [authGuard],
    data: { roles: ['MEDECIN', 'INFIRMIER_MAJEUR', 'INFIRMIER'] }
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'unauthorized',
    loadComponent: () => import('./pages/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
  },

  { path: '**', redirectTo: '/login' }
];
