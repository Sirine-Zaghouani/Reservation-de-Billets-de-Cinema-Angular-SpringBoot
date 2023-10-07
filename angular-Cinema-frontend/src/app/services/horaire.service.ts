import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Time } from '../models/Time';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  baseUrl = environment.baseUrl;
  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
    //requestHeader = requestHeader.append("Authorization","Bearer "+ sessionStorage.getItem('JwtToken'));
    requestHeader = requestHeader.append("Access-Control-Allow-Origin", "*");
    return requestHeader;
  }
  constructor(private _http: HttpClient) { }

  getAllHoraire(): Observable<Time[]> {
    return this._http.get<Time[]>(this.baseUrl + "time/find-all");
  }

  delete(id: any) {
    return this._http.delete(this.baseUrl + `time/${id}`);
  }

  save(time: Time) {
    return this._http.post<Time>(this.baseUrl + "time/add", time);

  }
  getById(id: any) {
    return this._http.get<Time>(this.baseUrl+`time/find-by-id/${id}`)

  }
}
