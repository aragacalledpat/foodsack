import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/Recipe';
import { RecipeService } from '../shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

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
                <h3>Ingredients</h3>
                <ul class="list-group">
                  <li class="list-group-item">
                    <a (click)="editIngredients()">Edit Ingredients</a>
                  </li>
                  <li class="list-group-item"
                      *ngFor="let ingredientAmount of recipe.ingredients">
                  {{ingredientAmount.amount}} {{ingredientAmount.measurement.name == 'None' ? '': ingredientAmount.measurement.name }} {{ingredientAmount.ingredient.name}}
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
              <h3>Directions</h3>
              {{recipe.directions}}
              </div>
              <div class="col-md-4">
              <h3>URL</h3>
              {{recipe.url}}
              </div>
            </div>
            <div class="row">

            </div>
            <div class="row">
              <button class="btn btn-success" (click)="edit()">Edit</button>
              <button class="btn btn-default" (click)="delete()">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    providers: [RecipeService]
})

export class FoodDetailComponent {
  sub: any;
  recipe: Recipe;
  id:number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
            private router: Router)
  {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.recipeService.getRecipe(this.id).then(_recipe => {
        this.recipe = _recipe;
      });
    });
  }

  ngOnDestroy() {
  this.sub.unsubscribe();
}
  edit()
  {
    this.router.navigate(['foodsack','food',this.id,'edit']);
  }

  delete()
  {
    this.recipeService.deleteRecipe(this.recipe).then(() => {
          this.router.navigate(['foodsack']);
    });

  }
  
  editIngredients()
  {
    this.router.navigate(['foodsack','food',this.id,'editIngredients']);
  }

}
