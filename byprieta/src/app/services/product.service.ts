import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listProducts(): Observable<Product[]> {
    return this.http.get<GetResponseProducts>(this.baseUrl + "productList").pipe(
      map(response => response.products)
    );
  }

  getProductById(theProductId: string): Observable<Product> {
    const productUrl = `${this.baseUrl}product-details/${theProductId}`;
    return this.http.get<Product>(productUrl);
  }

}


interface GetResponseProducts {
  products: Product[];
}


