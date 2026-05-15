import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // HttpClient est fourni via provideHttpClient() dans app.config.ts
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  identifiant = '';
  motDePasse = '';
  showPassword = false;
  isLoading = false;
  errorMessage = '';
  loginSuccess = false;
  roleLabel = '';
  requiresTwoFactor = false;
  twoFactorCode = '';

  // ── Se souvenir de moi ──
  rememberMe = false;

  // ── Mot de passe oublié ──
  showForgotModal = false;
  forgotId        = '';
  forgotSent      = false;
  forgotLoading   = false;
  forgotError     = '';

  // ── Stats dynamiques ──
  statPatients   = 0;
  statEfficacite = 0;
  statsLoading   = true;

  private readonly roleRoutes: Record<string, string> = {
    MEDECIN:          '/medecin',
    INFIRMIER:        '/infirmier',
    INFIRMIER_MAJEUR: '/infirmier-majeur',
    PATIENT:          '/patient',
    ADMIN:            '/admin',
  };

  private readonly roleLabels: Record<string, string> = {
    MEDECIN:          'Médecin',
    INFIRMIER:        'Infirmier',
    INFIRMIER_MAJEUR: 'Infirmier Majeur',
    PATIENT:          'Patient',
    ADMIN:            'Administrateur',
  };

  constructor(private router: Router, private authService: AuthService, private http: HttpClient) {
    // Redirection automatique si déjà connecté
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getRole();
      const route = this.roleRoutes[role];
      if (route) this.router.navigate([route]);
    }

    // Coché par défaut
    this.rememberMe = true;
  }

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/patients`).subscribe({
      next: (patients) => {
        const actifs = patients.length;
        const total = patients.length || 1;
        const efficacite = Math.round((actifs / total) * 1000) / 10;
        this.statsLoading = false;
        this.animateCount('statPatients',   0, actifs,      1200);
        this.animateCount('statEfficacite', 0, efficacite,  1400);
      },
      error: () => {
        this.statsLoading = false;
        this.animateCount('statPatients',   0, 0,    800);
        this.animateCount('statEfficacite', 0, 0, 1000);
      }
    });
  }

  private animateCount(key: 'statPatients' | 'statEfficacite', from: number, to: number, duration: number): void {
    const steps = 40;
    const interval = duration / steps;
    const increment = (to - from) / steps;
    let current = from;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      (this as any)[key] = Math.round(current * 10) / 10;
      if (step >= steps) {
        (this as any)[key] = to;
        clearInterval(timer);
      }
    }, interval);
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
    if (this.requiresTwoFactor && !this.twoFactorCode.trim()) {
      this.errorMessage = 'Veuillez saisir le code de verification recu par email.';
      return;
    }

    this.isLoading = true;

    // rememberMe → localStorage, sinon sessionStorage
    this.authService.login(
      this.identifiant.trim(),
      this.motDePasse.trim(),
      this.rememberMe,
      this.requiresTwoFactor ? this.twoFactorCode.trim() : undefined
    ).subscribe({
      next: (response) => {
        this.isLoading = false;

        if (response.requiresTwoFactor && !response.token) {
          this.requiresTwoFactor = true;
          this.twoFactorCode = '';
          this.errorMessage = response.message ?? 'Code de verification envoye par email.';
          return;
        }

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
