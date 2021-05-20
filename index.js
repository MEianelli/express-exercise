const express = require('express');
const app = express();
let { recipes } = require('./data');


const deleteIDMiddleWare = (req,res,next ) => {
  const {id} = req.params
  if(!recipes.some( recipe => recipe.id === +id)){
    return res.status(401).json('recipe not found');
  }
  recipes = recipes.filter( recipe => recipe.id !== +id)
  res.status(200).json(recipes);
}

app.delete('/recipe/:id', deleteIDMiddleWare);

app.listen(3000, () => console.log('Servidor Rodando'));