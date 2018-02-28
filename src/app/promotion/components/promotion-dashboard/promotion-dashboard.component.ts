import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../../services/promotion.service';
import {Promotion} from '../../../classes/promotion';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-promotion-dashboard',
  templateUrl: './promotion-dashboard.component.html',
  styleUrls: ['./promotion-dashboard.component.css']
})
export class PromotionDashboardComponent implements OnInit {
  promotions: Observable<Promotion[]>;
  private pollingTime = 100000 * 10;
  private pollingObservable = Observable.interval(this.pollingTime).startWith(0);

  constructor(
      private promotionService: PromotionService,
  ) { }

  ngOnInit() {
    this.promotions = this.pollingObservable
        .switchMap(() => this.getPromotions());
  }

  getPromotions(id?: number): Promise<Promotion[]> {
    return this.promotionService.getPromotions(id)
        .then(promotions => promotions as Promotion[]);
  }
}
