import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomeritemviewmorePage } from './customeritemviewmore.page';

const routes: Routes = [
  {
    path: '',
    component: CustomeritemviewmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomeritemviewmorePageRoutingModule {}
