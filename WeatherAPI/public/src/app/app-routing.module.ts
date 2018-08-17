import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DCComponent } from './dc/dc.component';
import { TulsaComponent } from './tulsa/tulsa.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {path: 'seattle', component: SeattleComponent},
  {path: 'san-jose', component: SanJoseComponent},
  {path: 'burbank', component: BurbankComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'dc', component: DCComponent},
  {path: 'tulsa', component: TulsaComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: '', pathMatch: 'full', redirectTo: '/tulsa'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
