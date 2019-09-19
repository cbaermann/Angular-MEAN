import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =[];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("Got our products!", data);
      this.products = data['product']
    })
  }
  onDelete(product){
    let observable = this._httpService.deleteProduct(product);
    observable.subscribe(data => {
      console.log("Deleted this product", data)
      this.getProductsFromService();
    })
  }
}