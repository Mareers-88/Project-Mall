import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryviewPage } from './categoryview.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryviewPageRoutingModule {}
