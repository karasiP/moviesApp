import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService,CartService]
})

export class AppComponent {
  genres: Array<Object>;

  constructor(private _moviesServices: MoviesService) {
    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
  }
}
