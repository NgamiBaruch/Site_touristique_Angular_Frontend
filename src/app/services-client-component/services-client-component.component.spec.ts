import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesClientComponentComponent } from './services-client-component.component';

describe('ServicesClientComponentComponent', () => {
  let component: ServicesClientComponentComponent;
  let fixture: ComponentFixture<ServicesClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesClientComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
