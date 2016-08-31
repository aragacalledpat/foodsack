class RecipeService {
    getRecipes()
    {
      return [
        {
          id: 1,
          name: "Vegetable Stock test",
          ingredients: [],
          directions: "boil water",
          url:"http://www.google.com"
        },
        {
          id: 2,
          name: "Risotto",
          ingredients: [],
          directions: "chop stuff",
          url:""
        },
        {
          id: 3,
          name: "Mussels Fra Diablo",
          ingredients: [],
          directions: "clean mussels",
          url:""
        },
        {
          id: 4,
          name: "Patatas Bravas",
          ingredients: [],
          directions: "cut potatoes",
          url:""
        },
        {
          id: 5,
          name: "Eggplant Parm",
          ingredients: [],
          directions: "prepare eggplant",
          url:""
        },
        {
          id: 6,
          name: "Hummus",
          ingredients: [],
          directions: "chop garlic",
          url:""
        }
      ]
    }
  }  

module.exports = new RecipeService();