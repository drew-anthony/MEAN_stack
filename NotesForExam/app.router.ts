import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from "./home/game/game.component";
import { AddComponent } from "./home/add/add.component";

const APP_ROUTES: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'letsplay', component: GameComponent },
  { path: 'addnew', component: AddComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
