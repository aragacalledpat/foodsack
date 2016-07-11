import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FoodHubComponent } from './food-hub/food-hub.component'

@Component({
  selector: 'food-sack',
  template: `
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'Food Sack'
}