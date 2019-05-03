const merge = require('lodash/merge');

const express = require('express');
const router = express.Router();
const Booking = require("../../models/Booking");

router.post('/', (req, res) => {
  Booking.find({ user_id: req.body.user_id })
    .then(bookings => {
      bookingHash = {};

      bookings.forEach((booking) => {
        bookingHash[booking._id] = booking;
      });
      return res.json(bookingHash);
      }
    )
    .catch(err => res.status(404).json({ nobookingfound: 'No booking found with that ID' }));
});

router.get('/:spot_id', (req, res) => {
  Booking.find({spot_id: req.params.spot_id})
    .then(bookings => {
      bookingHash = {};

      bookings.forEach((booking) => {
        bookingHash[booking._id] = booking;
      });
      return res.json(bookingHash);
    }
    )
    .catch(err => res.status(404).json({ nobookingfound: 'No booking found with that ID' }));
});

router.post('/create', (req, res) => {
  let newBooking = new Booking({
    user_id: req.body.user_id,
    spot_id: req.body.spot_id,
    guest_count: parseInt(req.body.guest_count),
    start_date: new Date(req.body.startDate).setHours(23, 59, 0, 0),
    end_date: new Date(req.body.endDate).setHours(0, 0, 0, 0),
    created_at: new Date()
  });
  console.log(`new booking: ${newBooking}`)
  // console.log(`new booking: ${newBooking}`);
  //check if available for booking
  Booking.find({
    spot_id: newBooking.spot_id,
    start_date: { $lt: newBooking.end_date },
    end_date: { $gt: newBooking.start_date }
  }).then(conflictingBookings => {
    console.log(`conflict booking: ${conflictingBookings}`);
    if (conflictingBookings.length === 0) {
      newBooking
      .save()
      .then(booking => {
        bookingHash = {};
        bookingHash[booking._id] = booking;
        return res.json(bookingHash);
        })
      .catch(err => res.status(404).json({ nobookingcreated: 'Could not create this booking!' }));
    }
    else {
      res.status(404).json({ nobookingcreated: 'Could not create this booking!' });
    }
  }).catch(err => res.status(404).json({ nobookingfound: 'No booking found with that ID' }));
});

router.delete('/:booking_id', (req, res) => {
  Booking.findById(req.params.booking_id)
    .then(booking => {
        booking.remove().then(() => {
          Booking.find()
            .then(bookings => {
              bookingHash = {};

              bookings.forEach((booking) => {
                bookingHash[booking._id] = booking;
              });
              return res.json(bookingHash);
            }
          )}
        );
      }
    )
    .catch(err =>
      res.status(404).json({ nobookingfound: 'No booking found with that ID' })
    );
});

module.exports = router;