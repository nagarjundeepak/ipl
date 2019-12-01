const express = require ('express');
const router = express.Router ();

const {Matches} = require ('../models/Matches');

// Entire Matches
router.get ('/', async (req, res) => {
  try {
    // data from model
    const matches = await Matches.find ();
    res.status (200).json ({
      status: 'Success',
      results: matches.length,
      data: {
        matches,
      },
    });
  } catch (err) {
    res.status (404).json ({
      status: 'fail',
      message: err,
    });
  }
});

// Single movie by ID
router.get ('/:id', async (req, res) => {
  try {
    // data from model
    const match = await Match.findById (req.params.id);
    res.status (200).json ({
      status: 'Success',
      data: match,
    });
  } catch (err) {
    res.status (404).json ({
      status: 'fail',
      message: err,
    });
  }
});

module.exports = router;
