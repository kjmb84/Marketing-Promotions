import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PromotionType} from '../../../classes/promotion-type';
import {PromotionTypeService} from '../../../services/promotion-type.service';
import {PromotionTypeInfo} from '../../../classes/promotion-type-info';
import * as moment from 'moment';

@Component({
  selector: 'app-promotion-types-input',
  templateUrl: './promotion-types-input.component.html',
  styleUrls: ['./promotion-types-input.component.css']
})
export class PromotionTypesInputComponent implements OnInit, OnChanges {
    @Input() promotionTypes: PromotionType[];
    @Output() promotionTypesChange = new EventEmitter<PromotionType[]>();
    promotionTypeList: PromotionType[];

    constructor(
        protected promotionTypeService: PromotionTypeService
    ) {
        // this.initializePromotionTypes();
        // this.promotionTypes = [] as PromotionType[];
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes);
    }

    ngOnInit() {
        this.getPromotionTypes();
        // this.initializePromotionTypes();
    }

    // initializePromotionTypes(): void {
    //     if (!this.promotionTypes) {
    //         this.promotionTypes = [] as PromotionType[];
    //         console.log(this.promotionTypes);
    //     }
    // }

    getPromotionTypes(): void {
        this.promotionTypeService.getPromotionTypes()
            .then(promotionTypes => this.promotionTypeList = promotionTypes);
    }

    // check if the promotion type already exists in the promotion
    inPromotionTypes(promotionType: PromotionType): boolean {
        return this.promotionTypes ? this.promotionTypes
            .some(ept => promotionType.id === ept.id) : false;
    }

    // determines whether a specific promotion type exists on the current promotion
    getExistingPromotionType(promotionType: PromotionType): PromotionType {
        const a = this.promotionTypes ? this.promotionTypes
            .filter(ept => promotionType.id === ept.id)[0] : null;
        return a ? a : new PromotionType();
    }

    // set the promotion types as the users click them
    setPromotionType(promotionType: PromotionType): void {
        const existingPromotionType = this.promotionTypes ? this.promotionTypes.find(ept => ept.id === promotionType.id) : [];
        // if (existingPromotionType.length > 0) {
        if (this.promotionTypes ? this.promotionTypes.some(ept => ept.id === promotionType.id) : false) {
            this.promotionTypes = this.promotionTypes.filter(ept => ept.id !== promotionType.id);
            // this.promotionTypes.splice(this.promotionTypes.indexOf(existingPromotionType[0]), 1);
        } else {
            promotionType.promotion_type_info = [new PromotionTypeInfo()];
            if (!this.promotionTypes) {
                this.promotionTypes = [];
            }
            this.promotionTypes.push(promotionType);
        }
        this.promotionTypesChange.emit(this.promotionTypes);
    }

    addPromotionTypeInfo(promotionType: PromotionType): void {
        if (promotionType.promotion_type_info) {
            const npti = new PromotionTypeInfo();
            promotionType.promotion_type_info.push(npti);
        } else {
            promotionType.promotion_type_info = [new PromotionTypeInfo()];
        }
        this.promotionTypesChange.emit(this.promotionTypes);
    }

    removePromotionTypeInfo(promotionTypeInfo: PromotionTypeInfo, promotionType: PromotionType): void {
        promotionType.promotion_type_info = promotionType.promotion_type_info.filter(epti => promotionTypeInfo !== epti);
        this.promotionTypesChange.emit(this.promotionTypes);
    }

    toggleTab(name, index): void {
        $('#' + name + '-tab-content-' + index).toggleClass('active');
        $('#' + name + '-arrow-' + index).toggleClass('flip');
    }

    setCompletedOn(promotionTypeInfo: PromotionTypeInfo): void {
        promotionTypeInfo.completed_datetime = moment((event as any).target.value, 'YYYY-MM-DDThh:mm:ss').format('YYYY-MM-DD hh:mm:ss');
    }
}
