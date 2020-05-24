import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

 index = 0;

  constructor() { }


  addMovieToCart(title,price){
    const cart = localStorage.getItem("cart"); 
    const movie = {
      title: title,
      price: price
    }

    if(!cart){
      const movies = [movie]
      localStorage.setItem("cart",JSON.stringify(movies));
    }else{
      const movies = JSON.parse(cart)
      movies.push(movie)
      localStorage.setItem("cart",JSON.stringify(movies));

      this.calculatePrice(movies);
      
    }
  }

  clearCart(){
    localStorage.removeItem("cart");
  }

  getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [] ;
  }

  calculatePrice(movie){
    this.index = Object.keys(movie).length; 
      if(this.index > 3 && this.index < 6){
        console.log("discount = 10%" );
      }else if(this.index >= 6){
        console.log("discount = 20%");
      }else{
        console.log("Non discount");
      }
  }
}
