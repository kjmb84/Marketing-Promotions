import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionsTableComponent } from './components/promotions-table/promotions-table.component';
import { CreatePromotionComponent } from './components/create-promotion/create-promotion.component';
import { ViewPromotionComponent } from './components/view-promotion/view-promotion.component';
import {UpdatePromotionComponent} from "./components/update-promotion/update-promotion.component";
import {PromotionDashboardComponent} from "./components/promotion-dashboard/promotion-dashboard.component";
import {CreatePromotionLocationComponent} from "./components/create-promotion-location/create-promotion-location.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/promotions',
        pathMatch: 'full'
    },
    {
        path: 'promotions',
        component: PromotionsTableComponent,
        // pathMatch: 'full'
    },
    {
        path: 'promotions/new',
        component: CreatePromotionComponent
    },
    {
        path: 'promotions/dashboard',
        component: PromotionDashboardComponent
    },
    {
        path: 'promotions/:id',
        component: ViewPromotionComponent
    },
    {
        path: 'promotions/:id/update',
        component: UpdatePromotionComponent
    },
    {
        path: 'promotion-locations/new',
        component: CreatePromotionLocationComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MarketingPromotionsRoutingModule { }
