import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {


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
    }
  }

  calculatePrice(movies){
    const sum = {
      total:0,
      discount:0,
      paid:0,
      promotion:0
    }

    for(const movie of movies){
      sum.total += movie.price;
    }
     if(movies.length > 5){
       sum.promotion = 20;
       sum.discount = sum.total * 0.2;
     }else if(movies.length > 3){
       sum.promotion = 10;
       sum.discount = sum.total * 0.1;
     }
     sum.paid = sum.total - sum.discount;
     const summary = [sum];
     return summary;
    }
    
    
  clearCart(){
    localStorage.removeItem("cart");
  }

  getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [] ;
  }

}
