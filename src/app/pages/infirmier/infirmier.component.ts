import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infirmier',
  standalone: true,
  imports: [],
  templateUrl: './infirmier.component.html',
  styleUrl: './infirmier.component.scss'
})
export class InfirmierComponent {
  constructor(private router: Router) {}
  logout(): void { this.router.navigate(['/login']); }
}
