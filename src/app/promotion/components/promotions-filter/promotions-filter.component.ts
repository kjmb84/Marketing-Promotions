import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "../../../classes/location";
import {LocationService} from "../../../services/location.service";
import {Filter} from "../../../classes/filter";
import {PromotionTime} from "../../../classes/promotion-time";
import {FilterService} from "../../../services/filter.service";

@Component({
  selector: 'app-promotions-filter',
  templateUrl: './promotions-filter.component.html',
  styleUrls: ['./promotions-filter.component.css']
})
export class PromotionsFilterComponent implements OnInit {
    filter: Filter;
    locations: Location[];

    constructor(
        public locationService: LocationService,
        public filterService: FilterService
    ) { }

    ngOnInit() {
        this.locationService.getLocations()
            .then(locations => this.locations = locations);
        this.filter = this.filterService.getFilter();
        if (!this.filter) {
            this.filter = new Filter();
            this.filter.promotion_properties = [];
            this.filter.timeFrame = new PromotionTime();
        }
    }

    inFilterLocations(location: Location): boolean {
        return this.filter.promotion_properties ? this.filter.promotion_properties
            .some(el => location.id === el.id) : false;
    }

    setLocation(location: Location): void {
        // const existingLocation = this.filter.locations.filter(el => el.id === location.id);
        // if (existingLocation.length > 0) {
        //     this.filter.locations.splice(this.filter.locations.indexOf(existingLocation[0]), 1);
        // } else {
        this.filter.promotion_properties.length = 0;
        this.filter.promotion_properties.push(location);
        this.filterService.setFilter(this.filter);
        // }
    }
}

