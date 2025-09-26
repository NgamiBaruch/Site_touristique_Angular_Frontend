import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordComponentComponent } from './forget-password-component.component';

describe('ForgetPasswordComponentComponent', () => {
  let component: ForgetPasswordComponentComponent;
  let fixture: ComponentFixture<ForgetPasswordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
