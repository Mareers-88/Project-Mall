import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemeditPage } from './itemedit.page';

const routes: Routes = [
  {
    path: '',
    component: ItemeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemeditPageRoutingModule {}
