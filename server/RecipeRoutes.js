const RecipeService = require('./services/RecipeService');
const apiPath = '/api/recipes';

const RecipeRoutes = [
  {
    method: 'GET',
    path:apiPath, 
    handler: function (request, reply) {
      
        var recipes = RecipeService.getRecipes();

        return reply(recipes);
    }
  },
    {
        method: 'POST',
        path: apiPath,
        handler: function (request, reply){
          return reply({message : "created recipe!"});
        }
    },
    {
        method: 'PUT',
        path: apiPath,
        handler: function (request, reply){
          return reply({message : "updated recipe!"});
        }
    },
    {
        method: 'DELETE',
        path: apiPath,
        handler: function (request, reply){
          return reply({message : "deleted recipe!"});
        }
    }
]

module.exports = RecipeRoutes;