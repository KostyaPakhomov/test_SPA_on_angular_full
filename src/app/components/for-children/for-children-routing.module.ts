import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForChildrenComponent } from './for-children.component';

const routes: Routes = [{ path: '', component: ForChildrenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForChildrenRoutingModule { }
