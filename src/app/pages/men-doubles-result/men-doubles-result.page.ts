import { Component, OnInit } from '@angular/core';
import { StaticVariable } from 'src/shared/staticVariable';

@Component({
  selector: 'app-men-doubles-result',
  templateUrl: './men-doubles-result.page.html',
  styleUrls: ['./men-doubles-result.page.scss'],
})
export class MenDoublesResultPage implements OnInit {
  imagePath = StaticVariable.ImagesPath + 'BannerTennis.png';
  teamsToShowGroupA: string[] = ['Hải Võ - Hiếu Phan (3.5)', 'Nghiệp Trường - Thông Phạm (3.5)', 'Duẫn Nguyễn - Vũ Phạm (2.5']; // Teams to show for Group A
  teamsToShowGroupB: string[] = ['Vỹ Lê - Thụy Lê (3.5)', 'Nguyên Lê - Minh Lê (4)', 'Phong Nguyễn - Hưng Tôn (2.5)']; // Teams to show for Group B
  constructor() { }

  ngOnInit() {
  }

}
