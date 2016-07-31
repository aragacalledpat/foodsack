import { Injectable } from '@angular/core';

import { INGREDIENTS } from './mock-ingredients'
import { Ingredient } from './Ingredient'

@Injectable()
export class IngredientService {
  getIngredients(){
    return INGREDIENTS;
  }

  createIngredient(ingredient: Ingredient){
    INGREDIENTS.push(ingredient);
  }

  deleteIngredient(ingredient: Ingredient){
    for(var i = 0; i <INGREDIENTS.length;i++)
    {
      if(INGREDIENTS[i].name == ingredient.name)
      {
        INGREDIENTS.splice(i,1);
      }
    }
  }
}
