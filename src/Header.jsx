import { LogoutLink } from "./Logout";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Cookr
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#recipes-index">
                    All Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipes/new">
                    New Recipe
                  </Link>
                </li>
                {localStorage.jwt === undefined ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
