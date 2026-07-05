import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDatabinding } from './two-way-databinding';

describe('TwoWayDatabinding', () => {
  let component: TwoWayDatabinding;
  let fixture: ComponentFixture<TwoWayDatabinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayDatabinding],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayDatabinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
