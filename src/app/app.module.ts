import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MenSinglePage } from './pages/men-single/men-single.page';
import { MenDoublesInfoPage } from './pages/men-doubles-info/men-doubles-info.page';
import { MixDoublesInfoPage } from './pages/mix-doubles-info/mix-doubles-info.page';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarHeaderComponent,
    MenuComponent,
    MenSinglePage,
    MenDoublesInfoPage,
    MixDoublesInfoPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !isDevMode(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NavParams],
  bootstrap: [AppComponent],
})
export class AppModule { }
