import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit{

  @Input()
  movie: Object;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  
  seletedMovies(title){
    this.cartService.addMovieToCart(title);
    console.log(this.cartService.getCart());
  }

}

