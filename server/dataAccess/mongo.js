const MongoClient = require('mongodb').MongoClient
          , assert = require('assert');
          
const url = 'mongodb://localhost:27017/foodsack';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

module.exports = MongoClient;