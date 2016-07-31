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

  createRecipe(recipe: Recipe)
  {
    var highestId = 0;
    for(var i = 0; i < RECIPES.length; i++)
    {
      if(RECIPES[i].id > highestId)
      {
         highestId = RECIPES[i].id;
      }
    }


    recipe.id = highestId + 1;
    RECIPES.push(recipe);
  }

  deleteRecipe(recipe: Recipe)
  {
    for(var i = 0; i < RECIPES.length; i++)
    {
      if(RECIPES[i].id == recipe.id)
      {
         RECIPES.splice(i,1);
      }
    }
  }

}
