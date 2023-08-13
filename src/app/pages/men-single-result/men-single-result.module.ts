import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenSingleResultPageRoutingModule } from './men-single-result-routing.module';

import { MenSingleResultPage } from './men-single-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenSingleResultPageRoutingModule
  ],
  declarations: []
})
export class MenSingleResultPageModule { }
