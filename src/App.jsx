import axios from "axios";
import { useState } from "react";

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#recipes-index">All Recipes</a> | <a href="#recipes-new">New Recipe</a>
      </header>
    </div>
  );
}

function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Chef: <input type="text" />
        </div>
        <button>Create Recipe</button>
      </form>
    </div>
  );
}

function RecipesIndex(props) {
  console.log(props.recipes);
  return (
    <div id="recipes-index">
      <h1>All Recipes</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} alt="" />
          <p>Chef: {recipe.chef}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
      <button onClick={handleIndexRecipes}>Load Recipes</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
