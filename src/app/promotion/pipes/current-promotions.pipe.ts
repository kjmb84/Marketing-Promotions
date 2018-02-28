import { Pipe, PipeTransform } from '@angular/core';
import {Promotion} from "../../classes/promotion";

@Pipe({
  name: 'currentPromotions'
})
export class CurrentPromotionsPipe implements PipeTransform {

    transform(promotions: Promotion[], args?: any): Promotion[] {
        return promotions ? promotions.filter(promotion => {
            return promotion.promotion_times ? promotion.promotion_times.some(promotion_time => {
                const currentDate = Date.now();
                const startDate = Date.parse(promotion_time.start_date);
                const endDate = Date.parse(promotion_time.end_date);
                return (startDate < currentDate
                    && (!endDate || endDate > currentDate));
                // return ((startDate < currentDate && !endDate)
                //     || (startDate < currentDate && endDate > currentDate));
            }) : 0;
        }) : [new Promotion()];
    }

}
