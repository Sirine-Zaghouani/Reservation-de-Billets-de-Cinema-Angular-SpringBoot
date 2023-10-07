import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Salle } from 'src/app/models/Salle';
import { Time } from 'src/app/models/Time';
import { Film } from 'src/app/models/film';
import { Projection } from 'src/app/models/projection';
import { FilmService } from 'src/app/services/film.service';
import { FilmService1 } from 'src/app/services/film1.service';
import { HoraireService } from 'src/app/services/horaire.service';
import { ProjectionService } from 'src/app/services/projection.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-gestion-projection',
  templateUrl: './gestion-projection.component.html',
  styleUrls: ['./gestion-projection.component.css']
})
export class GestionProjectionComponent implements OnInit {
  constructor(private _projection: ProjectionService, private _salle : SalleService , private _horaire: HoraireService , public _film: FilmService1) { }

  projection: Projection = new Projection;
  message: string = "";
  errors: any = [];
  projections: Projection[] = [];
  salles: Salle[] = [];
  horaires: Time[] = [];
  films: Film[] = [];
  selectedProjection !: Projection;
  loading : boolean = true;
  film: Film = new Film();
  salle: Salle = new Salle();
  time: Time = new Time();
  pro: Projection = new Projection();
  salleId = localStorage.getItem("selectedSalle");
  filmId = localStorage.getItem("selectedFilm");
  timeId = localStorage.getItem("selectedTime");



  ngOnInit(): void {

    this._projection.getAllProjections().subscribe(
      (data: Projection[]) => {
        this.loading = false;
        this.projections = data;
      }
    )
    
    this._salle.getAllSalles().subscribe(
      (data: Salle[]) => {
        this.loading = false;
        this.salles = data;
      }
    )
    this._horaire.getAllHoraire().subscribe(
      (data: Time[]) => {
        this.loading = false;
        this.horaires = data;
      }
    )
    this._film.getAllFilms().subscribe(
      (data: Film[]) => {
        this.loading = false;
        this.films = data;
      }
    )
    this._salle.getSalleDataById(this.salleId).subscribe(
      (data) => {
        this.salle = data;
        console.log("salle",data)
      }
    )
    this._film.getById(this.filmId).subscribe(
      (data) => {
        this.film = data;
        console.log("film",data)
      }
    )
    this._horaire.getById(this.timeId).subscribe(
      (data) => {
        this.time = data;
        console.log("time",data)
      }
    )
  }

  delete(id: any) {
    this._projection.delete(id).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }

  save(f: NgForm) {
    this.pro.dateProjection = this.projection.dateProjection;
    this.pro.film = this.film;
    this.pro.salle = this.salle;
    this.pro.time = this.time;
    console.log("new projection", this.pro)
    this._projection.save(this.pro).subscribe(
      () => {
        this.errors = [];
        this.message = "projection ajouté avec succés";
        
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
    this.projection = s;
  }

  clearForm(f: NgForm) {
    f.reset();
  }

}
