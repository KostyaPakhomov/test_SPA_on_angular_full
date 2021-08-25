import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForAdultComponent } from './for-adult.component';

const routes: Routes = [{ path: '', component: ForAdultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForAdultRoutingModule { }
