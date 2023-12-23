import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomershoppingPage } from './customershopping.page';

const routes: Routes = [
  {
    path: '',
    component: CustomershoppingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomershoppingPageRoutingModule {}
