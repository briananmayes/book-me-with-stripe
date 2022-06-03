import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalQuantity = 0;
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();

  this.cartService.computeCartTotals();

   }
  loadCart() {
    this.cartItems = this.cartService.cartItems;
    console.log("cart items: ", this.cartItems);

   this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

  this.cartService.totalQuantity.subscribe(
    data => this.totalQuantity = data
  );
  }

  increment() {
    this.cartItems[0].quantity += 1;
    this.totalPrice += this.cartItems[0].price;
    this.totalQuantity += 1;
  }

  decrement() {
    this.cartItems[0].quantity -= 1;
    this.totalPrice -= this.cartItems[0].price;
    this.totalQuantity -= 1;
  }

}
