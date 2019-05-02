import * as APIUtil from '../util/bookings_api_util';
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const fetchUserBookings = user_id => dispatch => {
  return APIUtil.fetchUserBookings(user_id)
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => console.log(err))
};

export const fetchSpotBookings = spot_id => dispatch => {
  return APIUtil.fetchSpotBookings(spot_id)
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => console.log(err))
};

export const createBooking = data => dispatch => {
  return APIUtil.createBooking(data)
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => console.log(err))
};

export const deleteBooking = id => dispatch => {
  return APIUtil.deleteBooking(id)
    .then(bookings => dispatch(receiveBookings(bookings)))
    .catch(err => console.log(err))
};