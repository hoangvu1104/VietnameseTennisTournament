"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3267],{3267:(T,u,s)=>{s.r(u),s.d(u,{MenDoublesInfoPageModule:()=>b});var i=s(6895),p=s(433),r=s(8058),c=s(9430),e=s(1571),h=s(5054),g=s(1085);function m(n,a){if(1&n&&(e.TgZ(0,"tr",7)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA()()),2&n){const t=a.$implicit,o=a.index;e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.playerName),e.xp6(2),e.Oqu(t.level)}}function d(n,a){if(1&n&&(e.TgZ(0,"ion-card")(1,"ion-card-header",2)(2,"ion-card-title")(3,"ion-grid")(4,"ion-row")(5,"ion-col",3)(6,"div",4),e._uU(7,"Danh s\xe1ch tham gia \u0111\xf4i nam"),e.qZA()()()()()(),e.TgZ(8,"ion-card-content")(9,"ion-grid")(10,"ion-row")(11,"ion-col",3)(12,"ion-list")(13,"table",5)(14,"tbody"),e.YNc(15,m,7,3,"tr",6),e.qZA()()()()()()()()),2&n){const t=e.oxw();e.xp6(15),e.Q6J("ngForOf",t.MenPlayers)}}function f(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",8)(1,"span",9),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.startCountdown())}),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(2),e.hij("Chu\u1ea9n b\u1ecb b\u1ed1c th\u0103m trong ",t.countdown," gi\xe2y")}}function y(n,a){if(1&n&&(e.TgZ(0,"tr",7)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&n){const t=a.$implicit,o=a.index;e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t)}}function M(n,a){if(1&n&&(e.TgZ(0,"tr",7)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&n){const t=a.$implicit,o=a.index;e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t)}}function P(n,a){if(1&n&&(e.TgZ(0,"ion-card")(1,"ion-card-header",2)(2,"ion-card-title")(3,"ion-grid")(4,"ion-row")(5,"ion-col",3)(6,"div",4),e._uU(7,"K\u1ebft qu\u1ea3 b\u1ed1c th\u0103m chia nh\xf3m \u0111\xf4i nam"),e.qZA()()()()()(),e.TgZ(8,"ion-card-content")(9,"ion-grid")(10,"ion-row")(11,"ion-col",10)(12,"ion-list")(13,"table",5)(14,"thead")(15,"tr")(16,"th",11),e._uU(17,"B\u1ea3ng A"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,y,5,2,"tr",6),e.qZA()()()(),e.TgZ(20,"ion-col",10)(21,"ion-list")(22,"table",5)(23,"thead")(24,"tr")(25,"th",11),e._uU(26,"B\u1ea3ng B"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,M,5,2,"tr",6),e.qZA()()()()()(),e._UZ(29,"img",12),e.qZA()()),2&n){const t=e.oxw();e.xp6(19),e.Q6J("ngForOf",t.teamsToShowGroupA),e.xp6(9),e.Q6J("ngForOf",t.teamsToShowGroupB)}}const A=[{path:"",component:(()=>{class n{constructor(t){this.commonFunction=t,this.countdown=10,this.teamsToShowGroupA=[],this.teamsToShowGroupB=[],this.GroupA=[],this.GroupB=[],this.MenPlayers=[],this.MenPlayersA1=[{playerName:"Nguy\xean L\xea - Minh L\xea",level:4},{playerName:"V\u1ef9 L\xea - Th\u1ee5y L\xea",level:3.5},{playerName:"H\u1ea3i V\xf5 - Hi\u1ebfu Phan",level:3.5},{playerName:"Nghi\u1ec7p Tr\u01b0\u1eddng - Th\xf4ng Ph\u1ea1m",level:3.5}],this.MenPlayersA2=[{playerName:"Phong Nguy\u1ec5n - H\u01b0ng T\xf4n",level:2.5},{playerName:"Du\u1eabn Nguy\u1ec5n - V\u0169 Ph\u1ea1m",level:2.5}];for(let o=0;o<4;o++)this.MenPlayers.push(this.MenPlayersA1[o]);for(let o=0;o<2;o++)this.MenPlayers.push(this.MenPlayersA2[o])}startGenerateTeams(){this.commonFunction.shuffleArray(this.MenPlayersA1),this.commonFunction.shuffleArray(this.MenPlayersA2),this.GroupA.push(this.MenPlayersA1[0].playerName+" ("+this.MenPlayersA1[0].level+")"),this.GroupA.push(this.MenPlayersA1[1].playerName+" ("+this.MenPlayersA1[1].level+")"),this.GroupA.push(this.MenPlayersA2[0].playerName+" ("+this.MenPlayersA2[0].level+")"),this.GroupB.push(this.MenPlayersA1[2].playerName+" ("+this.MenPlayersA1[2].level+")"),this.GroupB.push(this.MenPlayersA1[3].playerName+" ("+this.MenPlayersA1[3].level+")"),this.GroupB.push(this.MenPlayersA2[1].playerName+" ("+this.MenPlayersA2[1].level+")"),console.log("startGenerateTeams 2"),this.teamsToShowGroupA=[],this.teamsToShowGroupB=[],this.updateTeamsToShow()}updateTeamsToShow(){for(let t=0;t<3;t++){let o=this.GroupA[t],l=this.GroupB[t];setTimeout(()=>{this.teamsToShowGroupA.push(o),this.teamsToShowGroupB.push(l)},1e3*t)}}ngOnInit(){this.startCountdown()}startCountdown(){const t=setInterval(()=>{this.countdown--,this.countdown<=0&&(clearInterval(t),this.startGenerateTeams())},1e3)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-men-doubles-info"]],decls:5,vars:3,consts:[[4,"ngIf"],["class","happy-tournament",4,"ngIf"],[2,"margin-top","-25px","margin-bottom","-10px"],["size","12"],[1,"team-name"],[1,"team-members"],["style","background-color: lightgreen;",4,"ngFor","ngForOf"],[2,"background-color","lightgreen"],[1,"happy-tournament"],[1,"btn",3,"click"],["size","6"],["colspan","3"],["src","/VietnameseTennisTournament/assets/images/BannerTennis.png"]],template:function(t,o){1&t&&(e._UZ(0,"app-toolbar-header"),e.TgZ(1,"ion-content"),e.YNc(2,d,16,1,"ion-card",0),e.YNc(3,f,3,1,"div",1),e.YNc(4,P,30,2,"ion-card",0),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",0!=o.countdown),e.xp6(1),e.Q6J("ngIf",0!=o.countdown),e.xp6(1),e.Q6J("ngIf",0==o.countdown))},dependencies:[i.sg,i.O5,r.PM,r.FN,r.Zi,r.Dq,r.wI,r.W2,r.jY,r.q_,r.Nd,g.H],styles:[".team-members[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .team-members[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px;text-align:center;border-bottom:1px solid #ddd}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f2f2f2}.team-name[_ngcontent-%COMP%]{font-size:30px;text-align:center;margin-top:20px}.happy-tournament[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-left:10px;margin-right:10px}.happy-tournament-text[_ngcontent-%COMP%]{font-size:18px;color:#8a2be2;padding:10px 5px;border-radius:8px;background-color:#f2f2f2;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-top:15px}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;background-color:#0ff;padding:20px;border-radius:50px;font-size:large;font-weight:600;color:#8b008b;margin-top:20px;box-shadow:2px 2px 2px 1px rgba(0,0,0,.2)}"]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(A),c.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.ez,p.u5,r.Pc,x]}),n})()}}]);