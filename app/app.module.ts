import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing } from './app.routes'

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { RecipeListComponent } from './recipe-list/recipeList.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  routing
                ],
  declarations: [ AppComponent, 
                  AddRecipeComponent,
                  FoodDetailComponent,
                  IngredientListComponent,
                  RecipeListComponent
                  
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }