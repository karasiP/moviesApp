import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent {

  @Input()
  movie: Object;
  recentMovie = "None"
  public cart = [];

  
  seletedMovies(title){
    this.recentMovie = title;
    this.cart.push(title)
    alert(title + ' was add to cart ');
    
  }

}

