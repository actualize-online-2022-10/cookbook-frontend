import axios from "axios";
import { useState } from "react";

export function RecipesNew() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateRecipe(params);
    event.target.reset();
  };

  const handleCreateRecipe = (params) => {
    axios
      .post("http://localhost:3000/recipes.json", params)
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" className="form-control" type="text" />
        </div>
        <div>
          Chef: <input name="chef" className="form-control" type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" className="form-control" type="text" />
        </div>
        <div>
          Directions: <input name="directions" className="form-control" type="text" />
        </div>
        <div>
          Prep Time: <input name="prep_time" className="form-control" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create Recipe
        </button>
      </form>
    </div>
  );
}
