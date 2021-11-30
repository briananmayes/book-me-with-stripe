import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { DateButton, DlDateTimePickerComponent } from 'angular-bootstrap-datetimepicker';
import { Booking } from 'src/app/common/booking';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
import * as _moment from 'moment';
import {unitOfTime} from 'moment';

/* Sourced from https://stackblitz.com/github/dalelotts/angular-bootstrap-datetimepicker-demo?file=src%2Fapp%2Fexamples%2Fdate-picker-input%2Fdate-picker-input.component.html */
let moment = _moment;

if ('default' in _moment) {
  moment = _moment['default'];
}
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  // Creating a new instance of Product
  product: Product = new Product();

  // the selected date from the datetimepicker
  selectedDate: Date;
  readyToBook: boolean = false;

  query: string;

  index: string;
  productId: string;


  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => { 
      this.handleProductDetails();
    })
  }


  handleProductDetails() {
    this.productId = this.route.snapshot.paramMap.get("id");
    //console.log("the response returned by service call is, ", this.productService.getProductById(this.productId));
    this.productService.getProductById(this.productId).subscribe(this.processResult());
  }

  processResult()  {
  return data => {
    console.log("processing result ", data);
    this.product = data;
    console.log("products are ", this.product);
  };

}

addToCart(theProduct: Product) {
  let booking = new Booking(theProduct);
  booking.date = this.selectedDate;
  booking.query = this.query;
  const theCartItem = new CartItem(booking);
  console.log("This Booking is being added to cart as...", theCartItem);
  this.cartService.addToCart(theCartItem);
}

/* Sourced from https://stackblitz.com/github/dalelotts/angular-bootstrap-datetimepicker-demo?file=src%2Fapp%2Fexamples%2Fdate-picker-input%2Fdate-picker-input.component.html */
datePickerFilter = (dateButton: DateButton, viewName: string) => {
  return dateButton.value >= moment().startOf(viewName as unitOfTime.StartOf).valueOf()
}


}
