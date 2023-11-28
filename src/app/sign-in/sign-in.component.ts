//Author: Kyle Hochdoerfer
//Title: sign-in.component.ts
//Date: 11/27/23
//Description: Typescript for sign-in component

//Import the needed angular features, services, and form building features
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

//Create and export the sign-in component
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //Create variables for the sign-in form and error message
  signinForm: FormGroup;
  errorMessage: string;

  //Declare a constructor that accepts the router, cookie service, form builder, and sign-in service
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {}

  //Set the default state of the form
  ngOnInit(): void {
    //Set the student id field to only accept numeric values and make it required
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  //Create a get function to return the form controls
  get form() { return this.signinForm.controls; }

  //Create a function for sign-in submission
  onSubmit(){
    //Create variables for formValues and student ID
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId)

    //If the sign-in service successfully validates the provided student id:
    if(this.signinService.validate(studentId)){
      //Set session cookies for the user
      this.cookieService.set('session_user', studentId.toString(), 1)

      //Navigate to the default route
      this.router.navigate(['/'])
    } else {
      //Otherwise, display an error message
      this.errorMessage = "The student ID you have entered was invalid. Please try again"
    }
  }

}
