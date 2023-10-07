import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { User } from '../../models/User';
import { CommonService } from '../../services/common.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private _userService: UserService,
    private _common: CommonService,
    private _router: Router) { }


  user: User = new User();
  errors: string[] = [];
  message = "";
  clicked = false;
  retrieved = false;
  ngOnInit(): void {
    
  }

  register() {
    
    this.user.role = "user";
    console.log(this.user)
    this._userService.register(this.user).subscribe(
      () => {
        const authRequest: AuthenticationRequest = {
          username: this.user.username,
          password: this.user.password
        }
        this.login(authRequest)
      },
      error => {
        this.errors = [];
        this.message = '';
        if (error.error.errors == null) {
          this.errors.push(error.error.message);
        } else {
          this.errors = []
          this.errors = error.error.errors;
        }
      }
    );
  }

  login(authRequest: AuthenticationRequest) {
    this.clicked = true;
    this.retrieved = false;
    this._userService.login(authRequest).subscribe(
      (data: AuthenticationResponse) => {
        this._userService.authenticatedUser = data;
        this.retrieved = true;
        this._userService.isUserLoggedIn = true;
        localStorage.setItem("LoggedUser", JSON.stringify(data));
        this._router.navigate(['']);
      },
      error => {
        this.errors = [];
        this.retrieved = true;
        if (error.error.errors === null) {
          this.errors.push(error.error.message);
        } else {
          this.errors = error.error.errors;
        }
      }
    )
  }

}







