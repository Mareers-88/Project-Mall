import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomeritemviewPageRoutingModule } from './customeritemview-routing.module';

import { CustomeritemviewPage } from './customeritemview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomeritemviewPageRoutingModule
  ],
  declarations: [CustomeritemviewPage]
})
export class CustomeritemviewPageModule {}
