import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopviewPage } from './shopview.page';

const routes: Routes = [
  {
    path: '',
    component: ShopviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopviewPageRoutingModule {}
