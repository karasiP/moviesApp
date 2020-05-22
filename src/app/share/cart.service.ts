import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }


  addMovieToCart(title,price){
    const cart = localStorage.getItem("cart");
    console.log(cart);
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

  clearCart(){
    localStorage.removeItem("cart");
  }

  getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [] ;
  }

}
