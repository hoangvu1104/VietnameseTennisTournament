import { Component, OnInit } from '@angular/core';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { StaticVariable } from 'src/shared/staticVariable';

@Component({
  selector: 'app-men-doubles-info',
  templateUrl: './men-doubles-info.page.html',
  styleUrls: ['./men-doubles-info.page.scss'],
})
export class MenDoublesInfoPage implements OnInit {
  imagePath = StaticVariable.ImagesPath + 'BannerTennis.png';
  countdown = 30;
  teamsToShowGroupA: string[] = []; // Teams to show for Group A
  teamsToShowGroupB: string[] = []; // Teams to show for Group B
  GroupA: string[] = [];
  GroupB: string[] = [];
  MenPlayers: any[] = [];
  MenPlayersA1: any[] = [
    {
      playerName: 'Nguyên Lê - Minh Lê', level: 4
    },
    {
      playerName: 'Vỹ Lê - Thụy Lê', level: 3.5
    },
    {
      playerName: 'Hải Võ - Hiếu Phan', level: 3.5
    },
    {
      playerName: 'Nghiệp Trường - Thông Phạm', level: 3.5
    }
  ]; MenPlayersA2: any[] = [
    {
      playerName: 'Phong Nguyễn - Hưng Tôn', level: 2.5 //11
    },
    {
      playerName: 'Duẫn Nguyễn - Vũ Phạm', level: 2.5 //12
    }
  ];
  constructor(public commonFunction: CommonFunctions) {
    for (let i = 0; i < 4; i++) {
      this.MenPlayers.push(this.MenPlayersA1[i]);
    }
    for (let i = 0; i < 2; i++) {
      this.MenPlayers.push(this.MenPlayersA2[i]);
    }
  }

  startGenerateTeams() {
    this.commonFunction.shuffleArray(this.MenPlayersA1);
    this.commonFunction.shuffleArray(this.MenPlayersA2);
    //GroupA
    this.GroupA.push(this.MenPlayersA1[0].playerName + ' (' + this.MenPlayersA1[0].level + ')');
    this.GroupA.push(this.MenPlayersA1[1].playerName + ' (' + this.MenPlayersA1[1].level + ')');
    this.GroupA.push(this.MenPlayersA2[0].playerName + ' (' + this.MenPlayersA2[0].level + ')');
    //GroupB
    this.GroupB.push(this.MenPlayersA1[2].playerName + ' (' + this.MenPlayersA1[2].level + ')');
    this.GroupB.push(this.MenPlayersA1[3].playerName + ' (' + this.MenPlayersA1[3].level + ')');
    this.GroupB.push(this.MenPlayersA2[1].playerName + ' (' + this.MenPlayersA2[1].level + ')');

    console.log('startGenerateTeams 2');
    this.teamsToShowGroupA = []; // Teams to show for Group AA
    this.teamsToShowGroupB = []; // Teams to show for Group AB
    this.updateTeamsToShow();
  }

  updateTeamsToShow() {
    for (let i = 0; i < 3; i++) {
      let playerAA = this.GroupA[i];
      let playerAB = this.GroupB[i];
      setTimeout(() => {
        this.teamsToShowGroupA.push(playerAA);
        this.teamsToShowGroupB.push(playerAB);
      }, 1000 * (i));
    }
  }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.startGenerateTeams();
      }
    }, 1000); // Decrease the countdown every second (1000 milliseconds)
  }
}
