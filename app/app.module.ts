import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { RecipeListComponent } from './recipe-list/recipeList.component';
import { EditIngredientsComponent } from './edit-ingredients/edit-ingredients.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing
                ],
  declarations: [ AppComponent, 
                  AddRecipeComponent,
                  FoodDetailComponent,
                  IngredientListComponent,
                  RecipeListComponent,
                  EditIngredientsComponent
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }