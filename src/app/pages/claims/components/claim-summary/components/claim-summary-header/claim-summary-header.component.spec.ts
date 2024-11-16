import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimSummaryHeaderComponent } from './claim-summary-header.component';

describe('ClaimSummaryHeaderComponent', () => {
  let component: ClaimSummaryHeaderComponent;
  let fixture: ComponentFixture<ClaimSummaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimSummaryHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
