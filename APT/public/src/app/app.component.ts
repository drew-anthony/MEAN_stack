import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Resturant } from './resturant';
import { Rate } from './rate';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ){}

  head = "Let's Eat!";
  resturants: Resturant[];
  showResturant: Resturant;
  createResturant: Resturant = new Resturant();
  rates: Rate[];
  createRating: Rate = new Rate();
  remResturant: Resturant;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
  });
    this._httpService.getResturants().subscribe(resturants => this.resturants = resturants as Resturant[]);
    this._httpService.getResturants().subscribe(rates => this.rates = rates as Rate[]);
  }

  getResturant(resturant): void {
    this.showResturant = resturant;
    console.log(resturant);
    // this._httpService.showCake(cake).subscribe(cake => this.showCake = cake as Cake);
  }

  clear(): void {
    this.showResturant = undefined;
  }

  addResturant(): void {
    this._httpService.addResturant(this.createResturant).subscribe(resturant => this.resturants.push(resturant as Resturant));
  }

  modResturant(resturant_id: string, resturant: Resturant): void {
    
    this._httpService.editResturant(resturant_id, resturant).subscribe(resturant => this.ngOnInit());
  }

  delResturant(resturant_id: string): void {
    
    this._httpService.remResturant(resturant_id).subscribe(resturant => this.ngOnInit());
  }

  addRating(resturant_id: string): void {
    console.log(resturant_id);
    this._httpService.addRating(resturant_id, this.createRating).subscribe(rate => this.rates.push(rate as Rate));
  }
}
