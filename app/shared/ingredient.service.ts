import { Injectable } from '@angular/core';

import { INGREDIENTS } from './mock-ingredients'
import { Ingredient } from './Ingredient'

@Injectable()
export class IngredientService {
  getIngredients(){
    return INGREDIENTS;
  }
  
  createIngredients(ingredient: Ingredient){
    INGREDIENTS.push(ingredient);
  }
}