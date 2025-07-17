const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController'); // ✅ Make sure this path is correct

router.post('/signup', signup); // ✅ signup must be a function
router.post('/login', login);   // ✅ login must be a function

module.exports = router;

