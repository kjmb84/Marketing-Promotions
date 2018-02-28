import { Pipe, PipeTransform } from '@angular/core';
import {Promotion} from "../../classes/promotion";

@Pipe({
  name: 'studentPromotions'
})
export class StudentPromotionsPipe implements PipeTransform {

    transform(promotions: Promotion[], args?: any): Promotion[] {
        return promotions ? promotions.filter(promotion => {
            return promotion.promotion_properties ? promotion.promotion_properties.some(
                promotion_property => promotion_property.type === 'student_housing'
            ) : 0;
        }) : [new Promotion()];
    }
}
