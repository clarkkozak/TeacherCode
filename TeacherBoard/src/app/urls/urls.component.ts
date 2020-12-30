import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class UrlsComponent implements OnInit {

  urls = [
    { "content" : "https://discordapp.com/developers/applications/me" },
    { "content" : "https://discordapp.com/oauth2/authorize?client_id=461222973928505344&scope=bot" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
