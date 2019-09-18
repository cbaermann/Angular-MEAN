import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.editAuthor = {}
    this._route.params.subscribe((params: Params)=> {
      this._httpService.oneAuthor(params["id"]).subscribe((author)=> {
        this.editAuthor = author;
      })
    })
  }
  goHome(){
    console.log("hello");
    this._router.navigate(["/"])
  }

  onEdit(){
    console.log("ajksldf;alsfdj;l");
    let observable = this._httpService.editAuthor(this.editAuthor);
    console.log("hit this cl")
    observable.subscribe(data => {
      console.log("Updated our author!", data)
      
    })
    this.goHome();
  }

}
