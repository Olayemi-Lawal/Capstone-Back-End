const axios = require('axios');

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.TMDB_API_KEY }
});

// GET /api/movies/search?query=avengers
exports.searchMovies = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await tmdb.get('/search/movie', { params: { query } });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
};

// GET /api/movies/
exports.getAllMovies = async (req, res) => {
  res.status(200).json({ message: 'This is the getAllMovies route. No movies stored locally yet.' });
};

