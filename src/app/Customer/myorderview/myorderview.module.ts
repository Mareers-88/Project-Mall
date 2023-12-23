import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyorderviewPageRoutingModule } from './myorderview-routing.module';

import { MyorderviewPage } from './myorderview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyorderviewPageRoutingModule
  ],
  declarations: [MyorderviewPage]
})
export class MyorderviewPageModule {}
