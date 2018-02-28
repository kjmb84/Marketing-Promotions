import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionDatesComponent } from './promotion-dates.component';

describe('PromotionDatesComponent', () => {
  let component: PromotionDatesComponent;
  let fixture: ComponentFixture<PromotionDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
