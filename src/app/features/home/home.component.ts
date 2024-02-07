import { Component, OnInit, inject } from '@angular/core';
import { ProductItemComponent } from '../../shared/product-item/product-item.component';
import { ProductModel } from '../../core/Models/product.model';
import { ProductsService } from '../../core/Services/products.service';
import { SortBtnComponent } from '../../shared/sort-btn/sort-btn.component';
import { CategoryModel } from '../../core/Models/category.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductItemComponent, SortBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ProductsService: ProductsService = inject(ProductsService);
  categories: CategoryModel[] = [
    { id: 1, category: 'electronics' },
    { id: 2, category: 'jewelery' },
    { id: 3, category: "men's clothing" },
    { id: 4, category: "women's clothing" },
  ];
  items: ProductModel[];
  ngOnInit() {
    this.ProductsService.GetProducts().subscribe((data) => {
      this.items = data;
      console.log(data);
    });
  }
  sortItems(category: string) {
    this.ProductsService.GetProductsByCategoty(category).subscribe((data) => {
      this.items = data;
      console.log(data);
    });
  }
}
