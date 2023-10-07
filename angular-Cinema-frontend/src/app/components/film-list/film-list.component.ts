import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmCategory } from 'src/app/models/film-category';
import { CategoryService } from 'src/app/services/category.service';
import { FilmService } from 'src/app/services/film.service';
import { FilmService1 } from 'src/app/services/film1.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit  {

  films : Film[] = [];
  currentCategoryId:number=1;
  searchMode:boolean=false;
  loading : boolean = true;
  
  constructor(private filmService : FilmService, private _film: FilmService1,
              private route: ActivatedRoute,private _userService: UserService){}

  authenticatedUser = this._userService.authenticatedUser;

  ngOnInit(){
    this.route.paramMap.subscribe(()=>{
      this.listFilms();
    });

    this._film.getAllFilms().subscribe(
      (data:  Film[]) => {
        this.loading = false;
        this.films = data;
      }
    )
  }

 

  listFilms() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode){
      this.handleListFilms();
    }
    else {
    this.handleListFilms();
    }

  }

  handleSearchFilms(){
     
    
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    //now search for the films using keywoed 
    this.filmService.searchFilms(theKeyword).subscribe(
      data => {
        this.films = data;
      }
    )

  }

  handleListFilms(){
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId){
      // get the "id" param string  convert string to a number using thbe "+" symbol
      this.currentCategoryId= +this.route.snapshot.paramMap.get('id')!;
    }
    else{
      //not category id available ... default to category id  1
      this.currentCategoryId= 1;
    }

    // now get the films for the given category id
    this.filmService.getFilmList(this.currentCategoryId).subscribe(
      data => {
        this.films = data;
      }
    )

  }

}
