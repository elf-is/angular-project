import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'https://placeimg.com/480/240/nature'),
    new Recipe('Recipe 2',
      'This is simply a test',
      'https://placeimg.com/480/240/nature/grayscale')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
