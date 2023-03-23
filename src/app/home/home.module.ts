import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeaturesComponent } from './landing-page/features/features.component';
import { PricingComponent } from './landing-page/pricing/pricing.component';
import { FaqComponent } from './landing-page/faq/faq.component';
import { AboutComponent } from './landing-page/about/about.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    FeaturesComponent,
    PricingComponent,
    FaqComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
