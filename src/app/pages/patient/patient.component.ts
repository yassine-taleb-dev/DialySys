import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {
  constructor(private router: Router) {}
  logout(): void { this.router.navigate(['/login']); }
}
