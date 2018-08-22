import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Shelter } from '../shelter';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name: any;
  id: any;
  value = 0;
  shelters: Shelter;
  getShelter: Shelter;
  show: Shelter;

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
    this._httpService.showShelter(this.id).subscribe(shelters => {
      this.getShelter = shelters as Shelter;
      
      console.log(this.getShelter['data']);
    });
  }

  delShelter(shelter_id: string): void {
    console.log(shelter_id);
    this._httpService.remShelter(shelter_id).subscribe(shelter => this.ngOnInit());
  }
  addToLikes(num){
    this._httpService.addToLikes(1); 
    }

}