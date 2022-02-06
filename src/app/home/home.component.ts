import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<div>welcome to <span [innerHTML]=\'title\'></span>!!!</div>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string="BITS PILANI";
  constructor() { }

  ngOnInit(): void {
  }

}
