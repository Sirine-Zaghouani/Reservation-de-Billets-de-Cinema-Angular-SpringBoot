import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { ActivatedRoute } from '@angular/router';
import { FilmService1 } from 'src/app/services/film1.service';

@Component({
  selector: 'app-film-category',
  templateUrl: './film-category.component.html',
  styleUrls: ['./film-category.component.css']
})
export class FilmCategoryComponent implements OnInit {

  films : Film[] = [];
  loading : boolean = true;

  constructor(private _film: FilmService1, private route: ActivatedRoute) { }
  ngOnInit(): void{
    this.route.paramMap.subscribe(()=>{
      this.handleFilmCategory();
    })
    
  }
  handleFilmCategory() {
    const theCtegoryId: number = +this.route.snapshot.paramMap.get('id')!;

    this._film.getFilmByCategory(theCtegoryId).subscribe(
      (data:  Film[]) => {
        this.loading = false;
        this.films = data;
      }
    )
  }


}
