import { Component } from '@angular/core';

@Component({
  selector: 'food-sack',
  template: `
  <nav class="navbar navbar-light bg-faded navbar-fixed-top">
      <div class="container-fluid">
          <button type="button" class="navbar-toggler collapsed pull-xs-right hidden-md-up"
          data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">☰</button> <a class="navbar-brand" href="#">Food Sack</a>
          <!-- Collect the
          nav links, forms, and other content for toggling -->
          <ul class="nav navbar-nav">
              <li routerlinkactive="active" class="nav-item"><a routerlink="/foodsack" class="nav-link">Recipes <span class="sr-only">(current)</span></a>
              </li>
              <li routerlinkactive="active" class="nav-item"><a routerlink="/foodsack/ingredients" class="nav-link">Ingredients</a>
          </ul>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
  </nav>
  <div class="container-fluid">
      <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  title = 'Food Sack'
}
