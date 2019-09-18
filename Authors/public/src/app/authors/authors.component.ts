import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors=[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("Got our authors", data)
      this.authors = data['author'];
    });
  }

  onDelete(author){
    let observable = this._httpService.deleteAuthor(author);
    observable.subscribe(data => {
      console.log("Deleted an author", data)
      this.getAuthorsFromService();
    })
  }
}
