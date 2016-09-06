const RecipeOps = require('../dataAccess/RecipeOps');
const q = require('q');

class RecipeService {
  getRecipes()
  {
    var deferred = q.defer()    
    RecipeOps.getRecipes().then(function(recipes){
      deferred.resolve(recipes);
    })
    
    return deferred.promise;
  }
  
  createRecipe(recipe)
  {
    var deferred = q.defer()    
    RecipeOps.insertRecipe(recipe).then(function(result){
      deferred.resolve(result);
    })
    
    return deferred.promise;
  }
  
  deleteRecipe(id)
  {
    var deferred = q.defer()    
    RecipeOps.deleteRecipe(id).then(function(result){
      deferred.resolve(result);
    })
    
    return deferred.promise;
  }
}  

module.exports = new RecipeService();