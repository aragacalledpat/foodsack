import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'foodsack',
    pathMatch: 'full'
  },
  {
    path: 'foodsack',
    component: FoodDetailComponent,
    terminal: true
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
    path: 'foodsack/add',
    component: AddRecipeComponent
  },
  {
    path: 'foodsack/ingredients',
    component: IngredientListComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
