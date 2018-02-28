import { Injectable } from '@angular/core';
import {PromotionGroup} from "../classes/promotion-group";
import {Http} from "@angular/http";

@Injectable()
export class PromotionGroupService {
    private promotionGroups: PromotionGroup[];
    constructor() {
        this.promotionGroups = this.examplePromotionGroups();
    }

    getPromotionGroups(): Promise<PromotionGroup[]> {
        return Promise.resolve(this.promotionGroups);
    }

    private examplePromotionGroups(): PromotionGroup[] {
        return [
            {
                id: 1,
                name: 'Renewal'
            },
            {
                id: 2,
                name: 'New Lease'
            }
        ];
    }
}
