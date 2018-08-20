import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Review } from './review';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
  getRestaurants(){
    return this._http.get('/restaurants');
 }
 showRestaurant(restaurant_id: number){
   return this._http.get(`/restaurants/${restaurant_id}`);
 }
 addRestaurant(newRestaurant: Restaurant){
   return this._http.post('/restaurants', newRestaurant);
 }
 editRestaurant(restaurant_id: number, newRestaurant: Restaurant){
   return this._http.put(`/restaurants/${restaurant_id}`, newRestaurant);
 }
 removeRestaurant(restaurant_id: number){
   return this._http.delete(`/restaurants/${restaurant_id}`)
 }
 addReview(restaurant_id: number, newComment: Review){
   console.log(newComment)
   return this._http.post(`/restaurants/${restaurant_id}`, newComment);
 }
}
