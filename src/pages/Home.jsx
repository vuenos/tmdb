import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <NavLink to="/favorite/movies">Favorite Movies</NavLink>
      </div>
      <h1>Home</h1>
    </div>
  )
}
export {Home};