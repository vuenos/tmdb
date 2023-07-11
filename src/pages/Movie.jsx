import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const getMovie = async () => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_APIKEY
      }
    }
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US'`, options)
      setMovie(data);
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getMovie()
  }, []);


  return (
    <div>
      <h1>{movie.original_title} {params.movieId}</h1>
      <div>
        <div><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width="200" alt={movie.original_title} /></div>
        {movie.overview}
      </div>
    </div>
  )
}
export {Movie};