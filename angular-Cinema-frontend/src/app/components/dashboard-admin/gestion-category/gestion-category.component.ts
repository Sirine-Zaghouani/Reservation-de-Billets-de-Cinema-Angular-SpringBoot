import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmCategory } from 'src/app/models/film-category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-gestion-category',
  templateUrl: './gestion-category.component.html',
  styleUrls: ['./gestion-category.component.css']
})
export class GestionCategoryComponent implements OnInit {

  constructor(private _category: CategoryService) { }

  category: FilmCategory = new FilmCategory;
  message: string = "";
  errors: any = [];
  categories: FilmCategory[] = [];
  selectedCategory !: FilmCategory;
  loading : boolean = true;

  ngOnInit(): void {

    this._category.getAllCategory().subscribe(
      (data: FilmCategory[]) => {
        this.loading = false;
        this.categories = data;
      }
    )
  }

  delete(id: any) {
    this._category.delete(id).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }

  save(f: NgForm) {
    this._category.save(this.category).subscribe(
      () => {
        this.errors = [];
        this.message = "Catégorie ajouté avec succés";
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
    this.category = s;
  }

  clearForm(f: NgForm) {
    f.reset();
  }


}
