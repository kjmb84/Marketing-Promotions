import { Injectable } from '@angular/core';
import {Filter} from "../classes/filter";
import {PromotionTime} from "../classes/promotion-time";

@Injectable()
export class FilterService {
    filter: Filter;
    constructor() { }

    getFilter(): Filter {
        if (this.filter) {
            return this.filter;
        } else {
            this.filter = new Filter();
            this.filter.promotion_properties = [];
            this.filter.timeFrame = new PromotionTime();
            return this.filter;
        }
    }

    setFilter(filter: Filter): void {
        this.filter = filter;
    }

}
