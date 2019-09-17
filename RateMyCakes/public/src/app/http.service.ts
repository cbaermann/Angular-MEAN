import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getCakes();
  }
  getCakes(){
    return this._http.get('/cakes')
  }
  createCake(newCake){
    return this._http.post('/cakes', newCake);
  }

  addRating(comment, cakeId){
    return this._http.post(`/cakes/${cakeId}/rating`, comment)
  }

  getCake(cake){
    return this._http.get(`/cakes/${cake._id}`)
  }

  deleteCake(cake){
    return this._http.delete(`/cakes/${cake._id}`, cake)
  }
}
