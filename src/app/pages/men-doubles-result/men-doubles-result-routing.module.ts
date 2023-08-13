import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenDoublesResultPage } from './men-doubles-result.page';

const routes: Routes = [
  {
    path: '',
    component: MenDoublesResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenDoublesResultPageRoutingModule {}
