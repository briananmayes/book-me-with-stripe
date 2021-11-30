import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Stripe } from 'stripe';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseUrl = environment.apiUrl;
  clientSecret: string;

  constructor(private httpClient: HttpClient) {}

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.httpClient.post<PaymentIntent>(
      `${this.baseUrl}create-payment-intent`,
      { amount }
    );
  }
}
