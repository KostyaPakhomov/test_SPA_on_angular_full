import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForBigCompanyRoutingModule } from './for-big-company-routing.module';
import { ForBigCompanyComponent } from './for-big-company.component';


@NgModule({
  declarations: [
    ForBigCompanyComponent
  ],
  imports: [
    CommonModule,
    ForBigCompanyRoutingModule
  ]
})
export class ForBigCompanyModule { }
