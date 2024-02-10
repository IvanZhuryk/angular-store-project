import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { ProductModel } from '../Models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  items: ProductModel[] | undefined;
  cartservice: CartService = inject(CartService);
  ngOnInit() {
    this.cartservice.cartDataObs$.subscribe((data) => {
      this.items = data.cartItems;
    });
    console.log(this.items);
  }
}
