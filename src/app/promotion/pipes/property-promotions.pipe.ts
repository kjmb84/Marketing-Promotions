import { Pipe, PipeTransform } from '@angular/core';
import {Promotion} from "../../classes/promotion";

@Pipe({
  name: 'propertyPromotions'
})
export class PropertyPromotionsPipe implements PipeTransform {

  transform(promotions: Promotion[], args?: any): Promotion[] {
    return promotions ? promotions.filter(promotion => {
      return promotion.promotion_properties ?
          promotion.promotion_properties.some(promotion_property => promotion_property.type.toLowerCase() === 'student_housing' || promotion_property.type.toLowerCase() === 'market_rate') : 0;
    }) : [new Promotion()];
  }

}
