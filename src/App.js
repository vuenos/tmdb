import { Routes,Route } from "react-router-dom";
import { Home, Movies, Movie, FavoriteMovies } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/favorite/movies" element={<FavoriteMovies />} />
      </Routes>
    </>
  );
}

export default App;
