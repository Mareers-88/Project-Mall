import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemeditPageRoutingModule } from './itemedit-routing.module';

import { ItemeditPage } from './itemedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItemeditPage]
})
export class ItemeditPageModule {}
