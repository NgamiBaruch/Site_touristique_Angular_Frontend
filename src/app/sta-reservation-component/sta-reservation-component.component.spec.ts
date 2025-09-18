import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaReservationComponentComponent } from './sta-reservation-component.component';

describe('StaReservationComponentComponent', () => {
  let component: StaReservationComponentComponent;
  let fixture: ComponentFixture<StaReservationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaReservationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaReservationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
