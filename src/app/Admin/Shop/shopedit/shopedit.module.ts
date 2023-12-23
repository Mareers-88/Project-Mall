import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopeditPageRoutingModule } from './shopedit-routing.module';

import { ShopeditPage } from './shopedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopeditPage]
})
export class ShopeditPageModule {}
