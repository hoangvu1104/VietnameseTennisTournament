import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'men-single-result',
    pathMatch: 'full'
  },
  {
    path: 'mix-doubles-info',
    loadChildren: () => import('./pages/mix-doubles-info/mix-doubles-info.module').then(m => m.MixDoublesInfoPageModule)
  },
  // {
  //   path: 'men-doubles-info',
  //   loadChildren: () => import('./pages/men-doubles-info/men-doubles-info.module').then(m => m.MenDoublesInfoPageModule)
  // },
  // {
  //   path: 'men-single',
  //   loadChildren: () => import('./pages/men-single/men-single.module').then(m => m.MenSinglePageModule)
  // },
  {
    path: 'men-single-result',
    loadChildren: () => import('./pages/men-single-result/men-single-result.module').then(m => m.MenSingleResultPageModule)
  },
  {
    path: 'men-doubles-result',
    loadChildren: () => import('./pages/men-doubles-result/men-doubles-result.module').then(m => m.MenDoublesResultPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
