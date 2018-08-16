import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Cake } from './cake';
import { Rate } from './comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  head = 'Rate My Cakes';  
  newCakes: Cake[];
  newComments: Rate[];
  showCake: Cake;
  createCake: Cake = new Cake();
  createComment: Rate = new Rate();
  removeCake: Cake;
  sum = 0;
  avg = 0;

  ngOnInit(){
    this._httpService.getCakes().subscribe(newCakes => this.newCakes = newCakes as Cake[]);
    this._httpService.getCakes().subscribe(newComments => this.newComments = newComments as Rate[]);
  }
  addCake(){
    this._httpService.addCake(this.createCake).subscribe(newCake => this.newCakes.push(newCake as Cake))
  }
  getCake(cake): void{
    console.log(cake)
    // this._httpService.showCake(cake).subscribe(cake => this.showCake = cake as Cake)
    this.showCake = cake;
    for(var i of cake.comments){
      if(i['rate']){
        this.sum += i['rate'];
      }
    }
    this.avg = this.sum/cake.comments.length
    console.log(this.avg)
  }
  clear(): void{
    this.showCake = undefined;
  }
  editCake(cake_id: number, cake: Cake): void{
    // this.editCake = cake;
    this._httpService.editCake(cake_id, cake).subscribe(cake => this.ngOnInit());
  }
  deleteCake(cake_id: number): void{
    this._httpService.removeCake(cake_id).subscribe(cake => this.ngOnInit());
  }
  addComment(cake_id: number): void{
    console.log(cake_id);
    this._httpService.addComments(cake_id, this.createComment).subscribe(newComment => this.newComments.push(newComment as Rate))
  }
}
