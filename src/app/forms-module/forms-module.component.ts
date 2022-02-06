import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-forms-module',
  templateUrl: './forms-module.component.html',
  styleUrls: ['./forms-module.component.css']
})
export class FormsModuleComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  RegisterStudent(studentForm: NgForm): void {
   
    var first_name=studentForm.controls['firstName'].value;

    var last_name=studentForm.controls['lastName'].value;

    var email=studentForm.controls['email'].value;



    //console.log(first_name);

    //console.log(last_name);

    //console.log(email);


   
    console.log(studentForm.value);
    console.log(studentForm.valid);
    console.log(studentForm.touched);
    }

   

}


