export async function getMovie(movieId) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&i=${movieId}`);
  return await res.json();
}
