const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch profile' });
  }
};

exports.addFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.favorites.push(req.body);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: 'Failed to save favorite' });
  }
};
