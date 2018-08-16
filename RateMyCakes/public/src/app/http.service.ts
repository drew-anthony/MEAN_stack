import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cake } from './cake';
import { Rate } from './comment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
  getCakes(){
    return this._http.get('/cakes');
 }
//  showCake(cake_id: number){
//    return this._http.get(`/cakes/${cake_id}`);
//  }
 addCake(newCake: Cake){
   return this._http.post('/cakes', newCake);
 }
 editCake(cake_id: number, newCake: Cake){
   return this._http.put(`/cakes/${cake_id}`, newCake);
 }
 removeCake(cake_id: number){
   return this._http.delete(`/cakes/${cake_id}`)
 }
 addComments(cake_id: number, newComment: Rate){
   console.log(newComment)
   return this._http.post(`/cakes/${cake_id}`, newComment);
 }
}
