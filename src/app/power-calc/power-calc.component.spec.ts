import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerCalcComponent } from './power-calc.component';

describe('PowerCalcComponent', () => {
  let component: PowerCalcComponent;
  let fixture: ComponentFixture<PowerCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
