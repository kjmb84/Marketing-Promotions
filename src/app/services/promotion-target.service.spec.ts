import { TestBed, inject } from '@angular/core/testing';

import { PromotionTargetService } from './promotion-target.service';

describe('PromotionTargetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionTargetService]
    });
  });

  it('should be created', inject([PromotionTargetService], (service: PromotionTargetService) => {
    expect(service).toBeTruthy();
  }));
});
