import { Component, OnInit, Input } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipeList.component';
import { Recipe } from '../shared/Recipe';
import { RecipeService } from '../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'food-detail',
  template: `
    <div class="row">
      <div class="col-md-2">
        <recipe-list></recipe-list>
      </div>
      <div class="col-md-10">
        <div *ngIf="recipe">
          <div class="container">
            <div class="row">
              <h2>{{recipe.name}}</h2>
            </div>
            <div class="row"> 
              <div class="col-md-4">
                <h4>Ingredients</h4>
                <ul>
                  <li *ngFor="let ingredientAmount of recipe.ingredients">
                  {{ingredientAmount.ingredient.name}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    directives: [RecipeListComponent],
    providers: [RecipeService]
})

export class FoodDetailComponent {
  sub: any;
  recipe: Recipe;
  
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute)
  {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.recipe = this.recipeService.getRecipe(id);
    });
  }
  
  ngOnDestroy() {
  this.sub.unsubscribe();
}
  
}