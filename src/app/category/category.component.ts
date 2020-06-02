import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/model/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catagories$: Observable<Category[]> = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.catagories$ = this.categoryService.getCategories();
  }

}
