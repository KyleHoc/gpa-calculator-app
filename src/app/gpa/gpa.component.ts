//Author: Kyle Hochdoerfer
//Title: grade-summary.component.ts
//Date: 11/21/23
//Description: Typescript for gpa component

//Import Component, Oninit, and input from angular
import { Component, OnInit, Input } from '@angular/core';

//Create and export the gpa component
@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  //Create an input variable to hold the gpaTotal
  @Input() gpaTotal: number

  constructor() { }

  ngOnInit(): void {
  }

}
