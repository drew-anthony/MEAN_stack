import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shelter } from './shelter';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient) {
  }
  getShelters() {
    return this._http.get('/shelters');
  }

  showShelter(shelter_id: string){
    return this._http.get(`/shelters/${shelter_id}`);
  }

  addShelters(shelter: Shelter){
    return this._http.post('/shelters', shelter);
  }

  editShelter(shelter_id: string, shelter: Shelter){
    return this._http.put(`/shelters/${shelter_id}`, shelter);
  }

  remShelter(shelter_id: string){
    return this._http.delete(`/shelters/${shelter_id}`);
  }
  addToLikes(like){
    console.log('test')
  }
}