import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/Recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-list',
  template: `
    <ul class="nav nav-pills nav-stacked">
      <li>
        <a (click)="goToAdd()">
          <span class="glyphicon glyphicon-plus"></span>
          Add
        </a>
      </li>
      <li *ngFor="let recipe of recipes" 
          (click)="onSelect(recipe)"
          >
          <a>{{recipe.name}}</a>
      </li>
    </ul>
  `,
    providers: [RecipeService]
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
    
  constructor(private recipeService: RecipeService,
              private router: Router) { }
  
  ngOnInit(){
    this.getRecipes();
  }
  
  getRecipes(){
    this.recipes = this.recipeService.getRecipes();
  }
  
  onSelect(recipe: Recipe){
    this.router.navigate(['/foodsack', "food", recipe.id]);
  }
  
  goToAdd()
  {
    this.router.navigate(['/foodsack', "add"]);
  }
 }