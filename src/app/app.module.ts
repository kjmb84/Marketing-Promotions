import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload';
import {PromotionModule} from './promotion/promotion.module';
import {AppRoutingModule} from './app-routing.module';
import { PropertyPromotionsPipe } from './promotion/pipes/property-promotions.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PropertyPromotionsPipe,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      FileUploadModule,
      PromotionModule,
      AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
