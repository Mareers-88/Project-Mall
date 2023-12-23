import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomeritemviewmorePageRoutingModule } from './customeritemviewmore-routing.module';

import { CustomeritemviewmorePage } from './customeritemviewmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomeritemviewmorePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomeritemviewmorePage]
})
export class CustomeritemviewmorePageModule {}
