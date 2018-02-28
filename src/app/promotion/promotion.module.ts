import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PromotionsTableComponent} from "./components/promotions-table/promotions-table.component";
import {UpdatePromotionComponent} from "./components/update-promotion/update-promotion.component";
import {CreatePromotionLocationComponent} from "./components/create-promotion-location/create-promotion-location.component";
import {CreatePromotionComponent} from "./components/create-promotion/create-promotion.component";
import {ViewPromotionComponent} from "./components/view-promotion/view-promotion.component";
import {PromotionLocationInputComponent} from "./components/promotion-location-input/promotion-location-input.component";
import {PromotionFormComponent} from "./components/promotion-form/promotion-form.component";
import {LocationInputComponent} from "./components/location-input/location-input.component";
import {PromotionTypesInputComponent} from "./components/promotion-types-input/promotion-types-input.component";
import {PromotionDashboardComponent} from "./components/promotion-dashboard/promotion-dashboard.component";
import {PromotionDatesComponent} from "./components/promotion-dates/promotion-dates.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {PromotionsFilterComponent} from "./components/promotions-filter/promotions-filter.component";
import {PromotionGroupsInputComponent} from "./components/promotion-groups-input/promotion-groups-input.component";
import {FuturePromotionsPipe} from "./pipes/future-promotions.pipe";
import {CurrentPromotionsPipe} from "./pipes/current-promotions.pipe";
import {RenewalPromotionsPipe} from "./pipes/renewal-promotions.pipe";
import {StudentPromotionsPipe} from "./pipes/student-promotions.pipe";
import {MarketRatePromotionsPipe} from "./pipes/market-rate-promotions.pipe";
import {NewLeasePromotionsPipe} from "./pipes/new-lease-promotions.pipe";
import {PromotionService} from "../services/promotion.service";
import {PromotionLocationService} from "../services/promotion-location.service";
import {PromotionTypeService} from "../services/promotion-type.service";
import {LocationService} from "../services/location.service";
import {FilterService} from "../services/filter.service";
import {Filter} from "../classes/filter";
import {PromotionGroupService} from "../services/promotion-group.service";
import {MarketingPromotionsRoutingModule} from "./marketing-promotions-routing.module";
import {FormsModule} from "@angular/forms";
import {FileUploadModule} from "ng2-file-upload";
import {BrowserModule} from "@angular/platform-browser";
import {PromotionTargetsComponent} from "./components/promotion-targets/promotion-targets.component";
import {PromotionTargetService} from "../services/promotion-target.service";

const components = [
    PromotionsTableComponent,
    UpdatePromotionComponent,
    CreatePromotionLocationComponent,
    CreatePromotionComponent,
    ViewPromotionComponent,
    PromotionLocationInputComponent,
    PromotionFormComponent,
    LocationInputComponent,
    PromotionTypesInputComponent,
    PromotionDashboardComponent,
    PromotionDatesComponent,
    NavigationComponent,
    CreatePromotionLocationComponent,
    PromotionsFilterComponent,
    PromotionGroupsInputComponent,
    PromotionTargetsComponent
];

const pipes = [
    FuturePromotionsPipe,
    CurrentPromotionsPipe,
    RenewalPromotionsPipe,
    StudentPromotionsPipe,
    MarketRatePromotionsPipe,
    NewLeasePromotionsPipe,
];

@NgModule({
  imports: [
      BrowserModule,
      CommonModule,
      MarketingPromotionsRoutingModule,
      FormsModule,
      FileUploadModule,
  ],
  declarations: [
      pipes,
      components
  ],
  providers: [
      PromotionService,
      PromotionLocationService,
      PromotionTypeService,
      LocationService,
      FilterService,
      Filter,
      PromotionGroupService,
      PromotionTargetService
  ]
})
export class PromotionModule { }
