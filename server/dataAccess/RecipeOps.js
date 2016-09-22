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
      var collection = db.collection('recipes');

      collection.find().toArray(function(err,recipes){

        if(err)
        {
          console.log("Error in RecipeOps,GetRecipes:");
          console.log(err);
        }

        db.close();
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
      var collection = db.collection('recipes');

      collection.insertOne(recipe, function(err, result){

        if(err)
        {
          console.log("Error in RecipeOps,InsertRecipes:");
          console.log(err);
        }

        db.close();
        deferred.resolve(recipe);
      })


    });

    return deferred.promise;
  }

  updateRecipe(recipe)
  {
    var deferred = q.defer();

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      var collection = db.collection('recipes');
      recipe._id = new mongodb.ObjectID(recipe._id);

      collection.updateOne({_id: recipe._id},{$set: recipe},function(err, result){

        if(err)
        {
          console.log("Error in RecipeOps,UpdateRecipes:");
          console.log(err);
        }

        db.close();
        deferred.resolve(recipe);
      })


    });

    return deferred.promise;
  }

  deleteRecipe(id)
  {
    var deferred = q.defer();

    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('recipes');

      collection.deleteOne({ "_id" : new mongodb.ObjectID(id)},function(err, results){

        if(err)
        {
          console.log("Error in RecipeOps,deleteRecipes:");
          console.log(err);
        }

        db.close();
        deferred.resolve(results);
      })

    });

    return deferred.promise;
  }

}

module.exports = new RecipeOps();
