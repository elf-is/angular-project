import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  ingredientSelected = new Subject<number>();
  ingredients = [];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      if (this.ingredients.find(i => i.name.toUpperCase() === ingredient.name.toUpperCase())) {
        this.ingredients.find(i => i.name.toUpperCase() === ingredient.name.toUpperCase()).amount += ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    }
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    if (this.ingredients.find(i => i.name.toUpperCase() === ingredient.name.toUpperCase())) {
      this.ingredients.find(i => i.name.toUpperCase() === ingredient.name.toUpperCase()).amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(oldIngredient: Ingredient, newIngredient: Ingredient) {
    this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

}
