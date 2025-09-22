import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardComponentComponent } from './service-card-component.component';

describe('ServiceCardComponentComponent', () => {
  let component: ServiceCardComponentComponent;
  let fixture: ComponentFixture<ServiceCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
