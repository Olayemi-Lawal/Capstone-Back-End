const axios = require('axios');

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.TMDB_API_KEY }
});

exports.searchMovies = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await tmdb.get('/search/movie', { params: { query } });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
};
