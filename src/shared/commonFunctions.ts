import { Injectable } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class CommonFunctions {
  constructor(private menuCtrl: MenuController) { }

  enableMenuSwipe() {
    this.menuCtrl.swipeGesture(true, 'menu-content');
    this.menuCtrl.enable(true, 'menu-content');
  }
}
