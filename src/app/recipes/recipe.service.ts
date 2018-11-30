import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Butter Chicken',
          'A buttery dish created with chicken',
          'https://40aprons.com/wp-content/uploads/2018/01/whole30-indian-butter-chicken-1-2-500x500.jpg'
        ),
        new Recipe(
          'Tawa Chicken',
          'A buttery dish created with chicken',
          'https://40aprons.com/wp-content/uploads/2018/01/whole30-indian-butter-chicken-1-2-500x500.jpg'
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }
}
