import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';
import { IngredientService } from '../shared/ingredient.service';

@Component({
  selector: 'ingredient-list',
  template: `
    <div class="row">
      <div class="col-md-4">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let ingredient of ingredients">
          <a>{{ingredient.name}}</a>
          </li>
        </ul>
        <div>
          <input [(ngModel)]="newIngredient.name" (keyup.enter)="add()" type="text" class="form-control">
          <div class="btn btn-success" (click)="add()">Add Ingredient</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
      </div>
    </div>

  `,
    providers: [IngredientService]
})

export class IngredientListComponent implements OnInit {
  ingredients: Ingredient[];
  newIngredient: Ingredient;

  constructor(private ingredientService: IngredientService){

  }

  ngOnInit(){
    this.getIngredients();
    this.newIngredient = new Ingredient();
  }

  getIngredients(){
    this.ingredients = this.ingredientService.getIngredients();
  }

  add()
  {
    this.ingredientService.createIngredient(this.newIngredient);
    this.newIngredient = new Ingredient();
  }

}
