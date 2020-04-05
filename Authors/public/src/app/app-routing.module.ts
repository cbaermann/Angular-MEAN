import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component'
import { EditComponent } from './edit/edit.component';
import { AuthorsComponent } from './authors/authors.component';



const routes: Routes = [
  {path: 'new',component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', component: AuthorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }