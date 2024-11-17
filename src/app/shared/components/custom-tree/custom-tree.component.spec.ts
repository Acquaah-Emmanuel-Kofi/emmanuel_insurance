import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTreeComponent } from './custom-tree.component';

describe('CustomTreeComponent', () => {
  let component: CustomTreeComponent;
  let fixture: ComponentFixture<CustomTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
