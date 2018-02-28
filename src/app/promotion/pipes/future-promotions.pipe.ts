import { Pipe, PipeTransform } from '@angular/core';
import {Promotion} from "../../classes/promotion";

@Pipe({
  name: 'futurePromotions'
})
export class FuturePromotionsPipe implements PipeTransform {

    transform(promotions: Promotion[], args?: any): Promotion[] {
        return promotions ? promotions.filter(promotion => {
            return promotion.promotion_times ? promotion.promotion_times.filter(promotion_time => {
                return (Date.parse(promotion_time.start_date) > Date.now());
            }).length : 1;
        }) : [new Promotion()];
    }

}
