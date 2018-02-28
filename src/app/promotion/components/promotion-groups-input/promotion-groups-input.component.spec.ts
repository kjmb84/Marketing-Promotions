import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionGroupsInputComponent } from './promotion-groups-input.component';

describe('PromotionGroupsInputComponent', () => {
  let component: PromotionGroupsInputComponent;
  let fixture: ComponentFixture<PromotionGroupsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionGroupsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionGroupsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
