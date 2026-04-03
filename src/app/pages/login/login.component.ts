import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type Role = 'medecin' | 'infirmier' | 'infirmier-majeur' | 'aide-soignant' | 'patient';

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

  // ── Forgot password modal ──
  showForgotModal    = false;
  forgotId           = '';
  forgotSent         = false;
  forgotLoading      = false;

  private readonly roleRoutes: Record<Role, string> = {
    'medecin':          '/medecin',
    'infirmier':        '/infirmier',
    'infirmier-majeur': '/infirmier-majeur',
    'aide-soignant':    '/aide-soignant',
    'patient':          '/patient',
  };

  private readonly roleLabels: Record<Role, string> = {
    'medecin':          'Médecin',
    'infirmier':        'Infirmier(e)',
    'infirmier-majeur': 'Infirmier Majeur',
    'aide-soignant':    'Aide-Soignant',
    'patient':          'Patient',
  };

  constructor(private router: Router) {}

  // ── Role selection ──
  selectRole(role: Role): void {
    this.selectedRole = role;
    this.errorMessage = '';
    // Prefill demo credentials per role
    const demos: Record<Role, {id: string; pw: string}> = {
      'medecin':          { id: 'MED-2024-001',  pw: 'medecin123'   },
      'infirmier':        { id: 'INF-2024-042',  pw: 'infirmier123' },
      'infirmier-majeur': { id: 'IM-2024-008',   pw: 'majeur123'    },
      'aide-soignant':    { id: 'AS-2024-021',   pw: 'soignant123'  },
      'patient':          { id: 'PAT-2019-0042', pw: 'patient123'   },
    };
    this.identifiant = demos[role].id;
    this.motDePasse  = demos[role].pw;
  }

  // ── Password visibility ──
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

    // Simulate authentication delay then navigate
    setTimeout(() => {
      this.isLoading    = false;
      this.loginSuccess = true;

      setTimeout(() => {
        const route = this.roleRoutes[this.selectedRole];
        this.router.navigate([route]);
      }, 600);
    }, 1200);
  }

  // ── Forgot password ──
  openForgot(event: Event): void {
    event.preventDefault();
    this.forgotId     = this.identifiant;
    this.forgotSent   = false;
    this.forgotLoading = false;
    this.showForgotModal = true;
  }

  closeForgot(): void {
    this.showForgotModal = false;
  }

  envoyerReset(): void {
    if (!this.forgotId.trim()) return;
    this.forgotLoading = true;
    setTimeout(() => {
      this.forgotLoading = false;
      this.forgotSent    = true;
    }, 1400);
  }

  get roleLabel(): string {
    return this.roleLabels[this.selectedRole];
  }
}
