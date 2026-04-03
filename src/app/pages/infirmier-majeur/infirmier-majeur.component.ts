import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infirmier-majeur',
  standalone: true,
  imports: [],
  templateUrl: './infirmier-majeur.component.html',
  styleUrl: './infirmier-majeur.component.scss'
})
export class InfirmierMajeurComponent {
  constructor(private router: Router) {}
  logout(): void { this.router.navigate(['/login']); }
}
