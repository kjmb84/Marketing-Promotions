import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromotionLocationComponent } from './create-promotion-location.component';

describe('CreatePromotionLocationComponent', () => {
  let component: CreatePromotionLocationComponent;
  let fixture: ComponentFixture<CreatePromotionLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePromotionLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePromotionLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
