import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { EditIngredientsComponent } from './edit-ingredients/edit-ingredients.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'foodsack',
    pathMatch: 'full'
  },
  {
    path: 'foodsack',
    component: FoodDetailComponent
    //terminal: true
  },
  {
    path: 'foodsack/food/:id',
    component: FoodDetailComponent
  },
  {
    path: 'foodsack/food/:id/edit',
    component: AddRecipeComponent
  },
  {
    path: 'foodsack/food/:id/editIngredient',
    component: EditIngredientsComponent
  },
  {
    path: 'foodsack/add',
    component: AddRecipeComponent
  },
  {
    path: 'foodsack/ingredients',
    component: IngredientListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
