import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantComponent } from './resturant/resturant.component';
import { NewResturantComponent } from './new-resturant/new-resturant.component';
import { EditResturantComponent } from './edit-resturant/edit-resturant.component';
import { ResturantReviewsComponent } from './resturant-reviews/resturant-reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ResturantComponent,
    NewResturantComponent,
    EditResturantComponent,
    ResturantReviewsComponent,
    NewReviewComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
