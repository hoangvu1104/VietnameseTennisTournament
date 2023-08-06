import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men-doubles-info',
  templateUrl: './men-doubles-info.page.html',
  styleUrls: ['./men-doubles-info.page.scss'],
})
export class MenDoublesInfoPage implements OnInit {

  countdown = 10;
  teamsToShowA: string[] = []; // Teams to show for Group A
  teamsToShowB: string[] = []; // Teams to show for Group B  
  MenPlayersLevelA: any[] = [];
  MenPlayersLevelB: any[] = [];
  LevelA: string[] = [];
  LevelB: string[] = [];
  MenPlayers: any[] = [
    {
      playerName: 'Vinh Nguyen', level: 4 //1
    }, 
    {
      playerName: 'Chuan Nguyen', level: 3.5 //2
    }, 
    {
      playerName: 'Vu Pham', level: 2.5 //3
    }, 
    {
      playerName: 'Quyen Nguyen', level: 4 //4
    }, 
    {
      playerName: 'Chau Ngoc', level: 4 //5
    }, 
    {
      playerName: 'Cuong Nguyen', level: 4 //6
    }, 
    {
      playerName: 'Vy Nguyen', level: 3.5 //7
    }, 
    {
      playerName: 'Huy Vo', level: 3 //8
    },{
      playerName: 'Dung Tien', level: 4 //9
    },
    {
      playerName: 'Gael Duong', level: 3.5 //10
    },
    {
      playerName: 'Viet Hung', level: 2.5 //11
    },
    {
      playerName: 'Hung Khuong', level: 2.5 //12
    },
    {
      playerName: 'Su Long', level: 4 //13
    },
    {
      playerName: 'Phong Nguyen', level: 2.5 //14
    },
    {
      playerName: 'Nguyen Le', level: 3.5 //15
    },
    {
      playerName: 'Khanh Dang', level: 3 //16
    },
  ].sort((a, b) => {
    return b.level - a.level;
  });
  constructor() {
   
    for (let i = 0; i < 8; i++) {       
      this.MenPlayersLevelA.push(this.MenPlayers[i]);
    }   
    for (let i = 8; i < 16; i++) {      
      this.MenPlayersLevelB.push(this.MenPlayers[i]);
    }
    // console.log('MenPlayersLevelA');
    // this.MenPlayersLevelA.forEach(p =>{
    //    console.log(p.playerName + ' - ' + p.level);
    //  });    
    //  console.log('MenPlayersLevelB');
    //  this.MenPlayersLevelB.forEach(p =>{
    //   console.log(p.playerName + ' - ' + p.level);
    // });    
  }

  startGenerateTeams()
  {       
    this.shuffleArray(this.MenPlayersLevelA);
    this.shuffleArray(this.MenPlayersLevelB);  
    console.log('this.MenPlayersLevelA.length', this.MenPlayersLevelA.length);
    for (let i = 0; i < 4; i++) {
      this.LevelA.push(this.MenPlayersLevelA[i].playerName + ' (' + this.MenPlayersLevelA[i].level + ')' + ' - ' + 
      this.MenPlayersLevelA[i+4].playerName + ' (' + this.MenPlayersLevelA[i+4].level + ')');
    }
    console.log('startGenerateTeams 1');
    for (let i = 0; i < 4; i++) {
      this.LevelB.push(this.MenPlayersLevelB[i].playerName + ' (' + this.MenPlayersLevelB[i].level + ')' + ' - ' + 
      this.MenPlayersLevelB[i+4].playerName + ' (' + this.MenPlayersLevelB[i+4].level + ')');
    }
    console.log('startGenerateTeams 2');
    this.teamsToShowA = []; // Teams to show for Group A
    this.teamsToShowB = []; // Teams to show for Group B
    this.updateTeamsToShow(); 
  }

  updateTeamsToShow() {
    if (this.teamsToShowA.length < this.LevelA.length) {
      this.teamsToShowA.push(this.LevelA[this.teamsToShowA.length]);
    }
    if (this.teamsToShowB.length < this.LevelB.length) {
      this.teamsToShowB.push(this.LevelB[this.teamsToShowB.length]);
    }
    if (
      this.teamsToShowA.length < this.LevelA.length ||
      this.teamsToShowB.length < this.LevelB.length
    ) {
      setTimeout(() => {
        this.updateTeamsToShow();
      }, 1000);
    }
  }

  ngOnInit() {
    this.startCountdown();
  }

  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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
