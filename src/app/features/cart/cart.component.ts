import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../core/Models/product.model';
import { CartService } from '../../core/Services/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  items: ProductModel[] = [];
  total: number = 0;
  constructor(private _cart: CartService) {
    this._cart.cartDataObs$.subscribe((cartData) => {
      this.items = cartData.cartItems;
      this.total = cartData.total;
    });
  }
  ngOnInit() {}
  plusOneItem(item: ProductModel) {
    this._cart.addItem(item);
    this._cart.updateCart(item.id, item.count);
  }
  minusOneItem(item: ProductModel) {
    this._cart.removeItem(item);
    this._cart.updateCart(item.id, item.count);
  }
  clearCart() {
    this._cart.clearCart();
  }
}
