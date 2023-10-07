import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mes-reservations',
  templateUrl: './mes-reservations.component.html',
  styleUrls: ['./mes-reservations.component.css']
})
export class MesReservationsComponent implements OnInit {

  constructor(private _reservation: ReservationService, private _user: UserService) { }
  res: Reservation[] = [];

  ngOnInit(): void {
    this._reservation.findByUserId(this._user.authenticatedUser.id).subscribe(
      (data) => {
        this.res = data;
      }
    )
  }

  annulerRes(id:any){
    this._reservation.annulerRes(id).subscribe(
      ()=>{
        alert("Réservation annuler avec succés !")
        this.ngOnInit();
      }
    )
  }

}
