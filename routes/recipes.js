import express from 'express';
const router = express.Router();

const recipes = [
    {
      id: 1,
      name: "Chicken Cacciatore",
      description: "Authentic Chicken Cacciatore is an Italian classic, and you’ll never get a more succulent home cooked meal than this recipe! Easy to make and loved by the entire family, Cacciatore aromas fill your entire house with comfort and warmth as it cooks itself on the stove or in the oven!",
      datePublished: "2021-10-11",
      ingredients: [
          "chicken",
          "tomato",
          "bell pepper",
          "onion",
          "mushroom",
          "garlic",
          "white wine"
      ],
      servingSize: 4,
      prepTime: "1 hour",
      cookTime: "8 hours",
      instruction: [
          "Season chicken with salt and pepper.",
          "Heat 2 tablespoons oil in a heavy cast iron skillet. Sear chicken on both sides until golden, about 3-4 minutes each side. Remove from skillet and set aside.",
          "Add remaining oil to the pan. Sauté the onion until transparent, about 3-4 minutes. Add in garlic and cook until fragrant, about 30 seconds. Add the peppers, carrot, mushrooms and herbs; cook for 5 minutes until vegetables begin to soften."
      ]
    },
    {
      id: 2,
      name: "Beef Stew",
      description: "This classic stick-to-your-ribs stew is the ideal project for a chilly weekend. Beef, onion, carrots, potatoes and red wine come together in cozy harmony. If you are feeding a crowd, good news: It doubles (or triples) beautifully.",
      datePublished: "2021-10-11",
      ingredients: [
          "chicken",
          "tomato",
          "bell pepper",
          "onion",
          "mushroom",
          "garlic",
          "white wine"
      ],
      servingSize: 4,
      prepTime: "1 hour",
      cookTime: "8 hours",
      instruction: [
          "Season chicken with salt and pepper.",
          "Heat 2 tablespoons oil in a heavy cast iron skillet. Sear chicken on both sides until golden, about 3-4 minutes each side. Remove from skillet and set aside.",
          "Add remaining oil to the pan. Sauté the onion until transparent, about 3-4 minutes. Add in garlic and cook until fragrant, about 30 seconds. Add the peppers, carrot, mushrooms and herbs; cook for 5 minutes until vegetables begin to soften."
      ]
    }
  ]

router.get('/', (req, res) => {
    console.log(recipes);
    res.send(recipes)
});

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');

    const recipe = req.body

    recipes.push(recipe)

    res.send(`Recipe called ${recipe.name}`)
})

export default router;