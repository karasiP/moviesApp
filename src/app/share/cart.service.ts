import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }

  addMovieToCart(title,price){
    const cart = localStorage.getItem("cart");
    console.log(cart);

    if(!cart){
      const movies = [title,price]
      localStorage.setItem("cart",JSON.stringify(movies));
    }else{
      const movies = JSON.parse(cart)
      movies.push(title,price)
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
