import { TestBed, inject } from '@angular/core/testing';

import { PromotionLocationService } from './promotion-location.service';

describe('PromotionLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionLocationService]
    });
  });

  it('should be created', inject([PromotionLocationService], (service: PromotionLocationService) => {
    expect(service).toBeTruthy();
  }));
});
