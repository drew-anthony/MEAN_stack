import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from '../resturant';
import { Rate } from '../rate';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-resturant-reviews',
  templateUrl: './resturant-reviews.component.html',
  styleUrls: ['./resturant-reviews.component.css']
})
export class ResturantReviewsComponent implements OnInit {
  getResturant: any;
  id: any;
  rate: any;
  sum=0;
  avg=0;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params.id;
    });
 

  this._httpService.showResturant(this.id).subscribe(getResturant => {
    this.getResturant = getResturant as Resturant[];
    this.rate = getResturant['rates'];
    console.log(this.rate);
//       for(var i of this.getResturant['rates'][0]){
//     if(i['rating']){
//     this.sum += i['rating']; console.log(i['rating']);
//   }
// }
// this.avg = this.sum / this.getResturant['rates'].length
  console.log(this.getResturant.rates);
  });

  }

}
