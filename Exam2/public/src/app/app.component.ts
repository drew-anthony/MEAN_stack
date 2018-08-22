import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Shelter } from './shelter';
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

  head = "Pet Shelter";
  shelters: Shelter[];
  showShelter: Shelter;
  createShelter: Shelter = new Shelter();
  remShelter: Shelter;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
  });
    this._httpService.getShelters().subscribe(shelters => this.shelters = shelters as Shelter[]);
  }

  getShelter(shelter): void {
    this.showShelter = shelter;
    console.log(shelter);
  }

  clear(): void {
    this.showShelter = undefined;
  }

  addShelter(): void {
    this._httpService.addShelters(this.createShelter).subscribe(shelter => this.shelters.push(shelter as Shelter));
  }

  modShelter(shelter_id: string, shelter: Shelter): void {
    
    this._httpService.editShelter(shelter_id, shelter).subscribe(shelter => this.ngOnInit());
  }

  delShelter(shelter_id: string): void {
    
    this._httpService.remShelter(shelter_id).subscribe(shelter => this.ngOnInit());
  }
}