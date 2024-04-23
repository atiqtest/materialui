import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwipeRoutingModule } from './swipe-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { SwipeComponent } from './swipe.component';


@NgModule({
  declarations: [SwipeComponent],
  imports: [
    CommonModule,
    SwipeRoutingModule,
    SharedModule
  ]
})
export class SwipeModule { }
