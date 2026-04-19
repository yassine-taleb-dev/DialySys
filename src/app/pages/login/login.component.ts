import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, LoginResponseDto } from '../../../services/auth.service';
import { environment } from '../../../environments/environment';

type Role = 'medecin' | 'infirmier' | 'infirmier-majeur' | 'aide-soignant' | 'patient' | 'admin';

// Maps the role string returned by the backend to an app route
const ROLE_ROUTES: Record<string, string> = {
  'MEDECIN':          '/medecin',
  'INFIRMIER':        '/infirmier',
  'INFIRMIER_MAJEUR': '/infirmier-majeur',
  'AIDE_SOIGNANT':    '/aide-soignant',
  'PATIENT':          '/patient',
  'ADMIN':            '/admin',
};

// Labels shown in the UI role-tab selector
const ROLE_LABELS: Record<Role, string> = {
  'medecin':          'Médecin',
  'infirmier':        'Infirmier(e)',
  'infirmier-majeur': 'Infirmier Majeur',
  'aide-soignant':    'Aide-Soignant',
  'patient':          'Patient',
  'admin':            'Administrateur',
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // ── Form state ──
  selectedRole: Role = 'medecin';
  identifiant  = '';
  motDePasse   = '';
  rememberMe   = false;
  showPassword = false;

  // ── UI state ──
  isLoading    = false;
  errorMessage = '';
  loginSuccess = false;
  loggedInLabel = '';

  // ── Forgot password modal ──
  showForgotModal = false;
  forgotId        = '';
  forgotSent      = false;
  forgotLoading   = false;

  readonly isDev = !environment.production;

  private readonly demoCredentials: Record<Role, { id: string; pw: string }> = {
    'medecin':          { id: 'MED-2024-001',  pw: 'medecin123'   },
    'infirmier':        { id: 'INF-2024-042',  pw: 'infirmier123' },
    'infirmier-majeur': { id: 'IM-2024-008',   pw: 'majeur123'    },
    'aide-soignant':    { id: 'AS-2024-021',   pw: 'soignant123'  },
    'patient':          { id: 'PAT-2019-0042', pw: 'patient123'   },
    'admin':            { id: 'ADMIN-001',      pw: 'admin123'     },
  };

  constructor(private router: Router, private authService: AuthService) {}

  // ── Role selection (dev only — prefills demo credentials) ──
  selectRole(role: Role): void {
    this.selectedRole = role;
    this.errorMessage = '';
    if (this.isDev) {
      this.identifiant = this.demoCredentials[role].id;
      this.motDePasse  = this.demoCredentials[role].pw;
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  // ── Login ──
  login(): void {
    this.errorMessage = '';

    if (!this.identifiant.trim()) {
      this.errorMessage = 'Veuillez saisir votre matricule / identifiant.';
      return;
    }
    if (!this.motDePasse.trim()) {
      this.errorMessage = 'Veuillez saisir votre mot de passe.';
      return;
    }
    if (this.motDePasse.trim().length < 6) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 6 caractères.';
      return;
    }

    this.isLoading = true;

    this.authService.login({ login: this.identifiant.trim(), motDePasse: this.motDePasse }).subscribe({
      next: (response: LoginResponseDto) => {
        this.authService.saveSession(response, this.rememberMe);

        const route = ROLE_ROUTES[response.utilisateur.role?.toUpperCase()];
        if (!route) {
          this.isLoading = false;
          this.errorMessage = 'Rôle non reconnu. Contactez votre administrateur.';
          return;
        }

        this.isLoading    = false;
        this.loginSuccess = true;
        this.loggedInLabel = `${response.utilisateur.prenom} ${response.utilisateur.nom}`;

        setTimeout(() => this.router.navigate([route]), 600);
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 401 || err.status === 403) {
          this.errorMessage = 'Identifiant ou mot de passe incorrect.';
        } else if (err.status === 0) {
          this.errorMessage = 'Impossible de joindre le serveur. Vérifiez votre connexion.';
        } else {
          this.errorMessage = 'Une erreur inattendue est survenue. Réessayez.';
        }
      }
    });
  }

  // ── Forgot password ──
  openForgot(event: Event): void {
    event.preventDefault();
    this.forgotId      = this.identifiant;
    this.forgotSent    = false;
    this.forgotLoading = false;
    this.showForgotModal = true;
  }

  closeForgot(): void {
    this.showForgotModal = false;
  }

  envoyerReset(): void {
    if (!this.forgotId.trim()) return;
    this.forgotLoading = true;
    // TODO: replace with real password-reset API call
    setTimeout(() => {
      this.forgotLoading = false;
      this.forgotSent    = true;
    }, 1400);
  }

  get roleLabel(): string {
    return this.loggedInLabel || ROLE_LABELS[this.selectedRole];
  }
}
