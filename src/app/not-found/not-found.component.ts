//Author: Kyle Hochdoerfer
//Title: base-layout.component.ts
//Date: 11/20/23
//Description: Typescript for not-found component

//Import component and Oninit from angular
import { Component, OnInit } from '@angular/core';

//Create and export the not-found component
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  //Leave the component constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
