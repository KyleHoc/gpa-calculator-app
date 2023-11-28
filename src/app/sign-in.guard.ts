//Author: Kyle Hochdoerfer
//Title: sign-in.guard.ts
//Date: 11/27/23
//Description: Typescript for sign-in guard

//Import the needed service, router features, and observable
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

//Create and export the sign-in guard
@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  //Declare a constructor that uses the router and cookie service
  constructor(private router: Router, private cookieService: CookieService){

  }

  //Create a canActivate guard that brings the user to the sign-in page
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Create a variable for the active user
      const sessionUser = this.cookieService.get('session_user')

      //If the user is signed in:
      if (sessionUser){
        //Return true
        return true
      } else {
        //Otherwise, navigate to the sign-in page and return false
        this.router.navigate(['/session/sign-in'])
        return false
      }
  }

}
