import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmService1 } from 'src/app/services/film1.service';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  films : Film[] = [];
  loading : boolean = true;

  constructor(private _film: FilmService1, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleSearchFilm();
    })
  }
  handleSearchFilm() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this._film.getFilmByName(theKeyword).subscribe(
      (data: Film[]) => {
        this.loading = false;
        this.films= data;
      }
    )
  }

}
