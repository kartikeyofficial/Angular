import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDataTypes } from './signal-data-types';

describe('SignalDataTypes', () => {
  let component: SignalDataTypes;
  let fixture: ComponentFixture<SignalDataTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDataTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalDataTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
