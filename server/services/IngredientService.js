const IngredientOps = require('../dataAccess/IngredientOps');
const q = require('q');

class IngredientService {
  
  getIngredients()
  {
    var deferred = q.defer()
    
    IngredientOps.getIngredients().then(function(ingredients){
      console.log("and we back");
      console.log(ingredients)
      deferred.resolve(ingredients);
    })
    
    return deferred.promise;
  }
}

module.exports = new IngredientService();