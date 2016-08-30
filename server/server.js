'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/api', 
    handler: function (request, reply) {

        return reply('hello foodsack');
    }
});

server.route({
    method: 'GET',
    path:'/api/ingredients', 
    handler: function (request, reply) {
      
        var ingredients = {ingredients: [
          {id: 1, name: "onion"},
          {id: 2, name: "water"},
          {id: 3, name: "carrot"},
          {id: 4, name: "celery"},
          {id: 5, name: "garlic"}
        ]}

        return reply(ingredients);
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});