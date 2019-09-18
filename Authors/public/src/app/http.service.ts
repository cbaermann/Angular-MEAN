import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getAuthors();
  }
  getAuthors(){
    return this._http.get('/authors')
  }
  oneAuthor(id){
    return this._http.get(`/authors/${id}`)
  }

  createAuthor(newAuthor){
    return this._http.post('/authors', newAuthor);
  }
  editAuthor(editAuthor){
    return this._http.put(`/authors/${editAuthor._id}`, editAuthor);
  }


  deleteAuthor(author){
    return this._http.delete(`/authors/${author._id}`, author)
  }
}
