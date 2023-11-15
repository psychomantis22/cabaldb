import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemCalcComponent } from './gem-calc.component';

describe('GemCalcComponent', () => {
  let component: GemCalcComponent;
  let fixture: ComponentFixture<GemCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
