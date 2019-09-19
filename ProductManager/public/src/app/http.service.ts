import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getProducts();
  }
  getProducts(){
    return this._http.get('/api/products')
  }
  oneProduct(id){
    return this._http.get(`/api/products/${id}`)
  }
  createProduct(newProduct){
    return this._http.post('/api/products', newProduct)
  }
  editProduct(editProduct){
    return this._http.put(`/api/products/${editProduct._id}`, editProduct);
  }

  deleteProduct(product){
    return this._http.delete(`/api/products/${product._id}`, product)
  }
}
