import { Pipe, PipeTransform } from '@angular/core';
import {Promotion} from "../../classes/promotion";

@Pipe({
  name: 'renewalPromotions'
})
export class RenewalPromotionsPipe implements PipeTransform {
    transform(promotions: Promotion[], args?: any): Promotion[] {
        return promotions ? promotions.filter(promotion => {
            return promotion.promotion_groups ?
                promotion.promotion_groups.some(promotion_group => promotion_group.name === 'Renewal') : 0;
        }) : [new Promotion()];
    }
}
