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
    path: 'infirmier',
    loadComponent: () => import('./pages/infirmier/infirmier.component').then(m => m.InfirmierComponent),
    canActivate: [authGuard],
    data: { roles: ['INFIRMIER'] }
  },
  {
    path: 'infirmier-majeur',
    loadComponent: () => import('./pages/infirmier-majeur/infirmier-majeur.component').then(m => m.InfirmierMajeurComponent),
    canActivate: [authGuard],
    data: { roles: ['INFIRMIER_MAJEUR'] }
  },
  {
    path: 'aide-soignant',
    loadComponent: () => import('./pages/aide-soignant/aide-soignant.component').then(m => m.AideSoignantComponent),
    canActivate: [authGuard],
    data: { roles: ['AIDE_SOIGNANT'] }
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
    data: { roles: ['MEDECIN', 'INFIRMIER', 'INFIRMIER_MAJEUR', 'AIDE_SOIGNANT'] }
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'unauthorized',
    loadComponent: () => import('./pages/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
  },

  { path: '**', redirectTo: '/login' }
];
