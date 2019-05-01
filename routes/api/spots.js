const express = require('express');
const router = express.Router();

const Image = require('../../models/Image');
const Spot = require('../../models/Spot');

router.get('/', (req, res) => {
  console.log(req.params)
  Spot.find()
  .populate('images')
  .then(spots => {
    spotHash = {};
    spots.forEach((spot, idx) => {
      spotHash[spot._id] = spot;
    });
    return res.json(spotHash);
    }
  )
  .catch(err => res.status(404).json({ nospotfound: 'No Spot found' }));
});

router.get('/:spot_id', (req, res) => {
  Spot.findById(req.params.spot_id)
    .populate('images')
    .then(spot => {
      res.json( { [spot._id]: spot } );
      }
    )
    .catch(err =>
      res.status(404).json({ nospotfound: 'No spot found with that ID' })
    );
});

module.exports = router;