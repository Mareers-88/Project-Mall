import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockviewPage } from './stockview.page';

const routes: Routes = [
  {
    path: '',
    component: StockviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockviewPageRoutingModule {}
