import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrls: ['./gestion-reservation.component.css']
})
export class GestionReservationComponent implements OnInit {

  constructor(private _reservation: ReservationService) { }
  reservations: Reservation[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this._reservation.findAll().subscribe(
      (data: Reservation[]) => {
        this.loading = false;
        this.reservations = data
      }
    )
  }

  delete(id: any) {
    this._reservation.delete(id).subscribe(
      () => {
        alert("Reservation supprimé avec succés");
        this._reservation.findAll().subscribe(
          (data) => {
            this.reservations = data
          }
        )
      }
    )
  }

}
