import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  notes

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.notes = this.api.getNotes()
    // this.notes.subscribe( (notes) => {console.log()} )
    this.api.getNotes()
     .then(console.log)
     .catch(console.error)
  }

}
