import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipeList.component'

console.log(RecipeListComponent);

@Component({
  selector: 'food-sack',
  template: `
    <h1>Food Sack</h1>
    <recipe-list></recipe-list>
  `,
  directives: [RecipeListComponent]
})

export class AppComponent implements OnInit {
  title = 'Food Sack';
  
  ngOnInit(){
    console.log("init main module")
  }
}