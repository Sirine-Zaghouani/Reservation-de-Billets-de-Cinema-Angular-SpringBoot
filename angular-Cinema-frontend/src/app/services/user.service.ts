import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResponse } from '../models/AuthenticationResponse';
import { User } from '../models/User';
import { UserDto } from '../models/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  authenticatedUser = this.getAuthenticatedUser();
  isUserLoggedIn: boolean = this.getIsUserLoggedIn();




  baseUrl = environment.baseUrl;

  getAuthenticatedUser() {
    let user = localStorage.getItem("LoggedUser");
    if (user != null) {
      return JSON.parse(user);
    }
    return null;
  }

  getIsUserLoggedIn() {
    let user = localStorage.getItem("LoggedUser");
    if (user != null) {
      return true;
    }
    return false;
  }
  



  register(user: any) {
    return this._http.post(this.baseUrl + "register", user)
  }

  update(userData: UserDto) {
    return this._http.post<AuthenticationResponse>(this.baseUrl + "users/update-user-details", userData)
  }

  login(user: any): Observable<AuthenticationResponse> {
    return this._http.post(this.baseUrl + "login", user)
  }

  getUserDataById(id: any) {
    return this._http.get<UserDto>(this.baseUrl + `users/find-by-id/${id}`)
  }

  changePassword(passwordChange: any) {
    return this._http.post(this.baseUrl + "users/change-password", passwordChange);
  }

  findAll() {
    return this._http.get<UserDto[]>(this.baseUrl + "users/find-all");
  }

  delete(id: any) {
    return this._http.delete(this.baseUrl + `users/delete/${id}`);
  }

}
