import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAtDolComponent } from './risk-at-dol.component';

describe('RiskAtDolComponent', () => {
  let component: RiskAtDolComponent;
  let fixture: ComponentFixture<RiskAtDolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskAtDolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskAtDolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
