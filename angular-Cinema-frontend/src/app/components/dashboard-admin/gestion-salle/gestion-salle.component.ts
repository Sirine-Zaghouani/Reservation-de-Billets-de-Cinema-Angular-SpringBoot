import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Salle } from 'src/app/models/Salle';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-gestion-salle',
  templateUrl: './gestion-salle.component.html',
  styleUrls: ['./gestion-salle.component.css']
})
export class GestionSalleComponent implements OnInit {

  constructor(private _salle: SalleService) { }

  salle: Salle = new Salle;
  message: string = "";
  errors: any = [];
  salles: Salle[] = [];
  selectedSalle !: Salle;
  loading : boolean = true;
  salleId = localStorage.getItem("selectedSalle");


  ngOnInit(): void {

    this._salle.getAllSalles().subscribe(
      (data: Salle[]) => {
        this.loading = false;
        this.salles = data;
      }
    )

    this._salle.getSalleDataById(this.salleId).subscribe(
      (data) => {
        this.salle = data;
        console.log("medecin", data)
      }
    )
  }

  delete(id: any) {
    this._salle.delete(id).subscribe(
      () => {
        alert("Salle supprimé avec succés");
        this._salle.getAllSalles().subscribe(
          (data) => {
            this.salles = data
          }
        )
      }
    )
  }

  save(f: NgForm) {
    this._salle.save(this.salle).subscribe(
      () => {
        this.errors = [];
        this.message = "salle ajouté avec succés";
        f.reset();
        this.ngOnInit();
      }, error => {
        this.errors = [];
        this.message = '';
        if (error.error.errors == null) {
          this.errors.push(error.error.message);
        } else {
          this.errors = []
          this.errors = error.error.errors;
        }
      }
    )
  }

  edit(s: any) {
    this.salle = s;
  }

  clearForm(f: NgForm) {
    f.reset();
  }


}
