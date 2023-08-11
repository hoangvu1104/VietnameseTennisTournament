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

  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
