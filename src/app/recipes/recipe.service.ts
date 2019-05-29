import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Honey garlic salmon',
      'Very tasty salmon omomom',
      'https://www.recipetineats.com/wp-content/uploads/2015/03/Honey-Garlic-Salmon.jpg',
      [
        new Ingredient('Salmon', 3),
        new Ingredient('Garlic', 1),
        new Ingredient('Cauliflower', 2)
      ]),
    new Recipe('Turkey burger',
      'Very tasty burger omomom',
      'https://www.inspiredtaste.net/wp-content/uploads/2017/07/Turkey-Burger-Recipe-8-1200.jpg',
      [
        new Ingredient('Roll',  1),
        new Ingredient('Meat', 1),
        new Ingredient('Avocado', 2),
        new Ingredient('Tomato', 3)
      ])
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}