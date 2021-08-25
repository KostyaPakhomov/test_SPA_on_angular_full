import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForAdultRoutingModule } from './for-adult-routing.module';
import { ForAdultComponent } from './for-adult.component';


@NgModule({
  declarations: [
    ForAdultComponent
  ],
  imports: [
    CommonModule,
    ForAdultRoutingModule
  ]
})
export class ForAdultModule { }
