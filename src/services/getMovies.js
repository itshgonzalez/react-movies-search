export async function getMovies(movie) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${movie}&type=movie`);
  return await res.json();
}
