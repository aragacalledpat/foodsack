const IngredientService = require('./services/IngredientService');

const apiPath = '/api/ingredients';


const IngredientRoutes = [
  {
      method: 'GET',
      path: apiPath, 
      handler: function (request, reply) {
        
          var ingredients = IngredientService.getIngredients();

          return reply(ingredients);
      }
  },
  {
      method: 'POST',
      path: apiPath,
      handler: function (request, reply){
        return reply({message : "created ingredient!"});
      }
  },
  {
      method: 'PUT',
      path: apiPath,
      handler: function (request, reply){
        return reply({message : "updated ingredient!"});
      }
  },
  {
      method: 'DELETE',
      path: apiPath,
      handler: function (request, reply){
        return reply({message : "deleted ingredient!"});
      }
  }
]

module.exports = IngredientRoutes;