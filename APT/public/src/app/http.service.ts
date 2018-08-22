import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resturant } from './resturant';
import { Rate } from './rate';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient) {
  }
  getResturants() {
    return this._http.get('/resturants');
  }

  showResturant(resturant_id: string){
    return this._http.get(`/resturants/${resturant_id}`);
  }

  addResturant(resturant: Resturant){
    return this._http.post('/resturants', resturant);
  }

  editResturant(resturant_id: string, resturant: Resturant){
    return this._http.put(`/resturants/${resturant_id}`, resturant);
  }

  remResturant(resturant_id: string){
    return this._http.delete(`/resturants/${resturant_id}`);
  }

  addRating(resturant_id: string, rate: Rate){
    console.log(rate);
    return this._http.post(`/resturants/${resturant_id}`, rate);
  }
}
