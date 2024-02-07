import { CategoryModel } from './../../core/Models/category.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort-btn',
  standalone: true,
  imports: [],
  templateUrl: './sort-btn.component.html',
  styleUrl: './sort-btn.component.css',
})
export class SortBtnComponent {
  @Input() Category: CategoryModel;
}
