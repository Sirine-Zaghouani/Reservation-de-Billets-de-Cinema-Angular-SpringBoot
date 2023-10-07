import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FilmCategory } from '../models/film-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  baseUrl = environment.baseUrl;

  
  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
    //requestHeader = requestHeader.append("Authorization","Bearer "+ sessionStorage.getItem('JwtToken'));
    requestHeader = requestHeader.append("Access-Control-Allow-Origin", "*");
    return requestHeader;
  }

  constructor(private _http: HttpClient) { }
  getAllCategory(): Observable<FilmCategory[]> {
    return this._http.get<FilmCategory[]>(this.baseUrl + "category1/find-all");
  }

  delete(id: number) {
    return this._http.delete(this.baseUrl + `category1/${id}`);
  }

  save(category: FilmCategory) {
    return this._http.post<FilmCategory>(this.baseUrl + "category1/add", category);

  }

}
