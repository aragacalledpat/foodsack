import { IngredientAmount } from './IngredientAmount'

export class Recipe {
  id: number;
  name: string;
  ingredients:Array<IngredientAmount>;
  directions:string;
  url:string;

  constructor(){
    this.ingredients = [];
  }
}
