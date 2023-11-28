//Author: Kyle Hochdoerfer
//Title: base-layout.component.ts
//Date: 11/20/23
//Description: Typescript for base-layout component

//Import Component and oninit from angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

//Create and export the base-layout component
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //Define an assignment string variable
  assignment: string;

  //Declare a constructor
  constructor(private cookieService: CookieService, private router: Router) {
    //Set the value of assignment to the assignment name
    this.assignment = 'GPA Calculator'
   }

  ngOnInit(): void {
  }

  //Create a function for signing out
  signOut(){
    //Delete all session cookies and navigate to the sign-in page
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in'])
  }

}
