import { ResturantComponent } from './resturant/resturant.component';
import { ResturantReviewsComponent } from './resturant-reviews/resturant-reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { NewResturantComponent } from './new-resturant/new-resturant.component';
import { EditResturantComponent } from './edit-resturant/edit-resturant.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ResturantComponent },
  { path: 'new', component: NewResturantComponent },
  { path: 'resturant/:id', component: ResturantReviewsComponent},
  { path: 'newreview/:id', component: NewReviewComponent },
  
  { path: 'edit/:id', component: EditResturantComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }