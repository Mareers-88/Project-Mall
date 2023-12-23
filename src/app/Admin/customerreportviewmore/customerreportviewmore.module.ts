import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerreportviewmorePageRoutingModule } from './customerreportviewmore-routing.module';

import { CustomerreportviewmorePage } from './customerreportviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerreportviewmorePageRoutingModule
  ],
  declarations: [CustomerreportviewmorePage]
})
export class CustomerreportviewmorePageModule {}
