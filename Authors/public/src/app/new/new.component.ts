import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }
  goHome(){
    console.log("hello");
    this._router.navigate(["/"])
  }

  onSubmit(){
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log("Got our data form post back", data);
      this.newAuthor = {name: ""}
    })
    this.goHome();
  }


}
