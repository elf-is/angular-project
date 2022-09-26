import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
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
