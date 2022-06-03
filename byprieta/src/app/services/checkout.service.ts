import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stripe } from 'stripe';
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseUrl = environment.apiUrl;
  clientSecret: string;

  constructor(private httpClient: HttpClient) {}

  // create the paymentIntent
  createPaymentIntent(amount: number, receiptEmail: string): Observable<PaymentIntent> {
    return this.httpClient.post<PaymentIntent>(
      `${this.baseUrl}create-payment-intent`,
      { amount, receiptEmail }
    );
  };

  // get the order Id for tracking
  getOrderId(): Observable<GetResponseString> {
    return this.httpClient.get<GetResponseString>(`${this.baseUrl}orderId`);
  };


  //save Customer details to the database
  saveCustomer(fname: string, lname: string, email: string): Observable<any> {
    console.log("hitting the service for customer...customer is..", {fname, lname, email})
    return this.httpClient.post<any>(
      `${this.baseUrl}save-customer`, 
    { fname, lname, email },
    );
  };

  //save Booking details to the database
  saveBooking(email: string, orderId: string, product: string, bookingDate: Date): Observable<any> {
    return this.httpClient.post<any>(
    `${this.baseUrl}save-booking`,
    { email, orderId, product, bookingDate}
    );
  };
}

interface GetResponseString {
  id: string;
}