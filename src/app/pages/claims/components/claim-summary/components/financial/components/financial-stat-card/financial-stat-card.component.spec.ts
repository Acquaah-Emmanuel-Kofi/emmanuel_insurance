import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStatCardComponent } from './financial-stat-card.component';

describe('FinancialStatCardComponent', () => {
  let component: FinancialStatCardComponent;
  let fixture: ComponentFixture<FinancialStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialStatCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
