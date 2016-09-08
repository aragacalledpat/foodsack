import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { APIURL } from './constants'
import { INGREDIENTS } from './mock-ingredients'
import { Ingredient } from './Ingredient'

@Injectable()
export class IngredientService {
  
  ingredientApiUrl:string
  
  constructor(private http: Http) { 
  this.ingredientApiUrl = APIURL + "/ingredients";
}
  
  getIngredients(): Promise<Ingredient[]>{
    return this.http.get(this.ingredientApiUrl)
      .toPromise()
      .then(response => response.json().data as Ingredient[])
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
