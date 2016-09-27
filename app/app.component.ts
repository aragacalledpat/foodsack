import { Component } from '@angular/core';

@Component({
  selector: 'food-sack',
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Food Sack</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/foodsack" >Recipes <span class="sr-only">(current)</span></a></li>
          <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/foodsack/ingredients">Ingredients</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  title = 'Food Sack'
}
