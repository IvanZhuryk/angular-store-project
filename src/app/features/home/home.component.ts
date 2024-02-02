import { Component, OnInit, inject } from '@angular/core';
import { ProductItemComponent } from '../../shared/product-item/product-item.component';
import { ProductModel } from '../../core/Models/product.model';
import { ProductsService } from '../../core/Services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ProductsService: ProductsService = inject(ProductsService);
  items: ProductModel[];
  ngOnInit() {
    this.ProductsService.GetProducts().subscribe((data) => {
      this.items = data;
      console.log(data);
    });
  }
}
