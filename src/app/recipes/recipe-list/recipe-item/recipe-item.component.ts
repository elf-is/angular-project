import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "../../../shared/models/recipe.model";
import { RecipeService } from "../../../shared/services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  item: Recipe;
  @Input() index: number;

  constructor(private service: RecipeService) {
  }

  ngOnInit(): void {
    this.item = this.service.getRecipe(this.index);
  }

}
