import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomeritemviewPage } from './customeritemview.page';

const routes: Routes = [
  {
    path: '',
    component: CustomeritemviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomeritemviewPageRoutingModule {}
