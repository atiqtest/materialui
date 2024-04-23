import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSuggestRoutingModule } from './search-suggest-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { SearchSuggestComponent } from './search-suggest.component';


@NgModule({
  declarations: [SearchSuggestComponent],
  imports: [
    CommonModule,
    SearchSuggestRoutingModule,
    SharedModule
  ]
})
export class SearchSuggestModule { }
