import {PromotionTime} from "./promotion-time";
import {Location} from "./location";

export class Filter {
    promotion_properties: Location[];
    sortDirection: string;
    sortBy: string;
    timeFrame: PromotionTime;
}
