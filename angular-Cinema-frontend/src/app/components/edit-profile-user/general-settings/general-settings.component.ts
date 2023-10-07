import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models/UserDto';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {


  constructor(private _userService: UserService, private _router: Router, private _common: CommonService) { }
  user: UserDto = new UserDto();
  errors: string[] = [];
  message = "";
  gouvernaurats: String[] = this._common.gouvernaurats;

  ngOnInit(): void {
    if (this._userService.authenticatedUser.id != undefined || this._userService.authenticatedUser.id != null)
      this._userService.getUserDataById(this._userService.authenticatedUser.id).subscribe(
        (data) => {
          this.user = data
        }
      )
  }

  update() {
    this._userService.update(this.user).subscribe(
      (data) => {
        this._userService.authenticatedUser = data;
        localStorage.setItem("LoggedUser", JSON.stringify(data));
        this.errors = [];
        this.message = "Données modifiés avec succés"
        this.ngOnInit();
      },
      error => {
        this.message = "";
        if (error == null) {
          this.errors.push(error.error.message);
        } else {
          this.errors = []
          this.errors = error.error.errors;
        }
      }
    );
  }

}
