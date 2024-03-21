import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';


const AllMaterialModules=[MatCardModule,MatIconModule,MatButtonModule,MatToolbarModule,MatDividerModule];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
})
export class SharedModule { }
