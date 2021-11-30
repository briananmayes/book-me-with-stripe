import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stripe } from 'stripe';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseUrl = environment.apiUrl;
  clientSecret: string;

  constructor(private httpClient: HttpClient) {}

  createPaymentIntent(amount: number, receiptEmail: string): Observable<PaymentIntent> {
    return this.httpClient.post<PaymentIntent>(
      `${this.baseUrl}create-payment-intent`,
      { amount, receiptEmail }
    );
  }

  getOrderId(): Observable<GetResponseString> {
    return this.httpClient.get<GetResponseString>(`${this.baseUrl}orderId`)
  }
}

interface GetResponseString {
  id: string;
}