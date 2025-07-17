// const express = require('express');
// const router = express.Router();
// const { getProfile, addFavorite } = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware');

// router.get('/profile', protect, getProfile);
// router.post('/favorites', protect, addFavorite);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});

module.exports = router;

