import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';
import { IngredientService } from '../shared/ingredient.service';
import { NgForm }    from '@angular/forms';

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
          <form #newIngredientForm="ngForm">
          <input name="name" [(ngModel)]="newIngredient.name" (keyup.enter)="add()" type="text" class="form-control" required>
          <button class="btn btn-success" (click)="add()" [disabled]="!newIngredientForm.form.valid">Add Ingredient</button>
          </form>
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
    this.newIngredient = new Ingredient();
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
