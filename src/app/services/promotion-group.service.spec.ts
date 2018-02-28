import { TestBed, inject } from '@angular/core/testing';

import { PromotionGroupService } from './promotion-group.service';

describe('PromotionGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionGroupService]
    });
  });

  it('should be created', inject([PromotionGroupService], (service: PromotionGroupService) => {
    expect(service).toBeTruthy();
  }));
});
