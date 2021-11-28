import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0); //Subject is  subclass of observable and can be used to publish events to all subscribers
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0); 

  constructor() { }

  addToCart(theCartItem: CartItem) {
    //check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0) {
    //find the item in the cart based on id

    //check if we found it
    //find returns undefined 
    existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
  

    alreadyExistsInCart = (existingCartItem != undefined);
  }

  if(alreadyExistsInCart) {
    existingCartItem.quantity++;
  }
  else {
    //just add item to the array
    this.cartItems.push(theCartItem);
  }

  this.computeCartTotals();

  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    //publish the new values...all subscribers will receive new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }
}
