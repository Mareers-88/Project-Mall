import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoploginPage } from './shoplogin.page';

const routes: Routes = [
  {
    path: '',
    component: ShoploginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoploginPageRoutingModule {}
