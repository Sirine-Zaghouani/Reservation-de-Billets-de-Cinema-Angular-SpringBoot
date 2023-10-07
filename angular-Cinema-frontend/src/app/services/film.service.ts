import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import { FilmCategory } from '../models/film-category';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService{
  
  private baseUrl = 'http://localhost:8081/api/films';
  private categoryUrl = 'http://localhost:8081/api/film-category';

  constructor( private httpClient: HttpClient) { }
  getFilm(theFilmId: number): Observable<Film> {

    // need to build URL based on product id
    const filmUrl = `${this.baseUrl}/${theFilmId}`;

    return this.httpClient.get<Film>(filmUrl);
  }

  getFilmList(theCategoryId:number):Observable<Film[]>{
    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getFilms(searchUrl);

  
  }

  searchFilms(theKeyword: string):Observable<Film[]> {
    // need to build URL based on the keyword 
    const searchUrl = `${this.baseUrl}/search/findByNameContainig?name=${theKeyword}`;

    return this.getFilms(searchUrl);
  }

  private getFilms(searchUrl: string): Observable<Film[]> {
    return this.httpClient.get<GetResponseFilms>(searchUrl).pipe(
      map(Response => Response._embedded.films)
    );
  }

  getFilmCategories(): Observable<FilmCategory[]>{
    return this.httpClient.get<GetResponseFilmCategory>(this.categoryUrl).pipe(
      map(Response=>Response._embedded.filmCategory)
    );
  }
}

interface GetResponseFilms{
  _embedded: {
    films : Film[];
    }
}

interface GetResponseFilmCategory{
  _embedded: {
    filmCategory: FilmCategory[];
    }
}