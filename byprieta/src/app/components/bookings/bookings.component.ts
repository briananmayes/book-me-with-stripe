import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { DlDateTimePickerComponent } from 'angular-bootstrap-datetimepicker';
import { Booking } from 'src/app/common/booking';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  // Creating a new instance of Product
  product: Product = new Product();

  // Create a new instane of a Booking 
  booking: Booking = new Booking(this.product);

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

addToCart() {
  this.booking.date = this.selectedDate;
  this.booking.query = this.query;
  const theCartItem = new CartItem(this.booking);
  this.cartService.addToCart(theCartItem);
}


}
