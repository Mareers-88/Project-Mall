import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerreportPageRoutingModule } from './customerreport-routing.module';

import { CustomerreportPage } from './customerreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerreportPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerreportPage]
})
export class CustomerreportPageModule {}
