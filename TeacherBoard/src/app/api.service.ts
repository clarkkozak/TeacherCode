import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = "http://teacherbot.conspire.host:3000/api/" // all caps to specifiy it is constant
  
  constructor(private http: HttpClient) {  }
  
   getNotes() {
    // return this.http.get(this.URL + "notes")  // Observable
    return fetch(this.URL + "notes")
  }   
}
