// src/routes/watchlist.routes.ts
import express from 'express';
import { watchlist } from '../models/watchlist';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// ✅ GET /api/watchlist - Fetch user's watchlist
router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.id;
    const list = await Watchlist.find({ userId });
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch watchlist' });
  }
});

// ✅ POST /api/watchlist - Add a movie to watchlist
router.post('/', authenticate, async (req, res) => {
  try {
    const { movieId, title, posterPath } = req.body;
    const userId = req.user.id;

    const existing = await Watchlist.findOne({ userId, movieId });
    if (existing) {
      return res.status(400).json({ message: 'Already in watchlist' });
    }

    const newEntry = new Watchlist({ userId, movieId, title, posterPath });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add to watchlist' });
  }
});

// ✅ DELETE /api/watchlist/:movieId - Remove a movie from watchlist
router.delete('/:movieId', authenticate, async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId } = req.params;

    const deleted = await Watchlist.findOneAndDelete({ userId, movieId });
    if (!deleted) {
      return res.status(404).json({ message: 'Movie not found in watchlist' });
    }

    res.json({ message: 'Removed from watchlist' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove movie' });
  }
});

export default router;

