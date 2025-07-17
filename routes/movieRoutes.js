const express = require('express');
const router = express.Router();
const { searchMovies } = require('../controllers/movieController');

router.get('/search', searchMovies);

module.exports = router;
