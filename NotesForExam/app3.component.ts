import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string // User generated identification name
  
  constructor(private _homeService: HomeService, private _router: Router) { 
  }

  ngOnInit() {
    this._homeService.checkStatus()
      .then((data) => {this.username = data.loggedIn})
      .catch(err => console.log(err))
  }
  logout () {
    this._homeService.logout()
      .then(() => {window.location.reload(); console.log('Logged Out')
      })
      .catch((err) => {console.log(err)})
  }
}









import { Component, OnInit } from '@angular/core';
import { NewQuestion } from '../newquestion'
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newQuestion: NewQuestion

  constructor(private _homeService: HomeService, private _router: Router) { 
    this.newQuestion = new NewQuestion
  }

  ngOnInit() {
  }
  submitNewQuestion () {
    this._homeService.postNewQuestion(this.newQuestion)
      .then(() => { this._router.navigate(['/'])})
      .catch((err) => {console.log(err)})
  }
  cancelQuestion() {
     this._router.navigate(['/'])
  }
}














import { Component, OnInit } from '@angular/core';
import { Question } from "../question";
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  quiz: Array<Question>
  answers
  score: number

  constructor(private _homeService:  HomeService,  private _router: Router) {
    this.score = 0
    this.quiz = [new Question, new Question, new Question]
    this.answers = []
    this._homeService.getQuiz()
      .then((data) => {this.quiz = data})
      .catch((err) => {console.log(err)})
  }
  ngOnInit() {}
  submitGame() {
    for (var x =0; x < 3; x++){
      if(this.answers[x] === this.quiz[x].answer) {
        this.score++
      }
    }
    this._homeService.postGame(this.score)
      .then(() =>  this._router.navigate(['/']))
      .catch(err => console.log(err))
  }
  cancelGame() {
    this._router.navigate(['/'])
  }
}














import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pregame',
  templateUrl: './pregame.component.html',
  styleUrls: ['./pregame.component.css']
})
export class PregameComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  startGame() {
    this._router.navigate(['/letsplay'])
  }

}










import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Game } from "../games";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  games

  constructor(private _homeService: HomeService) { 
    this.games = [new Game]
    this.getGames()
  }

  ngOnInit() {
  }
  getGames () {
    this._homeService.getGames()
      .then(data => this.games = data)
      .catch(err => console.log(err))
  }
}









import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";
import "rxjs"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  username

  constructor(private  _homeService: HomeService, private _router: Router) { }

  ngOnInit() {
  }
  login () {
    this._homeService.login(this.username)
      .then(() => {window.location.reload()})
      .catch((err) => {console.log(err)})
  }
  
    

}















