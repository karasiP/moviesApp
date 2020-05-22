import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../share/cart.service';


@Component({
  selector: 'movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit{

  @Input()
  movie: Object;
  prices: Array<Object>;

  constructor(private cartService: CartService) { 
    this.prices = [
      { 
        price: this.getRandomInt(300,600)
      },
    ];
  }

  ngOnInit() {
  }
  
  seletedMovies(title,price){
    this.cartService.addMovieToCart(title,price);
    console.log(this.cartService.getCart());
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

}

