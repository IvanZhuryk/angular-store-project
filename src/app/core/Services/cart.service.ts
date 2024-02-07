import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems: ProductModel[] = [];
  addItem(item: ProductModel) {
    const findItem = this.cartItems.find((obj) => obj.id === item.id);
    if (findItem) {
      findItem.count++;
    } else {
      this.cartItems.push({ ...item, count: 1 });
    }
  }
}
