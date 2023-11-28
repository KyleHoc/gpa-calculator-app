//Author: Kyle Hochdoerfer
//Title: auth-layout.component.ts
//Date: 11/20/23
//Description: Typescript for auth-layout component

//Import Component and Oninit from angular
import { Component, OnInit } from '@angular/core';

//Create and export the auth-layout component
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  //Leave the component constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
