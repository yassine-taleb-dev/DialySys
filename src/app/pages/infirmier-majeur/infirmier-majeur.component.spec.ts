import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmierMajeurComponent } from './infirmier-majeur.component';

describe('InfirmierMajeurComponent', () => {
  let component: InfirmierMajeurComponent;
  let fixture: ComponentFixture<InfirmierMajeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfirmierMajeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfirmierMajeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
