import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenDoublesInfoPage } from './men-doubles-info.page';

const routes: Routes = [
  {
    path: '',
    component: MenDoublesInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenDoublesInfoPageRoutingModule {}
