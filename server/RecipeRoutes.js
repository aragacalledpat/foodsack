const RecipeService = require('./services/RecipeService');

const RecipeRoutes = [{
    method: 'GET',
    path:'/api/recipes', 
    handler: function (request, reply) {
      
        var recipes = RecipeService.getRecipes();

        return reply(recipes);
    }
}]

module.exports = RecipeRoutes;