import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

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
    console.log("got em");
    console.log(this.recipes)
  }
  
  getRecipes(){
    this.recipes = this.recipeService.getRecipes();
  }
 }