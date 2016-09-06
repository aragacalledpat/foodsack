const MongoClient = require('mongodb').MongoClient
          , mongodb = require('mongodb')
          , assert = require('assert');
const q = require('q');
          
const url = 'mongodb://localhost:27017/foodsack';

class IngredientOps {
  getIngredients()
  {
    var deferred = q.defer();
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var collection = db.collection('ingredients');

      collection.find().toArray(function(err,ingredients){
        console.log(ingredients);
        deferred.resolve(ingredients);
      });

      db.close();
    });
    
    return deferred.promise;
  }
  
  insertIngredient(ingredient)
  {
    var deferred = q.defer();
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var collection = db.collection('ingredients');

      collection.insertOne(ingredient, function(err, result){
        deferred.resolve(result);
      })

      db.close();
    });
    
    return deferred.promise;
  }
  
  deleteIngredient(id)
  {
    var deferred = q.defer();
    
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var collection = db.collection('ingredients');

      collection.deleteOne({ "_id" : new mongodb.ObjectID(id)},function(err, results){
        console.log("deleted " + results);
        deferred.resolve(results);
      })

      db.close();
    });
    
    return deferred.promise;
  }
  
}

module.exports = new IngredientOps();