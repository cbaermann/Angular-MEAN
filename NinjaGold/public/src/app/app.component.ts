import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  gold: number;
  num: number;
  neg: number;
  activity: Array<string>;

  ngOnInit(){
    this.gold = 0
    this.num = 0;
    this.neg = 0;
    this.activity = [];


  }
  job(){
    this.gold += Math.floor((Math.random() * 7) + 3);

  }
  dragonTamer(){
    this.gold += Math.floor((Math.random() * 10) +5);
  }
  petTherapist(){
    this.gold += Math.floor((Math.random() *20) +15);
  }
  casino(){
    this.num = Math.floor((Math.random() * 50));
    this.neg = Math.floor((Math.random() * 2));
    if(this.neg == 0){
      this.neg = -1;
    }
    this.num *= this.neg;
    this.gold += this.num;
  }

}
