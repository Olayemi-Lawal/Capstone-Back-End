import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  title: String,
  posterPath: String,
}, { timestamps: true });

export const Watchlist = mongoose.model('Watchlist', watchlistSchema);
