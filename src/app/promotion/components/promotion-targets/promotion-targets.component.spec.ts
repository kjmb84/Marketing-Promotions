import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionTargetsComponent } from './promotion-targets.component';

describe('PromotionTargetsComponent', () => {
  let component: PromotionTargetsComponent;
  let fixture: ComponentFixture<PromotionTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
