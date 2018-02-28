import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {PromotionType} from "../classes/promotion-type";
import {Promotion} from "../classes/promotion";

@Injectable()
export class PromotionTypeService {
    private promotionTypes: PromotionType[];
    constructor() {
        this.promotionTypes = this.examplePromotionTypes();
    }

    getPromotionTypes(): Promise<PromotionType[]> {
        return Promise.resolve(this.promotionTypes);
    }

    createPromotionType(promotionType: PromotionType): Promise<boolean> {
        this.promotionTypes.push(promotionType);
        return Promise.resolve(true);
    }

    updatePromotionType(promotionType: PromotionType): Promise<boolean> {
        this.deletePromotionType(promotionType.id);
        this.promotionTypes.push(promotionType);
        return Promise.resolve(true);
    }

    deletePromotionType(id: number): Promise<any> {
        const promotionTypeToBeUpdated = this.promotionTypes.find((promotionTypeBeingSearched) => promotionTypeBeingSearched.id === id);
        this.promotionTypes.splice(this.promotionTypes.indexOf(promotionTypeToBeUpdated), 1);
        return Promise.resolve(true);
    }

    examplePromotionTypes(): PromotionType[] {
        // return [new PromotionType()];
        const a = JSON.parse('[{"id":1,"name":"email","display_name":"Email","created_at":null,"updated_at":null},{"id":2,"name":"mailer","display_name":"Mailer","created_at":null,"updated_at":null},{"id":3,"name":"door_hanger","display_name":"Door Hanger","created_at":null,"updated_at":null}]');
        return a as PromotionType[];
    }
}
