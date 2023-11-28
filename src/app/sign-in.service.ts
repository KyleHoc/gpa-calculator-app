//Author: Kyle Hochdoerfer
//Title: sign-in.service.ts
//Date: 11/21/23
//Description: Typescript for sign-in service

//Import Injectable from Angular
import { Injectable } from '@angular/core';

//Create and export the sign-in service
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  //Create an array of number values for holding student IDs
  studentIds: Array<number>

  //Declare a constructor to initialize the service
  constructor() {
    //Populate the student ID array with set values
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]
   }

   //Create a function for log-in validation
   validate(studentId: number){
    //Return true/false depending on whether or not the provided parameter ID is present in the student ID array
    return this.studentIds.some(id => id === studentId)
   }
}
