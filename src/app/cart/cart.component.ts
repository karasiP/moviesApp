import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input()

  movieArray: any []
  movie: Object;
  public cart = [];

  seletedMovies(title){
    this.cart.push(title)
    alert(title + ' was add to cart ');
    
  }
}
