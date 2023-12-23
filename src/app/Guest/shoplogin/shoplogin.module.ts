import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoploginPageRoutingModule } from './shoplogin-routing.module';

import { ShoploginPage } from './shoplogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoploginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShoploginPage]
})
export class ShoploginPageModule {}
