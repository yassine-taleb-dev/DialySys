import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AideSoignantComponent } from './aide-soignant.component';

describe('AideSoignantComponent', () => {
  let component: AideSoignantComponent;
  let fixture: ComponentFixture<AideSoignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AideSoignantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AideSoignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
