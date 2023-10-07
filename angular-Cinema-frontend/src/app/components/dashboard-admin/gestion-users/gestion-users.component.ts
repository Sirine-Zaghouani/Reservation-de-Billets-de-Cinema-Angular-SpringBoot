import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  constructor(private _user: UserService) { }
  
  users: User[] = [];
  loading: boolean = true;
  ngOnInit(): void {
    this._user.findAll().subscribe(
      (data: User[]) => {
        this.loading = false;
        this.users = data
      }
    )
  }

  delete(id: any) {
    this._user.delete(id).subscribe(
      () => {
        alert("Utilisateur supprimé avec succés");
        this._user.findAll().subscribe(
          (data) => {
            this.users = data
          }
        )
      }
    )
  }

}
