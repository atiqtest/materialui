import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInUpRoutingModule } from './sign-in-up-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { SignInUpComponent } from './sign-in-up.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [SignInUpComponent],
  imports: [
    CommonModule,
    SignInUpRoutingModule,
    SharedModule,
   
  ]
})
export class SignInUpModule { }
