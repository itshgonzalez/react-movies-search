const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}`;

export async function getMovies(movieId, filters, type = '') {
    const res = await fetch(`${API_URL}&${filters}=${movieId}${type}`);
    return await res.json();
}
