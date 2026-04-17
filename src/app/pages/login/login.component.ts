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
  showForgotModal = false;
  forgotId = '';
  forgotSent = false;
  forgotLoading = false;
  rememberMe = false;

  private readonly roleRoutes: Record<string, string> = {
    MEDECIN: '/medecin',
    INFIRMIER: '/infirmier',
    INFIRMIER_MAJEUR: '/infirmier-majeur',
    AIDE_SOIGNANT: '/aide-soignant',
    PATIENT: '/patient',
    ADMIN: '/admin',
  };

  private readonly roleLabels: Record<string, string> = {
    MEDECIN: 'Médecin',
    INFIRMIER: 'Infirmier',
    INFIRMIER_MAJEUR: 'Infirmier Majeur',
    AIDE_SOIGNANT: 'Aide-soignant',
    PATIENT: 'Patient',
    ADMIN: 'Administrateur',
  };

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

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

    this.authService.login(
      this.identifiant.trim(),
      this.motDePasse.trim(),
      this.rememberMe
    ).subscribe({
      next: () => {
        this.isLoading = false;

        const role = this.authService.getRole();
        const route = this.roleRoutes[role];

        if (!route) {
          this.errorMessage = `Rôle inconnu : ${role || 'vide'}`;
          return;
        }

        this.roleLabel = this.roleLabels[role] ?? role;
        this.loginSuccess = true;

        setTimeout(() => {
          this.router.navigate([route]);
        }, 700);
      },
      error: (err) => {
        this.isLoading = false;
        this.loginSuccess = false;
        this.errorMessage =
          err?.error?.message ?? 'Identifiants incorrects. Veuillez réessayer.';
      },
    });
  }

  envoyerReset(): void {
    if (!this.forgotId.trim()) return;

    this.forgotLoading = true;
    setTimeout(() => {
      this.forgotLoading = false;
      this.forgotSent = true;
    }, 1500);
  }

  openForgot(event: Event): void {
    event.preventDefault();
    this.forgotId = this.identifiant;
    this.showForgotModal = true;
  }

  closeForgot(): void {
    this.showForgotModal = false;
    this.forgotSent = false;
    this.forgotLoading = false;
  }
}
