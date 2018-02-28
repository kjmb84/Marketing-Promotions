import {Component, NgModule, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Promotion} from '../../../classes/promotion';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})

export class CreatePromotionComponent implements OnInit, OnChanges {
    promotion: Promotion;
    constructor(
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
}
