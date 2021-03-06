import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { APIURL } from './constants'
import { RECIPES } from './mock-recipes'
import { Recipe } from './Recipe'

@Injectable()
export class RecipeService {

  recipeApiUrl:string
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.recipeApiUrl = APIURL + "/recipes";
  }

  getRecipes(): Promise<Recipe[]>{
    return this.http.get(this.recipeApiUrl)
      .toPromise()
      .then(response => {
        return response.json() as Recipe[]
      })
  }

  getRecipe(id)
  {
    return this.getRecipes().then(results =>{
      for(var i =0; i<results.length;i++)
      {
        if(results[i]._id == id)
        {
          return results[i];
        }
      }
    })
  }

  updateRecipe(recipe: Recipe)
  {
    return this.http
      .put(this.recipeApiUrl, recipe,this.headers)
      .toPromise()
      .then(res => {
        return res.json() as Recipe;
      })
  }

  createRecipe(recipe: Recipe)
  {
    return this.http
      .post(this.recipeApiUrl, recipe,this.headers)
      .toPromise()
      .then(res => {
        return res.json() as Recipe;
      })
  }

  deleteRecipe(recipe: Recipe)
  {
    return this.http
      .delete(this.recipeApiUrl + "/" + recipe._id)
        .toPromise()
        .then(res => {
          return res.json()
        })
  }

}
