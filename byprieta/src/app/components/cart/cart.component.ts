import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalQuantity: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    //$(`[data-toggle="popover"]`).popover();
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }

}
