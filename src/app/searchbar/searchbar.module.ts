import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarRoutingModule } from './searchbar-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { SearchbarComponent } from './searchbar.component';


@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    SearchbarRoutingModule,
    SharedModule
  ]
})
export class SearchbarModule { }
