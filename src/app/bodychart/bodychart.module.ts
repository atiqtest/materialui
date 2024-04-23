import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodychartRoutingModule } from './bodychart-routing.module';
import { BodychartComponent } from './bodychart.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [BodychartComponent],
  imports: [
    CommonModule,
    BodychartRoutingModule,
    SharedModule
  ]
})
export class BodychartModule { }
