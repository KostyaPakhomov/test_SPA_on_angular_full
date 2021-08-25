import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithPetsRoutingModule } from './with-pets-routing.module';
import { WithPetsComponent } from './with-pets.component';


@NgModule({
  declarations: [
    WithPetsComponent
  ],
  imports: [
    CommonModule,
    WithPetsRoutingModule
  ]
})
export class WithPetsModule { }
