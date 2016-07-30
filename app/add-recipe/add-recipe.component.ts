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
  selector: 'add-recipe',
  template: `
  <div #addModal class="modal show" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document" style="width:800px">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Add Recipe</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input [(ngModel)]="recipe.name" type="text" class="form-control" name="name">
            </div>

            <div class="form-group">
              <label for="directions">Directions</label>
              <textarea [(ngModel)]="recipe.directions"
                          class="form-control"
                          id="directions"
                          name="directions"
                          rows="3">
              </textarea>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-4">
                  <ul class="list-group">
                    <li class="list-group-item" *ngFor="let ingredientAmount of recipe.ingredients">
                    <span>{{ingredientAmount.amount}} {{ingredientAmount.measurement.name}} {{ingredientAmount.ingredient.name}}</span>
                     <a style="cursor: pointer;" (click)="removeIngredient(ingredientAmount)"><span class="glyphicon glyphicon-minus pull-right" aria-hidden="true"></span></a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-2">
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
              </div>
              <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-default pull-right" (click)="addIngredient()">Add Ingredient</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" (click)="goHome()">Close</button>
          <button type="submit" class="btn btn-primary" (click)="submit()">{{addMode ? 'Add' : 'Edit'}} Recipe</button>
        </div>
      </div>
    </div>
  </div>
  `,
  providers: [RecipeService, IngredientService, MeasurementService]
})

export class AddRecipeComponent {

  recipe:Recipe
  ingredients: Ingredient[]
  measurements:Measurement[];
  ingredientAmount:IngredientAmount;
  addMode:boolean;

  constructor(private router:Router,
    private recipeService:RecipeService,
    private ingredientService:IngredientService,
    private measurementService:MeasurementService,
    private route:ActivatedRoute)
    {
    this.recipe = new Recipe();
    this.ingredientAmount = new IngredientAmount();
    this.ingredients = this.ingredientService.getIngredients();
    this.measurements = this.measurementService.getMeasurements();
    this.addMode = (!this.route.snapshot.params.hasOwnProperty('id'));

    if(!this.addMode)
    {
      this.loadEditRecipe();
    }

  }

  loadEditRecipe()
  {
    var fromService = this.recipeService.getRecipe(this.route.snapshot.params["id"]);

    //stupid hack to make a deep copy.
    this.recipe = JSON.parse(JSON.stringify(fromService));
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

    if(this.addMode)
    {
      this.recipeService.createRecipe(this.recipe);
    }
    else
    {
        this.recipeService.updateRecipe(this.recipe);
    }
    this.goHome();
  }

}
