import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SubmitService } from '../../services/submit.service';
import { Submit } from '../../../assets/Submit';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {

  products: Product[];
  index: number;

  constructor(
    private submissionService: SubmitService, 
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.loadProducts();
  }


//trackBy function
trackById(index, item) {
  return item.name; 
}

// Stripe functions 
// loadProducts to load products from backend via Stripe api
loadProducts() {
  //console.log("are the products lading? ", this.productService.listProducts().subscribe(this.processResult()));
    this.productService.listProducts().subscribe(this.processResult())
}

processResult() {
  return data => {
    console.log("processing result ", data);
    this.products = data;
    console.log("products are ", this.products);
  };

}

}

