import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerviewPage } from './customerview.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerviewPageRoutingModule {}
