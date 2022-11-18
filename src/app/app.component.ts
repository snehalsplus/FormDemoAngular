import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateDriven';
  
  isAccept=true;
  RegisteredUser(studDetails:NgForm):void
  {
    // var firstname= studDetails.controls['firstName'].value;
    // var lastname= studDetails.controls['lastName'].value;
    // var email= studDetails.controls['email'].value;
     console.log(studDetails.value);
  }

  Branches:any[]=[
    {Id:1,Name:"Computer"},
    {Id:2,Name:"IT"},
    {Id:3,Name:"Mechanical"}
  ]
}
