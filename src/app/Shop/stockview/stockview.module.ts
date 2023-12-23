import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockviewPageRoutingModule } from './stockview-routing.module';

import { StockviewPage } from './stockview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockviewPageRoutingModule
  ],
  declarations: [StockviewPage]
})
export class StockviewPageModule {}
