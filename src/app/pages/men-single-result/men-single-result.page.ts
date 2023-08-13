import { Component, OnInit } from '@angular/core';
import { StaticVariable } from 'src/shared/staticVariable';

@Component({
  selector: 'app-men-single-result',
  templateUrl: './men-single-result.page.html',
  styleUrls: ['./men-single-result.page.scss'],
})
export class MenSingleResultPage implements OnInit {
  imagePath = StaticVariable.ImagesPath + 'BannerTennis.png';
  teamsToShowAA: string[] = ['Tony Ha (4)', 'Tùng Trương (3.5)', 'Daniel Đặng (3.5)']; // Teams to show for Group AA
  teamsToShowAB: string[] = ['Quyền Huỳnh (4)', 'Tiến Nguyễn (3.5)', 'Gael Dương (3.5)']; // Teams to show for Group AB
  teamsToShowBA: string[] = ['Đức Nguyễn (3)', 'Long Su (3)', 'Khoa Nguyễn (2.5)']; // Teams to show for Group BA
  teamsToShowBB: string[] = ['Cảnh Mai (3)', 'Quang Trần (3)', 'Hưng Tôn (2.5)']; // Teams to show for Group BB
  constructor() { }

  ngOnInit() {
  }

}
