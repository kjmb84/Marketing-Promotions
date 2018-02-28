import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsFilterComponent } from './promotions-filter.component';

describe('PromotionsFilterComponent', () => {
  let component: PromotionsFilterComponent;
  let fixture: ComponentFixture<PromotionsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
