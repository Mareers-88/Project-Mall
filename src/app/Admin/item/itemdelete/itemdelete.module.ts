import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemdeletePageRoutingModule } from './itemdelete-routing.module';

import { ItemdeletePage } from './itemdelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemdeletePageRoutingModule
  ],
  declarations: [ItemdeletePage]
})
export class ItemdeletePageModule {}
