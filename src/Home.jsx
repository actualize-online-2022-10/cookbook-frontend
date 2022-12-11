import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";

export function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowModalVisible, setIsRecipesShowModalVisible] = useState(false);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = () => {
    setIsRecipesShowModalVisible(true);
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
        <h1>Hello</h1>
        <p>Test!</p>
      </Modal>
    </div>
  );
}
