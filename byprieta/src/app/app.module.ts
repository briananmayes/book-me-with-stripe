import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_BASE_HREF } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReadingsComponent } from './components/readings/readings.component';
import { SubmitService } from './services/submit.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ReadingsComponent,
    CheckoutComponent,
    CartComponent,
    BookingsComponent,
    CartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    NgbModule,
    NgxStripeModule.forRoot(environment.stripeKey)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},
              SubmitService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
