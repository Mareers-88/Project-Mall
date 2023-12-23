import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryviewPageRoutingModule } from './categoryview-routing.module';

import { CategoryviewPage } from './categoryview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryviewPageRoutingModule
  ],
  declarations: [CategoryviewPage]
})
export class CategoryviewPageModule {}
