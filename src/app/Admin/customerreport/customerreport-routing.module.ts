import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerreportPage } from './customerreport.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerreportPageRoutingModule {}
