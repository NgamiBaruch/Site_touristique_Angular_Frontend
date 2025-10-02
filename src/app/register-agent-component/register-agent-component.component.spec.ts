import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAgentComponentComponent } from './register-agent-component.component';

describe('RegisterAgentComponentComponent', () => {
  let component: RegisterAgentComponentComponent;
  let fixture: ComponentFixture<RegisterAgentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAgentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAgentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
