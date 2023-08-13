import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { StaticVariable } from 'src/shared/staticVariable';

@Component({
  selector: 'app-mix-doubles-info',
  templateUrl: './mix-doubles-info.page.html',
  styleUrls: ['./mix-doubles-info.page.scss'],
})
export class MixDoublesInfoPage implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }
  imagePath = StaticVariable.ImagesPath + 'BannerTennis.png';
  MixedPlayers: any[] = [
    {
      playerName: 'Hạnh Minh - Tấn Lộc', level: 3.5
    },
    {
      playerName: 'Quỳnh Như - Thông Phạm', level: 3.5
    },
    {
      playerName: 'Ngọc Trần - Đức Nguyễn', level: 3
    },
    {
      playerName: 'Hương Giang - Dũng Tiến', level: 3
    }
  ];
}
