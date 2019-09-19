import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
newProduct: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newProduct = {title: "", price: ""}
  }
  goHome(){
    console.log("Sending to product list");
    this._router.navigate(["/products"])
  }
  onSubmit(){
    let observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data => {
      console.log("Got our new product", data)
      this.newProduct ={name: "", price: ""}
    })
    this.goHome();
  }

}
