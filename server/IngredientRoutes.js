const IngredientService = require('./services/IngredientService');

const apiPath = '/api/ingredients';


const IngredientRoutes = [
  {
      method: 'GET',
      path: apiPath, 
      handler: function (request, reply) {
        
          IngredientService.getIngredients().then(function(data){
              return reply(data);
          });


      }
  },
  {
      method: 'POST',
      path: apiPath,
      handler: function (request, reply){
        IngredientService.createIngredient(request.payload).then(function(data){
          return reply(data);
        })
        
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
      path: apiPath + '/{ingredientId}',
      handler: function (request, reply){
        
        var id = encodeURIComponent(request.params.ingredientId)
        
        IngredientService.deleteIngredient(id).then(function(data){
            return reply(data);
        })
      
      }
  }
]

module.exports = IngredientRoutes;