import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocationService} from "../../../services/location.service";
import {Location} from "../../../classes/location";

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements OnInit {
    @Input() locations: Location[];
    @Output() locationsChange = new EventEmitter<Location[]>();
    locationList: Location[];

    constructor(
        private locationService: LocationService
    ) { }

    ngOnInit() {
        this.getLocations();
    }

    getLocations(): void {
        this.locationService.getLocations()
            .then(locations => this.locationList = locations);
    }

    inLocations(location: Location): boolean {
        return this.locations ? this.locations
            .some(existingLocation => location.id === existingLocation.id) : false;
    }

    // set locations as users click on them
    setLocation(location: Location): void {
        const existingLocation = this.locations ? this.locations.filter(el => el.id === location.id) : [];
        if (existingLocation.length > 0) {
            this.locations.splice(this.locations.indexOf(existingLocation[0]), 1);
        } else {
            if (!this.locations){this.locations = [];}
                this.locations.push(location);
        }
        this.locationsChange.emit(this.locations);
    }
}
