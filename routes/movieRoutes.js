const express = require('express');
const router = express.Router();
const { searchMovies, getAllMovies } = require('../controllers/movieController');

router.get('/', getAllMovies); // ✅ Add this
router.get('/search', searchMovies);

module.exports = router;

