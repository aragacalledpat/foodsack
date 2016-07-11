import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodHubComponent } from './food-hub/food-hub.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/foodsack',
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
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]