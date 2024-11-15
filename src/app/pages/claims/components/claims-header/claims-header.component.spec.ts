import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsHeaderComponent } from './claims-header.component';

describe('ClaimsHeaderComponent', () => {
  let component: ClaimsHeaderComponent;
  let fixture: ComponentFixture<ClaimsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
