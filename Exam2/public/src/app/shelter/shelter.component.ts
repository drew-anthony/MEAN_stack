import { Component, OnInit, Input } from '@angular/core';
import { Shelter } from '../shelter';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {
  @Input() getShelter: any;
  sum=0;
  avg=0;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  shelters: Shelter;
  showShelter: Shelter;
  createShelter: Shelter = new Shelter();
  remShelter: Shelter;

  ngOnInit() {
  this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
  });
  this._httpService.getShelters().subscribe(shelters => this.shelters = shelters as Shelter);
  }

  delShelter(shelter_id: string): void {
    
    this._httpService.remShelter(shelter_id).subscribe(shelter => this.ngOnInit());
  }

}
