import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { SidenavComponent } from './sidenav.component';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    SharedModule
  ]
})
export class SidenavModule { }
