import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixDoublesInfoPage } from './mix-doubles-info.page';

const routes: Routes = [
  {
    path: '',
    component: MixDoublesInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixDoublesInfoPageRoutingModule {}
