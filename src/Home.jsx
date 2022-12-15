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
  const [errors, setErrors] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  const handleCreateRecipe = (params) => {
    axios
      .post("http://localhost:3000/recipes.json", params)
      .then((response) => {
        setRecipes([...recipes, response.data]); // recipes.push(response.data)
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  const handleUpdateRecipe = (id, params) => {
    axios
      .patch("http://localhost:3000/recipes/" + id + ".json", params)
      .then((response) => {
        console.log(response.data);
        setIsRecipesShowModalVisible(false);
        setRecipes(
          recipes.map((recipe) => {
            if (recipe.id === id) {
              return response.data;
            } else {
              return recipe;
            }
          })
        );
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const handleDestoryRecipe = (recipe) => {
    axios.delete("http://localhost:3000/recipes/" + recipe.id + ".json").then((response) => {
      setRecipes(recipes.filter((r) => r.id !== recipe.id));
      handleHideRecipe();
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
      <RecipesNew onCreateRecipe={handleCreateRecipe} errors={errors} />
      <RecipesIndex recipes={recipes} onSelectRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowModalVisible} onClose={handleHideRecipe}>
        <RecipesShow recipe={currentRecipe} onUpdateRecipe={handleUpdateRecipe} onDestroyRecipe={handleDestoryRecipe} />
      </Modal>
    </div>
  );
}
