import { Injectable } from '@angular/core';

import { RECIPES } from './mock-recipes'
import { Recipe } from './recipe'

@Injectable()
export class RecipeService {
  getRecipes(){
    return RECIPES;
  }
  
  getRecipe(id: number){
    for(var i = 0; i < RECIPES.length; i++)
    {
      if(RECIPES[i].id == id) { return RECIPES[i] }
    }
  }
}