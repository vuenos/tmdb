import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Header } from "../components";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    const options = {
      headers: {
        accept: 'application/json',
      }
    };

    try {
      const { data, status } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`, options);
      if (status === 200) {
        setIsLoading(true)
        setMovies(data.results)
        setIsLoading(false)
      }
      console.log(status)

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getMovies()
  }, []);


  return (
    <div>
      <Header />
      <h1>Movies</h1>
      <div>
        {isLoading ? "Loading..." : "done"}
        <ul>
          {movies && movies.map((movie, index) => (
            <li key={index}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_title} / {movie.vote_average}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export {Movies};