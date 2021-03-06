import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken',
      'A buttery dish created with chicken',
      'https://40aprons.com/wp-content/uploads/2018/01/whole30-indian-butter-chicken-1-2-500x500.jpg',
        [
            new Ingredient('chicken', 1),
            new Ingredient('Butter', 1),
        ]
    ),
    new Recipe(
      'Tawa Chicken',
      'A dish cooked on iron tawa.',
      'http://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/Tawa-Chicken-500x500.jpg',
        [
            new Ingredient('chicken', 1),
            new Ingredient('Capsicum', 1),
        ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
