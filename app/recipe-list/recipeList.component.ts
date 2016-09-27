import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/Recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-list',
  template: `
    <ul class="nav nav-pills nav-stacked">
      <li class="nav-item">
        <a class="nav-link" (click)="goToAdd()">
          <span class="glyphicon glyphicon-plus"></span>
          Add
        </a>
      </li>
      <li class="nav-item" *ngFor="let recipe of recipes" (click)="onSelect(recipe)">
          <a class="nav-link">{{recipe.name}}</a>
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
    this.recipeService.getRecipes().then(data => {
      this.recipes = data;
    });
  }
  
  onSelect(recipe: Recipe){
    this.router.navigate(['/foodsack', "food", recipe._id]);
  }
  
  goToAdd()
  {
    this.router.navigate(['/foodsack', "add"]);
  }
 }