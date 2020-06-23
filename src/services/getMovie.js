export async function getMovie(inputKeywords) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&i=${inputKeywords}`);
  return await res.json();
}
