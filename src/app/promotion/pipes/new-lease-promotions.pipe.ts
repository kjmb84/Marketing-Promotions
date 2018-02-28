import { Pipe, PipeTransform } from '@angular/core';
import {Promotion} from "../../classes/promotion";

@Pipe({
  name: 'newLeasePromotions'
})
export class NewLeasePromotionsPipe implements PipeTransform {

    transform(promotions: Promotion[], args?: any): Promotion[] {
        return promotions ? promotions.filter(promotion => {
            return promotion.promotion_groups ?
                promotion.promotion_groups.some(promotion_group => promotion_group.name.toLowerCase() === 'new lease') : 0;
        }) : [new Promotion()];
    }

}
