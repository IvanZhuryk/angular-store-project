import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartData: { cartItems: ProductModel[]; total: number } = {
    cartItems: [],
    total: 0,
  };
  cartDataObs$ = new BehaviorSubject(this.cartData);
  constructor() {
    let localCartData = JSON.parse(localStorage.getItem('cart'));
    if (localCartData) this.cartData = localCartData;
    this.cartDataObs$.next(this.cartData);
  }
  addItem(item: ProductModel) {
    const findItem = this.cartData.cartItems.find((obj) => obj.id === item.id);
    if (findItem) {
      findItem.count++;
    } else {
      this.cartData.cartItems.push({ ...item, count: 1 });
    }
    this.cartData.total = this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartData));
  }
  getCartTotal() {
    let totalSum = 0;
    this.cartData.cartItems.forEach(
      (prod) => (totalSum += prod.price * prod.count)
    );

    return totalSum;
  }
  updateCart(id: number, count: number): void {
    let updatedProducts = [...this.cartData.cartItems];
    let productIndex = updatedProducts.findIndex((prod) => prod.id == id);

    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      count: count,
    };

    this.cartData.cartItems = updatedProducts;
    this.cartData.total = this.getCartTotal();
    this.cartDataObs$.next({ ...this.cartData });
    localStorage.setItem('cart', JSON.stringify(this.cartData));
    console.log(this.cartData.cartItems);
  }
  removeItem(item: ProductModel) {
    const findItem = this.cartData.cartItems.find((obj) => obj.id === item.id);
    if (findItem.count > 1) {
      findItem.count--;
    } else {
      this.removeProduct(item.id);
    }
    localStorage.setItem('cart', JSON.stringify(this.cartData));
  }
  removeProduct(id: number): void {
    let updatedProducts = this.cartData.cartItems.filter(
      (prod) => prod.id !== id
    );
    this.cartData.cartItems = updatedProducts;
    this.cartData.total = this.getCartTotal();
    this.cartDataObs$.next({ ...this.cartData });
    localStorage.setItem('cart', JSON.stringify(this.cartData));
  }
}
