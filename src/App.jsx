import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { RecipesNew } from "./RecipesNew";
import { RecipesShowPage } from "./RecipesShowPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes/new" element={<RecipesNew />} />
          <Route path="/recipes/:id" element={<RecipesShowPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
