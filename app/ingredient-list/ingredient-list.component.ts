import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';
import { IngredientService } from '../shared/ingredient.service';

Component({
  selector: 'ingredient-list',
  template: `
    <ul>
      <li *ngFor="let ingredient of ingredients">
      <a>{{ingredient.name}}</a>
      </li>
    </ul>
  `,
    providers: [IngredientService]
})

export class IngredientListComponent implements OnInit {
  ingredients: Ingredient[];
  
  constructor(private ingredientService: IngredientService){
    
  }
  
  ngOnInit(){
    this.getIngredients();
  }
  
  getIngredients(){
    this.ingredients = this.ingredientService.getIngredients();
  }
  
}