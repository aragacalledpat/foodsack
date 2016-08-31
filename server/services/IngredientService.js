const FoodSackMongo = require('../dataAccess/mongo');

class IngredientService {
  
  getIngredients()
  {
    return {ingredients: [
      {id: 1, name: "bloop"},
      {id: 2, name: "water"},
      {id: 3, name: "carrot"},
      {id: 4, name: "celery"},
      {id: 5, name: "garlic"}
    ]}
  }
}

module.exports = new IngredientService();