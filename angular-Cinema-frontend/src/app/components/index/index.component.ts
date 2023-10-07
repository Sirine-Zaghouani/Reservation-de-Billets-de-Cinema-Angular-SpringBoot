import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorsService } from 'src/app/services/z/doctors.service';
import { UserService } from 'src/app/services/user.service';
import { __rest } from 'tslib';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _userService: UserService) { }

  isUserLoggedIn: boolean = this._userService.isUserLoggedIn;


  ngOnInit(): void {

    /* console.log("authenticated user", this._userService.authenticatedUser) */
  }
}
