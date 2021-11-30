import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentIntent, StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  totalPrice: number;
  cartItems: CartItem [];
  orderPlaced: boolean = false;
  orderId: string;

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private stripeService: StripeService,
              private checkoutService: CheckoutService,
              private cartService: CartService) { }

  ngOnInit() {
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.checkoutService.getOrderId().subscribe(this.processResult());

    this.cartItems = this.cartService.cartItems;

    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  //method from Ngx-Stripe example
  pay(): void {
      this.checkoutService.createPaymentIntent(this.totalPrice, this.checkoutForm.get('email').value)
      .pipe(
        switchMap((pi) => 
        this.stripeService.confirmCardPayment(pi.client_secret, {
          payment_method: {
            card: this.card.element,
            billing_details: {
              name: this.checkoutForm.get('firstName').value + ' ' + this.checkoutForm.get('lastName').value,
              email: this.checkoutForm.get('email').value
            },
          },
        })
        )
      )
      .subscribe((result) => {
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          console.log(result.error.message);
        } else {
          // The payment has been processed!
          if (result.paymentIntent.status === 'succeeded') {
            // Show a success message to your customer
            console.log(this.orderId)
            this.orderPlaced = true;
            console.log("Success!");
            this.emptyCart();
          }
        }
      });
      }

      processResult() {
        return data => {
          this.orderId = data.id
      }
    }

    emptyCart() {
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);
    }

}
