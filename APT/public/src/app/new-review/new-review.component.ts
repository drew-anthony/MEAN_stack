import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Rate } from '../rate';
import { Resturant } from '../resturant';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  name: any;
  id: any;
  getResturant: Resturant;
  createResturant: Resturant = new Resturant();
  rates: Rate[];
  createRating: Rate = new Rate();
  remResturant: Resturant;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(params['id'])
  
    this._httpService.showResturant(this.id).subscribe(resturants => {
      this.getResturant = resturants as Resturant
      this.name = resturants['name'];
      console.log(this.name);
    });
  });
  }


  addRating(id: string): void {
    console.log(id);
    this._httpService.addRating(this.id, this.createRating).subscribe(rate => {
    this.rates.push(rate as Rate)});
    this._router.navigate([`/resturant/${id}`])
  }

  delResturant(resturant_id: string): void {
    
    this._httpService.remResturant(resturant_id).subscribe(resturant => this.ngOnInit());
  }

}
