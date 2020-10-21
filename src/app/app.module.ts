import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangsComponent } from './langs/langs.component';
import { LogosComponent } from './logos/logos.component';
import { IconsComponent } from './icons/icons.component';
import { StepsComponent } from './steps/steps.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    LangsComponent,
    LogosComponent,
    IconsComponent,
    StepsComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
