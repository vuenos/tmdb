
const FavoriteMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg5ZDVhZDFiNTgxNDI2N2RlMmM4ODk4OTgyMjZlZiIsInN1YiI6IjYyYzEzZmVlYTY3MjU0MGE5ODY3MDQzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QU2qNlcG3Wofy101T3aDlk3LQsDE8PcOfN0uxs6bo6I'
    }
  };

  fetch('https://api.themoviedb.org/3/account/13009637/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div>
      <h1>FavoriteMovies</h1>
    </div>
  )
}
export {FavoriteMovies};