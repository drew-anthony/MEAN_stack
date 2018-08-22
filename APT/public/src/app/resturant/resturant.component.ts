import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from '../resturant';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Rate } from '../rate';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {
  @Input() getResturant: any;
  sum=0;
  avg=0;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  resturants: Resturant;
  showResturant: Resturant;
  createResturant: Resturant = new Resturant();
  remResturant: Resturant;

  ngOnInit() {
  this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
  });
  this._httpService.getResturants().subscribe(resturants => this.resturants = resturants as Resturant);
  }

  delResturant(resturant_id: string): void {
    
    this._httpService.remResturant(resturant_id).subscribe(resturant => this.ngOnInit());
  }

}
