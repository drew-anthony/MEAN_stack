import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { NewQuestion } from './newquestion'
import 'rxjs'

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class HomeService {

  constructor(private _http: Http) { }

  // Call to server to enter user into session
  login (username) {
    console.log('homeService login: ', username)
    return this._http
      .post('/login', {username: username}, OPTIONS)
      .toPromise()
  }
  // Call to server to clear session and 
  logout () {
    console.log('Logout----')
    return this._http
      .get('/logout')
      .toPromise()
  }
  checkStatus () {
    return this._http
      .get('/checkStatus')
      .map(data => data.json())
      .toPromise()
  }
  postNewQuestion (question: NewQuestion) {
    console.log(question)
    return this._http
      .post('/addNewQuestion', question, OPTIONS)
      .toPromise()
  }
  getQuiz() {
    return this._http
      .get('/makeQuiz')
      .map(data => data.json())
      .toPromise()
  }
  postGame(pts: number) {
    let data = {score: pts}
    return this._http
    .post('/addGame', data, OPTIONS)
    .toPromise()
  }
  getGames () {
    return this._http
      .get('/getGames')
      .map(data => data.json())
      .toPromise()
  }
}