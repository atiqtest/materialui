import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadersRoutingModule } from './loaders-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { LoadersComponent } from './loaders.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [LoadersComponent],
  imports: [
    CommonModule,
    LoadersRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule
  ]
})
export class LoadersModule { }
