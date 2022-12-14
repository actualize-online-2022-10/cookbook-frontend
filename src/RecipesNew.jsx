export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRecipe(params);
    event.target.reset();
  };

  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
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
