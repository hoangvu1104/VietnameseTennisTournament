import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'men-single',
    pathMatch: 'full'
  },
  {
    path: 'mix-doubles-info',
    loadChildren: () => import('./pages/mix-doubles-info/mix-doubles-info.module').then(m => m.MixDoublesInfoPageModule)
  },
  {
    path: 'men-doubles-info',
    loadChildren: () => import('./pages/men-doubles-info/men-doubles-info.module').then(m => m.MenDoublesInfoPageModule)
  },
  {
    path: 'men-single',
    loadChildren: () => import('./pages/men-single/men-single.module').then(m => m.MenSinglePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
