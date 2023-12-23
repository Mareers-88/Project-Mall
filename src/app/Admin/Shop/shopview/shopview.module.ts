import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopviewPageRoutingModule } from './shopview-routing.module';

import { ShopviewPage } from './shopview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopviewPageRoutingModule
  ],
  declarations: [ShopviewPage]
})
export class ShopviewPageModule {}
