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