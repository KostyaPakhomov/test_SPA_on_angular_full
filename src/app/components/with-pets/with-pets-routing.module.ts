import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithPetsComponent } from './with-pets.component';

const routes: Routes = [{ path: '', component: WithPetsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithPetsRoutingModule { }
