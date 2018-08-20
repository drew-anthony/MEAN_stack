import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Restaurant } from '../restaurant';
import { Review } from '../review';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  // head = "Let's Eat"
  // newRestaurants: Restaurant[];
  // newComments: Review[];
  // showRestaurant: Restaurant
  // createRestaurant: Restaurant = new Restaurant();
  // createComment: Review = new Review();
  // removeRestaurant: Restaurant;

  ngOnInit(){
    // this._httpService.getRestaurants().subscribe(newRestaurants => this.newRestaurants = newRestaurants as Restaurant[]);
    // this._httpService.getRestaurants().subscribe(newComments => this.newComments = newComments as Review[]);
  }
}
//   addRestaurant(){
//     this._httpService.addRestaurant(this.createRestaurant).subscribe(newRestaurant => this.newRestaurants.push(newRestaurant as Restaurant))
//   }
//   getRestaurant(restaurant): void{
//     console.log(restaurant)
//     // this._httpService.showRestaurant(restaurant).subscribe(restaurant => this.showRestaurant = restaurant as Restaurant)
//     this.showRestaurant = restaurant;
//   }
//   clear(): void{
//     this.showRestaurant = undefined;
//   }
//   editRestaurant(restaurant_id: number, restaurant: Restaurant): void{
//     // this.editRestaurant = restaurant;
//     this._httpService.editRestaurant(restaurant_id, restaurant).subscribe(restaurant => this.ngOnInit());
//   }
//   deleteRestaurant(restaurant_id: number): void{
//     this._httpService.removeRestaurant(restaurant_id).subscribe(restaurant => this.ngOnInit());
//   }
//   addComment(restaurant_id: number): void{
//     console.log(restaurant_id);
//     this._httpService.addReview(restaurant_id, this.createComment).subscribe(newComment => this.newComments.push(newComment as Review))
//   }
// }