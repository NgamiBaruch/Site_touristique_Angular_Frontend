import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientComponentComponent } from './gestion-client-component.component';

describe('GestionClientComponentComponent', () => {
  let component: GestionClientComponentComponent;
  let fixture: ComponentFixture<GestionClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionClientComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
