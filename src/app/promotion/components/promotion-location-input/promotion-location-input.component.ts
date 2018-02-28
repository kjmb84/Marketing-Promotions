import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PromotionLocation} from "../../../classes/promotion-location";
import {Subject} from 'rxjs/Subject';
import {PromotionLocationService} from "../../../services/promotion-location.service";

@Component({
  selector: 'app-promotion-location-input',
  templateUrl: './promotion-location-input.component.html',
  styleUrls: ['./promotion-location-input.component.css']
})
export class PromotionLocationInputComponent implements OnInit {
    @Input() promotionLocations: PromotionLocation[];
    promotionLocationsList: PromotionLocation[];

    filteredPromotionLocations: Observable<PromotionLocation[]>;
    promotionLocationsSearch = new Subject<string>();

    constructor(
        private promotionLocationService: PromotionLocationService
    ) { }

    ngOnInit() {
        this.getPromotionLocations();
        this.filteredPromotionLocations = this.promotionLocationsSearch
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(term => Observable.of(this.filterPromotionLocations(term)));
    }

    getPromotionLocations(): void {
        this.promotionLocationService.getPromotionLocations()
            .then(promotionLocations => this.promotionLocationsList = promotionLocations);
    }

    inPromotionLocations(promotionLocation: PromotionLocation): boolean {
        return this.promotionLocations ? this.promotionLocations
            .some(epl => promotionLocation.id === epl.id) : false;
    }

    searchPromotionLocations(term: string): void {
        this.promotionLocationsSearch.next(term.toLowerCase());
    }

    setPromotionLocation(promotionLocation: PromotionLocation): void {
        const existingPromotionLocation = this.promotionLocations.filter(epl => epl.id === promotionLocation.id);
        if (existingPromotionLocation.length > 0) {
            this.promotionLocations.splice(this.promotionLocations.indexOf(existingPromotionLocation[0]), 1);
        } else {
            this.promotionLocations.push(promotionLocation);
        }
    }

    filterPromotionLocations(search: string): PromotionLocation[] {
        return this.promotionLocationsList
            .filter(function(promotionLocation) {
                return promotionLocation.name
                    .toLowerCase()
                    .indexOf(search) !== -1 || this.promotionLocations.some(epl => epl.id === promotionLocation.id);
            }, this)
            .sort(function (a: PromotionLocation, b: PromotionLocation) {
                return a.name.toLowerCase().indexOf(search) > b.name.toLowerCase().indexOf(search) ? 1 : -1;
            })
            .slice(0, 10 + this.promotionLocations.length);
    }
}
