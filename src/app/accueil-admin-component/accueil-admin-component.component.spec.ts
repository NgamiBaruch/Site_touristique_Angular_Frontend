import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAdminComponentComponent } from './accueil-admin-component.component';

describe('AccueilAdminComponentComponent', () => {
  let component: AccueilAdminComponentComponent;
  let fixture: ComponentFixture<AccueilAdminComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilAdminComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
