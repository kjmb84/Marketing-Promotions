import {Component, Input, OnInit} from '@angular/core';
import {PromotionTime} from '../../../classes/promotion-time';
import * as moment from 'moment';

@Component({
  selector: 'app-promotion-dates',
  templateUrl: './promotion-dates.component.html',
  styleUrls: ['./promotion-dates.component.css']
})
export class PromotionDatesComponent implements OnInit {
    @Input() promotionTimes: PromotionTime[];

    constructor() { }

    ngOnInit() { }

    addDates(): void {
        const promotionTime = new PromotionTime();
        promotionTime.id = this.promotionTimes.length > 0 ?
            this.promotionTimes[this.promotionTimes.length - 1].id + 1 : 1;
        this.promotionTimes.push(promotionTime);
        console.log(this.promotionTimes);
    }

    removeDates(promotionTime: PromotionTime): void {
        this.promotionTimes.splice(this.promotionTimes.indexOf(promotionTime), 1);
    }

    // setEndDate(event: string, promotionTime: PromotionTime) {
    setEndDate(promotionTime: PromotionTime) {
        promotionTime.end_date = moment((event as any).target.value, 'YYYY-MM-DDThh:mm:ss').format('YYYY-MM-DD hh:mm:ss');
    }

    setStartDate(promotionTime: PromotionTime) {
        promotionTime.start_date = moment((event as any).target.value, 'YYYY-MM-DDThh:mm:ss').format('YYYY-MM-DD hh:mm:ss');
    }
}
