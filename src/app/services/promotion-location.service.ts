import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {PromotionLocation} from "../classes/promotion-location";
import {Promotion} from "../classes/promotion";
import {PromotionType} from "../classes/promotion-type";

@Injectable()
export class PromotionLocationService {
    promotionLocations: PromotionLocation[];
    constructor() {
        this.promotionLocations = this.examplePromotionLocations();
    }

    getPromotionLocations(): Promise<PromotionLocation[]> {
        return Promise.resolve(this.promotionLocations);
    }

    createPromotionLocation(promotionLocation: PromotionLocation): Promise<PromotionLocation> {
        this.promotionLocations.push(promotionLocation);
        return Promise.resolve(promotionLocation);
    }

    examplePromotionLocations(): PromotionLocation[] {
        return [
            {
                id: 1,
                name: 'Location 1',
                street_address_1: 'address 1 1',
                street_address_2: 'address 2 1',
                city: 'columbia',
                state: 'mo',
                zip: '65201',
                country: 'usa',
                created_at: '',
                updated_at: ''
            },
            {
                id: 2,
                name: 'Other Location 2',
                street_address_1: 'address 1 2',
                street_address_2: 'address 2 2',
                city: 'columbia',
                state: 'mo',
                zip: '65201',
                country: 'usa',
                created_at: '',
                updated_at: ''
            },
            {
                id: 3,
                name: 'Third Location 3',
                street_address_1: 'address 1 3',
                street_address_2: 'address 2 3',
                city: 'columbia',
                state: 'mo',
                zip: '65201',
                country: 'usa',
                created_at: '',
                updated_at: ''
            },
            {
                id: 4,
                name: 'Last Location 4',
                street_address_1: 'address 1 4',
                street_address_2: 'address 2 4',
                city: 'columbia',
                state: 'mo',
                zip: '65201',
                country: 'usa',
                created_at: '',
                updated_at: ''
            },
            {
                id: 5,
                name: 'abcdefghijklmnopqurstuvwxyz1234567890',
                street_address_1: 'address 1 5',
                street_address_2: 'address 2 5',
                city: 'columbia',
                state: 'mo',
                zip: '65201',
                country: 'usa',
                created_at: '',
                updated_at: ''
            },
        ];
    }

    // updatePromotionLocation(promotion: Promotion): Promise<any> {
        // return this.http.put(`${this.promotionLocationsUrl}/updatePromotionLocation`, promotion, {withCredentials: true})
        //     .toPromise()
        //     .then(response => response);
    // }

    // deletePromotionLocation(id: number): Promise<any> {
        // return this.http
        //     .delete(`${this.promotionLocationsUrl}/deletePromotionLocation`, {withCredentials: true, search: {promotionLocationId: id}})
        //     .toPromise()
        //     .then(response => response);
    // }

    // handleError(): string {
    //     return 'Promotion Locations were unable to be retrieved.';
    // }
}
