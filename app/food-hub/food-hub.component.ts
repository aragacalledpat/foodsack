import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from '../recipe-list/recipeList.component'

@Component({
  selector: 'food-hub',
  template: `
    <recipe-list></recipe-list>
  `,
  directives: [RecipeListComponent]
})

export class FoodHubComponent{
}