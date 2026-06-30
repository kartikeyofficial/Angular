import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowStatemets } from './control-flow-statemets';

describe('ControlFlowStatemets', () => {
  let component: ControlFlowStatemets;
  let fixture: ComponentFixture<ControlFlowStatemets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowStatemets],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlFlowStatemets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
