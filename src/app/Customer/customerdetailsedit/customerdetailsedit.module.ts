import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerdetailseditPageRoutingModule } from './customerdetailsedit-routing.module';

import { CustomerdetailseditPage } from './customerdetailsedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerdetailseditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerdetailseditPage]
})
export class CustomerdetailseditPageModule {}
