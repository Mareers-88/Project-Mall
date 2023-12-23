import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopregistrationPage } from './shopregistration.page';

const routes: Routes = [
  {
    path: '',
    component: ShopregistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopregistrationPageRoutingModule {}
