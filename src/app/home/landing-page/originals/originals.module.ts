import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OriginalsRoutingModule } from './originals-routing.module';
import { OriginalsComponent } from './originals.component';


@NgModule({
  declarations: [
    OriginalsComponent
  ],
  imports: [
    CommonModule,
    OriginalsRoutingModule
  ]
})
export class OriginalsModule { }
