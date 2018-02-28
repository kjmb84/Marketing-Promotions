import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PromotionTarget} from '../../../classes/promotion-target';
import {Subject} from 'rxjs/Subject';
import {PromotionTargetService} from '../../../services/promotion-target.service';

@Component({
  selector: 'app-promotion-targets',
  templateUrl: './promotion-targets.component.html',
  styleUrls: ['./promotion-targets.component.css']
})
export class PromotionTargetsComponent implements OnInit {
    @Input() promotionTargets: PromotionTarget[];
    promotionTargetsList: PromotionTarget[];

    filteredPromotionTargets: Observable<PromotionTarget[]>;
    promotionTargetsSearch = new Subject<string>();

    constructor(
        private promotionTargetService: PromotionTargetService
    ) { }

    ngOnInit() {
        this.getPromotionTargets();
        this.filteredPromotionTargets = this.promotionTargetsSearch
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(term => Observable.of(this.filterPromotionTargets(term)));
    }

    getPromotionTargets(): void {
        this.promotionTargetService.getPromotionTargets()
            .then(promotionTargets => this.promotionTargetsList = promotionTargets);
    }

    inPromotionTargets(promotionTarget: PromotionTarget): boolean {
        this.promotionTargets = this.promotionTargets ? this.promotionTargets : [];
        return this.promotionTargets ? this.promotionTargets
            .some(ept => promotionTarget.id === ept.id) : false;
    }

    searchPromotionTargets(term: string): void {
        this.promotionTargetsSearch.next(term.toLowerCase());
    }

    setPromotionTarget(promotionTarget: PromotionTarget): void {
        this.promotionTargets = this.promotionTargets ? this.promotionTargets : [];
        const existingPromotionTarget = this.promotionTargets.filter(ept => ept.id === promotionTarget.id);
        if (existingPromotionTarget.length > 0) {
            this.promotionTargets.splice(this.promotionTargets.indexOf(existingPromotionTarget[0]), 1);
        } else {
            this.promotionTargets.push(promotionTarget);
        }
    }

    filterPromotionTargets(search: string): PromotionTarget[] {
        this.promotionTargets = this.promotionTargets ? this.promotionTargets : [];
        return this.promotionTargetsList.length > 0 ? this.promotionTargetsList
            .filter(promotionTarget => {
                return promotionTarget.name.toLowerCase().indexOf(search) !== -1
                    || this.promotionTargets.some(ept => ept.id === promotionTarget.id);
            }, this)
            .sort(function (a: PromotionTarget, b: PromotionTarget) {
                return a.name.toLowerCase().indexOf(search) > b.name.toLowerCase().indexOf(search) ? 1 : -1;
            })
            .slice(0, 10 + this.promotionTargets.length) : [];
    }

}
