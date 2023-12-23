import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopregistrationPageRoutingModule } from './shopregistration-routing.module';

import { ShopregistrationPage } from './shopregistration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopregistrationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopregistrationPage]
})
export class ShopregistrationPageModule {}
