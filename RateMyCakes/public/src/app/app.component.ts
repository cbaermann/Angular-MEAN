import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes =[];
  newCake: any;
  newRating: any;
  chosenCake: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newCake = {baker: "", image: ""}
    this.getCakesFromService();
    this.newRating = {comment: "", stars: 5}
  }
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got our cakes!",data)
      this.cakes = data['cake'];
    });
  }

  onSubmit(){
    let observable = this._httpService.createCake(this.newCake);
    observable.subscribe(data => {
      console.log("Got data from post", data);
      this.newCake = {baker: "", image: ""};
    })
    this.getCakesFromService();
  }

  createRating(cakeId){
    let observable = this._httpService.addRating(this.newRating, cakeId);
    observable.subscribe(data => {
      this.newRating = {comment: "", stars: 5};
    })
  }

  showCake(cake){
    this._httpService.getCake(cake).subscribe((cake)=>{
        this.chosenCake = cake;
    });
}


  onDelete(cake){
    let observable = this._httpService.deleteCake(cake);
    observable.subscribe(data => {
      console.log("Deleted our cake", cake);
      this.getCakesFromService();
    })
  }
}
