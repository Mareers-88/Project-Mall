import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerviewPageRoutingModule } from './customerview-routing.module';

import { CustomerviewPage } from './customerview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerviewPageRoutingModule
  ],
  declarations: [CustomerviewPage]
})
export class CustomerviewPageModule {}
