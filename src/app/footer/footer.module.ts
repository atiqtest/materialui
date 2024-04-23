import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
     SharedModule
  ]
})
export class FooterModule { }
