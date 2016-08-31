const RecipeService = require('./services/RecipeService');
const apiPath = '/api/recipes';

const RecipeRoutes = [{
    method: 'GET',
    path:apiPath, 
    handler: function (request, reply) {
      
        var recipes = RecipeService.getRecipes();

        return reply(recipes);
    }
}]

module.exports = RecipeRoutes;