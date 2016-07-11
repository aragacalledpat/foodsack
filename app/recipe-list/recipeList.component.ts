import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/Recipe';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'recipe-list',
  template: `
    <ul class="nav nav-pills nav-stacked">
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
    console.log(recipe);
    this.router.navigate(['/foodsack', recipe.id]);
  }
 }