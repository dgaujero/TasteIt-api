import express from 'express';
import recipesRoutes from './routes/recipes.js';

const app = express();

const PORT = 5000;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use('/recipes', recipesRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })