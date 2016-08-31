'use strict';

const Hapi = require('hapi');
const IngredientService = require('./services/IngredientService');
const RecipeService = require('./services/RecipeService');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 3000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/api', 
    handler: function (request, reply) {

        return reply('hello foodsack');
    }
});

//get ingredients
server.route({
    method: 'GET',
    path:'/api/ingredients', 
    handler: function (request, reply) {
      
        var ingredients = IngredientService.getIngredients();

        return reply(ingredients);
    }
});

//create ingredient

//delete ingredient



// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});