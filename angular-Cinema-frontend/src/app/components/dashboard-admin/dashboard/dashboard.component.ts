import { Component, OnInit } from '@angular/core';
import { Praticien } from 'src/app/models/Praticien';
import { DoctorsService } from 'src/app/services/z/doctors.service';
import { PraticienService } from 'src/app/services/z/praticien.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _praticiens: PraticienService) { }

  praticiens: Praticien[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.findUnvalid();
  }

  findUnvalid() {
    this._praticiens.findUnvalid().subscribe(
      (data: Praticien[]) => {
        this.loading = false;
        this.praticiens = data
        console.log(this.praticiens)
      }
    )
  }

  validatePraticien(id: any) {
    this._praticiens.validatePraticien(id).subscribe(
      () => {
       
        this.findUnvalid();
      }
    )
  }

  delete(id: any) {
    this._praticiens.delete(id).subscribe(
      () => {
        this._praticiens.findAll().subscribe(
          (data) => {
            this.praticiens = data
          }
        )
      }
    )
  }

}
