import { combineReducers } from 'redux';
import spots from './spots_reducer';
import bookings from './bookings_reducer';

const EntitiesReducer = combineReducers({
  spots,
  bookings,
});

export default EntitiesReducer;