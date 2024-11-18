import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuoteComponent } from './single-quote.component';

describe('SingleQuoteComponent', () => {
  let component: SingleQuoteComponent;
  let fixture: ComponentFixture<SingleQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
