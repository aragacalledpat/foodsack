const IngredientOps = require('../dataAccess/IngredientOps');
const q = require('q');

class IngredientService {
  
  getIngredients()
  {
    var deferred = q.defer()    
    IngredientOps.getIngredients().then(function(ingredients){
      deferred.resolve(ingredients);
    })
    
    return deferred.promise;
  }
  
  createIngredient(ingredient)
  {
    var deferred = q.defer()    
    IngredientOps.insertIngredient(ingredient).then(function(result){
      deferred.resolve(result);
    })
    
    return deferred.promise;
  }
  
  deleteIngredient(id)
  {
    var deferred = q.defer()    
    IngredientOps.deleteIngredient(id).then(function(result){
      deferred.resolve(result);
    })
    
    return deferred.promise;
  }
}

module.exports = new IngredientService();