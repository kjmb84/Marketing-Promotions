import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionTypesInputComponent } from './promotion-types-input.component';

describe('PromotionTypesInputComponent', () => {
  let component: PromotionTypesInputComponent;
  let fixture: ComponentFixture<PromotionTypesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionTypesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionTypesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
