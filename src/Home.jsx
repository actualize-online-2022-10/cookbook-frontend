import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";

export function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowModalVisible, setIsRecipesShowModalVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = (recipe) => {
    setIsRecipesShowModalVisible(true);
    setCurrentRecipe(recipe);
    console.log(recipe);
  };

  const handleHideRecipe = () => {
    setIsRecipesShowModalVisible(false);
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} onSelectRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowModalVisible} onClose={handleHideRecipe}>
        <h2>{currentRecipe.title}</h2>
        <p>Chef: {currentRecipe.chef}</p>
        <p>Ingredients: {currentRecipe.ingredients}</p>
        <p>Directions: {currentRecipe.directions}</p>
      </Modal>
    </div>
  );
}
