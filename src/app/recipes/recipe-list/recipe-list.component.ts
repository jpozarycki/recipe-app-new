import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'Thus a test', 'https://www.recipetineats.com/wp-content/uploads/2015/03/Honey-Garlic-Salmon.jpg'),
    new Recipe('A test Recipe 2', 'Thus a test', 'https://www.recipetineats.com/wp-content/uploads/2015/03/Honey-Garlic-Salmon.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
