import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryeditPageRoutingModule } from './categoryedit-routing.module';

import { CategoryeditPage } from './categoryedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryeditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryeditPage]
})
export class CategoryeditPageModule {}
