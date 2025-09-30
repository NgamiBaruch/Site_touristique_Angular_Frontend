import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReservationComponentComponent } from './gestion-reservation-component.component';

describe('GestionReservationComponentComponent', () => {
  let component: GestionReservationComponentComponent;
  let fixture: ComponentFixture<GestionReservationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionReservationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionReservationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
