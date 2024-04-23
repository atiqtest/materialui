import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    SharedModule,
    
  ]
})
export class TabsModule { }
