import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsTableComponent } from './promotions-table.component';

describe('PromotionsTableComponent', () => {
  let component: PromotionsTableComponent;
  let fixture: ComponentFixture<PromotionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
