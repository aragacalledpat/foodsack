import { Injectable } from '@angular/core';

import { RECIPES } from './mock-recipes'
import { Recipe } from './Recipe'

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
  
  updateRecipe(recipe: Recipe)
  {
    for(var i = 0; i < RECIPES.length; i++)
    {
      if(RECIPES[i].id == recipe.id) 
      { 
         RECIPES[i] = recipe;
      }
    }
  }
  
}