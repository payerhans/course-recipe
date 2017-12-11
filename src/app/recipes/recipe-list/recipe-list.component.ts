import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ("new Recipe", "Example Recipe", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Oscar_schnitzel_at_Grilli_Toro.jpg"),
    new Recipe ("second Recipe", "second Recipe", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Oscar_schnitzel_at_Grilli_Toro.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
