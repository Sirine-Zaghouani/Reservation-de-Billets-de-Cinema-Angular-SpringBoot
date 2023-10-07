import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projection } from '../models/projection';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  baseUrl = environment.baseUrl;

  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
    //requestHeader = requestHeader.append("Authorization","Bearer "+ sessionStorage.getItem('JwtToken'));
    requestHeader = requestHeader.append("Access-Control-Allow-Origin", "*");
    return requestHeader;
  }

  constructor(private _http: HttpClient) { }

  getAllProjections(): Observable<Projection[]> {
    return this._http.get<Projection[]>(this.baseUrl + "projection/find-all");
  }

  getAllByFilm(film: number): Observable<Projection[]> {
    return this._http.get<Projection[]>(this.baseUrl + `projection/find-by-film/${film}`);
  }

  delete(id: number) {
    return this._http.delete(this.baseUrl + `projection/${id}`);
  }

  save(projection: Projection) {
    return this._http.post<Projection>(this.baseUrl + "projection/add", projection);

  }
}
