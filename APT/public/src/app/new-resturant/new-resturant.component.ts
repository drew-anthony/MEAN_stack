import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Resturant } from '../resturant';
import { Rate } from '../rate';



@Component({
  selector: 'app-new-resturant',
  templateUrl: './new-resturant.component.html',
  styleUrls: ['./new-resturant.component.css']
})
export class NewResturantComponent implements OnInit {

  resturants: Resturant[];
  showResturant: Resturant;
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
    this._httpService.getResturants().subscribe(resturants => this.resturants = resturants as Resturant[]);
    this._httpService.getResturants().subscribe(rates => this.rates = rates as Rate[]);
  }

  addResturant(): void {
    this._httpService.addResturant(this.createResturant).subscribe(resturant => {
      this._router.navigate(['/']);
    });
  }
}
