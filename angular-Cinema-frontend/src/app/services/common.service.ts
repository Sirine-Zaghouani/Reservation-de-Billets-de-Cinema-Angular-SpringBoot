import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GeoCode } from '../models/GeoCode.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  gouvernaurats = [
    "Jendouba",
    "Tunis",
    "Béja",
    "Ariana",
    "Tozeur",
    "Zaghouan",
    "Bizerte",
    "Tataouine",
    "Gafsa",
    "Tozeur",
    "kébeli",
    "Kef",
    "Siliana",
    "Kairouan",
    "Ben Arous",
    "Gasserine",
    "Sidi bouzid",
    "Sfax",
    "Sousse",
    "Monastir",
    "Mahdia",
    "Nabeul"]
  ACCESS_TOKEN = "pk.fa9ca9b54c6301f93856a3d3177b2fab";
  /*
    getGeoCode(address: string): Observable<any> {
      return this._http.get<any>(`https://us1.locationiq.com/v1/search?key=${this.ACCESS_TOKEN}&q=${address}&format=json`)
        .pipe(
         map(results => results.map(result => ({
           lon: result.lon,
           lat: result.lat
         })))) 
    }
  */
  getGeoCode(address: string): Observable<GeoCode[]> {
    return this._http.get<GeoCode[]>(`https://us1.locationiq.com/v1/search?key=${this.ACCESS_TOKEN}&q=${address}&format=json`);
  }
}





