import { RECEIVE_BOOKINGS } from '../actions/bookings_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings.data;
    default:
      return state;
  }
};

export default BookingsReducer;