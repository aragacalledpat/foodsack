const MongoClient = require('mongodb').MongoClient
          , mongodb = require('mongodb')
          , assert = require('assert');
const q = require('q');
          
const url = 'mongodb://localhost:27017/foodsack';

class RecipeOps {
  getRecipes()
  {
    var deferred = q.defer();
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var collection = db.collection('recipes');

      collection.find().toArray(function(err,recipes){
        console.log(recipes);
        deferred.resolve(recipes);
      });

      db.close();
    });
    
    return deferred.promise;
  }
  
  insertRecipe(recipe)
  {
    var deferred = q.defer();
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var collection = db.collection('recipes');

      collection.insertOne(recipe, function(err, result){
        deferred.resolve(result);
      })

      db.close();
    });
    
    return deferred.promise;
  }
  
  deleteRecipe(id)
  {
    var deferred = q.defer();
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      console.log("trying to delete something!");
      console.log(id)
      var collection = db.collection('recipes');

      collection.deleteOne({ "_id" : new mongodb.ObjectID(id)},function(err, results){
        console.log("deleted " + results);
        deferred.resolve(results);
      })

      db.close();
    });
    
    return deferred.promise;
  }
  
}

module.exports = new RecipeOps();