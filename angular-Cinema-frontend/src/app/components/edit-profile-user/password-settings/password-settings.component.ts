import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password-settings',
  templateUrl: './password-settings.component.html',
  styleUrls: ['./password-settings.component.css']
})
export class PasswordSettingsComponent implements OnInit {

  constructor(private _userService: UserService) { }
  newPassword: string = "";
  confirmNewPassword: string = "";
  actualPassword: string = "";
  errors: string[] = [];
  message: string = "";

  ngOnInit(): void {

  }

  save() {
    let passwordChange = { userId: this._userService.authenticatedUser.id, actualPassword: this.actualPassword, newPassword: this.newPassword, confirmNewPassword: this.confirmNewPassword };
    console.log(passwordChange);
    this._userService.changePassword(passwordChange).subscribe(
      () => {
        this.errors = [];
        this.message = "Données modifiés avec succés"
      }, error => {
        this.errors = [];
        this.message = "";
        if (error.error.errors == null) {
          this.errors.push(error.error.message);
        } else {
          this.errors = []
          this.errors = error.error.errors;
        }
      }
    )
  }


}
