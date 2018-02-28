import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionLocationInputComponent } from './promotion-location-input.component';

describe('PromotionLocationInputComponent', () => {
  let component: PromotionLocationInputComponent;
  let fixture: ComponentFixture<PromotionLocationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionLocationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionLocationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
