import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../share/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  movies 
  SECOND: number = 1000;
  MINUNTE: number = this.SECOND * 60;

  constructor(private cartService: CartService) {   }

  ngOnInit() {
    this.movies = this.cartService.getCart()
    this.countTime();
  }

  onDelete(){
    this.cartService.clearCart();
    alert('Clear Cart Success');
  }

  countTime(){
    const now = new Date().getTime();
    const min = new Date('59:59').getTime();
    const unitTime = min - now;
  }

}
