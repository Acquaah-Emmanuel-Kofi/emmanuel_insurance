import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyItemComponent } from './dairy-item.component';

describe('DairyItemComponent', () => {
  let component: DairyItemComponent;
  let fixture: ComponentFixture<DairyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
