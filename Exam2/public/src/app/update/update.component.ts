import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Shelter } from '../shelter';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  name: any;
  id: any;
  shelters: Shelter;
  getShelter: Shelter;

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
      this.name = shelters['name']     
      console.log(this.getShelter['data']);
    });
  }
  modShelter(): void {
    this._httpService.editShelter(this.id, this.getShelter).subscribe(shelter => {
      console.log(this.getShelter)
      this._router.navigate(['/shelter', this.id]);
    });
  }
}