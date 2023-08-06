import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenSinglePage } from './men-single.page';

const routes: Routes = [
  {
    path: '',
    component: MenSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenSinglePageRoutingModule {}
