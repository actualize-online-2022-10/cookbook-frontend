export function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form>
        <div>
          Title: <input className="form-control" type="text" />
        </div>
        <div>
          Chef: <input className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3">Create Recipe</button>
      </form>
    </div>
  );
}
