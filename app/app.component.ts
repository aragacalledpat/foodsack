import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'food-sack',
  template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
          <a class="navbar-brand" href="#">Food Sack</a>
          </div>
        </div>
    </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'Food Sack'
}