import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() showCake: any;
  cakeRating: any;
  constructor() { }

  ngOnInit() {
    console.log(this.showCake);
    let sum = 0;
    for(let rating of this.showCake.ratings){
      sum += rating.stars
    }
    this.cakeRating = sum / this.showCake.ratings
  }

}
