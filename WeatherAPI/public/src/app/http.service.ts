import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getTulsa(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4553433&APPID=4a078e2dd55304d1e5ba7c9d156cd404").toPromise()
  }
  getSeattle(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=5809844&APPID=4a078e2dd55304d1e5ba7c9d156cd404").toPromise()
  }
  getSanjose(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=5393021&APPID=4a078e2dd55304d1e5ba7c9d156cd404").toPromise()
  }
  getBurbank(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=5331835&APPID=4a078e2dd55304d1e5ba7c9d156cd404").toPromise()
  }
  getDallas(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4684888&APPID=4a078e2dd55304d1e5ba7c9d156cd404").toPromise()
  }
  getDC(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4366164&APPID=4a078e2dd55304d1e5ba7c9d156cd404").toPromise()
  }
  getChicago(){
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4887398&APPID=4a078e2dd55304d1e5ba7c9d156cd404").toPromise()
  }
}




// 4a078e2dd55304d1e5ba7c9d156cd404


// Tulsa = http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4553433&APPID=4a078e2dd55304d1e5ba7c9d156cd404
// Seattle = http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=5809844&APPID=4a078e2dd55304d1e5ba7c9d156cd404
// San Jose = http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=5393021&APPID=4a078e2dd55304d1e5ba7c9d156cd404
// Burbank = http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=5331835&APPID=4a078e2dd55304d1e5ba7c9d156cd404
// Dallas = http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4684888&APPID=4a078e2dd55304d1e5ba7c9d156cd404
// DC = http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4366164&APPID=4a078e2dd55304d1e5ba7c9d156cd404
// Chicago = http://api.openweathermap.org/data/2.5/forecast?&units=imperial&id=4887398&APPID=4a078e2dd55304d1e5ba7c9d156cd404