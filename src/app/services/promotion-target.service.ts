import { Injectable } from '@angular/core';
import {PromotionTarget} from "../classes/promotion-target";
import {Http} from "@angular/http";

@Injectable()
export class PromotionTargetService {
    private promotionTargets: PromotionTarget[];
    constructor() {
        this.promotionTargets = this.examplePromotionTargets();
    }

    getPromotionTargets(): Promise<PromotionTarget[]> {
        return Promise.resolve(this.promotionTargets);
    }

    examplePromotionTargets(): PromotionTarget[] {
        return [
            {
                id: 1,
                name: 'Target 1',
                group: {
                    id: 2,
                    name: 'New Lease'
                }
            },
            {
                id: 2,
                name: 'The second target',
                group: {
                    id: 1,
                    name: 'Renewal'
                }
            },
            {
                id: 3,
                name: 'target numero tres',
                group: {
                    id: 1,
                    name: 'Renewal'
                }
            },
            {
                id: 4,
                name: 'abcdefghijklmnopqurstuvwxyz1234567890',
                group: {
                    id: 2,
                    name: 'New lease'
                }
            }
        ];
    }
}
