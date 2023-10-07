import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {

  constructor(private _userService: UserService, private _router: Router) { }

  canActivate() {
    if (this._userService.isUserLoggedIn == false) {
      this._router.navigate(['login'])
      return false;
    }
    if (this._userService.getAuthenticatedUser() == null) {
      this._router.navigate(['login'])
      return false;
    }
    return true
  }
}
