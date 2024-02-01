import { Component } from '@angular/core';
import { ProductItemComponent } from '../../shared/product-item/product-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
