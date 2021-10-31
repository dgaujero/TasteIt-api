import express from 'express';
const router = express.Router();

let recipes = []

router.get('/', (req, res) => {
    console.log(recipes);
    res.send(recipes)
});

router.get('/:id', (req, res) => {

    const {id} = req.params

    const foundRecipe = recipes.find((recipe) => recipe.id == id)

    res.send(foundRecipe)
})

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');

    const recipe = req.body

    recipes.push({...recipe, id: Math.floor(Math.random() * 1000)})

    res.send(`Recipe called ${recipe.name}`)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    recipes = recipes.filter((recipe) => recipe.id !== id)

    res.send(`Recipe called ${id} has been deleted.`)
})

router.patch('/:id', (req, res) => {
    const {id} = req.params

    const {name} = req.body

    console.log(req.body)

    const recipe = recipes.find((recipe) => recipe.id == id);

    if(name){
        recipe.name = name
    }

    res.send(`Recipe has been updated with id: ${id}`)
})

export default router;