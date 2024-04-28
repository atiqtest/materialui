import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PtabsComponent } from './ptabs/ptabs.component';
import { BarchartComponent } from 'src/app/charts/barchart/barchart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BodychartComponent } from 'src/app/bodychart/bodychart.component';
import { BodychartModule } from 'src/app/bodychart/bodychart.module';


@NgModule({
  declarations: [PatientComponent,PtabsComponent,BarchartComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    BodychartModule

   
  
  ]
})
export class PatientModule { }
