import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProductModel } from '../../core/Models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/Services/cart.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() Item: ProductModel;
  cartservice: CartService = inject(CartService);
  addProductToCart(item: ProductModel) {
    this.cartservice.addItem(item);
  }
}
