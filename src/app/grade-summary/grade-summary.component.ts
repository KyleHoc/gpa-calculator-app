//Author: Kyle Hochdoerfer
//Title: grade-summary.component.ts
//Date: 11/21/23
//Description: Typescript for grade summary component

//Import Component, Oninit, and input from angular
import { Component, OnInit, Input } from '@angular/core';

//Create and export the grade summary component
@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  //Create input variables for grade and course
  @Input() grade: string;
	@Input() course: string

  //Leave the constructor blank
  constructor() { }

  ngOnInit(): void {
  }

}
