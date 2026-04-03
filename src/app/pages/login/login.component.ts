import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  selectedRole: 'medecin' | 'infirmier' | 'infirmier-majeur' | 'aide-soignant' | 'patient' = 'medecin';
  showPassword = false;
  identifiant = '';
  motDePasse = '';

  private readonly roleRoutes: Record<string, string> = {
    'medecin':          '/medecin',
    'infirmier':        '/infirmier',
    'infirmier-majeur': '/infirmier-majeur',
    'aide-soignant':    '/aide-soignant',
    'patient':          '/patient',
  };

  constructor(private router: Router) {}

  selectRole(role: 'medecin' | 'infirmier' | 'infirmier-majeur' | 'aide-soignant' | 'patient'): void {
    this.selectedRole = role;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    if (!this.identifiant.trim() || !this.motDePasse.trim()) return;
    const route = this.roleRoutes[this.selectedRole] ?? '/login';
    this.router.navigate([route]);
  }
}