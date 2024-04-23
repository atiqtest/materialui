import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { StepperComponent } from './stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    StepperRoutingModule,
    SharedModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class StepperModule { }
