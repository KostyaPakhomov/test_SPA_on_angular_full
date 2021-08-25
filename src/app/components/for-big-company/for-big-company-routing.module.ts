import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForBigCompanyComponent } from './for-big-company.component';

const routes: Routes = [{ path: '', component: ForBigCompanyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForBigCompanyRoutingModule { }
