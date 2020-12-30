import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  code = [
    {"content" : "const https = require('https') const bl = require('bl') function fetch(url) { return new Promise((resolve, reject) => { https.get(url, res => { res.pipe(bl((err, data) => { if (err) { reject(err) } resolve(data.toString()) })) res.on('error', reject) }).on('error', reject) }) } const urls = process.argv.slice(2, 5) const promises = urls.map(url => fetch(url)) Promise.all(promises) .then(results => { results.forEach(console.log) }) !note const https = require('https') const bl = require('bl') function fetch(url) { return new Promise((resolve, reject) => { https.get(url, res => { res.pipe(bl((err, data) => { if (err) { reject(err) } resolve(data.toString()) })) res.on('error', reject) }).on('error', reject) }) } const urls = process.argv.slice(2, 5) const promises = urls.map(url => fetch(url)) Promise.all(promises) .then(results => { results.forEach(console.log) })"},
    {"content": "class PoopService { poop(excitement = 2) { for (let i = 0; i < excitement; i++) { console.log('poop') } } } class Dog { constructor(pooper, excitement = 2) { this.pooper = pooper this.excitement = excitement } bark() { for (let i = 0; i < this.excitement; i++) { console.log('woof') } this.pooper.poop(this.excitement) } } const pooper = new PoopService() const ruff = new Dog(pooper, 10) const rover = new Dog(pooper, 5) const fluffy = new Dog(pooper) ruff.bark() rover.bark() fluffy.bark() ruff.pooper.poop()"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
