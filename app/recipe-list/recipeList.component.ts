import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'recipe-list',
  template: `
    <ul>
      <li *ngFor="let recipe of recipes" (click)="onSelect(recipe)">
      {{recipe.name}}
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
    this.router.navigate(['/hub', recipe.id]);
  }
 }