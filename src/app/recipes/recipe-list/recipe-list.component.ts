import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken',
      'A buttery dish created with chicken',
      'https://40aprons.com/wp-content/uploads/2018/01/whole30-indian-butter-chicken-1-2-500x500.jpg'
    ),
    new Recipe(
      'Butter Chicken',
      'A buttery dish created with chicken',
      'https://40aprons.com/wp-content/uploads/2018/01/whole30-indian-butter-chicken-1-2-500x500.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
