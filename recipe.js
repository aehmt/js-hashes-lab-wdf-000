'use strict';

function addIngredient(recipe, name, quantity) {
  recipe[name] = quantity;
  return recipe;
}

function removeIngredient(recipe, name, quantity) {
  delete recipe[name]
  return recipe;
}

function updateIngredient(recipe, name, quantity) {
  recipe[name] = quantity;
  return recipe;
}

function readRecipe(recipe) {
  for (var key in recipe) {
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  } 
}
