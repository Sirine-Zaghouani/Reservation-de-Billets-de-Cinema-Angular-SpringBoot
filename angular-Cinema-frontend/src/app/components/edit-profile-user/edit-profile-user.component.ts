import { Component, OnInit } from '@angular/core';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile-user',
  templateUrl: './edit-profile-user.component.html',
  styleUrls: ['./edit-profile-user.component.css']
})
export class EditProfileUserComponent implements OnInit {

  constructor(private _userService: UserService) { }

  user!: AuthenticationResponse;
  ngOnInit(): void {
    this.user = this._userService.getAuthenticatedUser();
  }
}
