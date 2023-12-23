import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemdeletePage } from './itemdelete.page';

const routes: Routes = [
  {
    path: '',
    component: ItemdeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemdeletePageRoutingModule {}
