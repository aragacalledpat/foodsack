import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodHubComponent } from './food-hub/food-hub.component';

const routes: RouterConfig = [
  {
    path: 'hub',
    component: FoodHubComponent,
    terminal: true
  },
  {
    path: '',
    redirectTo: '/hub',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]