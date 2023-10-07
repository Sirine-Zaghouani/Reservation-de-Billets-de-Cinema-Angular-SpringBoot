import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';
import { FilmCategory } from '../models/film-category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService1 {

  baseUrl = environment.baseUrl;
  
  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
    //requestHeader = requestHeader.append("Authorization","Bearer "+ sessionStorage.getItem('JwtToken'));
    requestHeader = requestHeader.append("Access-Control-Allow-Origin", "*");
    return requestHeader;
  }

  constructor(private _http: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this._http.get<Film[]>(this.baseUrl + "films1/find-all");
  }

  getAllCategory(): Observable<FilmCategory[]> {
    return this._http.get<FilmCategory[]>(this.baseUrl + "category1/find-all");
  }

  delete(id: number) {
    return this._http.delete(this.baseUrl + `films1/${id}`);
  }

  save(film: Film) {
    return this._http.post<Film>(this.baseUrl + "films1/add", film);

  }

  getById(id: any) {
    return this._http.get<Film>(this.baseUrl+`films1/find-by-id/${id}`)

  }
  getFilmByCategory(id: number): Observable<Film[]> {
    return this._http.get<Film[]>(this.baseUrl + `films1/find-by-category/${id}`);
  }
  getFilmByName(name: String): Observable<Film[]> {
    return this._http.get<Film[]>(this.baseUrl + `films1/search-by-name/${name}`);
  }

  
}
