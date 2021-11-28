import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentIntent, StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(StripeCardNumberComponent) card: StripeCardNumberComponent;

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
    locale: 'es',
  };

  stripeTest: FormGroup;

  constructor(private fb: FormBuilder, 
              private stripeService: StripeService,
              private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['What is this', [Validators.required]],
      amount: [1001, [Validators.required, Validators.pattern(/\d+/)]],
    });
  }

  pay(): void {
    if (this.stripeTest.valid) {
      this.checkoutService.createPaymentIntent(this.stripeTest.get('amount').value)
      .pipe(
        switchMap((pi) => 
        this.stripeService.confirmCardPayment(pi.client_secret, {
          payment_method: {
            card: this.card.element,
            billing_details: {
              name: this.stripeTest.get('name').value,
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
          }
        }
      });
    } else {
      console.log(this.stripeTest);
    }
      }

}
