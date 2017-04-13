import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";
import { GeneralService } from "../services/general.service";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [GeneralService, CategoryService]
})
export class CategoriesComponent implements OnInit {

  private msgError: string;
  private categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }


  ngOnInit() {

  }

  loadCategories() {
    return this.categoryService.loadCategories()
                               .subscribe(
                                         success => this.renderCategories(success),
                                         error => this.msgError = 'Não foi possível carregar as categorias'
                                );
  }

  renderCategories(categories: [Category]){
    this.categories = categories;
  }

}
