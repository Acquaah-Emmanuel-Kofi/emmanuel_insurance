import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimTabsComponent } from './claim-tabs.component';

describe('ClaimTabsComponent', () => {
  let component: ClaimTabsComponent;
  let fixture: ComponentFixture<ClaimTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
