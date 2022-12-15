export function RecipesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRecipe(props.recipe.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyRecipe(props.recipe);
  };

  return (
    <div>
      <h2>{props.recipe.title}</h2>
      <p>Chef: {props.recipe.chef}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Directions: {props.recipe.directions}</p>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.recipe.title} name="title" className="form-control" type="text" />
        </div>
        <div>
          Chef: <input defaultValue={props.recipe.chef} name="chef" className="form-control" type="text" />
        </div>
        <div>
          Ingredients:{" "}
          <input defaultValue={props.recipe.ingredients} name="ingredients" className="form-control" type="text" />
        </div>
        <div>
          Directions:{" "}
          <input defaultValue={props.recipe.directions} name="directions" className="form-control" type="text" />
        </div>
        <div>
          Prep Time:{" "}
          <input defaultValue={props.recipe.prep_time} name="prep_time" className="form-control" type="text" />
        </div>
        <div>
          Image Url:{" "}
          <input defaultValue={props.recipe.image_url} name="image_url" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Edit Recipe
        </button>
      </form>
      <button className="btn btn-danger mt-3" onClick={handleClick}>
        Delete Recipe
      </button>
    </div>
  );
}
