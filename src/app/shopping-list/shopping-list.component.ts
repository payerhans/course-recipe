import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 2),
    new Ingredient('veal', 1),
    new Ingredient('peas', 7),
    new Ingredient('pepper', 1),
  ];

  constructor() { }

  ngOnInit() {
  }

}
