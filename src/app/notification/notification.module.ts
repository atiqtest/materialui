import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { NotificationComponent } from './notification.component';


@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule
  ]
})
export class NotificationModule { }
