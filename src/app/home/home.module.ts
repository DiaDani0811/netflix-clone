import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    LandingPageComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    DialogModule,
    
  ]
})
export class HomeModule { }
