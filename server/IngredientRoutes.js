const IngredientService = require('./services/IngredientService');

const IngredientRoutes = [{
    method: 'GET',
    path:'/api/ingredients', 
    handler: function (request, reply) {
      
        var ingredients = IngredientService.getIngredients();

        return reply(ingredients);
    }
}]

module.exports = IngredientRoutes;