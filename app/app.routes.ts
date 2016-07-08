import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodHubComponent } from './food-hub/food-hub.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/hub',
    pathMatch: 'full'
  },
  {
    path: 'hub',
    component: FoodHubComponent,
    terminal: true
  },
  {
    path: 'hub/:id',
    component: FoodDetailComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]