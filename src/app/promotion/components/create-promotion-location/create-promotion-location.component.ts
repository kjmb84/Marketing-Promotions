import { Component, OnInit } from '@angular/core';
import {PromotionLocation} from "../../../classes/promotion-location";
import {PromotionLocationService} from "../../../services/promotion-location.service";

@Component({
  selector: 'app-create-promotion-location',
  templateUrl: './create-promotion-location.component.html',
  styleUrls: ['./create-promotion-location.component.css']
})
export class CreatePromotionLocationComponent implements OnInit {
    promotionLocation = new PromotionLocation();

    constructor(
        public promotionLocationService: PromotionLocationService
    ) { }

    ngOnInit() {
        // this.promotionLocation = new PromotionLocation();
    }

    submitPromotionLocation(): void {
        // console.log(this.promotionLocation);
        this.promotionLocationService.createPromotionLocation(this.promotionLocation);
    }
}