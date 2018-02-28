import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PromotionGroup} from "../../../classes/promotion-group";
import {PromotionGroupService} from "../../../services/promotion-group.service";

@Component({
  selector: 'app-promotion-groups-input',
  templateUrl: './promotion-groups-input.component.html',
  styleUrls: ['./promotion-groups-input.component.css']
})
export class PromotionGroupsInputComponent implements OnInit, OnChanges {
    @Input() promotionGroups: PromotionGroup[];
    @Output() promotionGroupsChange = new EventEmitter<PromotionGroup[]>();
    groups: PromotionGroup[];

    constructor(
        public promotionGroupService: PromotionGroupService
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        if (!changes.promotionGroups.currentValue) {
            this.promotionGroups = changes.promotionGroups.previousValue;
        }
    }

    ngOnInit() {
        this.getPromotionGroups();
    }

    getPromotionGroups(): void {
        this.promotionGroupService.getPromotionGroups()
            .then(groups => this.groups = groups);
    }

    inGroups(group: PromotionGroup): boolean {
        const result = this.promotionGroups ? this.promotionGroups
            .some(epg => group.id === epg.id) : false;
        return result;
    }

    // set groups as users click on them
    setGroup(group: PromotionGroup): void {
        const existingPromotionGroup = this.promotionGroups ? this.promotionGroups.filter(epg => epg.id === group.id) : [];
        if (existingPromotionGroup.length > 0) {
            this.promotionGroups.splice(this.promotionGroups.indexOf(existingPromotionGroup[0], 1));
        } else {
            // this.promotionGroups = [];
            this.promotionGroups.push(group);
            this.promotionGroupsChange.emit(this.promotionGroups);
        }
    }
}
