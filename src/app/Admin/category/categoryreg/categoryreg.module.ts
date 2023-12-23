import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryregPageRoutingModule } from './categoryreg-routing.module';

import { CategoryregPage } from './categoryreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryregPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryregPage]
})
export class CategoryregPageModule {}
