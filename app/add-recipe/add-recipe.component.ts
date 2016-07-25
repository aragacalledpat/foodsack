import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../shared/Recipe'
import { RecipeService } from '../shared/recipe.service'

@Component({
  selector: 'add-recipe',
  template: `
  <div #addModal class="modal show" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Add Recipe</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input [(ngModel)]="recipe.name" type="text" class="form-control" name="name" required>
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
                  <ul>
                    <li>4 Cups Milk</li>
                    <li>3 Cups Water</li>
                    <li>4 Cups Milk</li>
                    <li>3 Cups Water</li>
                  </ul>
                </div>
                <div class="col-md-2">
                  <label for="number">#</label>
                  <input type="number" name="number" class="form-control">
                </div>
                <div class="col-md-2">
                  <label for="unit">Unit</label>
                  <select name="unit">
                    <option>Cups</option>
                    <option>Tablespoon</option>
                    <option>Things</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="newIngredient">Ingredient</label>
                  <select name="unit">
                    <option>Onion</option>
                    <option>Carrots</option>
                    <option>Celery</option>
                  </select>
                </div>
              </div>
              <div class="row">
              <div class="col-md-12">
                            <button class="btn btn-default pull-right">Add Ingredient</button>
              </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" (click)="goHome()">Close</button>
          <button type="submit" class="btn btn-primary" (click)="submit()">Add Recipe</button>
        </div>
      </div>
    </div>
  </div>
  `,
  providers: [RecipeService]
})

export class AddRecipeComponent{
  
  recipe:Recipe
  
  constructor(private router:Router, private recipeService:RecipeService){
    this.recipe = new Recipe;
  }
  
  goHome()
  {
    this.router.navigate(['foodsack']);
  }
  
  submit()
  {
    this.recipeService.createRecipe(this.recipe);
    this.goHome();
  }

}