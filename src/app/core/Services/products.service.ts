import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductModel } from '../Models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http: HttpClient = inject(HttpClient);
  GetProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }
  GetProductsByCategoty(categoty: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(
      `https://fakestoreapi.com/products/category/${categoty}`
    );
  }
}
