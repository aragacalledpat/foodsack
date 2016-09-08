'use strict';

const Hapi = require('hapi');

const IngredientRoutes = require('./IngredientRoutes');
const RecipeRoutes = require('./RecipeRoutes');

const allRoutes = IngredientRoutes
                    .concat(RecipeRoutes);

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: 3000,
    routes: {cors: true} 
});

for(let route of allRoutes)
{
  server.route(route);
}



// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});