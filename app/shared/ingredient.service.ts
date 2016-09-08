import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { APIURL } from './constants'
import { INGREDIENTS } from './mock-ingredients'
import { Ingredient } from './Ingredient'

@Injectable()
export class IngredientService {
  
  ingredientApiUrl:string
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { 
  this.ingredientApiUrl = APIURL + "/ingredients";
}
  
  getIngredients(): Promise<Ingredient[]>{
    return this.http.get(this.ingredientApiUrl)
      .toPromise()
      .then(response => {
        return response.json() as Ingredient[]  
      })
  }

  createIngredient(ingredient: Ingredient) {
    return this.http
      .post(this.ingredientApiUrl, ingredient,this.headers)
      .toPromise()
      .then(res => {
        return res.json() as Ingredient;
      })
  }

  deleteIngredient(ingredient: Ingredient){
    
    return this.http
      .delete(this.ingredientApiUrl + "/" + ingredient._id)
        .toPromise()
        .then(res => {
          return res.json()
        })
    /*
    for(var i = 0; i <INGREDIENTS.length;i++)
    {
      if(INGREDIENTS[i].name == ingredient.name)
      {
        INGREDIENTS.splice(i,1);
      }
    }
    */
  }
}
