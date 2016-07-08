import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'recipe-list',
  template: `
    <ul>
      <li *ngFor="let recipe of recipes">
      {{recipe.name}}
      </li>
    </ul>
  `,
    providers: [RecipeService]
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
    
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(){
    this.getRecipes();
  }
  
  getRecipes(){
    this.recipes = this.recipeService.getRecipes();
  }
 }