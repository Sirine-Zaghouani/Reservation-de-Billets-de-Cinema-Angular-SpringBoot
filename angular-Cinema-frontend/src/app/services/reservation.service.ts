import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private _http: HttpClient) { }

  baseUrl = environment.baseUrl;

  findAll() {
    return this._http.get<Reservation[]>(this.baseUrl + "reservation/find-all");
  }

  delete(id: any) {
    return this._http.delete(this.baseUrl + `reservation/${id}`);
  }
  findByUserId(id: any) {
    return this._http.get<Reservation[]>(this.baseUrl + `reservation/find-by-user-id/${id}`);
  }
  
  annulerRes(id:any){
    return this._http.delete(this.baseUrl + `reservation/${id}`);
  }

  save(reservation: any) {
    return this._http.post(this.baseUrl + "reservation/add", reservation)
  }
}
