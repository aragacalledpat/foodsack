const RecipeService = require('./services/RecipeService');
const apiPath = '/api/recipes';

const RecipeRoutes = [
  {
      method: 'GET',
      path: apiPath, 
      handler: function (request, reply) {
        
          RecipeService.getRecipes().then(function(data){
              return reply(data);
          });
      }
  },
  {
      method: 'POST',
      path: apiPath,
      handler: function (request, reply){
        RecipeService.createRecipe(request.payload).then(function(data){
          return reply(data);
        })
        
      }
  },
  {
      method: 'PUT',
      path: apiPath,
      handler: function (request, reply){
        RecipeService.updateRecipe(request.payload).then(function(data){
          return reply(data);
        })
      }
  },
  {
      method: 'DELETE',
      path: apiPath + '/{recipeId}',
      handler: function (request, reply){
        
        var id = encodeURIComponent(request.params.recipeId)
        
        RecipeService.deleteRecipe(id).then(function(data){
            return reply(data);
        })
      
      }
  }
]

module.exports = RecipeRoutes;