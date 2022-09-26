import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  dropdownItems = [
    {name: 'Add to Shopping List', link: '/shopping-list'},
    {name: 'Edit', link: '/recipes'},
    {name: 'Delete', link: '/recipes'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
