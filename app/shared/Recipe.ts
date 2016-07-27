import { IngredientAmount } from './IngredientAmount'

export class Recipe {
  id: number;
  name: string;
  ingredients:Array<IngredientAmount>;
  directions:string;

  constructor(){
    this.ingredients = [];
  }
}
