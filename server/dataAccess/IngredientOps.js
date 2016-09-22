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
      var collection = db.collection('ingredients');

      collection.find().toArray(function(err,ingredients){
        if(err)
        {
          console.log("Error in IngredientOps,GetIngredients:");
          console.log(err);
        }

        db.close();
        deferred.resolve(ingredients);
      });


    });

    return deferred.promise;
  }

  insertIngredient(ingredient)
  {
    var deferred = q.defer();

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var collection = db.collection('ingredients');

        collection.insertOne(ingredient, function(err, result){

          if(err)
          {
            console.log("Error in IngredientOps,InsertIngredients:");
            console.log(err);
          }
        db.close();
        deferred.resolve(ingredient);
      })

    });

    return deferred.promise;
  }

  deleteIngredient(id)
  {
    var deferred = q.defer();

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      var collection = db.collection('ingredients');

      collection.deleteOne({ "_id" : new mongodb.ObjectID(id)},function(err, results){

        if(err)
        {
          console.log("Error in IngredientOps,DeleteIngredients:");
          console.log(err);
        }

        db.close();
        deferred.resolve(results);
      })

    });

    return deferred.promise;
  }

}

module.exports = new IngredientOps();
