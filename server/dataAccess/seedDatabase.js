const IngredientOps = require('./IngredientOps');

process.argv.forEach(function (val, index, array) {
  if(index == 1 || index == 0)
{
  return;
}

  fn(val);
});

function fn(ingredient)
{
  var ingredientObj = {"name": ingredient}
  IngredientOps.insertIngredient(ingredientObj).then(function(result){
    console.log("added ingredient: " + ingredient);
  })
}
