import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:  Recipe[]=[
    new Recipe("test recipe", "thsis is a test recipe", ""),
    new Recipe("hello recipe", "this is hello recipe", "")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
