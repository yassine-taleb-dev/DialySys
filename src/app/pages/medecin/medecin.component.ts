import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecin',
  standalone: true,
  imports: [],
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.scss'
})
export class MedecinComponent {
  constructor(private router: Router) {}
  logout(): void { this.router.navigate(['/login']); }
}
