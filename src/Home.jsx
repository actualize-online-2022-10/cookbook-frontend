import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { RecipesShow } from "./RecipesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";

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
    <div className="container">
      <Login />
      <Signup />
      <RecipesNew />
      <RecipesIndex recipes={recipes} onSelectRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowModalVisible} onClose={handleHideRecipe}>
        <RecipesShow recipe={currentRecipe} />
      </Modal>
    </div>
  );
}
