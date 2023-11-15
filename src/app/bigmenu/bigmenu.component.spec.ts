import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigmenuComponent } from './bigmenu.component';

describe('BigmenuComponent', () => {
  let component: BigmenuComponent;
  let fixture: ComponentFixture<BigmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
