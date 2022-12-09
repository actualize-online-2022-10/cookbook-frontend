export function RecipesIndex(props) {
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
