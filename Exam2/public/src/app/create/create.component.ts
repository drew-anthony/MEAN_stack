import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Shelter } from '../shelter';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  shelters: Shelter[];
  showShelter: Shelter;
  createShelter: Shelter = new Shelter();
  remShelter: Shelter;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._httpService.getShelters().subscribe(shelters => this.shelters = shelters as Shelter[]);
  }

  addShelter(): void {
    this._httpService.addShelters(this.createShelter).subscribe(resturant => {
      this._router.navigate(['/']);
    });
  }
}