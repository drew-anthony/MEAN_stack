import { ShelterComponent } from './shelter/shelter.component';
import { DetailsComponent } from './details/details.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent  } from './page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShelterComponent },
  { path: 'new', component: CreateComponent },
  { path: 'shelter/:id', component: DetailsComponent},
  { path: 'newreview/:id', component: NewReviewComponent },
  
  { path: 'edit/:id', component: UpdateComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }