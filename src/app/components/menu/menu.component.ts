import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RoutesUrl } from 'src/shared/routesUrl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) { }

  ngOnInit() { }

  loadMenSingle() {
    this.navCtrl.navigateRoot(RoutesUrl.MenSingle);
    this.menuCtrl.close();

  }
  loadMenDoubles() {
    this.navCtrl.navigateRoot(RoutesUrl.MenDoubles);
    this.menuCtrl.close();
  }

  loadMenSingleResult() {
    this.navCtrl.navigateRoot(RoutesUrl.MenSingleResult);
    this.menuCtrl.close();

  }
  loadMenDoublesResult() {
    this.navCtrl.navigateRoot(RoutesUrl.MenDoublesResult);
    this.menuCtrl.close();
  }

  loadMixedDoubles() {
    this.navCtrl.navigateRoot(RoutesUrl.MixedDoubles);
    this.menuCtrl.close();
  }

}
