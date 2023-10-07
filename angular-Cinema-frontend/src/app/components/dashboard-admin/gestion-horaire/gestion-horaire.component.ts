import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Time } from 'src/app/models/Time';
import { HoraireService } from 'src/app/services/horaire.service';

@Component({
  selector: 'app-gestion-horaire',
  templateUrl: './gestion-horaire.component.html',
  styleUrls: ['./gestion-horaire.component.css']
})
export class GestionHoraireComponent implements OnInit {

  constructor(private _horaire: HoraireService) { }

   horaire: Time = new Time;
  message: string = "";
  errors: any = [];
  horaires: Time[] = [];
  selectedHoraire !: Time;
  loading : boolean = true;

  ngOnInit(): void {
     this._horaire.getAllHoraire().subscribe(
      (data: Time[]) => {
        this.loading = false;
        this.horaires = data;
      }
    )
  }

  delete(id: any) {
    this._horaire.delete(id).subscribe(
      () => {
         alert("Horaire supprimé avec succés");
        this._horaire.getAllHoraire().subscribe(
          (data) => {
            this.horaires = data
          }
        )
      }
    )
  }

  save(f: NgForm) {
    this._horaire.save(this.horaire).subscribe(
      () => {
        this.errors = [];
        this.message = "horaire ajouté avec succés";
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
  
  edit(h: any) {
    this.horaire = h;
  }

  clearForm(f: NgForm) {
    f.reset();
  }


}
