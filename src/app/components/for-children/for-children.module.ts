import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForChildrenRoutingModule } from './for-children-routing.module';
import { ForChildrenComponent } from './for-children.component';


@NgModule({
  declarations: [
    ForChildrenComponent
  ],
  imports: [
    CommonModule,
    ForChildrenRoutingModule
  ]
})
export class ForChildrenModule { }
