import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAgentComponentComponent } from './gestion-agent-component.component';

describe('GestionAgentComponentComponent', () => {
  let component: GestionAgentComponentComponent;
  let fixture: ComponentFixture<GestionAgentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAgentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAgentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
