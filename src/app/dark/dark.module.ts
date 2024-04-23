import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkRoutingModule } from './dark-routing.module';
import { DarkComponent } from './dark.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [DarkComponent],
  imports: [
    CommonModule,
    DarkRoutingModule,
    SharedModule
  ]
})
export class DarkModule { }
