import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Film } from 'src/app/models/film';
import { FilmCategory } from 'src/app/models/film-category';
import { CategoryService } from 'src/app/services/category.service';
import { FilmService1 } from 'src/app/services/film1.service';

@Component({
  selector: 'app-gestion-film',
  templateUrl: './gestion-film.component.html',
  styleUrls: ['./gestion-film.component.css']
})
export class GestionFilmComponent implements OnInit {

  constructor(private _film: FilmService1, private _category: CategoryService ) { }

  film: Film = new Film;
  categories: FilmCategory[] = [];
  message: string = "";
  errors: any = [];
  films: Film[] = [];
  selectedFilm !: Film;
  loading : boolean = true;

  ngOnInit(): void {

    this._film.getAllFilms().subscribe(
      (data:  Film[]) => {
        this.loading = false;
        this.films = data;
      }
    )
    
    this._category.getAllCategory().subscribe(
      (data: FilmCategory[]) => {
        this.loading = false;
        this.categories = data;
      }
    )
  }

  delete(id: any) {
    this._film.delete(id).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }

  save(f: NgForm) {
    this._film.save(this.film).subscribe(
      () => {
        this.errors = [];
        this.message = "Film ajouté avec succés";
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
    this.film = s;
  }

  clearForm(f: NgForm) {
    f.reset();
  }

  onUploadFile(event: any) {
    let selectedFile: File = event.target.files[0];
    console.log('selectedFile', selectedFile);
   
    /* const imageFormData = new FormData();
    imageFormData.append('image', selectedFile, selectedFile.name); */

    //console.log("uploaded image", imageFormData)
  }

  }

