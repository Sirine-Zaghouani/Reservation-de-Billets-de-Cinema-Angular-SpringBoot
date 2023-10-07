import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
    private _rest: UserService) { }
  user: AuthenticationRequest = new AuthenticationRequest();
  errors: string[] = [];
  message = "";
  clicked = false;
  retrieved = false;

  ngOnInit(): void {
  
  }

  login() {
    this.clicked = true;
    this.retrieved = false;
    this._rest.login(this.user).subscribe(
      (data: AuthenticationResponse) => {
        this._rest.authenticatedUser = data;
        this.retrieved = true;
        this._rest.isUserLoggedIn = true;
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
