import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { CreateComponent } from './create/create.component';
import { ReviewComponent } from './review/review.component';
import { UpdateComponent } from './update/update.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: RestaurantComponent},
  {path: 'new', component: CreateComponent},
  {path: ':id', component: ReviewComponent},
  {path: ':id/edit', component: UpdateComponent},
  {path: ':id/review', component: NewReviewComponent},
  {path: '', pathMatch: 'full', redirectTo: '/restaurants'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
