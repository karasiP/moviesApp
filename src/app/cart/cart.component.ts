import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  movies 

  constructor(private cartService: CartService) {   }

  ngOnInit() {
    this.movies = this.cartService.getCart()
  }

  onDelete(){
    this.cartService.clearCart();
    alert('Clear Cart Success');
  }

}
