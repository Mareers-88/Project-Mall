import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyorderviewPage } from './myorderview.page';

const routes: Routes = [
  {
    path: '',
    component: MyorderviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyorderviewPageRoutingModule {}
