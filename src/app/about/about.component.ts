import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
/*isDisabled='true';*/
  name="Name of the organization appears here";
  //evilTitle="Template <script> alert('evil never sleep')</script> Syntax";
  //evilTitle2="Template <script> alert('evil never sleep')</script> Syntax";
  constructor() { }

  ngOnInit(): void {
  }
  updateName()
  {
    this.name="Birla Institute Of Technology & Science,Pilani";
  }
  convertDate()
  {
    const today=new Date()
    return today.toLocaleDateString();
  }
}
