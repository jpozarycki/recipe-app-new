import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-recipe-app-3a48f.firebaseio.com/recipes.json').pipe(map(
    recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
        console.log(recipes);
      })
    );
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-recipe-app-3a48f.firebaseio.com/recipes.json', recipes).subscribe(
      response => {
        console.log(response);
      }
    );

  }
}
