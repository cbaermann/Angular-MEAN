import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router} from '@angular/router'



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.editProduct = {}
    this._route.params.subscribe((params: Params)=> {
      this._httpService.oneProduct(params["id"]).subscribe((product)=> {
        this.editProduct = product;
      })
    })
  }
  goHome(){
    console.log("hello");
    this._router.navigate(["/products"])
  }
  onEdit(){
    console.log("ajksldf;alsfdj;l");
    let observable = this._httpService.editProduct(this.editProduct);
    console.log("hit this cl")
    observable.subscribe(data => {
      console.log("Updated our product!", data)
      
    })
    this.goHome();
  }
  onDelete(product){
    let observable = this._httpService.deleteProduct(product);
    observable.subscribe(data => {
      console.log("Deleted this product", data)
    })
    this.goHome();
  }

}
