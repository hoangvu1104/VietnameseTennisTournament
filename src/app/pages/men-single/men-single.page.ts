import { Component, OnInit } from '@angular/core';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { StaticVariable } from 'src/shared/staticVariable';

@Component({
  selector: 'app-men-single',
  templateUrl: './men-single.page.html',
  styleUrls: ['./men-single.page.scss'],
})
export class MenSinglePage implements OnInit {
  imagePath = StaticVariable.ImagesPath + 'BannerTennis.png';
  countdown = 30;
  teamsToShowAA: string[] = []; // Teams to show for Group AA
  teamsToShowAB: string[] = []; // Teams to show for Group AB
  teamsToShowBA: string[] = []; // Teams to show for Group BA
  teamsToShowBB: string[] = []; // Teams to show for Group BB
  MenPlayersLevelA: any[] = [];
  MenPlayersLevelB: any[] = [];
  GroupAA: string[] = [];
  GroupAB: string[] = [];
  GroupBA: string[] = [];
  GroupBB: string[] = [];
  MenPlayersA1: any[] = [
    {
      playerName: 'Tony Ha', level: 4 //1
    },
    {
      playerName: 'Quyền Huỳnh', level: 4 //2
    }
  ];
  MenPlayersA2: any[] = [
    {
      playerName: 'Tiến Nguyễn', level: 3.5 //3
    },
    {
      playerName: 'Daniel Đặng', level: 3.5 //4
    },
    {
      playerName: 'Tùng Trương', level: 3.5 //5
    },
    {
      playerName: 'Gael Duong', level: 3.5 //6
    }];
  MenPlayersB1: any[] = [
    {
      playerName: 'Cảnh Mai', level: 3 //7
    },
    {
      playerName: 'Quang Trần', level: 3 //8
    },
    {
      playerName: 'Đức Nguyễn', level: 3 //9
    },
    {
      playerName: 'Long Su', level: 3 //10
    }
  ]; MenPlayersB2: any[] = [
    {
      playerName: 'Khoa Nguyễn', level: 2.5 //11
    },
    {
      playerName: 'Hưng Tôn', level: 2.5 //12
    }
  ];
  constructor(public commonFunction: CommonFunctions) {

    for (let i = 0; i < 2; i++) {
      this.MenPlayersLevelA.push(this.MenPlayersA1[i]);
    }
    for (let i = 0; i < 4; i++) {
      this.MenPlayersLevelA.push(this.MenPlayersA2[i]);
      this.MenPlayersLevelB.push(this.MenPlayersB1[i]);
    }
    for (let i = 0; i < 2; i++) {
      this.MenPlayersLevelB.push(this.MenPlayersB2[i]);
    }
  }

  startGenerateTeams() {
    this.commonFunction.shuffleArray(this.MenPlayersA1);
    this.commonFunction.shuffleArray(this.MenPlayersA2);
    this.commonFunction.shuffleArray(this.MenPlayersB1);
    this.commonFunction.shuffleArray(this.MenPlayersB2);
    console.log('this.MenPlayersLevelA.length', this.MenPlayersLevelA.length);
    //GroupAA
    this.GroupAA.push(this.MenPlayersA1[0].playerName + ' (' + this.MenPlayersA1[0].level + ')');
    this.GroupAA.push(this.MenPlayersA2[0].playerName + ' (' + this.MenPlayersA2[0].level + ')');
    this.GroupAA.push(this.MenPlayersA2[1].playerName + ' (' + this.MenPlayersA2[1].level + ')');
    //GroupAB
    this.GroupAB.push(this.MenPlayersA1[1].playerName + ' (' + this.MenPlayersA1[1].level + ')');
    this.GroupAB.push(this.MenPlayersA2[2].playerName + ' (' + this.MenPlayersA2[2].level + ')');
    this.GroupAB.push(this.MenPlayersA2[3].playerName + ' (' + this.MenPlayersA2[3].level + ')');
    //GroupBA
    this.GroupBA.push(this.MenPlayersB1[0].playerName + ' (' + this.MenPlayersB1[0].level + ')');
    this.GroupBA.push(this.MenPlayersB1[1].playerName + ' (' + this.MenPlayersB1[1].level + ')');
    this.GroupBA.push(this.MenPlayersB2[0].playerName + ' (' + this.MenPlayersB2[0].level + ')');
    //GroupBB
    this.GroupBB.push(this.MenPlayersB1[2].playerName + ' (' + this.MenPlayersB1[2].level + ')');
    this.GroupBB.push(this.MenPlayersB1[3].playerName + ' (' + this.MenPlayersB1[3].level + ')');
    this.GroupBB.push(this.MenPlayersB2[1].playerName + ' (' + this.MenPlayersB2[1].level + ')');

    console.log('startGenerateTeams 2');
    this.teamsToShowAA = []; // Teams to show for Group AA
    this.teamsToShowAB = []; // Teams to show for Group AB
    this.teamsToShowBA = []; // Teams to show for Group BA
    this.teamsToShowBB = []; // Teams to show for Group BB
    this.updateTeamsToShow();
  }

  updateTeamsToShow() {
    for (let i = 0; i < 3; i++) {
      let playerAA = this.GroupAA[i];
      let playerAB = this.GroupAB[i];
      let playerBA = this.GroupBA[i];
      let playerBB = this.GroupBB[i];
      setTimeout(() => {
        this.teamsToShowAA.push(playerAA);
        this.teamsToShowAB.push(playerAB);
        this.teamsToShowBA.push(playerBA);
        this.teamsToShowBB.push(playerBB);
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
