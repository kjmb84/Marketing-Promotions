import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Location as WorkingLocation} from "../classes/location";

@Injectable()
export class LocationService {
    private locations: WorkingLocation[];

    constructor() {
        this.locations = this.exampleLocations();
    }

    getLocations(): Promise<WorkingLocation[]> {
        return Promise.resolve(this.locations);
    }

    exampleLocations(): WorkingLocation[] {
        return JSON.parse('[{"id":1,"name":"Brookside Downtown - Columbia","short_name":"dt","public_name":"Brookside Downtown","type":"student_housing","office_address":"120 South 10th Street","city":"Columbia","state":"Missouri","zip":"65201","redecoration_fee":"250.00","activities_fee":"150.00","image_name":"downtown_logo.png"},{"id":2,"name":"Brookside Midtown - Columbia","short_name":"mt","public_name":"Brookside Midtown","type":"student_housing","office_address":"1221 East Walnut","city":"Columbia","state":"Missouri","zip":"65201","redecoration_fee":"250.00","activities_fee":"150.00","image_name":"midtown_logo.png"},{"id":3,"name":"Brookside Townhomes - Columbia","short_name":"th","public_name":"Brookside Townhomes","type":"student_housing","office_address":"400 West Old Plank Road","city":"Columbia","state":"Missouri","zip":"65203","redecoration_fee":"250.00","activities_fee":"150.00","image_name":"townhomes_logo.png"},{"id":4,"name":"Brookside Midtown - Bowling Green","short_name":"mtwku","public_name":"Brookside Midtown","type":"student_housing","office_address":"1313 Center St","city":"Bowling Green","state":"Kentucky","zip":"42101","redecoration_fee":"250.00","activities_fee":"150.00","image_name":"midtown_logo.png"},{"id":5,"name":"Bengal Ridge - Columbia","short_name":"br","public_name":"Bengal Ridge","type":"","office_address":"400 West Old Plank Road","city":"Columbia","state":"Missouri","zip":"65203","redecoration_fee":"250.00","activities_fee":"150.00","image_name":"bengal_ridge_logo.png"},{"id":11,"name":"Midtown - Stillwater","short_name":"MTOSU","public_name":"Midtown","type":"student_housing","office_address":"801 W. 4th Ave","city":"Stillwater","state":"OK","zip":"74074","redecoration_fee":"250.00","activities_fee":"150.00","image_name":"midtown_osu_logo.png"}]')as WorkingLocation[];
    }

}
