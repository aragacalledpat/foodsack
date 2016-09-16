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
          <h4 class="modal-title" id="myModalLabel">Edit Ingredients</h4>
        </div>
        <div class="modal-body">
          <form>
            oh hey!
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" (click)="goHome()">Close</button>
          <button type="submit" [disabled]="!recipe.name"  class="btn btn-primary" (click)="submit()">{{addMode ? 'Add' : 'Save'}} Recipe</button>
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
  }

  loadEditRecipe()
  {
    var fromService
    this.recipeService.getRecipe(this.route.snapshot.params["id"]).then(recipe => {
        fromService = recipe;
        //stupid hack to make a deep copy.
        this.recipe = JSON.parse(JSON.stringify(fromService));
    });

  }

  goHome()
  {
    this.router.navigate(['foodsack']);
  }

  addIngredient()
  {
    /*
    this.recipe.ingredients.push(this.ingredientAmount);
    this.ingredientAmount = new IngredientAmount();
    */
  }

  removeIngredient(ingredient:IngredientAmount)
  {
    /*
    for(var i = 0; i <this.recipe.ingredients.length;i++)
    {
      if(ingredient.ingredient.name == this.recipe.ingredients[i].ingredient.name)
      {
        this.recipe.ingredients.splice(i,1);
      }
    }
    */
  }

  submit()
  {
    /*
    if(this.addMode)
    {
      this.recipeService.createRecipe(this.recipe).then(() => {
            this.goHome();
      });
    }
    else
    {
        this.recipeService.updateRecipe(this.recipe).then(() => {
              this.goHome();
        });
    }
*/
  }

}
