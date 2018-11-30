import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
