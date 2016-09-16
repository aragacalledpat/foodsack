import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../shared/Recipe'
import { Ingredient } from '../shared/Ingredient'
import { IngredientAmount } from '../shared/IngredientAmount'
import { RecipeService } from '../shared/recipe.service'
import { IngredientService } from '../shared/ingredient.service'
import { Measurement } from '../shared/Measurement'
import { MeasurementService } from '../shared/measurement.service'

@Component({
  selector: 'edit-ingredients',
  template: `
  <div #editIngredientsModal class="modal show" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y:auto">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Edit {{recipe.name}}</h4>
        </div>
        <div class="modal-body">
          <form>
          <div class="row" style="margin-bottom:10px;">
          <div class="col-md-3">
            <label for="number">#</label>
            <input type="number" name="number" [(ngModel)]="ingredientAmount.amount" class="form-control">
          </div>
          <div class="col-md-3">
            <label for="unit">Unit</label>
            <select name="unit" class="form-control" [(ngModel)]="ingredientAmount.measurement">
              <option *ngFor="let measurement of measurements" [ngValue]="measurement">{{measurement.name}}</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="newIngredient">Ingredient</label>
            <select name="newIngredient" class="form-control" [(ngModel)]="ingredientAmount.ingredient">
              <option *ngFor="let ingredient of ingredients"
                      [ngValue]="ingredient">
              {{ingredient.name}}
              </option>
            </select>
          </div>
          <div class="col-md-3">
              <label style="color:white" for="newIngredient">Confirm</label>
              <button class="btn btn-default" (click)="addIngredient()">Add Ingredient</button>
          </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-offset-3">
              <ul class="list-group">
                <li class="list-group-item" *ngFor="let ingredientAmount of recipe.ingredients">
                <span>{{ingredientAmount.amount}} {{ingredientAmount.measurement.name}} {{ingredientAmount.ingredient.name}}</span>
                 <a style="cursor: pointer;" (click)="removeIngredient(ingredientAmount)"><span class="glyphicon glyphicon-minus pull-right" aria-hidden="true"></span></a>
                </li>
              </ul>
            </div>
          </div>
                  
          </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" (click)="goHome()">Close</button>
          <button type="submit" [disabled]="!recipe.name"  class="btn btn-primary" (click)="submit()">Save</button>
        </div>
      </div>
    </div>
  </div>
  `,
  providers: [RecipeService, IngredientService, MeasurementService]
})

export class EditIngredientsComponent {

  recipe:Recipe
  ingredients: Ingredient[]
  measurements:Measurement[];
  ingredientAmount:IngredientAmount;

  constructor(private router:Router,
    private recipeService:RecipeService,
    private ingredientService:IngredientService,
    private measurementService:MeasurementService,
    private route:ActivatedRoute)
    {
    this.recipe = new Recipe();
    this.ingredientAmount = new IngredientAmount();
    
    this.ingredientService.getIngredients()
      .then(data => {
        this.ingredients = data
    });
    
    this.measurements = this.measurementService.getMeasurements();
    /*
    this.addMode = (!this.route.snapshot.params.hasOwnProperty('id'));

    if(!this.addMode)
    {
      this.loadEditRecipe();
    }
    */
    this.recipeService.getRecipe(this.route.snapshot.params["id"]).then(_recipe => {
        //stupid hack to make a deep copy.
        this.recipe = JSON.parse(JSON.stringify(_recipe));
        console.log(this.recipe);
    });
  }

  loadEditRecipe()
  {

  }

  goHome()
  {
    this.router.navigate(['foodsack']);
  }

  addIngredient()
  {
    this.recipe.ingredients.push(this.ingredientAmount);
    this.ingredientAmount = new IngredientAmount();
  }

  removeIngredient(ingredient:IngredientAmount)
  {

    for(var i = 0; i <this.recipe.ingredients.length;i++)
    {
      if(ingredient.ingredient.name == this.recipe.ingredients[i].ingredient.name)
      {
        this.recipe.ingredients.splice(i,1);
      }
    }

  }

  submit()
  {
    this.recipeService.updateRecipe(this.recipe).then(() => {
          this.goHome();
    });

  }

}
