import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from 'src/app/notes/notes.component'
import { UrlsComponent } from 'src/app/urls/urls.component'
import { CodeComponent } from 'src/app/code/code.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "notes", component: NotesComponent},
  {path: "urls", component: UrlsComponent},
  {path: "code", component: CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
