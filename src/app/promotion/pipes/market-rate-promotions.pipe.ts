import { Pipe, PipeTransform } from '@angular/core';
import {Promotion} from "../../classes/promotion";

@Pipe({
  name: 'marketRatePromotions'
})
export class MarketRatePromotionsPipe implements PipeTransform {

    transform(promotions: Promotion[], args?: any): Promotion[] {
        return promotions ? promotions.filter(promotion => {
            return promotion.promotion_properties ?
                promotion.promotion_properties.some(location => location.type.toLowerCase() === 'market_rate') : 0;
        }) : [new Promotion()];
    }
}
