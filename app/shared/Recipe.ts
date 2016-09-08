import { IngredientAmount } from './IngredientAmount'

export class Recipe {
  _id: string;
  name: string;
  ingredients:Array<IngredientAmount>;
  directions:string;
  url:string;

  constructor(){
    this.ingredients = [];
  }
}
