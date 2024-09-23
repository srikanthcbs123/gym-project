import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class UserAuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("currentUser")) {
      // logged in so return true
      return true;
    } else {
      // not logged in so redirect to login page
      this.router.navigate(["/Login"]);
      return false;
    }
  }
}
