import {PromotionTime} from './promotion-time';
import {PromotionLocation} from './promotion-location';
import {Location} from './location';
import {PromotionImage} from './promotion-image';
import {PromotionType} from './promotion-type';
import {PromotionGroup} from "./promotion-group";
import {PromotionTarget} from "./promotion-target";

export class Promotion {
    id?: number;
    title: string;
    description?: string;
    promotion_times: PromotionTime[];
    promotion_types: PromotionType[];
    locations: Location[];
    leasing_year?: string;
    promotion_value?: number;
    promotion_locations?: PromotionLocation[];
    promotion_groups?: PromotionGroup[];
    promotion_images?: PromotionImage[];
    promotion_properties?: Location[];
    promotion_targets?: PromotionTarget[];
    user?: number;
    created_at?: string;
    updated_at?: string;
}
