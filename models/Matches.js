const mongoose = require ('mongoose');

const matchesSchema = new mongoose.Schema ({
  matchDetails: {
    type: Object,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Matches = new mongoose.model ('Matches', matchesSchema);

exports.Matches = Matches;
