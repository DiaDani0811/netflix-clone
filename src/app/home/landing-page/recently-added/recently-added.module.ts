import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentlyAddedRoutingModule } from './recently-added-routing.module';
import { RecentlyAddedComponent } from './recently-added.component';


@NgModule({
  declarations: [
    RecentlyAddedComponent
  ],
  imports: [
    CommonModule,
    RecentlyAddedRoutingModule
  ]
})
export class RecentlyAddedModule { }
