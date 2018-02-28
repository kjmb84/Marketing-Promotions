import {Component, Input, NgModule, OnChanges, OnInit, Optional, SimpleChanges} from '@angular/core';
import {FormGroup, FormsModule, CheckboxControlValueAccessor} from '@angular/forms';
import {Promotion} from '../../../classes/promotion';
import {PromotionService} from '../../../services/promotion.service';
import {LocationService} from '../../../services/location.service';
import {Location as WorkingLocation} from '../../../classes/location';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import {PromotionTime} from '../../../classes/promotion-time';
import {PromotionGroup} from "../../../classes/promotion-group";
import {FileUploader} from "ng2-file-upload";
import {Router} from "@angular/router";
import {PromotionType} from "../../../classes/promotion-type";

@Component({
  selector: 'app-promotion-form',
  templateUrl: './promotion-form.component.html',
  styleUrls: ['./promotion-form.component.css'],
})
export class PromotionFormComponent implements OnInit, OnChanges {
    uploader: FileUploader;
    uploaderOptions = {
        maxFileSize: 3 * 1024 * 1024,
    };

    @Input() promotion?: Promotion;

    constructor(
        private promotionService: PromotionService,
        private router: Router,
        private locationService: LocationService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {}

    ngOnInit(): void {
        // this.uploader = new FileUploader(this.uploaderOptions);

        // initialize promotion stuff
        if (!this.promotion) {
            this.initializePromotion();
        }
    }

    // sets up a new promotion on page load and whenever a promotion is successfully submitted
    initializePromotion(): void {
        this.promotion = new Promotion();
        this.promotion.promotion_times = [new PromotionTime()];
        this.promotion.promotion_properties = [];
        this.promotion.promotion_locations = [];
        this.promotion.promotion_types = [] as PromotionType[];
        this.promotion.promotion_groups = [];
        this.promotion.promotion_targets = [];

    }

    // double not operators lets you represent variables as a bool, who'da thunk
    isValidPromotion(promotion: Promotion): boolean {
        // console.log(this.promotion.promotion_types);
        // return false;
        let valid = true;
        let currValid;
        if (!(currValid = !!promotion.title)) {
            console.log('no title');
        }
        valid = valid && currValid;
        if (!(currValid = !!promotion.description)) {
            console.log('no description');
        }
        valid = valid && currValid;
        // if (!(currValid = !promotion.promotion_times.some(time => !!time.end_date && !time.start_date))) {
        //     console.log('need a start if end date');
        // }
        // valid = valid && currValid;
        // if (!(currValid =
        //         promotion.promotion_times.some(time => {
        //             if (time.start_date && time.end_date) {
        //                 const start = Date.parse(time.start_date);
        //                 const end = Date.parse(time.end_date);
        //                 return start < end;
        //             }
        //             return true;
        //         }))) {
        // }
        // valid = valid && currValid;
        return valid;
    }

    // Angular </3 checkboxes
    resetForm(): void {
        $('input[type=\'checkbox\']').prop('checked', false);
        $('#promotion-locations-search-box').val('');
        this.initializePromotion();
    }

    // submit the entire promotion to the backend
    submitPromotion(promotion: Promotion): void {
        if (!this.isValidPromotion(promotion)) {
            console.log('don\'t submit');
            return;
        }
        if (!promotion.id) {
            this.promotionService
                .createPromotion(promotion)
                .then(() => {
                    this.resetForm();
                })
                .catch();
        } else {
            console.log(promotion);
            this.promotionService
                .updatePromotion(this.promotion.id, this.promotion)
                .then(() => {
                    this.router.navigateByUrl('/promotions/dashboard');
                })
                .catch();
        }
    }

}
