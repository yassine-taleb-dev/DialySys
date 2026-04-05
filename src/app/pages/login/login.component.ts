import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service'; // ✅ chemin depuis pages/login/

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ pas besoin d'ajouter HttpClient ici
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  identifiant  = '';
  motDePasse   = '';
  rememberMe   = false;
  showPassword = false;
  isLoading    = false;
  errorMessage = '';
  loginSuccess = false;
  roleLabel    = '';

  showForgotModal = false;
  forgotId        = '';
  forgotSent      = false;
  forgotLoading   = false;

  private readonly roleRoutes: Record<string, string> = {
    'MEDECIN':          '/medecin',
    'INFIRMIER':        '/infirmier',
    'INFIRMIER_MAJEUR': '/infirmier-majeur',
    'AIDE_SOIGNANT':    '/aide-soignant',
    'PATIENT':          '/patient',
     'ADMIN':            '/admin',
  };

  private readonly roleLabels: Record<string, string> = {
    'MEDECIN':          'Médecin',
    'INFIRMIER':        'Infirmier(e)',
    'INFIRMIER_MAJEUR': 'Infirmier Majeur',
    'AIDE_SOIGNANT':    'Aide-Soignant',
    'PATIENT':          'Patient',
    'ADMIN':            '/admin',
  };

  constructor(private router: Router, private authService: AuthService) {} // ✅ AuthService

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

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

    this.isLoading = true;

    // ✅ Utiliser AuthService au lieu de HttpClient directement
    this.authService.login(this.identifiant.trim(), this.motDePasse.trim()).subscribe({
      next: (response) => {
        this.isLoading = false;

        // ✅ Sauvegarder token selon rememberMe
        const storage = this.rememberMe ? localStorage : sessionStorage;
        storage.setItem('token', response.token);
        storage.setItem('utilisateur', JSON.stringify(response.utilisateur));

        const role: string = response.utilisateur.role?.toUpperCase() ?? '';
        this.roleLabel = this.roleLabels[role] ?? role;
        this.loginSuccess = true;

        setTimeout(() => {
          const route = this.roleRoutes[role] ?? '/login';
          this.router.navigate([route]);
        }, 800);
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 401) {
          this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
        } else if (err.status === 403) {
          this.errorMessage = 'Votre compte est désactivé. Contactez l\'administrateur.';
        } else {
          this.errorMessage = 'Erreur de connexion au serveur. Réessayez plus tard.';
        }
      }
    });
  }

  openForgot(event: Event): void {
    event.preventDefault();
    this.forgotId        = this.identifiant;
    this.forgotSent      = false;
    this.forgotLoading   = false;
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
}