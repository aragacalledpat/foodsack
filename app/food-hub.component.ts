import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipeList.component'

@Component({
  selector: 'food-hub',
  template: `
    <recipe-list></recipe-list>
  `,
  directives: [RecipeListComponent]
})

export class FoodHubComponent{
}