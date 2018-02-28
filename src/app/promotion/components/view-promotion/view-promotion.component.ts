import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Promotion} from "../../../classes/promotion";

@Component({
  selector: 'app-view-promotion',
  templateUrl: './view-promotion.component.html',
  styleUrls: ['./view-promotion.component.css']
})
export class ViewPromotionComponent implements OnInit, OnChanges {
    @Input() promotion: Promotion;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) { }

    ngOnInit() {
        // console.log(this.promotion);
      }

}
