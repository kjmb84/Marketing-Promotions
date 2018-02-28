import {Component, OnChanges, OnInit} from '@angular/core';
import {Promotion} from '../../../classes/promotion';
import {PromotionService} from '../../../services/promotion.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.css']
})
export class UpdatePromotionComponent implements OnInit {
    promotion: Promotion;

    constructor(
        private promotionService: PromotionService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.promotionService.getPromotion(parseInt(params.get('id'), 10))
                .then(promotion => {
                    this.promotion = promotion;
                    // console.log(this.promotion);
                });
        });
    }
}
