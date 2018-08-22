import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Resturant } from '../resturant';
import { Rate } from '../rate';

@Component({
  selector: 'app-edit-resturant',
  templateUrl: './edit-resturant.component.html',
  styleUrls: ['./edit-resturant.component.css']
})
export class EditResturantComponent implements OnInit {
  name: any;
  id: any;
  resturants: Resturant;
  getResturant: Resturant;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params['id'])
    });
    this._httpService.showResturant(this.id).subscribe(resturants => {
      this.getResturant = resturants as Resturant
      this.name = resturants['name'];
    });
  }

  modResturant(): void {
    this._httpService.editResturant(this.id, this.getResturant).subscribe(resturant => {
      this._router.navigate(['/']);
    });
  }
}
