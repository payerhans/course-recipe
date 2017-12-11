import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ("new Recipe", "Example Recipe", "https://cdn.pixabay.com/photo/2015/07/17/14/05/schnitzel-849294_960_720.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
