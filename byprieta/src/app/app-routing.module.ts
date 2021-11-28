import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReadingsComponent } from './components/readings/readings.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

const routes: Routes = [
  { path: 'spiritual-journey', component: WelcomeComponent},
  { path: '', component: WelcomeComponent},
  { path: 'readings', component: ReadingsComponent},
         /* children: [
            { path: 'booking/:id', component: BookingsComponent}
          ]},*/
  { path: 'checkout', component: CheckoutComponent},
  { path: 'cart', component: CartComponent},
  { path: 'book/:id', component: BookingsComponent},
  { path: 'view-cart', component: CartDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
