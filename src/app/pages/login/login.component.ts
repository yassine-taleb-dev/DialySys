import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  identifiant = '';
  motDePasse = '';
  showPassword = false;
  isLoading = false;
  errorMessage = '';
  loginSuccess = false;
  roleLabel = '';

  // ── Se souvenir de moi ──
  rememberMe = false;

  // ── Mot de passe oublié ──
  showForgotModal = false;
  forgotId        = '';
  forgotSent      = false;
  forgotLoading   = false;
  forgotError     = '';

  private readonly roleRoutes: Record<string, string> = {
    MEDECIN:          '/medecin',
    INFIRMIER:        '/infirmier',
    INFIRMIER_MAJEUR: '/infirmier-majeur',
    AIDE_SOIGNANT:    '/aide-soignant',
    PATIENT:          '/patient',
    ADMIN:            '/admin',
  };

  private readonly roleLabels: Record<string, string> = {
    MEDECIN:          'Médecin',
    INFIRMIER:        'Infirmier',
    INFIRMIER_MAJEUR: 'Infirmier Majeur',
    AIDE_SOIGNANT:    'Aide-soignant',
    PATIENT:          'Patient',
    ADMIN:            'Administrateur',
  };

  constructor(private router: Router, private authService: AuthService) {
    // Redirection automatique si déjà connecté
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getRole();
      const route = this.roleRoutes[role];
      if (route) this.router.navigate([route]);
    }

    // Pré-cocher "Se souvenir de moi" si le token est en localStorage
    this.rememberMe = !!localStorage.getItem('token');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    this.errorMessage = '';

    if (!this.identifiant.trim()) {
      this.errorMessage = 'Veuillez saisir votre identifiant.';
      return;
    }
    if (!this.motDePasse.trim()) {
      this.errorMessage = 'Veuillez saisir votre mot de passe.';
      return;
    }

    this.isLoading = true;

    // rememberMe → localStorage, sinon sessionStorage
    this.authService.login(this.identifiant.trim(), this.motDePasse.trim(), this.rememberMe).subscribe({
      next: () => {
        this.isLoading = false;

        const role  = this.authService.getRole();
        const route = this.roleRoutes[role];

        if (!route) {
          this.errorMessage = `Rôle non reconnu : ${role || 'vide'}. Contactez l'administrateur.`;
          return;
        }

        this.roleLabel    = this.roleLabels[role] ?? role;
        this.loginSuccess = true;

        setTimeout(() => this.router.navigate([route]), 700);
      },
      error: (err) => {
        this.isLoading    = false;
        this.loginSuccess = false;
        if (err.status === 0) {
          this.errorMessage = 'Impossible de joindre le serveur. Vérifiez votre connexion.';
        } else if (err.status === 403) {
          this.errorMessage = 'Compte désactivé. Contactez votre administrateur.';
        } else {
          this.errorMessage = err?.error?.message ?? 'Identifiants incorrects. Veuillez réessayer.';
        }
      },
    });
  }

  // ── Mot de passe oublié ──────────────────────────────────────────────────
  openForgot(event: Event): void {
    event.preventDefault();
    this.forgotId      = this.identifiant;
    this.forgotSent    = false;
    this.forgotError   = '';
    this.forgotLoading = false;
    this.showForgotModal = true;
  }

  closeForgot(): void {
    this.showForgotModal = false;
    this.forgotSent      = false;
    this.forgotError     = '';
    this.forgotLoading   = false;
  }

  envoyerReset(): void {
    if (!this.forgotId.trim()) return;
    this.forgotLoading = true;
    this.forgotError   = '';

    this.authService.resetPassword(this.forgotId.trim()).subscribe({  // forgotId = email
      next: () => {
        this.forgotLoading = false;
        this.forgotSent    = true;
      },
      error: (err) => {
        this.forgotLoading = false;
        if (err.status === 404) {
          this.forgotError = 'Aucun compte trouvé pour cet identifiant.';
        } else if (err.status === 0) {
          this.forgotError = 'Impossible de joindre le serveur.';
        } else {
          this.forgotError = err?.error?.message ?? 'Une erreur est survenue. Réessayez.';
        }
      },
    });
  }
}
