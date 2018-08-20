import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from "app/home/home.service";
import { routing } from "app/app.router";
import { ScoreboardComponent } from './home/scoreboard/scoreboard.component';
import { GameComponent } from './home/game/game.component';
import { UserComponent } from './home/user/user.component';
import { PregameComponent } from './home/pregame/pregame.component';
import { AddComponent } from './home/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoreboardComponent,
    GameComponent,
    UserComponent,
    PregameComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }