import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

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
    path: 'foodsack/:id',
    component: FoodDetailComponent
  },
  {
    path: 'foodsack/add',
    component: AddRecipeComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]