export async function getMovies(inputKeywords) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${inputKeywords}&type=movie`);
  return await res.json();
}
