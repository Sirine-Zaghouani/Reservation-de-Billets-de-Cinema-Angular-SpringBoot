import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationResponse } from '../models/AuthenticationResponse';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _userService: UserService, private _router: Router) { }

  canActivate() {
    let authUser: AuthenticationResponse = this._userService.getAuthenticatedUser()

    if (this._userService.isUserLoggedIn == false) {
      this._router.navigate(['login'])
      return false;
    }
    if (authUser != null && authUser.role == "admin") {
      return true;
    }
    this._router.navigate(['login'])
    return false

  }
  
}
