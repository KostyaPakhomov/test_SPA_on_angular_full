import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main',
    loadChildren: () => import('./components/main/main.module')
      .then(m => m.MainModule) },
  { path: 'for-adult',
    loadChildren: () => import('./components/for-adult/for-adult.module')
      .then(m => m.ForAdultModule) },
  { path: 'for-children',
    loadChildren: () => import('./components/for-children/for-children.module')
      .then(m => m.ForChildrenModule) },
  { path: 'with-pets',
    loadChildren: () => import('./components/with-pets/with-pets.module')
      .then(m => m.WithPetsModule) },
  { path: 'for-big-company',
    loadChildren: () => import('./components/for-big-company/for-big-company.module')
      .then(m => m.ForBigCompanyModule) },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
