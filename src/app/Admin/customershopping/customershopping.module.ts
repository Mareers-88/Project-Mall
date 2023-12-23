import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomershoppingPageRoutingModule } from './customershopping-routing.module';

import { CustomershoppingPage } from './customershopping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomershoppingPageRoutingModule
  ],
  declarations: [CustomershoppingPage]
})
export class CustomershoppingPageModule {}
