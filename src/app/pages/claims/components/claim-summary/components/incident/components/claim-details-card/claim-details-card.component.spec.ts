import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDetailsCardComponent } from './claim-details-card.component';

describe('ClaimDetailsCardComponent', () => {
  let component: ClaimDetailsCardComponent;
  let fixture: ComponentFixture<ClaimDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
