import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesCardComponent } from './movies-card/movies-card.component';
import { MovieComponent } from './movie/movie.component';
import { CartComponent } from './cart/cart.component';

const appRoutes:Routes=[
  {path: '',redirectTo: '/movies-search' ,pathMatch:'full' },
  {path: 'movies-search',component:MoviesSearchComponent},
  {path: 'movies-card',component:MoviesCardComponent},
  {path: 'movies',component:MovieComponent},
  {path: 'cart', component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesSearchComponent,
    MoviesCardComponent,
    MovieComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
