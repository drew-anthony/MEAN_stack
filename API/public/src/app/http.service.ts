import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getPokemon();
  }
getPokemon(){
  let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  let ability1;
  let ability2;
  let sharedAbility;
  bulbasaur.subscribe(data => {
  console.log("Got our tasks!", data);
  ability1 = data['abilities'][0].ability.name;
  ability2 = data['abilities'][1].ability.name;
  console.log(ability1);
  console.log(ability2);
});
}
}