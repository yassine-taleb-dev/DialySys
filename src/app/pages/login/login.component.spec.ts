import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default role medecin', () => {
    expect(component.selectedRole).toBe('medecin');
  });

  it('should select infirmier role', () => {
    component.selectRole('infirmier');
    expect(component.selectedRole).toBe('infirmier');
  });

  it('should select infirmier-majeur role', () => {
    component.selectRole('infirmier-majeur');
    expect(component.selectedRole).toBe('infirmier-majeur');
  });

  it('should select aide-soignant role', () => {
    component.selectRole('aide-soignant');
    expect(component.selectedRole).toBe('aide-soignant');
  });

  it('should select patient role', () => {
    component.selectRole('patient');
    expect(component.selectedRole).toBe('patient');
  });

  it('should toggle password visibility', () => {
    expect(component.showPassword).toBeFalse();
    component.togglePassword();
    expect(component.showPassword).toBeTrue();
    component.togglePassword();
    expect(component.showPassword).toBeFalse();
  });

  it('should not navigate if identifiant is empty', () => {
    component.identifiant = '';
    component.motDePasse = 'test1234';
    const spy = spyOn(component['router'], 'navigate');
    component.login();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should not navigate if motDePasse is empty', () => {
    component.identifiant = 'MED-2024-001';
    component.motDePasse = '';
    const spy = spyOn(component['router'], 'navigate');
    component.login();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should navigate to /medecin when role is medecin', () => {
    component.identifiant = 'MED-2024-001';
    component.motDePasse = 'test1234';
    component.selectedRole = 'medecin';
    const spy = spyOn(component['router'], 'navigate');
    component.login();
    expect(spy).toHaveBeenCalledWith(['/medecin']);
  });

  it('should navigate to /aide-soignant when role is aide-soignant', () => {
    component.identifiant = 'AS-2024-001';
    component.motDePasse = 'test1234';
    component.selectedRole = 'aide-soignant';
    const spy = spyOn(component['router'], 'navigate');
    component.login();
    expect(spy).toHaveBeenCalledWith(['/aide-soignant']);
  });

  it('should navigate to /patient when role is patient', () => {
    component.identifiant = 'PAT-2024-001';
    component.motDePasse = 'test1234';
    component.selectedRole = 'patient';
    const spy = spyOn(component['router'], 'navigate');
    component.login();
    expect(spy).toHaveBeenCalledWith(['/patient']);
  });
});