import { Component, OnInit, ApplicationInitStatus } from '@angular/core';
import { Router } from '@angular/router'; // A service for routing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
                // public means we can access it in the HTML file. (private makes code smaller and is more frequent)
                // logic in .ts and invoking functions in .html
  constructor(public router: Router) { // Dependency Injection. the router will be a server based on the Router.
    
  }

  
  
}