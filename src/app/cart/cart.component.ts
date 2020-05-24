import { Component, OnInit, Output, EventEmitter,OnChanges, SimpleChange,SimpleChanges } from '@angular/core';
import { CartService } from '../share/cart.service';
import { timer } from 'rxjs/observable/timer';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  movies 
  counter$: Observable<number>;
  count = 60;
  summary

  constructor(private cartService: CartService) {   
    
  }
  ngOnInit() {
    this.movies = this.cartService.getCart()
    this.summary = this.cartService.calculatePrice(this.movies);
    console.log(this.summary);
  }

  

  onDelete(){
    this.cartService.clearCart();
    alert('Clear cart success!');
    this.movies = this.cartService.getCart()
    this.summary = this.cartService.calculatePrice(this.movies);
  }

   countDown() {
    this.counter$ = timer(0,1000).pipe(
      take(this.count),
      map(() => --this.count)
      );
  }
}
