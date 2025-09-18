import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleComponent } from './middle-component';

describe('MiddleComponent', () => {
  let component: MiddleComponent;
  let fixture: ComponentFixture<MiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
