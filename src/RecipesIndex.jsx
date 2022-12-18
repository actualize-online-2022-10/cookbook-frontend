import { useState } from "react";

export function RecipesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="recipes-index">
      <h1>All Recipes</h1>
      Search recipes:{" "}
      <input
        className="form-control"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      {props.recipes
        .filter((recipe) => recipe.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((recipe) => (
          <div key={recipe.id} className="recipes">
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt="" />
            <p>Chef: {recipe.chef}</p>
            <button className="btn btn-primary" onClick={() => props.onSelectRecipe(recipe)}>
              More Info
            </button>
          </div>
        ))}
    </div>
  );
}
