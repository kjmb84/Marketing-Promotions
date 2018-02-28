import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {PromotionService} from '../../../services/promotion.service';
import {Promotion} from '../../../classes/promotion';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';
import {FilterService} from "../../../services/filter.service";
import {Filter} from "../../../classes/filter";

@Component({
  selector: 'app-promotions-table',
  templateUrl: './promotions-table.component.html',
  styleUrls: ['./promotions-table.component.css']
})

export class PromotionsTableComponent implements OnInit {
    promotions: Observable<Promotion[]>;
    filter: Filter;
    private pollingTime = 1000 * 10;
    private pollingObservable = Observable.interval(this.pollingTime).startWith(0);
    private locationID: number;

    constructor(
        private promotionService: PromotionService,
        private filterService: FilterService
    ) { }

    ngOnInit() {
        this.filter = this.filterService.getFilter();
        // const locationIDs = this.filter.locations.map(l => l.id);
        // const locationID = this.filter.locations.length ? this.filter.locations[0].id : null;
        this.locationID = this.filter.promotion_properties.length ? this.filter.promotion_properties[0].id : null;
        this.promotions = this.pollingObservable
            .switchMap(() => this.getPromotions(this.locationID));
    }

    getPromotions(id?: number): Promise<Promotion[]> {
        return this.promotionService.getPromotions(id)
            .then(promotions => promotions as Promotion[]);
    }

}
